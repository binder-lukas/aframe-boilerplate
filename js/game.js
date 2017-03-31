  /*
 * COOKIE_SIZEs --> The yellow points to collect
 * Colors --> all colors for all elements
 * dimensions --> The dimensions for each element
 * spritepaths --> the relative paths to the sprites
 * Game contains general game data such as the current score...
 */

// The game field
// Codes:
//  0 ->  EMPTY
//  1 ->  Cookie
//  2 ->  Wall
//  3 ->  Ghost door
var fieldPreset = [
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2], // wall top
    [2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2], // first row
    [2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2], // row w/box
    [2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2], // row w/box
    [2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2], // row w/box
    [2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2], // row w/cookies
    [2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2],
    [2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2],
    [2, 2, 1, 1, 1, 1, 1, 1, 2, 2, 1, 1, 1, 1, 2, 2, 1, 1, 1, 1, 2, 2, 1, 1, 1, 1, 1, 1, 2, 2],
    [0, 0, 0, 0, 0, 0, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 2, 1, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 2, 0, 0, 0, 0, 0, 0]
    [0, 0, 0, 0, 0, 0, 2, 1, 2, 2, 1, 2, 2, 2, 3, 3, 2, 2, 2, 1, 2, 2, 1, 2, 0, 0, 0, 0, 0, 0],
    [2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2],
    [0, 0, 0, 0, 0, 2, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 2, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 2, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 2, 0, 0, 0, 0, 0, 0],

    [0, 0, 0, 0, 0, 2, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 2, 0, 0, 0, 0, 0, 0]
    [0, 0, 0, 0, 0, 2, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 2, 0, 0, 0, 0, 0, 0],
    [2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2],
    [0, 0, 0, 0, 0, 0, 2, 1, 2, 2, 1, 2, 2, 2, 3, 3, 2, 2, 2, 1, 2, 2, 1, 2, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 2, 1, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 2, 0, 0, 0, 0, 0, 0]
    [0, 0, 0, 0, 0, 0, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 0, 0, 0, 0, 0, 0],
    [2, 2, 1, 1, 1, 1, 1, 1, 2, 2, 1, 1, 1, 1, 2, 2, 1, 1, 1, 1, 2, 2, 1, 1, 1, 1, 1, 1, 2, 2],
    [2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2],
    [2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2],
    [2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2], // row w/cookies
    [2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2], // row w/box
    [2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2], // row w/box
    [2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2], // row w/box
    [2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2], // first row
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2] // wall top
];
var currentField = fieldPreset;

var colors = {
    COOKIE_SIZE: 'rgb(219,133,28)',
    GHOST_BACKGROUND: 'rgb(255, 255, 255)',
    PLANE_FLOOR: 'rgb(0,0,0)',
    OUTER_WALL: 'rgb(0,0,240)',
    INNER_WALL: 'rgb(255,255,255)'
};
// Element size in meters
var dimensions = {
    COOKIE_SIZE: 0.2,
    COOKIE_POS_Z: 1,
    GHOST_WIDTH: 0.75,
    GHOST_HEIGHT: 0.75,
    LEVEL_WIDTH: 30,
    LEVEL_HEIGHT: 30,
    WALL_POS_Z: 1,
    WALL_HEIGHT: 2
};
var spritepaths = {
    GHOST: './sprites/GHOST_RED.png'
};

function Game() {
    this.currentScore = 0;
    this.collectCookieRewardPoints = 1;

    this.setup = function() {
        // Setup level
        // Floor
        document.getElementById('plane').setAttribute('color', colors.PLANE_FLOOR);
        document.getElementById('plane').setAttribute('height', dimensions.LEVEL_HEIGHT);
        document.getElementById('plane').setAttribute('width', dimensions.LEVEL_WIDTH);
        // Outer walls
        document.getElementById('wall-1').setAttribute('color', colors.OUTER_WALL);
        document.getElementById('wall-2').setAttribute('color', colors.OUTER_WALL);
        document.getElementById('wall-3').setAttribute('color', colors.OUTER_WALL);
        document.getElementById('wall-4').setAttribute('color', colors.OUTER_WALL);

        // Draw field
        for (var i = 0; i < fieldPreset.length; i++) {
            for (var j = 0; j < fieldPreset[i].length; j++) {
                var type = fieldPreset[i][j];
                if (type == 0) {
                    currentField[i][j] = false;
                } else if (type == 1) {
                    let c = new Cookie(i + "" + j, coord(i)+2, 1, coord(j));
                    currentField[i][j] = c;
                } else if (type == 2) {
                    let w = new Wall(i + "" + j, coord(i)+2, 1, coord(j));
                    currentField[i][j] = w;
                }
            }
        }
    };
    this.setup();
}

function coord(x) {
    return x - 15;
}

/* END OF CONFIGURATION */
var g = new Game(); // Global game object

function Wall(id, posX, posY, posZ, height) {
    var x = posX || 0;
    var y = posY || 0;
    var z = posZ || dimensions.WALL_POS_Z;
    this.element = document.createElement("a-box");
    this.element.id = "wall-" + id;
    this.element.setAttribute('color', colors.INNER_WALL);
    this.setX = function(positionX) {
        x = positionX;
        this.update();
    };
    this.setY = function(positionY) {
        y = positionY;
        this.update();
    };
    this.setZ = function(positionZ) {
        z = positionZ;
        this.update();
    };
    this.update = function() {
        this.element.setAttribute('position', x + " " + y + " " + z);
        this.element.setAttribute('height', dimensions.WALL_HEIGHT);
        this.element.setAttribute('width', 1);

    };
    this.update();
    document.getElementsByTagName("a-scene")[0].appendChild(this.element);


}

function Cookie(id, posX, posY, posZ, radius) {
    var x = posX || 0;
    var y = posY || 0;
    var z = posZ || dimensions.COOKIE_POS_Z;
    var r = radius || dimensions.COOKIE_SIZE;
    this.element = document.createElement("a-sphere");
    this.element.id = "cookie-" + id;
    this.element.setAttribute('color', colors.COOKIE_SIZE);

    this.setX = function(positionX) {
        x = positionX;
        this.update();
    };
    this.setY = function(positionY) {
        y = positionY;
        this.update();
    };
    this.setZ = function(positionZ) {
        z = positionZ;
        this.update();
    };

    this.update = function() {
        this.element.setAttribute('position', x + " " + y + " " + z);
        this.element.setAttribute('radius', r);
    };

    this.collected = false;
    this.collect = function() {
        this.setAlive(false);
    };
    this.setAlive = function(collected) {
        this.collected = collected;
        collected = collected || true;
        if (!collected) {
            this.update();
            document.getElementsByTagName("a-scene")[0].appendChild(this.element);
        } else {
            g.currentScore += g.collectCookieRewardPoints;
            this.element.parentNode.removeChild(this.element); // Remove DOM element
        }
    }
    this.update();
    document.getElementsByTagName("a-scene")[0].appendChild(this.element);
}

function Pacman() {

}

function Ghost(id, posX, posY, posZ, width, height) {
    var x = posX || 0;
    var y = posY || 0;
    var z = posZ || 0;
    var width = width || dimensions.GHOST_WIDTH;
    var height = height || dimensions.GHOST_HEIGHT;
    this.alive = true;

    this.element = document.createElement("a-box");
    this.element.id = "ghost-" + id;
    this.element.setAttribute('color', colors.GHOST_BACKGROUND);

    this.setX = function(positionX) {
        x = positionX;
        this.update();
    };
    this.setY = function(positionY) {
        y = positionY;
        this.update();
    };
    this.setZ = function(positionZ) {
        z = positionZ;
        this.update();
    };

    this.update = function() {
        this.element.setAttribute('src', 'https://static.giantbomb.com/uploads/scale_small/8/87790/2469740-blinky.png');
        this.element.setAttribute('position', x + " " + y + " " + z);
        this.element.setAttribute('width', width);
        this.element.setAttribute('height', height);
    };

    this.kill = function() {
        this.alive = false;
        this.update();

        this.collected = true;
        this.element.parentNode.removeChild(this.element);
    };
    this.revive = function() {
        this.update();
        this.alive = true;
        document.getElementsByTagName("a-scene")[0].appendChild(this.element);
    };

    this.update();

    document.getElementsByTagName("a-scene")[0].appendChild(this.element);
}
