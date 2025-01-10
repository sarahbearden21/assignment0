let x_coords = [240, 330, 395.8845727, 420, 395.8845727, 330,
                240, 150, 84.11542732, 60, 84.11542732, 150]

let y_coords = [60, 84.11542732, 150, 240, 330, 395.8845727,
                420, 395.8845727, 330, 240, 150, 84.11542732]

var minute_xs = []

var minute_ys = []

function setup() {
  createCanvas(480, 480);
  frameRate(1);
  noStroke();
  angleMode(DEGREES);
  
  for (var i = 0; i < 60; i++) {
    append(minute_xs, random(120, 350));
    append(minute_ys, random(120, 350));
  }
  
}

function draw() {
  
  var s = second();
  var m = minute();
  var h = hour();
  
  if (h < 12) {
    background(254, 255, 225)
  }
  
  if (h >= 12) {
    background(229, 243, 253);
    h = h - 12;
  }
  
  for (var i = 0; i < h; i++) {
    drawHour(x_coords[i], y_coords[i]);
  }
  
  for (var j = 0; j < m; j++) {
    drawMinute(minute_xs[j], minute_ys[j]);
  }
  
  for (var k = 0; k < s; k++) {
    drawSecond(minute_xs[m], minute_ys[m], s);
  }
  
  if (s == 0){
    print(m)
  }
  
}

function drawHour(x_coord, y_coord) {
  
  fill(150);
  ellipse(x_coord, y_coord, 40, 40);
  
}

function drawMinute(x_coord, y_coord) {
  
  fill(190, 150);
  ellipse(x_coord, y_coord, 30, 30);
  
}

function drawSecond(x_coord, y_coord, s) {
  
  var hourTime = hour();

  if (hourTime < 12) {
    fill(229, 243, 253);
  }

  else if (hourTime >= 12) {
    fill(254, 255, 225);
  }
  
  circle(x_coord, y_coord, s/2);
  
}
