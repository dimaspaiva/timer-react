import { ONE_SECOND } from "../../constants/timer.constants"
import { formatTimer } from "../../utils/timer.utils"

import './styles.css'

export type TimerDisplayProps = {
  timer: number
}

export function TimerDisplay({timer}: TimerDisplayProps) {
  const seconds = timer % ONE_SECOND
  const minutes = Math.floor(timer / ONE_SECOND)
  const formattedMinutes = formatTimer(minutes)
  const formattedSeconds = formatTimer(seconds)

  return (
    <div className="timer-container">
      <h1 className="timer">{formattedMinutes}:{formattedSeconds}</h1>
    </div>
  )
}
