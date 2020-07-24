var numSquares=6;
var colors=generateRandomColors(numSquares);

var squares=document.querySelectorAll('.square');
var pickedColor=pickColor();
var colorDisplay=document.querySelector("#colorDisplay");
var messageDisplay=document.querySelector('#message');
var h1=document.querySelector('h1');
var resetButton=document.querySelector('#reset');
var easyBtn=document.querySelector('#easyBtn');
var hardBtn=document.querySelector('#hardBtn');


easyBtn.addEventListener('click',function(){
    easyBtn.classList.add('selected');
    hardBtn.classList.remove('selected');
    numSquares=3;
    colors=generateRandomColors(numSquares);
    pickedColor=pickColor();
    colorDisplay.textContent=pickedColor;
    for(var i=0;i<squares.length;i++)
    {
        if (colors[i]){
            squares[i].style.background=colors[i];
        }
        else{
            squares[i].style.display='none';
        }
    }
    

});

hardBtn.addEventListener('click',function(){
    easyBtn.classList.remove('selected');
    hardBtn.classList.add('selected');
    numSquares=6
    colors=generateRandomColors(numSquares);
    pickedColor=pickColor();
    colorDisplay.textContent=pickedColor;
    for(var i=0;i<squares.length;i++)
    {
            squares[i].style.background=colors[i];
            squares[i].style.display='block';

    }
});




resetButton.addEventListener('click',function(){
    //generate new colors,pick new random color ,change colors of squares on page
    colors=generateRandomColors(numSquares);
    pickedColor=pickColor();
    //change display
    colorDisplay.textContent=pickedColor;
    for(var i=0;i<squares.length;i++)
    {
        squares[i].style.background=colors[i]
    }
    h1.style.background='steelblue';
    messageDisplay.textContent=''
    this.textContent='New Colors'
});


colorDisplay.textContent=pickedColor;


for(var i=0;i<squares.length; i++){
    //add initial colors
    squares[i].style.background=colors[i];
    //add click listeners 
    squares[i].addEventListener('click',function(){
        //grab and compare to picked color
        var clickedColor=this.style.background;
        if (clickedColor===pickedColor)
        {
            messageDisplay.textContent="Correct"
            changeColors(clickedColor);
            h1.style.background=clickedColor;
            resetButton.textContent='Play Again?';
        }
        else
        {
        this.style.background= '#232323'
        messageDisplay.textContent='Try Again';
        }
    });
}
function changeColors(color){
    //change color to match the color parameter
    for(var i=0;i<colors.length;i++)
    {
        squares[i].style.background=color;
    }
}

function pickColor(){
    var random=Math.floor(Math.random() * colors.length);
    return colors[random];
}
function generateRandomColors(num){
    // make an array ,add num random colors to array and retur it
    var arr=[]
    for (var i=0;i<num;i++)
    {
        arr.push(randomColor());
    }
    return arr;
}

function randomColor(){
    //pick a red from 0-255 and all other colors
    var r=Math.floor(Math.random() *256);
    var g=Math.floor(Math.random() *256);
    var b=Math.floor(Math.random() *256);
    return "rgb("+r+", "+g+", "+b+")";
}