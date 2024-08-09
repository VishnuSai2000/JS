let result = isLandscape(800,500);
console.log(result);

function isLandscape(width,height){
    return (width>height) ? true : false;
}