(function() {
  'use strict';
  document.getElementById("enlace").addEventListener("mouseover", porencima);
  document.getElementById("enlace").addEventListener("mouseout", alquitar);

  function porencima(numbercontrol) {
      document.getElementById("enlace").style.color = "orange";
  }

  function alquitar(numbercontrol) {
      document.getElementById("enlace").style.color = "white";
  }



  })();
