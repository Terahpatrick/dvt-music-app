export function getMinutesDuration(duration: number) {
  const [minutes, seconds] = (duration / 60).toString().split(".");
  const time = seconds
    ? `${minutes}:${seconds.substring(0, 2)}`
    : `${minutes}:00`;

  return time;
}

export function readableNumbers(x: number) {
  return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
}
