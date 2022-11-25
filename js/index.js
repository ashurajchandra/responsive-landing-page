

const pic = document.querySelector('#main-pic');
const green = document.querySelector('.green');
const red = document.querySelector('.red');
const cyan = document.querySelector('.cyan');
const pink = document.querySelector('.pink');
const purple = document.querySelector('.purple');
const blue = document.querySelector('.blue');
const colors = document.querySelector('.color');

console.log("pic",pic)
const pictureList = [
{
    src:"images/products/blue.png"
//     src:blue
},
{
    src:"images/products/cyan.png"
},
{
    src:"images/products/green.png"
},
{
    src:"images/products/red.png"
},
{
    src:"images/products/purple.png"
},
{
    src:"images/products/pink.png"
},
]
blue.addEventListener('click',()=>{
    pic.src=pictureList[0].src
});
cyan.addEventListener('click',()=>{
    pic.src=pictureList[1].src
});
green.addEventListener('click',()=>{
    pic.src=pictureList[2].src
});
red.addEventListener('click',()=>{
    pic.src=pictureList[3].src
});

purple.addEventListener('click',()=>{
    pic.src=pictureList[4].src
});
pink.addEventListener('click',()=>{
    pic.src=pictureList[5].src
});
