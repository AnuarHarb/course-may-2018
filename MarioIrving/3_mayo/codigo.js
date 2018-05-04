window.onload = function() {
  var button = document.getElementById("animateButton");
  button.onclick = goProgress;
}

function goProgress() {
  var progressBars = document.getElementsByClassName("progress");
  for (var i = 0; i < progressBars.length; i++) {
    progressBars[i].interval = setInterval(increaseVal, 50, progressBars[i]);
  }
};

function increaseVal(progressBar) {
  if (progressBar.value < 100) {
    progressBar.value = progressBar.value + 1;
  } else {
    progressBar.value = 0;
    clearInterval(progressBar.interval);
  }
}
