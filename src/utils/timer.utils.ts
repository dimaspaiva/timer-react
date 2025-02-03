export function formatTimer(time: number): string {
  return time.toString().padStart(2, '0')
}
