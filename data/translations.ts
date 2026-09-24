export type Language = 'en' | 'ta';

export interface Translations {
  [key: string]: {
    en: string;
    ta: string;
  };
}

export const TRANSLATIONS: Translations = {
  // Navigation
  'nav.home': {
    en: 'Home',
    ta: 'முகப்பு',
  },
  'nav.about': {
    en: 'About',
    ta: 'எங்களை பற்றி',
  },
  'nav.menu': {
    en: 'Menu',
    ta: 'மெனு',
  },
  'nav.gallery': {
    en: 'Gallery',
    ta: 'படத்தொகுப்பு',
  },
  'nav.contact': {
    en: 'Contact',
    ta: 'தொடர்புக்கு',
  },
  'nav.enquiry': {
    en: 'Enquiry',
    ta: 'விசாரிப்பு',
  },
  'nav.order': {
    en: 'Order',
    ta: 'ஆர்டர்',
  },
  'nav.orderOnline': {
    en: 'Order Online',
    ta: 'ஆன்லைன் ஆர்டர்',
  },
  'nav.reserveTable': {
    en: 'Reserve Table',
    ta: 'மேஜை முன்பதிவு',
  },
  'nav.call': {
    en: 'Call Restaurant',
    ta: 'அழைக்க',
  },
  'nav.pureVegBadge': {
    en: 'Pure Vegetarian',
    ta: 'தூய சைவ உணவகம்',
  },

  // Hero Section
  'hero.badge': {
    en: 'Pure Vegetarian Dining Sanctuary',
    ta: 'தூய சைவ உணவு ஆலயம்',
  },
  'hero.subtitle': {
    en: 'Authentic flavours. Freshly crafted. Beautifully served.',
    ta: 'பாரம்பரிய சுவை. புத்தம் புதிய தயாரிப்பு. அன்பான உபசரிப்பு.',
  },
  'hero.exploreMenu': {
    en: 'Explore Our Menu',
    ta: 'மெனுவை பார்க்க',
  },
  'hero.reserveTable': {
    en: 'Reserve A Table',
    ta: 'மேஜை முன்பதிவு',
  },

  // Highlight Bar
  'highlight.pureVegTitle': {
    en: '100% Pure Vegetarian',
    ta: '100% தூய சைவ உணவு',
  },
  'highlight.pureVegDesc': {
    en: 'Zero meat, zero egg, sanctified kitchen standards.',
    ta: 'முட்டை, அசைவம் இல்லாத தூய சமையலறை தரம்.',
  },
  'highlight.freshGrindTitle': {
    en: 'Daily Fresh Grinding',
    ta: 'தினசரி புத்தம் புதிய அரைப்பு',
  },
  'highlight.freshGrindDesc': {
    en: 'Stone wet-ground batched batters and hourly churned chutneys.',
    ta: 'பாரம்பரிய ஆட்டுக்கல் அரைப்பு மற்றும் உடனுக்குடன் அரைக்கப்படும் சட்னிகள்.',
  },
  'highlight.recipesTitle': {
    en: 'Centuries-Old Recipes',
    ta: 'பாரம்பரிய சமையல் முறைகள்',
  },
  'highlight.recipesDesc': {
    en: 'Authentic temple-style sambars and hand-cast iron dosas.',
    ta: 'கோவில் சுவை சாம்பார் மற்றும் கைவண்ண இரும்புக்கல் தோசைகள்.',
  },

  // About Section (Home)
  'about.badge': {
    en: 'Our Heritage',
    ta: 'எங்கள் பாரம்பரியம்',
  },
  'about.title1': {
    en: 'CRAFTED WITH',
    ta: 'பாரம்பரியத்துடன்',
  },
  'about.title2': {
    en: 'TRADITION',
    ta: 'உருவானது',
  },
  'about.desc': {
    en: 'Sre New Aananda Bavan brings authentic South Indian vegetarian recipes together with pure tradition and care. Every dish honours centuries of sacred temple cooking traditions, celebrating indigenous grains, fragrant herbs, and freshly hand-pounded spices.',
    ta: 'ஸ்ரீ நியூ ஆனந்த பவன் பாரம்பரிய தென்னிந்திய சைவ சமையல் முறைகளை அன்புடனும் நேர்த்தியுடனும் வழங்குகிறது. பாரம்பரிய தானியங்கள், நறுமண மூலிகைகள் மற்றும் கைவண்ண மசாலாக்களுடன் ஒவ்வொரு உணவும் தயாரிக்கப்படுகிறது.',
  },
  'about.feat1.title': {
    en: 'Traditional Recipes',
    ta: 'பாரம்பரிய செய்முறைகள்',
  },
  'about.feat1.desc': {
    en: 'Strictly preserved family recipes without shortcuts.',
    ta: 'எந்தவித சமரசமும் இல்லாத தலைமுறை பாரம்பரிய செய்முறைகள்.',
  },
  'about.feat2.title': {
    en: 'Fresh Daily Preparation',
    ta: 'தினசரி புத்தம் புதிய தயாரிப்பு',
  },
  'about.feat2.desc': {
    en: 'Ground fresh every morning with pure water and rock salt.',
    ta: 'தூய தண்ணீர் மற்றும் கல் உப்புடன் தினமும் காலை புதிதாக அரைக்கப்படுகிறது.',
  },
  'about.feat3.title': {
    en: 'Pure Vegetarian Cooking',
    ta: 'தூய சைவ சமையல்',
  },
  'about.feat3.desc': {
    en: 'A serene dining sanctuary dedicated to vegetarian food.',
    ta: 'முழுக்க முழுக்க தூய சைவ உணவுகளுக்கென அர்ப்பணிக்கப்பட்ட உணவகம்.',
  },
  'about.feat4.title': {
    en: 'Warm Hospitality',
    ta: 'அன்பான உபசரிப்பு',
  },
  'about.feat4.desc': {
    en: 'Welcoming every guest with customary grace and respect.',
    ta: 'ஒவ்வொரு விருந்தினரையும் இன்முகத்துடனும் மரியாதையுடனும் வரவேற்கிறோம்.',
  },
  'about.cta1': {
    en: 'Discover Our Heritage Story',
    ta: 'எங்கள் பாரம்பரிய கதையை அறிய',
  },
  'about.cta2': {
    en: 'Explore Menu',
    ta: 'மெனுவை பார்க்க',
  },
  'about.floatingBadge': {
    en: 'Heritage Gastronomy',
    ta: 'பாரம்பரிய சுவை கலை',
  },
  'about.floatingText': {
    en: 'Natural 12-hour fermentation and heirloom bronze vessels ensure timeless flavour.',
    ta: 'இயற்கை 12-மணி நேர புளிப்பு மற்றும் பாரம்பரிய வெண்கல பாத்திர சமையல்.',
  },

  // Menu Section (Home & Menu Page)
  'menu.badge': {
    en: 'Authentic Culinary Delights',
    ta: 'பாரம்பரிய சமையல் சுவைகள்',
  },
  'menu.title': {
    en: 'OUR SIGNATURE FLAVOURS',
    ta: 'எங்களின் சிறப்பு சுவைகள்',
  },
  'menu.subtitle': {
    en: 'Every dish is a celebration of South Indian vegetarian art. Prepared to order with pure cow ghee, stone-ground batter, and freshly tempered spices.',
    ta: 'ஒவ்வொரு உணவும் தென்னிந்திய சைவ சமையல் கலையின் கொண்டாட்டம். தூய பசு நெய், ஆட்டுக்கல் மாவு மற்றும் நறுமணத் தாளிப்புடன் சுடச்சுட பரிமாறப்படுகிறது.',
  },
  'menu.viewComplete': {
    en: 'Explore Complete Menu & Delicacies',
    ta: 'முழு மெனு மற்றும் சுவைகளை பார்க்க',
  },
  'menu.collapse': {
    en: 'Collapse Inline Menu',
    ta: 'சுருக்குக',
  },
  'menu.previewAll': {
    en: 'Quick Preview All',
    ta: 'அனைத்தையும் விரைவாக பார்க்க',
  },
  'menu.searchPlaceholder': {
    en: 'Search idli, ghee roast, pongal, coffee...',
    ta: 'இட்லி, நெய் ரோஸ்ட், பொங்கல், காபி என தேடுக...',
  },
  'menu.allDishes': {
    en: 'All Delicacies',
    ta: 'அனைத்து உணவுகள்',
  },
  'menu.chefPick': {
    en: "Chef's Pick",
    ta: 'தலைமை சமையல்காரரின் தேர்வு',
  },
  'menu.zeroOil': {
    en: 'Zero Oil',
    ta: 'எண்ணெய் இல்லா உணவு',
  },
  'menu.itemsCount': {
    en: 'items curated',
    ta: 'உணவு வகைகள்',
  },
  'menu.pureVeg': {
    en: 'Pure Veg',
    ta: 'தூய சைவம்',
  },
  'menu.quickOrder': {
    en: 'Order Now',
    ta: 'ஆர்டர் செய்க',
  },
  'menu.added': {
    en: 'Added!',
    ta: 'சேர்க்கப்பட்டது!',
  },
  'menu.viewDetails': {
    en: 'View Details',
    ta: 'விவரங்கள்',
  },
  'menu.close': {
    en: 'Close',
    ta: 'மூடுக',
  },
  'menu.ingredients': {
    en: 'Key Ingredients',
    ta: 'முக்கிய பொருட்கள்',
  },
  'menu.accompaniments': {
    en: 'Served With',
    ta: 'கூட பரிமாறப்படுபவை',
  },
  'menu.preparation': {
    en: 'Artisanal Preparation',
    ta: 'தயாரிப்பு முறை',
  },
  'menu.serving': {
    en: 'Serving Suggestion',
    ta: 'பரிமாறும் முறை',
  },
  'menu.heritage': {
    en: 'Heritage & Tradition',
    ta: 'பாரம்பரியம்',
  },

  // Categories
  'cat.All': {
    en: 'All',
    ta: 'அனைத்தும்',
  },
  'cat.South Indian': {
    en: 'South Indian',
    ta: 'தென்னிந்திய உணவுகள்',
  },
  'cat.Dosa': {
    en: 'Dosa',
    ta: 'தோசை வகைகள்',
  },
  'cat.Breakfast': {
    en: 'Breakfast (7:00 AM – 11:30 AM)',
    ta: 'காலை உணவு (காலை 7.00 - 11.30)',
  },
  'cat.Lunch': {
    en: 'Lunch (11:30 AM – 3:30 PM)',
    ta: 'மதிய உணவு (மதியம் 11.30 - 3.30)',
  },
  'cat.Dinner': {
    en: 'Dinner (3:30 PM – 10:30 PM)',
    ta: 'இரவு உணவு (மாலை 3.30 - இரவு 10.30)',
  },
  'cat.Soup Varieties': {
    en: 'Soup Varieties',
    ta: 'சூப் வகைகள்',
  },
  'cat.Snacks & Crispies': {
    en: 'Snacks & Crispies',
    ta: 'பாப்பட் & சிப்ஸ்',
  },
  'cat.Starters': {
    en: 'Starters',
    ta: 'ஸ்டேட்டர்ஸ்',
  },
  'cat.Semi Starters': {
    en: 'Semi Starters',
    ta: 'செமி ஸ்டேட்டர்ஸ்',
  },
  'cat.Rolls': {
    en: 'Rolls',
    ta: 'ரோல்ஸ்',
  },
  'cat.Thandhoori Varieties': {
    en: 'Tandoori Varieties',
    ta: 'தந்தூரி வெரைட்டி',
  },
  'cat.Indian Breads': {
    en: 'Indian Breads',
    ta: 'இந்தியன் பிரேட்ஸ்',
  },
  'cat.Indian Gravy': {
    en: 'Indian Gravy',
    ta: 'இந்தியன் கிரேவி',
  },
  'cat.Fried Rice': {
    en: 'Fried Rice',
    ta: 'பிரைட் ரைஸ்',
  },
  'cat.Noodles': {
    en: 'Noodles',
    ta: 'நூடுல்ஸ்',
  },
  'cat.Pulao & Biryani': {
    en: 'Pulao & Biryani',
    ta: 'புலாவ் & பிரியாணி',
  },
  'cat.Salad': {
    en: 'Salad',
    ta: 'சாலட்',
  },
  'cat.Raita': {
    en: 'Raita',
    ta: 'ரைத்தா',
  },
  'cat.Hot Beverage': {
    en: 'Hot Beverage',
    ta: 'காபி கவுண்டர்',
  },
  'cat.Cold Beverage & Juices': {
    en: 'Fresh Juices (10:00 AM – 10:30 PM)',
    ta: 'ஜூஸ் கவுண்டர் (காலை 10.00 - இரவு 10.30)',
  },
  'cat.Classic Milkshakes': {
    en: 'Classic Milkshakes',
    ta: 'கிளாசிக் மில்க் ஷேக்ஸ்',
  },
  'cat.Dessert & Ice Cream': {
    en: 'Dessert & Ice Cream',
    ta: 'ஐஸ்கிரீம் / டெசர்ட்',
  },

  // Freshness Section (Home)
  'freshness.badge': {
    en: 'Purity In Motion',
    ta: 'தூய்மையின் சங்கமம்',
  },
  'freshness.title1': {
    en: 'THE SYMPHONY OF',
    ta: 'இயற்கை நறுமணத்துடன்',
  },
  'freshness.title2': {
    en: 'PURE INGREDIENTS',
    ta: 'தூய உணவுப் பொருட்கள்',
  },
  'freshness.desc': {
    en: 'South Indian vegetarian cooking relies on the harmony of nature. Whole spices crackling in golden ghee, fresh curry leaves releasing essential oils, and the delicate comfort of natural food steam.',
    ta: 'தென்னிந்திய சைவ சமையல் இயற்கையின் நல்லிணக்கத்தை அடிப்படையாகக் கொண்டது. பொன்னிற நெய்யில் தாளிக்கும் முழு மசாலாக்கள், நறுமணக் கறிவேப்பிலை மற்றும் இயற்கை நீராவியின் ஆரோக்கிய சமையல்.',
  },
  'freshness.item1.title': {
    en: 'Curry Leaves',
    ta: 'கறிவேப்பிலை',
  },
  'freshness.item1.desc': {
    en: 'Organic Tamil Nadu Groves',
    ta: 'இயற்கை முறையில் விளைவிக்கப்பட்டது',
  },
  'freshness.item2.title': {
    en: 'Coriander & Cumin',
    ta: 'கொத்தமல்லி & சீரகம்',
  },
  'freshness.item2.desc': {
    en: 'Stone Ground Daily',
    ta: 'தினசரி கைப்பட அரைக்கப்படுகிறது',
  },
  'freshness.item3.title': {
    en: 'Coastal Coconut',
    ta: 'கடலோரத் தேங்காய்',
  },
  'freshness.item3.desc': {
    en: 'Grated Fresh Hourly',
    ta: 'மணிக்கு ஒருமுறை புதிதாக துருவப்படுகிறது',
  },
  'freshness.item4.title': {
    en: 'Native Lentils',
    ta: 'நாட்டு உளுந்து',
  },
  'freshness.item4.desc': {
    en: 'De-husked White Urad Dal',
    ta: 'தூய வெள்ளை உளுத்தம் பருப்பு',
  },
  'freshness.item5.title': {
    en: 'Pure Cow Ghee',
    ta: 'தூய பசு நெய்',
  },
  'freshness.item5.desc': {
    en: 'Clarified Farm Churn',
    ta: 'பாரம்பரிய முறையில் காய்ச்சப்பட்ட நெய்',
  },
  'freshness.item6.title': {
    en: 'Natural Steam',
    ta: 'இயற்கை நீராவி',
  },
  'freshness.item6.desc': {
    en: 'Tiered Cloth-Lined Pots',
    ta: 'பாரம்பரிய துணி கட்டிய நீராவி பாத்திரம்',
  },
  'freshness.stamp': {
    en: '100% Sourced Daily',
    ta: '100% தினசரி புதியது',
  },

  // Gallery Section & Page
  'gallery.badge': {
    en: 'Visual Journey',
    ta: 'காட்சி விருந்து',
  },
  'gallery.title': {
    en: 'THE GALLERY OF TASTE',
    ta: 'சுவைகளின் படத்தொகுப்பு',
  },
  'gallery.subtitle': {
    en: 'Immerse in the visual grandeur, modern architecture, and warm dining atmosphere of Sre New Aananda Bavan.',
    ta: 'ஸ்ரீ நியூ ஆனந்த பவனின் பிரம்மாண்ட கட்டடக் கலை, நவீன வசதிகள் மற்றும் அன்பான உணவக சூழலைக் கண்டு ரசியுங்கள்.',
  },
  'gallery.viewFull': {
    en: 'View Full Visual Gallery',
    ta: 'முழு படத்தொகுப்பையும் பார்க்க',
  },
  'gallery.visitTitle': {
    en: 'VISIT AND IMMERSE IN PERSON',
    ta: 'நேரில் வந்து சுவைத்து மகிழுங்கள்',
  },
  'gallery.visitDesc': {
    en: 'Warm golden lighting, brass davarahs, live cast-iron griddles, and peaceful vegetarian hospitality await your arrival.',
    ta: 'அமைதியான சூழல், பாரம்பரிய பித்தளை டம்ளர் காபி, சுடச்சுட தோசைகள் மற்றும் அன்பான உபசரிப்பு உங்களுக்காக காத்திருக்கிறது.',
  },

  // Contact & Reservation Section
  'contact.badge': {
    en: 'Royal Hospitality',
    ta: 'அன்பான உபசரிப்பு',
  },
  'contact.title1': {
    en: 'VISIT SRE NEW',
    ta: 'ஸ்ரீ நியூ',
  },
  'contact.title2': {
    en: 'AANANDA BAVAN',
    ta: 'ஆனந்த பவன்',
  },
  'contact.subtitle': {
    en: 'We warmly welcome you to experience authentic South Indian pure vegetarian hospitality. Reserve your table or walk right in.',
    ta: 'பாரம்பரிய தென்னிந்திய தூய சைவ உபசரிப்பை அனுபவிக்க உங்களை அன்புடன் வரவேற்கிறோம். மேஜை முன்பதிவு செய்யவும் அல்லது நேரடியாக வருகை தரவும்.',
  },
  'contact.subtitleNoRes': {
    en: 'We warmly welcome you to experience authentic South Indian pure vegetarian hospitality. Walk right in with your family and guests.',
    ta: 'பாரம்பரிய தென்னிந்திய தூய சைவ உபசரிப்பை அனுபவிக்க உங்களை அன்புடன் வரவேற்கிறோம். குடும்பத்தோடு வருகை தந்து மகிழுங்கள்.',
  },
  'contact.formTitle': {
    en: 'Table Reservation',
    ta: 'மேஜை முன்பதிவு',
  },
  'contact.name': {
    en: 'Your Full Name',
    ta: 'உங்கள் முழுப் பெயர்',
  },
  'contact.phone': {
    en: 'Phone Number',
    ta: 'தொலைபேசி எண்',
  },
  'contact.guests': {
    en: 'Number of Guests',
    ta: 'விருந்தினர்கள் எண்ணிக்கை',
  },
  'contact.date': {
    en: 'Date of Visit',
    ta: 'வருகை தரும் தேதி',
  },
  'contact.timeSlot': {
    en: 'Preferred Meal Time',
    ta: 'உணவு நேரம்',
  },
  'contact.special': {
    en: 'Special Requests (e.g. Jain / No Garlic / Kids Chair)',
    ta: 'சிறப்பு தேவைகள் (ஜெயின் / பூண்டு இன்றி / குழந்தைகள் நாற்காலி)',
  },
  'contact.submitBtn': {
    en: 'Confirm Table Booking',
    ta: 'மேஜை முன்பதிவை உறுதி செய்க',
  },
  'contact.success': {
    en: 'Table reservation received! Our concierge will WhatsApp you shortly.',
    ta: 'உங்கள் முன்பதிவு பெறப்பட்டது! விரைவில் வாட்ஸ்அப் மூலம் உறுதி செய்யப்படும்.',
  },
  'contact.addressTitle': {
    en: 'Restaurant Address',
    ta: 'உணவக முகவரி',
  },
  'contact.addressText': {
    en: 'Bangalore to Salem Highway, Poosaripatty, Salem - 636305',
    ta: 'பெங்களூர் - சேலம் நெடுஞ்சாலை, பூசாரிப்பட்டி, சேலம் - 636305',
  },
  'contact.hoursTitle': {
    en: 'Service Timings',
    ta: 'இயங்கும் நேரம்',
  },
  'contact.hoursText': {
    en: 'Open All 7 Days: 6:30 AM to 10:45 PM (Breakfast, Lunch & Dinner)',
    ta: 'வாரத்தின் 7 நாட்களும்: காலை 6:30 முதல் இரவு 10:45 வரை',
  },
  'contact.phoneTitle': {
    en: 'Direct Contact',
    ta: 'நேரடி தொடர்பு',
  },
  'contact.whatsApp': {
    en: 'Chat on WhatsApp',
    ta: 'வாட்ஸ்அப்பில் உரையாட',
  },
  'contact.infoTitle': {
    en: 'Restaurant Information',
    ta: 'உணவக தகவல்கள்',
  },
  'contact.pureVeg': {
    en: '100% Pure Veg',
    ta: '100% தூய சைவம்',
  },
  'contact.addressLabel': {
    en: 'Address',
    ta: 'முகவரி',
  },
  'contact.landmark': {
    en: 'Bangalore to Salem Highway (NH 44) · Ample Parking Available',
    ta: 'பெங்களூர் - சேலம் நெடுஞ்சாலை (NH 44) · பார்க்கிங் வசதி உண்டு',
  },
  'contact.phoneLabel': {
    en: 'Telephone',
    ta: 'தொலைபேசி',
  },
  'contact.tableEnq': {
    en: 'Table Enquiries',
    ta: 'முன்பதிவு விசாரிப்பு',
  },
  'contact.diningEnq': {
    en: 'Dining Enquiries',
    ta: 'உணவக விசாரிப்பு',
  },
  'contact.whatsAppLabel': {
    en: 'WhatsApp Direct',
    ta: 'வாட்ஸ்அப்',
  },
  'contact.instantChat': {
    en: 'Instant Chat & Info',
    ta: 'உடனடி தகவல்',
  },
  'contact.operatingHoursLabel': {
    en: 'Operating Hours (All 7 Days)',
    ta: 'இயங்கும் நேரம் (அனைத்து நாட்களும்)',
  },
  'contact.mornTiffin': {
    en: 'Morning Tiffin',
    ta: 'காலை டிபன்',
  },
  'contact.royalLunch': {
    en: 'Royal Lunch',
    ta: 'ராயல் மதிய சாப்பாடு',
  },
  'contact.dinnerTiffin': {
    en: 'Dinner & Tiffin',
    ta: 'மாலை டிபன் & இரவு உணவு',
  },
  'contact.sanctuaryGuarantee': {
    en: 'Strictly 100% vegetarian kitchen with zero non-vegetarian, egg, or seafood preparation permitted on premises.',
    ta: 'முழுக்க முழுக்க 100% தூய சைவ சமையலறை. அசைவ உணவோ, முட்டையோ இங்கு அனுமதிக்கப்படுவதில்லை.',
  },
  'contact.experienceTitle': {
    en: 'Visit Us & Experience the Taste',
    ta: 'நேரில் வந்து சுவைத்து மகிழுங்கள்',
  },
  'contact.experienceSubtitle': {
    en: 'Step into a world of timeless vegetarian hospitality, where every meal is prepared with devotion, authentic spices, and pure cow ghee.',
    ta: 'பக்தி, தூய மசாலாக்கள் மற்றும் தூய பசு நெய்யுடன் சமைக்கப்படும் பாரம்பரிய சைவ உணவை அன்போடு சுவையுங்கள்.',
  },
  'contact.whyVisitTitle': {
    en: 'Why Visit Us?',
    ta: 'ஏன் எங்கள் உணவகம்?',
  },
  'contact.feat1Title': {
    en: 'Fresh & Pure Vegetarian Food',
    ta: 'தூய சைவ ஆரோக்கிய உணவு',
  },
  'contact.feat1Desc': {
    en: 'Daily sourced farm vegetables & stone-ground batter with zero artificial additives.',
    ta: 'தினசரி புதிய காய்கறிகள் மற்றும் ஆட்டுக்கல் மாவு கொண்டு தயாரிக்கப்படுகிறது.',
  },
  'contact.feat2Title': {
    en: 'Traditional South Indian Flavours',
    ta: 'பாரம்பரிய தென்னிந்திய சுவை',
  },
  'contact.feat2Desc': {
    en: 'Heirloom family recipes tempered with pure cow ghee and aromatic curry leaves.',
    ta: 'பாரம்பரிய சமையல் முறை, தூய பசு நெய் மற்றும் நறுமணத் தாளிப்பு.',
  },
  'contact.feat3Title': {
    en: 'Family-Friendly Dining',
    ta: 'குடும்பத்தோடு உணவருந்த சிறந்த இடம்',
  },
  'contact.feat3Desc': {
    en: 'Spacious, warm dining atmosphere and courteous service for all generations.',
    ta: 'அனைத்து தலைமுறையினரும் மகிழ்ச்சியோடு உணவருந்த அன்பான உபசரிப்பு.',
  },
  'contact.feat4Title': {
    en: 'Comfortable A/C Restaurant',
    ta: 'குளிர்சாதன வசதியுடன் அமைதியான சூழல்',
  },
  'contact.feat4Desc': {
    en: 'Serene climate-controlled hall with convenient valet parking on G.S.T. Road.',
    ta: 'நவீன குளிர்சாதன வசதி மற்றும் வேலட் பார்க்கிங் வசதியுடன் கூடிய அமைதியான சூழல்.',
  },
  'contact.reserveTitle': {
    en: 'Contact form',
    ta: 'மேஜை முன்பதிவு',
  },
  'contact.reserveSubtitle': {
    en: 'Experience priority seating and handcrafted dining service.',
    ta: 'முன்னுரிமை இருக்கை மற்றும் தனித்துவமான உபசரிப்பை பெறுங்கள்.',
  },
  'contact.nameLabel': {
    en: 'Full Name',
    ta: 'முழுப் பெயர்',
  },
  'contact.phoneFormLabel': {
    en: 'Contact Number',
    ta: 'தொலைபேசி எண்',
  },
  'contact.emailLabel': {
    en: 'Email',
    ta: 'மின்னஞ்சல்',
  },
  'contact.emailPlaceholder': {
    en: 'e.g. s.venkat@example.com',
    ta: 'எ.கா: s.venkat@example.com',
  },
  'contact.guestsLabel': {
    en: 'Guests',
    ta: 'விருந்தினர்கள்',
  },
  'contact.dateLabel': {
    en: 'Date',
    ta: 'தேதி',
  },
  'contact.sessionLabel': {
    en: 'Session',
    ta: 'உணவு நேரம்',
  },
  'contact.optional': {
    en: 'Optional',
    ta: 'விருப்பத்தேர்வு',
  },
  'contact.selectSession': {
    en: 'Select Session (Optional)',
    ta: 'உணவு நேரத்தை தேர்ந்தெடுக்கவும்',
  },
  'contact.dietaryLabel': {
    en: 'Dietary Notes or Occasion',
    ta: 'உணவு குறிப்புகள் / நிகழ்வு',
  },
  'contact.dietaryPlaceholder': {
    en: 'e.g. Jain preparation / Anniversary / Family gathering',
    ta: 'எ.கா: ஜெயின் உணவு / ஆண்டுவிழா / குடும்ப சந்திப்பு',
  },
  'contact.confirmRequest': {
    en: 'Confirm Table Request',
    ta: 'முன்பதிவு செய்க',
  },
  'contact.recTitle': {
    en: 'Reservation Request Received!',
    ta: 'முன்பதிவு கோரிக்கை பெறப்பட்டது!',
  },
  'contact.recDesc': {
    en: 'Our dining host will confirm your booking via phone and WhatsApp within 15 minutes.',
    ta: 'எங்கள் மேலாளர் 15 நிமிடங்களுக்குள் தொலைபேசி மற்றும் வாட்ஸ்அப் மூலம் உறுதி செய்வார்.',
  },
  'contact.mapsTitle': {
    en: 'Sre New Aananda Bavan Sanctuary',
    ta: 'ஸ்ரீ நியூ ஆனந்த பவன்',
  },
  'contact.mapsDesc': {
    en: 'Conveniently located on the Bangalore to Salem Highway (NH 44) at Poosaripatty, Salem.',
    ta: 'பெங்களூர் - சேலம் தேசிய நெடுஞ்சாலையில் (NH 44) பூசாரிப்பட்டியில் எளிதில் சென்றடையும் வகையில் அமைந்துள்ளது.',
  },
  'contact.directions': {
    en: 'Get Directions on Google Maps',
    ta: 'கூகிள் மேப்ஸில் வழியை பார்க்க',
  },

  // Order Section
  'order.badge': {
    en: 'Hot & Fresh Delivery',
    ta: 'சுடச்சுட நேரடி டெலிவரி',
  },
  'order.title1': {
    en: 'DELIGHT IN FLAVOURS',
    ta: 'இல்லம் தேடி வரும்',
  },
  'order.title2': {
    en: 'AT YOUR DOORSTEP',
    ta: 'சுவையான உணவுகள்',
  },
  'order.desc': {
    en: 'Enjoy authentic hot filter coffee, crisp dosas, and fragrant meals in the comfort of your home. Carefully packed in heat-retaining containers.',
    ta: 'சூடான பில்டர் காபி, மொறுமொறு தோசைகள் மற்றும் தலைவாழை உணவுகளை உங்கள் இல்லத்திலேயே சுவைத்து மகிழுங்கள்.',
  },
  'order.btn': {
    en: 'Order Now on Swiggy / Zomato',
    ta: 'ஆன்லைனில் உடனடியாக ஆர்டர் செய்க',
  },
  'order.directCall': {
    en: 'Call for Direct Takeaway Parcel',
    ta: 'பார்சல் ஆர்டருக்கு அழைக்க',
  },
  'order.takeawayBadge': {
    en: 'Artisanal Takeaway',
    ta: 'சுடச்சுட பார்சல்',
  },
  'order.savourTitle': {
    en: 'SAVOUR AT YOUR CONVENIENCE',
    ta: 'உங்கள் வசதிக்கேற்ப சுவைத்து மகிழுங்கள்',
  },
  'order.savourDesc': {
    en: 'Order our freshly prepared signature South Indian vegetarian delicacies packed in eco-friendly steam-lock containers.',
    ta: 'ஆவிபறக்கும் தென்னிந்திய சைவ உணவுகளை சுற்றுச்சூழலுக்கு உகந்த பாத்திரங்களில் பார்சல் பெற்று மகிழுங்கள்.',
  },
  'order.promise': {
    en: 'Freshly prepared and delivered with care.',
    ta: 'புதிதாக தயாரிக்கப்பட்டு அன்புடன் வழங்கப்படுகிறது.',
  },
  'order.veg100': {
    en: '100% Vegetarian',
    ta: '100% தூய சைவம்',
  },
  'order.veg100Desc': {
    en: 'Strictly meat & egg free',
    ta: 'முட்டை, அசைவம் இல்லாதது',
  },
  'order.freshPrep': {
    en: 'Freshly Prepared',
    ta: 'புதிய தயாரிப்பு',
  },
  'order.freshPrepDesc': {
    en: 'Cooked to order',
    ta: 'ஆர்டருக்கு ஏற்ப உடனுக்குடன்',
  },
  'order.qualityIng': {
    en: 'Quality Ingredients',
    ta: 'உயர்தர பொருட்கள்',
  },
  'order.qualityIngDesc': {
    en: 'Hand-ground spices',
    ta: 'கைப்பட அரைத்த மசாலா',
  },
  'order.madeCare': {
    en: 'Made With Care',
    ta: 'அன்பான உபசரிப்பு',
  },
  'order.madeCareDesc': {
    en: 'Temple-inspired purity',
    ta: 'கோவில் தர தூய்மை',
  },
  'order.addToCart': {
    en: 'Add To Cart',
    ta: 'ஆர்டரில் சேர்க்க',
  },
  'order.viewOrder': {
    en: 'View Order',
    ta: 'ஆர்டரை பார்க்க',
  },
  'order.yourOrder': {
    en: 'Your Pure Veg Order',
    ta: 'உங்கள் சைவ ஆர்டர்',
  },
  'order.orderSubtotal': {
    en: 'Order Subtotal',
    ta: 'மொத்த தொகை',
  },
  'order.simulatePlacement': {
    en: 'Simulate Order Placement',
    ta: 'ஆர்டர் உறுதி செய்க',
  },
  'order.simCompleted': {
    en: 'Order Simulation Completed!',
    ta: 'ஆர்டர் மாதிரி நிறைவுற்றது!',
  },
  'order.cartEmpty': {
    en: 'Your cart is currently empty. Add your favorite South Indian dishes!',
    ta: 'உங்கள் ஆர்டர் பட்டியல் காலியாக உள்ளது. சுவையான உணவுகளை தேர்வு செய்யுங்கள்!',
  },
  'order.notice': {
    en: 'Pure Vegetarian Service Notice: This ordering interface is a client-side experience showcase. No live financial payments or external delivery gateways are connected.',
    ta: 'தூய சைவ சேவை அறிவிப்பு: இந்த ஆர்டர் திரை காட்சி விளக்கத்திற்காக மட்டுமே. கட்டண வசூலிப்பு ஏதும் இணைக்கப்படவில்லை.',
  },

  // Final CTA
  'cta.badge': {
    en: 'The Royal Invitation',
    ta: 'அன்பான அழைப்பு',
  },
  'cta.title1': {
    en: 'EXPERIENCE THE',
    ta: 'சுவையை',
  },
  'cta.title2': {
    en: 'TASTE',
    ta: 'அனுபவியுங்கள்',
  },
  'cta.quote': {
    en: 'Good food is not just served.',
    ta: 'நல்ல உணவு பரிமாறப்படுவது மட்டுமல்ல.',
  },
  'cta.quoteHighlight': {
    en: 'It is remembered.',
    ta: 'என்றும் நினைவில் நிலைத்து நிற்பது.',
  },
  'cta.reserve': {
    en: 'Reserve Your Table',
    ta: 'மேஜை முன்பதிவு செய்க',
  },
  'cta.takeaway': {
    en: 'Order Takeaway',
    ta: 'பார்சல் ஆர்டர் செய்க',
  },

  // Footer
  'footer.tagline': {
    en: 'Where tradition meets extraordinary vegetarian taste. Elevating sacred South Indian culinary recipes into timeless hospitality.',
    ta: 'பாரம்பரியமும் தூய சைவ சுவையும் சங்கமிக்கும் இடம். பாரம்பரிய தென்னிந்திய உணவு கலாச்சாரத்தை அர்ப்பணிப்புடன் வழங்குகிறோம்.',
  },
  'footer.pureVegBadge': {
    en: '100% Pure Vegetarian · Zero Additives',
    ta: '100% தூய சைவம் · கலப்படமற்ற தயாரிப்பு',
  },
  'footer.quickLinks': {
    en: 'Quick Links',
    ta: 'பக்கங்கள்',
  },
  'footer.timingsTitle': {
    en: 'Daily Timings',
    ta: 'வேலை நேரம்',
  },
  'footer.tiffin': {
    en: 'Morning Tiffin: 6:30 AM – 11:30 AM',
    ta: 'காலை டிபன்: 6:30 AM – 11:30 AM',
  },
  'footer.lunch': {
    en: 'Grand Meals: 12:00 PM – 3:30 PM',
    ta: 'மதிய சாப்பாடு: 12:00 PM – 3:30 PM',
  },
  'footer.evening': {
    en: 'Evening Tiffin & Dinner: 4:30 PM – 10:45 PM',
    ta: 'மாலை டிபன் & இரவு உணவு: 4:30 PM – 10:45 PM',
  },
  'footer.connectTitle': {
    en: 'Connect With Us',
    ta: 'எங்களுடன் இணையுங்கள்',
  },
  'footer.newsletterTitle': {
    en: 'Taste Bulletin',
    ta: 'செய்தி மடல்',
  },
  'footer.newsletterDesc': {
    en: 'Receive festive specials, seasonal menu additions, and chef recommendations.',
    ta: 'பண்டிகை கால சிறப்பு உணவுகள் மற்றும் புதிய மெனு அறிவிப்புகளை பெற இணைந்திருங்கள்.',
  },
  'footer.emailPlaceholder': {
    en: 'Enter your email',
    ta: 'மின்னஞ்சல் முகவரி',
  },
  'footer.subscribe': {
    en: 'Subscribe',
    ta: 'இணைந்திடுக',
  },
  'footer.subscribed': {
    en: 'Thank you for joining our culinary circle!',
    ta: 'நன்றி! எங்கள் உணவு குடும்பத்தில் இணைந்தமைக்கு வாழ்த்துகள்!',
  },
  'footer.copyright': {
    en: 'All rights reserved. Pure Vegetarian Dining.',
    ta: 'அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை. தூய சைவ உணவகம்.',
  },
  'footer.philosophy': {
    en: 'Philosophy',
    ta: 'எங்கள் நோக்கம்',
  },
  'footer.menuCard': {
    en: 'Menu Card',
    ta: 'மெனு அட்டை',
  },
  'footer.reservations': {
    en: 'Reservations',
    ta: 'முன்பதிவுகள்',
  },
  'footer.privacyLegal': {
    en: 'Privacy & Legal',
    ta: 'தனியுரிமை & சட்டப்பூர்வ விவரங்கள்',
  },
  'footer.privacyNotice': {
    en: 'Privacy Notice',
    ta: 'தனியுரிமை கொள்கை',
  },
  'footer.cookiePreferences': {
    en: 'Cookie Preferences',
    ta: 'குக்கீ விருப்பங்கள்',
  },
  'footer.privacyCentre': {
    en: 'Privacy Centre',
    ta: 'தனியுரிமை மையம்',
  },
  'footer.terms': {
    en: 'Terms & Conditions',
    ta: 'விதிமுறைகள் மற்றும் நிபந்தனைகள்',
  },
  'contact.dpdpConsent': {
    en: 'I agree to the processing of my personal data for the purpose described in the Privacy Notice.',
    ta: 'தனியுரிமை அறிவிப்பில் விவரிக்கப்பட்டுள்ள நோக்கத்திற்காக எனது தனிப்பட்ட தரவைச் செயலாக்க ஒப்புக்கொள்கிறேன்.',
  },
  'contact.dpdpConsentPrefix': {
    en: 'I agree to the processing of my personal data for table reservation and dining enquiries as described in the',
    ta: 'தனியுரிமை அறிவிப்பில் விவரிக்கப்பட்டுள்ளபடி மேஜை முன்பதிவு மற்றும் உணவு விசாரணைக்காக எனது தனிப்பட்ட தரவைச் செயலாக்க',
  },
  'contact.dpdpConsentSuffix': {
    en: '.',
    ta: ' ஒப்புக்கொள்கிறேன்.',
  },
  'contact.dpdpConsentRequired': {
    en: 'Please check the consent box to proceed with your reservation.',
    ta: 'முன்பதிவைத் தொடர தனியுரிமை ஒப்புதல் பெட்டியைத் தேர்ந்தெடுக்கவும்.',
  },
  'cookies.bannerTitle': {
    en: 'Your Privacy',
    ta: 'உங்கள் தனியுரிமை',
  },
  'cookies.bannerDesc': {
    en: 'We use cookies and similar technologies to ensure seamless table booking, understand website traffic, and enhance your dining experience in accordance with the Digital Personal Data Protection (DPDP) Act, 2023.',
    ta: 'DPDP சட்டம் 2023-ன் படி எங்கள் வலைத்தளத்தை எளிதாகப் பயன்படுத்தவும், மேஜை முன்பதிவு செய்யவும் மற்றும் சிறந்த சேவையை வழங்கவும் குக்கீகளைப் பயன்படுத்துகிறோம்.',
  },
  'cookies.managePreferences': {
    en: 'Manage Preferences',
    ta: 'விருப்பங்களை நிர்வகி',
  },
  'cookies.accept': {
    en: 'Accept',
    ta: 'ஏற்றுக்கொள்',
  },
  'cookies.modalTitle': {
    en: 'Cookie Preferences',
    ta: 'குக்கீ விருப்பங்கள்',
  },
  'cookies.modalSubtitle': {
    en: 'Manage your cookie settings for Sre New Aananda Bavan.',
    ta: 'ஸ்ரீ நியூ ஆனந்த பவன் வலைத்தளத்தில் குக்கீ விருப்பங்களை அமைக்கவும்.',
  },
  'cookies.essentialTitle': {
    en: 'Essential Cookies',
    ta: 'அத்தியாவசிய குக்கீகள்',
  },
  'cookies.alwaysActive': {
    en: 'Always Active',
    ta: 'எப்போதும் செயலில்',
  },
  'cookies.essentialDesc': {
    en: 'Necessary for the website to function, maintain session security, and retain language preferences. Cannot be deactivated.',
    ta: 'வலைத்தள பாதுகாப்பு மற்றும் அடிப்படை பயன்பாட்டிற்கு இன்றியமையாதவை. இவற்றை முடக்க முடியாது.',
  },
  'cookies.analyticsTitle': {
    en: 'Analytics Cookies',
    ta: 'பகுப்பாய்வு குக்கீகள்',
  },
  'cookies.analyticsDesc': {
    en: 'Help us understand how guests navigate our menu and pages so we can enhance the dining experience.',
    ta: 'வலைத்தள வருகை மற்றும் உணவுக் குறிப்புகளைப் பார்வையிட உதவும் புள்ளிவிவரங்கள்.',
  },
  'cookies.marketingTitle': {
    en: 'Marketing Cookies',
    ta: 'விளம்பர குக்கீகள்',
  },
  'cookies.marketingDesc': {
    en: 'Used to provide relevant updates on festive specials, royal feasts, and catering services.',
    ta: 'பண்டிகை கால சிறப்பு உணவுகள் மற்றும் புதிய மெனு அறிவிப்புகளை வழங்க பயன்படுபவை.',
  },
  'cookies.savePreferences': {
    en: 'Save Preferences',
    ta: 'விருப்பங்களைச் சேமி',
  },

  // About Page Specific
  'aboutPage.heroBadge': {
    en: 'Pure Vegetarian Gastronomy',
    ta: 'தூய சைவ உணவு மரபு',
  },
  'aboutPage.heroTitle': {
    en: 'THE SACRED STORY OF',
    ta: 'பாரம்பரிய சரித்திரம்',
  },
  'aboutPage.heroHighlight': {
    en: 'OUR HERITAGE',
    ta: 'எங்கள் வரலாறு',
  },
  'aboutPage.heroDesc': {
    en: 'Founded upon centuries of sacred temple culinary wisdom. Discover our commitment to pure vegetarian ingredients, ancient stone grinding, and heartfelt hospitality.',
    ta: 'கோவில் சமையல் மரபுகளை பின்பற்றி, தூய இயற்கை பொருட்கள், பாரம்பரிய ஆட்டுக்கல் அரைப்பு மற்றும் அன்பான விருந்தோம்பலுடன் தொடங்கப்பட்டது.',
  },
  'aboutPage.storyBadge': {
    en: 'Founding Chronicle',
    ta: 'எங்கள் தொடக்கம்',
  },
  'aboutPage.storyTitle': {
    en: 'ROOTED IN TRADITION, CRAFTED FOR MODERNITY',
    ta: 'பாரம்பரியத்தில் வேரூன்றி, நவீன நேர்த்தியுடன்',
  },
  'aboutPage.standardsBadge': {
    en: 'Kitchen Principles',
    ta: 'சமையலறை கொள்கைகள்',
  },
  'aboutPage.standardsTitle': {
    en: 'OUR SACRED CULINARY STANDARDS',
    ta: 'எங்கள் தூய்மை நெறிமுறைகள்',
  },

  // Contact Page Specific
  'contactPage.heroBadge': {
    en: 'Royal Hospitality',
    ta: 'அன்பான உபசரிப்பு',
  },
  'contactPage.heroTitle': {
    en: 'VISIT SRE NEW',
    ta: 'ஸ்ரீ நியூ',
  },
  'contactPage.heroHighlight': {
    en: 'AANANDA BAVAN',
    ta: 'ஆனந்த பவன்',
  },
  'contactPage.heroDesc': {
    en: 'We warmly invite you to experience the finest pure vegetarian South Indian dining in Chennai. Reserve your table or speak with our concierge.',
    ta: 'சென்னையின் தலைசிறந்த தூய தென்னிந்திய சைவ உணவை ருசிக்க உங்களை அன்புடன் வரவேற்கிறோம்.',
  },
  'contactPage.cateringBadge': {
    en: 'Celebrations & Catering',
    ta: 'சுபநிகழ்ச்சி கேட்டரிங்',
  },
  'contactPage.cateringTitle': {
    en: 'SPECIAL OCCASIONS & OUTDOOR BANQUETS',
    ta: 'விசேஷங்கள் மற்றும் விருந்து உபசரிப்புகள்',
  },
  'contactPage.feat1.title': {
    en: 'Family Feasts & Gatherings',
    ta: 'குடும்ப விருந்துகள் & சுபநிகழ்ச்சிகள்',
  },
  'contactPage.feat1.desc': {
    en: 'Exclusive traditional banana leaf service for celebrations, birthdays, and anniversaries.',
    ta: 'பிறந்தநாள், திருமண நாள் மற்றும் குடும்ப விழாக்களுக்கான பாரம்பரிய தலைவாழை இலை விருந்து உபசரிப்பு.',
  },
  'contactPage.feat2.title': {
    en: 'Artisanal Festive Catering',
    ta: 'பாரம்பரிய விழாக்கால கேட்டரிங்',
  },
  'contactPage.feat2.desc': {
    en: 'Authentic South Indian breakfast and lunch menus prepared on-site for weddings and poojas.',
    ta: 'திருமணம் மற்றும் பூஜைகளுக்கு நேர்த்தியான சுடச்சுட காலை, மதிய உணவு தயாரிப்பு.',
  },
  'contactPage.feat3.title': {
    en: 'Strictly 100% Satvik & Jain Options',
    ta: '100% சாத்விக & ஜெயின் உணவுகள்',
  },
  'contactPage.feat3.desc': {
    en: 'Custom menus prepared without onions or garlic upon prior request with absolute kitchen sanctity.',
    ta: 'முன்கூட்டியே தெரிவித்தால் பூண்டு, வெங்காயம் இல்லாத பிரத்யேக தூய ஜெயின் உணவுகள்.',
  },
  'contactPage.valet': {
    en: 'Complimentary Valet Parking',
    ta: 'இலவச வேலட் பார்க்கிங்',
  },
  'contactPage.valetDesc': {
    en: 'Dedicated secure parking attendants available during all operating hours.',
    ta: 'அனைத்து நேரங்களிலும் பாதுகாப்பான வாகன நிறுத்துமிட வசதி.',
  },
  'contactPage.transit': {
    en: 'Transit Accessibility',
    ta: 'போக்குவரத்து வசதி',
  },
  'contactPage.transitDesc': {
    en: 'Centrally situated with direct connectivity to prime transit hubs and metro.',
    ta: 'சென்னையின் முக்கிய போக்குவரத்து முனையங்கள் மற்றும் மெட்ரோவுடன் நேரடி இணைப்பு.',
  },

  // About Page additional
  'aboutPage.hearthBadge': {
    en: 'The Sacred Hearth',
    ta: 'புனித சமையலறை',
  },
  'aboutPage.reverenceTitle': {
    en: 'WHERE REVERENCE MEETS EXTRAORDINARY TASTE',
    ta: 'பக்தி மரபும் பரவச சுவையும் சங்கமிக்கும் இடம்',
  },
  'aboutPage.para1': {
    en: 'In classical South Indian tradition, food is never merely sustenance—it is Prasadam, an offering crafted with clean conscience, sacred intent, and deep reverence for nature.',
    ta: 'பாரம்பரிய தென்னிந்திய சமையல் மரபில் உணவு என்பது வெறும் பசியாற்றல் மட்டுமல்ல—அது பிரசாதம், தூய உள்ளத்துடனும் பக்தியுடனும் சமைக்கப்படும் இறையமுதம்.',
  },
  'aboutPage.para2': {
    en: 'At Sre New Aananda Bavan, we reject the notion that pure vegetarian dining is restrictive. Through centuries of regional culinary intelligence, our recipes coax profound depth, delicate crispness, and unforgettable aroma from unpolished grains, farm-clarified cow butter, and indigenous herbs.',
    ta: 'ஸ்ரீ நியூ ஆனந்த பவனில் தூய சைவ உணவு என்பது பல சுவைகளின் சங்கமம். தலைமுறை தலைமுறையாக போற்றி பாதுகாக்கப்பட்ட சமையல் நுணுக்கங்களுடன், தூய நெய், நாட்டு தானியங்கள் மற்றும் இயற்கை மூலிகைகளுடன் சமைக்கிறோம்.',
  },
  'aboutPage.gheeOnly': {
    en: 'Pure Cow Ghee Only',
    ta: 'தூய பசு நெய் மட்டுமே',
  },
  'aboutPage.zeroChemicals': {
    en: 'Zero Chemical Preservatives',
    ta: 'இரசாயன கலப்பற்றது',
  },
  'aboutPage.dailyGrind': {
    en: 'Daily Fresh Grinding',
    ta: 'தினசரி புதிய அரைப்பு',
  },
  'aboutPage.templeLore': {
    en: 'The true taste of idli lies in the whisper of steam through natural muslin cloth—light as morning clouds, comforting as home.',
    ta: 'இயற்கை பருத்தி துணியில் நீராவியால் வேகும் மல்லிகைப் பூ இட்லியின் சுவை, பஞ்சு போன்ற மென்மையும் தாய்வீட்டு உணர்வும் தருகிறது.',
  },
  'aboutPage.pillarsTitle': {
    en: 'OUR UNCOMPROMISING PILLARS',
    ta: 'எங்கள் உறுதியான கொள்கைகள்',
  },
  'aboutPage.pillarsDesc': {
    en: 'Every recipe follows rigorous gastronomic standards to ensure unparalleled freshness and pure vegetarian integrity.',
    ta: 'ஒவ்வொரு செய்முறையும் கடுமையான தூய்மை நெறிமுறைகளுடன் புத்தம் புதியதாக தயாரிக்கப்படுகிறது.',
  },
  'aboutPage.lineageBadge': {
    en: 'Five Decades of Mastery',
    ta: 'ஐந்து தசாப்த கால பாரம்பரியம்',
  },
  'aboutPage.lineageTitle': {
    en: 'THE LINEAGE OF FLAVOUR',
    ta: 'தலைமுறை சுவை வரலாறு',
  },
  'aboutPage.ctaTitle': {
    en: 'EXPERIENCE THE HERITAGE IN PERSON',
    ta: 'எங்கள் பாரம்பரியத்தை நேரில் அனுபவியுங்கள்',
  },
  'aboutPage.ctaDesc': {
    en: 'Join our family table and savor South Indian vegetarian recipes prepared fresh every day.',
    ta: 'எங்கள் உணவகத்திற்கு வருகை தந்து, தினமும் புதிதாக தயாரிக்கப்படும் தென்னிந்திய சைவ சுவைகளை சுவைத்து மகிழுங்கள்.',
  },
  'aboutPage.culinaryRigor': {
    en: 'Culinary Rigor',
    ta: 'சமையல் தூய்மை',
  },
  'aboutPage.std1.title': {
    en: '100% Pure Vegetarian',
    ta: '100% தூய சைவம்',
  },
  'aboutPage.std1.desc': {
    en: 'A sacred sanctuary free from meat, poultry, seafood, egg, or animal derivatives. Zero cross-contamination.',
    ta: 'இறைச்சி, முட்டை, மீன் போன்ற எதுவும் கலக்காத புனிதமான சமையலறை. தூய்மையே எங்கள் தாரக மந்திரம்.',
  },
  'aboutPage.std2.title': {
    en: 'Natural 12-Hour Fermentation',
    ta: 'இயற்கை 12-மணி நேர புளிப்பு',
  },
  'aboutPage.std2.desc': {
    en: 'Batter rested in controlled ambient warmth without artificial yeasts or commercial rising powders.',
    ta: 'செயற்கை ஈஸ்ட் அல்லது சோடா உப்பு ஏதுமின்றி இயற்கையான முறையில் பக்குவப்படுத்தப்படும் மாவு.',
  },
  'aboutPage.std3.title': {
    en: 'Cast-Iron & Bronze Cookware',
    ta: 'பாரம்பரிய இரும்பு & வெண்கல பாத்திரங்கள்',
  },
  'aboutPage.std3.desc': {
    en: 'Heirloom heavy seasoned griddles and handcrafted bronze urulis preserve minerals and complex flavors.',
    ta: 'பாரம்பரிய இரும்பு தவாக்கள் மற்றும் கைவினை வெண்கல உருளிகள் சுவையையும் சத்துக்களையும் பாதுகாக்கின்றன.',
  },
  'aboutPage.std4.title': {
    en: 'Fresh Daily Stone Grinding',
    ta: 'தினசரி ஆட்டுக்கல் அரைப்பு',
  },
  'aboutPage.std4.desc': {
    en: 'Grated coconuts churned hourly; toor dal and coriander roasted and stone-pounded every morning.',
    ta: 'மணிக்கு ஒருமுறை துருவப்படும் தேங்காய்; துவரம் பருப்பு, கொத்தமல்லி தினமும் காலையில் கைப்பட அரைக்கப்படுகிறது.',
  },
  'aboutPage.mile1.year': {
    en: '1974',
    ta: '1974',
  },
  'aboutPage.mile1.title': {
    en: 'Ancestral Origins in Thanjavur',
    ta: 'தஞ்சாவூரில் தோன்றிய பாரம்பரியம்',
  },
  'aboutPage.mile1.desc': {
    en: 'Our founding family perfected stone-ground idli batters and slow-simmered brass vessel sambars in the Kaveri delta.',
    ta: 'காவிரி டெல்டா பகுதியில் ஆட்டுக்கல்லில் அரைத்த இட்லி மாவும், பித்தளை பாத்திர சாம்பாரும் பக்குவமாக உருவான காலம்.',
  },
  'aboutPage.mile2.year': {
    en: '1998',
    ta: '1998',
  },
  'aboutPage.mile2.title': {
    en: 'The Temple Spice Protocol',
    ta: 'கோவில் மசாலா கூடுகள்',
  },
  'aboutPage.mile2.desc': {
    en: 'Formalized our heirloom spice ratios, sourcing black Tellicherry pepper, Guntur chillies, and sun-dried coriander exclusively.',
    ta: 'தலச்சேரி மிளகு, குண்டூர் மிளகாய் மற்றும் நிழலில் உலர்த்திய மல்லி கொண்டு உருவாக்கப்பட்ட பிரத்யேக மசாலா விகிதம்.',
  },
  'aboutPage.mile3.year': {
    en: '2015',
    ta: '2015',
  },
  'aboutPage.mile3.title': {
    en: 'Direct Farm Cooperatives',
    ta: 'நேரடி இயற்கை விவசாய கூட்டமைப்பு',
  },
  'aboutPage.mile3.desc': {
    en: 'Partnered directly with certified organic coconut groves in Pollachi and heritage urad dal growers across Tamil Nadu.',
    ta: 'பொள்ளாச்சி இயற்கை தென்னந்தோப்புகள் மற்றும் தமிழக பாரம்பரிய உளுந்து விவசாயிகளுடன் நேரடி ஒப்பந்தம்.',
  },
  'aboutPage.mile4.year': {
    en: '2026',
    ta: '2026',
  },
  'aboutPage.mile4.title': {
    en: 'Sre New Aananda Bavan Sanctuary',
    ta: 'ஸ்ரீ நியூ ஆனந்த பவன் நல்வரவு',
  },
  'aboutPage.mile4.desc': {
    en: 'Elevated authentic South Indian vegetarian recipes into a royal dining destination in Chennai.',
    ta: 'பாரம்பரிய தென்னிந்திய சைவ சுவைகளை சென்னையின் உன்னத விருந்தோம்பல் அடையாளமாக நிலைநிறுத்துதல்.',
  },
};

// Item-specific Tamil translations
export const MENU_ITEM_TRANSLATIONS: {
  [id: string]: {
    name: string;
    tagline: string;
    description: string;
  };
} = {
  "bf-idli": {
    name: "இட்லி",
    tagline: "இட்லி - ஆனந்த பவன் சிறப்பு",
    description: "இட்லி - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "bf-sambar-idli": {
    name: "சாம்பார் இட்லி",
    tagline: "சாம்பார் இட்லி - ஆனந்த பவன் சிறப்பு",
    description: "சாம்பார் இட்லி - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "bf-mini-sambar-idli": {
    name: "மினி சாம்பார் இட்லி",
    tagline: "மினி சாம்பார் இட்லி - ஆனந்த பவன் சிறப்பு",
    description: "மினி சாம்பார் இட்லி - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "bf-plate-ghee-powder-idli": {
    name: "தட்டு நெய் பொடி இட்லி",
    tagline: "தட்டு நெய் பொடி இட்லி - ஆனந்த பவன் சிறப்பு",
    description: "தட்டு நெய் பொடி இட்லி - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "bf-vadai": {
    name: "வடை",
    tagline: "வடை - ஆனந்த பவன் சிறப்பு",
    description: "வடை - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "bf-pongal": {
    name: "பொங்கல்",
    tagline: "பொங்கல் - ஆனந்த பவன் சிறப்பு",
    description: "பொங்கல் - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "bf-puri": {
    name: "பூரி",
    tagline: "பூரி - ஆனந்த பவன் சிறப்பு",
    description: "பூரி - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "bf-wheat-upma": {
    name: "கோதுமை உப்புமா",
    tagline: "கோதுமை உப்புமா - ஆனந்த பவன் சிறப்பு",
    description: "கோதுமை உப்புமா - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "bf-veg-rava-kichadi": {
    name: "வெஜ் ராவ கிச்சடி",
    tagline: "வெஜ் ராவ கிச்சடி - ஆனந்த பவன் சிறப்பு",
    description: "வெஜ் ராவ கிச்சடி - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "bf-plain-dosai": {
    name: "பிளைன் தோசை",
    tagline: "பிளைன் தோசை - ஆனந்த பவன் சிறப்பு",
    description: "பிளைன் தோசை - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "bf-plain-masala-dosai": {
    name: "பிளைன் மசால் தோசை",
    tagline: "பிளைன் மசால் தோசை - ஆனந்த பவன் சிறப்பு",
    description: "பிளைன் மசால் தோசை - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "bf-ghee-plain-dosai": {
    name: "நெய் பிளைன் தோசை",
    tagline: "நெய் பிளைன் தோசை - ஆனந்த பவன் சிறப்பு",
    description: "நெய் பிளைன் தோசை - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "bf-paper-roast": {
    name: "பேப்பர் ரோஸ்ட்",
    tagline: "பேப்பர் ரோஸ்ட் - ஆனந்த பவன் சிறப்பு",
    description: "பேப்பர் ரோஸ்ட் - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "bf-ghee-roast": {
    name: "நெய் ரோஸ்ட்",
    tagline: "நெய் ரோஸ்ட் - ஆனந்த பவன் சிறப்பு",
    description: "நெய் ரோஸ்ட் - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "bf-masala-roast": {
    name: "மசால் ரோஸ்ட்",
    tagline: "மசால் ரோஸ்ட் - ஆனந்த பவன் சிறப்பு",
    description: "மசால் ரோஸ்ட் - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "bf-onion-roast": {
    name: "ஆனியன் ரோஸ்ட்",
    tagline: "ஆனியன் ரோஸ்ட் - ஆனந்த பவன் சிறப்பு",
    description: "ஆனியன் ரோஸ்ட் - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "bf-uthappam": {
    name: "ஊத்தப்பம்",
    tagline: "ஊத்தப்பம் - ஆனந்த பவன் சிறப்பு",
    description: "ஊத்தப்பம் - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "bf-onion-uthappam": {
    name: "ஆனியன் ஊத்தாப்பம்",
    tagline: "ஆனியன் ஊத்தாப்பம் - ஆனந்த பவன் சிறப்பு",
    description: "ஆனியன் ஊத்தாப்பம் - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "bf-cashew-uthappam": {
    name: "முந்திரி ஊத்தப்பம்",
    tagline: "முந்திரி ஊத்தப்பம் - ஆனந்த பவன் சிறப்பு",
    description: "முந்திரி ஊத்தப்பம் - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "bf-small-onion-uthappam": {
    name: "சின்ன வெங்காய ஊத்தப்பம்",
    tagline: "சின்ன வெங்காய ஊத்தப்பம் - ஆனந்த பவன் சிறப்பு",
    description: "சின்ன வெங்காய ஊத்தப்பம் - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "bf-powder-dosa": {
    name: "பொடி தோசை",
    tagline: "பொடி தோசை - ஆனந்த பவன் சிறப்பு",
    description: "பொடி தோசை - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "bf-rava-dosa": {
    name: "ரவா தோசை",
    tagline: "ரவா தோசை - ஆனந்த பவன் சிறப்பு",
    description: "ரவா தோசை - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "bf-onion-rava-dosai": {
    name: "ஆனியன் ரவா",
    tagline: "ஆனியன் ரவா - ஆனந்த பவன் சிறப்பு",
    description: "ஆனியன் ரவா - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "bf-ghee-rava": {
    name: "நெய் ரவா",
    tagline: "நெய் ரவா - ஆனந்த பவன் சிறப்பு",
    description: "நெய் ரவா - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "bf-masala-rava": {
    name: "மசால் ரவா",
    tagline: "மசால் ரவா - ஆனந்த பவன் சிறப்பு",
    description: "மசால் ரவா - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "bf-chutney-dosai": {
    name: "சட்னி தோசை",
    tagline: "சட்னி தோசை - ஆனந்த பவன் சிறப்பு",
    description: "சட்னி தோசை - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "bf-ragi-dosai": {
    name: "ராகி தோசை",
    tagline: "ராகி தோசை - ஆனந்த பவன் சிறப்பு",
    description: "ராகி தோசை - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "bf-wheat-dosai": {
    name: "கோதுமை தோசை",
    tagline: "கோதுமை தோசை - ஆனந்த பவன் சிறப்பு",
    description: "கோதுமை தோசை - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "bf-sambar-vadai": {
    name: "சாம்பார் வடை",
    tagline: "சாம்பார் வடை - ஆனந்த பவன் சிறப்பு",
    description: "சாம்பார் வடை - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "bf-curd-vadai": {
    name: "தயிர் வடை",
    tagline: "தயிர் வடை - ஆனந்த பவன் சிறப்பு",
    description: "தயிர் வடை - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "ln-asb-meals": {
    name: "ASB  சாப்பாடு",
    tagline: "ASB  சாப்பாடு - ஆனந்த பவன் சிறப்பு",
    description: "ASB  சாப்பாடு - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "ln-limitless-meals": {
    name: "அளவில்லா சாப்பாடு",
    tagline: "அளவில்லா சாப்பாடு - ஆனந்த பவன் சிறப்பு",
    description: "அளவில்லா சாப்பாடு - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "ln-mini-meals": {
    name: "மினி மீல்ஸ்",
    tagline: "மினி மீல்ஸ் - ஆனந்த பவன் சிறப்பு",
    description: "மினி மீல்ஸ் - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "ln-veg-biriyani": {
    name: "வெஜ் பிரியாணி",
    tagline: "வெஜ் பிரியாணி - ஆனந்த பவன் சிறப்பு",
    description: "வெஜ் பிரியாணி - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "ln-sambar-rice": {
    name: "சாம்பார் சாதம்",
    tagline: "சாம்பார் சாதம் - ஆனந்த பவன் சிறப்பு",
    description: "சாம்பார் சாதம் - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "ln-curd-rice": {
    name: "தயிர் சாதம்",
    tagline: "தயிர் சாதம் - ஆனந்த பவன் சிறப்பு",
    description: "தயிர் சாதம் - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "ln-masala-chapathi": {
    name: "மசாலா சப்பாத்தி",
    tagline: "மசாலா சப்பாத்தி - ஆனந்த பவன் சிறப்பு",
    description: "மசாலா சப்பாத்தி - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "ln-chapathi": {
    name: "சப்பாத்தி",
    tagline: "சப்பாத்தி - ஆனந்த பவன் சிறப்பு",
    description: "சப்பாத்தி - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "ln-parotta": {
    name: "பரோட்டா",
    tagline: "பரோட்டா - ஆனந்த பவன் சிறப்பு",
    description: "பரோட்டா - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "dn-idly": {
    name: "இட்லி",
    tagline: "இட்லி - ஆனந்த பவன் சிறப்பு",
    description: "இட்லி - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "dn-plate-idly": {
    name: "தட்டு இட்லி",
    tagline: "தட்டு இட்லி - ஆனந்த பவன் சிறப்பு",
    description: "தட்டு இட்லி - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "dn-sambar-idly": {
    name: "சாம்பார் இட்லி",
    tagline: "சாம்பார் இட்லி - ஆனந்த பவன் சிறப்பு",
    description: "சாம்பார் இட்லி - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "dn-mini-sambar-idly": {
    name: "மினி சாம்பார் இட்லி",
    tagline: "மினி சாம்பார் இட்லி - ஆனந்த பவன் சிறப்பு",
    description: "மினி சாம்பார் இட்லி - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "dn-ghee-powder-idly": {
    name: "நெய் பொடி இட்லி",
    tagline: "நெய் பொடி இட்லி - ஆனந்த பவன் சிறப்பு",
    description: "நெய் பொடி இட்லி - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "dn-idiyappam": {
    name: "இடியாப்பம்",
    tagline: "இடியாப்பம் - ஆனந்த பவன் சிறப்பு",
    description: "இடியாப்பம் - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "dn-special-pongal": {
    name: "Spl பொங்கல்",
    tagline: "Spl பொங்கல் - ஆனந்த பவன் சிறப்பு",
    description: "Spl பொங்கல் - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "dn-paniyaram": {
    name: "பணியாரம்",
    tagline: "பணியாரம் - ஆனந்த பவன் சிறப்பு",
    description: "பணியாரம் - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "dn-veg-rava-kichedi": {
    name: "வெஜ் ரவா கிச்சடி",
    tagline: "வெஜ் ரவா கிச்சடி - ஆனந்த பவன் சிறப்பு",
    description: "வெஜ் ரவா கிச்சடி - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "dn-chenna-batoora": {
    name: "சோளா பூரி",
    tagline: "சோளா பூரி - ஆனந்த பவன் சிறப்பு",
    description: "சோளா பூரி - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "dn-chapatti": {
    name: "சப்பாத்தி",
    tagline: "சப்பாத்தி - ஆனந்த பவன் சிறப்பு",
    description: "சப்பாத்தி - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "dn-parotta": {
    name: "பரோட்டா",
    tagline: "பரோட்டா - ஆனந்த பவன் சிறப்பு",
    description: "பரோட்டா - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "dn-plain-dosai": {
    name: "பிளைன் தோசை",
    tagline: "பிளைன் தோசை - ஆனந்த பவன் சிறப்பு",
    description: "பிளைன் தோசை - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "dn-ghee-plain-dosai": {
    name: "நெய் பிளைன் தோசை",
    tagline: "நெய் பிளைன் தோசை - ஆனந்த பவன் சிறப்பு",
    description: "நெய் பிளைன் தோசை - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "dn-plain-masala": {
    name: "பிளைன் மசாலா",
    tagline: "பிளைன் மசாலா - ஆனந்த பவன் சிறப்பு",
    description: "பிளைன் மசாலா - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "dn-masala-roast": {
    name: "மசால் ரோஸ்ட்",
    tagline: "மசால் ரோஸ்ட் - ஆனந்த பவன் சிறப்பு",
    description: "மசால் ரோஸ்ட் - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "dn-mushroom-masala-roast": {
    name: "காளான் மசால் ரோஸ்ட்",
    tagline: "காளான் மசால் ரோஸ்ட் - ஆனந்த பவன் சிறப்பு",
    description: "காளான் மசால் ரோஸ்ட் - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "dn-cauliflower-masala-roast": {
    name: "காலிஃப்ளவர் மசால் ரோஸ்ட்",
    tagline: "காலிஃப்ளவர் மசால் ரோஸ்ட் - ஆனந்த பவன் சிறப்பு",
    description: "காலிஃப்ளவர் மசால் ரோஸ்ட் - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "dn-onion-roast": {
    name: "ஆனியன் ரோஸ்ட்",
    tagline: "ஆனியன் ரோஸ்ட் - ஆனந்த பவன் சிறப்பு",
    description: "ஆனியன் ரோஸ்ட் - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "dn-ghee-onion-roast": {
    name: "நெய் ஆனியன் ரோஸ்ட்",
    tagline: "நெய் ஆனியன் ரோஸ்ட் - ஆனந்த பவன் சிறப்பு",
    description: "நெய் ஆனியன் ரோஸ்ட் - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "dn-ghee-roast": {
    name: "நெய் ரோஸ்ட்",
    tagline: "நெய் ரோஸ்ட் - ஆனந்த பவன் சிறப்பு",
    description: "நெய் ரோஸ்ட் - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "dn-butter-roast": {
    name: "பட்டர் ரோஸ்ட்",
    tagline: "பட்டர் ரோஸ்ட் - ஆனந்த பவன் சிறப்பு",
    description: "பட்டர் ரோஸ்ட் - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "dn-powder-roast": {
    name: "பொடி ரோஸ்ட்",
    tagline: "பொடி ரோஸ்ட் - ஆனந்த பவன் சிறப்பு",
    description: "பொடி ரோஸ்ட் - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "dn-rava-roast": {
    name: "ரவா ரோஸ்ட்",
    tagline: "ரவா ரோஸ்ட் - ஆனந்த பவன் சிறப்பு",
    description: "ரவா ரோஸ்ட் - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "dn-onion-rava-roast": {
    name: "ஆனியன் ரவா ரோஸ்ட்",
    tagline: "ஆனியன் ரவா ரோஸ்ட் - ஆனந்த பவன் சிறப்பு",
    description: "ஆனியன் ரவா ரோஸ்ட் - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "dn-ghee-rava-roast": {
    name: "நெய் ரவா ரோஸ்ட்",
    tagline: "நெய் ரவா ரோஸ்ட் - ஆனந்த பவன் சிறப்பு",
    description: "நெய் ரவா ரோஸ்ட் - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "dn-uthappan": {
    name: "ஊத்தப்பம்",
    tagline: "ஊத்தப்பம் - ஆனந்த பவன் சிறப்பு",
    description: "ஊத்தப்பம் - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "dn-onion-uthappam": {
    name: "ஆனியன் ஊத்தாப்பம்",
    tagline: "ஆனியன் ஊத்தாப்பம் - ஆனந்த பவன் சிறப்பு",
    description: "ஆனியன் ஊத்தாப்பம் - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "dn-cashnew-uthappam": {
    name: "முந்திரி உத்தப்பம்",
    tagline: "முந்திரி உத்தப்பம் - ஆனந்த பவன் சிறப்பு",
    description: "முந்திரி உத்தப்பம் - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "dn-veg-uthappam": {
    name: "வெஜ் ஊத்தப்பம்",
    tagline: "வெஜ் ஊத்தப்பம் - ஆனந்த பவன் சிறப்பு",
    description: "வெஜ் ஊத்தப்பம் - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "dn-green-peas-uthappam": {
    name: "பட்டாணி ஊத்தப்பம்",
    tagline: "பட்டாணி ஊத்தப்பம் - ஆனந்த பவன் சிறப்பு",
    description: "பட்டாணி ஊத்தப்பம் - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "dn-ragi-dosai": {
    name: "கேழ்வரகு தோசை",
    tagline: "கேழ்வரகு தோசை - ஆனந்த பவன் சிறப்பு",
    description: "கேழ்வரகு தோசை - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "dn-wheat-dosai": {
    name: "கோதுமை தோசை",
    tagline: "கோதுமை தோசை - ஆனந்த பவன் சிறப்பு",
    description: "கோதுமை தோசை - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "soup-tomato-soup": {
    name: "டொமோட்டோ சூப்",
    tagline: "டொமோட்டோ சூப் - ஆனந்த பவன் சிறப்பு",
    description: "டொமோட்டோ சூப் - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "soup-vegetable-soup": {
    name: "வெஜ் சூப்",
    tagline: "வெஜ் சூப் - ஆனந்த பவன் சிறப்பு",
    description: "வெஜ் சூப் - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "soup-mushroom-soup": {
    name: "மஷ்ரூம் சூப்",
    tagline: "மஷ்ரூம் சூப் - ஆனந்த பவன் சிறப்பு",
    description: "மஷ்ரூம் சூப் - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "soup-sweet-corn-soup": {
    name: "ஸ்வீட்கார்ன் சூப்",
    tagline: "ஸ்வீட்கார்ன் சூப் - ஆனந்த பவன் சிறப்பு",
    description: "ஸ்வீட்கார்ன் சூப் - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "soup-sweet-corn-veg-shoe": {
    name: "ஸ்வீட்கார்ன் வெஜ் சூப்",
    tagline: "ஸ்வீட்கார்ன் வெஜ் சூப் - ஆனந்த பவன் சிறப்பு",
    description: "ஸ்வீட்கார்ன் வெஜ் சூப் - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "soup-veg-clear-soup": {
    name: "வெஜ் க்ளியர் சூப்",
    tagline: "வெஜ் க்ளியர் சூப் - ஆனந்த பவன் சிறப்பு",
    description: "வெஜ் க்ளியர் சூப் - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "soup-french-onion-soup": {
    name: "ஃபிரெஞ்சு ஆனியன் சூப்",
    tagline: "ஃபிரெஞ்சு ஆனியன் சூப் - ஆனந்த பவன் சிறப்பு",
    description: "ஃபிரெஞ்சு ஆனியன் சூப் - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "soup-veg-hot-and-sour-soup": {
    name: "வெஜ் ஹாட் அண்ட் சோர் சூப்",
    tagline: "வெஜ் ஹாட் அண்ட் சோர் சூப் - ஆனந்த பவன் சிறப்பு",
    description: "வெஜ் ஹாட் அண்ட் சோர் சூப் - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "soup-veg-lung-pung-soup": {
    name: "வெஜ் லங் பங் சூப்",
    tagline: "வெஜ் லங் பங் சூப் - ஆனந்த பவன் சிறப்பு",
    description: "வெஜ் லங் பங் சூப் - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "soup-veg-paper-soup": {
    name: "வெஜ் பெப்பர் சூப்",
    tagline: "வெஜ் பெப்பர் சூப் - ஆனந்த பவன் சிறப்பு",
    description: "வெஜ் பெப்பர் சூப் - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "soup-veg-chettinadu-soup": {
    name: "வெஜ் செட்டிநாடு சூப்",
    tagline: "வெஜ் செட்டிநாடு சூப் - ஆனந்த பவன் சிறப்பு",
    description: "வெஜ் செட்டிநாடு சூப் - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "soup-veg-mancho-soup": {
    name: "வெஜ் மேன்ஷோ சூப்",
    tagline: "வெஜ் மேன்ஷோ சூப் - ஆனந்த பவன் சிறப்பு",
    description: "வெஜ் மேன்ஷோ சூப் - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "snack-roast-puppet": {
    name: "ரோஸ்டட் பாப்பட்",
    tagline: "ரோஸ்டட் பாப்பட் - ஆனந்த பவன் சிறப்பு",
    description: "ரோஸ்டட் பாப்பட் - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "snack-masala-puppet": {
    name: "மசாலா பாப்பட்",
    tagline: "மசாலா பாப்பட் - ஆனந்த பவன் சிறப்பு",
    description: "மசாலா பாப்பட் - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "snack-finger-chips": {
    name: "பிங்கர் சிப்ஸ்",
    tagline: "பிங்கர் சிப்ஸ் - ஆனந்த பவன் சிறப்பு",
    description: "பிங்கர் சிப்ஸ் - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "snack-smiley-chips": {
    name: "ஸ்மைலி சிப்ஸ்",
    tagline: "ஸ்மைலி சிப்ஸ் - ஆனந்த பவன் சிறப்பு",
    description: "ஸ்மைலி சிப்ஸ் - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "snack-momos": {
    name: "மோமோஸ்",
    tagline: "மோமோஸ் - ஆனந்த பவன் சிறப்பு",
    description: "மோமோஸ் - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "snack-paneer-kurkure": {
    name: "பன்னீர் குர்குரே",
    tagline: "பன்னீர் குர்குரே - ஆனந்த பவன் சிறப்பு",
    description: "பன்னீர் குர்குரே - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "snack-peanut-masala": {
    name: "பி நெட் மசாலா",
    tagline: "பி நெட் மசாலா - ஆனந்த பவன் சிறப்பு",
    description: "பி நெட் மசாலா - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "snack-crispy-chilli-potato": {
    name: "கிரிஸ்பி சில்லி பொட்டோடோ",
    tagline: "கிரிஸ்பி சில்லி பொட்டோடோ - ஆனந்த பவன் சிறப்பு",
    description: "கிரிஸ்பி சில்லி பொட்டோடோ - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "str-gobi-65": {
    name: "கோபி 65",
    tagline: "கோபி 65 - ஆனந்த பவன் சிறப்பு",
    description: "கோபி 65 - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "str-mushroom-65": {
    name: "மஸ்ரூம் 65",
    tagline: "மஸ்ரூம் 65 - ஆனந்த பவன் சிறப்பு",
    description: "மஸ்ரூம் 65 - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "str-paneer-65": {
    name: "பன்னீர் 65",
    tagline: "பன்னீர் 65 - ஆனந்த பவன் சிறப்பு",
    description: "பன்னீர் 65 - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "str-babycorn-65": {
    name: "பேபிகார்ன் 65",
    tagline: "பேபிகார்ன் 65 - ஆனந்த பவன் சிறப்பு",
    description: "பேபிகார்ன் 65 - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "semi-gobi-manchurian": {
    name: "கோபி மஞ்சூரியன்",
    tagline: "கோபி மஞ்சூரியன் - ஆனந்த பவன் சிறப்பு",
    description: "கோபி மஞ்சூரியன் - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "semi-mushroom-manchurian": {
    name: "மஸ்ரூம் மஞ்சூரியன்",
    tagline: "மஸ்ரூம் மஞ்சூரியன் - ஆனந்த பவன் சிறப்பு",
    description: "மஸ்ரூம் மஞ்சூரியன் - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "semi-paneer-manchurian": {
    name: "பன்னீர் மஞ்சூரியன்",
    tagline: "பன்னீர் மஞ்சூரியன் - ஆனந்த பவன் சிறப்பு",
    description: "பன்னீர் மஞ்சூரியன் - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "semi-babycorn-manchurian": {
    name: "பேபிக்கான் மஞ்சூரியன்",
    tagline: "பேபிக்கான் மஞ்சூரியன் - ஆனந்த பவன் சிறப்பு",
    description: "பேபிக்கான் மஞ்சூரியன் - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "semi-chilli-gobi": {
    name: "சில்லி கோபி",
    tagline: "சில்லி கோபி - ஆனந்த பவன் சிறப்பு",
    description: "சில்லி கோபி - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "semi-chilli-mushroom": {
    name: "சில்லி மஸ்ரும்",
    tagline: "சில்லி மஸ்ரும் - ஆனந்த பவன் சிறப்பு",
    description: "சில்லி மஸ்ரும் - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "semi-chilli-paneer": {
    name: "சில்லி பன்னீர்",
    tagline: "சில்லி பன்னீர் - ஆனந்த பவன் சிறப்பு",
    description: "சில்லி பன்னீர் - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "semi-chilli-babycorn": {
    name: "சில்லி பேபிக்கான்",
    tagline: "சில்லி பேபிக்கான் - ஆனந்த பவன் சிறப்பு",
    description: "சில்லி பேபிக்கான் - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "semi-dragon-gobi": {
    name: "டிராகன் கோபி",
    tagline: "டிராகன் கோபி - ஆனந்த பவன் சிறப்பு",
    description: "டிராகன் கோபி - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "semi-dragon-mushroom": {
    name: "டிராகன் மஸ்ரூம்",
    tagline: "டிராகன் மஸ்ரூம் - ஆனந்த பவன் சிறப்பு",
    description: "டிராகன் மஸ்ரூம் - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "semi-dragon-paneer": {
    name: "டிராகன் பன்னீர்",
    tagline: "டிராகன் பன்னீர் - ஆனந்த பவன் சிறப்பு",
    description: "டிராகன் பன்னீர் - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "semi-dragon-babycorn": {
    name: "டிராகன் பேபிகார்ன்",
    tagline: "டிராகன் பேபிகார்ன் - ஆனந்த பவன் சிறப்பு",
    description: "டிராகன் பேபிகார்ன் - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "semi-gobi-pepper-fry": {
    name: "கோபி பெப்பர் ஃப்ரை",
    tagline: "கோபி பெப்பர் ஃப்ரை - ஆனந்த பவன் சிறப்பு",
    description: "கோபி பெப்பர் ஃப்ரை - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "semi-mushroom-pepper-fry": {
    name: "மஸ்ரும் பெப்பர் ஃப்ரை",
    tagline: "மஸ்ரும் பெப்பர் ஃப்ரை - ஆனந்த பவன் சிறப்பு",
    description: "மஸ்ரும் பெப்பர் ஃப்ரை - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "semi-paneer-papper-fry": {
    name: "பன்னீர் பெப்பர் ஃப்ரை",
    tagline: "பன்னீர் பெப்பர் ஃப்ரை - ஆனந்த பவன் சிறப்பு",
    description: "பன்னீர் பெப்பர் ஃப்ரை - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "semi-baby-corn-papper-fry": {
    name: "பேபிகார்ன் பெப்பர் ஃப்ரை",
    tagline: "பேபிகார்ன் பெப்பர் ஃப்ரை - ஆனந்த பவன் சிறப்பு",
    description: "பேபிகார்ன் பெப்பர் ஃப்ரை - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "roll-veg-spring-roll": {
    name: "வெஜ் ஸ்பிரிங் ரோல்",
    tagline: "வெஜ் ஸ்பிரிங் ரோல் - ஆனந்த பவன் சிறப்பு",
    description: "வெஜ் ஸ்பிரிங் ரோல் - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "roll-mushroom-spring-roll": {
    name: "மஸ்ரூம் ஸ்பிரிங் ரோல்",
    tagline: "மஸ்ரூம் ஸ்பிரிங் ரோல் - ஆனந்த பவன் சிறப்பு",
    description: "மஸ்ரூம் ஸ்பிரிங் ரோல் - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "roll-gobi-spring-roll": {
    name: "கோபி ஸ்பிரிங் ரோல்",
    tagline: "கோபி ஸ்பிரிங் ரோல் - ஆனந்த பவன் சிறப்பு",
    description: "கோபி ஸ்பிரிங் ரோல் - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "roll-babycorn-spring-roll": {
    name: "பேபிகான் ஸ்ப்ரிங் ரோல்",
    tagline: "பேபிகான் ஸ்ப்ரிங் ரோல் - ஆனந்த பவன் சிறப்பு",
    description: "பேபிகான் ஸ்ப்ரிங் ரோல் - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "tnd-chilli-parotta": {
    name: "சில்லி பரோட்டா",
    tagline: "சில்லி பரோட்டா - ஆனந்த பவன் சிறப்பு",
    description: "சில்லி பரோட்டா - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "tnd-mushroom-chilli-barotta": {
    name: "மஷ்ரூம் சில்லி புரோட்டா",
    tagline: "மஷ்ரூம் சில்லி புரோட்டா - ஆனந்த பவன் சிறப்பு",
    description: "மஷ்ரூம் சில்லி புரோட்டா - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "tnd-paneer-chilli-barotta": {
    name: "பன்னீர் சில்லி புரோட்டா",
    tagline: "பன்னீர் சில்லி புரோட்டா - ஆனந்த பவன் சிறப்பு",
    description: "பன்னீர் சில்லி புரோட்டா - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "tnd-veg-kaima-barotta": {
    name: "வெஜ் கைமா புரோட்டா",
    tagline: "வெஜ் கைமா புரோட்டா - ஆனந்த பவன் சிறப்பு",
    description: "வெஜ் கைமா புரோட்டா - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "tnd-mushroom-kaima-parotta": {
    name: "மஷ்ரூம் கைமா புரோட்டா",
    tagline: "மஷ்ரூம் கைமா புரோட்டா - ஆனந்த பவன் சிறப்பு",
    description: "மஷ்ரூம் கைமா புரோட்டா - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "tnd-paneer-kaima-barotta": {
    name: "பன்னீர் கைமா புரோட்டா",
    tagline: "பன்னீர் கைமா புரோட்டா - ஆனந்த பவன் சிறப்பு",
    description: "பன்னீர் கைமா புரோட்டா - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "tnd-barotta-fry": {
    name: "பரோட்டா ஃபிரை",
    tagline: "பரோட்டா ஃபிரை - ஆனந்த பவன் சிறப்பு",
    description: "பரோட்டா ஃபிரை - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "tnd-idli-fry": {
    name: "இட்லி ஃப்ரை",
    tagline: "இட்லி ஃப்ரை - ஆனந்த பவன் சிறப்பு",
    description: "இட்லி ஃப்ரை - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "tnd-pepper-ldli": {
    name: "பெப்பர் இட்லி",
    tagline: "பெப்பர் இட்லி - ஆனந்த பவன் சிறப்பு",
    description: "பெப்பர் இட்லி - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "tnd-idli-manchurian": {
    name: "இட்லி மஞ்சூரியன்",
    tagline: "இட்லி மஞ்சூரியன் - ஆனந்த பவன் சிறப்பு",
    description: "இட்லி மஞ்சூரியன் - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "tnd-idli-65": {
    name: "இட்லி 65",
    tagline: "இட்லி 65 - ஆனந்த பவன் சிறப்பு",
    description: "இட்லி 65 - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "brd-naan": {
    name: "நாண்",
    tagline: "நாண் - ஆனந்த பவன் சிறப்பு",
    description: "நாண் - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "brd-butter-naan": {
    name: "பட்டர் நாண்",
    tagline: "பட்டர் நாண் - ஆனந்த பவன் சிறப்பு",
    description: "பட்டர் நாண் - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "brd-garlic-naan": {
    name: "கார்லிக் நாண்",
    tagline: "கார்லிக் நாண் - ஆனந்த பவன் சிறப்பு",
    description: "கார்லிக் நாண் - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "brd-stuffed-naan": {
    name: "ஸ்டஃப்டு நாண்",
    tagline: "ஸ்டஃப்டு நாண் - ஆனந்த பவன் சிறப்பு",
    description: "ஸ்டஃப்டு நாண் - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "brd-masala-naan": {
    name: "மசாலா நாண்",
    tagline: "மசாலா நாண் - ஆனந்த பவன் சிறப்பு",
    description: "மசாலா நாண் - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "brd-masala-paneer-naan": {
    name: "மசாலா பன்னீர் நாண்",
    tagline: "மசாலா பன்னீர் நாண் - ஆனந்த பவன் சிறப்பு",
    description: "மசாலா பன்னீர் நாண் - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "brd-cashew-nut-naan": {
    name: "முந்திரி நாண்",
    tagline: "முந்திரி நாண் - ஆனந்த பவன் சிறப்பு",
    description: "முந்திரி நாண் - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "brd-green-piece-naan": {
    name: "கிரீன் பீஸ் நாண்",
    tagline: "கிரீன் பீஸ் நாண் - ஆனந்த பவன் சிறப்பு",
    description: "கிரீன் பீஸ் நாண் - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "brd-kashmiri-naan": {
    name: "காஷ்மீரி நாண்",
    tagline: "காஷ்மீரி நாண் - ஆனந்த பவன் சிறப்பு",
    description: "காஷ்மீரி நாண் - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "brd-kulcha": {
    name: "குல்ச்சா",
    tagline: "குல்ச்சா - ஆனந்த பவன் சிறப்பு",
    description: "குல்ச்சா - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "brd-butter-kulcha": {
    name: "பட்டர் குல்ச்சா",
    tagline: "பட்டர் குல்ச்சா - ஆனந்த பவன் சிறப்பு",
    description: "பட்டர் குல்ச்சா - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "brd-stuffed-kulcha": {
    name: "ஸ்டஃப்டு குல்ச்சா",
    tagline: "ஸ்டஃப்டு குல்ச்சா - ஆனந்த பவன் சிறப்பு",
    description: "ஸ்டஃப்டு குல்ச்சா - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "brd-paneer-kulcha": {
    name: "பன்னீர் குல்ச்சா",
    tagline: "பன்னீர் குல்ச்சா - ஆனந்த பவன் சிறப்பு",
    description: "பன்னீர் குல்ச்சா - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "brd-pulka": {
    name: "புல்கா",
    tagline: "புல்கா - ஆனந்த பவன் சிறப்பு",
    description: "புல்கா - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "brd-butter-bulka": {
    name: "பட்டர்ஃபுல்கா",
    tagline: "பட்டர்ஃபுல்கா - ஆனந்த பவன் சிறப்பு",
    description: "பட்டர்ஃபுல்கா - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "brd-rumali-roti": {
    name: "ரூமாலி ரொட்டி",
    tagline: "ரூமாலி ரொட்டி - ஆனந்த பவன் சிறப்பு",
    description: "ரூமாலி ரொட்டி - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "brd-roti": {
    name: "ரோட்டி",
    tagline: "ரோட்டி - ஆனந்த பவன் சிறப்பு",
    description: "ரோட்டி - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "brd-butter-roti": {
    name: "பட்டர் ரொட்டி",
    tagline: "பட்டர் ரொட்டி - ஆனந்த பவன் சிறப்பு",
    description: "பட்டர் ரொட்டி - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "brd-tandoori-paratha": {
    name: "தந்தூரி பரோட்டா",
    tagline: "தந்தூரி பரோட்டா - ஆனந்த பவன் சிறப்பு",
    description: "தந்தூரி பரோட்டா - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "brd-aloo-paratha": {
    name: "ஆலு பரோட்டா",
    tagline: "ஆலு பரோட்டா - ஆனந்த பவன் சிறப்பு",
    description: "ஆலு பரோட்டா - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "grv-paneer-masala": {
    name: "பன்னீர் மசாலா",
    tagline: "பன்னீர் மசாலா - ஆனந்த பவன் சிறப்பு",
    description: "பன்னீர் மசாலா - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "grv-paneer-butter-masala": {
    name: "பன்னீர் பட்டர் மசாலா",
    tagline: "பன்னீர் பட்டர் மசாலா - ஆனந்த பவன் சிறப்பு",
    description: "பன்னீர் பட்டர் மசாலா - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "grv-matar-paneer-masala": {
    name: "மட்டர் பன்னீர் மசாலா",
    tagline: "மட்டர் பன்னீர் மசாலா - ஆனந்த பவன் சிறப்பு",
    description: "மட்டர் பன்னீர் மசாலா - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "grv-paneer-pasantha": {
    name: "பன்னீர் பசந்தா",
    tagline: "பன்னீர் பசந்தா - ஆனந்த பவன் சிறப்பு",
    description: "பன்னீர் பசந்தா - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "grv-paneer-tikka-masala": {
    name: "பன்னீர் டிக்கா மசாலா",
    tagline: "பன்னீர் டிக்கா மசாலா - ஆனந்த பவன் சிறப்பு",
    description: "பன்னீர் டிக்கா மசாலா - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "grv-patiala-paneer-masala": {
    name: "பட்டியாலா பன்னீர் மசாலா",
    tagline: "பட்டியாலா பன்னீர் மசாலா - ஆனந்த பவன் சிறப்பு",
    description: "பட்டியாலா பன்னீர் மசாலா - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "grv-sai-paneer-masala": {
    name: "சாய் பன்னீர் மசாலா",
    tagline: "சாய் பன்னீர் மசாலா - ஆனந்த பவன் சிறப்பு",
    description: "சாய் பன்னீர் மசாலா - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "grv-kadai-paneer-masala": {
    name: "கடாய் பன்னீர் மசாலா",
    tagline: "கடாய் பன்னீர் மசாலா - ஆனந்த பவன் சிறப்பு",
    description: "கடாய் பன்னீர் மசாலா - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "grv-chettinad-paneer-masala": {
    name: "செட்டிநாடு பன்னீர் மசாலா",
    tagline: "செட்டிநாடு பன்னீர் மசாலா - ஆனந்த பவன் சிறப்பு",
    description: "செட்டிநாடு பன்னீர் மசாலா - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "grv-palak-paneer-masala": {
    name: "பாலக் பன்னீர் மசாலா",
    tagline: "பாலக் பன்னீர் மசாலா - ஆனந்த பவன் சிறப்பு",
    description: "பாலக் பன்னீர் மசாலா - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "grv-kaju-paneer-masala": {
    name: "காஜிவ் பன்னீர் மசாலா",
    tagline: "காஜிவ் பன்னீர் மசாலா - ஆனந்த பவன் சிறப்பு",
    description: "காஜிவ் பன்னீர் மசாலா - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "grv-mushroom-masala": {
    name: "மஷ்ரூம் மசாலா",
    tagline: "மஷ்ரூம் மசாலா - ஆனந்த பவன் சிறப்பு",
    description: "மஷ்ரூம் மசாலா - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "grv-kadai-mushroom-masala": {
    name: "கடாய் மஸ்ரூம் மசாலா",
    tagline: "கடாய் மஸ்ரூம் மசாலா - ஆனந்த பவன் சிறப்பு",
    description: "கடாய் மஸ்ரூம் மசாலா - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "grv-chettinad-mushroom-masala": {
    name: "செட்டிநாடு மஸ்ரூம் மசாலா",
    tagline: "செட்டிநாடு மஸ்ரூம் மசாலா - ஆனந்த பவன் சிறப்பு",
    description: "செட்டிநாடு மஸ்ரூம் மசாலா - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "grv-gobi-masala": {
    name: "கோபி மசாலா",
    tagline: "கோபி மசாலா - ஆனந்த பவன் சிறப்பு",
    description: "கோபி மசாலா - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "grv-kadai-gobi-masala": {
    name: "கடாய் கோபி மசாலா",
    tagline: "கடாய் கோபி மசாலா - ஆனந்த பவன் சிறப்பு",
    description: "கடாய் கோபி மசாலா - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "grv-chettinadu-gobi-masala": {
    name: "செட்டிநாடு கோபி மசாலா",
    tagline: "செட்டிநாடு கோபி மசாலா - ஆனந்த பவன் சிறப்பு",
    description: "செட்டிநாடு கோபி மசாலா - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "grv-aloo-gobi-masala": {
    name: "ஆளு கோபி மசாலா",
    tagline: "ஆளு கோபி மசாலா - ஆனந்த பவன் சிறப்பு",
    description: "ஆளு கோபி மசாலா - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "grv-hyderabad-gobi-curry": {
    name: "ஹைதராபாத் கோபி கறி",
    tagline: "ஹைதராபாத் கோபி கறி - ஆனந்த பவன் சிறப்பு",
    description: "ஹைதராபாத் கோபி கறி - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "grv-green-peace-masala": {
    name: "கிரீன் பீஸ் மசாலா",
    tagline: "கிரீன் பீஸ் மசாலா - ஆனந்த பவன் சிறப்பு",
    description: "கிரீன் பீஸ் மசாலா - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "grv-chinna-masala": {
    name: "சென்னா மசாலா",
    tagline: "சென்னா மசாலா - ஆனந்த பவன் சிறப்பு",
    description: "சென்னா மசாலா - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "grv-veg-sizzler-masala": {
    name: "வெஜ் சிசிலர் மசாலா",
    tagline: "வெஜ் சிசிலர் மசாலா - ஆனந்த பவன் சிறப்பு",
    description: "வெஜ் சிசிலர் மசாலா - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "grv-malai-gupta-masala": {
    name: "மலாய் குப்தா மசாலா",
    tagline: "மலாய் குப்தா மசாலா - ஆனந்த பவன் சிறப்பு",
    description: "மலாய் குப்தா மசாலா - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "grv-paneer-kofta-masala": {
    name: "பன்னீர் குப்தா மசாலா",
    tagline: "பன்னீர் குப்தா மசாலா - ஆனந்த பவன் சிறப்பு",
    description: "பன்னீர் குப்தா மசாலா - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "grv-aadu-palak-masala": {
    name: "ஆளு பாலக்",
    tagline: "ஆளு பாலக் - ஆனந்த பவன் சிறப்பு",
    description: "ஆளு பாலக் - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "grv-kaju-masala": {
    name: "காஜூ மசாலா",
    tagline: "காஜூ மசாலா - ஆனந்த பவன் சிறப்பு",
    description: "காஜூ மசாலா - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "grv-navratna-kurma": {
    name: "நவரத்தின குருமா",
    tagline: "நவரத்தின குருமா - ஆனந்த பவன் சிறப்பு",
    description: "நவரத்தின குருமா - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "grv-mix-veg-curry": {
    name: "மிக்ஸ் வெஜ் கறி",
    tagline: "மிக்ஸ் வெஜ் கறி - ஆனந்த பவன் சிறப்பு",
    description: "மிக்ஸ் வெஜ் கறி - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "grv-veg-jaipuri": {
    name: "வெஜ் ஜெய்ப்பூரி",
    tagline: "வெஜ் ஜெய்ப்பூரி - ஆனந்த பவன் சிறப்பு",
    description: "வெஜ் ஜெய்ப்பூரி - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "grv-dal-fry": {
    name: "டால் ஃப்ரை",
    tagline: "டால் ஃப்ரை - ஆனந்த பவன் சிறப்பு",
    description: "டால் ஃப்ரை - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "grv-dal-makhani": {
    name: "டால் மக்கினி",
    tagline: "டால் மக்கினி - ஆனந்த பவன் சிறப்பு",
    description: "டால் மக்கினி - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "grv-dal-tadka": {
    name: "டால் தடுக்க",
    tagline: "டால் தடுக்க - ஆனந்த பவன் சிறப்பு",
    description: "டால் தடுக்க - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "fr-veg-fried-rice": {
    name: "வெஜ்ஃபிரைட் ரைஸ்",
    tagline: "வெஜ்ஃபிரைட் ரைஸ் - ஆனந்த பவன் சிறப்பு",
    description: "வெஜ்ஃபிரைட் ரைஸ் - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "fr-paneer-fried-rice": {
    name: "பன்னீர்ஃபிரைட் ரைஸ்",
    tagline: "பன்னீர்ஃபிரைட் ரைஸ் - ஆனந்த பவன் சிறப்பு",
    description: "பன்னீர்ஃபிரைட் ரைஸ் - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "fr-mushroom-fried-rice": {
    name: "மஷ்ரூம்ஃபிரைட் ரைஸ்",
    tagline: "மஷ்ரூம்ஃபிரைட் ரைஸ் - ஆனந்த பவன் சிறப்பு",
    description: "மஷ்ரூம்ஃபிரைட் ரைஸ் - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "fr-gobi-fried-rice": {
    name: "கோபிஃபிரைட் ரைஸ்",
    tagline: "கோபிஃபிரைட் ரைஸ் - ஆனந்த பவன் சிறப்பு",
    description: "கோபிஃபிரைட் ரைஸ் - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "fr-babycorn-fried-rice": {
    name: "பேபிகார்ன் ஃபிரைட் ரைஸ்",
    tagline: "பேபிகார்ன் ஃபிரைட் ரைஸ் - ஆனந்த பவன் சிறப்பு",
    description: "பேபிகார்ன் ஃபிரைட் ரைஸ் - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "fr-veg-schezwan-fried-rice": {
    name: "வெஜ் செஸ்வான்ஃபிரைட் ரைஸ்",
    tagline: "வெஜ் செஸ்வான்ஃபிரைட் ரைஸ் - ஆனந்த பவன் சிறப்பு",
    description: "வெஜ் செஸ்வான்ஃபிரைட் ரைஸ் - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "fr-veg-thaba-fried-rice": {
    name: "வெஜ் தாபா ஃபிரைட் ரைஸ்",
    tagline: "வெஜ் தாபா ஃபிரைட் ரைஸ் - ஆனந்த பவன் சிறப்பு",
    description: "வெஜ் தாபா ஃபிரைட் ரைஸ் - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "fr-singapore-fried-rice": {
    name: "சிங்கப்பூர்ஃபிரைட் ரைஸ்",
    tagline: "சிங்கப்பூர்ஃபிரைட் ரைஸ் - ஆனந்த பவன் சிறப்பு",
    description: "சிங்கப்பூர்ஃபிரைட் ரைஸ் - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "fr-veg-shangai-fried-rice": {
    name: "வெஜ் சாங்காய் ஃபிரைட் ரைஸ்",
    tagline: "வெஜ் சாங்காய் ஃபிரைட் ரைஸ் - ஆனந்த பவன் சிறப்பு",
    description: "வெஜ் சாங்காய் ஃபிரைட் ரைஸ் - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "fr-ghee-rice": {
    name: "கீ ரைஸ்",
    tagline: "கீ ரைஸ் - ஆனந்த பவன் சிறப்பு",
    description: "கீ ரைஸ் - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "fr-jeera-rice": {
    name: "ஜீரா ரைஸ்",
    tagline: "ஜீரா ரைஸ் - ஆனந்த பவன் சிறப்பு",
    description: "ஜீரா ரைஸ் - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "fr-dal-rice": {
    name: "டால் ரைஸ்",
    tagline: "டால் ரைஸ் - ஆனந்த பவன் சிறப்பு",
    description: "டால் ரைஸ் - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "ndl-veg-noodles": {
    name: "வெஜ் நூடுல்ஸ்",
    tagline: "வெஜ் நூடுல்ஸ் - ஆனந்த பவன் சிறப்பு",
    description: "வெஜ் நூடுல்ஸ் - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "ndl-sahaswan-noodles": {
    name: "செஸ்வான் நூடுல்ஸ்",
    tagline: "செஸ்வான் நூடுல்ஸ் - ஆனந்த பவன் சிறப்பு",
    description: "செஸ்வான் நூடுல்ஸ் - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "ndl-veg-shangai-noodles": {
    name: "வெஜ் சாங்காய் நூடுல்ஸ்",
    tagline: "வெஜ் சாங்காய் நூடுல்ஸ் - ஆனந்த பவன் சிறப்பு",
    description: "வெஜ் சாங்காய் நூடுல்ஸ் - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "ndl-paneer-noodles": {
    name: "பன்னீர் நூடுல்ஸ்",
    tagline: "பன்னீர் நூடுல்ஸ் - ஆனந்த பவன் சிறப்பு",
    description: "பன்னீர் நூடுல்ஸ் - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "ndl-mushroom-noodles": {
    name: "மஷ்ரூம் நூடுல்ஸ்",
    tagline: "மஷ்ரூம் நூடுல்ஸ் - ஆனந்த பவன் சிறப்பு",
    description: "மஷ்ரூம் நூடுல்ஸ் - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "ndl-babycorn-noodles": {
    name: "பேபிகான் நூடுல்ஸ்",
    tagline: "பேபிகான் நூடுல்ஸ் - ஆனந்த பவன் சிறப்பு",
    description: "பேபிகான் நூடுல்ஸ் - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "ndl-singapore-noodles": {
    name: "சிங்கப்பூர் நூடுல்ஸ்",
    tagline: "சிங்கப்பூர் நூடுல்ஸ் - ஆனந்த பவன் சிறப்பு",
    description: "சிங்கப்பூர் நூடுல்ஸ் - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "ndl-crispy-fried-noodles": {
    name: "கிரிஸ்பிஃபிரைட் நூடுல்ஸ்",
    tagline: "கிரிஸ்பிஃபிரைட் நூடுல்ஸ் - ஆனந்த பவன் சிறப்பு",
    description: "கிரிஸ்பிஃபிரைட் நூடுல்ஸ் - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "ndl-american-shopsy": {
    name: "அமெரிக்கன் சாப்ஸி",
    tagline: "அமெரிக்கன் சாப்ஸி - ஆனந்த பவன் சிறப்பு",
    description: "அமெரிக்கன் சாப்ஸி - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "ndl-chinese-chopsy": {
    name: "சைனீஸ் சாப்ஸி",
    tagline: "சைனீஸ் சாப்ஸி - ஆனந்த பவன் சிறப்பு",
    description: "சைனீஸ் சாப்ஸி - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "plv-veg-pulao": {
    name: "வெஜ் புலாவ்",
    tagline: "வெஜ் புலாவ் - ஆனந்த பவன் சிறப்பு",
    description: "வெஜ் புலாவ் - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "plv-paneer-pulao": {
    name: "பன்னீர் புலாவ்",
    tagline: "பன்னீர் புலாவ் - ஆனந்த பவன் சிறப்பு",
    description: "பன்னீர் புலாவ் - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "plv-mushroom-pulao": {
    name: "மஷ்ரூம் புலாவ்",
    tagline: "மஷ்ரூம் புலாவ் - ஆனந்த பவன் சிறப்பு",
    description: "மஷ்ரூம் புலாவ் - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "plv-greenpeace-pulao": {
    name: "கிரீன் பீஸ் புலாவ்",
    tagline: "கிரீன் பீஸ் புலாவ் - ஆனந்த பவன் சிறப்பு",
    description: "கிரீன் பீஸ் புலாவ் - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "plv-mushroom-biryani": {
    name: "மஷ்ரூம் பிரியாணி",
    tagline: "மஷ்ரூம் பிரியாணி - ஆனந்த பவன் சிறப்பு",
    description: "மஷ்ரூம் பிரியாணி - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "plv-paneer-biryani": {
    name: "பன்னிர் பிரியாணி",
    tagline: "பன்னிர் பிரியாணி - ஆனந்த பவன் சிறப்பு",
    description: "பன்னிர் பிரியாணி - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "sld-veg-salad": {
    name: "வெஜ் சாலட்",
    tagline: "வெஜ் சாலட் - ஆனந்த பவன் சிறப்பு",
    description: "வெஜ் சாலட் - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "sld-onion-salad": {
    name: "ஆனியன் சாலட்",
    tagline: "ஆனியன் சாலட் - ஆனந்த பவன் சிறப்பு",
    description: "ஆனியன் சாலட் - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "sld-cucumber-salad": {
    name: "குக்கும்பர் சாலட்",
    tagline: "குக்கும்பர் சாலட் - ஆனந்த பவன் சிறப்பு",
    description: "குக்கும்பர் சாலட் - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "sld-russian-salad": {
    name: "ரஷ்யன் சாலட்",
    tagline: "ரஷ்யன் சாலட் - ஆனந்த பவன் சிறப்பு",
    description: "ரஷ்யன் சாலட் - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "sld-pineapple-salad": {
    name: "பைனாப்பிள் சாலட்",
    tagline: "பைனாப்பிள் சாலட் - ஆனந்த பவன் சிறப்பு",
    description: "பைனாப்பிள் சாலட் - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "rta-veg-raita": {
    name: "வெஜ் ரைத்தா",
    tagline: "வெஜ் ரைத்தா - ஆனந்த பவன் சிறப்பு",
    description: "வெஜ் ரைத்தா - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "rta-onion-raita": {
    name: "ஆனியன் ரைத்தா",
    tagline: "ஆனியன் ரைத்தா - ஆனந்த பவன் சிறப்பு",
    description: "ஆனியன் ரைத்தா - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "rta-cucumber-raita": {
    name: "குக்கும்பர் ரைத்தா",
    tagline: "குக்கும்பர் ரைத்தா - ஆனந்த பவன் சிறப்பு",
    description: "குக்கும்பர் ரைத்தா - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "rta-tomato-raita": {
    name: "டொமேட்டோ ரைத்தா",
    tagline: "டொமேட்டோ ரைத்தா - ஆனந்த பவன் சிறப்பு",
    description: "டொமேட்டோ ரைத்தா - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "rta-carrot-raita": {
    name: "கேரட் ரைத்தா",
    tagline: "கேரட் ரைத்தா - ஆனந்த பவன் சிறப்பு",
    description: "கேரட் ரைத்தா - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "rta-pineapple-raita": {
    name: "பைனாப்பிள் ரைத்தா",
    tagline: "பைனாப்பிள் ரைத்தா - ஆனந்த பவன் சிறப்பு",
    description: "பைனாப்பிள் ரைத்தா - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "rta-mix-fruit-raita": {
    name: "மிக்ஸ் ஃப்ரூட் ரைத்தா",
    tagline: "மிக்ஸ் ஃப்ரூட் ரைத்தா - ஆனந்த பவன் சிறப்பு",
    description: "மிக்ஸ் ஃப்ரூட் ரைத்தா - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "rta-bundi-raita": {
    name: "பூந்தி ரைத்தா",
    tagline: "பூந்தி ரைத்தா - ஆனந்த பவன் சிறப்பு",
    description: "பூந்தி ரைத்தா - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "hb-coffee": {
    name: "காபி",
    tagline: "காபி - ஆனந்த பவன் சிறப்பு",
    description: "காபி - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "hb-milk": {
    name: "பால்",
    tagline: "பால் - ஆனந்த பவன் சிறப்பு",
    description: "பால் - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "hb-tea": {
    name: "டீ",
    tagline: "டீ - ஆனந்த பவன் சிறப்பு",
    description: "டீ - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "hb-lemon-tea-with-honey": {
    name: "லெமன் டீ வித் தேன்",
    tagline: "லெமன் டீ வித் தேன் - ஆனந்த பவன் சிறப்பு",
    description: "லெமன் டீ வித் தேன் - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "hb-horlicks": {
    name: "ஹார்லிக்ஸ்",
    tagline: "ஹார்லிக்ஸ் - ஆனந்த பவன் சிறப்பு",
    description: "ஹார்லிக்ஸ் - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "hb-boost": {
    name: "பூஸ்ட்",
    tagline: "பூஸ்ட் - ஆனந்த பவன் சிறப்பு",
    description: "பூஸ்ட் - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "hb-hot-badam-milk": {
    name: "ஹாட் பாதம் பால்",
    tagline: "ஹாட் பாதம் பால் - ஆனந்த பவன் சிறப்பு",
    description: "ஹாட் பாதம் பால் - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "cb-apple-juice": {
    name: "ஆப்பிள் ஜூஸ்",
    tagline: "ஆப்பிள் ஜூஸ் - ஆனந்த பவன் சிறப்பு",
    description: "ஆப்பிள் ஜூஸ் - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "cb-sweet-lemon-juice": {
    name: "சாத்துக்குடி ஜூஸ்",
    tagline: "சாத்துக்குடி ஜூஸ் - ஆனந்த பவன் சிறப்பு",
    description: "சாத்துக்குடி ஜூஸ் - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "cb-sweet-lemon-pure-juice": {
    name: "சாத்துக்குடி பியூர் ஜூஸ்",
    tagline: "சாத்துக்குடி பியூர் ஜூஸ் - ஆனந்த பவன் சிறப்பு",
    description: "சாத்துக்குடி பியூர் ஜூஸ் - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "cb-orange-juice": {
    name: "ஆரஞ்சு ஜூஸ்",
    tagline: "ஆரஞ்சு ஜூஸ் - ஆனந்த பவன் சிறப்பு",
    description: "ஆரஞ்சு ஜூஸ் - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "cb-pomegranate-juice": {
    name: "மாதுளை ஜூஸ்",
    tagline: "மாதுளை ஜூஸ் - ஆனந்த பவன் சிறப்பு",
    description: "மாதுளை ஜூஸ் - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "cb-pineapple-juice": {
    name: "பைனாப்பிள் ஜூஸ்",
    tagline: "பைனாப்பிள் ஜூஸ் - ஆனந்த பவன் சிறப்பு",
    description: "பைனாப்பிள் ஜூஸ் - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "cb-grape-juice": {
    name: "கிரேப் ஜூஸ்",
    tagline: "கிரேப் ஜூஸ் - ஆனந்த பவன் சிறப்பு",
    description: "கிரேப் ஜூஸ் - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "cb-mango-juice": {
    name: "மேங்கோ ஜூஸ்",
    tagline: "மேங்கோ ஜூஸ் - ஆனந்த பவன் சிறப்பு",
    description: "மேங்கோ ஜூஸ் - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "cb-muskmelon-juice": {
    name: "முலாம்பழம் ஜூஸ்",
    tagline: "முலாம்பழம் ஜூஸ் - ஆனந்த பவன் சிறப்பு",
    description: "முலாம்பழம் ஜூஸ் - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "cb-watermelon-juice": {
    name: "வாட்டர் மெலன் ஜூஸ்",
    tagline: "வாட்டர் மெலன் ஜூஸ் - ஆனந்த பவன் சிறப்பு",
    description: "வாட்டர் மெலன் ஜூஸ் - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "cb-sapodilla-juice": {
    name: "சப்போட்டா ஜூஸ்",
    tagline: "சப்போட்டா ஜூஸ் - ஆனந்த பவன் சிறப்பு",
    description: "சப்போட்டா ஜூஸ் - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "cb-red-banana-juice": {
    name: "செவ்வாழை ஜூஸ்",
    tagline: "செவ்வாழை ஜூஸ் - ஆனந்த பவன் சிறப்பு",
    description: "செவ்வாழை ஜூஸ் - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "cb-papaya-juice": {
    name: "பப்பாளி ஜூஸ்",
    tagline: "பப்பாளி ஜூஸ் - ஆனந்த பவன் சிறப்பு",
    description: "பப்பாளி ஜூஸ் - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "cb-lemon-juice": {
    name: "லெமன் ஜூஸ்",
    tagline: "லெமன் ஜூஸ் - ஆனந்த பவன் சிறப்பு",
    description: "லெமன் ஜூஸ் - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "cb-cocktail": {
    name: "காக்டைல் ஜூஸ்",
    tagline: "காக்டைல் ஜூஸ் - ஆனந்த பவன் சிறப்பு",
    description: "காக்டைல் ஜூஸ் - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "cb-ginger-lemon-juice": {
    name: "ஜிஞ்ஜர் லெமன் ஜூஸ்",
    tagline: "ஜிஞ்ஜர் லெமன் ஜூஸ் - ஆனந்த பவன் சிறப்பு",
    description: "ஜிஞ்ஜர் லெமன் ஜூஸ் - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "cb-mint-lemon-juice": {
    name: "புதினா லெமன் ஜூஸ்",
    tagline: "புதினா லெமன் ஜூஸ் - ஆனந்த பவன் சிறப்பு",
    description: "புதினா லெமன் ஜூஸ் - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "cb-lemon-soda": {
    name: "லெமன் சோடா",
    tagline: "லெமன் சோடா - ஆனந்த பவன் சிறப்பு",
    description: "லெமன் சோடா - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "cb-blue-mujito-juice": {
    name: "ப்ளூ முஜிட்டோ ஜூஸ்",
    tagline: "ப்ளூ முஜிட்டோ ஜூஸ் - ஆனந்த பவன் சிறப்பு",
    description: "ப்ளூ முஜிட்டோ ஜூஸ் - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "cb-cold-coffee": {
    name: "கோல்ட் காபி",
    tagline: "கோல்ட் காபி - ஆனந்த பவன் சிறப்பு",
    description: "கோல்ட் காபி - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "cb-rose-milk": {
    name: "ரோஸ் மில்க்",
    tagline: "ரோஸ் மில்க் - ஆனந்த பவன் சிறப்பு",
    description: "ரோஸ் மில்க் - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "cb-badamgeer": {
    name: "பாதாங்கீர்",
    tagline: "பாதாங்கீர் - ஆனந்த பவன் சிறப்பு",
    description: "பாதாங்கீர் - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "cb-dates-juice": {
    name: "பேரிச்சை ஜூஸ்",
    tagline: "பேரிச்சை ஜூஸ் - ஆனந்த பவன் சிறப்பு",
    description: "பேரிச்சை ஜூஸ் - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "cb-lassi": {
    name: "லஸ்ஸி",
    tagline: "லஸ்ஸி - ஆனந்த பவன் சிறப்பு",
    description: "லஸ்ஸி - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "ms-vanilla-milkshake": {
    name: "வெண்ணிலா மில்க் ஷேக்",
    tagline: "வெண்ணிலா மில்க் ஷேக் - ஆனந்த பவன் சிறப்பு",
    description: "வெண்ணிலா மில்க் ஷேக் - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "ms-chocolate-milkshake": {
    name: "சாக்லேட் மில்க் ஷேக்",
    tagline: "சாக்லேட் மில்க் ஷேக் - ஆனந்த பவன் சிறப்பு",
    description: "சாக்லேட் மில்க் ஷேக் - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "ms-butterscotch-milkshake": {
    name: "பட்டர் ஸ்காட்ச் மில்க் ஷேக்",
    tagline: "பட்டர் ஸ்காட்ச் மில்க் ஷேக் - ஆனந்த பவன் சிறப்பு",
    description: "பட்டர் ஸ்காட்ச் மில்க் ஷேக் - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "ms-strawberry-milkshake": {
    name: "ஸ்ட்ராபெரி மில்க் ஷேக்",
    tagline: "ஸ்ட்ராபெரி மில்க் ஷேக் - ஆனந்த பவன் சிறப்பு",
    description: "ஸ்ட்ராபெரி மில்க் ஷேக் - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "ms-pista-milkshake": {
    name: "பிஸ்தா மில்க் ஷேக்",
    tagline: "பிஸ்தா மில்க் ஷேக் - ஆனந்த பவன் சிறப்பு",
    description: "பிஸ்தா மில்க் ஷேக் - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "ms-black-current-milkshake": {
    name: "பிளாக் கரண்ட் மில்க் ஷேக்",
    tagline: "பிளாக் கரண்ட் மில்க் ஷேக் - ஆனந்த பவன் சிறப்பு",
    description: "பிளாக் கரண்ட் மில்க் ஷேக் - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "dst-vanilla": {
    name: "வெண்ணிலா",
    tagline: "வெண்ணிலா - ஆனந்த பவன் சிறப்பு",
    description: "வெண்ணிலா - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "dst-strawberry": {
    name: "ஸ்ட்ராபெரி",
    tagline: "ஸ்ட்ராபெரி - ஆனந்த பவன் சிறப்பு",
    description: "ஸ்ட்ராபெரி - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "dst-butterscotch": {
    name: "பட்டர் ஸ்காட்ச்",
    tagline: "பட்டர் ஸ்காட்ச் - ஆனந்த பவன் சிறப்பு",
    description: "பட்டர் ஸ்காட்ச் - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "dst-chocolate": {
    name: "சாக்லேட்",
    tagline: "சாக்லேட் - ஆனந்த பவன் சிறப்பு",
    description: "சாக்லேட் - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "dst-pista": {
    name: "பிஸ்தா",
    tagline: "பிஸ்தா - ஆனந்த பவன் சிறப்பு",
    description: "பிஸ்தா - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "dst-pineapple": {
    name: "பைனாப்பிள்",
    tagline: "பைனாப்பிள் - ஆனந்த பவன் சிறப்பு",
    description: "பைனாப்பிள் - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "dst-black-current": {
    name: "ப்ளக்கரண்ட்",
    tagline: "ப்ளக்கரண்ட் - ஆனந்த பவன் சிறப்பு",
    description: "ப்ளக்கரண்ட் - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "dst-plain-fruits": {
    name: "பிளைன் ஃப்ரூட்ஸ்",
    tagline: "பிளைன் ஃப்ரூட்ஸ் - ஆனந்த பவன் சிறப்பு",
    description: "பிளைன் ஃப்ரூட்ஸ் - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "dst-fruit-salad-with-ice-cream": {
    name: "ஃப்ரூட் சாலட் வித் ஐஸ்கிரீம்",
    tagline: "ஃப்ரூட் சாலட் வித் ஐஸ்கிரீம் - ஆனந்த பவன் சிறப்பு",
    description: "ஃப்ரூட் சாலட் வித் ஐஸ்கிரீம் - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "dst-fruit-salad-ice-cream-with-jelly": {
    name: "ஃப்ரூட் சாலட்  ஐஸ்கிரீம் வித் ஜெல்லி",
    tagline: "ஃப்ரூட் சாலட்  ஐஸ்கிரீம் வித் ஜெல்லி - ஆனந்த பவன் சிறப்பு",
    description: "ஃப்ரூட் சாலட்  ஐஸ்கிரீம் வித் ஜெல்லி - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "dst-falooda": {
    name: "ஃபலூடா",
    tagline: "ஃபலூடா - ஆனந்த பவன் சிறப்பு",
    description: "ஃபலூடா - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "dst-fruit-falooda": {
    name: "ஃப்ரூட் ஃபலூடா",
    tagline: "ஃப்ரூட் ஃபலூடா - ஆனந்த பவன் சிறப்பு",
    description: "ஃப்ரூட் ஃபலூடா - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "dst-falooda-with-nuts": {
    name: "ஃபலூடா வித் நட்ஸ்",
    tagline: "ஃபலூடா வித் நட்ஸ் - ஆனந்த பவன் சிறப்பு",
    description: "ஃபலூடா வித் நட்ஸ் - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  },
  "dst-falooda-with-jelly": {
    name: "ஃபலூடா வித் ஜெல்லி",
    tagline: "ஃபலூடா வித் ஜெல்லி - ஆனந்த பவன் சிறப்பு",
    description: "ஃபலூடா வித் ஜெல்லி - தூய சைவ நறுமணக் கூட்டுப்பொருட்கள் மற்றும் பாரம்பரிய முறைப்படி சுடச்சுட தயாரிக்கப்படுகிறது.",
  }
};
