import './styles.css'

export enum ButtonVariant {
  START = 'start',
  STOP = 'stop',
  RESET = 'reset'
}

export type ButtonProps = {
  disabled: boolean
  onClick: () => void
  variant: ButtonVariant
}

export function Button({
  onClick,
  variant,
  disabled = false
}: ButtonProps) {

  return <button
    disabled={disabled}
    onClick={onClick}
    className={`${variant} button`}
  >
    {variant.toUpperCase()}
  </button>
}
