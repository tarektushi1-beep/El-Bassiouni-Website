// src/components/ui/SectionTitle.tsx

interface SectionTitleProps {
  title: string
  subtitle?: string
  centered?: boolean
  light?: boolean
}

export default function SectionTitle({
  title,
  subtitle,
  centered = false,
  light = false,
}: SectionTitleProps) {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      <h2
        className={`font-aspire text-3xl md:text-4xl uppercase tracking-wider mb-3 ${
          light ? 'text-white' : 'text-eb-black'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-base md:text-lg max-w-2xl ${
            centered ? 'mx-auto' : ''
          } ${light ? 'text-gray-300' : 'text-gray-600'}`}
        >
          {subtitle}
        </p>
      )}
      <div
        className={`mt-4 h-1 w-16 bg-eb-red ${centered ? 'mx-auto' : ''}`}
      />
    </div>
  )
}
