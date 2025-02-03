import {  useState } from 'react'
import './App.css'
import { Button, ButtonVariant } from './components/Button'
import { TimerDisplay } from './components/Timer'
import { INTERVAL, TIMER_PERIOD } from './constants/timer.constants'

function App() {
  const [timer, setTimer] = useState(TIMER_PERIOD)
  const [intervalRef, setIntervalRef] = useState<number | null>(null)

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


  return (
    <div className="app-container">
      <TimerDisplay timer={timer}/>
      <div className="buttons-container">
        <Button onClick={startTimer} variant={ButtonVariant.START}/>
        <Button onClick={stopTimer} variant={ButtonVariant.STOP}/>
        <Button onClick={resetTimer} variant={ButtonVariant.RESET}/>
      </div>
    </div>
  )
}

export default App
