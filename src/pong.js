class VectorPosition
{
    constructor(x = 0, y = 0)
    {
        this.x = x;
        this.y = y;
    }
    get len()
    {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }
    set len(value) {
        const f = value / this.len;
        this.x *= f;
        this.y *= f;
    }
}

class Paddle
{
    constructor(x = 0, y = 0)
    {
        this.pos = new VectorPosition(0, 0);
        this.size = new VectorPosition(x, y);
    }
    get left()
    {
        return this.pos.x - this.size.x / 2;
    }
    get right()
    {
        return this.pos.x + this.size.x / 2;
    }
    get top()
    {
        return this.pos.y - this.size.y / 2;
    }
    get bottom()
    {
        return this.pos.y + this.size.y / 2;
    }
}

class Puck extends Paddle
{
    constructor()
    {
        super(10, 10);
        this.vectorPosition = new VectorPosition;
    }
}

class Player extends Paddle
{
    constructor()
    {
        super(20, 100);
        this.vectorPosition = new VectorPosition;
        this.score = 0;

        this._lastPos = new VectorPosition;
    }
    update(deltaTime)
    {
        this.vectorPosition.y = (this.pos.y - this._lastPos.y) / deltaTime;
        this._lastPos.y = this.pos.y;
    }
}

class Pong
{
    constructor(canvas)
    {
        this._canvas = canvas;
        this._context = canvas.getContext('2d');

        this.initialSpeed = 250;

        this.ball = new Puck;

        this.users = [
            new Player,
            new Player,
        ];

        this.users[0].pos.x = 40;
        this.users[1].pos.x = this._canvas.width - 40;
        this.users.forEach(p => p.pos.y = this._canvas.height / 2);

        let lastTime = null;
        this._frameCallback = (millis) => {
            if (lastTime !== null) {
                const diff = millis - lastTime;
                this.update(diff / 1000);
            }
            lastTime = millis;
            requestAnimationFrame(this._frameCallback);
        };

        this.CHAR_PIXEL = 10;
        this.CHARS = [
            '111101101101111',
            '010010010010010',
            '111001111100111',
            '111001111001111',
            '101101111001001',
            '111100111001111',
            '111100111101111',
            '111001001001001',
            '111101111101111',
            '111101111001111',
        ].map(str => {
            const canvas = document.createElement('canvas');
            const s = this.CHAR_PIXEL;
            canvas.height = s * 5;
            canvas.width = s * 3;
            const context = canvas.getContext('2d');
            context.fillStyle = '#fff';
            str.split('').forEach((fill, i) => {
                if (fill === '1') {
                    context.fillRect((i % 3) * s, (i / 3 | 0) * s, s, s);
                }
            });
            return canvas;
        });

        this.reset();
    }
    clear()
    {
        this._context.fillStyle = '#000';
        this._context.fillRect(0, 0, this._canvas.width, this._canvas.height);
    }
    collide(user, ball)
    {
        if (user.left < ball.right && user.right > ball.left &&
            user.top < ball.bottom && user.bottom > ball.top) {
            ball.vectorPosition.x = -ball.vectorPosition.x * 1.05;
            const len = ball.vectorPosition.len;
            ball.vectorPosition.y += user.vectorPosition.y * .2;
            ball.vectorPosition.len = len;
        }
    }
    draw()
    {
        this.clear();

        this.drawPaddle(this.ball);
        this.users.forEach(user => this.drawPaddle(user));

        this.drawScore();
    }
    drawPaddle(rect)
    {
        this._context.fillStyle = '#fff';
        this._context.fillRect(rect.left, rect.top, rect.size.x, rect.size.y);
    }
    drawScore()
    {
        const align = this._canvas.width / 3;
        const cw = this.CHAR_PIXEL * 4;
        this.users.forEach((user, index) => {
            const chars = user.score.toString().split('');
            const offset = align * (index + 1) - (cw * chars.length / 2) + this.CHAR_PIXEL / 2;
            chars.forEach((char, pos) => {
                this._context.drawImage(this.CHARS[char|0], offset + pos * cw, 20);
            });
        });
    }
    play()
    {
        const b = this.ball;
        if (b.vectorPosition.x === 0 && b.vectorPosition.y === 0) {
            b.vectorPosition.x = 200 * (Math.random() > .5 ? 1 : -1);
            b.vectorPosition.y = 200 * (Math.random() * 2 - 1);
            b.vectorPosition.len = this.initialSpeed;
        }
    }
    reset()
    {
        const b = this.ball;
        b.vectorPosition.x = 0;
        b.vectorPosition.y = 0;
        b.pos.x = this._canvas.width / 2;
        b.pos.y = this._canvas.height / 2;
    }
    start()
    {
        requestAnimationFrame(this._frameCallback);
    }
    update(deltaTime)
    {
        const cvs = this._canvas;
        const ball = this.ball;
        ball.pos.x += ball.vectorPosition.x * deltaTime;
        ball.pos.y += ball.vectorPosition.y * deltaTime;

        if (ball.right < 0 || ball.left > cvs.width) {
            ++this.users[ball.vectorPosition.x < 0 | 0].score;
            this.reset();
        }

        if (ball.vectorPosition.y < 0 && ball.top < 0 ||
            ball.vectorPosition.y > 0 && ball.bottom > cvs.height) {
            ball.vectorPosition.y = -ball.vectorPosition.y;
        }

        this.users[1].pos.y = ball.pos.y;

        this.users.forEach(user => {
            user.update(deltaTime);
            this.collide(user, ball);
        });

        this.draw();
    }
}

const canvas = document.querySelector('#pong');
const pong = new Pong(canvas);

canvas.addEventListener('click', () => pong.play());

canvas.addEventListener('mousemove', event => {
    const scale = event.offsetY / event.target.getBoundingClientRect().height;
    pong.users[0].pos.y = canvas.height * scale;
});

pong.start();