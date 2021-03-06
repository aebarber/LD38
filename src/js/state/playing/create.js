import Sun from '../../class/Sun.js';
import ASmallWorld from '../../class/ASmallWorld.js';
import AsteroidEmitter from '../../class/AsteroidEmitter.js';
import Crosshair from '../../class/Crosshair.js';
import Controller from '../../class/Controller.js';
import Scoreboard from '../../class/Scoreboard.js';

export default function () {

    // start the physics system
    game.physics.startSystem(Phaser.Physics.ARCADE);

    window.environment = game.add.group();
    window.solidEnvironment = game.add.group();
    window.players = game.add.group();
    window.enemies = game.add.group();
    window.projectiles = game.add.group();
    window.menu = game.add.group();
    window.gui = game.add.group();

    // add a starry background
    window.background = game.add.tileSprite(0, 0, game.world.width, game.world.height, 'space');
    environment.add(background);

    // create the sun (the poorly drawn one)
    window.sun = new Sun(game.world.centerX, game.world.centerY);

    // create the world (the small one)
    window.asmallworld = new ASmallWorld(game.world.centerX, game.world.centerY);

    // create the asteroid emitter
    window.asteroidEmitter = new AsteroidEmitter();

    // create custom pointer
    window.crosshair = new Crosshair();

    // initialize the controller
    window.controller = new Controller(crosshair, asmallworld);

    // initialize the Scoreboard
    window.scoreboard = new Scoreboard();

}
