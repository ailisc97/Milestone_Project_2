class Vector
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

class Rectangle
{
    constructor(x = 0, y = 0)
    {
        this.pos = new Vector(0, 0);
        this.size = new Vector(x, y);
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

class Ball extends Rectangle
{
    constructor()
    {
        super(10, 10);
        this.vel = new Vector;
    }
}

class User extends Rectangle
{
    constructor()
    {
        super(20, 100);
        this.vel = new Vector;
        this.score = 0;

        this._lastPos = new Vector;
    }
    update(dt)
    {
        this.vel.y = (this.pos.y - this._lastPos.y) / dt;
        this._lastPos.y = this.pos.y;
    }
}
