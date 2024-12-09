const observer = new MutationObserver(() => {
  // Replace this selector with the one for the target image
  const targetImage = document.querySelector("img#logo");

  if (targetImage) {
    targetImage.src = "https://www.openelearning.org/free-openclipart-elearning/clipart-database/www_Sticker_Tk/www_Sticker_Tk_kiss_my_ass.svg";
    targetImage.style = "background-color: white;";
    observer.disconnect();
  }
});

observer.observe(document.body, { childList: true, subtree: true });
