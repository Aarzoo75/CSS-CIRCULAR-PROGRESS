const controller = document.querySelector("input[type=range]");
const radialProgress = document.querySelector(".RadialProgress");

const setProgress = (progress) => {
  const value = `${progress}%`;
  radialProgress.style.setProperty("--progress", value);
  radialProgress.innerHTML = value;
  radialProgress.setAttribute("aria-valuenow", value);
};

setProgress(controller.value);
controller.oninput = () => {
  setProgress(controller.value);
};
