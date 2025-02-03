import {  useState } from 'react'
import './App.css'

const ONE_SECOND = 60
const TIMER_PERIOD = ONE_SECOND * 5 // 5 minutes in seconds

function App() {
  const [timer, setTimer] = useState(TIMER_PERIOD)
  const [intervalRef, setIntervalRef] = useState<number | null>(null)

  const seconds = timer % ONE_SECOND
  const minutes = Math.floor(timer / ONE_SECOND)

  function startTimer() {
    if (intervalRef) return
    const newIntervalRef = setInterval(() => {
      setTimer((actualTimer) => {
        const draftTimer = actualTimer - 1
        return draftTimer
      })
    }, 1000);
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
    <h1>{formattedMinutes}:{formattedSeconds}</h1>
    <div style={{ padding: '1rem', fontSize: '2rem'}} onClick={startTimer}>START</div>
    <div style={{ padding: '1rem', fontSize: '2rem'}} onClick={stopTimer}>STOP</div>
    <div style={{ padding: '1rem', fontSize: '2rem'}} onClick={resetTimer}>RESET</div>
   </div>
  )
}

export default App
