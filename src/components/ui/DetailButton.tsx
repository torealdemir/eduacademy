interface DetailButtonProps {
  href?: string
  onClick?: () => void
  className?: string
  size?: 'sm' | 'md'
}

export default function DetailButton({ href = '#', onClick, className = '', size = 'md' }: DetailButtonProps) {
  const isSmall = size === 'sm'

  const buttonContent = (
    <>
      {/* Dark circle with arrow */}
      <div className={`${isSmall ? 'w-8 h-8' : 'w-10 h-10 lg:w-12 lg:h-12'} bg-dark rounded-full flex items-center justify-center ${isSmall ? 'mr-2' : 'mr-3'}`}>
        <svg width={isSmall ? "14" : "18"} height={isSmall ? "14" : "18"} viewBox="0 0 20 20" fill="none" className="text-lime">
          <path d="M4 10h12M12 6l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      <span className={`text-dark font-medium ${isSmall ? 'text-sm' : ''}`}>Detayları gör</span>
    </>
  )

  const baseClasses = `inline-flex items-center bg-lime rounded-full font-medium hover:bg-lime/90 transition-colors ${isSmall ? 'p-1 pr-4' : 'p-1.5 pr-6'} ${className}`

  if (onClick) {
    return (
      <button onClick={onClick} className={baseClasses}>
        {buttonContent}
      </button>
    )
  }

  return (
    <a href={href} className={baseClasses}>
      {buttonContent}
    </a>
  )
}
