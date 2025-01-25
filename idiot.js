document.addEventListener("DOMContentLoaded", function () {
  const xIcon = document.getElementById("x_icon");
  const idiotWn = document.getElementById("idiot-wn");
  window.addEventListener("beforeunload", (event) => {
    event.preventDefault();
    window.open("file:///Users/dr_z_i_m_m/code.visualstudio.com/YouAreAnIdiot.htm")
  });
  function addEventListeners(element) {
    element.addEventListener("mouseover", () => {
      document.body.style.cursor = "pointer";
    });

    element.addEventListener("mouseout", () => {
      document.body.style.cursor = "default";
    });

    element.addEventListener("click", () => {
      console.log("idiot");
      const idiot = document.getElementById("idiot");
      const clone = idiotWn.cloneNode(true);
      document.body.appendChild(clone);
      const clonedIcon = clone.querySelector("#x_icon");
      addEventListeners(clonedIcon);
      idiot.play();
    });
  }

  addEventListeners(xIcon);
});
