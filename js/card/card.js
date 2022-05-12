'use strict';

const toggle = document.getElementById("toggle");
const item = document.getElementById("toggle-item");


/* 분류 보기 */


function listClick1() {
  document.querySelector("#category").style.backgroundColor = "#006633";
  document.querySelector("#category").style.color = "#fff";
  document.querySelector("#theme").style.backgroundColor = "#f4f4f1";
  document.querySelector("#theme").style.color = "#000";
}
function listClick2() {
  document.querySelector("#category").style.backgroundColor = "#f4f4f1";
  document.querySelector("#category").style.color = "#000";
  document.querySelector("#theme").style.backgroundColor = "#006633";
  document.querySelector("#theme").style.color = "#fff";
}
