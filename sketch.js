
let margin = 20; 
let canvasWidth = 700;
let canvasHeight = 520;
let colors = ["#00ACA5", "#000306", "#FFFFFF", "#F9EB48", "#FC5C1C", "#94C4F5", "#FE7A41", 
  "#F23027", "#FFE455", "#5377D0", "#92C3F5", "#00ACA5"];


function setup() {
  // put setup code here
  createCanvas(canvasWidth,canvasHeight); 
  noLoop();
}

function draw() {
  // put drawing code here

  background(40)
  strokeWeight(0);

  let offsetX = (width - (canvasWidth - 2 * margin)) / 2;
  let offsetY = (height - (canvasHeight - 2 * margin)) / 2;
  
  fill(random(colors)); 
  rect(offsetX + margin + 0, offsetY + margin + 0, 100, 100);

  fill("#000306");
  rect(offsetX + margin + 100, offsetY + margin + 0, 100, 50);
  
  fill("#FFFFFF");
  rect(offsetX + margin + 200, offsetY + margin + 0, 50, 50);

  fill("#000306");
  rect(offsetX + margin + 250, offsetY + margin + 0, 100, 50);

  fill(random(colors)); 
  rect(offsetX + margin + 350, offsetY + margin + 0, 50, 50);

  fill("#000306");
  rect(offsetX + margin + 400, offsetY + margin + 0, 100, 50);

  fill(random(colors)); 
  rect(offsetX + margin + 500, offsetY + margin + 0, 50, 50);

  fill("#000306");
  rect(offsetX + margin + 550, offsetY + margin + 0, 50, 50);

  fill("#000306");
  rect(offsetX + margin + 100, offsetY + margin + 50, 50, 50);

  fill("#FFFFFF");
  rect(offsetX + margin + 150, offsetY + margin + 50, 50, 50);

  fill("#000306");
  rect(offsetX + margin + 200, offsetY + margin + 50, 100, 50);

  fill(random(colors)); 
  rect(offsetX + margin + 300, offsetY + margin + 50, 50, 50);

  fill("#FFFFFF");
  rect(offsetX + margin + 350, offsetY + margin + 50, 100, 100);
  drawCheckers(offsetX + margin + 350, offsetY + margin + 50, 100, 100, 10); // 棋盘格不变

  fill(random(colors)); 
  rect(offsetX + margin + 450, offsetY + margin + 50, 50, 50);

  fill("#FFFFFF");
  rect(offsetX + margin + 500, offsetY + margin + 50, 50, 50);
  drawCheckers(offsetX + margin + 500, offsetY + margin + 50, 50, 50, 10); // 棋盘格不变

  fill("#FFFFFF");
  rect(offsetX + margin + 550, offsetY + margin + 50, 50, 50);

  fill("#000306");
  rect(offsetX + margin + 0, offsetY + margin + 100, 100, 150);

  fill(random(colors)); 
  rect(offsetX + margin + 100, offsetY + margin + 100, 50, 50);

  fill("#000306");
  rect(offsetX + margin + 150, offsetY + margin + 100, 50, 50);

  fill("#FFFFFF");
  rect(offsetX + margin + 200, offsetY + margin + 100, 100, 100);

  fill("#000306");
  rect(offsetX + margin + 300, offsetY + margin + 100, 50, 50);

  fill("#000306");
  rect(offsetX + margin + 450, offsetY + margin + 100, 50, 50);

  fill("#FFFFFF");
  rect(offsetX + margin + 500, offsetY + margin + 100, 50, 50);

  fill("#000306");
  rect(offsetX + margin + 550, offsetY + margin + 100, 50, 50);

  fill(random(colors)); 
  rect(offsetX + margin + 100, offsetY + margin + 150, 100, 100);

  fill("#000306");
  rect(offsetX + margin + 300, offsetY + margin + 150, 150, 50);

  fill("#FFFFFF");
  rect(offsetX + margin + 450, offsetY + margin + 150, 50, 50);

  fill("#000306");
  rect(offsetX + margin + 500, offsetY + margin + 150, 50, 50);

  fill("#FFFFFF");
  rect(offsetX + margin + 550, offsetY + margin + 150, 50, 50);

  fill("#000306");
  rect(offsetX + margin + 200, offsetY + margin + 200, 100, 100);

  fill("#FFFFFF");
  rect(offsetX + margin + 300, offsetY + margin + 200, 100, 100);

  fill("#000306");
  rect(offsetX + margin + 400, offsetY + margin + 200, 200, 100);

  fill(random(colors)); 
  rect(offsetX + margin + 500, offsetY + margin + 200, 50, 50);

  fill("#FFFFFF");
  rect(offsetX + margin + 0, offsetY + margin + 250, 200, 150);
  drawCheckers(offsetX + margin + 0, offsetY + margin + 250, 200, 150, 25); // 棋盘格不变

  fill(random(colors)); 
  rect(offsetX + margin + 450, offsetY + margin + 250, 50, 50);

  fill(random(colors)); 
  rect(offsetX + margin + 200, offsetY + margin + 300, 100, 100);

  fill("#000306");
  rect(offsetX + margin + 300, offsetY + margin + 300, 100, 100);

  fill("#FFFFFF");
  rect(offsetX + margin + 400, offsetY + margin + 300, 200, 100);
  drawCheckers(offsetX + margin + 400, offsetY + margin + 300, 200, 100, 12.5); // 棋盘格不变

  fill(random(colors)); 
  rect(offsetX + margin + 400, offsetY + margin + 300, 50, 50);
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
