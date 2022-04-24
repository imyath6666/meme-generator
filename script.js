const generateMemeBtn = document.querySelector(".meme-generator .generate-meme-btn");
const memeImage = document.querySelector(".meme-generator img");
const memeTitle = document.querySelector(".meme-generator .meme-title");

const updateDetails = (url, title) => {
  memeImage.setAttribute("src", url);
  memeTitle.innerHTML = title;
};

const generateMeme = () => {
  fetch("https://meme-api.herokuapp.com/gimme/wholesomememes")
    .then((response) => response.json())
    .then((data) => {
      updateDetails(data.url, data.title);
    });
};

generateMemeBtn.addEventListener("click", generateMeme);

generateMeme();

alert("Welcome Yatharth's to meme generator");