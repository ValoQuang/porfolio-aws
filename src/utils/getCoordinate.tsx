export function getCoordinate() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
        });
      } else {
        console.error("Geolocation is not supported by this browser.");
      }
}