let video = document.getElementById('vid'),

   remainingTime = document.getElementById('remainingTime'),

   totalTime = document.getElementById("totalTime"),

   playPause = document.getElementById("playPause"),

   stop = document.getElementById('stop'),

   rewind = document.getElementById('rewind'),

   begin = document.getElementById('begin'),

   end = document.getElementById('end'),

   fastForward = document.getElementById('fastForward'),

   volume = document.getElementById('volume'),

   mute = document.getElementById('mute'),

   scrubber = document.getElementById('scrubber'),

   playbackRate = document.getElementById('playbackRate');let TIME_STEP = 5;

let vol = 0;

// video.addEventListener("canplay", function(){

//     video.play();

// });
let formatTime = function(seconds){

   seconds = Math.round(seconds);

   let minutes = 0;

   if(seconds >=60){

       minutes = Math.floor(seconds/60);

       seconds = (seconds - (minutes*60));

   }

   seconds = `${seconds}`;    
   if(seconds.length ==1){

       seconds = `0${seconds}`

   }

   return `${minutes}:${seconds}`;

}

let playOrPauseVideo = function(){

   if(video.paused || video.ended){

       video.play();

       playPause.innerText = "Pause"

   }else{

       video.pause();

       playPause.innerText = "Play"

   }

}

video.addEventListener("click", playOrPauseVideo);

playPause.addEventListener('click', playOrPauseVideo);stop.addEventListener("click", function(){

   video.pause();

   video.currentTime = 0;

   playPause.innerText = "Play";

   video.playbackRate = 1;

   playbackRate.value =1;

});begin.addEventListener('click', function(){

   video.currentTime = 0;

});rewind.addEventListener("click", function(){

   video.currentTime -= TIME_STEP;

});fastForward.addEventListener("click", function(){

   video.currentTime += TIME_STEP;

});end.addEventListener("click", function(){

   video.currentTime = video.duration;

   playPause.innerText = "Play";

});volume.addEventListener("change", function () {

   video.volume = this.value;

});video.addEventListener("play", function () {

   totalTime.innerText = formatTime(video.duration);});video.addEventListener("timeupdate", function(){

   remainingTime.innerText = formatTime(video.currentTime);

   scrubber.value = video.currentTime;

});mute.addEventListener('click', function(){

   if(!mute.muted){

       vol = volume.value;

   }

   video.muted = !video.muted;

   if(video.muted){

       volume.value = 0;

       mute.innerText = "Unmute";

   }else{

       volume.value = vol;

       mute.innerText = "Mute";

   }

})
scrubber.addEventListener("change", function(){

   video.currentTime = this.value;

});playbackRate.addEventListener('change', function(){

   video.playbackRate = this.value;

});