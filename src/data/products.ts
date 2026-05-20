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
      'UL & 3C certified fire doors engineered for maximum safety and durability. Available in steel, stainless steel, and glass configurations for commercial and industrial applications.',
    icon: '🛡️',
    image: '/images/products/fire-door-category.jpg',
  },
  {
    slug: 'specialized-doors',
    name: 'Specialized Doors',
    description:
      'Advanced door solutions for extreme environments including explosion-proof, blast-resistant, and pressure relief doors for critical infrastructure protection.',
    icon: '🏭',
    image: '/images/products/specialized-door-category.jpg',
  },
  {
    slug: 'wall-panels-hardware',
    name: 'Wall Panels & Hardware',
    description:
      'Premium copper wall panels, partitions, door frames, and precision-cast metal hardware for complete door opening system solutions.',
    icon: '⚙️',
    image: '/images/products/hardware-category.jpg',
  },
];

export const products: Product[] = [
  // Fire Doors
  {
    slug: 'steel-fire-door',
    name: 'Steel Fire Door',
    category: 'Fire Doors',
    categorySlug: 'fire-doors',
    shortDescription: 'Heavy-duty steel fire doors with superior fire resistance for commercial buildings.',
    description:
      'Our steel fire doors are manufactured using advanced sheet metal processing technology, providing reliable fire protection for commercial and industrial buildings. Available in various fire ratings from 30 minutes to 3 hours.',
    features: [
      'Fire resistance up to 3 hours',
      'Cold-rolled steel construction',
      'Advanced intumescent seal technology',
      'Custom sizes available',
      'Low maintenance design',
    ],
    applications: ['Commercial buildings', 'Hotels', 'Hospitals', 'Schools', 'Office buildings'],
    certifications: ['UL Certified', '3C Certified', 'ISO 9001'],
    specifications: [
      { label: 'Fire Rating', value: '30min - 180min' },
      { label: 'Material', value: 'Cold-rolled Steel' },
      { label: 'Thickness', value: '0.8mm - 1.5mm' },
      { label: 'Standard Size', value: '2100×900mm (Custom available)' },
    ],
    images: ['/images/products/steel-fire-door.jpg'],
  },
  {
    slug: 'stainless-steel-fire-door',
    name: 'Stainless Steel Fire Door',
    category: 'Fire Doors',
    categorySlug: 'fire-doors',
    shortDescription: 'Premium stainless steel fire doors combining elegance with superior fire protection.',
    description:
      'Stainless steel fire doors offer the same reliable fire protection as our steel doors with the added benefits of corrosion resistance and a premium appearance. Ideal for environments requiring both safety and aesthetics.',
    features: [
      'Corrosion-resistant stainless steel',
      'Premium mirror or brushed finish',
      'Fire resistance up to 3 hours',
      'Easy to clean and maintain',
      'Modern aesthetic design',
    ],
    applications: ['Luxury hotels', 'Medical facilities', 'Food processing plants', 'Clean rooms', 'High-end commercial'],
    certifications: ['UL Certified', '3C Certified', 'ISO 9001'],
    specifications: [
      { label: 'Fire Rating', value: '30min - 180min' },
      { label: 'Material', value: '304/316 Stainless Steel' },
      { label: 'Finish', value: 'Mirror / Brushed / Hairline' },
      { label: 'Standard Size', value: '2100×900mm (Custom available)' },
    ],
    images: ['/images/products/stainless-fire-door.jpg'],
  },
  {
    slug: 'oversized-fire-door',
    name: 'Oversized Fire Door',
    category: 'Fire Doors',
    categorySlug: 'fire-doors',
    shortDescription: 'Custom large-scale fire doors for industrial and special architectural applications.',
    description:
      'Our oversized fire doors are engineered for openings that exceed standard dimensions. Using reinforced steel construction and specialized hardware, we deliver fire protection for large industrial and architectural openings.',
    features: [
      'Custom dimensions up to 4m+ width',
      'Reinforced structural design',
      'Specialized heavy-duty hardware',
      'Fire resistance up to 3 hours',
      'Wind load resistance available',
    ],
    applications: ['Industrial facilities', 'Airports', 'Exhibition centers', 'Warehouse complexes', 'Large commercial spaces'],
    certifications: ['3C Certified', 'ISO 9001'],
    specifications: [
      { label: 'Fire Rating', value: '60min - 180min' },
      { label: 'Material', value: 'Reinforced Steel' },
      { label: 'Max Width', value: '4000mm+' },
      { label: 'Max Height', value: '4000mm+' },
    ],
    images: ['/images/products/oversized-fire-door.jpg'],
  },
  {
    slug: 'wind-resistant-fire-door',
    name: 'Wind-Resistant Fire Door',
    category: 'Fire Doors',
    categorySlug: 'fire-doors',
    shortDescription: 'Fire doors engineered to withstand extreme wind pressure in high-rise and coastal buildings.',
    description:
      'Wind-resistant fire doors combine fire protection with structural integrity to withstand high wind loads. Essential for high-rise buildings, coastal areas, and regions prone to extreme weather conditions.',
    features: [
      'Fire resistance up to 3 hours',
      'Wind load resistance up to 5.0 kPa',
      'Reinforced frame construction',
      'Multi-point locking system',
      'Water-resistant seals',
    ],
    applications: ['High-rise buildings', 'Coastal facilities', 'Hurricane zones', 'Skyscrapers', 'Elevator shafts'],
    certifications: ['UL Certified', '3C Certified', 'ISO 9001'],
    specifications: [
      { label: 'Fire Rating', value: '60min - 180min' },
      { label: 'Wind Load', value: 'Up to 5.0 kPa' },
      { label: 'Material', value: 'Heavy-gauge Steel' },
      { label: 'Water Resistance', value: '≥500Pa' },
    ],
    images: ['/images/products/wind-resistant-door.jpg'],
  },
  {
    slug: 'shielded-fire-door',
    name: 'Shielded Fire Door',
    category: 'Fire Doors',
    categorySlug: 'fire-doors',
    shortDescription: 'Electromagnetic shielding fire doors for sensitive equipment rooms and data centers.',
    description:
      'Shielded fire doors provide both fire protection and electromagnetic interference (EMI) shielding. Designed for facilities that require both safety and signal isolation.',
    features: [
      'Fire resistance up to 3 hours',
      'EMI/RFI shielding effectiveness',
      'Double-layer steel construction',
      'Conductive gasket sealing',
      'Custom shielding levels available',
    ],
    applications: ['Data centers', 'Military facilities', 'Research labs', 'Hospitals (MRI rooms)', 'Telecommunication centers'],
    certifications: ['3C Certified', 'ISO 9001'],
    specifications: [
      { label: 'Fire Rating', value: '60min - 180min' },
      { label: 'Shielding Effectiveness', value: 'Custom' },
      { label: 'Frequency Range', value: '10kHz - 10GHz' },
      { label: 'Material', value: 'Double-layer Steel' },
    ],
    images: ['/images/products/shielded-door.jpg'],
  },
  {
    slug: 'glass-fire-door',
    name: 'Glass Fire Door',
    category: 'Fire Doors',
    categorySlug: 'fire-doors',
    shortDescription: 'Elegant fire-rated glass doors combining transparency with life safety protection.',
    description:
      'Our glass fire doors feature fire-rated glazing in steel or stainless steel frames, providing both fire compartmentation and visual transparency. Ideal for modern architectural designs that require both safety and aesthetics.',
    features: [
      'Fire resistance up to 90 minutes',
      'Clear or wire glass options',
      'Steel or stainless steel frames',
      'Impact-resistant glazing',
      'Modern aesthetic design',
    ],
    applications: ['Lobbies and entrances', 'Shopping malls', 'Office partitions', 'Hotels', 'Museums'],
    certifications: ['UL Certified', '3C Certified'],
    specifications: [
      { label: 'Fire Rating', value: '30min - 90min' },
      { label: 'Glass Type', value: 'Fire-rated Clear/Wire Glass' },
      { label: 'Frame Material', value: 'Steel / Stainless Steel' },
      { label: 'Standard Size', value: '2100×900mm' },
    ],
    images: ['/images/products/glass-fire-door.jpg'],
  },
  // Specialized Doors
  {
    slug: 'explosion-proof-door',
    name: 'Explosion-Proof Door',
    category: 'Specialized Doors',
    categorySlug: 'specialized-doors',
    shortDescription: 'Heavy-duty explosion-proof doors for hazardous environments and critical infrastructure.',
    description:
      'Explosion-proof doors are engineered to withstand blast pressure waves while maintaining structural integrity. Essential for petrochemical plants, military facilities, and other high-risk environments.',
    features: [
      'Blast resistance up to custom specifications',
      'Reinforced multi-layer construction',
      'Pressure release mechanism available',
      'Auto-reset after blast event',
      'Various blast ratings available',
    ],
    applications: ['Petrochemical plants', 'Military facilities', 'Ammunition storage', 'Chemical laboratories', 'Power plants'],
    certifications: ['3C Certified', 'ISO 9001'],
    specifications: [
      { label: 'Blast Rating', value: 'Custom' },
      { label: 'Material', value: 'Heavy-gauge Reinforced Steel' },
      { label: 'Operation', value: 'Manual / Automatic' },
      { label: 'Size', value: 'Custom' },
    ],
    images: ['/images/products/explosion-proof-door.jpg'],
  },
  {
    slug: 'pressure-relief-door',
    name: 'Pressure Relief Door',
    category: 'Specialized Doors',
    categorySlug: 'specialized-doors',
    shortDescription: 'Pressure relief doors designed to safely vent explosive pressure in industrial environments.',
    description:
      'Pressure relief doors are designed to open automatically when internal pressure exceeds a set threshold, safely venting explosive pressure to protect structural integrity and personnel safety.',
    features: [
      'Adjustable pressure release threshold',
      'Automatic reset mechanism',
      'Fire resistance combined',
      'Weather-resistant design',
      'Low opening pressure available',
    ],
    applications: ['Industrial workshops', 'Dust collection areas', 'Chemical storage', 'Grain silos', 'Paint rooms'],
    certifications: ['3C Certified', 'ISO 9001'],
    specifications: [
      { label: 'Release Pressure', value: 'Custom (typically 50-500Pa)' },
      { label: 'Fire Rating', value: 'Available' },
      { label: 'Material', value: 'Steel / Stainless Steel' },
      { label: 'Reset', value: 'Manual / Auto' },
    ],
    images: ['/images/products/pressure-relief-door.jpg'],
  },
  {
    slug: 'automatic-door',
    name: 'Automatic Door',
    category: 'Specialized Doors',
    categorySlug: 'specialized-doors',
    shortDescription: 'Intelligent automatic door systems with fire-rated options for modern buildings.',
    description:
      'Our automatic door systems combine smart control technology with fire-rated construction. Available in sliding, swing, and telescopic configurations to meet various traffic and safety requirements.',
    features: [
      'Smart sensor control',
      'Fire-rated options available',
      'Emergency open function',
      'Low-energy consumption',
      'Anti-pinch safety sensors',
    ],
    applications: ['Hospitals', 'Hotels', 'Shopping centers', 'Airports', 'Office buildings'],
    certifications: ['3C Certified', 'ISO 9001'],
    specifications: [
      { label: 'Type', value: 'Sliding / Swing / Telescopic' },
      { label: 'Fire Rating', value: 'Available (up to 60min)' },
      { label: 'Opening Speed', value: '0.3-0.5 m/s' },
      { label: 'Drive System', value: 'DC Motor' },
    ],
    images: ['/images/products/automatic-door.jpg'],
  },
  {
    slug: 'passive-door-window',
    name: 'Passive Door & Window',
    category: 'Specialized Doors',
    categorySlug: 'specialized-doors',
    shortDescription: 'Passive fire protection doors and windows for compartmentation in building fire safety.',
    description:
      'Passive doors and windows are designed as part of a building\'s passive fire protection system, providing fire compartmentation without requiring any activation mechanism. They are always in a ready state to prevent fire and smoke spread.',
    features: [
      'No activation required - always ready',
      'Fire resistance up to 3 hours',
      'Smoke seal technology',
      'Self-closing mechanism',
      'Thermal expansion seals',
    ],
    applications: ['Stairwells', 'Elevator lobbies', 'Utility rooms', 'Fire compartments', 'Escape routes'],
    certifications: ['3C Certified', 'UL Certified'],
    specifications: [
      { label: 'Fire Rating', value: '60min - 180min' },
      { label: 'Operation', value: 'Self-closing' },
      { label: 'Smoke Resistance', value: 'Class A-C' },
      { label: 'Insulation', value: 'Available' },
    ],
    images: ['/images/products/passive-door.jpg'],
  },
  {
    slug: 'clean-airtight-door',
    name: 'Clean Airtight Door',
    category: 'Specialized Doors',
    categorySlug: 'specialized-doors',
    shortDescription: 'Airtight doors for clean rooms, laboratories, and controlled environments.',
    description:
      'Clean airtight doors are designed for environments that require strict air leakage control, including clean rooms, pharmaceutical facilities, and laboratories. They provide excellent sealing performance while maintaining fire resistance.',
    features: [
      'Air leakage rate < 1 m³/h·m²',
      'Clean room compatible materials',
      'Smooth surface for easy cleaning',
      'Fire-rated options available',
      'Interlocking system available',
    ],
    applications: ['Clean rooms', 'Pharmaceutical facilities', 'Laboratories', 'Operating rooms', 'Electronics manufacturing'],
    certifications: ['3C Certified', 'ISO 9001'],
    specifications: [
      { label: 'Air Leakage', value: '< 1 m³/h·m²' },
      { label: 'Cleanroom Class', value: 'ISO 5-8' },
      { label: 'Material', value: 'Stainless Steel' },
      { label: 'Fire Rating', value: 'Available (up to 60min)' },
    ],
    images: ['/images/products/clean-airtight-door.jpg'],
  },
  {
    slug: 'blast-door',
    name: 'Blast Door',
    category: 'Specialized Doors',
    categorySlug: 'specialized-doors',
    shortDescription: 'Military-grade blast doors for maximum protection in high-risk environments.',
    description:
      'Our blast doors are engineered to the highest standards for protection against explosive forces. Used in military installations, government buildings, and critical infrastructure where maximum security is required.',
    features: [
      'Custom blast rating design',
      'Multi-point locking mechanism',
      'Heavy-duty reinforced construction',
      'Ballistic resistance available',
      'Nuclear-rated options',
    ],
    applications: ['Military installations', 'Government buildings', 'Nuclear facilities', 'Embassies', 'Critical infrastructure'],
    certifications: ['3C Certified', 'ISO 9001'],
    specifications: [
      { label: 'Blast Rating', value: 'Custom' },
      { label: 'Material', value: 'Armored Steel' },
      { label: 'Weight', value: 'Custom' },
      { label: 'Locking', value: 'Multi-point' },
    ],
    images: ['/images/products/blast-door.jpg'],
  },
  // Wall Panels & Hardware
  {
    slug: 'copper-wall-panel',
    name: 'Copper Wall Panel',
    category: 'Wall Panels & Hardware',
    categorySlug: 'wall-panels-hardware',
    shortDescription: 'Premium copper wall panels for luxurious architectural cladding and decoration.',
    description:
      'Our copper wall panels combine the natural beauty of copper with fire resistance, offering a premium architectural cladding solution. Copper develops a unique patina over time, adding character and elegance to any building facade.',
    features: [
      'Natural copper material',
      'Fire-resistant core available',
      'Develops natural patina',
      'Various surface treatments',
      'Custom shapes and sizes',
    ],
    applications: ['Luxury hotels', 'Cultural buildings', 'High-end residential', 'Commercial facades', 'Interior decoration'],
    certifications: ['ISO 9001'],
    specifications: [
      { label: 'Material', value: 'Copper / Copper Alloy' },
      { label: 'Thickness', value: '0.7mm - 2.0mm' },
      { label: 'Finish', value: 'Natural / Oxidized / Coated' },
      { label: 'Fire Rating', value: 'Available' },
    ],
    images: ['/images/products/copper-wall-panel.jpg'],
  },
  {
    slug: 'partition',
    name: 'Partition System',
    category: 'Wall Panels & Hardware',
    categorySlug: 'wall-panels-hardware',
    shortDescription: 'Fire-rated partition systems for flexible space division in commercial buildings.',
    description:
      'Our fire-rated partition systems provide flexible space division while maintaining fire compartmentation. Available in fixed and operable configurations to meet diverse architectural needs.',
    features: [
      'Fire-rated up to 120 minutes',
      'Modular design for flexibility',
      'Acoustic insulation available',
      'Quick installation system',
      'Various surface finishes',
    ],
    applications: ['Office buildings', 'Hotels', 'Convention centers', 'Hospitals', 'Educational facilities'],
    certifications: ['3C Certified', 'ISO 9001'],
    specifications: [
      { label: 'Fire Rating', value: 'Up to 120min' },
      { label: 'Thickness', value: '75mm - 150mm' },
      { label: 'Height', value: 'Up to 4000mm' },
      { label: 'Acoustic Rating', value: 'Up to STC 50' },
    ],
    images: ['/images/products/partition.jpg'],
  },
  {
    slug: 'door-frame',
    name: 'Door Frame',
    category: 'Wall Panels & Hardware',
    categorySlug: 'wall-panels-hardware',
    shortDescription: 'Precision-engineered door frames for fire doors and specialized door systems.',
    description:
      'Our door frames are precision-engineered to work seamlessly with our fire doors and specialized door systems. Manufactured using advanced sheet metal processing for consistent quality and perfect fit.',
    features: [
      'Precision sheet metal processing',
      'Compatible with all door types',
      'Various installation methods',
      'Galvanized or stainless steel',
      'Custom profiles available',
    ],
    applications: ['All door installations', 'New construction', 'Renovation projects', 'Fire compartments', 'Industrial facilities'],
    certifications: ['3C Certified', 'ISO 9001'],
    specifications: [
      { label: 'Material', value: 'Galvanized Steel / Stainless Steel' },
      { label: 'Thickness', value: '1.2mm - 2.0mm' },
      { label: 'Installation', value: 'Wrap-around / Socket-in' },
      { label: 'Finish', value: 'Primed / Powder Coated' },
    ],
    images: ['/images/products/door-frame.jpg'],
  },
  {
    slug: 'metal-hardware',
    name: 'Metal Hardware',
    category: 'Wall Panels & Hardware',
    categorySlug: 'wall-panels-hardware',
    shortDescription: 'Precision-cast metal hardware components for complete door opening systems.',
    description:
      'Our precision-cast metal hardware components are manufactured in-house using specialized casting technology. From hinges to locks, we ensure every component meets our strict quality standards for reliable performance.',
    features: [
      'Precision-cast manufacturing',
      'In-house quality control',
      'Fire-rated hardware options',
      'Corrosion-resistant finishes',
      'Full range of door hardware',
    ],
    applications: ['Fire doors', 'Specialized doors', 'Automatic doors', 'Commercial doors', 'Industrial applications'],
    certifications: ['ISO 9001'],
    specifications: [
      { label: 'Material', value: 'Steel / Stainless Steel / Zinc Alloy' },
      { label: 'Finish', value: 'Chrome / Brass / Satin / Powder Coat' },
      { label: 'Fire Rating', value: 'Available' },
      { label: 'Standard', value: 'DIN / BS / ANSI' },
    ],
    images: ['/images/products/metal-hardware.jpg'],
  },
];

export function getProductsByCategory(categorySlug: string): Product[] {
  return products.filter((p) => p.categorySlug === categorySlug);
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
