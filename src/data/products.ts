// src/data/products.ts
// Deep product data: Category → Brand → Product Line → Model → Specs

export interface ProductSpec {
  label: string
  value: string
}

export interface ProductModel {
  slug: string
  name: string
  tagline: string
  description: string
  specs: ProductSpec[]
  features: string[]
  images?: string[]
}

export interface ProductLine {
  slug: string
  name: string
  description: string
  models: ProductModel[]
}

export interface BrandProductData {
  brandSlug: string
  categorySlug: string
  brandName: string
  logoPlaceholder: string
  productLines: ProductLine[]
}

export const brandProducts: BrandProductData[] = [
  // ─────────────────────────────────────────────────────────────
  // HUNTER ENGINEERING — Wheel Service
  // ─────────────────────────────────────────────────────────────
  {
    brandSlug: 'hunter-engineering',
    categorySlug: 'wheel-service',
    brandName: 'Hunter Engineering',
    logoPlaceholder: '/logos/brands/hunter.png',
    productLines: [
      {
        slug: 'wheel-alignment',
        name: 'Wheel Alignment Systems',
        description: 'Camera-guided alignment systems trusted by OEM dealerships and independent workshops worldwide, combining patented software with intuitive guided procedures.',
        models: [
          {
            slug: 'hawkeye-elite',
            name: 'HawkEye Elite®',
            tagline: 'The world\'s most productive alignment system — full four-wheel alignment in 70 seconds.',
            images: ['/products/hunter-engineering/hawkeye-elite.jpg'],
            description: 'The HawkEye Elite® is Hunter\'s flagship wheel alignment system, delivering comprehensive four-wheel alignment measurements in just 70 seconds. Four wireless, high-resolution cameras and QuickGrip® wheel adaptors ensure fast, accurate readings without metal-to-rim contact. WinAlign® software — with its database of over 285 million vehicles — guides technicians through precise, efficient procedures every time.',
            specs: [
              { label: 'Measurement Time', value: '70 seconds (full 4-wheel)' },
              { label: 'Camera System', value: '4 high-resolution wireless cameras' },
              { label: 'Vehicle Database', value: '285+ million vehicles' },
              { label: 'Wheel Adaptors', value: 'QuickGrip® — up to 37" assemblies, ~6 lbs each' },
              { label: 'Software', value: 'WinAlign®' },
              { label: 'Connectivity', value: 'HunterNet® 2' },
              { label: 'Warranty', value: '3-year parts / 6-month labor' },
              { label: 'Origin', value: 'Designed & built in the USA' },
            ],
            features: [
              'ExpressAlign® for streamlined single-screen procedures',
              'WinToe® for straight steering wheel alignment',
              'Virtual View® with real-time 3D graphics',
              'Control Arm Movement Monitor® for dual-cam vehicles',
              'Suspension Body Dimension Audit',
              'Automatic Bushing Calculator®',
              'Live Ride Height Adjustment',
              'ADASLink® integration for ADAS resets post-alignment',
              'Fully Integrated Alignment (FIA) — 60% faster with compatible lift racks',
              'HunterNet® 2 connectivity for ROI tracking and result storage',
              'Expandable to Ultimate ADAS® with HawkEye Elite X configuration',
            ],
          },
          {
            slug: 'hawkeye-xl',
            name: 'HawkEye® XL',
            tagline: 'Extended-reach alignment for vans, light trucks, and larger commercial vehicles.',
            images: ['/products/hunter-engineering/hawkeye-xl.jpg'],
            description: 'The HawkEye® XL extends Hunter\'s precision camera alignment to accommodate longer wheelbases and taller vehicles — vans, light trucks, and SUVs — without compromising measurement speed or accuracy.',
            specs: [
              { label: 'Camera System', value: '4 high-resolution cameras' },
              { label: 'Software', value: 'WinAlign®' },
              { label: 'Extended Reach', value: 'Suits long-wheelbase and taller vehicles' },
              { label: 'Connectivity', value: 'HunterNet® 2' },
              { label: 'Warranty', value: '3-year parts / 6-month labor' },
            ],
            features: [
              'All WinAlign® software features',
              'QuickGrip® adaptors with extended-reach arms',
              'ADASLink® integration',
              'HunterNet® 2 connectivity',
            ],
          },
        ],
      },
      {
        slug: 'wheel-balancers',
        name: 'Wheel Balancers',
        description: 'From passenger car to heavy-duty trucks, Hunter\'s balancers combine patented Road Force® diagnostic technology with SmartWeight® optimization to eliminate vibration and reduce weight usage.',
        models: [
          {
            slug: 'road-force-walkaway',
            name: 'Road Force® WalkAway™',
            tagline: 'The world\'s fastest diagnostic wheel balancer — floor-to-floor in 70 seconds.',
            images: ['/products/hunter-engineering/road-force-walkaway.jpg'],
            description: 'The Road Force® WalkAway™ combines Hunter\'s industry-leading Road Force® diagnostic technology with autonomous WalkAway™ inflation. The system completes Road Force measurement, SmartWeight® balancing, and automatic tire inflation in approximately 70 seconds — allowing technicians to start the next job while the machine finishes. Saves up to 15 minutes on a full four-tire changeover.',
            specs: [
              { label: 'Floor-to-Floor Time', value: '~70 seconds (full diagnostic + balance)' },
              { label: 'Time Savings', value: 'Up to 44% on four-tire changeovers' },
              { label: 'Single-Weight Solutions', value: '60% of the time vs. traditional two-weight' },
              { label: 'Weight Reduction', value: '~35% less weight used' },
              { label: 'OEM Approvals', value: '24+ original equipment manufacturers' },
              { label: 'Laser Classification', value: 'Class 2 (HammerHead® TDC: Class 1)' },
              { label: 'Warranty', value: '3-year parts / 6-month labor' },
              { label: 'Origin', value: 'Designed & built in the USA' },
            ],
            features: [
              'Autonomous WalkAway™ inflation — air chuck releases automatically when done',
              'Road Force® diagnostic load roller identifies vibration sources beyond standard balancing',
              'Detects tire uniformity issues, rim runout, improper bead seating, and tire pull',
              'Patented vision system automatically measures wheel dimensions',
              'Automatic CenteringCheck® prevents improper balancing',
              'SmartWeight® technology hides weights behind spokes when possible',
              'eCal auto-calibration maintains ongoing accuracy',
              'Touchscreen with 3D live balance results',
              'TPMSpecs® vehicle database',
              'HunterNet® 2: real-time ROI tracking, daily push reports, consumable ordering',
            ],
          },
          {
            slug: 'smartweight-elite',
            name: 'SmartWeight® Elite',
            tagline: 'Automatic dimension entry and vision-guided weight placement for maximum speed and accuracy.',
            images: ['/products/hunter-engineering/smartweight-elite.jpg'],
            description: 'The SmartWeight® Elite uses a patented vision system to automatically create a 3D model of the rim, eliminating manual dimension entry and guiding technicians to precise weight placement. Automatic CenteringCheck® on every spin prevents costly comebacks, while rim runout diagnostics catch bent or damaged rims before they become a problem.',
            specs: [
              { label: 'Maximum Wheel Diameter', value: '44 inches' },
              { label: 'Maximum Wheel Weight', value: '175 lbs' },
              { label: 'Single-Weight Solutions', value: '60% of the time' },
              { label: 'Weight Reduction', value: '~35% vs. traditional methods' },
              { label: 'Rim Types', value: 'Flanged, flangeless, plastic clad, colored, run-flat' },
              { label: 'Calibration', value: 'Patented eCal auto-calibration' },
              { label: 'Warranty', value: '3-year parts / 6-month labor' },
              { label: 'Origin', value: 'Designed & built in the USA' },
            ],
            features: [
              'Patented vision system creates full 3D rim model — no manual measurement entry',
              'Automatic CenteringCheck® on every spin',
              'Rim runout diagnostics detect bent or damaged rims',
              'TruWeight™ visual 3D display guides technician to correct weight spot',
              'ForceMatch® solutions based on rim profile data',
              'SmartWeight® technology — single-weight solution up to 60% of the time',
              'Touchscreen interface',
              'HunterNet® 2 integration: ROI tracking, weight savings reporting, on-board training videos',
            ],
          },
          {
            slug: 'hd-elite',
            name: 'HD Elite™',
            tagline: 'Heavy-duty Road Force® diagnostic balancing for trucks, buses, and commercial vehicles.',
            images: ['/products/hunter-engineering/hd-elite.jpg'],
            description: 'The HD Elite™ brings the full capability of Hunter\'s Road Force® diagnostic technology to heavy-duty applications. Purpose-built for truck, bus, and commercial vehicle service, it handles assemblies up to 500 lbs and 52 inches in diameter, with dual-assembly matching to extend tire life on drive axles.',
            specs: [
              { label: 'Max Assembly Weight', value: '500 lbs' },
              { label: 'Max Assembly Diameter', value: '52 inches' },
              { label: 'Applications', value: 'Cars, light trucks, heavy-duty vehicles, buses' },
              { label: 'Laser Classification', value: 'Class 2 (HammerHead® TDC: Class 1)' },
              { label: 'Calibration', value: 'Patented eCal auto-calibration' },
              { label: 'Warranty', value: '3-year parts / 6-month labor' },
            ],
            features: [
              'Road Force® diagnostic load roller for vibration problem identification',
              'Patented laser vision system automatically measures rim dimensions',
              'SmartWeight® technology for optimised weight placement',
              'Automatic CenteringCheck® reduces comebacks',
              'Dual assembly matching: aligns high spots 180° apart, matches tire diameters',
              'Built-in wheel lift mechanism',
              'Touchscreen with 3D graphics',
              'Optional HammerHead® TDC laser guidance accessory',
            ],
          },
        ],
      },
      {
        slug: 'tire-changers',
        name: 'Tire Changers',
        description: 'From fully automatic touchless systems to hydraulic centre-clamp machines, Hunter\'s tire changers protect wheels while dramatically reducing service time.',
        models: [
          {
            slug: 'revolution',
            name: 'Revolution™',
            tagline: 'Fully automatic, award-winning tire changer — 2-minute average service time for all tire types.',
            images: ['/products/hunter-engineering/revolution.jpg'],
            description: 'The Revolution™ is Hunter\'s flagship tire changer and the most award-winning tire machine in the industry. Its fully automatic operation eliminates the 13 decisions a technician would normally make, handling run-flats and difficult tires in the same time as standard tires. WalkAway™ mode saves approximately 25% time on four-tire sets by allowing autonomous operation while the technician preps the next wheel.',
            specs: [
              { label: 'Average Service Time', value: '2 minutes (all tire types)' },
              { label: 'WalkAway Time Savings', value: '~25% on four-tire sets' },
              { label: 'Language Support', value: 'Switchable between any 2 of 28 languages' },
              { label: 'Decisions Eliminated', value: '13 fewer than manual changers' },
              { label: 'Warranty', value: '3-year parts / 6-month labor' },
              { label: 'Origin', value: 'Designed & built in the USA' },
            ],
            features: [
              'Fully automatic leverless demount — patented bead-catching hook',
              'WalkAway™ semi-autonomous mode for multi-task efficiency',
              'Powered press arms auto-adjust to rim diameter',
              'TPMS monitoring and automatic sensor avoidance',
              'Wheel lift protects technician\'s back',
              'Polymer tools — scratch-free on all rim types',
              '"Walk Me Through It" animated guidance with 13 unique animations',
              '24 on-board instructional videos',
              'Integrated dashcam for before/after damage documentation',
              'Status indicator light (green autonomous / red needs attention)',
              'HunterNet® 2 connectivity for individual tire change result logging',
            ],
          },
          {
            slug: 'maverick',
            name: 'Maverick®',
            tagline: 'USA-built centre-clamp tire changer with fully variable hydraulic control.',
            images: ['/products/hunter-engineering/maverick.jpg'],
            description: 'The Maverick® gives technicians complete authority over the tire changing process through fully variable hydraulic joystick controls. Three model variants — TCM, TCMW, and TCMPRO — cover everything from basic service to high-end wheels with the TCMPRO\'s ergonomic wheel lift and lighted lower roller.',
            specs: [
              { label: 'Speed Range', value: '0 – 17 RPM, fully variable (forward & reverse)' },
              { label: 'Wheel Lift Capacity', value: 'Up to 175 lbs (TCMPRO model)' },
              { label: 'Inflation Speed', value: '33% faster than standard systems' },
              { label: 'Models', value: 'TCM, TCMW, TCMPRO' },
              { label: 'Clamping', value: 'Centre-clamp, RollerLock™ ball-bearing threads' },
              { label: 'Warranty', value: '3-year parts / 6-month labor' },
              { label: 'Origin', value: 'Designed & built in the USA' },
            ],
            features: [
              'Proportional joystick controls — fine or fast on demand',
              'SmartSet® leverless toolhead with deployment hook',
              'RollerLock™ clamp system for secure wheel holding',
              'InflationStation™ — automatic hands-free inflation, 33% faster',
              'Blast inflation option for difficult bead seating',
              'Bead press arm with joystick control',
              'Underside mirror for precise positioning visibility',
              'Safety logic homes all rollers, head, and wheel lift automatically',
              'Compatible with Road Force® Elite for match-mounting procedures',
              'Optional flange plate kit for plastic/reverse wheels',
            ],
          },
        ],
      },
      {
        slug: 'adas-calibration',
        name: 'ADAS Calibration',
        description: 'Hunter\'s ADAS calibration systems combine wheel alignment with static calibration of forward cameras, radars, surround view, and lane departure systems — dramatically faster than traditional methods.',
        models: [
          {
            slug: 'ultimate-adas',
            name: 'Ultimate ADAS®',
            tagline: 'Combined wheel alignment + full static ADAS calibration in a single mobile system.',
            images: ['/products/hunter-engineering/ultimate-adas.jpg'],
            description: 'The Ultimate ADAS® is Hunter\'s most advanced system — combining award-winning WinAlign® wheel alignment with comprehensive static ADAS calibration in a single, mobile unit. Patent-pending laser-guided target placement eliminates manual measuring tools, with gimbal-mounted cameras and time-of-flight lasers automatically compensating for uneven floors. Forward-facing camera calibrations complete in under 4 minutes versus 25 minutes with traditional methods.',
            specs: [
              { label: 'Forward Camera Calibration', value: 'Under 4 minutes (vs. 25 min traditional)' },
              { label: 'Forward Radar Calibration', value: 'Under 3.5 minutes (vs. 25 min traditional)' },
              { label: 'Surround View Calibration', value: 'Under 3.5 minutes (vs. 20 min traditional)' },
              { label: 'Advanced Surround View', value: 'Under 5 minutes (vs. 50 min traditional)' },
              { label: 'Target Placement', value: 'Laser-guided — no manual measuring tools' },
              { label: 'OEM Approvals', value: 'Honda, Acura, Nissan, Infiniti, Subaru, Toyota, Lexus, Kia, Mazda, Mitsubishi' },
              { label: 'Alignment Software', value: 'WinAlign® with QuickGrip® 4-camera system' },
              { label: 'Warranty', value: '3-year parts / 6-month labor' },
            ],
            features: [
              'Laser-guided target placement — lasers paint target location all around vehicle',
              'Gimbal-mounted cameras with time-of-flight lasers for automatic floor compensation',
              'Supports forward cameras & radars, surround view, lane departure warning, blind spot, rear corner radar',
              'Mobile configuration — battery backup for bay-to-bay movement',
              'Independent braking system for precise positioning',
              'Integrated target storage protects investment',
              'Generates before/after documentation with exact X, Y, Z coordinates',
              'HunterNet® 2 digital archiving and reporting',
              '750+ Hunter field representatives for on-site support and training',
            ],
          },
          {
            slug: 'adaslink',
            name: 'ADASLink®',
            tagline: 'Dynamic ADAS calibrations and OEM vehicle scanning directly from the alignment console.',
            images: ['/products/hunter-engineering/adaslink.jpg'],
            description: 'ADASLink® integrates with the HawkEye Elite® alignment system to perform dynamic ADAS calibrations, secure gateway vehicle access, and pre/post alignment scanning — all from within WinAlign® software. No separate calibration bay needed for dynamic calibrations.',
            specs: [
              { label: 'Integration', value: 'Works within WinAlign® / HawkEye Elite®' },
              { label: 'Calibration Type', value: 'Dynamic ADAS calibrations' },
              { label: 'Vehicle Access', value: 'Secure gateway with AutoAuth® for OEM systems' },
              { label: 'Scanning', value: 'Pre- and post-alignment vehicle scanning' },
            ],
            features: [
              'Dynamic ADAS calibrations triggered from alignment console',
              'Secure gateway access via AutoAuth® for select OEM manufacturers',
              'Pre- and post-alignment vehicle scanning',
              'Steering system resets following alignment',
              'No separate calibration area required for dynamic procedures',
            ],
          },
        ],
      },
      {
        slug: 'quick-check-drive',
        name: 'Quick Check Drive® Inspection',
        description: 'Drive-through inspection systems that automatically capture tread depth, tire inflation, brake condition, and alignment angles as the vehicle enters the bay — before the customer even gets out.',
        models: [
          {
            slug: 'quick-check-drive',
            name: 'Quick Check Drive®',
            tagline: 'Automated multi-point inspection as the car drives in — results before the customer reaches the service desk.',
            images: ['/products/hunter-engineering/quick-check-drive.jpg'],
            description: 'Quick Check Drive® automatically measures tread depth, tire inflation pressure, and brake rotor condition as the vehicle drives across the sensor array. Combined with Quick Check® alignment, the system delivers a complete vehicle health report in seconds — giving service advisors the data needed to recommend additional services with confidence.',
            specs: [
              { label: 'Tread Depth Measurement', value: 'Automatic laser measurement, all four tires' },
              { label: 'Inflation Measurement', value: 'Automatic, all four tires' },
              { label: 'Brake Inspection', value: 'Rotor condition captured during drive-over' },
              { label: 'Report Generation', value: 'Automatic — available at service desk in seconds' },
              { label: 'Integration', value: 'Works with Quick Check® alignment system' },
            ],
            features: [
              'Zero additional technician time — fully automatic drive-over measurement',
              'Captures tread depth, pressure, and brake rotor condition simultaneously',
              'Colour-coded results report for clear customer communication',
              'Integrates with Quick Check® alignment for complete vehicle report',
              'HunterNet® 2 data storage and reporting',
              'Increases service recommendation acceptance with objective data',
            ],
          },
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // ROTARY LIFT — Vehicle Lifts
  // ─────────────────────────────────────────────────────────────
  {
    brandSlug: 'rotary-lift',
    categorySlug: 'vehicle-lifts',
    brandName: 'Rotary Lift',
    logoPlaceholder: '/logos/brands/rotary-lift.jpg',
    productLines: [
      {
        slug: 'two-post-lifts',
        name: 'Two-Post Lifts',
        description: 'Rotary\'s asymmetric and symmetric two-post lifts are the gold standard in professional vehicle service — engineered for maximum overhead clearance, fast cycle times, and long-term reliability.',
        models: [
          {
            slug: 'spoa10',
            name: 'SPOA10',
            tagline: 'Asymmetric two-post lift — 10,000 lb capacity for everyday passenger car and light truck service.',
            description: 'The SPOA10 is Rotary\'s most popular asymmetric two-post lift. Designed to position the vehicle\'s center of gravity closer to the column, the asymmetric arm configuration maximizes door clearance while the vehicle is raised. The SPOA10 features Rotary\'s patented Direct-Drive lifting system, single-piece columns, and a self-lubricating UHMW polymer carriage liner that eliminates maintenance.',
            specs: [
              { label: 'Capacity', value: '10,000 lbs (4,536 kg)' },
              { label: 'Rise Height', value: '71.75 inches (1,822 mm)' },
              { label: 'Minimum Height', value: '48.5 inches (1,232 mm)' },
              { label: 'Column Height', value: '144 inches (3,658 mm)' },
              { label: 'Drive-Through Width', value: '132 inches (3,353 mm) between columns' },
              { label: 'Arm Reach (Short)', value: '28 – 43.5 inches' },
              { label: 'Arm Reach (Long)', value: '38.5 – 61.5 inches' },
              { label: 'Power Unit', value: '208-240V / 1Ph / 60Hz' },
              { label: 'Certification', value: 'ALI/ETL Listed' },
              { label: 'Origin', value: 'Designed & manufactured in the USA' },
            ],
            features: [
              'Asymmetric arm configuration — maximizes door opening while vehicle is raised',
              'Patented Direct-Drive lifting system — no external power unit cabinet',
              'Single-piece welded steel columns for rigidity',
              'Self-lubricating UHMW carriage liner — no maintenance required',
              'Dual-position front arm restraints for precise vehicle positioning',
              'Automatic arm restraints prevent arm rotation under load',
              'Overhead shut-off bar stops lift in case of obstruction',
              'Gravity lowering eliminates need for separate lowering valve',
              'Available in clear floor and base plate versions',
              'ALI/ETL Listed to ANSI/ALI ALCTV safety standard',
            ],
          },
          {
            slug: 'spoa7',
            name: 'SPOA7',
            tagline: 'Compact 7,000 lb asymmetric lift ideal for smaller bays and passenger car service.',
            description: 'The SPOA7 delivers the same quality and engineering as Rotary\'s flagship lifts in a more compact package, making it ideal for tight workshop bays or dedicated passenger car service. It shares the same patented Direct-Drive system and single-piece column construction as the larger SPOA10.',
            specs: [
              { label: 'Capacity', value: '7,000 lbs (3,175 kg)' },
              { label: 'Rise Height', value: '71.75 inches (1,822 mm)' },
              { label: 'Column Height', value: '138 inches (3,505 mm)' },
              { label: 'Drive-Through Width', value: '126 inches (3,200 mm)' },
              { label: 'Power Unit', value: '110-120V / 1Ph / 60Hz' },
              { label: 'Certification', value: 'ALI/ETL Listed' },
            ],
            features: [
              'Compact footprint — ideal for space-constrained bays',
              'Same Direct-Drive technology as larger SPOA10',
              'Asymmetric arm design for maximum door clearance',
              'Single-piece column construction',
              'ALI/ETL Listed',
            ],
          },
        ],
      },
      {
        slug: 'four-post-lifts',
        name: 'Four-Post Lifts',
        description: 'Rotary four-post lifts provide stable, drive-on service for alignment, oil changes, and storage — with optional rolling bridge jacks for tyre service.',
        models: [
          {
            slug: 'fp9',
            name: 'FP9',
            tagline: '9,000 lb four-post drive-on lift for alignment, maintenance, and vehicle storage.',
            description: 'The FP9 is Rotary\'s mid-range four-post lift, providing a stable, level platform for wheel alignment, routine maintenance, and vehicle storage. Four-point synchronised lifting ensures the vehicle remains level throughout the entire rise. Optional rolling bridge jacks allow tyre and brake service without a separate lift.',
            specs: [
              { label: 'Capacity', value: '9,000 lbs (4,082 kg)' },
              { label: 'Rise Height', value: '69 inches (1,753 mm)' },
              { label: 'Overall Width', value: '105 inches (2,667 mm)' },
              { label: 'Runway Length', value: '173 inches (4,394 mm)' },
              { label: 'Drive-On Width (between runways)', value: '45.5 inches (1,156 mm)' },
              { label: 'Power Unit', value: '208-240V / 1Ph / 60Hz' },
              { label: 'Certification', value: 'ALI/ETL Listed' },
            ],
            features: [
              'Four-point synchronised lifting system',
              'Optional rolling bridge jacks for tyre and brake service',
              'Integrated alignment turn plates and slip plates available',
              'Drive-on design — no arm configuration required',
              'Drip trays available for clean service areas',
              'ALI/ETL Listed',
            ],
          },
          {
            slug: 'fp15',
            name: 'FP15',
            tagline: 'Heavy-duty 15,000 lb four-post lift for larger vehicles and commercial service.',
            description: 'The FP15 handles heavier SUVs, trucks, and commercial vehicles that exceed the capacity of standard four-post lifts. Its reinforced runway design and heavy-duty cross tubes maintain stability at maximum capacity, while the wider stance accommodates dually and wide-track vehicles.',
            specs: [
              { label: 'Capacity', value: '15,000 lbs (6,804 kg)' },
              { label: 'Rise Height', value: '72 inches (1,829 mm)' },
              { label: 'Overall Width', value: '130 inches (3,302 mm)' },
              { label: 'Runway Length', value: '220 inches (5,588 mm)' },
              { label: 'Power Unit', value: '208-240V / 1Ph or 3Ph / 60Hz' },
              { label: 'Certification', value: 'ALI/ETL Listed' },
            ],
            features: [
              'Extended runway accommodates long-wheelbase vehicles',
              'Wider stance for dually and wide-track vehicles',
              'Heavy-duty cross tubes and reinforced runway',
              'Optional rolling bridge jacks rated for full vehicle weight',
              'Single-point release for simultaneous four-column lowering',
              'ALI/ETL Listed',
            ],
          },
        ],
      },
      {
        slug: 'mobile-column-lifts',
        name: 'Mobile Column Lifts',
        description: 'Wireless mobile column lifts for heavy commercial vehicles, trucks, and buses — portable, flexible, and expandable to suit any workshop layout.',
        models: [
          {
            slug: 'mlt12k',
            name: 'MLT 12K',
            tagline: 'Wireless mobile column lift — 12,000 lb per column for trucks, buses, and commercial vehicles.',
            description: 'The MLT 12K is a set of four wireless mobile column lifts that collectively support up to 48,000 lbs for heavy commercial vehicle service. The wireless synchronisation system coordinates all four columns simultaneously without cable connections, allowing flexible bay positioning and easy movement between vehicles. Integrated runways handle varying axle configurations.',
            specs: [
              { label: 'Capacity per Column', value: '12,000 lbs (5,443 kg)' },
              { label: 'Combined Capacity (4 columns)', value: '48,000 lbs (21,772 kg)' },
              { label: 'Rise Height', value: '70 inches (1,778 mm)' },
              { label: 'Synchronisation', value: 'Wireless — no cable connections' },
              { label: 'Power', value: 'Self-contained hydraulic power unit per column' },
              { label: 'Mobility', value: 'Built-in rolling casters for repositioning' },
              { label: 'Certification', value: 'ALI/ETL Listed' },
            ],
            features: [
              'Fully wireless synchronisation — position columns anywhere in the bay',
              'Each column is fully self-contained — no external power unit',
              'Adjustable forks accommodate varying axle heights',
              'Built-in casters for easy repositioning',
              'Expandable — add columns for longer vehicles',
              'Emergency lowering valve on every column',
              'ALI/ETL Listed',
            ],
          },
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // REAL — Vehicle Lifts
  // ─────────────────────────────────────────────────────────────
  {
    brandSlug: 'real',
    categorySlug: 'vehicle-lifts',
    brandName: 'Real (Rotary Engineering Asia Limited)',
    logoPlaceholder: '/logos/brands/real.png',
    productLines: [
      {
        slug: 'two-post-lifts',
        name: 'Two-Post Lifts',
        description: 'REAL two-post lifts deliver professional-grade lifting for passenger cars and light trucks, built with robust steel construction and safety-first design at competitive value.',
        models: [
          {
            slug: 'tl30',
            name: 'TL30',
            images: ['/products/real/two-post-lift.png'],
            tagline: 'Symmetric two-post lift — 3,000 kg capacity for passenger car service.',
            description: 'The TL30 is REAL\'s entry-level two-post symmetric lift, suitable for standard passenger car service. Built with heavy-gauge steel columns and a self-locking mechanical safety system, the TL30 provides reliable lifting for everyday workshop operations.',
            specs: [
              { label: 'Capacity', value: '3,000 kg (6,600 lbs)' },
              { label: 'Rise Height', value: '1,800 mm' },
              { label: 'Column Height', value: '3,700 mm' },
              { label: 'Min. Clearance Width', value: '2,700 mm' },
              { label: 'Motor Power', value: '2.2 kW / 380V / 3Ph' },
              { label: 'Safety', value: 'Mechanical self-locking safety system' },
              { label: 'Certification', value: 'CE Certified' },
            ],
            features: [
              'Heavy-gauge steel column construction',
              'Dual-synchronised hydraulic cylinders',
              'Mechanical self-locking safety locks at every position',
              'Adjustable arm extensions with rubber pads',
              'Overhead safety bar',
              'CE Certified to European safety standards',
            ],
          },
          {
            slug: 'tl40',
            name: 'TL40',
            tagline: 'Heavy-duty 4,000 kg two-post lift for SUVs, vans, and light commercial vehicles.',
            images: ['/products/real/two-post-lift.png'],
            description: 'The TL40 steps up to 4,000 kg capacity to handle larger vehicles including SUVs, minivans, and light commercial vehicles. Reinforced arm extensions and a higher-powered hydraulic system maintain the same safety and reliability as the TL30 in a higher-capacity package.',
            specs: [
              { label: 'Capacity', value: '4,000 kg (8,800 lbs)' },
              { label: 'Rise Height', value: '1,850 mm' },
              { label: 'Column Height', value: '3,800 mm' },
              { label: 'Min. Clearance Width', value: '2,900 mm' },
              { label: 'Motor Power', value: '3.0 kW / 380V / 3Ph' },
              { label: 'Safety', value: 'Dual mechanical safety locks per column' },
              { label: 'Certification', value: 'CE Certified' },
            ],
            features: [
              'Increased capacity for SUVs, vans, and light trucks',
              'Reinforced arm extensions with multiple support points',
              'Dual mechanical safety locks per column',
              'Synchronised lifting via hydraulic equaliser valve',
              'Adjustable top beam height for low-ceiling workshops',
              'CE Certified',
            ],
          },
        ],
      },
      {
        slug: 'four-post-lifts',
        name: 'Four-Post Lifts',
        description: 'REAL four-post lifts provide a stable drive-on platform for alignment, maintenance, and vehicle storage in professional workshop environments.',
        models: [
          {
            slug: 'fl40',
            name: 'FL40',
            tagline: 'Drive-on 4,000 kg four-post lift for alignment and general service.',
            images: ['/products/real/four-post-lift.png'],
            description: 'The FL40 is REAL\'s standard four-post alignment lift, offering a stable, level platform for wheel alignment procedures and general service work. The extended runway accommodates most passenger car and SUV wheelbases, and optional slip plates and turntables enable accurate alignment measurements.',
            specs: [
              { label: 'Capacity', value: '4,000 kg (8,800 lbs)' },
              { label: 'Rise Height', value: '1,800 mm' },
              { label: 'Runway Length', value: '4,500 mm' },
              { label: 'Overall Width', value: '2,750 mm' },
              { label: 'Drive-On Width', value: '700 mm per runway' },
              { label: 'Motor Power', value: '2.2 kW / 380V / 3Ph' },
              { label: 'Certification', value: 'CE Certified' },
            ],
            features: [
              'Drive-on design with extended runways',
              'Optional alignment slip plates and turntables',
              'Four-point synchronised lifting',
              'Integrated wheel stops for consistent vehicle positioning',
              'Safety locks at multiple height positions',
              'CE Certified',
            ],
          },
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // FINKBEINER — Vehicle Lifts
  // ─────────────────────────────────────────────────────────────
  {
    brandSlug: 'finkbeiner',
    categorySlug: 'vehicle-lifts',
    brandName: 'Finkbeiner',
    logoPlaceholder: '/logos/brands/finkbeiner.png',
    productLines: [
      {
        slug: 'heavy-duty-column-lifts',
        name: 'Heavy-Duty Column Lifts',
        description: 'German-engineered column lifts for buses, trucks, and heavy commercial vehicles — the benchmark for precision, safety, and long-term reliability in commercial vehicle workshops.',
        models: [
          {
            slug: 'mrk-series',
            name: 'MRK Column Lift System',
            tagline: 'Modular wireless column lift system for commercial vehicles up to 20,000 kg total.',
            description: 'The Finkbeiner MRK is a modular, wireless mobile column lift system designed for professional bus, truck, and heavy vehicle maintenance. Up to six columns can work in synchronised pairs, with fully wireless communication eliminating trip hazards and enabling flexible bay layout. The slip-on runner design allows under-axle service access throughout the full lift range.',
            specs: [
              { label: 'Capacity per Column', value: 'Up to 7,500 kg per column' },
              { label: 'System Capacity (4 col)', value: 'Up to 30,000 kg' },
              { label: 'Lift Height', value: '1,850 mm' },
              { label: 'Synchronisation', value: 'Wireless radio — ±10 mm tolerance' },
              { label: 'Drive Type', value: 'Electro-hydraulic, self-contained per column' },
              { label: 'Safety', value: 'Mechanical self-locking at every position, CE EN 1493' },
              { label: 'Mobility', value: 'Integrated swivel casters with parking brakes' },
              { label: 'Origin', value: 'Manufactured in Germany' },
            ],
            features: [
              'Fully wireless radio synchronisation — no cabling between columns',
              'Expandable: 4, 6, or 8 columns for longer vehicles',
              'Slip-on runner design provides unrestricted underbody access',
              'Electro-hydraulic power unit built into each column',
              'Master–slave control: one operator controls all columns',
              'Emergency manual lowering valve on every column',
              'Mechanical safety locks engage automatically at every height position',
              'Certified to CE EN 1493 vehicle lift safety standard',
              'Built and quality-controlled in Germany',
            ],
          },
        ],
      },
      {
        slug: 'wheel-free-systems',
        name: 'Wheel-Free Lifting Systems',
        description: 'Specialist wheel-free lifting platforms that support the vehicle by its chassis or axle, leaving all four wheels completely free for comprehensive brake, suspension, and wheel service.',
        models: [
          {
            slug: 'rwb-wheel-free',
            name: 'RWB Wheel-Free Lift',
            tagline: 'Chassis-supported lifting with full wheel-free access for brake and suspension inspection.',
            description: 'The Finkbeiner RWB wheel-free lift supports the vehicle under its chassis or body sills, leaving all four wheels hanging freely for complete brake inspection, suspension service, and wheel change. The low platform design suits standard workshop floors, and adjustable supports cover a wide range of vehicle types.',
            specs: [
              { label: 'Capacity', value: '3,500 kg (7,700 lbs)' },
              { label: 'Lift Height', value: '700 mm' },
              { label: 'Min. Vehicle Width', value: '1,200 mm' },
              { label: 'Max. Vehicle Width', value: '2,100 mm' },
              { label: 'Platform Length', value: '4,200 mm' },
              { label: 'Certification', value: 'CE EN 1493' },
              { label: 'Origin', value: 'Manufactured in Germany' },
            ],
            features: [
              'Full wheel-free access — all four wheels hang freely when raised',
              'Adjustable chassis support arms for various vehicle geometries',
              'Integrated wheel stands for safe tyre removal',
              'Low floor profile — fits standard workshop floors',
              'Suitable for passenger cars, SUVs, and light vans',
              'CE EN 1493 certified',
            ],
          },
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // HPA FAIP — Wheel Service (Tyre Inflation)
  // ─────────────────────────────────────────────────────────────
  {
    brandSlug: 'hpa-faip',
    categorySlug: 'wheel-service',
    brandName: 'HPA Faip',
    logoPlaceholder: '/logos/brands/hpa-faip.png',
    productLines: [
      {
        slug: 'digital-tyre-inflators',
        name: 'Digital Tyre Inflators',
        description: 'Professional digital tyre inflators with TPMS compatibility, preset inflation, and automatic stop — engineered for speed, accuracy, and daily professional use.',
        models: [
          {
            slug: 'igt-digital-plus',
            name: 'IG-T Digital Plus',
            tagline: 'Professional digital inflator with automatic preset inflation and TPMS compatibility.',
            description: 'The HPA Faip IG-T Digital Plus is a bench-mounted digital tyre inflator designed for professional workshops. The user enters a target pressure; the unit inflates or deflates automatically and stops precisely at the set value. The large backlit display shows real-time and target pressure simultaneously, and the unit works with all TPMS sensors without triggering false warnings.',
            specs: [
              { label: 'Pressure Range', value: '0 – 14 bar (0 – 200 PSI)' },
              { label: 'Accuracy', value: '±0.1 bar' },
              { label: 'Display', value: 'Backlit LCD — simultaneous actual/target display' },
              { label: 'Units', value: 'Bar / PSI / kPa selectable' },
              { label: 'Air Supply', value: '8–10 bar workshop compressed air' },
              { label: 'TPMS', value: 'Compatible — no sensor trigger' },
              { label: 'Mounting', value: 'Bench or wall mount' },
              { label: 'Origin', value: 'Made in Italy' },
            ],
            features: [
              'Automatic preset inflation: enter target pressure and walk away',
              'Simultaneous display of actual and target pressure',
              'Automatic stop — unit cuts air when target is reached',
              'Deflation function with automatic stop',
              'TPMS compatible — will not trigger sensor alerts',
              'Bar / PSI / kPa switchable units',
              'Rugged housing for workshop environments',
              'Ergonomic pistol-grip chuck for easy one-hand connection',
            ],
          },
          {
            slug: 'igt-tpms-pro',
            name: 'IG-T TPMS Pro',
            tagline: 'Advanced TPMS-integrated inflator with sensor read and reset capability.',
            description: 'The IG-T TPMS Pro combines professional digital inflation with TPMS sensor reading and reset capability. After inflation, the integrated TPMS tool communicates with all major sensor protocols (315 MHz and 433 MHz) to confirm sensor activation and status — eliminating a separate tool from the workflow.',
            specs: [
              { label: 'Pressure Range', value: '0 – 14 bar (0 – 200 PSI)' },
              { label: 'Accuracy', value: '±0.1 bar' },
              { label: 'TPMS Protocols', value: '315 MHz and 433 MHz OEM sensors' },
              { label: 'Vehicle Coverage', value: 'All major OEM TPMS systems' },
              { label: 'Display', value: 'Colour LCD with TPMS status indication' },
              { label: 'Air Supply', value: '8–10 bar workshop compressed air' },
              { label: 'Origin', value: 'Made in Italy' },
            ],
            features: [
              'Combined digital inflation + TPMS sensor read/reset in one unit',
              'Reads OEM TPMS sensor ID, pressure, temperature, and battery status',
              'Activates sensors post-service to confirm correct operation',
              'Automatic inflation to preset target',
              'Works with 315 MHz and 433 MHz protocols',
              'Colour LCD for clear TPMS status readout',
              'Software update via USB for new vehicle coverage',
            ],
          },
        ],
      },
      {
        slug: 'workshop-compressors',
        name: 'Workshop Compressors',
        description: 'Professional reciprocating and screw compressors for single-bay and multi-bay workshops — delivering clean, dry air at the flow rates professional tools demand.',
        models: [
          {
            slug: 'mtf-3-270',
            name: 'MTF 3/270',
            tagline: '3 HP direct-drive compressor — 270-litre tank for consistent workshop air supply.',
            description: 'The HPA Faip MTF 3/270 is a direct-drive vertical-tank compressor suited to small and medium workshops. The 270-litre receiver maintains steady pressure for simultaneous use of multiple air tools, and the cast-iron pump cylinder with oil-lubricated bearings ensures long service life in continuous-use environments.',
            specs: [
              { label: 'Motor Power', value: '3 HP (2.2 kW)' },
              { label: 'Tank Volume', value: '270 litres' },
              { label: 'Maximum Pressure', value: '11 bar' },
              { label: 'Free Air Delivery', value: '390 l/min' },
              { label: 'Drive Type', value: 'Direct drive — V-belt' },
              { label: 'Pump', value: 'Cast-iron 2-stage with oil lubrication' },
              { label: 'Voltage', value: '400V / 3Ph / 50Hz' },
              { label: 'Noise Level', value: '75 dB(A)' },
            ],
            features: [
              'Cast-iron 2-stage pump for long service life',
              'Large 270-litre receiver reduces start/stop cycling',
              'Automatic pressure switch with unloader valve',
              'Air/oil separator with auto-drain',
              'Safety valve, pressure gauge, and drain cock included',
              'Thermal overload protection on motor',
            ],
          },
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // MAHA HALDENWANG — Vehicle Inspection & Testing
  // ─────────────────────────────────────────────────────────────
  {
    brandSlug: 'maha-haldenwang',
    categorySlug: 'vehicle-inspection',
    brandName: 'Maha Haldenwang',
    logoPlaceholder: '/logos/brands/maha.png',
    productLines: [
      {
        slug: 'brake-testing',
        name: 'Brake Testing Systems',
        description: 'Certified roller brake testers for official roadworthiness inspection and professional workshop diagnostics — from single-axle passenger car testers to multi-axle heavy vehicle systems.',
        models: [
          {
            slug: 'mbt-2250',
            name: 'MBT 2250 EUROSYSTEM',
            tagline: 'Professional roller brake tester for passenger cars and light commercial vehicles up to 3,500 kg.',
            images: ['/products/maha-haldenwang/mbt-2250.jpg'],
            description: 'The Maha MBT 2250 EUROSYSTEM is a floor-mounted roller brake tester used in vehicle inspection lanes and professional workshops worldwide. The system measures individual wheel braking force independently, calculates braking force ratio and imbalance, and prints an official test certificate. Integrated wheel guides centre the vehicle automatically for repeatable, accurate results.',
            specs: [
              { label: 'Max. Axle Load', value: '3,500 kg per axle' },
              { label: 'Roller Diameter', value: '220 mm' },
              { label: 'Roller Length', value: '600 mm' },
              { label: 'Max. Roller Speed', value: '4.5 km/h' },
              { label: 'Force Measurement Range', value: '0 – 10 kN per wheel' },
              { label: 'Accuracy', value: '±1%' },
              { label: 'Drive Motor', value: '2 × 4 kW' },
              { label: 'Certification', value: 'OIML R 13, TÜV approved for roadworthiness testing' },
              { label: 'Origin', value: 'Manufactured in Germany' },
            ],
            features: [
              'Simultaneous left/right wheel braking force measurement',
              'Calculates braking force percentage and left/right imbalance',
              'Integrated wheel guides for automatic vehicle centring',
              'Slip detection with automatic roller stop',
              'Pedal force measurement sensor included',
              'Parking brake test function',
              'Prints official test certificate',
              'Network connection to inspection management software',
              'Certified to OIML R 13 and approved for official roadworthiness inspections',
            ],
          },
          {
            slug: 'mbt-7250',
            name: 'MBT 7250 EUROSYSTEM',
            images: ['/products/maha-haldenwang/mbt-2250.jpg'],
            tagline: 'Heavy-duty roller brake tester for trucks, buses, and commercial vehicles up to 18,000 kg per axle.',
            description: 'The Maha MBT 7250 EUROSYSTEM is designed for official roadworthiness testing of heavy vehicles including trucks, coaches, and buses. The larger roller diameter and extended roller length accommodate wide-base tyres and dual-wheel axles, while the high-torque drive motors deliver sufficient resistance to test fully loaded heavy vehicle brakes.',
            specs: [
              { label: 'Max. Axle Load', value: '18,000 kg per axle' },
              { label: 'Roller Diameter', value: '320 mm' },
              { label: 'Roller Length', value: '800 mm' },
              { label: 'Force Measurement Range', value: '0 – 40 kN per wheel' },
              { label: 'Drive Motor', value: '2 × 15 kW' },
              { label: 'Tyre Width Compatibility', value: 'Up to 510 mm — single and dual wheels' },
              { label: 'Certification', value: 'OIML R 13, TÜV approved' },
              { label: 'Origin', value: 'Manufactured in Germany' },
            ],
            features: [
              'Handles single and dual-wheel heavy axles up to 7,000 kg',
              'Extended roller length covers wide-base tyres',
              'High-torque drive motors for heavy vehicle braking resistance',
              'Automatic vehicle centring guides',
              'ABS function test and deactivation capability',
              'Retarder/engine brake test mode',
              'Real-time force curve display',
              'Certified to OIML R 13 for official inspection use',
            ],
          },
        ],
      },
      {
        slug: 'suspension-testing',
        name: 'Suspension & Shock Absorber Testers',
        description: 'Electronic resonance suspension testers that measure damper performance in under a minute — providing objective data for shock absorber replacement recommendations.',
        models: [
          {
            slug: 'iwt-4',
            name: 'IWT 4.0',
            tagline: 'Electronic resonance suspension tester — 45-second test, instant pass/fail result.',
            description: 'The Maha IWT 4.0 uses resonance testing to evaluate shock absorber and spring performance without needing to raise the vehicle. The platform vibrates the wheel assembly at its natural frequency; the decay rate of the oscillation is measured and compared to pass/fail thresholds. Test results are available in approximately 45 seconds per axle, making it ideal for quick pre-check or full inspection lane integration.',
            specs: [
              { label: 'Test Time', value: '~45 seconds per axle' },
              { label: 'Test Method', value: 'BOGE resonance / EUSAMA method' },
              { label: 'Max. Axle Load', value: '2,000 kg' },
              { label: 'Measurement', value: 'Adhesion weight percentage (%)' },
              { label: 'Pass Threshold', value: 'Configurable per market standard' },
              { label: 'Display', value: 'Touchscreen with graphical result output' },
              { label: 'Certification', value: 'Approved for roadworthiness testing in EU markets' },
              { label: 'Origin', value: 'Manufactured in Germany' },
            ],
            features: [
              'No vehicle lifting required — test from ground level',
              'BOGE resonance method with EUSAMA evaluation',
              'Left/right comparison of adhesion weight percentage',
              'Automatic start — vehicle drives onto platform, test begins automatically',
              'Historical data storage and trend analysis',
              'Network-connected to lane management software',
              'Configurable pass/fail thresholds for local regulations',
            ],
          },
        ],
      },
      {
        slug: 'emissions-testing',
        name: 'Emissions Analyzers',
        description: 'Certified exhaust emissions analysers for petrol, diesel, and hybrid vehicles — designed for both official inspection use and professional workshop diagnostics.',
        models: [
          {
            slug: 'mg5-hho',
            name: 'MGT 5 HHO',
            tagline: 'Certified 5-gas exhaust analyser for petrol and hybrid vehicles — wireless and tablet-based.',
            images: ['/products/maha-haldenwang/emissions.jpg'],
            description: 'The Maha MGT 5 HHO is a portable five-gas exhaust analyser measuring HC, CO, CO₂, O₂, and NOx, plus lambda calculation. The wireless Bluetooth connection to a tablet running Maha\'s intuitive inspection software eliminates probe cables in the workshop, and the integrated OBD II read-out confirms catalytic converter efficiency with live sensor data.',
            specs: [
              { label: 'Gases Measured', value: 'HC, CO, CO₂, O₂, NOx, Lambda (λ)' },
              { label: 'HC Range', value: '0 – 9,999 ppm vol' },
              { label: 'CO Range', value: '0 – 10.00 % vol' },
              { label: 'CO₂ Range', value: '0 – 20.00 % vol' },
              { label: 'O₂ Range', value: '0 – 25.00 % vol' },
              { label: 'NOx Range', value: '0 – 5,000 ppm vol' },
              { label: 'Connectivity', value: 'Bluetooth wireless to tablet' },
              { label: 'Certification', value: 'OIML R 99, PTB approved for inspection use' },
              { label: 'Origin', value: 'Manufactured in Germany' },
            ],
            features: [
              'Wireless Bluetooth connection — no cables in the workshop',
              'Five gases + lambda calculated simultaneously',
              'Integrated OBD II interface for catalytic converter monitoring',
              'Automatic zero calibration and leak test',
              'Heated sample line maintains accurate readings in cold weather',
              'Rechargeable battery — fully portable',
              'Certified to OIML R 99 for official emissions testing',
              'Software updates via Wi-Fi',
            ],
          },
          {
            slug: 'mdp-3000',
            name: 'MDP 3000',
            tagline: 'Opacity meter for diesel exhaust smoke measurement — certified for roadworthiness inspection.',
            images: ['/products/maha-haldenwang/emissions.jpg'],
            description: 'The Maha MDP 3000 measures free acceleration smoke opacity of diesel engines, providing a certified result for roadworthiness inspection and pre-check diagnostics. The partial-flow opacity method is fast and accurate, and the unit connects wirelessly to inspection management software for automated certificate generation.',
            specs: [
              { label: 'Measurement Method', value: 'Partial-flow opacity (free acceleration test)' },
              { label: 'Opacity Range', value: '0 – 100 % (0 – 9.99 m⁻¹)' },
              { label: 'Accuracy', value: '±0.5% absolute opacity' },
              { label: 'Warm-Up Time', value: '< 60 seconds' },
              { label: 'Connectivity', value: 'Wireless Bluetooth + USB' },
              { label: 'Certification', value: 'OIML R 24, TÜV approved' },
              { label: 'Origin', value: 'Manufactured in Germany' },
            ],
            features: [
              'Free acceleration test procedure per EU/UN ECE regulations',
              'Automatic vehicle identification via OBD II',
              'Wireless connection to inspection management software',
              'Automatic zero calibration before each test',
              'Calculates peak opacity and K-value',
              'Certified to OIML R 24 and TÜV approved',
            ],
          },
        ],
      },
      {
        slug: 'headlight-testing',
        name: 'Headlight Testers',
        description: 'Optical headlight alignment testers for professional inspection — verify headlight aim, intensity, and light pattern to regulatory standards.',
        models: [
          {
            slug: 'mlt-3000',
            name: 'MLT 3000 2.0',
            tagline: 'Motorised self-aligning headlight tester — automatic rail tracking for fast, repeatable results.',
            images: ['/products/maha-haldenwang/mlt-3000.jpg'],
            description: 'The Maha MLT 3000 2.0 is a motorised headlight tester that tracks along a precision rail, automatically positioning the optical head in front of each headlight. The self-aligning optics lock onto the headlight beam and measure aim angle (vertical and horizontal), intensity, and cut-off line characteristics. Results are transmitted wirelessly to the inspection management system for automatic certificate generation.',
            specs: [
              { label: 'Measurement', value: 'Aim angle (V/H), luminous intensity (lux), cut-off line' },
              { label: 'Vertical Adjustment Range', value: '−5% to +3%' },
              { label: 'Horizontal Adjustment Range', value: '±3%' },
              { label: 'Minimum Headlight Height', value: '400 mm' },
              { label: 'Maximum Headlight Height', value: '1,350 mm' },
              { label: 'Rail System', value: 'Self-propelled along floor-mounted precision rail' },
              { label: 'Connectivity', value: 'Wireless to inspection software' },
              { label: 'Certification', value: 'Approved for roadworthiness inspection use' },
              { label: 'Origin', value: 'Manufactured in Germany' },
            ],
            features: [
              'Motorised self-propulsion along precision floor rail',
              'Automatic optical alignment to headlight centre',
              'Measures dipped and main beam on same setting',
              'Checks LED, xenon (HID), and halogen headlights',
              'Wireless result transmission to inspection management software',
              'Stores historical data per vehicle registration',
              'Approved for official roadworthiness inspection',
            ],
          },
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // ECOTECHNICS — A/C Service
  // ─────────────────────────────────────────────────────────────
  {
    brandSlug: 'ecotechnics',
    categorySlug: 'ac-service',
    brandName: 'Ecotechnics Italy',
    logoPlaceholder: '/logos/brands/ecotechnics.png',
    productLines: [
      {
        slug: 'ac-service-machines',
        name: 'A/C Recovery, Recycling & Recharging Machines',
        description: 'Fully automatic A/C service stations for R134a and R1234yf refrigerants — compliant with European environmental regulations and designed for high-throughput professional workshops.',
        models: [
          {
            slug: 'evolution-v3',
            name: 'Evolution V3',
            tagline: 'Fully automatic R134a A/C service station with integrated database and printer.',
            images: ['/products/ecotechnics/ac-service-r134a.jpg'],
            description: 'The Ecotechnics Evolution V3 is a fully automatic recovery, recycling, and recharging (RRR) machine for R134a automotive air conditioning systems. A built-in OBD II vehicle database stores factory charge quantities and recharge procedures for thousands of vehicles, ensuring precise recharge amounts without manual lookup. The internal printer generates a service report after every cycle.',
            specs: [
              { label: 'Refrigerant Type', value: 'R134a' },
              { label: 'Recovery Rate', value: '≥ 95%' },
              { label: 'Refrigerant Tank Capacity', value: '12 kg internal tank' },
              { label: 'Oil Injection', value: 'Automatic — measured and injected' },
              { label: 'UV Dye Injection', value: 'Automatic — integrated UV dye cartridge' },
              { label: 'Vehicle Database', value: 'Built-in OBD II vehicle charge database' },
              { label: 'Vacuum Pump', value: '2-stage, 80 l/min' },
              { label: 'Vacuum Target', value: '≤ 0.5 mbar' },
              { label: 'Display', value: 'Colour touchscreen' },
              { label: 'Printer', value: 'Integrated thermal printer' },
              { label: 'Certification', value: 'CE — compliant with EU MAC Directive 2006/40/EC' },
              { label: 'Origin', value: 'Made in Italy' },
            ],
            features: [
              'Fully automatic cycle — recover, recycle, evacuate, and recharge with one start',
              'Built-in vehicle database with factory charge quantities for 15,000+ vehicles',
              'Automatic oil and UV dye injection — no manual handling',
              'Refrigerant purity check rejects contaminated refrigerant',
              'Internal 12 kg refrigerant tank — low refill frequency',
              'Nitrogen flushing system for leak testing at end of cycle',
              'Integrated thermal printer generates service report per vehicle',
              'USB export of service records',
              'Compliant with EU MAC Directive 2006/40/EC and F-Gas regulations',
            ],
          },
          {
            slug: 'performer-r1234yf',
            name: 'Performer R1234yf',
            tagline: 'Dual-refrigerant A/C service station for R1234yf and R134a with automatic identification.',
            images: ['/products/ecotechnics/ac-service-r1234yf.jpg'],
            description: 'The Ecotechnics Performer R1234yf handles both R1234yf (used in post-2017 vehicles) and R134a refrigerants, with automatic refrigerant identification preventing cross-contamination. Separate, dedicated hose circuits for each refrigerant type maintain purity, and the unit fully complies with the safety handling requirements for the mildly flammable R1234yf refrigerant.',
            specs: [
              { label: 'Refrigerant Types', value: 'R1234yf and R134a (dual, no cross-contamination)' },
              { label: 'Refrigerant Identification', value: 'Automatic — confirms type before service' },
              { label: 'Recovery Rate', value: '≥ 95%' },
              { label: 'R1234yf Tank', value: '8 kg internal tank' },
              { label: 'R134a Tank', value: '10 kg internal tank' },
              { label: 'Safety', value: 'Certified for flammable refrigerant handling (A2L class)' },
              { label: 'Display', value: 'Colour touchscreen with guided procedure' },
              { label: 'Certification', value: 'CE, SAE J2843, EN 14067' },
              { label: 'Origin', value: 'Made in Italy' },
            ],
            features: [
              'Dual refrigerant capability with automatic identification — prevents contamination',
              'Separate dedicated hose sets for each refrigerant',
              'Certified safe handling of R1234yf (A2L mildly flammable) refrigerant',
              'Compliant with SAE J2843 for R1234yf systems',
              'Built-in vehicle database for both R1234yf and R134a charge data',
              'Automatic oil and dye injection for both refrigerant types',
              'Guided colour touchscreen procedure',
              'Service reports via integrated printer',
            ],
          },
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // SAICOZERO — Body & Paint
  // ─────────────────────────────────────────────────────────────
  {
    brandSlug: 'saicozero',
    categorySlug: 'body-paint',
    brandName: 'SaicoZero Italy',
    logoPlaceholder: '/logos/brands/saicozero.png',
    productLines: [
      {
        slug: 'spray-booths',
        name: 'Automotive Spray Booths',
        description: 'Italian-engineered automotive spray booths delivering controlled temperature, airflow, and filtration for flawless paint results — meeting international environmental and safety standards.',
        models: [
          {
            slug: 'expert-series',
            name: 'Expert Series',
            tagline: 'Standard-cycle spray booth for professional body shops — consistent temperature and airflow control.',
            images: ['/products/saicozero/spray-booth.jpg'],
            description: 'The SaicoZero Expert Series is a full-downdraft spray booth designed for independent and professional body shops. The cross-flow ventilation system delivers uniform air distribution across the entire vehicle surface, eliminating dry spots and ensuring consistent film build. The direct-fired gas burner maintains cabin temperature from 5°C to 80°C for both paint and bake cycles.',
            specs: [
              { label: 'Booth Type', value: 'Full downdraft, cross-flow ventilation' },
              { label: 'Interior Dimensions', value: '6,000 × 3,500 × 2,500 mm (L × W × H)' },
              { label: 'Air Volume', value: '25,000 m³/h' },
              { label: 'Heating', value: 'Direct-fired gas burner' },
              { label: 'Temperature Range', value: '5°C to 80°C (spray and bake cycles)' },
              { label: 'Filter System', value: 'Ceiling polyester filter + floor cardboard filter' },
              { label: 'Lighting', value: '70 W/m² – colour rendering index Ra > 90' },
              { label: 'Certification', value: 'CE, compliant with ATEX zone requirements' },
              { label: 'Origin', value: 'Manufactured in Italy' },
            ],
            features: [
              'Full downdraft air circulation — uniform air distribution over vehicle',
              'Direct-fired gas burner for fast heat-up and efficient bake cycles',
              'High colour-rendering LED lighting (Ra > 90) for accurate colour matching',
              'Ceiling polyester + floor cardboard filter system — easy maintenance',
              'Electronic temperature and cycle time controller',
              'Emergency stop and safety interlock on doors',
              'Overspray recovery filter protects the burner',
              'CE certified with ATEX zone compliance',
            ],
          },
          {
            slug: 'champion-pro',
            name: 'Champion Pro',
            tagline: 'High-performance downdraft booth with infrared bake and automatic cycle management.',
            images: ['/products/saicozero/spray-booth.jpg'],
            description: 'The SaicoZero Champion Pro adds infrared bake technology to a full-downdraft spray booth, dramatically reducing bake cycle times compared to convection-only systems. The automatic cycle controller sequences paint, flash, and bake phases automatically based on pre-programmed profiles, reducing technician involvement and ensuring consistent results across every job.',
            specs: [
              { label: 'Booth Type', value: 'Full downdraft with infrared bake system' },
              { label: 'Interior Dimensions', value: '6,500 × 3,800 × 2,700 mm (L × W × H)' },
              { label: 'Infrared System', value: 'Short-wave IR panels, full vehicle coverage' },
              { label: 'Convection Heating', value: 'Direct-fired gas burner' },
              { label: 'Temperature Range', value: '5°C to 90°C' },
              { label: 'Bake Cycle Time Reduction', value: 'Up to 40% vs convection-only' },
              { label: 'Lighting', value: 'LED, Ra > 92, 80 W/m²' },
              { label: 'Controller', value: 'Programmable multi-phase cycle controller' },
              { label: 'Certification', value: 'CE, ATEX compliant' },
              { label: 'Origin', value: 'Manufactured in Italy' },
            ],
            features: [
              'Combined convection + short-wave infrared baking',
              'Up to 40% faster bake cycles than convection-only booths',
              'Programmable multi-phase controller: spray → flash → bake → cool-down',
              'Full vehicle infrared coverage — no shadowed areas',
              'High colour-rendering LED lighting (Ra > 92)',
              'Energy-saving recirculation mode during bake phase',
              'Touch-panel display with cycle monitoring and fault alerts',
              'Remote diagnostics capability via internet connection',
            ],
          },
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // DECA WELDING — Body & Paint
  // ─────────────────────────────────────────────────────────────
  {
    brandSlug: 'deca-welding',
    categorySlug: 'body-paint',
    brandName: 'Deca Welding',
    logoPlaceholder: '/logos/brands/deca.png',
    productLines: [
      {
        slug: 'mig-mag-welders',
        name: 'MIG/MAG Welders',
        description: 'Professional MIG/MAG welding machines for automotive body repair and industrial fabrication — from compact single-phase units to heavy-duty synergic inverter welders.',
        models: [
          {
            slug: 'titan-255e',
            name: 'TITAN 255E',
            tagline: 'Synergic MIG/MAG inverter welder — professional automotive body repair and panel work.',
            images: ['/products/deca-welding/mig-welder.png'],
            description: 'The Deca TITAN 255E is a professional synergic MIG/MAG inverter welder designed for automotive body shop and panel repair applications. The synergic control automatically sets the optimal wire speed and voltage relationship for the chosen material thickness and wire diameter, minimising setup time and ensuring quality welds on thin automotive steel and aluminium.',
            specs: [
              { label: 'Welding Process', value: 'MIG/MAG, MMA (electrode), Flux-core' },
              { label: 'Current Range (MIG)', value: '30 – 255 A' },
              { label: 'Duty Cycle (40°C)', value: '60% at 220 A' },
              { label: 'Input Voltage', value: '230V / 1Ph / 50Hz' },
              { label: 'Wire Diameter (Fe/SS)', value: '0.6 – 1.0 mm' },
              { label: 'Wire Diameter (Al)', value: '0.8 – 1.0 mm' },
              { label: 'Wire Spool', value: 'Up to 15 kg' },
              { label: 'Display', value: 'Digital with synergic programme selection' },
              { label: 'Certification', value: 'CE, EN 60974-1' },
              { label: 'Origin', value: 'Made in Italy' },
            ],
            features: [
              'Synergic control — single knob sets wire/voltage ratio for chosen material',
              'Programmes for steel, stainless steel, and aluminium',
              'MIG, MAG, MMA, and flux-core wire in one machine',
              'Soft-start and burnback control for clean weld starts and finishes',
              'Digital display with programme recall',
              'Inductance adjustment for fine-tuning arc characteristics',
              'Euro torch connector — compatible with all standard MIG guns',
              '4-roll wire drive for consistent wire feed',
              'Thermal protection with automatic restart',
              'CE certified to EN 60974-1',
            ],
          },
          {
            slug: 'titan-405t',
            name: 'TITAN 405T',
            tagline: 'Industrial 400 A three-phase MIG/MAG welder for heavy panel fabrication and structural work.',
            images: ['/products/deca-welding/mig-welder-heavy.png'],
            description: 'The Deca TITAN 405T steps up to full industrial three-phase power for heavy-gauge panel fabrication, chassis repair, and structural welding. The 4-roll wire drive handles hard and soft wires reliably at high feed speeds, and the water-cooled torch option enables continuous-duty operation without overheating.',
            specs: [
              { label: 'Welding Process', value: 'MIG/MAG, MMA, Flux-core' },
              { label: 'Current Range (MIG)', value: '40 – 400 A' },
              { label: 'Duty Cycle (40°C)', value: '60% at 350 A' },
              { label: 'Input Voltage', value: '400V / 3Ph / 50Hz' },
              { label: 'Wire Diameter (Fe/SS)', value: '0.6 – 1.6 mm' },
              { label: 'Wire Spool', value: 'Up to 18 kg' },
              { label: 'Wire Drive', value: '4-roll feed unit' },
              { label: 'Cooling Option', value: 'Water-cooled torch available' },
              { label: 'Certification', value: 'CE, EN 60974-1' },
              { label: 'Origin', value: 'Made in Italy' },
            ],
            features: [
              'Three-phase power for heavy industrial applications',
              '4-roll precision wire drive handles 0.6–1.6 mm wire',
              'Optional water-cooled torch for continuous duty welding',
              'Full synergic or manual parameter control',
              'Digital panel with memory for 10 welding programmes',
              'Dual shielding gas connections for two gas types',
              'CE certified to EN 60974-1',
            ],
          },
        ],
      },
      {
        slug: 'tig-welders',
        name: 'TIG Welders',
        description: 'Professional DC and AC/DC TIG welders for precision welding of aluminium, stainless steel, and exotic alloys in automotive and aerospace applications.',
        models: [
          {
            slug: 'tig-220-ac-dc',
            name: 'TIG 220 AC/DC',
            tagline: 'AC/DC TIG inverter welder — precision welding of aluminium and steel in automotive repair.',
            images: ['/products/deca-welding/tig-welder.png'],
            description: 'The Deca TIG 220 AC/DC provides both AC welding (for aluminium) and DC welding (for steel and stainless) in one compact inverter unit. The high-frequency arc start system prevents tungsten contamination on sensitive base metals, and the adjustable AC balance control allows tuning between cleaning action and penetration depth when welding aluminium.',
            specs: [
              { label: 'Welding Process', value: 'AC TIG, DC TIG, MMA (electrode)' },
              { label: 'Current Range (DC)', value: '5 – 220 A' },
              { label: 'Current Range (AC)', value: '10 – 200 A' },
              { label: 'Duty Cycle (40°C)', value: '60% at 180 A' },
              { label: 'HF Start', value: 'Yes — non-contact arc initiation' },
              { label: 'AC Frequency', value: '20 – 200 Hz adjustable' },
              { label: 'AC Balance', value: '20 – 80% adjustable' },
              { label: 'Input Voltage', value: '230V / 1Ph / 50Hz' },
              { label: 'Gas', value: 'Argon (Ar) or Argon/Helium mix' },
              { label: 'Certification', value: 'CE, EN 60974-1' },
              { label: 'Origin', value: 'Made in Italy' },
            ],
            features: [
              'AC mode for aluminium welding — adjustable balance and frequency',
              'DC mode for steel, stainless steel, copper, and titanium',
              'HF non-contact arc start — no tungsten contamination',
              'Adjustable AC frequency (20–200 Hz) for bead width control',
              'Up-slope and down-slope current control for clean starts and craters',
              '2T / 4T torch switch modes',
              'Pulse welding function for thin gauge materials',
              'MMA mode for coated electrode welding',
              'CE certified to EN 60974-1',
            ],
          },
        ],
      },
      {
        slug: 'spot-welders',
        name: 'Spot Welders',
        description: 'Professional resistance spot welders for automotive body panel replacement and repair — from single-phase portable units to three-phase static welders.',
        models: [
          {
            slug: 'star-14500',
            name: 'STAR 14500',
            tagline: 'Single-phase spot welder for automotive body panel replacement — 14,500 A peak current.',
            images: ['/products/deca-welding/spot-welder.png'],
            description: 'The Deca STAR 14500 is a professional spot welder designed specifically for automotive body panel replacement. The pneumatic arm applies consistent electrode pressure for repeatable weld quality, and the electronic timer controls current pulse duration to produce the correct nugget size for each panel thickness combination.',
            specs: [
              { label: 'Peak Welding Current', value: '14,500 A' },
              { label: 'Weld Timer', value: 'Electronic, 1 – 99 cycles adjustable' },
              { label: 'Arm Length', value: '500 mm' },
              { label: 'Throat Depth', value: '500 mm' },
              { label: 'Electrode Force', value: 'Up to 300 daN' },
              { label: 'Max. Panel Thickness', value: '3 × 0.8 mm (stacked panels)' },
              { label: 'Input Voltage', value: '230V / 1Ph / 50Hz' },
              { label: 'Certification', value: 'CE' },
              { label: 'Origin', value: 'Made in Italy' },
            ],
            features: [
              'Electronic weld timer for precise nugget size control',
              'Pneumatic electrode arm for consistent pressure',
              'Adjustable welding current — suited to HSS and mild steel panels',
              'Ergonomic pistol-grip arms for one-hand electrode positioning',
              'Standard and extended arm options for deep access',
              'Copper alloy electrodes — long service life',
              'Compatible with zinc-coated and galvanised body panels',
              'CE certified',
            ],
          },
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // WEDGECLAMP — Body & Paint
  // ─────────────────────────────────────────────────────────────
  {
    brandSlug: 'wedgeclamp',
    categorySlug: 'body-paint',
    brandName: 'Wedgeclamp',
    logoPlaceholder: '',
    productLines: [
      {
        slug: 'body-frame-straightening',
        name: 'Body & Frame Straightening Systems',
        description: 'Modular body and frame straightening benches with multi-directional pulling capability for accurate structural collision repair on all vehicle types.',
        models: [
          {
            slug: 'bench-mark-pro',
            name: 'Bench Mark Pro',
            tagline: 'Modular frame straightening bench with integrated measuring system and 10-tonne hydraulic tower.',
            description: 'The Wedgeclamp Bench Mark Pro is a floor-mounted frame straightening bench combining a rigid steel work surface, patented wedge clamping system, and an integrated electronic measuring system. The modular design accommodates all passenger vehicles, vans, and light trucks, and the 10-tonne hydraulic pulling tower can be repositioned to any angle around the vehicle for complex multi-directional repairs.',
            specs: [
              { label: 'Bench Dimensions', value: '5,500 × 1,800 mm (expandable)' },
              { label: 'Vehicle Capacity', value: 'Up to 3,500 kg' },
              { label: 'Hydraulic Tower Pull Force', value: '10 tonnes (100 kN)' },
              { label: 'Tower Positioning', value: '360° around vehicle — floor-anchored rail' },
              { label: 'Measuring System', value: 'Integrated electronic 3D measurement' },
              { label: 'Clamp System', value: 'Patented wedge clamps — 360° rotation, no pinch marks' },
              { label: 'Certification', value: 'CE, compliant with structural repair standards' },
            ],
            features: [
              'Patented wedge clamping — no pinch marks, 360° rotation on any pinch weld',
              'Quick-connect clamp system — vehicle secured in under 5 minutes',
              '10-tonne hydraulic pulling tower repositions to any angle',
              'Integrated electronic 3D measuring — compares to factory reference data',
              'Works with universal and vehicle-specific measuring jigging',
              'Modular extension sections for vans and longer vehicles',
              'Accessories for door, roof, and lower body pulling',
              'CE certified',
            ],
          },
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // CHIEF AUTOMOTIVE — Body & Paint
  // ─────────────────────────────────────────────────────────────
  {
    brandSlug: 'chief-usa',
    categorySlug: 'body-paint',
    brandName: 'Chief Automotive (USA)',
    logoPlaceholder: '/logos/brands/chief-usa.png',
    productLines: [
      {
        slug: 'frame-straightening',
        name: 'Frame Straightening Systems',
        description: 'Chief\'s Genesis and Goliath systems are the certified choice of OEM collision repair networks in North America — delivering the accuracy and repeatability demanded by manufacturer certification programs.',
        models: [
          {
            slug: 'genesis-2',
            name: 'Genesis 2 System',
            tagline: 'Chief\'s universal frame rack with EZ Liner rail system — the standard for OEM-certified collision repair.',
            description: 'The Chief Genesis 2 is a full-length frame rack built around Chief\'s patented EZ Liner Dedicated rail system. Quick-connect universal anchoring secures any vehicle configuration in minutes without dedicated jigs, and the universal pull hook set allows pulling from multiple points simultaneously. The Genesis 2 forms the platform for integration with Chief\'s Meridian measuring system for complete structural documentation.',
            specs: [
              { label: 'Rack Length', value: '6,100 mm (standard) / 7,600 mm (extended)' },
              { label: 'Width', value: '2,300 mm (adjustable)' },
              { label: 'Vehicle Capacity', value: 'Passenger cars, SUVs, and light trucks' },
              { label: 'Anchor System', value: 'EZ Liner Dedicated — four-point universal anchoring' },
              { label: 'Pull Tower', value: 'Up to 10 tonnes per tower' },
              { label: 'Tower Positions', value: 'Multiple — 360° around rack' },
              { label: 'Measuring Integration', value: 'Compatible with Chief Meridian system' },
              { label: 'OEM Certifications', value: 'I-CAR, multiple OEM network approvals' },
              { label: 'Origin', value: 'Manufactured in the USA' },
            ],
            features: [
              'EZ Liner Dedicated anchoring — secures any vehicle in under 10 minutes, no jigs',
              'Universal pull hook set for multiple simultaneous pull points',
              'Modular rail sections — extend rack for longer vehicles',
              'Integrates with Chief Meridian 3D measuring system',
              'I-CAR approved and endorsed by multiple OEM certification programs',
              'Hydraulic pull towers with extension chains and straps included',
              'Rack and pinch weld clamps included',
              'Designed and manufactured in the USA',
            ],
          },
        ],
      },
      {
        slug: 'measuring-systems',
        name: 'Measuring Systems',
        description: 'Chief Meridian electronic measuring systems provide precise 3D structural measurements referenced against an extensive database of OEM reference data — the evidential foundation of certified collision repair.',
        models: [
          {
            slug: 'meridian',
            name: 'Meridian Measuring System',
            tagline: 'Electronic 3D measuring system with 30,000+ vehicle reference database for certified structural repair documentation.',
            description: 'The Chief Meridian is a universal electronic measuring system using adjustable gauge arms and a built-in reference database to compare actual vehicle measurements with OEM specifications. The system produces a printed or digital measurement report showing every measurement point against factory tolerance — required documentation for I-CAR and OEM certification programs.',
            specs: [
              { label: 'Vehicle Database', value: '30,000+ vehicles (domestic and import)' },
              { label: 'Measurement Type', value: '3D — length, width, and height' },
              { label: 'Measurement Resolution', value: '±1 mm' },
              { label: 'Gauge Arms', value: 'Universal — adjustable for any vehicle' },
              { label: 'Display', value: 'Tablet-based with intuitive touchscreen UI' },
              { label: 'Reporting', value: 'Print or digital export — insurance-ready format' },
              { label: 'Software Updates', value: 'Automatic via internet connection' },
              { label: 'Origin', value: 'Manufactured in the USA' },
            ],
            features: [
              'Complete 3D measurement — length, width, and height in one setup',
              '30,000+ vehicle database with OEM-specified tolerances',
              'Universal gauge arms — fits any vehicle without jigs',
              'Before and after measurement reports for insurance documentation',
              'Tablet-based touchscreen interface — portable around the vehicle',
              'Automatic software and database updates',
              'Compatible with Chief Genesis and other frame rack systems',
              'Meets I-CAR and OEM certification documentation requirements',
            ],
          },
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // POLAR TOOLS — Handtools & Cleaning Equipment
  // ─────────────────────────────────────────────────────────────
  {
    brandSlug: 'polar-tools',
    categorySlug: 'hand-tools',
    brandName: 'Polar Hand Tools',
    logoPlaceholder: '/logos/brands/polar.jpg',
    productLines: [
      {
        slug: 'socket-sets',
        name: 'Socket & Wrench Sets',
        description: 'Professional-grade chrome vanadium socket and wrench sets, manufactured to DIN and ANSI standards for use in demanding automotive workshop environments.',
        models: [
          {
            slug: 'pro-set-216',
            name: 'Professional 216-Piece Set',
            tagline: 'Comprehensive workshop socket and wrench set — 216 pieces covering all common automotive fastener sizes.',
            description: 'The Polar Professional 216-Piece Set is a complete workshop toolkit covering metric and imperial sockets, combination wrenches, hex keys, screwdrivers, pliers, and specialty tools. All sockets are manufactured from chrome vanadium steel with a mirror-polished chrome finish for corrosion resistance, and the blow-moulded carry case keeps every piece organised and secure.',
            specs: [
              { label: 'Total Pieces', value: '216' },
              { label: 'Drive Sizes', value: '1/4", 3/8", 1/2"' },
              { label: 'Socket Range (Metric)', value: '4 – 32 mm' },
              { label: 'Socket Range (Imperial)', value: '3/16" – 1-1/4"' },
              { label: 'Wrench Range', value: '7 – 24 mm combination wrenches' },
              { label: 'Material', value: 'Chrome vanadium steel (Cr-V)' },
              { label: 'Finish', value: 'Mirror polished chrome' },
              { label: 'Storage', value: 'Blow-moulded carry case with moulded insert' },
              { label: 'Certification', value: 'DIN ISO 1711, ISO 1174, ISO 3315' },
            ],
            features: [
              'Chrome vanadium steel — higher strength than chrome molybdenum alternatives',
              'Mirror chrome finish — corrosion resistant and easy to clean',
              'Deep and standard socket variants included',
              'Combination wrenches in both metric and imperial',
              'Flex-head ratchet handles for restricted-access fasteners',
              '6-point socket design — maximum contact, reduced rounding',
              'Blow-moulded case with individual moulded storage for every piece',
              'Certified to DIN/ISO standards',
            ],
          },
          {
            slug: 'torque-wrench-set',
            name: 'Digital Torque Wrench 1/2"',
            tagline: 'Digital torque wrench with pre-set alarm — 40 to 200 Nm for critical automotive fasteners.',
            description: 'Polar\'s digital 1/2" drive torque wrench provides precise torque measurement with an audible and visual alarm at the preset torque value. The digital display shows real-time applied torque throughout the tightening action, and memory recall stores the last 100 torque readings for quality control records.',
            specs: [
              { label: 'Drive Size', value: '1/2"' },
              { label: 'Torque Range', value: '40 – 200 Nm' },
              { label: 'Accuracy', value: '±2% of reading (CW), ±3% (CCW)' },
              { label: 'Resolution', value: '0.1 Nm' },
              { label: 'Units', value: 'Nm / ft-lb / in-lb selectable' },
              { label: 'Memory', value: '100 reading recall' },
              { label: 'Display', value: 'Backlit LCD with peak mode' },
              { label: 'Alarm', value: 'Audible buzz + LED flash at preset value' },
              { label: 'Certification', value: 'ISO 6789-1:2017 Type II, Class A' },
            ],
            features: [
              'Digital display with real-time torque reading throughout tightening',
              'Preset alarm: audible buzz + LED flash when target torque reached',
              'Peak mode holds maximum torque reading after release',
              'Track mode shows real-time torque as it is applied',
              'Stores last 100 readings for quality control documentation',
              'Nm / ft-lb / in-lb switchable units',
              'Quick-release mechanism for easy socket change',
              'Certified to ISO 6789-1:2017 Type II, Class A',
            ],
          },
        ],
      },
      {
        slug: 'tool-storage',
        name: 'Tool Storage Solutions',
        description: 'Professional workshop tool cabinets, roller cabinets, and tool trolleys providing organised, secure storage for complete tool inventories.',
        models: [
          {
            slug: 'roller-cabinet-7',
            name: 'Pro Roller Cabinet 7-Drawer',
            tagline: '7-drawer workshop roller cabinet — full-extension ball-bearing drawers and 300 kg capacity.',
            description: 'The Polar Pro Roller Cabinet is a heavy-duty workshop storage unit with seven full-extension ball-bearing drawers in varying depths to organise tools of every size. The steel body is powder-coated for durability, and the lockable top drawer with key lock secures valuable tools. Heavy-duty 125 mm castors with brakes allow easy repositioning and safe stationary locking.',
            specs: [
              { label: 'Overall Dimensions', value: '762 × 458 × 1,010 mm (W × D × H)' },
              { label: 'Drawer Configuration', value: '7 drawers (varying depths: 75–200 mm)' },
              { label: 'Drawer Slides', value: 'Full-extension ball-bearing, rated 50 kg each' },
              { label: 'Total Weight Capacity', value: '300 kg' },
              { label: 'Body Material', value: '1.5 mm cold-rolled steel, powder-coat finish' },
              { label: 'Castors', value: '4 × 125 mm — 2 locking, 2 swivel' },
              { label: 'Security', value: 'Central key lock — all drawers lock simultaneously' },
              { label: 'Work Surface', value: 'Replaceable rubber mat top' },
            ],
            features: [
              'Full-extension ball-bearing drawer slides — access contents at back without removing items',
              'Seven drawers in varying depths for logical tool organisation',
              'Central lock secures all drawers simultaneously with one key',
              '125 mm castors — rolls easily on workshop floors, locks securely in place',
              'Powder-coated steel body resists oil, fuel, and workshop chemicals',
              'Replaceable rubber work mat on top',
              'Compatible with Polar side cabinet and tool chest combination',
              'Anti-tilt mechanism prevents multiple drawers opening simultaneously',
            ],
          },
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // ROMESS — Handtools & Cleaning Equipment
  // ─────────────────────────────────────────────────────────────
  {
    brandSlug: 'romess',
    categorySlug: 'hand-tools',
    brandName: 'Romess Tools',
    logoPlaceholder: '/logos/brands/romess.jpg',
    productLines: [
      {
        slug: 'torque-wrenches',
        name: 'Precision Torque Wrenches',
        description: 'German-precision torque wrenches for critical automotive fasteners — manufactured and calibrated to DIN EN ISO 6789 with traceable calibration certificates.',
        models: [
          {
            slug: 'drw-1-4',
            name: 'DRW 1/4" Click Torque Wrench',
            tagline: 'Precision click-type torque wrench for sensitive fasteners — 5 to 25 Nm.',
            description: 'The Romess DRW 1/4" is a precision ratcheting click-type torque wrench for low-torque applications including sensors, electrical connectors, and interior fasteners. The click mechanism releases with a clear tactile signal and click sound at the preset torque, and the split-beam deflecting bar mechanism maintains accuracy after thousands of cycles without recalibration.',
            specs: [
              { label: 'Drive Size', value: '1/4"' },
              { label: 'Torque Range', value: '5 – 25 Nm' },
              { label: 'Scale Divisions', value: '0.5 Nm' },
              { label: 'Accuracy', value: '±3% of setting (CW per ISO 6789)' },
              { label: 'Mechanism', value: 'Split-beam deflecting bar (click type)' },
              { label: 'Scale', value: 'Dual scale — Nm and ft-lb' },
              { label: 'Ratchet', value: '72-tooth — 5° ratcheting arc' },
              { label: 'Calibration', value: 'DIN EN ISO 6789:2017 — traceable certificate supplied' },
              { label: 'Origin', value: 'Manufactured in Germany' },
            ],
            features: [
              'Split-beam mechanism maintains accuracy after thousands of uses',
              'Clear click signal — audible and tactile at preset torque',
              'Left-hand thread capability via reverse direction',
              'Dual scale Nm / ft-lb for universal use',
              'Quick-release button for rapid socket changes',
              '72-tooth fine ratchet for restricted-access work',
              'Storage case with calibration certificate included',
              'Certified to DIN EN ISO 6789:2017 with traceable calibration',
            ],
          },
          {
            slug: 'drw-1-2',
            name: 'DRW 1/2" Click Torque Wrench',
            tagline: 'Professional 1/2" click torque wrench — 40 to 200 Nm for wheel nuts and critical chassis fasteners.',
            description: 'The Romess DRW 1/2" is a professional click-type torque wrench for wheel nut tightening, brake calliper bolts, and critical chassis fasteners. The robust deflecting bar mechanism is factory-set and locked, requiring no adjustment — the user simply sets the target torque on the calibrated scale and tightens until the click.',
            specs: [
              { label: 'Drive Size', value: '1/2"' },
              { label: 'Torque Range', value: '40 – 200 Nm' },
              { label: 'Scale Divisions', value: '2 Nm' },
              { label: 'Accuracy', value: '±3% of setting (CW per ISO 6789)' },
              { label: 'Mechanism', value: 'Deflecting bar, click type' },
              { label: 'Reversible Ratchet', value: '72-tooth' },
              { label: 'Length', value: '460 mm' },
              { label: 'Calibration', value: 'DIN EN ISO 6789:2017 — traceable certificate supplied' },
              { label: 'Origin', value: 'Manufactured in Germany' },
            ],
            features: [
              'Precise deflecting bar mechanism — long-term accuracy retention',
              'Audible and tactile click at preset torque',
              '72-tooth reversible ratchet for left-hand thread fasteners',
              'Robust knurled handle for secure grip in workshop conditions',
              'Torque lock ring prevents accidental setting change during use',
              'Calibration certificate traceable to national standards supplied',
              'Storage case included',
              'Certified to DIN EN ISO 6789:2017',
            ],
          },
        ],
      },
      {
        slug: 'specialty-tools',
        name: 'Specialty Automotive Tools',
        description: 'Precision specialty tools for critical automotive service procedures — suspension, steering, drivetrain, and engine work requiring tools beyond standard sockets and wrenches.',
        models: [
          {
            slug: 'suspension-tool-set',
            name: 'Suspension & Steering Tool Set',
            tagline: 'Professional 32-piece suspension and steering removal/installation set for passenger cars and light trucks.',
            description: 'The Romess Suspension & Steering Tool Set provides the specialist tools required for ball joint, tie rod end, control arm bushing, and wheel bearing service on passenger cars and light trucks. The hydraulic press tools generate controlled force without hammer damage, protecting precision steering components.',
            specs: [
              { label: 'Total Pieces', value: '32' },
              { label: 'Applications', value: 'Ball joints, tie rod ends, bushings, wheel bearings' },
              { label: 'Vehicle Coverage', value: 'Passenger cars and light trucks (most makes)' },
              { label: 'Press Force', value: 'Hydraulic — up to 10 tonnes (tool-dependent)' },
              { label: 'Material', value: 'Forged steel — heat treated' },
              { label: 'Storage', value: 'Metal carry case with foam insert' },
              { label: 'Certification', value: 'DIN standards compliant' },
              { label: 'Origin', value: 'Manufactured in Germany' },
            ],
            features: [
              'Hydraulic press adaptors for controlled removal force',
              'Ball joint extractor with protective receiver cap',
              'Tie rod end separator — preserves threads and taper seats',
              'Bushing driver set with multiple bore sizes',
              'Wheel bearing removal and installation adaptors',
              'All adaptors interchangeable with common hydraulic workshop press',
              'Forged and heat-treated steel for long service life',
              'Colour-coded sizing for fast identification',
              'Metal carry case with foam cutouts',
            ],
          },
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // KÄRCHER — Handtools & Cleaning Equipment
  // ─────────────────────────────────────────────────────────────
  {
    brandSlug: 'karcher',
    categorySlug: 'hand-tools',
    brandName: 'Kärcher',
    logoPlaceholder: '/logos/brands/karcher.png',
    productLines: [
      {
        slug: 'cold-water-washers',
        name: 'Cold Water High-Pressure Washers',
        description: 'Professional HD and HDS cold water high-pressure washers — from workshop vehicle washing to heavy engine degreasing, engineered for continuous professional use.',
        models: [
          {
            slug: 'hd-5-15-cx',
            name: 'HD 5/15 CX',
            tagline: 'Compact professional cold water washer — 150 bar / 500 l/h for workshop and vehicle washing.',
            description: 'The Kärcher HD 5/15 CX is an entry-level professional cold water high-pressure washer ideal for workshop vehicle washing and general surface cleaning. The induction motor runs quietly and without carbon brush wear, delivering long service intervals suited to daily professional use. The integrated hose reel keeps the workplace tidy, and the professional quick-connect lance system allows rapid nozzle swapping without tools.',
            specs: [
              { label: 'Pressure', value: '150 bar (max)' },
              { label: 'Flow Rate', value: '500 l/h (max)' },
              { label: 'Motor', value: '2.6 kW induction motor' },
              { label: 'Voltage', value: '230V / 1Ph / 50Hz' },
              { label: 'Hose Length', value: '10 m (integrated reel)' },
              { label: 'Pump', value: 'Triplex ceramic piston pump' },
              { label: 'Weight', value: '22 kg' },
              { label: 'IP Rating', value: 'IPX5' },
              { label: 'Origin', value: 'Designed by Kärcher, Germany' },
            ],
            features: [
              'Induction motor — no carbon brushes, long service life, quiet operation',
              'Triplex ceramic piston pump for durability and consistent pressure',
              'Integrated hose reel keeps workspace tidy',
              'Professional quick-connect lance system — change nozzles without tools',
              'Downstream detergent injection for foam washing',
              'High-pressure rotary nozzle and flat-jet nozzle included',
              'Wobble-free on uneven workshop floors — 4 rugged wheels',
              'IPX5 water protection rating',
            ],
          },
          {
            slug: 'hd-9-23',
            name: 'HD 9/23 G',
            tagline: 'Heavy-duty professional cold water washer — 230 bar / 900 l/h for intensive workshop degreasing.',
            description: 'The Kärcher HD 9/23 G is a heavy-duty professional cold water washer built for demanding workshop applications including engine degreasing, underbody washing, and industrial surface cleaning. The stainless-steel pump head and brass inlet manifold resist aggressive cleaning chemicals, and the 900 l/h flow rate and 230 bar pressure deliver the force needed to cut through heavy oil and grease deposits.',
            specs: [
              { label: 'Pressure', value: '230 bar (max)' },
              { label: 'Flow Rate', value: '900 l/h (max)' },
              { label: 'Motor Power', value: '5.5 kW' },
              { label: 'Voltage', value: '400V / 3Ph / 50Hz' },
              { label: 'Hose Length', value: '15 m' },
              { label: 'Pump Head', value: 'Stainless steel with brass inlet manifold' },
              { label: 'Weight', value: '62 kg' },
              { label: 'Frame', value: 'Steel tube frame with powder-coat finish' },
            ],
            features: [
              'Stainless steel pump head and brass manifold — resists chemicals',
              '900 l/h flow rate for rapid cleaning of large surfaces',
              'Downstream and high-pressure detergent injection options',
              'Auto-stop motor cuts off when trigger released — energy saving',
              'Three-phase motor for continuous professional-duty operation',
              'Professional easy-lock hose couplings throughout',
              'Adjustable pressure control (60–230 bar)',
              'Compatible with all Kärcher professional accessories',
            ],
          },
        ],
      },
      {
        slug: 'hot-water-washers',
        name: 'Hot Water High-Pressure Washers',
        description: 'HDS series hot water pressure washers — steam-capable, with built-in heating for maximum cleaning performance on heavy oil, grease, and bitumen deposits.',
        models: [
          {
            slug: 'hds-9-18-4m',
            name: 'HDS 9/18-4 M',
            tagline: 'Professional hot water pressure washer — 180 bar, up to 155°C steam for maximum degreasing performance.',
            description: 'The Kärcher HDS 9/18-4 M is a professional hot water high-pressure washer with an integrated diesel-fired heating system that brings outlet temperature to 155°C in steam mode. Hot water dramatically improves cleaning of heavy oils, greases, fuels, and bituminous deposits compared to cold water at the same pressure — reducing chemical consumption and total cleaning time.',
            specs: [
              { label: 'Working Pressure', value: '30 – 180 bar (adjustable)' },
              { label: 'Flow Rate', value: '900 l/h (max)' },
              { label: 'Outlet Temperature (water)', value: 'Up to 98°C' },
              { label: 'Outlet Temperature (steam)', value: 'Up to 155°C' },
              { label: 'Heating Fuel', value: 'Diesel or heating oil' },
              { label: 'Boiler Heating Output', value: '46 kW' },
              { label: 'Motor Power', value: '5.5 kW / 400V / 3Ph / 50Hz' },
              { label: 'Weight', value: '170 kg' },
              { label: 'Protection', value: 'Automatic descaling and frost protection' },
            ],
            features: [
              'Cold water, hot water (98°C), and steam (155°C) in one machine',
              'Built-in diesel-fired boiler — independent of workshop hot water supply',
              'Adjustable pressure 30–180 bar for delicate to heavy-duty applications',
              'Eco!efficiency mode reduces fuel consumption and noise in steam mode',
              'Automatic descaling system protects boiler from limescale buildup',
              'Integrated frost protection drains unit automatically when not in use',
              'Servo-controlled pressure — consistent delivery under varying load',
              'Compatible with foam nozzle, rotary nozzle, and surface cleaner accessories',
            ],
          },
        ],
      },
      {
        slug: 'vacuum-cleaners',
        name: 'Wet & Dry Vacuum Cleaners',
        description: 'Professional workshop wet and dry vacuum cleaners for fluid spills, dust, debris, and vehicle interior cleaning — from compact portable units to large-capacity workshop vacuums.',
        models: [
          {
            slug: 'wd-6-p-premium',
            name: 'WD 6 P Premium',
            tagline: 'Professional 30-litre wet and dry workshop vacuum — Class L dust certified.',
            description: 'The Kärcher WD 6 P Premium is a 30-litre professional wet and dry vacuum cleaner designed for automotive workshops. The large-capacity 30-litre stainless steel container handles both liquid spills and dry debris, and the semi-automatic filter cleaning system maintains suction power without stopping work. The Class L dust certification (EN 60335-2-69) makes it suitable for collecting construction and automotive dust.',
            specs: [
              { label: 'Container Volume', value: '30 litres (stainless steel)' },
              { label: 'Motor Power', value: '1,300 W' },
              { label: 'Airflow', value: '62 l/s' },
              { label: 'Suction Power (wet)', value: '230 mbar' },
              { label: 'Hose Length', value: '3 m' },
              { label: 'Hose Diameter', value: '35 mm' },
              { label: 'Filter Class', value: 'Class L (EN 60335-2-69)' },
              { label: 'Power Tool Socket', value: 'Auto-start socket (230V / 2,400 W max)' },
              { label: 'Weight', value: '8.2 kg' },
            ],
            features: [
              '30-litre stainless steel container — handles large spills and debris loads',
              'Semi-automatic filter cleaning — tap the container to restore suction without stopping',
              'Class L dust certified (EN 60335-2-69) for fine dust collection',
              'Auto-start power tool socket — vacuum starts automatically when power tool runs',
              'Foldable handle and compact footprint for easy storage',
              'Accessory kit: crevice nozzle, floor brush, wet nozzle included',
              'Bayonet filter lock for quick filter change',
            ],
          },
        ],
      },
    ],
  },
]

export function getBrandProductData(
  categorySlug: string,
  brandSlug: string
): BrandProductData | undefined {
  return brandProducts.find(
    (b) => b.categorySlug === categorySlug && b.brandSlug === brandSlug
  )
}

export function getProductLine(
  categorySlug: string,
  brandSlug: string,
  lineSlug: string
): ProductLine | undefined {
  return getBrandProductData(categorySlug, brandSlug)?.productLines.find(
    (l) => l.slug === lineSlug
  )
}

export function getProductModel(
  categorySlug: string,
  brandSlug: string,
  modelSlug: string
): { model: ProductModel; line: ProductLine; brand: BrandProductData } | undefined {
  const brand = getBrandProductData(categorySlug, brandSlug)
  if (!brand) return undefined
  for (const line of brand.productLines) {
    const model = line.models.find((m) => m.slug === modelSlug)
    if (model) return { model, line, brand }
  }
  return undefined
}
