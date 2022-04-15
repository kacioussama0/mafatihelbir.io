


window.onload = () => {
  
}



// Burger Menu




window.onload = ()=> {

    let audio = new Audio('../imgs/bg.mp3');
    audio.play(); 

    let toggle = document.querySelector('header nav div.links span.toggle');

    let ul = document.getElementById('navLinks');
    

toggle.onclick = () => {

   if(ul.style.display == 'flex') {
        ul.style.display = 'none';
   }
   else {
    ul.style.display = 'flex';
   }
 
}


}