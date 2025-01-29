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
  const home = document.getElementById("home");
  const freeCopi = document.getElementById("button2");
  const hed = document.getElementById("hed");
  const wedfg = document.getElementById("wedfg");
  const platy = document.getElementById("platy");
  const inny = document.getElementById("inny");
  blog.style.bottom = "96px";
  let size = 1;
  let added = false;
  let shrinker = false;

  inny.addEventListener("click", () => {
    if (!shrinker) {
      const shrunk = document.createElement("p");
      shrunk.style.position = "fixed";
      shrunk.style.top = "50vh";
      shrunk.style.left = "50vw";
      shrunk.style.transform = "translate(-50%, -50%)";
      shrunk.textContent = "You Activated the UltiShrinker";
      shrunk.style.textAlign = "center";
      shrunk.style.zIndex = "100000";
      shrunk.style.fontSize = "100px";
      shrunk.style.top = "70vh";
      shrunk.style.width = "100vh";
      shrunk.style.color = "black";
      shrunk.style.fontWeight = "900";
      document.body.appendChild(shrunk);
      document.body.style.top = "-500px";
      setTimeout(() => {
        shrunk.remove();
      }, 5000);
      shrinker = true;
    }
    document.body.style.transform = `scale(${size})`;
    if (!added) {
      document.body.addEventListener("click", () => {
        size -= 0.02;
        if (size <= 0) {
          delete document;
        }
        document.body.style.transform = `scale(${size})`;
      });
      added = true;
    }
  });

  platy.addEventListener("click", () => {
    let circSize = 0;
    const crack = document.createElement("img");
    crack.src = "crack.png";
    setTimeout(() => {
      document.body.appendChild(crack);
      document.documentElement.requestFullscreen();
      crack.style.clipPath = "circle(0% at 329px 343px)";
      crack.style.position = "fixed"; // Add fixed position
      crack.style.top = "0";         // Position at top
      crack.style.left = "0";        // Position at left
      crack.style.width = "100vw";
      crack.style.height = "100vh";
      crack.style.backgroundColor = "transparent"; // Make background transparent
      crack.style.zIndex = "9999";               // Ensure it's on top
      setInterval(() => {
        setTimeout(() => {
          circSize += Math.floor(Math.random() * 100) / 100;
          crack.style.clipPath = `circle(${circSize}% at 329px 343px)`;
        }, Math.floor(Math.random() * 2000) + 1000);
      }, 100);
    }, 100);
  });

  const elements = [
    search,
    MGS,
    button2,
    downer,
    WhatTheHeck,
    freeCopilot,
    AUUGHHH,
    blog,
    extensions,
    github,
    docs,
    fart,
    faq,
    updates,
    home,
    freeCopi,
    hed,
    wedfg,
  ];

  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";
  api.addEventListener("click", () => {
    const intervalId = setInterval(() => {
      elements.forEach((el) => {
        if (el && el.textContent) {
          if (!el.dataset.originalContent) {
            el.dataset.originalContent = el.innerHTML;
          }
          let randomText = "";
          for (let i = 0; i < 5; i++) {
            randomText += chars.charAt(
              Math.floor(Math.random() * chars.length)
            );
          }
          el.textContent = randomText;
        }
        let r = Math.floor(Math.random() * 255);
        let g = Math.floor(Math.random() * 255);
        let b = Math.floor(Math.random() * 255);
        el.style.color = `rgb(${r}, ${g}, ${b})`;
        r = Math.floor(Math.random() * 255);
        g = Math.floor(Math.random() * 255);
        b = Math.floor(Math.random() * 255);
        el.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
      });
    }, 30);
    setTimeout(() => {
      clearInterval(intervalId);
      elements.forEach((el) => {
        if (el) {
          el.style.color = "";
          el.style.backgroundColor = "";
          if (el.dataset.originalContent) {
            el.innerHTML = el.dataset.originalContent;
            delete el.dataset.originalContent;
          }
        }
      });
    }, 7000);
  });

  search.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      const searchValue = search.value;
      if (
        searchValue !== "" &&
        searchValue !== " " &&
        searchValue !== "  " &&
        searchValue !== "   " &&
        searchValue !== "    "
      ) {
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
    rickRolled.style.width = "100vh";
    rickRolled.style.top = "89vh";
    rickRolled.style.left = "50vw";
    rickRolled.style.transform = "translate(-50%, -50%)";
    rickRolled.style.textAlign = "center";
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
    rickRolled.style.width = "100vh";
    rickRolled.style.top = "89vh";
    rickRolled.style.left = "50vw";
    rickRolled.style.transform = "translate(-50%, -50%)";
    rickRolled.style.textAlign = "center";
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
      "_blank"
    );
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
      "./YouAreAnIdiot.htm"
    );
  });

  MGS.addEventListener("click", () => {
    const searchValue = search.value;
    if (
      searchValue !== "" &&
      searchValue !== " " &&
      searchValue !== "  " &&
      searchValue !== "   " &&
      searchValue !== "    "
    ) {
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
