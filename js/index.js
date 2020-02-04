window.onload = () => {
  console.log("Var 1.0测试版");

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
    showText(item.getAttribute("id"));
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
  // console.log(e);
});

function showText(keyText) {
  let showEl = document.querySelector(".show");
  showEl.innerHTML = keyText;
}
