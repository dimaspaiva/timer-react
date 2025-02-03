import {  useState } from 'react'
import './App.css'

const ONE_SECOND = 5
const TIMER_PERIOD = ONE_SECOND * 1 // 5 minutes in seconds

function App() {
  const [timer, setTimer] = useState(TIMER_PERIOD)
  const [intervalRef, setIntervalRef] = useState<number | null>(null)

  const seconds = timer % ONE_SECOND
  const minutes = Math.floor(timer / ONE_SECOND)

  function handleEndOfTime(actualTimer: number, timerId: number) {
    if (actualTimer > 0) {
      return actualTimer
    }

    clearInterval(timerId)
    setIntervalRef(null)

    return 0
  }

  function startTimer() {
    if (intervalRef) return
    const newIntervalRef = setInterval(() => {
      setTimer((actualTimer) => {
        const draftTimer = actualTimer - 1

        return handleEndOfTime(draftTimer, newIntervalRef)
      })
    }, ONE_SECOND);

    setIntervalRef(newIntervalRef)
  }

  function stopTimer() {
    if (!intervalRef) return

    clearInterval(intervalRef)
    setIntervalRef(null)
  }

  function resetTimer() {
    if (intervalRef) return

    setTimer(TIMER_PERIOD)
  }

  function formatTimer (time: number): string {
    return time.toString().padStart(2, '0')
  }

  const formattedMinutes = formatTimer(minutes)
  const formattedSeconds = formatTimer(seconds)

  return (
   <div className="app-container">
    <div className="timer-container">
      <h1 className="timer">{formattedMinutes}:{formattedSeconds}</h1>
    </div>
    <div className="buttons-container">
      <div className="start button" onClick={startTimer}>START</div>
      <div className="stop button" onClick={stopTimer}>STOP</div>
      <div className="reset button" onClick={resetTimer}>RESET</div>
    </div>
   </div>
  )
}

export default App
