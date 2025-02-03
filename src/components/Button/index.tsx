import './styles.css'

export enum ButtonVariant {
  START = 'start',
  STOP = 'stop',
  RESET = 'reset'
}

export type ButtonProps = {
  onClick: () => void
  variant: ButtonVariant
}

export function Button({onClick, variant}: ButtonProps) {
  return <button
    onClick={onClick}
    className={`${variant} button`}
  >
    {variant.toUpperCase()}
  </button>
}
