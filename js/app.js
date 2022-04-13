let video = document.querySelector('#presentation');
let videoPlay = document.querySelector('.play-pause');

videoPlay.onclick = () => {
    videoPlay.style.visibility = "hidden";
    video.play();

}


video.onclick = () => {
  

    if(videoPlay.style.visibility == "visible") {  
        videoPlay.style.visibility = "hidden";
        video.play();
    }
    else {   

       videoPlay.style.visibility = "visible";
       video.pause();
    }
}


window.onload = () => {
    let audio = new Audio('../imgs/bg.mp3');
    //audio.play(); 
}