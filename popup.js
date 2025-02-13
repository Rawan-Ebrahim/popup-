var images = document.querySelectorAll(".img-class");
var popupcontainer = document.getElementById("popupcontainer");
var popupImg = document.getElementById("popupImg");
var closeBtn = document.getElementById("closeBtn");
var prevBtn = document.getElementById("prevBtn");
var nextBtn = document.getElementById("nextBtn");
var welcomeText = document.getElementById("welcome");
var currentIndex = 0;

images.forEach((img, index) => {
    img.addEventListener("click", function () {
        popupcontainer.style.display = "flex";
        popupImg.src = img.src;
        currentIndex = index;
        
     
        welcomeText.classList.add("no-animation", "hidden");
    });
});

closeBtn.addEventListener("click", function () {
    popupcontainer.style.display = "none";
    
    
    welcomeText.classList.remove("no-animation", "hidden");
});

function prevpop() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    popupImg.src = images[currentIndex].src;
}
prevBtn.addEventListener("click", prevpop);

function nextpop() {
    currentIndex = (currentIndex + 1) % images.length;
    popupImg.src = images[currentIndex].src;
}
nextBtn.addEventListener("click", nextpop);

popupcontainer.addEventListener("click", function (e) {
    if (e.target === popupcontainer) {
        popupcontainer.style.display = "none";
        
        
        welcomeText.classList.remove("no-animation", "hidden");
    }
});

document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowRight") { 
        nextpop();
    } else if (e.key === "ArrowLeft") { 
        prevpop();
    } else if (e.key === "Escape") { 
        popupcontainer.style.display = "none";
        
    
        welcomeText.classList.remove("no-animation", "hidden");
    }
});
