export default class Asteroid {

    constructor (x, y, angle, rotationalVelocity, size, velocity) {

        this.live = true;

        this.angle = angle;
        this.rotationalVelocity = rotationalVelocity;
        this.size = size;
        this.velocity = velocity;

        this.health = 50 * size;

        this.sprite = game.add.sprite(x, y, 'asteroid');
        this.sprite.frame = Math.floor(Math.random() * 4.9999);
        enemies.add(this.sprite);

        this.sprite.anchor.setTo(0.5, 0.5);

        game.physics.arcade.enable(this.sprite);
        this.sprite.body.enable = true;
        this.sprite.body.collideWorldBounds = false;

        this.sprite.scale.setTo(gameScaleBase * size * 3, gameScaleBase * size * 3);

        this.sprite.body.velocity.x =
            this.velocity * gameScaleBase * Math.cos(this.angle);
        this.sprite.body.velocity.y =
            this.velocity * gameScaleBase * Math.sin(this.angle);

    }

    destroy () {

        this.sprite.destroy();
        this.live = false;
        return true;

    }

    get x () {
        return this.sprite.x;
    }

    get y () {
        return this.sprite.y;
    }

    set x (x) {
        this.sprite.x = x;
        return true;
    }

    set y (y) {
        this.sprite.y = y;
        return true;
    }

    update () {

        if (this.health <= 0) {
            this.destroy();
        }
        this.sprite.angle += (this.rotationalVelocity * (180 / Math.PI) + 90) / 60;

    }

}
