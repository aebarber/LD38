export default class Rocket {

    constructor (x, y, angle, owner) {

        // this is a virtual class, do not construct it.

    }

    destroy () {

        this.sprite.destroy();
        this.live = false;
        return true;

    }

    init (x, y, angle, owner) {

        this.live = true;

        this.sprite = game.add.sprite(x, y, 'rocket');

        this.sprite.anchor.setTo(0.5, 0.5);

        this.sprite.scale.setTo(gameScaleBase, gameScaleBase);
        this.scale = gameScaleBase;

        this.sprite.animations.add('default', this.frames);
        this.sprite.animations.play('default', 3, true);

        this.sprite.angle = angle;

        game.physics.arcade.enable(this.sprite);
        this.sprite.collideWorldBounds = false;

        this.angle = angle;
        this.owner = owner;
        this.velocity = 50;

    }

    get x () {
        return this.sprite.x;
    }

    get y () {
        return this.sprite.y;
    }

    set x (pos) {
        this.sprite.x = pos;
        return true;
    }

    set y (pos) {
        this.sprite.y = pos;
        return true;
    }

    update () {

        if (this.velocity < 300) {
            this.velocity += 10;
        }

        this.sprite.body.velocity.x =
            this.velocity * gameScaleBase * Math.cos(this.angle);
        this.sprite.body.velocity.y =
            this.velocity * gameScaleBase * Math.sin(this.angle);

    }

}