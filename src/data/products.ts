// Product data for STS-SOLUTION website

export interface Product {
  slug: string;
  name: string;
  category: string;
  categorySlug: string;
  shortDescription: string;
  description: string;
  features: string[];
  applications: string[];
  certifications: string[];
  specifications: { label: string; value: string }[];
  images: string[];
}

export interface ProductCategory {
  slug: string;
  name: string;
  description: string;
  icon: string;
  image: string;
}

export const productCategories: ProductCategory[] = [
  {
    slug: 'fire-doors',
    name: 'Fire Doors',
    description:
      'UL & 3C certified fire doors engineered for maximum safety. Available in stainless steel, wood grain, glass, wind-resistant and oversized configurations for commercial and industrial applications.',
    icon: '🛡️',
    image: '/images/products/stainless-steel-fire-door.jpg',
  },
  {
    slug: 'multifunctional-doors',
    name: 'Multifunctional Doors',
    description:
      'Advanced electric sliding, shielded and automatic door systems combining intelligent control technology with fire-rated construction for hospitals, laboratories and modern commercial buildings.',
    icon: '🏥',
    image: '/images/products/electric-sliding-partition.jpg',
  },
  {
    slug: 'premium-doors',
    name: 'Premium & Specialty Doors',
    description:
      'Luxury armored entrance doors and high-quality interior steel doors with multiple surface finishes — copper-carved, wood grain, PVC and more — for residential and commercial spaces.',
    icon: '✨',
    image: '/images/products/armored-entrance-door.jpg',
  },
];

export const products: Product[] = [
  // ─── Fire Doors ───────────────────────────────────────────────────────────────
  {
    slug: 'stainless-steel-fire-door',
    name: 'Stainless Steel Fire Door',
    category: 'Fire Doors',
    categorySlug: 'fire-doors',
    shortDescription:
      'Premium 304/316 stainless steel fire doors with mirror or brushed finish — ideal for hospitals, clean rooms and high-end commercial spaces.',
    description:
      'STS stainless steel fire doors are precision-manufactured from 304/316 stainless steel using advanced sheet-metal processing technology. The door leaf is filled with a fire-resistant mineral core, achieving fire ratings from A30 to A180. The corrosion-resistant surface (mirror #8, brushed #4, hairline or satin finish) requires minimal maintenance and meets the stringent hygiene requirements of medical facilities and clean rooms. Each door is fitted with fire-rated stainless steel hardware including lockset, hinges and door closer, and is certified to both UL and 3C standards.',
    features: [
      'Fire resistance: A30 / A60 / A90 / A120 / A180',
      '304 / 316 stainless steel — fully corrosion-resistant',
      'Mirror, brushed, hairline and satin surface finishes',
      'Fire-resistant mineral core filling',
      'Self-closing fire-rated door closer included',
      'Intumescent seals activated at 160 °C',
      'Custom single-leaf or double-leaf configurations',
      'Available with vision panel (fire-rated glass)',
    ],
    applications: [
      'Hospitals and medical facilities',
      'Pharmaceutical clean rooms',
      'Food processing plants',
      'Hotel lobbies and corridors',
      'High-end commercial buildings',
    ],
    certifications: ['UL Certified', '3C Certified', 'ISO 9001'],
    specifications: [
      { label: 'Fire Rating', value: 'A30 / A60 / A90 / A120 / A180' },
      { label: 'Material', value: '304 / 316 Stainless Steel' },
      { label: 'Leaf Thickness', value: '45 mm / 50 mm / 55 mm' },
      { label: 'Surface Finish', value: 'Mirror #8 / Brushed #4 / Hairline / Satin' },
      { label: 'Standard Size', value: '2100×900 mm / 2100×1000 mm (custom available)' },
      { label: 'Max Single Leaf Width', value: '1400 mm' },
      { label: 'Filling Material', value: 'Fire-resistant Mineral Core' },
      { label: 'Hardware', value: 'SS Fire-rated Lockset, Hinges, Closer' },
    ],
    images: ['/images/products/stainless-steel-fire-door.jpg'],
  },
  {
    slug: 'stainless-glass-fire-door',
    name: 'Stainless Steel Glass Fire Door',
    category: 'Fire Doors',
    categorySlug: 'fire-doors',
    shortDescription:
      'Full-vision fire-rated glass door in stainless steel frame — combining transparency with fire compartmentation for modern architectural spaces.',
    description:
      'The STS stainless steel glass fire door features a stainless steel frame with a large-area fire-rated glass panel, delivering both visual openness and reliable fire compartmentation. The fire-rated ceramic or tempered glass panel is bonded to the frame with fire-resistant structural sealant, ensuring integrity throughout the rated period. Suitable for corridors, lobbies and partition walls where visibility and fire safety are both required. Available with single or double-leaf configurations and optional sidelights.',
    features: [
      'Fire resistance: A30 / A60 / A90',
      'Large-area fire-rated glass panel for maximum visibility',
      '304 stainless steel frame — brushed or mirror finish',
      'Fire-rated ceramic or heat-soaked tempered glass',
      'Intumescent glazing seal activated at 160 °C',
      'Self-closing door closer included',
      'Slim profile for modern architectural aesthetics',
      'Optional sidelights and transoms',
    ],
    applications: [
      'Office building corridors',
      'Hotel lobbies',
      'Shopping mall fire compartments',
      'Hospital corridors',
      'Museum and exhibition halls',
    ],
    certifications: ['UL Certified', '3C Certified'],
    specifications: [
      { label: 'Fire Rating', value: 'A30 / A60 / A90' },
      { label: 'Frame Material', value: '304 Stainless Steel' },
      { label: 'Glass Type', value: 'Fire-rated Ceramic / Heat-soaked Tempered Glass' },
      { label: 'Glass Thickness', value: '6 mm – 20 mm (per fire rating)' },
      { label: 'Frame Finish', value: 'Mirror #8 / Brushed #4' },
      { label: 'Leaf Thickness', value: '50 mm / 55 mm' },
      { label: 'Standard Size', value: '2100×900 mm / 2100×1000 mm' },
      { label: 'Hardware', value: 'Fire-rated Lockset, Hinges, Closer' },
    ],
    images: ['/images/products/stainless-glass-fire-door.jpg'],
  },
  {
    slug: 'wind-resistant-fire-door',
    name: 'Wind-Resistant Fire Door',
    category: 'Fire Doors',
    categorySlug: 'fire-doors',
    shortDescription:
      'Heavy-duty stainless steel fire door engineered to withstand extreme wind pressure — built for high-rise, coastal and hurricane-zone buildings.',
    description:
      'The STS wind-resistant fire door combines certified fire protection with structural resistance to high wind loads. The reinforced stainless steel frame and heavy-gauge door leaf are designed to Class 5 wind pressure resistance (≥5.0 kPa), meeting the requirements of high-rise buildings and areas subject to typhoons or coastal winds. A multi-point locking system and combined intumescent + weather-resistant seals ensure both fire integrity and air/water tightness. The panic bar (push bar) exit device allows safe egress in an emergency.',
    features: [
      'Fire resistance: A60 / A90 / A120 / A180',
      'Wind load resistance: Class 5 (≥5.0 kPa)',
      'Water resistance: ≥500 Pa',
      'Air permeability: Class 3',
      'Multi-point fire-rated locking system',
      'Panic bar (push bar) exit device for safe egress',
      'Combined intumescent + weather-resistant seals',
      'Reinforced heavy-gauge stainless steel construction',
    ],
    applications: [
      'High-rise commercial and residential buildings',
      'Coastal and typhoon-zone buildings',
      'Elevator shafts and stairwells',
      'Airport terminals',
      'Skyscrapers',
    ],
    certifications: ['UL Certified', '3C Certified', 'ISO 9001'],
    specifications: [
      { label: 'Fire Rating', value: 'A60 / A90 / A120 / A180' },
      { label: 'Wind Load Resistance', value: '≥5.0 kPa (Class 5)' },
      { label: 'Water Resistance', value: '≥500 Pa' },
      { label: 'Air Permeability', value: 'Class 3' },
      { label: 'Material', value: 'Heavy-gauge Stainless Steel (1.2 mm – 1.5 mm)' },
      { label: 'Locking System', value: 'Multi-point Fire-rated Locking' },
      { label: 'Seal Type', value: 'Intumescent + Weather Strip' },
      { label: 'Exit Device', value: 'Panic Bar / Push Bar (standard)' },
    ],
    images: ['/images/products/wind-resistant-fire-door.jpg'],
  },
  {
    slug: 'wood-grain-fire-door',
    name: 'Wood Grain Fire Door',
    category: 'Fire Doors',
    categorySlug: 'fire-doors',
    shortDescription:
      'Certified fire door with realistic wood-grain surface finish — the warmth of timber with the safety of steel, for offices, hotels and upscale residential buildings.',
    description:
      'The STS wood-grain fire door offers the aesthetic appeal of natural wood while meeting full fire-door safety standards. A cold-rolled steel structure with fire-resistant mineral core is finished with a high-quality PVC wood-grain film or powder-coated wood-effect surface, producing a realistic timber look without the maintenance drawbacks of real wood. Suitable for office buildings, star hotels and high-end residential corridors where design and safety must coexist. Available in a wide range of wood-grain patterns and door leaf configurations.',
    features: [
      'Fire resistance: A30 / A60 / A90 / A120',
      'Realistic PVC wood-grain film or powder-coat finish',
      'Steel structure — no warping, cracking or swelling',
      'Fire-resistant mineral core filling',
      'Self-closing fire-rated door closer included',
      'Rich selection of wood-grain patterns and tones',
      'Single or double leaf, with or without vision panel',
      'Compliant with UL 10C and GB 12955 standards',
    ],
    applications: [
      'Office buildings',
      'Star-rated hotels',
      'High-end apartment corridors',
      'Schools and universities',
      'Commercial retail spaces',
    ],
    certifications: ['UL Certified', '3C Certified', 'ISO 9001'],
    specifications: [
      { label: 'Fire Rating', value: 'A30 / A60 / A90 / A120' },
      { label: 'Structure', value: 'Cold-rolled Steel with Fire-resistant Mineral Core' },
      { label: 'Leaf Thickness', value: '45 mm / 50 mm / 55 mm' },
      { label: 'Surface Finish', value: 'PVC Wood-grain Film / Powder-coat Wood Effect' },
      { label: 'Standard Size', value: '2100×900 mm / 2100×1000 mm (custom available)' },
      { label: 'Pattern Options', value: 'Oak / Walnut / Teak / Cherry / Custom' },
      { label: 'Filling Material', value: 'Fire-resistant Mineral Wool' },
      { label: 'Hardware', value: 'Fire-rated Lockset, Hinges, Closer' },
    ],
    images: ['/images/products/wood-grain-fire-door.jpg'],
  },
  {
    slug: 'oversized-fire-door',
    name: 'Oversized Fire Door',
    category: 'Fire Doors',
    categorySlug: 'fire-doors',
    shortDescription:
      'Custom large-format fire doors for industrial and special architectural openings — single leaf up to 4 m wide, engineered for maximum structural integrity.',
    description:
      'STS oversized fire doors are purpose-built for openings that far exceed standard dimensions. Using reinforced heavy-gauge steel construction with internal rib reinforcement, these doors deliver reliable fire protection for the large openings found in industrial plants, aircraft hangars, warehouses and exhibition centres. Each door is custom-designed to match the specific structural and fire-rating requirements of the project, with heavy-duty hardware sized to the leaf weight and operating frequency.',
    features: [
      'Fire resistance: A60 / A90 / A120 / A180',
      'Single leaf width up to 4000 mm+',
      'Single leaf height up to 4000 mm+',
      'Internal steel rib reinforcement for structural integrity',
      'Heavy-duty fire-rated hinges and closers',
      'Available in swing, sliding and bi-fold configurations',
      'Custom paint colours and surface finishes',
      'Wind load resistance option available',
    ],
    applications: [
      'Industrial manufacturing plants',
      'Aircraft hangars',
      'Warehouse and logistics centres',
      'Exhibition and convention halls',
      'Large commercial atriums',
    ],
    certifications: ['3C Certified', 'ISO 9001'],
    specifications: [
      { label: 'Fire Rating', value: 'A60 / A90 / A120 / A180' },
      { label: 'Material', value: 'Reinforced Heavy-gauge Steel' },
      { label: 'Max Single Leaf Width', value: '4000 mm+' },
      { label: 'Max Single Leaf Height', value: '4000 mm+' },
      { label: 'Leaf Thickness', value: '55 mm / 65 mm / Custom' },
      { label: 'Reinforcement', value: 'Internal Steel Rib Reinforcement' },
      { label: 'Hardware', value: 'Heavy-duty Fire-rated Hinges, Closer, Lockset' },
      { label: 'Opening Type', value: 'Single Swing / Double Swing / Sliding' },
    ],
    images: ['/images/products/oversized-fire-door.jpg'],
  },

  // ─── Multifunctional Doors ────────────────────────────────────────────────────
  {
    slug: 'electric-sliding-partition',
    name: 'Electric Sliding Fire Partition',
    category: 'Multifunctional Doors',
    categorySlug: 'multifunctional-doors',
    shortDescription:
      'Large-span motorised glass sliding partition with fire-rated option — integrates space division, natural light and fire compartmentation in one system.',
    description:
      'The STS electric sliding fire partition (model STS-P series) is a motorised large-span sliding system that can span openings from 3 m to 20 m+ in width. Typically installed with fire-rated glass panels, it allows a lobby or atrium to remain visually open during normal operation while automatically sliding closed to form a certified fire compartment upon activation of a fire signal. The DC brushless motor drive is virtually silent and the anti-pinch safety sensor prevents injury. The system integrates with BMS, fire alarm panels and access control systems.',
    features: [
      'Fire resistance: A60 / A90 (fire-rated glass partition version)',
      'Clear span up to 20 m+ (multi-panel telescopic)',
      'DC brushless motor — quiet, energy-efficient',
      'Anti-pinch infrared safety sensor',
      'Auto-close on fire signal (BMS / fire alarm integration)',
      'Fire-rated glass panels for visibility and compartmentation',
      'Remote control, push-button and access-card operation',
      'Emergency manual override function',
    ],
    applications: [
      'Hotel and office building lobbies',
      'Airport terminals',
      'Shopping mall atriums',
      'Conference and banquet halls',
      'Hospital reception areas',
    ],
    certifications: ['3C Certified', 'ISO 9001'],
    specifications: [
      { label: 'Fire Rating', value: 'A60 / A90 (glass partition version)' },
      { label: 'Max Clear Span', value: 'Up to 20 m+ (telescopic multi-panel)' },
      { label: 'Drive System', value: 'DC Brushless Motor' },
      { label: 'Opening Speed', value: '0.2 – 0.5 m/s (adjustable)' },
      { label: 'Max Leaf Weight', value: '300 kg per panel' },
      { label: 'Sensor Type', value: 'Infrared Anti-pinch + Microwave Presence' },
      { label: 'Power Supply', value: 'AC 220 V / 50 Hz' },
      { label: 'Integration', value: 'BMS / Fire Alarm / Access Control' },
    ],
    images: [
      '/images/products/electric-sliding-partition.jpg',
      '/images/products/electric-sliding-partition-2.jpg',
    ],
  },
  {
    slug: 'shielded-door',
    name: 'Electric Shielded Door',
    category: 'Multifunctional Doors',
    categorySlug: 'multifunctional-doors',
    shortDescription:
      'Motorised electromagnetic-shielded sliding door combining fire protection and EMI/RFI shielding — designed for MRI rooms, data centres and military facilities.',
    description:
      'The STS electric shielded door (model S-ESS series) integrates an automatic sliding door mechanism with electromagnetic interference (EMI) shielding to achieve both fire compartmentation and signal isolation in a single product. The double-layer steel construction with conductive copper or nickel-plated gasket sealing provides shielding effectiveness from 30 dB to 100 dB across a frequency range of 10 kHz to 10 GHz. The motorised operation and touch/sensor activation make it suitable for high-traffic medical and scientific environments.',
    features: [
      'Fire resistance: A60 / A90 / A120',
      'EMI/RFI shielding effectiveness: 30 dB – 100 dB (custom)',
      'Frequency range: 10 kHz – 10 GHz',
      'Double-layer steel construction with conductive seal',
      'Motorised sliding operation with infrared sensor',
      'Auto-close on fire signal',
      'Waveguide vent and filtered cable entries available',
      'Shielding classes C / B / A (per IEEE 299)',
    ],
    applications: [
      'Hospital MRI rooms',
      'Data centres and server rooms',
      'Military and government facilities',
      'Research and testing laboratories',
      'Telecommunications centres',
    ],
    certifications: ['3C Certified', 'ISO 9001'],
    specifications: [
      { label: 'Fire Rating', value: 'A60 / A90 / A120' },
      { label: 'Shielding Effectiveness', value: '30 dB – 100 dB (custom)' },
      { label: 'Frequency Range', value: '10 kHz – 10 GHz' },
      { label: 'Material', value: 'Double-layer Galvanised Steel' },
      { label: 'Conductive Seal', value: 'Copper / Nickel-plated Gasket' },
      { label: 'Leaf Thickness', value: '60 mm – 80 mm' },
      { label: 'Operation', value: 'Motorised Sliding with Infrared Sensor' },
      { label: 'Shielding Class', value: 'C / B / A (customisable)' },
    ],
    images: ['/images/products/shielded-door.jpg'],
  },
  {
    slug: 'automatic-sliding-door',
    name: 'Automatic Sliding Door',
    category: 'Multifunctional Doors',
    categorySlug: 'multifunctional-doors',
    shortDescription:
      'Intelligent automatic sliding door system (model T-ESS50) — smooth, quiet, energy-efficient operation for hospitals, hotels and high-traffic public buildings.',
    description:
      'The STS T-ESS50 automatic sliding door is a high-performance motorised sliding door designed for frequent, high-traffic use. The DC brushless motor delivers quiet, smooth operation while consuming significantly less energy than AC-motor alternatives. The system supports microwave, infrared and combined sensor configurations and can be programmed for one-way or two-way traffic control. Fire-rated versions are available that automatically close upon receiving a fire alarm signal. The T-ESS50 is widely installed at hospital entrances, hotel lobbies and airport terminals.',
    features: [
      'T-ESS50 DC brushless motor — ultra-quiet and long-lasting',
      'Fire-rated option: A30 / A60 (auto-close on fire signal)',
      'Opening speed: 0.3 – 0.6 m/s (adjustable)',
      'Anti-pinch safety sensor (microwave + infrared)',
      'One-way and two-way traffic control modes',
      'Low energy consumption vs. AC motor systems',
      'Hold-open, eco-mode and night-lock functions',
      'Compatible with access control and BMS systems',
    ],
    applications: [
      'Hospital main and secondary entrances',
      'Hotel lobbies',
      'Airport terminals and transit areas',
      'Shopping malls and retail stores',
      'Office building entrances',
    ],
    certifications: ['3C Certified', 'ISO 9001'],
    specifications: [
      { label: 'Model', value: 'T-ESS50' },
      { label: 'Fire Rating', value: 'A30 / A60 (available)' },
      { label: 'Drive System', value: 'DC Brushless Motor' },
      { label: 'Opening Speed', value: '0.3 – 0.6 m/s (adjustable)' },
      { label: 'Max Leaf Weight', value: '150 kg (single) / 120 kg × 2 (double)' },
      { label: 'Sensor Type', value: 'Microwave / Infrared / Combined' },
      { label: 'Power Supply', value: 'AC 220 V / 50 Hz' },
      { label: 'Emergency Function', value: 'Auto-open on power failure; auto-close on fire signal' },
    ],
    images: ['/images/products/automatic-sliding-door.jpg'],
  },

  // ─── Premium & Specialty Doors ────────────────────────────────────────────────
  {
    slug: 'armored-entrance-door',
    name: 'Armored Entrance Door',
    category: 'Premium & Specialty Doors',
    categorySlug: 'premium-doors',
    shortDescription:
      'Luxury copper-carved armored entrance door — multi-layer anti-theft structure with bespoke artistic relief panels for high-end villas and landmark buildings.',
    description:
      'The STS armored entrance door represents the pinnacle of security and artistry. A multi-layer armored steel structure (Class A/B/C anti-theft rating) provides robust security while the outer surface is clad in hand-crafted copper relief panels featuring traditional or contemporary designs. The door is fitted with a Grade-A anti-pick, anti-drill, anti-bump security lockset with multiple locking points. Beneath the decorative copper cladding, a mineral-wool insulation layer provides excellent thermal and acoustic performance. Available in custom dimensions and artistic designs for villa main entrances, luxury apartment lobbies and landmark building facades.',
    features: [
      'Class B / A anti-theft security rating',
      'Multi-point locking system (6 – 12 locking points)',
      'Hand-crafted copper relief decorative panels',
      'Multi-layer armored steel structure',
      'Grade-A anti-pick, anti-drill, anti-bump lockset',
      'Mineral-wool thermal and acoustic insulation',
      'Custom artistic relief designs (traditional and contemporary)',
      'Optional smart lock and fingerprint/face-recognition access',
    ],
    applications: [
      'Luxury villa main entrances',
      'High-end residential apartment lobbies',
      'Private clubs and members\' facilities',
      'Landmark commercial building entrances',
      'Hotel presidential suites',
    ],
    certifications: ['GA 374 (Anti-theft Door Standard)', 'ISO 9001'],
    specifications: [
      { label: 'Security Class', value: 'Class B / A (GA 374)' },
      { label: 'Locking Points', value: '6 – 12 (multi-point system)' },
      { label: 'Outer Cladding', value: 'Hand-crafted Copper Relief Panel' },
      { label: 'Structure', value: 'Multi-layer Armored Steel' },
      { label: 'Leaf Thickness', value: '80 mm – 120 mm' },
      { label: 'Lockset Grade', value: 'Grade A (anti-pick, anti-drill, anti-bump)' },
      { label: 'Insulation', value: 'Mineral Wool (thermal + acoustic)' },
      { label: 'Smart Lock', value: 'Optional (fingerprint / face recognition / card)' },
    ],
    images: ['/images/products/armored-entrance-door.jpg'],
  },
  {
    slug: 'steel-fire-door',
    name: 'Steel Fire Door',
    category: 'Premium & Specialty Doors',
    categorySlug: 'premium-doors',
    shortDescription:
      'Powder-coated steel fire door with optional vision panel — robust, versatile and available in custom colours for commercial and institutional buildings.',
    description:
      'The STS steel fire door is manufactured from cold-rolled steel using advanced sheet-metal processing, with a fire-resistant mineral core achieving ratings from A30 to A180. A durable powder-coat surface finish provides excellent corrosion resistance and is available in any RAL colour to match building specifications. Optional vision panels with fire-rated glass are available for corridor and stairwell applications. Fitted with certified fire-rated hardware, these doors are suitable for all building types from hospitals and schools to warehouses and industrial facilities.',
    features: [
      'Fire resistance: A30 / A60 / A90 / A120 / A180',
      'Cold-rolled steel construction (0.8 mm – 1.5 mm)',
      'Powder-coat finish in any RAL colour',
      'Fire-resistant mineral core',
      'Optional vision panel with fire-rated glass',
      'Intumescent seals activated at 160 °C',
      'Custom sizes and configurations available',
      'Low-maintenance, easy-clean surface',
    ],
    applications: [
      'Commercial and office buildings',
      'Hotels and serviced apartments',
      'Hospitals and schools',
      'Industrial and warehouse facilities',
      'Underground car parks',
    ],
    certifications: ['UL Certified', '3C Certified', 'ISO 9001'],
    specifications: [
      { label: 'Fire Rating', value: 'A30 / A60 / A90 / A120 / A180' },
      { label: 'Material', value: 'Cold-rolled Steel (0.8 mm – 1.5 mm)' },
      { label: 'Leaf Thickness', value: '45 mm / 50 mm / 55 mm' },
      { label: 'Standard Size', value: '2100×900 mm / 2100×1000 mm / 2100×1200 mm' },
      { label: 'Max Single Leaf Width', value: '1300 mm' },
      { label: 'Surface Finish', value: 'Powder Coated (any RAL) / Primed for Painting' },
      { label: 'Vision Panel', value: 'Optional (fire-rated glass)' },
      { label: 'Hardware', value: 'Fire-rated Lockset, Hinges, Closer' },
    ],
    images: [
      '/images/products/steel-fire-door.png',
      '/images/products/steel-fire-door-window.png',
    ],
  },
  {
    slug: 'interior-steel-door',
    name: 'Interior Steel Door',
    category: 'Premium & Specialty Doors',
    categorySlug: 'premium-doors',
    shortDescription:
      'High-quality interior steel doors in multiple finishes — PVC wood grain, copper-plated, painted — for offices, hospital wards, bathrooms and smart-lock applications.',
    description:
      'STS interior steel doors combine the structural durability of a steel core with diverse decorative surface options to suit every interior environment. The range includes PVC wood-grain film, copper-plated, solid colour powder-coat and stainless steel finishes, as well as models with vision panels, bathroom privacy louvres and built-in smart lock preparation. The mineral-wool or honeycomb core provides good acoustic insulation, and all versions can be supplied with a standard or heavy-duty door closer. Widely used across office buildings, hospital wards, hotel rooms and residential projects.',
    features: [
      'Multiple surface finishes: PVC wood grain, copper-plated, powder-coat, stainless',
      'Vision panel option with toughened or fire-rated glass',
      'Smart lock preparation (fingerprint / card / app)',
      'Acoustic insulation (mineral wool or honeycomb core)',
      'Louvre ventilation option for bathroom / utility doors',
      'Fire-rated version available (A30 / A60)',
      'Single or double leaf, standard and custom sizes',
      'Compatible with all standard door hardware',
    ],
    applications: [
      'Office partitions and internal corridors',
      'Hospital ward and operating-room doors',
      'Hotel guest room doors',
      'Bathroom and utility doors',
      'Residential apartment doors',
    ],
    certifications: ['3C Certified', 'ISO 9001'],
    specifications: [
      { label: 'Fire Rating', value: 'A30 / A60 (available); non-rated standard' },
      { label: 'Material', value: 'Cold-rolled Steel (0.8 mm – 1.2 mm)' },
      { label: 'Leaf Thickness', value: '40 mm / 45 mm / 50 mm' },
      { label: 'Surface Finish', value: 'PVC Wood-grain / Copper-plated / Powder-coat / SS' },
      { label: 'Standard Size', value: '2000×800 mm / 2100×900 mm (custom available)' },
      { label: 'Core Material', value: 'Mineral Wool / Honeycomb' },
      { label: 'Smart Lock Prep', value: 'Available (fingerprint / card / app compatible)' },
      { label: 'Hardware', value: 'Standard or Heavy-duty Lockset, Hinges, Closer' },
    ],
    images: [
      '/images/products/steel-door-office.jpg',
      '/images/products/steel-door-wood.jpg',
      '/images/products/steel-door-copper.jpg',
      '/images/products/steel-door-smart.jpg',
      '/images/products/steel-door-bathroom.jpg',
      '/images/products/steel-door-ward.jpg',
    ],
  },
];

export function getProductsByCategory(categorySlug: string): Product[] {
  return products.filter((p) => p.categorySlug === categorySlug);
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
