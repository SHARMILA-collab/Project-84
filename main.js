var canvas= document.getElementById ("my_canvas");

ctx= canvas.getContext ("2d");
car_width= 120;
car_height= 70;
background_image= "racetrack.jpg";
car_image= "car1.png";
car_x= 10;
car_y= 10;

function add() {
    background_imgtag= new Image();
    background_imgtag.onload= uploadBackground;
    background_imgtag.src= background_image;

    car_imgtag= new Image();
    car_imgtag.onload= uploadcar;
    car_imgtag.src= car_image;
}

function uploadBackground() {
    ctx.drawImage(background_imgtag, 0, 0, canvas.width, canvas.height);

}

function uploadcar() {
    ctx.drawImage(car_imgtag, car_x, car_y, car_width, car_height);

}

window.addEventListener ("keydown", my_keydown);

function my_keydown(e) {
    keyPressed= e.keyCode;
    console.log (keyPressed);

    if (keyPressed=='37') {
        left();
        console.log ("left");
    }

    if (keyPressed=='38') {
        up();
        console.log ("up");
    }

    if (keyPressed=='39') {
        right();
        console.log ("right");
    }

    if (keyPressed=='40') {
        down();
        console.log ("down");
    }
}