"use strict";

  let rectangle = {
    x: 250,
    y: 250,
    size: 90,
    angle: 35,
    color1: undefined,
    color2: undefined,

  };

function setup() {
  createCanvas(500, 500);

  background(29,56,67);
  rectangle.color1 = color(248, 146, 163);
  rectangle.color2 = color(70, 182, 283);

}

function draw () {
  push();
  noFill();
  rectangle.lerp = map(cos(rectangle.angle), -1, 1, 0, 1);
  let newColor = lerpColor(rectangle.color2, rectangle.color1, rectangle.lerp);

  stroke(newColor);
  strokeWeight(0.1);
  rectMode(CENTER);
  translate(rectangle.x, rectangle.y);
  rotate(rectangle.angle);
  rect(0, 0, rectangle.size, rectangle.size);
  pop();

  rectangle.x += random(-6,6);
  rectangle.y += random(-6,6);
  rectangle.angle += 0.90;
}
