// Enemies our player must avoid
var Enemy = function() {
    // Variables applied to each of our instances go here,
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';

    //setting the location
    this.x = x;
    this.y = y;
    this.speed = speed;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.

    this.x += this.speed * dt;
    if(this.x > 450){ //checks if position is greater than environment width
        this.x = -50;

        //increment the speed
        if (this.speed >= 300 && this.speed <= 700){
            this.speed += 20*Math.random();
        }
        else if (this.speed >= 700){
            this.speed = 300;
        }
        else{            
            this.speed += 50* Math.random();
        }
    }
};

//to handle collision
Enemy.prototype.collide = function(){
    if ((player.y < this.y + 40) && (player.y > this.y - 40) &&
    (player.x < this.x + 51) && (player.x > this.x - 51)){
        player.y = 400;
        player.x = 202;
    }
}

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player



// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
