// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", () => {
  // Replace this selector with the one for the target image
  const targetImage = document.querySelector("img");

  if (targetImage) {
    targetImage.src = chrome.runtime.getURL("prank-image.png");
  }
});
