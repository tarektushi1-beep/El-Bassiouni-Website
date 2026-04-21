// src/data/services.ts

export interface Service {
  id: string
  title: string
  icon: string
  description: string
  details: string[]
}

export const services: Service[] = [
  {
    id: 'after-sales',
    title: 'After-Sales Support & Spare Parts',
    icon: '🔧',
    description:
      'We stock genuine spare parts for all brands we represent and provide rapid technical support to keep your equipment running at peak performance.',
    details: [
      'Genuine manufacturer spare parts',
      'Fast parts availability from local stock',
      'Remote and on-site technical support',
      'Equipment diagnostics and troubleshooting',
    ],
  },
  {
    id: 'installation',
    title: 'Equipment Installation & Commissioning',
    icon: '⚙️',
    description:
      'Our certified technicians handle full installation and commissioning of all equipment, ensuring everything is set up correctly and calibrated from day one.',
    details: [
      'Site survey and preparation guidance',
      'Professional installation by certified technicians',
      'Factory-standard commissioning and calibration',
      'Operator handover and basic training',
    ],
  },
  {
    id: 'maintenance',
    title: 'Maintenance Contracts',
    icon: '📋',
    description:
      'Protect your investment with a planned maintenance contract. We offer flexible annual and multi-year contracts tailored to your workshop size and equipment portfolio.',
    details: [
      'Scheduled preventive maintenance visits',
      'Priority response for breakdowns',
      'Discounted parts pricing',
      'Equipment performance reports',
    ],
  },
  {
    id: 'training',
    title: 'Training for Technicians',
    icon: '🎓',
    description:
      'Get the most from your equipment with professional training programs delivered by our certified trainers, at your premises or at our training facility.',
    details: [
      'Equipment operation and safety training',
      'Advanced diagnostic and calibration training',
      'Hunter Engineering certified programs',
      'Certificate of completion issued',
    ],
  },
  {
    id: 'calibration',
    title: 'Calibration & Inspection Services',
    icon: '📐',
    description:
      'Keep your workshop equipment certified and accurate with our professional calibration services, compliant with Egyptian and international standards.',
    details: [
      'Periodic calibration of measuring equipment',
      'Compliance with ILAC/ISO standards',
      'Calibration certificates issued',
      'Wheel alignment and brake tester calibration',
    ],
  },
  {
    id: 'inspection-lane',
    title: 'Inspection Lane Operation',
    icon: '🏁',
    description:
      'We design, supply, install, and operate complete vehicle inspection lane systems for government and private inspection centers across Egypt.',
    details: [
      'Full inspection lane design and layout',
      'Supply and installation of all testing equipment',
      'Staff training for inspection procedures',
      'Ongoing technical management and support',
      'Compliance with Egyptian traffic regulations',
    ],
  },
]
