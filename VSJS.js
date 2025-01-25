document.addEventListener("DOMContentLoaded", () => {
  num_kangers = 1;
  const search = document.getElementById("bar");
  const MGS = document.getElementById("MGS");
  const button2 = document.getElementById("downer");
  const downer = document.getElementById("button1");
  const WhatTheHeck = document.getElementById("WhatTheHeckIsGoingOn");
  const freeCopilot = document.getElementById("free-copilot");
  const AUUGHHH = document.getElementById("AUUGHHH");
  const blog = document.getElementById("blog");
  const extensions = document.getElementById("extensions");
  const github = document.getElementById("github");
  const docs = document.getElementById("docs");
  const fart = document.getElementById("fart");
  const faq = document.getElementById("faq");
  const api = document.getElementById("api");
  const updates = document.getElementById("updates");
  blog.style.bottom = "96px";

  search.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      const searchValue = search.value;
      if (searchValue.trim() !== "") {
        if (searchValue === "skibidi toilet") {
          WhatTheHeck.play();
        }

        if (searchValue === "skibitea") {
          const tea = document.createElement("img");
          tea.src = "skibitea.jpg";
          tea.style.position = "relative";
          tea.style.top = "-1800px";
          tea.style.left = "1030px";
          document.body.appendChild(tea);
        } else {
          YouAreL = "https://letmegooglethat.com/?q=" + searchValue;
          window.open(YouAreL);
        }
      }
    }
  });

  docs.addEventListener("click", () => {
    fart.play();
  });

  blog.addEventListener("mouseover", () => {
    if (blog.style.bottom === "96px") {
      blog.style.bottom = "54px";
    } else {
      blog.style.bottom = "96px";
    }
  });

  button2.addEventListener("click", () => {
    const SkibiTi = document.createElement("video");
    SkibiTi.src = "SkibiTi.mp4";
    SkibiTi.style.width = "100vw";
    SkibiTi.className = "margin-center";
    SkibiTi.style.position = "fixed";
    SkibiTi.style.top = "1px";
    SkibiTi.style.zIndex = "1002";
    document.body.appendChild(SkibiTi);
    SkibiTi.play();
    setTimeout(() => {
      SkibiTi.remove();
    }, 66000);
  });
  faq.addEventListener("click", () => {
    const rickRoll = document.createElement("video");
    rickRoll.src = "RickRoll.mp4";
    rickRoll.style.transform = "rotate(270deg)";
    rickRoll.style.position = "fixed";
    rickRoll.style.width = "100vh";
    console.log(window.innerHeight);
    rickRoll.style.top = "-110px";
    rickRoll.style.left = "21vw";
    rickRoll.style.zIndex = "1002";
    document.body.appendChild(rickRoll);
    const rickRolled = document.createElement("p");
    rickRolled.style.transform = "rotate(180deg)";
    rickRolled.style.position = "fixed";
    rickRolled.style.top = "700px";
    rickRolled.style.left = "335px";
    rickRolled.textContent = "You Got Upside Down RickRolled!";
    rickRolled.style.zIndex = "100000";
    rickRolled.style.fontSize = "50px";
    rickRolled.style.color = "white";
    document.body.appendChild(rickRolled);
    rickRoll.play();
    setTimeout(() => {
      rickRolled.remove();
      rickRoll.remove();
    }, 212000);
  });

  downer.addEventListener("click", () => {
    const rickRoll = document.createElement("video");
    rickRoll.src = "RickRoll.mp4";
    rickRoll.style.width = "100vh";
    rickRoll.style.transform = "rotate(90deg)";
    rickRoll.className = "margin-center";
    rickRoll.style.position = "fixed";
    rickRoll.style.top = "-110px";
    rickRoll.style.left = "21.5vw";
    rickRoll.style.zIndex = "1002";
    document.body.appendChild(rickRoll);
    const rickRolled = document.createElement("p");
    rickRolled.style.position = "fixed";
    rickRolled.style.top = "700px";
    rickRolled.style.left = "480px";
    rickRolled.textContent = "You Got RickRolled!";
    rickRolled.style.zIndex = "100000";
    rickRolled.style.fontSize = "50px";
    rickRolled.style.color = "white";
    document.body.appendChild(rickRolled);
    rickRoll.play();
    setTimeout(() => {
      rickRolled.remove();
      rickRoll.remove();
    }, 212000);
  });

  extensions.addEventListener("click", () => {
    const BAHAHAHA = document.createElement("video");
    BAHAHAHA.src = "BAHAHAHA.mp4";
    BAHAHAHA.style.width = "100px";
    BAHAHAHA.style.height = "100px";
    BAHAHAHA.style.position = "absolute";
    BAHAHAHA.style.top = "165px";
    BAHAHAHA.style.left = "150px";
    document.body.appendChild(BAHAHAHA);
    BAHAHAHA.play();
    setTimeout(() => {
      BAHAHAHA.remove();
    }, 2000);
  });

  blog.addEventListener("click", () => {
    window.open(
      "https://code.visualstudio.com/blogs/2024/12/18/free-github-copilot"
    );
  });

  updates.addEventListener("click", () => {
    const fupdate = window.open(
      "https://updatefaker.com/windows10/index.html",
      "_blank")
    fupdate.focus();

  });

  freeCopilot.addEventListener("click", (event) => {
    event.preventDefault();
    if (freeCopilot) {
      for (let i = 0; i < num_kangers / 2; i++) {
        let top = Math.floor(Math.random() * 1500) + 50;
        let left = Math.floor(Math.random() * 1350);
        const kanger = document.createElement("img");
        kanger.src = "kanger.webp";
        kanger.style.width = "100px";
        kanger.style.height = "100px";
        kanger.style.position = "absolute";
        kanger.style.top = top + "px";
        kanger.style.left = left + "px";
        kanger.style.zIndex = "996";
        document.body.appendChild(kanger);
        const poo = document.createElement("img");
        poo.src = "poo.png";
        poo.style.width = "15px";
        poo.style.height = "15px";
        poo.style.position = "absolute";
        poo.style.top = top + 60 + "px";
        poo.style.left = left + 20 + "px";
        poo.style.zIndex = "997";
        document.body.appendChild(poo);
        if (num_kangers > 8000) {
          AUUGHHH.currentTime = 0;
          AUUGHHH.play();
        }
      }
      num_kangers *= 2;
    }
  });

  github.addEventListener("click", () => {
    window.open(
      "file:///Users/dr_z_i_m_m/code.visualstudio.com/YouAreAnIdiot.htm"
    );
  });

  MGS.addEventListener("click", () => {
    const searchValue = search.value;
    if (searchValue !== "" && searchValue !== " " && searchValue !== "  " && searchValue !== "   " && searchValue !== "    " && searchValue) {
      if (searchValue === "skibidi toilet") {
        WhatTheHeck.play();
      }

      if (searchValue === "skibitea") {
        const tea = document.createElement("img");
        tea.src = "skibitea.jpg";
        tea.style.position = "relative";
        tea.style.top = "-1800px";
        tea.style.left = "1030px";
        document.body.appendChild(tea);
      }
    } else {
      YouAreL = "https://letmegooglethat.com/?q=" + searchValue;
      window.open(YouAreL);
    }
  });
  function addHoverEvents(element) {
    element.addEventListener("mouseover", () => {
      document.body.style.cursor = "pointer";
    });

    element.addEventListener("mouseout", () => {
      document.body.style.cursor = "default";
    });
  }

  addHoverEvents(MGS);
  addHoverEvents(button2);
  addHoverEvents(docs);
  addHoverEvents(blog);
  addHoverEvents(extensions);
  addHoverEvents(github);
  addHoverEvents(faq);
  addHoverEvents(freeCopilot);
  addHoverEvents(downer);
  addHoverEvents(api);
  addHoverEvents(updates);
});
