document.addEventListener("DOMContentLoaded", function () {
  // Draggable
  var draggableElement = document.querySelector(".window-border1");
  var titleElement = document.querySelector(".title1");

  titleElement.addEventListener("mousedown", function (e) {
    var offsetX = e.clientX - draggableElement.getBoundingClientRect().left;
    var offsetY = e.clientY - draggableElement.getBoundingClientRect().top;

    function onMouseMove(e) {
      draggableElement.style.left = e.clientX - offsetX + "px";
      draggableElement.style.top = e.clientY - offsetY + "px";
    }

    document.addEventListener("mousemove", onMouseMove);

    document.addEventListener(
      "mouseup",
      function () {
        document.removeEventListener("mousemove", onMouseMove);
      },
      { once: true }
    );
  });

  // Maximize/Restore Button
  var maxButton = document.getElementById("max1");
  maxButton.addEventListener("click", function () {
    // eslint-disable-next-line eqeqeq
    if (maxButton.innerHTML == "&#11109;") {
      maxButton.innerHTML = "&#9650;";
    } else {
      maxButton.innerHTML = "&#11109;";
    }
    document.querySelector(".window1").classList.toggle("maximize1");
  });

  // Resizable
  var resizableElement = document.querySelector(".window-border1");
  var resizeHandles = {
    nw: document.createElement("div"),
    ne: document.createElement("div"),
    sw: document.createElement("div"),
    se: document.createElement("div"),
  };

  for (var handle in resizeHandles) {
    var div = resizeHandles[handle];
    div.className = "resize-handle1 " + handle;
    resizableElement.appendChild(div);
    div.addEventListener("mousedown", initResize);
  }

  function initResize(e) {
    var handle = e.target.className.split(" ")[1];
    var startX = e.clientX;
    var startY = e.clientY;
    var startWidth = parseInt(
      document.defaultView.getComputedStyle(resizableElement).width,
      10
    );
    var startHeight = parseInt(
      document.defaultView.getComputedStyle(resizableElement).height,
      10
    );

    function doResize(e) {
      if (handle.includes("e")) {
        resizableElement.style.width = startWidth + e.clientX - startX + "px";
      }
      if (handle.includes("s")) {
        resizableElement.style.height = startHeight + e.clientY - startY + "px";
      }
      if (handle.includes("w")) {
        resizableElement.style.width = startWidth - e.clientX + startX + "px";
        resizableElement.style.left = e.clientX + "px";
      }
      if (handle.includes("n")) {
        resizableElement.style.height = startHeight - e.clientY + startY + "px";
        resizableElement.style.top = e.clientY + "px";
      }
    }

    function stopResize() {
      document.removeEventListener("mousemove", doResize);
      document.removeEventListener("mouseup", stopResize);
    }

    document.addEventListener("mousemove", doResize);
    document.addEventListener("mouseup", stopResize);
  }
});
// --------------------------------------------------------
document.addEventListener("DOMContentLoaded", function () {
  // Draggable
  var draggableElement = document.querySelector(".window-border2");
  var titleElement = document.querySelector(".title2");

  titleElement.addEventListener("mousedown", function (e) {
    var offsetX = e.clientX - draggableElement.getBoundingClientRect().left;
    var offsetY = e.clientY - draggableElement.getBoundingClientRect().top;

    function onMouseMove(e) {
      draggableElement.style.left = e.clientX - offsetX + "px";
      draggableElement.style.top = e.clientY - offsetY + "px";
    }

    document.addEventListener("mousemove", onMouseMove);

    document.addEventListener(
      "mouseup",
      function () {
        document.removeEventListener("mousemove", onMouseMove);
      },
      { once: true }
    );
  });

  // Maximize/Restore Button
  var maxButton = document.getElementById("max2");
  maxButton.addEventListener("click", function () {
    // eslint-disable-next-line eqeqeq
    if (maxButton.innerHTML == "&#11109;") {
      maxButton.innerHTML = "&#9650;";
    } else {
      maxButton.innerHTML = "&#11109;";
    }
    document.querySelector(".window2").classList.toggle("maximize2");
  });

  // Resizable
  var resizableElement = document.querySelector(".window-border2");
  var resizeHandles = {
    nw: document.createElement("div"),
    ne: document.createElement("div"),
    sw: document.createElement("div"),
    se: document.createElement("div"),
  };

  for (var handle in resizeHandles) {
    var div = resizeHandles[handle];
    div.className = "resize-handle " + handle;
    resizableElement.appendChild(div);
    div.addEventListener("mousedown", initResize);
  }

  function initResize(e) {
    var handle = e.target.className.split(" ")[1];
    var startX = e.clientX;
    var startY = e.clientY;
    var startWidth = parseInt(
      document.defaultView.getComputedStyle(resizableElement).width,
      10
    );
    var startHeight = parseInt(
      document.defaultView.getComputedStyle(resizableElement).height,
      10
    );

    function doResize(e) {
      if (handle.includes("e")) {
        resizableElement.style.width = startWidth + e.clientX - startX + "px";
      }
      if (handle.includes("s")) {
        resizableElement.style.height = startHeight + e.clientY - startY + "px";
      }
      if (handle.includes("w")) {
        resizableElement.style.width = startWidth - e.clientX + startX + "px";
        resizableElement.style.left = e.clientX + "px";
      }
      if (handle.includes("n")) {
        resizableElement.style.height = startHeight - e.clientY + startY + "px";
        resizableElement.style.top = e.clientY + "px";
      }
    }

    function stopResize() {
      document.removeEventListener("mousemove", doResize);
      document.removeEventListener("mouseup", stopResize);
    }

    document.addEventListener("mousemove", doResize);
    document.addEventListener("mouseup", stopResize);
  }

  // Context Menu
  var windowElement = document.getElementById("window2");
  var contextMenu = document.getElementById("context-menu2");
  var linkElement = document.getElementById("link2");

  windowElement.addEventListener("click", function () {
    linkElement.parentNode.insertBefore(contextMenu, linkElement.nextSibling);
    contextMenu.style.left = windowElement.offsetLeft + "px";
    contextMenu.style.top =
      windowElement.offsetTop + windowElement.offsetHeight + 4 + "px";
    contextMenu.style.position = "absolute";
    contextMenu.style.display =
      contextMenu.style.display === "block" ? "none" : "block";
  });
});
// --------------------------------------------------------
document.addEventListener("DOMContentLoaded", function () {
  // Draggable
  var draggableElement = document.querySelector(".window-border3");
  var titleElement = document.querySelector(".title3");

  titleElement.addEventListener("mousedown", function (e) {
    var offsetX = e.clientX - draggableElement.getBoundingClientRect().left;
    var offsetY = e.clientY - draggableElement.getBoundingClientRect().top;

    function onMouseMove(e) {
      draggableElement.style.left = e.clientX - offsetX + "px";
      draggableElement.style.top = e.clientY - offsetY + "px";
    }

    document.addEventListener("mousemove", onMouseMove);

    document.addEventListener(
      "mouseup",
      function () {
        document.removeEventListener("mousemove", onMouseMove);
      },
      { once: true }
    );
  });

  // Maximize/Restore Button
  var maxButton = document.getElementById("max3");
  maxButton.addEventListener("click", function () {
    // eslint-disable-next-line eqeqeq
    if (maxButton.innerHTML == "&#11109;") {
      maxButton.innerHTML = "&#9650;";
    } else {
      maxButton.innerHTML = "&#11109;";
    }
    document.querySelector(".window3").classList.toggle("maximize3");
  });

  // Resizable
  var resizableElement = document.querySelector(".window-border3");
  var resizeHandles = {
    nw: document.createElement("div"),
    ne: document.createElement("div"),
    sw: document.createElement("div"),
    se: document.createElement("div"),
  };

  for (var handle in resizeHandles) {
    var div = resizeHandles[handle];
    div.className = "resize-handle " + handle;
    resizableElement.appendChild(div);
    div.addEventListener("mousedown", initResize);
  }

  function initResize(e) {
    var handle = e.target.className.split(" ")[1];
    var startX = e.clientX;
    var startY = e.clientY;
    var startWidth = parseInt(
      document.defaultView.getComputedStyle(resizableElement).width,
      10
    );
    var startHeight = parseInt(
      document.defaultView.getComputedStyle(resizableElement).height,
      10
    );

    function doResize(e) {
      if (handle.includes("e")) {
        resizableElement.style.width = startWidth + e.clientX - startX + "px";
      }
      if (handle.includes("s")) {
        resizableElement.style.height = startHeight + e.clientY - startY + "px";
      }
      if (handle.includes("w")) {
        resizableElement.style.width = startWidth - e.clientX + startX + "px";
        resizableElement.style.left = e.clientX + "px";
      }
      if (handle.includes("n")) {
        resizableElement.style.height = startHeight - e.clientY + startY + "px";
        resizableElement.style.top = e.clientY + "px";
      }
    }

    function stopResize() {
      document.removeEventListener("mousemove", doResize);
      document.removeEventListener("mouseup", stopResize);
    }

    document.addEventListener("mousemove", doResize);
    document.addEventListener("mouseup", stopResize);
  }

  // Context Menu
  var windowElement = document.getElementById("window3");
  var contextMenu = document.getElementById("context-menu3");
  var linkElement = document.getElementById("link3");

  windowElement.addEventListener("click", function () {
    linkElement.parentNode.insertBefore(contextMenu, linkElement.nextSibling);
    contextMenu.style.left = windowElement.offsetLeft + "px";
    contextMenu.style.top =
      windowElement.offsetTop + windowElement.offsetHeight + 4 + "px";
    contextMenu.style.position = "absolute";
    contextMenu.style.display =
      contextMenu.style.display === "block" ? "none" : "block";
  });
});
// --------------------------------------------------------
document.addEventListener("DOMContentLoaded", function () {
  // Draggable
  var draggableElement = document.querySelector(".window-border4");
  var titleElement = document.querySelector(".title4");

  titleElement.addEventListener("mousedown", function (e) {
    var offsetX = e.clientX - draggableElement.getBoundingClientRect().left;
    var offsetY = e.clientY - draggableElement.getBoundingClientRect().top;

    function onMouseMove(e) {
      draggableElement.style.left = e.clientX - offsetX + "px";
      draggableElement.style.top = e.clientY - offsetY + "px";
    }

    document.addEventListener("mousemove", onMouseMove);

    document.addEventListener(
      "mouseup",
      function () {
        document.removeEventListener("mousemove", onMouseMove);
      },
      { once: true }
    );
  });

  // Maximize/Restore Button
  var maxButton = document.getElementById("max4");
  maxButton.addEventListener("click", function () {
    // eslint-disable-next-line eqeqeq
    if (maxButton.innerHTML == "&#11109;") {
      maxButton.innerHTML = "&#9650;";
    } else {
      maxButton.innerHTML = "&#11109;";
    }
    document.querySelector(".window4").classList.toggle("maximize4");
  });

  // Resizable
  var resizableElement = document.querySelector(".window-border4");
  var resizeHandles = {
    nw: document.createElement("div"),
    ne: document.createElement("div"),
    sw: document.createElement("div"),
    se: document.createElement("div"),
  };

  for (var handle in resizeHandles) {
    var div = resizeHandles[handle];
    div.className = "resize-handle " + handle;
    resizableElement.appendChild(div);
    div.addEventListener("mousedown", initResize);
  }

  function initResize(e) {
    var handle = e.target.className.split(" ")[1];
    var startX = e.clientX;
    var startY = e.clientY;
    var startWidth = parseInt(
      document.defaultView.getComputedStyle(resizableElement).width,
      10
    );
    var startHeight = parseInt(
      document.defaultView.getComputedStyle(resizableElement).height,
      10
    );

    function doResize(e) {
      if (handle.includes("e")) {
        resizableElement.style.width = startWidth + e.clientX - startX + "px";
      }
      if (handle.includes("s")) {
        resizableElement.style.height = startHeight + e.clientY - startY + "px";
      }
      if (handle.includes("w")) {
        resizableElement.style.width = startWidth - e.clientX + startX + "px";
        resizableElement.style.left = e.clientX + "px";
      }
      if (handle.includes("n")) {
        resizableElement.style.height = startHeight - e.clientY + startY + "px";
        resizableElement.style.top = e.clientY + "px";
      }
    }

    function stopResize() {
      document.removeEventListener("mousemove", doResize);
      document.removeEventListener("mouseup", stopResize);
    }

    document.addEventListener("mousemove", doResize);
    document.addEventListener("mouseup", stopResize);
  }

  // Context Menu
  var windowElement = document.getElementById("window4");
  var contextMenu = document.getElementById("context-menu4");
  var linkElement = document.getElementById("link4");

  windowElement.addEventListener("click", function () {
    linkElement.parentNode.insertBefore(contextMenu, linkElement.nextSibling);
    contextMenu.style.left = windowElement.offsetLeft + "px";
    contextMenu.style.top =
      windowElement.offsetTop + windowElement.offsetHeight + 4 + "px";
    contextMenu.style.position = "absolute";
    contextMenu.style.display =
      contextMenu.style.display === "block" ? "none" : "block";
  });
});
