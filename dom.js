dom.js;
// alert("kjh");

// document.getElementById(id)
// document.getElementsByTagName(name)
// document.getElementsByClassName(name)
// document.querySelectorAll

// const elm = document.getElementById("first");
// const elm = document.getElementsByClassName("first");

// const elm = document.querySelector("#first");
// const elm = document.querySelector(".first");
// const elm = document.querySelectorAll(".info > div");

// const text = elm.innerHTML;
// const text = elm.innerText;

// const elm = document.getElementsByClassName("display")[0];
// const elm = document.querySelector(".display");
// elm.innerHTML = "<h1>Prem Ach</h1>";
// elm.innerHTML = "Prem Ach";
// elm.append(" Ach");
// document.write("<h1>Prem Ach</h1>");

const elm = document.getElementsByClassName("display")[0];
// elm.innerText = "Prem Acharya";
// elm.style.color = "red";
// elm.style.fontSize = "2rem";
// elm.style.textDecoration = "none";

// console.log(elm);
// elm.setAttribute("style", "color: red");
// const elm = document.getElementsByTagName("a")[0];
// elm.style.display = "none";
// elm.innerText = "facebook";
// elm.setAttribute("href", "facebook.com");
// console.log(elm.attributes.href.value);

// const sayHello = () => {
//   alert("oh hi");
//   console.log("oh hellow");
// };

elm.classList.add("success");
elm.addEventListener("click", () => {
  elm.classList.toggle("success");
});
