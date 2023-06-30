const memeImg = document.getElementById("meme");

let memeArr = [
  './img/1.png',
  './img/2.png',
  './img/3.png',
  './img/4.png',
];

function randomMeme(arr){
    var rand = Math.floor(Math.random() * arr.length)
    return arr[rand]  
}

memeImg.onmouseover = function () {
  memeImg.src = randomMeme(memeArr)
}

memeImg.onmouseout = function () {
  memeImg.src = './img/0.jpg'
}

const videoStarter = document.getElementById("videoScreen");
 const video = document.getElementById("gamevideo");
videoStarter.onclick = function () {
  video.classList.toggle("startVideo");
 
}
video.onclick = function () {video.classList.remove("startVideo");}