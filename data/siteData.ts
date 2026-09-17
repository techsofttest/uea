export interface ProductFAQ {
  question: string;
  answer: string;
}

export interface ProductItem {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  specs?: string[];
  overview?: string;
  keyFeatures?: string[];
  faq?: ProductFAQ[];
  principal?: string;
}

export interface PartnerItem {
  name: string;
  logo: string;
  description?: string;
}

export const SITE_CONFIG = {
  companyName: "UNITED ENGINEERING AGENCIES",
  tagline: "Engineering Excellence & Industrial Solutions",
  logo: "/logo/logo4.png",
  contact: {
    phone: "+91 (0) 22 2345 6789",
    email: "sales@ueatraders.com",
    emails: [
      { name: "Jayarajan Nambiar", email: "jayarajan.nambiar@ueatraders.com" },
      { name: "Vinayak Nambiar", email: "vinayak.nambiar@ueatraders.com" },
      { name: "Sales Department", email: "sales@ueatraders.com" },
      { name: "Accounts Department", email: "accounts@ueatraders.com" },
    ],
    address: "Unity Plaza, Kochi, Kerala, India",
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3928.9679364171284!2d76.29221599!3d10.01950459!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d43e882db03%3A0x27672be7047d4b47!2sUNITY%20PLAZA!5e0!3m2!1sen!2sin!4v1788776274757!5m2!1sen!2sin",
  },
  social: {
    linkedin: "https://linkedin.com",
    youtube: "https://youtube.com",
  },
};

export const NAVIGATION_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Suppliers", href: "/suppliers" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact Us", href: "/contact" },
];

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  caption?: string;
  date?: string;
}

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "arm-2",
    title: "High-Pressure Process Piping & Accessories",
    category: "Piping Systems",
    image: "/gallery/arm-2 1.png",
    caption: "Heavy-duty alloy process piping components engineered for extreme refinery temperatures.",
    date: "October 14, 2024",
  },
  {
    id: "arm-3",
    title: "Steam & Condensate Drainer Systems",
    category: "Steam Solutions",
    image: "/gallery/arm-3 1.png",
    caption: "Automatic free-floating liquid drainers installed across major petrochemical process loops.",
    date: "August 22, 2024",
  },
  {
    id: "arm-6",
    title: "Critical Process Exchanger Assemblies",
    category: "Exchangers",
    image: "/gallery/arm-6 1.png",
    caption: "High-temperature heat exchanger bundle assemblies for severe service applications.",
    date: "March 15, 2024",
  },
  {
    id: "arm-8",
    title: "Industrial Steam Traps & Fluid Control",
    category: "Utility Equipment",
    image: "/gallery/arm-8 1.png",
    caption: "Precision fluid handling and steam trap packages engineered for energy efficiency.",
    date: "June 10, 2024",
  },
  {
    id: "hamon-3",
    title: "Furnace Radiant Coils & Manifolds",
    category: "Furnace Equipment",
    image: "/gallery/Hamon-3 1.png",
    caption: "Centrifugally cast micro-alloy radiant coils for ethylene crackers and steam reformers.",
    date: "November 05, 2023",
  },
  {
    id: "hamon-4",
    title: "Severe-Service Process Cooler Bundles",
    category: "Exchangers",
    image: "/gallery/Hamon-4 1.png",
    caption: "High-pressure process cooler bundles fabricated to strict TEMA and EIL specifications.",
    date: "January 18, 2024",
  },
  {
    id: "hamon-5",
    title: "Reformer Catalyst Tube Assemblies",
    category: "Reformer Systems",
    image: "/gallery/Hamon-5 1.png",
    caption: "Paralloy centrifugally cast catalyst tube assemblies engineered for long lifespan.",
    date: "September 04, 2023",
  },
  {
    id: "product_5",
    title: "Precision Tube Sheet & Baffle Packages",
    category: "Reactor Components",
    image: "/gallery/product_5 1.png",
    caption: "Heavy CNC-drilled stainless steel and alloy tube sheets manufactured for heat exchangers.",
    date: "December 12, 2024",
  },
  {
    id: "tcem-3",
    title: "Exchanger Bundle Extraction System",
    category: "Maintenance Machinery",
    image: "/gallery/tcem-3 1.png",
    caption: "IDROJET hydraulic bundle extraction machines engineered for refinery plant turnarounds.",
    date: "May 20, 2024",
  },
  {
    id: "tcem-push_puller",
    title: "Self-Propelled Hydraulic Bundle Extractor",
    category: "Maintenance Machinery",
    image: "/gallery/tcem-push_puller 1.png",
    caption: "High-capacity bundle puller for rapid and safe exchanger maintenance operations.",
    date: "April 08, 2024",
  },
];

export const HERO_IMAGES = {
  main: "/hero-sec/h3.png",
  alt1: "/products/arm-7.jpg",
  alt2: "/products/csi-11.jpg",
};

export const PRODUCT_CATEGORIES: ProductItem[] = [
  {
    id: "liquid-drainers",
    name: "Liquid Drainers",
    category: "Steam & Liquid Solutions",
    description: "Heavy-duty liquid drainers engineered for continuous, automatic removal of liquid from gas and compressed air systems.",
    image: "/products/liquid-drainers.png",
    specs: ["Automatic Liquid Removal", "High Pressure Rated", "Gas & Air Systems"],
    principal: "Armstrong International (Belgium)",
    overview: "Armstrong Liquid Drainers automatically discharge liquids from gases or compressed air systems without loss of gas or air. Designed for process industry applications where continuous, reliable condensate and liquid drainage is critical to operational safety and efficiency.",
    keyFeatures: [
      "Continuous automatic liquid discharge without gas loss",
      "All-stainless steel internal construction for maximum corrosion resistance",
      "Free-floating guided lever mechanism for positive seating",
      "Available in cast iron, forged steel, and alloy body options",
      "High temperature and high pressure designs rated up to 1000 psi",
      "Inline piping configuration for simplified installation and maintenance"
    ],
    faq: [
      {
        question: "How does a free-floating liquid drainer operate?",
        answer: "As liquid enters the body, the float rises, opening the valve orifice to discharge liquid. When gas or air enters, the float drops to seal the orifice tightly, preventing gas leakage."
      },
      {
        question: "What maintenance is required for Armstrong liquid drainers?",
        answer: "Routine inspection of internal float mechanism and periodic seat cleaning. Stainless steel internals minimize wear and extend service life."
      },
      {
        question: "Are these drainers approved by PSU majors in India?",
        answer: "Yes, Armstrong liquid drainers are on the approved vendor list of EIL, IOCL, BPCL, HPCL, Reliance, and NTPC."
      }
    ]
  },
  {
    id: "heat-exchanger",
    name: "Heat Exchanger",
    category: "Thermal Systems",
    description: "High-efficiency shell and tube heat exchangers designed for refinery, petrochemical, and process plant applications.",
    image: "/products/heat-exchanger.png",
    specs: ["TEMA Standard", "High Thermal Efficiency", "Custom Tube Bundles"],
    principal: "Alfa Laval OLMI (Italy)",
    overview: "Alfa Laval OLMI heat exchangers represent state-of-the-art thermal engineering for high-pressure, high-temperature refinery and petrochemical services. Custom designed according to TEMA and ASME codes, these heat exchangers deliver superior heat transfer rates and long-term mechanical reliability.",
    keyFeatures: [
      "Custom TEMA R, C, and B class designs",
      "High-pressure waste heat recovery and feed-effluent exchangers",
      "Advanced baffle geometry to minimize vibration and pressure drop",
      "Exotic metallurgy options including Duplex, Inconel, and Titanium",
      "Specialized tube-to-tubesheet joint welding technology",
      "Fully compliant with ASME Section VIII Div 1 & 2 and EIL standards"
    ],
    faq: [
      {
        question: "What tube bundle types are available?",
        answer: "Fixed tubesheet, floating head (TEMA AES/BJS), and U-tube configurations based on process cleaning requirements and thermal expansion."
      },
      {
        question: "Can Alfa Laval OLMI build exchangers for hydrogen service?",
        answer: "Yes, OLMI specializes in high-pressure hydrogen service heat exchangers with full NDT and post-weld heat treatment."
      }
    ]
  },
  {
    id: "catalyst-tubes",
    name: "Catalyst Tubes",
    category: "Reformer & Furnace Systems",
    description: "Centrifugally cast high-alloy catalyst tubes fabricated to withstand extreme temperatures and pressures in steam reformers.",
    image: "/products/catalyst-tubes.png",
    specs: ["Centrifugally Cast", "High Temperature Alloys", "Steam Reformer Ready"],
    principal: "Paralloy Group (UK)",
    overview: "Paralloy Group catalyst tubes are manufactured using horizontal centrifugal casting technology to produce dense, sound heat-resistant alloy tubes for Steam Methane Reformers (SMR) and Direct Reduction of Iron (DRI) plants worldwide.",
    keyFeatures: [
      "Proprietary heat-resistant alloys (Micro-alloyed 25Cr-35Ni & 35Cr-45Ni)",
      "Superior creep rupture strength and thermal fatigue resistance",
      "Internal bore machining for uniform catalyst loading and gas flow",
      "Complete assembly inclusive of top/bottom pull components and flanges",
      "Full 100% radiography, dye penetrant, and ultrasonic inspection",
      "Approved vendor status with top process licensors including Haldor Topsoe, Lummus, Technip, and Linde"
    ],
    faq: [
      {
        question: "What is the typical operating life of Paralloy catalyst tubes?",
        answer: "Paralloy micro-alloyed catalyst tubes are engineered for a design lifespan exceeding 100,000 hours under rated temperature and pressure conditions."
      },
      {
        question: "Are tubes supplied fully assembled?",
        answer: "Yes, we supply ready-to-install catalyst tube assemblies welded with high-alloy headers, pigtails, and end fittings."
      }
    ]
  },
  {
    id: "radiant-coil",
    name: "Radiant Coil",
    category: "Furnace Components",
    description: "Precision-fabricated radiant coils for fired heaters, ethylene crackers, and high-temperature petrochemical furnaces.",
    image: "/products/radiant-coil.png",
    specs: ["High Temperature Alloys", "Fired Heater Assemblies", "Ethylene Cracker Grade"],
    principal: "Paralloy Group (UK)",
    overview: "Radiant coils operate in the most severe radiant zones of fired heaters and ethylene cracking furnaces. Fabricated from centrifugally cast and wrought high-temperature alloys, Paralloy radiant coils prevent carburization and thermal deformation.",
    keyFeatures: [
      "Specialized Anti-Coking Inner Surface Technologies",
      "Ethylene cracker coil geometries including single-pass, split-pass, and multi-pass",
      "High thermal shock and oxidation resistance up to 1150°C",
      "Automated GTAW/SMAW welding procedures with 100% RT verification",
      "Custom return bends, Y-pieces, and manifold fittings"
    ],
    faq: [
      {
        question: "How do Paralloy radiant coils resist coking in ethylene crackers?",
        answer: "Paralloy utilizes specialized inner bore finishes and micro-alloy additions that suppress catalytic coke formation during pyrolysis."
      }
    ]
  },
  {
    id: "transfer-line",
    name: "Transfer Line",
    category: "Piping Systems",
    description: "Heavy-wall transfer lines engineered for high-velocity gas and liquid transport between furnace process units.",
    image: "/products/transfer-line.png",
    specs: ["High Velocity Transport", "Refinery Process Lines", "Thermal Expansion Rated"],
    principal: "Alfa Laval OLMI / Paralloy",
    overview: "Transfer lines connect high-temperature furnace radiant outlets to downstream quench exchangers or process columns. Built with internal refractory lining or heavy-wall alloy piping to withstand high velocities, thermal expansion, and acoustic vibrations.",
    keyFeatures: [
      "Refractory lined and jacketed transfer line exchangers (TLE)",
      "High velocity gas erosion and thermal fatigue resistance",
      "Integrated spring support and expansion joint interface design",
      "Fabricated to stringent licensor specifications and EIL standards"
    ],
    faq: [
      {
        question: "How are thermal expansion stress peaks managed?",
        answer: "Through precision stress analysis modeling, heavy-wall alloy bends, and specialized spring support systems."
      }
    ]
  },
  {
    id: "hot-collector",
    name: "Hot Collector",
    category: "Manifolds & Headers",
    description: "High-temperature hot collector manifolds designed to gather effluent gases from reformer radiant tubes.",
    image: "/products/hot-collector.png",
    specs: ["High Temp Effluent Gas", "Reformer Manifolds", "Stress Relieved Alloy"],
    principal: "Paralloy Group (UK)",
    overview: "Hot collector manifolds gather 850°C+ synthesis gas from individual catalyst tubes into main transfer piping. Fabricated from thick-walled centrifugally cast and forged alloys (e.g. Incoloy 800H/800HT), they ensure structural stability under thermal cycle fatigue.",
    keyFeatures: [
      "Extruded or welded branch outlets with full penetration welds",
      "Materials engineered to resist hydrogen attack and embrittlement",
      "Stress relief heat treatment after complete shop fabrication",
      "100% NDT inspection including UT, RT, and PMI"
    ],
    faq: [
      {
        question: "Why use centrifugally cast materials for hot headers?",
        answer: "Centrifugal casting delivers superior creep resistance at elevated temperatures compared to wrought headers."
      }
    ]
  },
  {
    id: "inlet-distributor",
    name: "Inlet Distributor",
    category: "Reactor Internals",
    description: "Custom-designed reactor inlet distributors engineered for uniform fluid distribution and optimal catalyst bed performance.",
    image: "/products/inlet-distributor.png",
    specs: ["Uniform Flow Distribution", "Reactor Internals", "Corrosion Resistant"],
    principal: "2M Italy",
    overview: "Reactor inlet distributors distribute incoming gas and liquid streams uniformly across hydroprocessing catalyst beds. Prevents channeling, localized hotspot development, and catalyst attrition.",
    keyFeatures: [
      "Custom CFD-optimized tray and distributor designs",
      "High mechanical strength to withstand bed pressure differentials",
      "Corrosion resistant SS 316L, 321, and Duplex steel construction",
      "Modular segmented design for easy installation through vessel manways"
    ],
    faq: [
      {
        question: "Can distributors be retrofitted into existing reactors?",
        answer: "Yes, all internals are designed to fit through standard reactor manways without requiring shell cutouts."
      }
    ]
  },
  {
    id: "tube-sheets",
    name: "Tube Sheets",
    category: "Exchanger Components",
    description: "Precision CNC-drilled heavy tube sheets manufactured from carbon steel, stainless steel, and high-nickel alloys.",
    image: "/products/tube-sheets.png",
    specs: ["CNC Precision Drilled", "TEMA & ASME Compliant", "Multi-Alloy Fabrication"],
    principal: "2M Italy / Alfa Laval",
    overview: "High-precision tube sheets fabricated up to 4000mm diameter and 400mm thickness. CNC drilled with double-grooved tube holes to guarantee leak-tight tube expansion and strength welding.",
    keyFeatures: [
      "Multi-axis CNC drilling and grooving for exact hole alignment",
      "Explosive bonded and overlay cladding (Inconel, Monel, Stainless Steel)",
      "Strict hole tolerance compliance per TEMA Standards",
      "Full ultrasonic test certification for internal soundness"
    ],
    faq: [
      {
        question: "What cladding methods are available?",
        answer: "Explosive cladding, roll bonding, and multi-layer weld overlay depending on thickness and material combination."
      }
    ]
  },
  {
    id: "tube-supports",
    name: "Tube Supports",
    category: "Structural Components",
    description: "Heavy-duty tube support plates and baffles designed to prevent tube vibration and ensure structural integrity in exchangers.",
    image: "/products/tube-supports.png",
    specs: ["Vibration Mitigation", "Custom Baffle Layouts", "High Heat Resistance"],
    principal: "2M Italy",
    overview: "Precision machined baffle plates, segmental supports, and rod baffles designed to eliminate flow-induced vibration, reduce shell-side pressure drop, and extend heat exchanger bundle life.",
    keyFeatures: [
      "Single-segmental, double-segmental, and rod baffle layouts",
      "Deburred and chamfered tube holes to prevent tube fretting",
      "Available in carbon steel, stainless steel, and nickel alloys",
      "Laser-cut and CNC drilled for high accuracy"
    ],
    faq: [
      {
        question: "How do tube supports prevent acoustic vibration?",
        answer: "Baffle pitch and geometry are engineered to alter shell-side velocity profiles and avoid resonance frequencies."
      }
    ]
  },
];

export const EXTRA_PRODUCT: ProductItem = {
  id: "heat-exchanger-cleaning-retubing",
  name: "Heat Exchanger Cleaning and Retubing",
  category: "Maintenance & Service Solutions",
  description: "Specialized high-pressure hydraulic bundle cleaning, extraction, and precision retubing services for refinery and petrochemical heat exchangers.",
  image: "/products/heat-exchanger-cleaning-retubing.png",
  specs: ["Bundle Cleaning & Extraction", "Precision Retubing", "Turnaround Maintenance"],
  principal: "IDROJET S.r.l. (Italy)",
  overview: "IDROJET S.r.l. is the world leader in manufacturing specialized equipment for heat exchanger maintenance. From aerial and self-propelled bundle extractors to high-pressure internal/external tube hydro-jetting clean systems, IDROJET provides complete turnaround solutions.",
  keyFeatures: [
    "Aerial & Self-Propelled Hydraulic Tube Bundle Extractors (up to 65 Tons)",
    "Automatic High-Pressure Hydro-Jetting Cleaning Rigs (up to 2800 Bar)",
    "In-situ Tube Retubing, Pulling, and Torque-Controlled Expansion Systems",
    "Drastically reduces plant turnaround downtime and maintenance risk",
    "Full compliance with international safety and refinery standards"
  ],
  faq: [
    {
      question: "What is the maximum bundle weight IDROJET extractors can handle?",
      answer: "IDROJET extractors can pull and transport exchanger bundles weighing up to 65 Metric Tons with lengths up to 12 meters."
    },
    {
      question: "Are IDROJET machines available for purchase or service rental in India?",
      answer: "United Engineering Agencies provides sales, technical support, and equipment delivery for IDROJET systems across India."
    }
  ]
};

export const ALL_PRODUCTS: ProductItem[] = [...PRODUCT_CATEGORIES, EXTRA_PRODUCT];


export interface SupplierItem {
  id: string;
  name: string;
  country: string;
  logo: string;
  description: string;
  productsHandled: string[];
  websiteUrl?: string;
}

export const SUPPLIERS_LIST: SupplierItem[] = [
  {
    id: "paralloy-group",
    name: "Paralloy Group",
    country: "United Kingdom",
    logo: "/suppliers-logo/Paralloy Group.png",
    description: "World-leading manufacturer of high-nickel alloy centrifugally cast reformer catalyst tubes, radiant coils, and high-temperature furnace assemblies engineered for ethylene crackers and steam reformers.",
    productsHandled: ["Catalyst Tubes", "Radiant Coils", "Hot Collectors & Headers"],
  },
  {
    id: "alfa-laval-olmi",
    name: "Alfa Laval OLMI",
    country: "Italy",
    logo: "/suppliers-logo/Alfa Laval.png",
    description: "Global technological benchmark in high-pressure waste heat boilers, shell and tube heat exchangers, and severe-service process coolers for refineries, petrochemicals, and fertilizer plants.",
    productsHandled: ["Waste Heat Boilers", "Process Heat Exchangers", "Transfer Line Exchangers (TLE)"],
  },
  {
    id: "armstrong-international",
    name: "Armstrong International",
    country: "Belgium / USA",
    logo: "/suppliers-logo/Armstrong International.png",
    description: "Pioneer in intelligent thermal utility solutions, heavy-duty free-floating liquid drainers, inverted bucket steam traps, and automated condensate management systems.",
    productsHandled: ["Liquid Drainers", "Steam Traps", "Thermal Utility Solutions"],
  },
  {
    id: "2m-foundry",
    name: "2M Foundry",
    country: "Italy",
    logo: "/suppliers-logo/2M Foundry.png",
    description: "Specialized Italian foundry producing high-integrity precision castings, heavy CNC-drilled tube sheets, baffles, and custom reactor internal components.",
    productsHandled: ["Reactor Internals", "Tube Sheets & Baffles", "High-Integrity Castings"],
  },
  {
    id: "idrojet",
    name: "IDROJET S.r.l.",
    country: "Italy",
    logo: "/suppliers-logo/IDROJET S.r.l.png",
    description: "Global market leader in automated heat exchanger turnaround maintenance equipment, including aerial & self-propelled hydraulic tube bundle extractors and ultra high-pressure hydro-jetting systems.",
    productsHandled: ["Hydraulic Bundle Extractors", "Hydro-Jetting Cleaning Rigs", "Retubing & Maintenance Systems"],
  },
];

export const PARTNER_LOGOS: PartnerItem[] = SUPPLIERS_LIST.map((supplier) => ({
  name: supplier.name,
  logo: supplier.logo,
  description: supplier.description,
}));

export const ABOUT_IMAGES = {
  refineryDetail: "/products/arm-5.jpg",
  nightRefinery: "/products/arm-9.jpg",
};

export const WHY_CHOOSE_US_FEATURES = [
  {
    number: "01",
    title: "Superior Quality",
    description: "Engineered products strictly sourced from verified global manufacturers adhering to international standards.",
    image: "/products/arm-5.jpg",
  },
  {
    number: "02",
    title: "On-Time Delivery",
    description: "Reliable logistics channel and responsive inventory management to minimize project lead times.",
    image: "/products/arm-9.jpg",
  },
  {
    number: "03",
    title: "Global Network",
    description: "Strategic partnerships with tier-1 international technology providers across Europe and Asia.",
    image: "/products/arm-7.jpg",
  },
  {
    number: "04",
    title: "Dedicated Support",
    description: "Technical consultation, material certification, and commercial support through every stage.",
    image: "/products/csi-11.jpg",
  },
];
