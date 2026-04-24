// src/data/categories.ts

export interface Brand {
  name: string
  slug: string
  logoPlaceholder: string
  description: string
  products: string[]
  website: string
  /** Short signature tagline / pull-quote sourced from the manufacturer. */
  quote?: string
  /** Large background image for the Brand Story band (path under /public). */
  heroImage?: string
  /** Year the company was founded. */
  foundedYear?: number
  /** City / country of origin, e.g. "Freudenstadt, Black Forest, Germany". */
  origin?: string
  /** ISO 3166-1 alpha-2 code for the brand's country (e.g. "DE", "IT", "US"). Drives flag rendering in the heritage band. */
  countryCode?: string
  /** Short credibility bullets — inventions, certifications, firsts. */
  heritage?: string[]
  /** One or two paragraph narrative tying the quote to proof points. */
  story?: string
  /** Visual showcase strip — vehicle/application photos with a short label and optional hover description. */
  showcase?: { image: string; label: string; description?: string }[]
  /** Customer testimonials sourced from the manufacturer. Rendered as a strip between the heritage band and applications grid. */
  testimonials?: { quote: string; author: string; role?: string; location?: string }[]
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
        quote: 'Serving the shop since 1925.',
        heroImage: '/brands/rotary-lift/hero.jpg',
        foundedYear: 1925,
        origin: 'Madison, Indiana, USA',
        countryCode: 'US',
        heritage: [
          'Inventor of the world\'s first hydraulic vehicle lift (1925)',
          'A century of industry-leading innovation',
          'Part of Vehicle Service Group — a Dover Corporation company',
          'ISO 9001:2015 & ISO 14001:2015 certified',
          'Global operations across the Americas, Europe, and Asia',
        ],
        story:
          'Inspired by watching a barber\'s chair rise and fall, Memphis mechanic Peter Lunati patented the world\'s first hydraulic vehicle lift in 1925 — and gave his rotating invention its name. A century later, Rotary is still headquartered in Madison, Indiana and still building equipment around the same commitment: safety, speed, and efficiency on the shop floor. From the original Model A of 1925 to today\'s scissor, two-post, and four-post lifts engineered at the European headquarters, every Rotary product carries the same promise — serving the shop.',
        showcase: [
          {
            image: '/brands/rotary-lift/showcase/inspiration.png',
            label: 'The Inspiration · 1925',
            description:
              "Memphis mechanic Peter Lunati watched a barber's chair glide up and down on its hydraulic pump and saw the future of the auto shop — a way to replace the grease pit and raise cars safely above the technician.",
          },
          {
            image: '/brands/rotary-lift/showcase/model-a.png',
            label: 'The Original Model A',
            description:
              "Patented on 1 September 1925, the Model A was the world's first hydraulic vehicle lift. Its rotating platform gave the company its name and moved mechanics out of the pit for good.",
          },
          {
            image: '/brands/rotary-lift/showcase/mid-century-workshop.jpg',
            label: 'Industry Standard · Mid-Century',
            description:
              "By the 1950s Rotary posts were fixtures in American service bays — three cars on three lifts became the new normal. A century later the posts are still hydraulic and the promise is still the same: serving the shop.",
          },
        ],
        products: [
          'Two-Post Lifts',
          'Double Scissor Lifts',
          'Four-Post Lifts',
        ],
        website: 'https://rotarysolutions.eu/en/',
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
          'Scissor Lifts',
          'Parking Lifts',
        ],
        website: 'https://www.realengasia.com',
        quote: 'Specialist in automotive service equipment since 1983.',
        heroImage: '/brands/real/hero.jpg',
        foundedYear: 1983,
        origin: 'Hong Kong SAR',
        countryCode: 'HK',
        heritage: [
          'Hong Kong roots dating back to 1983',
          'Built the first fully computerised 10-lane commercial vehicle testing centre in Asia (1987)',
          'In-house manufacturing via joint venture with Heshbon of Korea since 2003',
          'CE-approved, ISO 9001 and TÜV Rheinland certified',
          'Regular exhibitor at Automechanika Frankfurt since 2004',
        ],
        story:
          "Founded in Hong Kong in 1983, REAL — Rotary Engineering (Asia) Limited — spent its first two decades importing the industry's best automotive service equipment before becoming a manufacturer in its own right. A 2003 joint venture with Heshbon of Korea added in-house production of lifts and spray booths, and in 1987 REAL delivered a landmark installation: the first fully computerised 10-lane commercial vehicle testing centre in Asia, built for the Hong Kong government. Today REAL lifts are CE-approved, ISO 9001 certified, and deployed in workshops and 4S centres from Hong Kong and Mainland China to the wider global market.",
        showcase: [
          {
            image: '/brands/real/showcase/scissor-workshop.jpg',
            label: 'Scissor Lifts',
            description: 'Low-profile scissor lifts for MOT and wheel alignment in CE-approved EU bays.',
          },
          {
            image: '/brands/real/showcase/parking-residential.jpg',
            label: 'Parking Lifts',
            description: 'Two- and four-post parking stackers that double or triple useable floor area.',
          },
        ],
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
        website: 'https://www.finkbeiner-lifts.com/en/',
        quote: 'Finkbeiner lifts made in the Black Forest.',
        heroImage: '/brands/finkbeiner/facility-aerial.jpg',
        foundedYear: 1967,
        origin: 'Freudenstadt, Black Forest, Germany',
        countryCode: 'DE',
        heritage: [
          'Inventor of the hydraulic mobile column lift',
          'Family-owned since 1967',
          'In-house development, production, and load-testing',
          'Worldwide distribution and service network',
        ],
        story:
          'Walter Finkbeiner GmbH has been engineering vehicle lifts from its headquarters in Freudenstadt — deep in the German Black Forest — since 1967. The family-run manufacturer invented the hydraulic mobile column lift and continues to develop, build, and load-test every unit in-house before it leaves the factory. Today Finkbeiner lifts move cars, vans, buses, trucks, rail vehicles, and aircraft ground-support equipment in workshops across the world.',
        showcase: [
          { image: '/brands/finkbeiner/showcase/vehicle-range.png', label: 'Full Commercial Range' },
          { image: '/brands/finkbeiner/showcase/truck-lift.png', label: 'Heavy Trucks' },
          { image: '/brands/finkbeiner/showcase/bus-lift.png', label: 'Buses & Coaches' },
          { image: '/brands/finkbeiner/showcase/sprinter-lift.png', label: 'Vans & Sprinters' },
          { image: '/brands/finkbeiner/showcase/motorhome-lift.png', label: 'Motorhomes & RVs' },
          { image: '/brands/finkbeiner/showcase/rail-lift.png', label: 'Rail Vehicles' },
        ],
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
        quote: 'Aligning people and innovation to drive excellence.',
        heroImage: '/brands/hunter-engineering/hero.jpg',
        foundedYear: 1946,
        origin: 'Bridgeton, Missouri, USA',
        countryCode: 'US',
        heritage: [
          'Founded in 1946 by U.S. Army veteran Lee Hunter Jr.',
          'Family- and veteran-owned for eight decades',
          'All PCB design and assembly done in-house in the USA',
          'Hundreds of patented innovations across alignment, balancing, and tire service',
          'Largest dedicated field service force in the undercar industry',
          'Founder inducted into the Automotive Hall of Fame',
        ],
        story:
          "Established in Bridgeton, Missouri in 1946 by U.S. Army veteran Lee Hunter Jr., Hunter Engineering built its reputation on award-winning wheel alignment systems and undercar service equipment. Eight decades later the company is still family- and veteran-owned, designing, engineering, and assembling every machine — electronics included — in the United States. Hunter products anchor OEM dealerships and independent workshops worldwide, backed by the industry's largest dedicated field service team for training, installation, and support.",
        showcase: [
          {
            image: '/brands/hunter-engineering/showcase/alignment.png',
            label: 'Wheel Alignment',
            description: 'HawkEye Elite and HawkEye XL camera-guided alignment for passenger and commercial vehicles.',
          },
          {
            image: '/brands/hunter-engineering/showcase/tire-changer.png',
            label: 'Tire Changers',
            description: 'Revolution, Maverick, and Center-Clamp tire machines — fully automatic for any wheel in the bay.',
          },
          {
            image: '/brands/hunter-engineering/showcase/balancer.png',
            label: 'Wheel Balancers',
            description: 'Road Force WalkAway and SmartWeight Elite balancers that diagnose vibration issues OE technicians miss.',
          },
          {
            image: '/brands/hunter-engineering/showcase/adas.jpg',
            label: 'ADAS Calibration',
            description: 'Ultimate ADAS pairs wheel alignment with static ADAS calibration in one error-proof workflow.',
          },
          {
            image: '/brands/hunter-engineering/showcase/inspection.jpg',
            label: 'Drive-Over Inspection',
            description: 'Quick Check Drive scans alignment, tread depth, and tire pressure in under a minute — no hands on the vehicle.',
          },
        ],
      },
      {
        name: 'HPA Faip',
        slug: 'hpa-faip',
        logoPlaceholder: '/logos/brands/hpa-faip.png',
        description:
          "HPA Faip is an Italian tire-changer manufacturer built in the heart of Emilia-Romagna's Motor Valley. As a brand of the Nexion Group — the company that invented the wheel-clamp tire changer in 1962 — HPA Faip delivers workshop-grade machines for everything from compact passenger cars to heavy commercial vehicles, at a value-tier price point that industrial-grade R&D makes possible.",
        products: [
          'Passenger Tire Changers',
          'Commercial Tire Changers',
        ],
        website: 'https://www.hpa-faip.it',
        quote: 'Inventors and pioneers driven by passion.',
        heroImage: '/brands/hpa-faip/hero.jpg',
        foundedYear: 1954,
        origin: "Correggio, Emilia-Romagna, Italy",
        countryCode: 'IT',
        heritage: [
          'Brand of Nexion Group — founded 1954 in Correggio, Italy',
          'Nexion invented the wheel-clamp tire changer in 1962',
          '12 manufacturing plants and 8 R&D centres across the Nexion network',
          '500+ patents filed and roughly 140 new development projects every year',
          'Named among the Top 50 Italian Automotive Excellence companies',
          'OEM partnerships with Fiat, Iveco, Lamborghini and Piaggio',
        ],
        story:
          "HPA Faip designs and builds tire changers in Correggio, in the same Emilia-Romagna Motor Valley that produces Ferrari, Lamborghini and Ducati. As a brand of Nexion Group — the industrial parent founded in 1954 and credited with inventing the wheel-clamp tire changer in 1962 — HPA Faip stands apart from the generic imports flooding the market: every machine is engineered in Italy and built inside a 12-plant, 8-R&D-centre ecosystem that also supplies OEM lines at Fiat, Iveco, Lamborghini and Piaggio. With 500+ patents filed across Nexion's 70-year history and roughly 140 new development projects each year, HPA Faip delivers value-tier pricing backed by industrial-grade engineering — not a low-cost shortcut.",
        showcase: [
          {
            image: '/brands/hpa-faip/showcase/bravo-m51.png',
            label: 'BRAVO Line — Premium',
            description: 'The M51 BRAVO flagship: top-of-the-range swing-arm tire changer for premium passenger wheels.',
          },
          {
            image: '/brands/hpa-faip/showcase/diamond-m1032.png',
            label: 'Diamond — Lever-Less Universal',
            description: 'M1032 Diamond A handles run-flats, UHP and low-profile tires without a single mount bar.',
          },
          {
            image: '/brands/hpa-faip/showcase/passenger-m624.png',
            label: 'Workshop — Passenger',
            description: 'M624 2V FS: the workhorse swing-arm changer for everyday passenger and SUV service.',
          },
          {
            image: '/brands/hpa-faip/showcase/commercial-f565.png',
            label: 'Heavy-Duty — Commercial',
            description: 'F565 tilt-bed commercial changer for trucks, buses, agricultural and earthmover wheels.',
          },
        ],
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
        quote: 'Made in Germany. Based in the Allgäu, at home in the world.',
        heroImage: '/brands/maha-haldenwang/hero.jpg',
        foundedYear: 1968,
        origin: 'Haldenwang, Allgäu, Germany',
        countryCode: 'DE',
        heritage: [
          'Founded 1968 in a garage in Haldenwang, Bavaria',
          'Over 1,000 employees and two production sites (Germany + USA)',
          '430,000+ testing and lifting systems delivered worldwide',
          '19 subsidiaries across 150+ countries; 70%+ export share',
          'Official type-approvals from Germany (KBA) and automotive OEMs',
          'Complete single-source supplier for roadworthiness inspection lanes',
        ],
        story:
          "MAHA began in 1968 as a modest garage operation in Haldenwang, deep in the Bavarian Allgäu, and grew into the global benchmark for vehicle testing and lifting technology. From that workshop came Germany's first-ever PKW brake tester — and six decades later, more than 430,000 MAHA systems are in daily use across 150 countries, serving government inspection bodies, premium-brand OEMs, and independent workshops. Every brake tester, emission analyser, suspension plate, and headlight aimer is engineered and manufactured at the Haldenwang headquarters under the same uncompromising Made-in-Germany standard, supported by a second plant in the USA and 19 subsidiaries worldwide. With over 1,000 employees and roughly €150 million in annual revenue, MAHA remains the name authorities and engineers trust when the answer has to be certifiable, repeatable, and right.",
        showcase: [
          {
            image: '/brands/maha-haldenwang/showcase/brake-tester.jpg',
            label: 'Brake Testing',
            description: 'MBT 2250 EUROSYSTEM roller brake testers — the standard for government-grade roadworthiness inspection.',
          },
          {
            image: '/brands/maha-haldenwang/showcase/vehicle-testing.jpg',
            label: 'Suspension & Shock',
            description: 'MSD 3000 EUSAMA-standard plate tester for shock absorber and chassis diagnostics.',
          },
          {
            image: '/brands/maha-haldenwang/showcase/emissions.jpg',
            label: 'Emission Measurement',
            description: 'MET emission analysers for petrol, diesel and OBD readout — certified for official periodic inspections.',
          },
          {
            image: '/brands/maha-haldenwang/showcase/headlight-tester.jpg',
            label: 'Headlight Testing',
            description: 'MLT 3000 2.0 digital headlight tester — LED / matrix-beam ready and KBA type-approved.',
          },
        ],
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
        website: 'https://www.ecotechnics.com/world/en/',
        quote: 'Simply efficient.',
        heroImage: '/brands/ecotechnics/hero.jpg',
        foundedYear: 1995,
        origin: 'Sesto Fiorentino, Florence, Italy',
        countryCode: 'IT',
        heritage: [
          'Founded 1995 in Florence, in the Tuscan research and engineering corridor',
          'Pioneered the first fully-automatic A/C service process',
          'Invented the compact aluminium manifold that is now an industry standard',
          'Global-recommendation partner for BMW Group (BMW, MINI, Rolls-Royce) A/C service',
          'Acquired in 2015 by Snap-on — part of the same portfolio as Snap-on, Sun and John Bean',
          'Present in 80+ countries through specialist automotive dealer networks',
        ],
        story:
          "Ecotechnics was founded in 1995 in Sesto Fiorentino, just outside Florence, to specialise in one thing: automotive air conditioning service. Sitting in Tuscany's research-and-engineering corridor, the company quickly built a reputation for firsts — the first fully-automatic A/C service cycle, the first compact aluminium manifold, the first integrated A/C diagnostics inside the service station itself. In 2015 the brand was acquired by Snap-on, the US industrial-tool giant founded in 1920, and today operates as Snap-on Climate Solutions S.r.l. alongside sister brands like Sun and John Bean. Ecotechnics service stations are a global recommendation of the BMW Group for BMW, MINI, and Rolls-Royce A/C service, and are sold in more than 80 countries — with a product portfolio that already spans the full refrigerant future, from R-134a and R-1234yf to dedicated CO₂ (R-744) systems.",
        showcase: [
          {
            image: '/brands/ecotechnics/showcase/co2-r744.png',
            label: 'ECO₂R744 — CO₂ Flagship',
            description: 'Dedicated CO₂ / R-744 service unit for next-generation heat-pump A/C systems on hybrids and EVs.',
          },
          {
            image: '/brands/ecotechnics/showcase/twin-dual.png',
            label: 'ECK TWIN 12 — Dual Refrigerant',
            description: 'Twin-tank station handles R-134a and R-1234yf side by side — one machine for any modern car.',
          },
          {
            image: '/brands/ecotechnics/showcase/bus-pro.png',
            label: 'ECK BUS-PRO — Heavy-Duty',
            description: 'High-capacity unit engineered for buses, coaches, trucks and rolling-stock A/C systems.',
          },
          {
            image: '/brands/ecotechnics/showcase/mobile-land.png',
            label: 'ECK LAND — Mobile',
            description: 'Compact, trolley-mounted service station for roadside assistance and on-site agricultural service.',
          },
        ],
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
        website: 'https://saicozero.com/',
        quote: 'Responding to the needs of the workplace and the environment.',
        heroImage: '/brands/saicozero/hero.jpg',
        foundedYear: 2004,
        origin: 'Chiusi della Verna, Arezzo, Italy',
        countryCode: 'IT',
        heritage: [
          'Founded in 2004 by Pierangelo Ghilardi in Tuscany',
          'Invented the Multizone booth — prep, paint and cure in a single processing area',
          'Solar-powered 13,000 m² production facility in Arezzo',
          'Regenerative filtration technology cuts booth emissions by more than 80%',
          'Circular heating system that operates without fossil-fuel burners (2022)',
          'Builder of the Paint Platforms — the largest multi-vehicle spray booth in the world',
        ],
        story:
          "SaicoZero was founded in 2004 by Pierangelo Ghilardi in Chiusi della Verna, in the Casentino valley of Tuscany, with a single goal: rebuild the spray booth around the painter and the planet instead of the other way around. That same year the company introduced the Multizone — a booth that handles preparation, painting and curing in one processing area — and the firsts kept coming: directional half-moon diffusers to kill dead zones (2006), regenerative filtration that cuts emissions by over 80% (2013), a solar-powered 13,000 m² production facility (2014), the world's largest Paint Platforms for multi-vehicle workflows (2020), and a circular burner-less heating system (2022). Today SaicoZero spray booths paint everything from volume body shops and premium-brand bodyshops to marine, rail and aviation projects — all certified under the CE mark and built to the same Tuscan engineering and sustainability standard.",
        showcase: [
          {
            image: '/brands/saicozero/showcase/multizone.jpg',
            label: 'Multizone — The Signature Booth',
            description: 'Single-zone booth that prepares, paints and cures in one controlled environment — the 2004 invention that put SaicoZero on the map.',
          },
          {
            image: '/brands/saicozero/showcase/tc-compact.jpg',
            label: 'TC Compact',
            description: 'Space-efficient compact booth for small and medium body shops — premium filtration in a smaller footprint.',
          },
          {
            image: '/brands/saicozero/showcase/stj.jpg',
            label: 'STJ Series',
            description: 'Traditional spray booth line for daily volume painting, fitted with heat recovery and LED lighting.',
          },
          {
            image: '/brands/saicozero/showcase/aviation.jpg',
            label: 'Marine & Aviation',
            description: 'Large-format booths engineered for aircraft panels, marine hulls and industrial painting projects.',
          },
        ],
      },
      {
        name: 'Deca Welding',
        slug: 'deca-welding',
        logoPlaceholder: '/logos/brands/deca.png',
        description:
          'DECA is a San Marino–based manufacturer of professional welding and battery-charging equipment for automotive and industrial workshops. Their MIG, TIG, plasma and resistance welders are engineered for precision work on modern vehicle body panels and structural components, alongside a full line of chargers, boosters and jump starters.',
        products: [
          'MIG/MAG Welders',
          'TIG Welders',
          'Spot Welders',
          'Plasma Cutters',
          'Battery Chargers',
        ],
        website: 'https://www.decaweld.com/en/',
        quote: 'Welding and charging, made in San Marino.',
        heroImage: '/brands/deca-welding/hero.jpg',
        origin: 'Falciano, Republic of San Marino',
        countryCode: 'SM',
        heritage: [
          'Over 50 years of designing and manufacturing welding and charging equipment',
          'Full vertical integration — conception, design, industrialisation, production and quality control all in-house',
          'Proprietary hardware platforms built and improved directly by DECA engineers',
          'Custom control-panel software developed with industry specialists',
          'In-house training centre plus on-site technical assistance for distributors',
          'Headquartered in the Industrial Zone of Rovereta, Falciano — Republic of San Marino',
        ],
        story:
          "For over fifty years, DECA has pursued a single discipline from its plant in the Republic of San Marino: designing and manufacturing reliable, high-performance welding and charging equipment. Being the manufacturer of the equipment it sells lets DECA hold every link of the chain — conception, design, industrialisation, production and quality control — inside its own walls. The hardware is developed in-house, the control panels are driven by custom software built with industry specialists, and intuitive interfaces make sophisticated welders feel straightforward on the shop floor. A dedicated training centre in Falciano backs up distributors and end users with technical assistance and hands-on courses, on-site or at the factory.",
        showcase: [
          {
            image: '/brands/deca-welding/showcase/professional-welding.png',
            label: 'Professional Welding',
            description: 'Industrial MIG/MAG, TIG DC and multiprocess inverters for metalworkers, fabricators and heavy-duty body shops.',
          },
          {
            image: '/brands/deca-welding/showcase/car-body-repair.png',
            label: 'Car Body Repair',
            description: 'Spot welders and smart MIG stations purpose-built for modern vehicle panels — aluminium, HSS and UHSS.',
          },
          {
            image: '/brands/deca-welding/showcase/battery-chargers.png',
            label: 'Chargers, Boosters & Starters',
            description: 'Complete range of battery chargers, maintainers, start-assist boosters and jump starters for passenger, commercial and traction applications.',
          },
          {
            image: '/brands/deca-welding/showcase/consumables.png',
            label: 'Accessories & Consumables',
            description: 'DECA-branded torches, tips, nozzles, MIG/TIG/MMA consumables and spare parts engineered for the full equipment range.',
          },
        ],
      },
      {
        name: 'Wedge Clamp',
        slug: 'wedgeclamp',
        logoPlaceholder: '/logos/brands/wedgeclamp.png',
        description:
          'Wedge Clamp Systems deliver professional autobody anchoring, measuring and pulling in a compact footprint that frees up floor space without compromising capability. Part of the Celette group, their modular clamping technology and portable towers enable accurate multi-directional structural repair on passenger cars, SUVs and light trucks.',
        products: [
          'EZE Tie Down Anchoring System',
          'Chainless Anchoring System',
          'Full-Frame Anchoring System',
          'Monocoque, EZE Roller & Quick-Pull 5000 Towers',
          'EZELift Body Repair Lift',
          'EZE Mobile Cart',
        ],
        website: 'https://www.wedgeclamp.com/',
        quote: 'Anchoring, measuring and pulling — in very little space on the shop floor.',
        heroImage: '/brands/wedgeclamp/hero.jpg',
        origin: 'North America (Celette group)',
        heritage: [
          'More than 27,000 Wedge Clamp systems in service across dozens of countries',
          'Part of the Celette group — a household name in collision repair (1-800-CELETTE)',
          'Single platform covers all three core autobody functions: anchoring, measuring and pulling',
          'Compact footprint frees up floor space without sacrificing capability',
          'Meets the core requirements of Assured Performance and Certified Collision Care certifications',
          'Product line spans light passenger jobs (EZE Tie Down) through heavy truck and SUV work (Full-Frame)',
        ],
        story:
          "Wedge Clamp Systems earned its reputation by compressing a full autobody straightening workflow — anchoring, measuring and pulling — into a footprint small enough to fit any workshop. More than 27,000 systems are in service across dozens of countries, used by bodyshop owners, insurance networks and technicians who value accuracy and speed in equal measure. The lineup is built around modular clamping technology: the EZE Tie Down for light, fast jobs; the Chainless Anchoring System for medium work; the Full-Frame Anchoring System for trucks and SUVs; and three portable pulling towers — Monocoque, EZE Roller and Quick-Pull 5000. Wedge Clamp products meet the core requirements of Assured Performance and Certified Collision Care certifications, and the family has since expanded into body repair with the EZELift and the NitroHeat industrial spraypainting system.",
        showcase: [
          {
            image: '/brands/wedgeclamp/showcase/eze-tie-down.jpg',
            label: 'EZE Tie Down',
            description: 'Lightweight anchoring for fast, light-duty jobs — set up quickly, pack away quickly, reclaim the floor.',
          },
          {
            image: '/brands/wedgeclamp/showcase/chainless.jpg',
            label: 'Chainless Anchoring',
            description: 'The chainless medium-duty system — secure anchoring for everyday collision work without the chain storage headache.',
          },
          {
            image: '/brands/wedgeclamp/showcase/full-frame.jpg',
            label: 'Full-Frame Anchoring',
            description: 'Heavy-duty full-frame anchoring purpose-built for trucks, SUVs and body-on-frame vehicles.',
          },
          {
            image: '/brands/wedgeclamp/showcase/ezelift.jpg',
            label: 'EZELift',
            description: 'Body-repair lift engineered to work alongside the Wedge Clamp anchoring and pulling platform.',
          },
        ],
        testimonials: [
          {
            quote: 'Wedge Clamp has made my locations far more efficient.',
            author: 'Bill Hatswell',
            role: 'CEO, Craftsman Collision Group (34 locations)',
            location: 'Canada',
          },
          {
            quote: 'In my 30 years in the car business I have never been more pleased with a shop tool.',
            author: 'Andy Kerby',
            role: 'Manager, Jim Marsh Body Shop (44 repair bays)',
            location: 'Las Vegas, NV',
          },
          {
            quote: 'Wedge Clamp performs best in two key areas: capabilities of the equipment and return on investment.',
            author: 'Bill Wynkoop',
            role: 'CEO, Auto Rehab — Crash1 Collision Repair Network',
            location: 'USA',
          },
          {
            quote: 'The Stat-Gun performs exactly as claimed. Since we got it, our paint jobs have been virtually flawless.',
            author: 'Bob Vickers',
            role: 'Mike Orton Body Shop',
            location: 'Joplin, MO',
          },
        ],
      },
      {
        name: 'Chief Collision Technologies',
        slug: 'chief-usa',
        logoPlaceholder: '/logos/brands/chief-usa.png',
        description:
          "Chief Collision Technologies engineers collision-repair equipment for the full structural workflow — diagnostics and calibration, measuring, pulling, welding and riveting. Founded in 1972 and now part of Dover Corporation's Vehicle Service Group (alongside Rotary), Chief serves professional body shops in almost 50 countries with precision tooling built around OEM specifications.",
        products: [
          'Frame & Structural Pulling Racks',
          'MIG/MAG Welders (Multimig series)',
          'Inverter Resistance Spot Welders (MI300T)',
          'Riveting Tools (PNP90)',
          'Measuring & Diagnostics Systems',
          'Anchoring & Pulling Attachments',
        ],
        website: 'https://rotarysolutions.com/brand/chief-collision-technology/',
        quote: 'After a collision, choose precision.',
        heroImage: '/brands/chief-usa/hero.jpg',
        foundedYear: 1972,
        origin: 'USA — part of Dover Vehicle Service Group',
        countryCode: 'US',
        heritage: [
          'Founded in 1972 — over 50 years of collision-repair engineering',
          "Six global locations and representation in almost 50 countries",
          "Part of Dover Corporation's Vehicle Service Group (same parent as Rotary)",
          'Full structural workflow under one brand: measuring, pulling, welding, riveting and calibration',
          'Tooling built to deliver the very latest OEM repair specifications',
          'Trusted by thousands of body shop professionals as their sole source of collision equipment',
        ],
        story:
          "There's a reason the word “technology” sits in the brand name. Founded in 1972 and now part of Dover Corporation's Vehicle Service Group — the same parent as Rotary — Chief Collision Technologies has spent over fifty years engineering the precision tooling that collision repair demands. Six global locations and representation in almost fifty countries back a single promise: a total repair solution spanning diagnostics and calibration, measuring, pulling, welding and structural fastening. The hardware pairs sophisticated capability with easy-to-use displays — MI300T resistance spot welders, Multimig 525/511 multiprocess welders, the Phoenix pulling rack and the PNP90 riveting system — and every product is updated against the very latest OEM repair specifications so shops can make better repairs, profitably. Precision, selection, service and value: when you need to talk collision repair, always talk to the Chief.",
        showcase: [
          {
            image: '/brands/chief-usa/showcase/mi300t.png',
            label: 'MI300T',
            description: 'Inverter resistance spot welder engineered for modern high-strength steel and aluminium body panels — OEM-approved on the current generation of vehicles.',
          },
          {
            image: '/brands/chief-usa/showcase/multimig-525.png',
            label: 'Multimig 525',
            description: 'Flagship multiprocess MIG/MAG welder for body shops — covers mild steel, aluminium and advanced high-strength steel with a single workstation.',
          },
          {
            image: '/brands/chief-usa/showcase/phoenix-rack.png',
            label: 'Phoenix Pulling Rack',
            description: '12,000 lb capacity structural pulling rack — shown here anchoring a Ford F-250 for a full-frame repair.',
          },
          {
            image: '/brands/chief-usa/showcase/pnp90.png',
            label: 'PNP90 Riveting Tool',
            description: 'Self-piercing rivet gun for aluminium and mixed-material OEM structural repairs — the standard tool for Ford F-150 and Audi-class vehicles.',
          },
        ],
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
        name: 'ROMESS',
        slug: 'romess',
        logoPlaceholder: '/logos/brands/romess.png',
        description:
          "ROMESS-Rogg is a German family-run manufacturer of precision service equipment for the automotive sector, built to the highest Made-in-Germany standards. Their catalogue covers brake-fluid maintenance, chassis measurement, hydraulic units and ADAS calibration — actively promoting road safety while simplifying and accelerating everyday workshop processes.",
        products: [
          'Brake Fluid Testers & Bleeders',
          'Inclinometers & Chassis Measurement',
          'Steering Wheel Balance Tools',
          'Hydraulic Units',
          'ADAS / Distronic Calibration Systems',
          'Radar Adjustment Tables',
        ],
        website: 'https://www.romess.de/index.php/en/',
        quote: 'Quality is when the customer comes back, not the product.',
        heroImage: '/brands/romess/hero.jpg',
        foundedYear: 1970,
        origin: 'Villingen-Schwenningen, Black Forest, Germany',
        countryCode: 'DE',
        heritage: [
          'Founded in 1970 — celebrating 55 years of operation in 2026',
          'Family business in Villingen-Schwenningen, Black Forest — Made in Germany',
          'Run by managing directors Werner Rogg and Ingeborg Eisele-Rogg',
          'Grown from a small engineering company into a leading manufacturer of automotive service equipment',
          'Mission: actively promote road safety while simplifying workshop processes',
          'Full catalogue spans brake maintenance, chassis measurement, hydraulics and ADAS calibration',
        ],
        story:
          "ROMESS-Rogg was founded in 1970 as a small engineering company in Villingen-Schwenningen, on the eastern edge of the Black Forest, and 55 years on it is one of Germany's leading manufacturers of service equipment for the automotive sector. It has stayed a family business — today led by Werner Rogg and Ingeborg Eisele-Rogg — and its working philosophy is summed up in a single line: quality is when the customer comes back, not the product. The catalogue covers four specialities: brake-fluid testers and bleeders (Aqua, BFS, BW-1408, S-15, S-30-60), inclinometers and steering-wheel balance tools for chassis measurement, rugged hydraulic units, and the Distronic/radar calibration systems used by authorised workshops to set up ADAS sensors after service. Every instrument is engineered to the same Made-in-Germany standard — because road safety depends on it.",
        showcase: [
          {
            image: '/brands/romess/showcase/brake-maintenance.png',
            label: 'Brake Maintenance',
            description: 'Brake-fluid testers and bleeders (Aqua, BFS, BW-1408, S-15 to S-30-60 duo) for fast, clean service on passenger and commercial vehicles.',
          },
          {
            image: '/brands/romess/showcase/chassis-measurement.jpg',
            label: 'Chassis Measurement',
            description: 'Inclinometers, steering-wheel balance tools and the Romess 09905 / 09935 systems used by OEM-approved chassis workshops.',
          },
          {
            image: '/brands/romess/showcase/engineering.jpg',
            label: 'ADAS & Distronic Calibration',
            description: 'Radar adjustment tables, Distronic calibration units (09803-DTR, 09807-10) and adjustment targets for authorised ADAS service.',
          },
          {
            image: '/brands/romess/showcase/hydraulic-units.jpg',
            label: 'Hydraulic Units',
            description: 'Purpose-built hydraulic units engineered to the same Made-in-Germany precision standard as the rest of the ROMESS catalogue.',
          },
        ],
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
