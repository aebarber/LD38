import addEvent from '../function/addEvent.js';

export default class Crosshair {

    constructor () {

        var self = this;

        // create the sprite
        this.sprite = game.add.sprite(-100, -100, 'crosshair-normal');
        this.sprite.anchor.setTo(0.5, 0.5);
        this.sprite.scale.setTo(1, 1);

        // track mouse movement
        game.input.addMoveCallback(function (pointer, x, y) {
            self.update(pointer, x, y);
        });

        // detect when mouse leaves screen
        addEvent(document, 'mouseout', function () {
            self.hide();
        });

        // detect when mouse re-enters screen
        addEvent(document, 'mouseover', function () {
            self.show();
        });

    }

    hide () {
        this.sprite.visible = false;
    }

    show () {
        this.sprite.visible = true;
    }

    // mouse movement callback
    update (pointer, x, y) {
        this.sprite.x = x;
        this.sprite.y = y;
    }

}