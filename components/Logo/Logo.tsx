import '@emdgroup-liquid/liquid/dist/css/ld-typo.css'

interface LogoProps {
  className?: string
  to?: string
  slot?: string
  variant?: HTMLLdTypoElement['variant']
}

const Logo: React.FC<LogoProps> = (props) => {
  return (
    <div
      role="banner"
      className={`ld-typo ld-typo--${props.variant || 'b5'} ${props.className || ''}`}
      slot={props.slot}
      style={{ lineHeight: '0.66' }}
    >
      <a
        onClick={(ev) => {
          ev.preventDefault()
        }}
        className="contents cursor-pointer"
      >
        <abbr className="text-vc" aria-label="Uxer Experience, Stragegy and Design">
          UXSD
        </abbr>{' '}
        <span aria-label="To-Do" className="text-vy whitespace-nowrap" dangerouslySetInnerHTML={{ __html: 'TO&hairsp;DO'}} />
      </a>
    </div>
  )
}

export default Logo
