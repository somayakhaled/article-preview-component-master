const share = document.getElementById("share");
const share2 = document.getElementById("share2");
const hidden = document.getElementById("hidden");
let info = document.querySelector('.info');

function isMobile(){
    return window.matchMedia("(max-width: 425px)").matches;
}

share.addEventListener("click", () =>{
    if(isMobile()){   //check if it's mbile size
        if(info){
            info.style.display = "none";
        }
        hidden.classList.toggle('show');
    }
    else{
        hidden.classList.toggle('show');
        share.classList.toggle('showing');
        info.style.display = "flex";
    }
});

share2.addEventListener('click', () => {
    hidden.classList.remove('show');
    info.style.display = "flex";
})