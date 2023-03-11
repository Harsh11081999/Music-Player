console.log("welcome to spotify");
//Initialize the variables
let songIndex = 0;
let audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myPogressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));


let songs = [
    {songName:"kya kahna",filePath:"./1.mp3",coverPath:"./images/10.jpg"},
    {songName:"Love You",filePath:"./1.mp3",coverPath:"./images/10.jpg"},
    {songName:"Besharam rang",filePath:"./1.mp3",coverPath:"./images/11.jpg"},
    {songName:"Teri Galiyan",filePath:"./1.mp3",coverPath:"./images/10.jpg"},
    {songName:"Tum hi ho ",filePath:"./1.mp3",coverPath:"./images/10.jpg"},
    {songName:"khairaiyat pucho",filePath:"./1.mp3",coverPath:"./images/2.jpg"},
    {songName:"Lambiyaan si judaiyaan",filePath:"./1.mp3",coverPath:"./images/10.jpg"},
    {songName:"Bhula dena mujhe",filePath:"./1.mp3",coverPath:"./images/10.jpg"}

    
]
songItems.forEach((element,i) => {
    element.getElementsByTagName('img')[0].src=songs[i].coverPath;
    element.getElementsByClassName('songName')[0].innerText=songs[i].songName;
});

//audioElement.play();

//Handle play/pause click
masterPlay.addEventListener('click',(e)=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    }
   
    
    else{
        audioElement.pause();
        masterPlay.classList.add('fa-circle-play');
        masterPlay.classList.remove('fa-circle-pause');
        gif.style.opacity = 0;
    }
})
//listen to events
audioElement.addEventListener('timeupdate',()=>{
    //update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myPogressBar.value=progress;
})
myPogressBar.addEventListener('change',()=>{
    audioElement.currentTime = myPogressBar.value*audioElement.duration/100;
    
})
const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');

    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        if(audioElement.paused || audioElement.currentTime<=0){
     e.target.classList.remove('fa-circle-play');
     e.target.classList.add('fa-circle-pause');
     audioElement.src='1.mp3';//"$(index).mp3"
     masterSongName.innerText=songs[songIndex].songName;
     audioElement.currentTime=0;
     audioElement.play();
     gif.style.opacity = 1;
     masterPlay.classList.remove('fa-circle-play');
     masterPlay.classList.add('fa-circle-pause');
        }
        else{
            audioElement.pause();
            masterPlay.classList.add('fa-circle-play');
            masterPlay.classList.remove('fa-circle-pause');
            gif.style.opacity = 0;
            e.target.classList.remove('fa-circle-pause');
            e.target.classList.add('fa-circle-play');
           audioElement.src='1.mp3';//"$(index).mp3"
           masterSongName.innerText=songs[songIndex].songName;
           
           
          
     
        }

    })
})
document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=8){
        songIndex=0;
    }
    else{
        songIndex +=1;
    }
    audioElement.src='1.mp3';//"$(index).mp3"
    masterSongName.innerText=songs[songIndex].songName;
     audioElement.currentTime=0;
     audioElement.play();
     gif.style.opacity = 1;
     masterPlay.classList.remove('fa-circle-play');
     masterPlay.classList.add('fa-circle-pause');
})
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0;
    }
    else{
        songIndex -=1;
    }
    audioElement.src='1.mp3';//"$(index).mp3"
    masterSongName.innerText=songs[songIndex].songName;
     audioElement.currentTime=0;
     audioElement.play();
     gif.style.opacity = 1;
     masterPlay.classList.remove('fa-circle-play');
     masterPlay.classList.add('fa-circle-pause');
})