import {  useState } from 'react'
import './App.css'
import { Button, ButtonVariant } from './components/Button'

const INTERVAL = 1000 // one second
const ONE_SECOND = 60
const TIMER_PERIOD = ONE_SECOND * 5 // five minutes in seconds

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
    }, INTERVAL);

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
        <Button onClick={startTimer} variant={ButtonVariant.START}/>
        <Button onClick={stopTimer} variant={ButtonVariant.STOP}/>
        <Button onClick={resetTimer} variant={ButtonVariant.RESET}/>
      </div>
    </div>
  )
}

export default App
