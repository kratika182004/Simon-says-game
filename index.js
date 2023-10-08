const topLeft =document.querySelector('.top-left-plane');
const topRight =document.querySelector('.top-right-plane');
const bottomLeft =document.querySelector('.bottom-right-plane');
const bottomRight =document.querySelector('.bottom-left-plane');
const getRandomplane = () =>{
const planes =[
    topLeft,
    bottomLeft,
    topRight,
    bottomRight

];
return planes[parseInt(Math.random() * planes.length)];
};

const sequence=[getRandomplane()];
let sequenceToGuess =[...sequence];
const flash = (plane) =>{
    return new Promise((resolve,reject) =>{
        plane.className +=' active';
        setTimeout(()=>{   
            plane.className=plane.className.replace('active','');
            setTimeout(()=>{
                resolve();  
            },250);
                  
        },1000);
    });
};
let canClick = false;
const planeClicked = planeClicked =>{
    if (!canClick)return;

const expectedplane = sequenceToGuess.shift();
if (expectedplane===planeClicked){
    if (sequenceToGuess.length===0) {
        sequence.push(getRandomplane()); 
        sequenceToGuess =[...sequence];
        startFlashing();

    }
}
else{
    alert('game over');
}
};
const startFlashing = async() =>{
    canClick= false;
    for( const plane of sequence){
        await flash(plane);  
    }
    canClick = true;  
}
startFlashing();