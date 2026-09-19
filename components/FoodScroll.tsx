'use client';

import React, { useEffect, useRef, useState, useCallback } from 'react';
import { useMotionValue, useReducedMotion } from 'framer-motion';
import FoodTextOverlays from './FoodTextOverlays';

const TOTAL_FRAMES = 40;
const CONCURRENT_DOWNLOADS = 4;

export default function FoodScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<(HTMLImageElement | null)[]>(new Array(TOTAL_FRAMES).fill(null));
  const currentFrameRef = useRef<number>(0);
  const isMountedRef = useRef<boolean>(true);
  const rafPendingRef = useRef<boolean>(false);
  const layoutMetricsRef = useRef({ offsetTop: 0, scrollableDist: 1 });

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
      // Only search forward within a tight window (up to 2 frames ahead) if at start
      if (!img) {
        for (let i = index + 1; i < Math.min(index + 3, TOTAL_FRAMES); i++) {
          if (imagesRef.current[i]?.complete && imagesRef.current[i]!.naturalWidth > 0) {
            img = imagesRef.current[i];
            break;
          }
        }
      }
    }

    if (!img || !img.complete || img.naturalWidth === 0) {
      ctx.fillStyle = '#FFFDF5';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      return;
    }

    const width = canvas.width;
    const height = canvas.height;
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

  // Frame-locked render loop using RAF throttling
  const requestRender = useCallback(() => {
    if (rafPendingRef.current) return;
    rafPendingRef.current = true;
    requestAnimationFrame(() => {
      rafPendingRef.current = false;
      drawFrame(currentFrameRef.current);
    });
  }, [drawFrame]);

  // Adjust canvas resolution with high performance DPR cap (max 1.5)
  const updateCanvasSize = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const dpr = Math.min(typeof window !== 'undefined' ? window.devicePixelRatio || 1 : 1, 1.5);
    const targetWidth = Math.floor(window.innerWidth * dpr);
    const targetHeight = Math.floor(window.innerHeight * dpr);

    if (canvas.width !== targetWidth || canvas.height !== targetHeight) {
      canvas.width = targetWidth;
      canvas.height = targetHeight;
      requestRender();
    }
  }, [requestRender]);

  // Cache layout metrics to avoid calling getBoundingClientRect() during scroll
  const updateLayoutMetrics = useCallback(() => {
    if (!containerRef.current) return;
    const offsetTop = containerRef.current.offsetTop;
    const scrollableDist = Math.max(1, containerRef.current.offsetHeight - window.innerHeight);
    layoutMetricsRef.current = { offsetTop, scrollableDist };
  }, []);

  // Lightning-fast lightweight WebP Preloader with Async GPU Decode
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
        img.src = `/images/food/ezgif-frame-${pad}.webp`;

        img.onload = async () => {
          if ('decode' in img) {
            try {
              await img.decode();
            } catch {
              // Ignore decode fallback
            }
          }
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
          // Fallback to optimized progressive JPEG
          const fallback = new Image();
          fallback.src = `/images/food/ezgif-frame-${pad}.jpg`;
          fallback.onload = async () => {
            if ('decode' in fallback) {
              try {
                await fallback.decode();
              } catch {
                // Ignore
              }
            }
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

    // 1. Prioritize immediate frame 0 for instant visual display
    loadSingleImage(0).then(() => {
      if (!isMountedRef.current) return;
      // 2. Sequential worker pool for remaining frames 1 to 39
      const queue: number[] = [];
      for (let i = 1; i < TOTAL_FRAMES; i++) {
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

      Promise.all(workers);
    });

    return () => {
      isMountedRef.current = false;
    };
  }, [requestRender]);

  // Setup canvas size, layout metrics, and window resize listener
  useEffect(() => {
    updateCanvasSize();
    updateLayoutMetrics();

    const handleResize = () => {
      updateCanvasSize();
      updateLayoutMetrics();
    };

    window.addEventListener('resize', handleResize, { passive: true });
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [updateCanvasSize, updateLayoutMetrics]);

  // Zero-Reflow Native Passive Scroll Listener
  useEffect(() => {
    if (shouldReduceMotion) {
      currentFrameRef.current = TOTAL_FRAMES - 1;
      requestRender();
      return;
    }

    const handleScroll = () => {
      const { offsetTop, scrollableDist } = layoutMetricsRef.current;
      const scrolled = window.scrollY - offsetTop;
      const progress = Math.min(1, Math.max(0, scrolled / scrollableDist));

      // Only dispatch motion value when hero text is transitioning to prevent unnecessary re-renders
      if (progress <= 0.12 || Math.abs(scrollProgress.get() - progress) > 0.04) {
        scrollProgress.set(progress);
      }

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
