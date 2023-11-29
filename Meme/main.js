const  generateBtn = document.querySelector(".meme-generator .generate-meme-btn")
const  generateTitle = document.querySelector(".meme-generator .meme-title")
const  memeAuthor = document.querySelector(".meme-generator .meme-author")
const  memeImage = document.querySelector(".meme-generator img")



const updateMeme =(url,title,author)=>{
    memeImage.setAttribute("src", url);
    generateTitle.innerHTML = title
    memeAuthor.innerHTML = `Meme by : ${author}`
}

const generateMeme =() => {
    fetch("https://meme-api.com/gimme/wholesomememes")
    .then((response)=> response.json())
    .then((data)=> {
        updateMeme(data.url, data.title, data.author)
    });
}

generateBtn.addEventListener("click", generateMeme);
generateMeme();