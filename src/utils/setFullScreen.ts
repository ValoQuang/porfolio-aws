export const fullScreenHandler =() => {
  const element = document.getElementById("lofi-video");
  console.log(element);
  if (element) {
    if (element?.requestFullscreen) {
      element.requestFullscreen();
    } else {
      console.error("Element with id 'full-screen' not found");
    }
  }
};
