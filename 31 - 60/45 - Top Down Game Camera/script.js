var character = document.querySelector(".character");
var map = document.querySelector(".map");

// State of character
var x = 0;
var y = 0;
var held_directions = []; //Estado botão da seta que está segurando

var speed = 1; 

const placeCharacter = () => {
    var pixelSize = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--pixelSize'));

    const held_direction = held_directions[0];
    if(held_direction){
         if(held_direction === directions.right){x+=speed;}
         if(held_direction === directions.left){x-=speed;}
         if(held_direction === directions.down){y+=speed;}
         if(held_direction === directions.up){y-=speed;}
         character.setAttribute("facing",held_direction);
    }
    character.setAttribute("walking", held_direction? "true":"false");
}

//game loop
const step = () =>{
    placeCharacter();
    window.requestAnimationFrame(()=>{
        step();
    })
}
step();//primeiro passo

