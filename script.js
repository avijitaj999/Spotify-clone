let songIndex = 0;
let audioElement = new Audio('songs/1.mp3.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar =document.getElementById('myProgressBar');
let giv = document.getElementById('gif');
let songItems =Array.from(document.getElementsByClassName('songItem'));
let songs=[
    {songName: "Salam-e-Ishq",filePath:"songs/1.mp3" ,coverPath:"cover/1.jpg.jpg",},
    {songName: "Tumi-Mor-Jiboner",filePath:"songs/2.mp3" ,coverPath:"cover/2.jpg.jpg",},
    {songName: "Tumi-Akasher-",filePath:"songs/3.mp3" ,coverPath:"cover/3.jpg.jpg",},
    {songName: "Tumi-Akashe",filePath:"songs/4.mp3" ,coverPath:"cover/4.jpg.jpg",},

]

songItems.forEach((element, i )=> {
element.getElementsByTagName('img') [0].src = songs[i].coverPath;
element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
    
});

// audioElement.play();
//Handle play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle')
        masterPlay.classList.add('fa-pause-circle')
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle')
        masterPlay.classList.add('fa-play-circle')
        gif.style.opacity = 0;

    }

})

// Listen to Events
audioElement.addEventListener('timeupdate',() =>{
   
    progress = parseInt(audioElement.currentTime/audioElement.duration* 100);
myProgressBar.value = progress;
})
myProgressBar.addEventListener('change', ()=>{
  audioElement.currentTime =myProgressBar.value*audioElement.duration/100;  
})
const makeAllPlay = () =>{
    Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-paly-circle');
    })
}

Array.from(document.getElementsByClassName("songItemPlay")).forEach((element) => {
    element.addEventListener('click', (e) => {
        console.log(e.target);
        makeAllPlay();
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = 'songs/3.mp3';
        audioElement.currentTime =0;
        audioElement.play();
    });
});
