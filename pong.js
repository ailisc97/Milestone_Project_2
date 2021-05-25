const canvas = document.getElementsById("pong");
const context = canvas.getContext("2d"); //Methods and Properties

//Drawing the Rectangle
    function drawRect(x,y,w,h,color){
    context.fillStyle="black";
    context.fillRect(100,200,50,75); //x-axis, y-axis, height and width
}
//Drawing the Ball
    function drawCircle(x,y,r,color){
    context.fillStyle="red";
    context.beginPath();
    context.arc (300,350,100,0,Math.PI*2,false );//x position, y position, radius, Start Angle,End angle(360), direction (clockwise)
    context.closePath();
}

//Drawing Text
function drawText(text,x,y,color){
    context.fillStyle="red";
    context.font="75px fantasy";
    context.fillText(text,x,y);
}

//Moving the Rectangle
let rectX=0;
function render(){
    drawRect( 0, 0, 600, 400,"black");
    drawRect( rectX, 100, 100, 100,"red");
    rectX = rectX+100;
}
setInterval(render,1000);