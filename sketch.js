
let margin = 20; 
let colors = ["#00ACA5", "#000306", "#FFFFFF", "#F9EB48", "#FC5C1C", "#94C4F5", "#FE7A41", 
  "#F23027", "#FFE455", "#5377D0", "#92C3F5", "#00ACA5"];
let baseWidth = 700;  
let baseHeight = 520; 
let scaleFactor; 

function setup() {
  createCanvas(windowWidth, windowHeight); 
  noLoop();
}

function draw() {
  background(40);
  strokeWeight(0);

  // 计算缩放比例
  scaleFactor = min(windowWidth / baseWidth, windowHeight / baseHeight);

  // 偏移量计算，确保图案居中
  let offsetX = (windowWidth - baseWidth * scaleFactor) / 2;
  let offsetY = (windowHeight - baseHeight * scaleFactor) / 2;

  // 使用缩放比例绘制图案
  drawPattern(offsetX, offsetY, scaleFactor);
}

function drawPattern(offsetX, offsetY, scale) {
  fill(random(colors));
  rect(offsetX + margin * scale + 0, offsetY + margin * scale + 0, 100 * scale, 100 * scale);

  fill("#000306");
  rect(offsetX + margin * scale + 100 * scale, offsetY + margin * scale + 0, 100 * scale, 50 * scale);
  
  fill("#FFFFFF");
  rect(offsetX + margin * scale + 200 * scale, offsetY + margin * scale + 0, 50 * scale, 50 * scale);

  fill("#000306");
  rect(offsetX + margin * scale + 250 * scale, offsetY + margin * scale + 0, 100 * scale, 50 * scale);

  fill(random(colors));
  rect(offsetX + margin * scale + 350 * scale, offsetY + margin * scale + 0, 50 * scale, 50 * scale);

  fill("#000306");
  rect(offsetX + margin * scale + 400 * scale, offsetY + margin * scale + 0, 100 * scale, 50 * scale);

  fill(random(colors));
  rect(offsetX + margin * scale + 500 * scale, offsetY + margin * scale + 0, 50 * scale, 50 * scale);

  fill("#000306");
  rect(offsetX + margin * scale + 550 * scale, offsetY + margin * scale + 0, 50 * scale, 50 * scale);

  fill("#000306");
  rect(offsetX + margin * scale + 100 * scale, offsetY + margin * scale + 50 * scale, 50 * scale, 50 * scale);

  fill("#FFFFFF");
  rect(offsetX + margin * scale + 150 * scale, offsetY + margin * scale + 50 * scale, 50 * scale, 50 * scale);

  fill("#000306");
  rect(offsetX + margin * scale + 200 * scale, offsetY + margin * scale + 50 * scale, 100 * scale, 50 * scale);

  fill(random(colors));
  rect(offsetX + margin * scale + 300 * scale, offsetY + margin * scale + 50 * scale, 50 * scale, 50 * scale);

  fill("#FFFFFF");
  rect(offsetX + margin * scale + 350 * scale, offsetY + margin * scale + 50 * scale, 100 * scale, 100 * scale);
  drawCheckers(offsetX + margin * scale + 350 * scale, offsetY + margin * scale + 50 * scale, 100 * scale, 100 * scale, 10 * scale);

  fill(random(colors));
  rect(offsetX + margin * scale + 450 * scale, offsetY + margin * scale + 50 * scale, 50 * scale, 50 * scale);

  fill("#FFFFFF");
  rect(offsetX + margin * scale + 500 * scale, offsetY + margin * scale + 50 * scale, 50 * scale, 50 * scale);
  drawCheckers(offsetX + margin * scale + 500 * scale, offsetY + margin * scale + 50 * scale, 50 * scale, 50 * scale, 10 * scale);

  fill("#FFFFFF");
  rect(offsetX + margin * scale + 550 * scale, offsetY + margin * scale + 50 * scale, 50 * scale, 50 * scale);

  fill("#000306");
  rect(offsetX + margin * scale + 0 * scale, offsetY + margin * scale + 100 * scale, 100 * scale, 150 * scale);

  fill(random(colors));
  rect(offsetX + margin * scale + 100 * scale, offsetY + margin * scale + 100 * scale, 50 * scale, 50 * scale);

  fill("#000306");
  rect(offsetX + margin * scale + 150 * scale, offsetY + margin * scale + 100 * scale, 50 * scale, 50 * scale);

  fill("#FFFFFF");
  rect(offsetX + margin * scale + 200 * scale, offsetY + margin * scale + 100 * scale, 100 * scale, 100 * scale);

  fill("#000306");
  rect(offsetX + margin * scale + 300 * scale, offsetY + margin * scale + 100 * scale, 50 * scale, 50 * scale);

  fill("#000306");
  rect(offsetX + margin * scale + 450 * scale, offsetY + margin * scale + 100 * scale, 50 * scale, 50 * scale);

  fill("#FFFFFF");
  rect(offsetX + margin * scale + 500 * scale, offsetY + margin * scale + 100 * scale, 50 * scale, 50 * scale);

  fill("#000306");
  rect(offsetX + margin * scale + 550 * scale, offsetY + margin * scale + 100 * scale, 50 * scale, 50 * scale);

  fill(random(colors));
  rect(offsetX + margin * scale + 100 * scale, offsetY + margin * scale + 150 * scale, 100 * scale, 100 * scale);

  fill("#000306");
  rect(offsetX + margin * scale + 300 * scale, offsetY + margin * scale + 150 * scale, 150 * scale, 50 * scale);

  fill("#FFFFFF");
  rect(offsetX + margin * scale + 450 * scale, offsetY + margin * scale + 150 * scale, 50 * scale, 50 * scale);

  fill("#000306");
  rect(offsetX + margin * scale + 500 * scale, offsetY + margin * scale + 150 * scale, 50 * scale, 50 * scale);

  fill("#FFFFFF");
  rect(offsetX + margin * scale + 550 * scale, offsetY + margin * scale + 150 * scale, 50 * scale, 50 * scale);

  fill("#000306");
  rect(offsetX + margin * scale + 200 * scale, offsetY + margin * scale + 200 * scale, 100 * scale, 100 * scale);

  fill("#FFFFFF");
  rect(offsetX + margin * scale + 300 * scale, offsetY + margin * scale + 200 * scale, 100 * scale, 100 * scale);

  fill("#000306");
  rect(offsetX + margin * scale + 400 * scale, offsetY + margin * scale + 200 * scale, 200 * scale, 100 * scale);

  fill(random(colors));
  rect(offsetX + margin * scale + 500 * scale, offsetY + margin * scale + 200 * scale, 50 * scale, 50 * scale);

  fill("#FFFFFF");
  rect(offsetX + margin * scale + 0 * scale, offsetY + margin * scale + 250 * scale, 200 * scale, 150 * scale);
  drawCheckers(offsetX + margin * scale + 0 * scale, offsetY + margin * scale + 250 * scale, 200 * scale, 150 * scale, 25 * scale);

  fill(random(colors));
  rect(offsetX + margin * scale + 450 * scale, offsetY + margin * scale + 250 * scale, 50 * scale, 50 * scale);

  fill(random(colors));
  rect(offsetX + margin * scale + 200 * scale, offsetY + margin * scale + 300 * scale, 100 * scale, 100 * scale);

  fill("#000306");
  rect(offsetX + margin * scale + 300 * scale, offsetY + margin * scale + 300 * scale, 100 * scale, 100 * scale);

  fill("#FFFFFF");
  rect(offsetX + margin * scale + 400 * scale, offsetY + margin * scale + 300 * scale, 200 * scale, 100 * scale);
  drawCheckers(offsetX + margin * scale + 400 * scale, offsetY + margin * scale + 300 * scale, 200 * scale, 100 * scale, 12.5 * scale);

  fill(random(colors));
  rect(offsetX + margin * scale + 400 * scale, offsetY + margin * scale + 300 * scale, 50 * scale, 50 * scale);
}


function drawCheckers(x, y, w, h, size) {
  let rows = h / size;
  let cols = w / size;
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if ((i + j) % 2 == 0) {
        fill("#000306"); 
      } else {
        fill("#FFFFFF"); 
      }
      rect(x + j * size, y + i * size, size, size);
    }
  }
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  redraw(); // 
}

