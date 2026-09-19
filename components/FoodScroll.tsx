'use client';

import React, { useEffect, useRef, useState, useCallback } from 'react';
import { useMotionValue, useReducedMotion } from 'framer-motion';
import FoodTextOverlays from './FoodTextOverlays';

const TOTAL_FRAMES = 40;
const CONCURRENT_DOWNLOADS = 8;

export default function FoodScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<(HTMLImageElement | null)[]>(new Array(TOTAL_FRAMES).fill(null));
  const currentFrameRef = useRef<number>(0);
  const rafIdRef = useRef<number | null>(null);
  const isMountedRef = useRef<boolean>(true);

  const [isFirstFrameLoaded, setIsFirstFrameLoaded] = useState<boolean>(false);
  const [loadPercent, setLoadPercent] = useState<number>(0);

  const shouldReduceMotion = useReducedMotion();
  const scrollProgress = useMotionValue(0);

  // Render frame onto canvas with full-width & full-height COVER fit
  const drawFrame = useCallback((index: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    // Find requested frame or fallback to nearest loaded frame
    let img = imagesRef.current[index];
    if (!img || !img.complete || img.naturalWidth === 0) {
      // Search backwards first to preserve natural animation progression
      for (let i = index - 1; i >= 0; i--) {
        if (imagesRef.current[i]?.complete && imagesRef.current[i]!.naturalWidth > 0) {
          img = imagesRef.current[i];
          break;
        }
      }
      // Only search forward within a tight window (up to 2 frames ahead) if at start and no backwards frame
      if (!img) {
        for (let i = index + 1; i < Math.min(index + 3, TOTAL_FRAMES); i++) {
          if (imagesRef.current[i]?.complete && imagesRef.current[i]!.naturalWidth > 0) {
            img = imagesRef.current[i];
            break;
          }
        }
      }
    }

    if (!img || !img.complete || img.naturalWidth === 0) return;

    const width = canvas.width;
    const height = canvas.height;

    // Fill warm cream base
    ctx.fillStyle = '#FFFDF5';
    ctx.fillRect(0, 0, width, height);

    const imgWidth = img.naturalWidth;
    const imgHeight = img.naturalHeight;

    // COVER aspect ratio: full width & height coverage with ZERO empty space on left or right
    const hRatio = width / imgWidth;
    const vRatio = height / imgHeight;
    const ratio = Math.max(hRatio, vRatio);

    const drawWidth = Math.round(imgWidth * ratio);
    const drawHeight = Math.round(imgHeight * ratio);
    const centerShiftX = Math.round((width - drawWidth) / 2);
    const centerShiftY = Math.round((height - drawHeight) / 2);

    ctx.drawImage(img, 0, 0, imgWidth, imgHeight, centerShiftX, centerShiftY, drawWidth, drawHeight);
  }, []);

  const requestRender = useCallback(() => {
    if (rafIdRef.current !== null) {
      cancelAnimationFrame(rafIdRef.current);
    }
    rafIdRef.current = requestAnimationFrame(() => {
      drawFrame(currentFrameRef.current);
    });
  }, [drawFrame]);

  // Adjust canvas resolution for window size and device pixel ratio (edge-to-edge)
  const updateCanvasSize = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const dpr = Math.min(typeof window !== 'undefined' ? window.devicePixelRatio || 1 : 1, 2);
    // Use window.innerWidth and window.innerHeight for true full-bleed coverage
    const targetWidth = Math.floor(window.innerWidth * dpr);
    const targetHeight = Math.floor(window.innerHeight * dpr);

    if (canvas.width !== targetWidth || canvas.height !== targetHeight) {
      canvas.width = targetWidth;
      canvas.height = targetHeight;
      requestRender();
    }
  }, [requestRender]);

  // Fast Concurrent Image Preloader for 40 High-Quality Frames
  useEffect(() => {
    isMountedRef.current = true;
    let loadedCount = 0;

    const loadSingleImage = (index: number): Promise<void> => {
      return new Promise((resolve) => {
        if (imagesRef.current[index]?.complete) {
          return resolve();
        }

        const pad = String(index + 1).padStart(3, '0');
        const img = new Image();
        img.src = `/images/food/ezgif-frame-${pad}.jpg`;

        img.onload = () => {
          if (!isMountedRef.current) return resolve();
          imagesRef.current[index] = img;
          loadedCount++;
          setLoadPercent(Math.round((loadedCount / TOTAL_FRAMES) * 100));

          if (index === 0) {
            setIsFirstFrameLoaded(true);
            requestRender();
          } else if (index === currentFrameRef.current) {
            requestRender();
          }
          resolve();
        };

        img.onerror = () => {
          const fallback = new Image();
          fallback.src = `/images/food/${index + 1}.jpg`;
          fallback.onload = () => {
            if (!isMountedRef.current) return resolve();
            imagesRef.current[index] = fallback;
            loadedCount++;
            setLoadPercent(Math.round((loadedCount / TOTAL_FRAMES) * 100));
            if (index === 0) {
              setIsFirstFrameLoaded(true);
              requestRender();
            } else if (index === currentFrameRef.current) {
              requestRender();
            }
            resolve();
          };
          fallback.onerror = () => resolve();
        };
      });
    };

    // Load Frame 001 and Frame 040 immediately
    loadSingleImage(0);
    loadSingleImage(TOTAL_FRAMES - 1);

    // Concurrent pool loader for remaining frames 002 to 039
    const loadAllFrames = async () => {
      const queue: number[] = [];
      for (let i = 1; i < TOTAL_FRAMES - 1; i++) {
        queue.push(i);
      }

      const workers = Array.from({ length: CONCURRENT_DOWNLOADS }, async () => {
        while (queue.length > 0) {
          if (!isMountedRef.current) break;
          const nextIndex = queue.shift();
          if (nextIndex !== undefined) {
            await loadSingleImage(nextIndex);
          }
        }
      });

      await Promise.all(workers);
    };

    loadAllFrames();

    return () => {
      isMountedRef.current = false;
    };
  }, [requestRender]);

  // Setup canvas size and window resize listener
  useEffect(() => {
    updateCanvasSize();
    const handleResize = () => {
      updateCanvasSize();
    };
    window.addEventListener('resize', handleResize, { passive: true });
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [updateCanvasSize]);

  // Direct, Bulletproof Scroll Engine
  useEffect(() => {
    if (shouldReduceMotion) {
      currentFrameRef.current = TOTAL_FRAMES - 1;
      requestRender();
      return;
    }

    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const scrollableDist = containerRef.current.offsetHeight - window.innerHeight;
      if (scrollableDist <= 0) return;

      const scrolled = -rect.top;
      const progress = Math.min(1, Math.max(0, scrolled / scrollableDist));

      scrollProgress.set(progress);

      const targetIndex = Math.min(
        TOTAL_FRAMES - 1,
        Math.max(0, Math.floor(progress * (TOTAL_FRAMES - 0.001)))
      );

      if (targetIndex !== currentFrameRef.current) {
        currentFrameRef.current = targetIndex;
        requestRender();
      }
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafIdRef.current !== null) {
        cancelAnimationFrame(rafIdRef.current);
      }
    };
  }, [shouldReduceMotion, scrollProgress, requestRender]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[500vh] bg-warm-white"
      id="hero-scroll"
    >
      {/* Sticky Viewport: Glued to top of screen for the entire 500vh, full width edge-to-edge */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center z-10">
        {/* Full-bleed HTML5 Canvas occupying 100% width and height */}
        <canvas
          ref={canvasRef}
          style={{ width: '100%', height: '100%', display: 'block' }}
          className={`absolute inset-0 w-full h-full block transition-opacity duration-300 ${
            isFirstFrameLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          aria-label="Spice Royale authentic South Indian pure vegetarian culinary reveal animation"
          role="img"
        />

        {/* Ambient Warm Lighting Vignette across full width */}
        <div className="pointer-events-none absolute inset-0 bg-radial-gradient from-transparent via-transparent to-warm-white/30" />

        {/* Top & Bottom Soft Seamless Fade Gradients */}
        <div className="pointer-events-none absolute top-0 inset-x-0 h-28 bg-gradient-to-b from-warm-white/80 via-warm-white/40 to-transparent" />
        <div className="pointer-events-none absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-warm-white/90 via-warm-white/60 to-transparent" />

        {/* Loading Progress Indicator (Hides when 100%) */}
        {loadPercent < 100 && (
          <div className="pointer-events-none absolute top-20 sm:top-24 right-4 sm:right-8 md:right-12 z-20 flex items-center gap-2 px-3 py-1.5 rounded-full bg-cream/80 backdrop-blur-md border border-restaurant-green/20 text-xs text-deep-green shadow-sm">
            <span className="w-2 h-2 rounded-full bg-golden-yellow animate-ping" />
            <span className="font-mono text-[11px] font-semibold">
              Loading Feast {loadPercent}%
            </span>
          </div>
        )}


        {/* Synchronized Text Overlays */}
        <FoodTextOverlays scrollYProgress={scrollProgress} />
      </div>
    </div>
  );
}
