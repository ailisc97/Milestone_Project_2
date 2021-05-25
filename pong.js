//Selecting the Canvas
const canvas = document.getElementsById("pong");
const context = canvas.getContext("2d"); //Methods and Properties

//Drawing the Rectangle
    function drawRect(x,y,w,h,color){
    context.fillStyle=color;
    context.fillRect(x,y,w,h); //x-axis, y-axis, width and height
}

drawRect(0,0,cvs.width,csv.height,"BLACK");

//Drawing the Circle
    function drawCircle(x,y,r,color){
    context.fillStyle=color;
    context.beginPath();
    context.arc (300,350,100,0,Math.PI*2,false );//x position, y position, radius, Start Angle,End angle(360), direction (clockwise)
    context.closePath();
}

drawCircle(100,100,50, "WHITE");

//Drawing Text
function drawText(){
    context.fillStyle=color;
    context.font="45px fantasy";
    context.fillText(text,x,y);
}

drawText("something",300,200,"WHITE");

//Moving the Rectangle
let rectX=0;
function render(){
    drawRect( 0, 0, 600, 400,"black");
    drawRect( rectX, 100, 100, 100,"red");
    rectX = rectX+100;
}
setInterval(render,1000);

//Drawing the Net
const net ={
    x: canvas.width/2 -2/2,
    y:0,
    width=2,
    height=10,
    color="white",
}
function drawNet(){
    for(let i=0; i<=canvas.height;i+=15){
        drawRect(net.x, net.y + i, net.width, net.height,net.color);
    }
}