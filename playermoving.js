var canvas;/ / the canvas element which will draw on
var ctx;/ / the "context" of the canvas that will be used (2D or 3D)
var dx = 50;/ / the rate of change (speed) horizontal object
var x = 30;/ / horizontal position of the object (with initial value)
var y = 0;/ / vertical position of the object (with initial value)
var WIDTH = 1000;/ / width of the rectangular area
var HEIGHT = 340;/ / height of the rectangular area
var tile1 = new Image ();/ / Image to be loaded and drawn on canvas
var posicao = 0;/ / display the current position of the character
var NUM_POSICOES = 6;/ / Number of images that make up the movement
