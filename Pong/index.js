class Game {
    constructor(){
        const canvas = document.querySelector('#canvas');
        this.ctx = canvas.getContext('2d');
        this.background = new Background(0, 0, 500, 500);
        this.resetGame();
        this.paused = 0;
        document.addEventListener("keypress", (event) => {
            if (event.key === "p") this.paused = (this.paused + 1) % 2;
        });
    }
    play(){
        setInterval(() => {
            if (!this.paused) {
                this.ball.moveBall();
                this.leftRacket.move();
                this.rightRacket.move();    
            }
            if (this.ball.isOutOfLeftBound() &&
                !this.leftRacket.canDefend(this.ball)) {   
                    this.background.rightPoint += 1;
                    this.resetGame();
            }
            if (this.ball.isOutOfRightBound() &&
                !this.rightRacket.canDefend(this.ball)) {
                    this.background.leftPoint += 1;
                    this.resetGame();
            }
            this.background.renderBackground(this.ctx);
            this.ball.renderBall(this.ctx);
            this.leftRacket.renderRacket(this.ctx);
            this.rightRacket.renderRacket(this.ctx);
        }, 17) 
    }
    resetGame() {
        this.ball = new Ball(150, 20, 7);
        this.leftRacket = new Racket(0, 0, 10, 80, "a", "z");
        this.rightRacket = new Racket(490, 420, 10, 80, "o", "k");
    }      
}

class Background {
    constructor(x, y, width, height){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.leftPoint = 0;
        this.rightPoint = 0;
    }
    renderBackground(ctx){
        ctx.fillStyle = 'black';
        ctx.fillRect(this.x, this.y, this.width, this.height); 
        ctx.fillStyle = '#ff0000';
        ctx.font = "20px Arial";
        ctx.fillText(this.leftPoint, 200, 30);
        ctx.fillText(this.rightPoint, 290, 30);
        ctx.strokeStyle = '#00ff00';
        ctx.beginPath();
        ctx.setLineDash([5, 3]);
        ctx.moveTo(250, 0);
        ctx.lineTo(250, 500);
        ctx.stroke();  
    }
}

class Ball{
    constructor(x, y, radius){
        this.x = x;
        this.y = y
        this.radius = radius;
        this.speedX = +5;
        this.speedY = -5;
    }
    renderBall(ctx){
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
        ctx.fillStyle = '#ff0000';
        ctx.fill(); 
    }
    moveBall(){  
        if (this.isOutOfRightBound()  || this.isOutOfLeftBound()) {
            this.speedX = -this.speedX;
        }
        if ((this.y + this.radius >= 500) || (this.y - this.radius <= 0)){
            this.speedY = -this.speedY;
        }
        this.x += this.speedX;
        this.y += this.speedY; 
    }
    isOutOfRightBound(){
        return (this.x + this.radius > 490); 
    }
    isOutOfLeftBound(){
        return (this.x - this.radius < 10);   
    }
}

class Racket{
    constructor(x, y, width, height, up, down){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.upKey = up;
        this.downKey = down;
        this.velocity = 0;
        document.addEventListener("keydown", (event) => {
            if (event.key === this.upKey) this.velocity = -1;
            if (event.key === this.downKey) this.velocity = 1;
        });
        document.addEventListener("keyup", (event) => {
            if (event.key === this.upKey && this.velocity == -1) this.velocity = 0;
            if (event.key === this.downKey && this.velocity == 1) this.velocity = 0;
        });
    }
    renderRacket(ctx){
        ctx.fillStyle = 'green';
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    move(){
        this.y = this.y + this.velocity * 5;
        if (this.y < 0){
            this.y = 0;
        }
        if((this.y + this.height) > 500){
            this.y = 500 - this.height;
        }
    }
    canDefend(ball){
       return ball.y >= this.y && ball.y <= this.y + this.height;
    }
}

const game = new Game();
game.play();











