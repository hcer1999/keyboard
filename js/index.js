window.onload = event => {
  console.log("Ver 1.1");
  isPhone(navigator.userAgent);
};

function isPhone(ua) {
  if (ua.indexOf("iPhone") > -1) {
    //苹果设备
    document.body.innerHTML = "<h1>请在PC端预览</h1>";
    alert("请在PC端打开本页面");
  } else if (ua.indexOf("Android") > -1) {
    //安卓设备
    document.body.innerHTML = "<h1>请在PC端预览</h1>";
    alert("请在PC端打开本页面");
  } else {
  }
}

let keys = document.querySelectorAll(".key");

//绑定点击事件
keys.forEach((item, index, arr) => {
  item.addEventListener("click", () => {
    let id = item.getAttribute("id");
    let pilot = document.querySelectorAll(".pilot i");
    showText(id);
    // 检测点击切换大小写按钮控制指示灯的开关
    if (id === "CapsLock") {
      if (item.className.indexOf("active") === -1) {
        item.classList.add("active");
        pilot[1].classList.add("open");
      } else {
        item.classList.remove("active");
        pilot[1].classList.remove("open");
      }
    }
    //检测点击数字锁定按钮控制指示灯
    if (id === "NumLock") {
      if (item.className.indexOf("active") === -1) {
        item.classList.add("active");
        pilot[0].classList.add("open");
      } else {
        item.classList.remove("active");
        pilot[0].classList.remove("open");
      }
    }
    ////检测点击滚动锁定按钮控制指示灯
    if (id === "ScrollLock") {
      if (item.className.indexOf("active") === -1) {
        item.classList.add("active");
        pilot[2].classList.add("open");
      } else {
        item.classList.remove("active");
        pilot[2].classList.remove("open");
      }
    }
  });
});

//绑定键盘按下事件
document.body.addEventListener("keydown", e => {
  let keyEl = document.querySelector(`#${e.code}`);
  showText(e.key);
  if (keyEl.className.indexOf("active") === -1) {
    keyEl.classList.add("active");
    setTimeout(() => {
      keyEl.classList.remove("active");
    }, 300);
  } else {
    keyEl.classList.remove("active");
  }
  console.log(e);
});

function showText(keyText) {
  let showEl = document.querySelector(".show");
  showEl.innerHTML = keyText;
}
