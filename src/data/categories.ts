// src/data/categories.ts

export interface Brand {
  name: string
  slug: string
  logoPlaceholder: string
  description: string
  products: string[]
  website: string
}

export interface Category {
  slug: string
  name: string
  tagline: string
  description: string
  imagePlaceholder: string
  brands: Brand[]
}

export const categories: Category[] = [
  {
    slug: 'vehicle-lifts',
    name: 'Vehicle Lifts',
    tagline: 'Precision Lifting for Every Workshop',
    description:
      'From compact two-post lifts for passenger vehicles to heavy-duty column lifts for commercial fleets, our lifting solutions cover the full spectrum of professional workshop needs.',
    imagePlaceholder: '/images/categories/vehicle-lifts.jpg',
    brands: [
      {
        name: 'Rotary Lift',
        slug: 'rotary-lift',
        logoPlaceholder: '/logos/brands/rotary-lift.jpg',
        description:
          "The world's largest manufacturer of vehicle lifts, Rotary Lift has been the trusted choice of professional technicians since 1925. Their range covers two-post, four-post, scissor, and mobile column lifts engineered for reliability and safety.",
        products: [
          'Two-Post Lifts',
          'Four-Post Lifts',
          'Scissor Lifts',
          'Mobile Column Lifts',
          'Motorcycle Lifts',
        ],
        website: 'https://www.rotarylift.com',
      },
      {
        name: 'Real (Rotary Engineering Asia Limited)',
        slug: 'real',
        logoPlaceholder: '/logos/brands/real.png',
        description:
          'REAL delivers high-quality lifting equipment engineered for Asian and Middle-Eastern workshop environments. Built with robust steel construction and safety-first design, REAL lifts meet international standards at competitive value.',
        products: [
          'Two-Post Lifts',
          'Four-Post Lifts',
          'Parallelogram Lifts',
        ],
        website: 'https://www.realengasia.com',
      },
      {
        name: 'Finkbeiner',
        slug: 'finkbeiner',
        logoPlaceholder: '/logos/brands/finkbeiner.png',
        description:
          "German-engineered lifting systems from Finkbeiner are the benchmark for heavy-duty and commercial vehicle workshops. Specializing in bus, truck, and specialty vehicle lifts, Finkbeiner combines Teutonic precision with long-term durability.",
        products: [
          'Heavy-Duty Column Lifts',
          'Commercial Vehicle Lifts',
          'Axle Play Detectors',
          'Wheel-Free Lifting Systems',
        ],
        website: 'https://www.finkbeiner.de/en',
      },
    ],
  },
  {
    slug: 'wheel-service',
    name: 'Wheel Service',
    tagline: 'Accuracy You Can Measure',
    description:
      'Precise wheel alignment, balancing, and tire service equipment from the brands that set the global standard for wheel service technology.',
    imagePlaceholder: '/images/categories/wheel-service.jpg',
    brands: [
      {
        name: 'Hunter Engineering',
        slug: 'hunter-engineering',
        logoPlaceholder: '/logos/brands/hunter.png',
        description:
          'Hunter Engineering is the world leader in wheel alignment, tire changers, wheel balancers, and inspection systems. Trusted by OEM dealerships and independent workshops globally, Hunter equipment combines camera-guided accuracy with intuitive software.',
        products: [
          'Wheel Alignment Systems',
          'Tire Changers',
          'Wheel Balancers',
          'ADAS Calibration',
          'Quick Check Drive Inspection',
        ],
        website: 'https://www.hunter.com',
      },
      {
        name: 'HPA Faip',
        slug: 'hpa-faip',
        logoPlaceholder: '/logos/brands/hpa-faip.png',
        description:
          'HPA Faip is an Italian manufacturer of professional tire inflation and service equipment. Their product line covers workshop compressors, digital tire inflators, and fluid handling systems designed for demanding professional environments.',
        products: [
          'Digital Tire Inflators',
          'Workshop Compressors',
          'Tire Pressure Gauges',
          'Fluid Dispensing Equipment',
        ],
        website: 'https://www.hpafaip.com',
      },
    ],
  },
  {
    slug: 'vehicle-inspection',
    name: 'Vehicle Inspection & Testing',
    tagline: 'Certified Accuracy, Trusted Results',
    description:
      'Professional vehicle inspection and diagnostic equipment that meets international regulatory standards, trusted by government inspection lanes and authorized service centers.',
    imagePlaceholder: '/images/categories/vehicle-inspection.jpg',
    brands: [
      {
        name: 'Maha Haldenwang',
        slug: 'maha-haldenwang',
        logoPlaceholder: '/logos/brands/maha.png',
        description:
          "Maha is Germany's leading manufacturer of vehicle testing and inspection equipment. Their systems are certified for official roadworthiness testing worldwide, covering brake testers, emissions analyzers, suspension testers, and complete inspection lane solutions.",
        products: [
          'Brake Testing Systems',
          'Emissions Analyzers',
          'Suspension & Shock Absorber Testers',
          'Headlight Testers',
          'Complete Inspection Lane Systems',
          'OBD Diagnostic Systems',
        ],
        website: 'https://www.maha.de/en',
      },
    ],
  },
  {
    slug: 'ac-service',
    name: 'A/C Service',
    tagline: 'Complete Climate Control Solutions',
    description:
      'Professional automotive air conditioning service equipment — from refrigerant recovery and recycling to complete A/C system diagnostics.',
    imagePlaceholder: '/images/categories/ac-service.jpg',
    brands: [
      {
        name: 'Ecotechnics Italy',
        slug: 'ecotechnics',
        logoPlaceholder: '/logos/brands/ecotechnics.png',
        description:
          'Ecotechnics is an Italian specialist in automotive air conditioning service equipment. Their recovery, recycling, and recharging (RRR) machines comply with European and international environmental standards and handle all current and emerging refrigerant types.',
        products: [
          'A/C Recovery & Recharging Machines',
          'Refrigerant Identifiers',
          'Leak Detection Equipment',
          'Flushing Machines',
        ],
        website: 'https://www.ecotechnics.eu',
      },
    ],
  },
  {
    slug: 'body-paint',
    name: 'Body & Paint',
    tagline: 'Restore. Protect. Perfect.',
    description:
      'Complete body shop solutions covering vehicle frame straightening, spray booths, welding, and structural repair systems from world-class manufacturers.',
    imagePlaceholder: '/images/categories/body-paint.jpg',
    brands: [
      {
        name: 'SaicoZero Italy',
        slug: 'saicozero',
        logoPlaceholder: '/logos/brands/saicozero.png',
        description:
          'SaicoZero is an Italian specialist in automotive spray booths and paint finishing systems. Their booths deliver controlled temperature, airflow, and filtration environments for flawless paint results, meeting international environmental and safety standards.',
        products: [
          'Automotive Spray Booths',
          'Preparation Stations',
          'Paint Mixing Rooms',
          'Infrared Curing Systems',
        ],
        website: 'https://www.saicozero.it/en',
      },
      {
        name: 'Deca Welding',
        slug: 'deca-welding',
        logoPlaceholder: '/logos/brands/deca.png',
        description:
          'Deca is a leading Italian manufacturer of professional welding equipment for automotive and industrial applications. Their MIG, TIG, and resistance welders are engineered for precision work on modern vehicle body panels and structural components.',
        products: [
          'MIG/MAG Welders',
          'TIG Welders',
          'Spot Welders',
          'Plasma Cutters',
          'Battery Chargers',
        ],
        website: 'https://www.decaweld.com/en/',
      },
      {
        name: 'Wedgeclamp',
        slug: 'wedgeclamp',
        logoPlaceholder: '',
        description:
          'Wedgeclamp systems deliver professional vehicle body and frame straightening solutions. Their modular bench systems and clamping technology allow precise multi-directional pulling for accurate structural repair on all vehicle types.',
        products: [
          'Body & Frame Straightening Benches',
          'Pulling Towers',
          'Universal Clamping Systems',
          'Measuring Systems',
        ],
        website: 'https://www.wedgeclamp.com',
      },
      {
        name: 'Chief Automotive (USA)',
        slug: 'chief-usa',
        logoPlaceholder: '/logos/brands/chief-usa.png',
        description:
          "Chief Automotive Technologies is North America's leading brand of vehicle measuring and straightening equipment. Their Genesis and Goliath systems provide the accuracy and repeatability demanded by certified collision repair centers.",
        products: [
          'Frame Straightening Systems',
          'Measuring Systems',
          'Structural Anchoring',
          'Pulling Attachments',
        ],
        website: 'https://www.chiefautomotive.com',
      },
    ],
  },
  {
    slug: 'hand-tools',
    name: 'Handtools & Cleaning Equipment',
    tagline: 'Built for Professionals, Built to Last',
    description:
      'Professional-grade hand tools and cleaning equipment trusted by technicians who demand precision, durability, and performance every day — including world-class Kärcher cleaning solutions.',
    imagePlaceholder: '/images/categories/hand-tools.jpg',
    brands: [
      {
        name: 'Polar Hand Tools',
        slug: 'polar-tools',
        logoPlaceholder: '/logos/brands/polar.jpg',
        description:
          'Polar delivers a comprehensive range of professional-grade hand tools and tool storage solutions. Manufactured to exceed international quality standards, Polar tools are the choice of demanding automotive technicians who rely on their tools daily.',
        products: [
          'Socket Sets',
          'Wrench Sets',
          'Torque Wrenches',
          'Screwdrivers',
          'Tool Cabinets & Storage',
          'Specialty Automotive Tools',
        ],
        website: 'https://www.polar-tools.com',
      },
      {
        name: 'Romess Tools',
        slug: 'romess',
        logoPlaceholder: '/logos/brands/romess.jpg',
        description:
          'Romess is a German specialist in professional workshop tools and specialty measuring instruments. Their product range focuses on precision torque tools, specialty automotive tools, and workshop equipment built to DIN standards.',
        products: [
          'Torque Wrenches',
          'Specialty Automotive Tools',
          'Measuring Instruments',
          'Workshop Equipment',
        ],
        website: 'https://www.romess.de/en',
      },
      {
        name: 'Kärcher',
        slug: 'karcher',
        logoPlaceholder: '/logos/brands/karcher.png',
        description:
          'As the official automotive dealer for Kärcher across all workshops in Egypt, we supply the full range of Kärcher professional cleaning equipment. From high-pressure washers to steam cleaners and vacuum systems, Kärcher delivers world-leading cleaning performance built for demanding workshop environments.',
        products: [
          'High-Pressure Washers',
          'Steam Cleaners',
          'Wet & Dry Vacuum Cleaners',
          'Vehicle Interior Cleaners',
          'Pressure Washer Accessories',
          'Detergents & Cleaning Agents',
        ],
        website: 'https://www.kaercher.com/int/',
      },
    ],
  },
]

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug)
}
