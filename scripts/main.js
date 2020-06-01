let toChange = false;

setInterval(function(){
  const clock1 = document.querySelector(".display1");
  let time = new Date();
  let sec = time.getSeconds();
  let min = time.getMinutes();
  let hr = time.getHours();
  let day = 'AM';
  if(hr > 12){
    day = 'PM';
    hr = hr - 12;
  }
  if(hr == 0){
    hr = 12;
  }
  if(sec < 10){
    sec = '0' + sec;
  }
  if(sec == 0){
    if (toChange) {
      change_background();
      toChange = false;
    }
  } else if (!toChange) {
    toChange = true;
  }
  if(min < 10){
    min = '0' + min;
  }
  if(hr < 10){
    hr = '0' + hr;
  }
  clock1.textContent = hr + ':' + min + ':' + sec + " " + day;
});

setInterval(function(){
  const clock2 = document.querySelector(".display2");
  let time = new Date();
  time.setHours(time.getHours() + 6)
  let sec = time.getSeconds();
  let min = time.getMinutes();
  let hr = time.getHours();
  let day = 'AM';
  if(hr > 12){
    day = 'PM';
    hr = hr - 12;
  }
  if(hr == 0){
    hr = 12;
  }
  if(sec < 10){
    sec = '0' + sec;
  }
  if(min < 10){
    min = '0' + min;
  }
  if(hr < 10){
    hr = '0' + hr;
  }
  clock2.textContent = hr + ':' + min + ':' + sec + " " + day;
});

let index = 1;
function change_background() {
  let video = document.getElementById("video");
  let video_source = document.getElementById("video_source");
	if (index === 1){
		video_source.src = "images/video_2.mp4";
    index = 2;
	} else if (index === 2) {
    video_source.src = "images/video_1.mp4";
    index = 1;
  }
  video.load();
  video.play();
}