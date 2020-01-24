var canvas=document.querySelector("canvas");

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

var c=canvas.getContext('2d');

var i=Math.PI/180;
var l=60;
var i=0;
var j=0;
var d=0;

function animate(){
    c.clearRect(0,0,innerWidth,innerHeight);
    c.translate(innerWidth/2,innerHeight/2);
    c.beginPath();
    c.fillStyle="white";
    c.moveTo(0,0);
    c.lineTo(l*Math.cos(i*Math.PI/180),-l*Math.sin(i*Math.PI/180));
    c.lineTo(l*Math.sin(i*Math.PI/180),l*Math.cos(i*Math.PI/180));
    c.strokeStyle="white";
    c.fill();
    c.stroke();

    
    c.beginPath();
    c.fillStyle="white";
    c.moveTo(0,0);
    c.lineTo(-l*Math.cos(j*Math.PI/180),l*Math.sin(j*Math.PI/180));
    c.lineTo(-l*Math.sin(j*Math.PI/180),-l*Math.cos(j*Math.PI/180));
    c.strokeStyle="white";
    c.fill();
    c.stroke();
    c.translate(-innerWidth/2,-innerHeight/2);

    if(d<=90)
    {
        i++;
    }
    else{
        if(Math.floor((d-90)/180)%2==0){
            j++;
        }
        else{
            i++;
        }
    }
    d++;
    console.log((d/90)%2);
}

setInterval(animate,5);
