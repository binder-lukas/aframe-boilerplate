/*
 * Cookies --> The yellow points to collect
 *
 *
 */
var colors = {
    COOKIE: 'rgba(219,133,28)'
};
// Element size in meters
var sizes = {
    COOKIE: 0.35
};

function Game() {
    this.currentScore = 0;
    this.collectCookiePoints = 1;
}

/* END OF CONFIGURATION */
var g = new Game(); // Global game object

function Cookie(id, posX, posY, posZ, radius) {
    this.element = document.createElement("a-sphere");
    this.element.id = "cookie-" + id;
    this.element.setAttribute('color', colors.COOKIE);

    var x = posX || 0;
    var y = posY || 0;
    var z = posZ || 0;
    var r = radius || sizes.COOKIE;

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
      this.element.setAttribute('radius',r);
    };

    this.collected = false;
    this.collect = function() {
        this.collected = true;
        g.currentScore += g.collectCookiePoints;
        this.element.parentNode.removeChild(this.element); // Remove DOM element
    };
    this.update();
    document.getElementsByTagName("a-scene")[0].appendChild(this.element);
}

function Pacman() {

}

function Ghost() {

}
