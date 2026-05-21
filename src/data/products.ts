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
      { label: 'Fire Rating', value: 'A30 / A60 / A90 / A120 / A180' },
      { label: 'Material', value: 'Cold-rolled Steel (0.8mm - 1.5mm)' },
      { label: 'Leaf Thickness', value: '45mm / 50mm / 55mm' },
      { label: 'Standard Size', value: '2100×900mm / 2100×1000mm / 2100×1200mm' },
      { label: 'Max Single Leaf Width', value: '1300mm' },
      { label: 'Surface Finish', value: 'Powder Coated / Primed for Painting' },
      { label: 'Filling Material', value: 'Fire-resistant Mineral Core' },
      { label: 'Hardware', value: 'Fire-rated Lockset, Hinges, Closer' },
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
      { label: 'Fire Rating', value: 'A30 / A60 / A90 / A120 / A180' },
      { label: 'Material', value: '304 / 316 Stainless Steel' },
      { label: 'Leaf Thickness', value: '45mm / 50mm / 55mm' },
      { label: 'Surface Finish', value: 'Mirror #8 / Brushed #4 / Hairline / Satin' },
      { label: 'Standard Size', value: '2100×900mm / 2100×1000mm' },
      { label: 'Filling Material', value: 'Fire-resistant Mineral Core' },
      { label: 'Color Options', value: 'Natural SS / Titanium / Black Titanium / Rose Gold' },
      { label: 'Hardware', value: 'SS Fire-rated Lockset, Hinges, Closer' },
    ],
    images: ['/images/products/stainless-steel-fire-door.jpg'],
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
      { label: 'Fire Rating', value: 'A60 / A90 / A120 / A180' },
      { label: 'Material', value: 'Reinforced Heavy-gauge Steel' },
      { label: 'Max Single Leaf Width', value: '4000mm+' },
      { label: 'Max Single Leaf Height', value: '4000mm+' },
      { label: 'Leaf Thickness', value: '55mm / 65mm / Custom' },
      { label: 'Reinforcement', value: 'Internal Steel Rib Reinforcement' },
      { label: 'Hardware', value: 'Heavy-duty Fire-rated Hardware' },
      { label: 'Opening Type', value: 'Single / Double / Sliding' },
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
      { label: 'Fire Rating', value: 'A60 / A90 / A120 / A180' },
      { label: 'Wind Load Resistance', value: 'Up to 5.0 kPa (Class 5)' },
      { label: 'Water Resistance', value: '≥500Pa' },
      { label: 'Material', value: 'Heavy-gauge Steel (1.2mm - 1.5mm)' },
      { label: 'Air Permeability', value: 'Class 3' },
      { label: 'Locking System', value: 'Multi-point Fire-rated Locking' },
      { label: 'Seal Type', value: 'Intumescent + Weather Strip' },
      { label: 'Standard Size', value: '2100×900mm / 2100×1000mm' },
    ],
    images: ['/images/products/wind-resistant-fire-door.jpg'],
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
      { label: 'Fire Rating', value: 'A60 / A90 / A120' },
      { label: 'Shielding Effectiveness', value: '30dB - 100dB (Custom)' },
      { label: 'Frequency Range', value: '10kHz - 10GHz' },
      { label: 'Material', value: 'Double-layer Galvanized Steel' },
      { label: 'Conductive Seal', value: 'Copper / Nickel-plated Gasket' },
      { label: 'Leaf Thickness', value: '60mm - 80mm' },
      { label: 'Waveguide Vent', value: 'Available' },
      { label: 'Shielding Class', value: 'C / B / A (Custom)' },
    ],
    images: ['/images/products/shielded-fire-door.jpg'],
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
      { label: 'Fire Rating', value: 'A30 / A60 / A90' },
      { label: 'Glass Type', value: 'Fire-rated Clear / Wire / Ceramic Glass' },
      { label: 'Glass Thickness', value: '6mm - 20mm' },
      { label: 'Frame Material', value: 'Steel / Stainless Steel' },
      { label: 'Vision Panel Size', value: 'Custom (max per fire rating)' },
      { label: 'Standard Size', value: '2100×900mm / 2100×1000mm' },
      { label: 'Impact Rating', value: '1B / 2B (optional)' },
      { label: 'Hardware', value: 'Fire-rated Lockset, Closer, Hinges' },
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
      { label: 'Blast Rating', value: 'Custom (typically 50kPa - 300kPa)' },
      { label: 'Material', value: 'Heavy-gauge Reinforced Steel' },
      { label: 'Leaf Thickness', value: '60mm - 100mm' },
      { label: 'Operation', value: 'Manual / Automatic / Hydraulic' },
      { label: 'Pressure Release', value: 'Optional Relief Panel' },
      { label: 'Hardware', value: 'Explosion-proof Lockset & Hinges' },
      { label: 'Seal Type', value: 'Explosion-resistant Gasket' },
      { label: 'Surface Treatment', value: 'Anti-corrosion Coating' },
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
      { label: 'Release Pressure', value: '50Pa - 500Pa (Adjustable)' },
      { label: 'Fire Rating', value: 'A60 / A90 / A120 (Available)' },
      { label: 'Material', value: 'Steel / Stainless Steel' },
      { label: 'Door Weight', value: 'Light-weight Design for Easy Opening' },
      { label: 'Reset Mechanism', value: 'Manual / Auto-reset' },
      { label: 'Opening Direction', value: 'Outward (Pressure Release)' },
      { label: 'Latch Type', value: 'Friction / Magnetic Latch' },
      { label: 'Standard Size', value: 'Custom per Opening' },
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
      { label: 'Type', value: 'Sliding / Swing / Telescopic / Hermetic' },
      { label: 'Fire Rating', value: 'Available (A30 / A60)' },
      { label: 'Opening Speed', value: '0.3 - 0.5 m/s (Adjustable)' },
      { label: 'Drive System', value: 'DC Brushless Motor' },
      { label: 'Max Leaf Weight', value: '150kg (Single) / 120kg×2 (Double)' },
      { label: 'Sensor Type', value: 'Microwave / Infrared / Combined' },
      { label: 'Power Supply', value: 'AC 220V / 50Hz' },
      { label: 'Emergency Function', value: 'Auto-open on Fire Signal / Power Failure' },
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
      { label: 'Fire Rating', value: 'A60 / A90 / A120 / A180' },
      { label: 'Operation', value: 'Self-closing (Door Closer Required)' },
      { label: 'Smoke Resistance', value: 'Class A / B / C' },
      { label: 'Thermal Insulation', value: 'Class I / II / III' },
      { label: 'Material', value: 'Steel / Stainless Steel' },
      { label: 'Seal Type', value: 'Intumescent + Smoke Strip' },
      { label: 'Standard Size', value: '2100×900mm / 2100×1000mm' },
      { label: 'Hardware', value: 'Fire-rated Self-closing System' },
    ],
    images: ['/images/products/passive-door-window.jpg'],
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
      { label: 'Air Leakage Rate', value: '< 1 m³/h·m² (at 200Pa)' },
      { label: 'Cleanroom Class', value: 'ISO 5 - ISO 8' },
      { label: 'Material', value: 'Stainless Steel 304/316' },
      { label: 'Fire Rating', value: 'A30 / A60 (Available)' },
      { label: 'Seal Type', value: 'Silicone / EPDM Gasket' },
      { label: 'Operation', value: 'Manual / Automatic / Hermetic Sliding' },
      { label: 'Interlock System', value: 'Available (Airlock Control)' },
      { label: 'Surface Finish', value: 'Electro-polished / Brushed SS' },
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
      { label: 'Blast Rating', value: 'Custom (100kPa - 1000kPa+)' },
      { label: 'Material', value: 'Armored Steel / Composite' },
      { label: 'Leaf Thickness', value: '80mm - 200mm (Custom)' },
      { label: 'Locking System', value: 'Multi-point Electric / Manual' },
      { label: 'Weight', value: 'Custom per Blast Requirement' },
      { label: 'Ballistic Rating', value: 'NIJ Level III / IV (Optional)' },
      { label: 'Seal Type', value: 'Gas-tight / NBC Seal' },
      { label: 'Operation', value: 'Manual / Hydraulic / Motorized' },
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
      { label: 'Material', value: 'C110 Copper / Copper Alloy' },
      { label: 'Panel Thickness', value: '0.7mm - 2.0mm' },
      { label: 'Core Type', value: 'Honeycomb / Mineral Core / Solid' },
      { label: 'Surface Finish', value: 'Natural / Pre-oxidized / Clear Coated' },
      { label: 'Panel Size', value: 'Custom (Max 1500×4000mm)' },
      { label: 'Fire Rating', value: 'A60 / A90 (with fire-rated core)' },
      { label: 'Installation', value: 'Mechanical Fastening / Adhesive / Clip System' },
      { label: 'Patina Process', value: 'Natural Aging / Accelerated (Optional)' },
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
      { label: 'Fire Rating', value: 'A60 / A90 / A120' },
      { label: 'Panel Thickness', value: '75mm / 100mm / 125mm / 150mm' },
      { label: 'Max Height', value: 'Up to 4000mm' },
      { label: 'Acoustic Rating', value: 'STC 35 - STC 50' },
      { label: 'Surface Finish', value: 'Painted / Laminated / Stainless Steel / Glass' },
      { label: 'Core Material', value: 'Fire-resistant Mineral Wool / Calcium Silicate' },
      { label: 'Frame Material', value: 'Galvanized Steel / Aluminum' },
      { label: 'Installation', value: 'Modular Panel System (Quick-fit)' },
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
      { label: 'Material', value: 'Galvanized Steel / Stainless Steel 304/316' },
      { label: 'Steel Thickness', value: '1.2mm / 1.5mm / 2.0mm' },
      { label: 'Installation Type', value: 'Wrap-around / Socket-in / Welded' },
      { label: 'Profile Type', value: 'Single Rebate / Double Rebate' },
      { label: 'Rebate Depth', value: '15mm / 20mm / 25mm' },
      { label: 'Surface Finish', value: 'Primed / Powder Coated / Stainless' },
      { label: 'Standard Size', value: 'Custom per Door Leaf' },
      { label: 'Stop Type', value: 'Fixed Stop / Adjustable Stop' },
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
      { label: 'Material', value: 'Steel / Stainless Steel / Zinc Alloy / Brass' },
      { label: 'Finish', value: 'Chrome / Brass / Satin SS / Powder Coat' },
      { label: 'Fire Rating', value: 'Available (Certified Fire-rated Hardware)' },
      { label: 'Standard', value: 'DIN / BS / ANSI / GB' },
      { label: 'Product Range', value: 'Hinges, Locksets, Handles, Closers, Stops' },
      { label: 'Hinge Type', value: 'Butt / Piano / Spring / Concealed' },
      { label: 'Lock Function', value: 'Entry / Privacy / Passage / Classroom' },
      { label: 'Closer Type', value: 'Surface-mounted / Concealed / Floor Spring' },
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
