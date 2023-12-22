export function getCoordinate() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
    });
  } else {
    console.error("Geolocation is not supported by this browser.");
  }
}
export function getTrackDuration(meta: {
  duration: number;
  currentTime: number;
}) {
  const { duration, currentTime } = meta;

  // Format a given number of seconds into MM:SS format
  const formatTime = (time: number): string => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time - minutes * 60);
    return `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  const totalTime = formatTime(duration);
  const totalStreamingTime = formatTime(currentTime);

  return {
    totalTime,
    totalStreamingTime,
  };
}
