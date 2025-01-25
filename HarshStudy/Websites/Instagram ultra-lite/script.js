let storiyan = document.querySelector(".storiyan");
let fullScreen = document.querySelector(".full-screen");
let stats = document.querySelector("h5");
let addFriend = document.querySelector("button");
let imgBox = document.querySelector(".img-box");
let heart = document.querySelector(".heart");
let card = document.querySelector("#content");

let photos = [
  { dp: './Assets/images/ImgDp1.jpg', story: './Assets/images/ImgStory1.jpg' },
  { dp: './Assets/images/ImgDp2.jpg', story: './Assets/images/ImgStory2.jpg' },
  { dp: './Assets/images/ImgDp3.jpg', story: './Assets/images/ImgStory3.jpg' },
  { dp: './Assets/images/ImgDp4.jpg', story: './Assets/images/ImgStory4.jpg' },
  { dp: './Assets/images/ImgDp5.jpg', story: './Assets/images/ImgStory5.jpg' },
  { dp: './Assets/images/ImgDp6.jpg', story: './Assets/images/ImgStory6.jpg' },
  { dp: './Assets/images/ImgDp7.jpg', story: './Assets/images/ImgStory7.jpg' },
  { dp: './Assets/images/ImgDp8.jpg', story: './Assets/images/ImgStory8.jpg' },
  { dp: './Assets/images/ImgDp9.jpg', story: './Assets/images/ImgStory9.jpg' },
  { dp:'./Assets/images/ImgDp10.jpg', story: './Assets/images/ImgStory10.jpg'}
];

let clutter = "";

photos.forEach((elem, idx) => {
  clutter += `<div class="story">
    <img id= "${idx}" src="${elem.dp}" alt="">
</div>`

});

storiyan.innerHTML = clutter

storiyan.addEventListener("click", (details) => {
  fullScreen.style.display = "block"
  fullScreen.style.backgroundImage = `url(${photos[details.target.id].story})`

  setTimeout(() => {
    fullScreen.style.display = "none"
  }, 1000)
});


imgBox.addEventListener("dblclick", () => {
  heart.style.transform = 'translate(-50%, -50%) scale(1)';
  heart.style.opacity = 0.8
  setTimeout(() => {
    heart.style.opacity = 0;
  }, 1000);
  setTimeout(() => {
    heart.style.transform = 'translate(-50%, -50%) scale(0)';
  }, 2000);
});

let check = 0;

addFriend.addEventListener("click", () => {
  if (check == 0) {
    stats.innerHTML = "Friends";
    stats.style.color = "green";
    addFriend.innerHTML = "Remove Friend";
    check = 1;
  } else {
    stats.innerHTML = "Stranger";
    stats.style.color = "red";
    addFriend.innerHTML = "Add Friend";
    check = 0;
  }
});