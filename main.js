var mainimg = document.querySelector('img');
var images = ['img/img-1.jpg', 'img/img-2.jpg','img/img-3.jpg','img/img-4.jpg',]
var num = 0;
const auto = true;
var intervalTime = 5000;
var slideInterval;

function next(){
    num++
    if(num>=images.length){
        num = 0;
        mainimg.src  = images[num];
        
    }
    else{
        mainimg.src = images[num];
    }
}

function prev(){
    num--;

    if(num<0){
        num = images.length-1;
        mainimg.src  =images[num];
    }
    else{
        mainimg.src = images[num];
    }
}
if(auto){
    slideInterval = setInterval(next,intervalTime);
}