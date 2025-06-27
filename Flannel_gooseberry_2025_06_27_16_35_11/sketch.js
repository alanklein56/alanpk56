let plantHeight = 0;

let maxPlantHeight = 150;

let sunX = 50;

let sunY = 80;

function setup() {

  createCanvas(600, 400);

  frameRate(30);

}

function draw() {

  background(135, 206, 235); // Céu azul

  // Desenhar sol

  drawSun(sunX, sunY, 50);

  // Desenhar chão

  fill(85, 107, 47);

  rect(0, height - 50, width, 50);

  // Planta crescendo

  drawPlant(width / 2, height - 50, plantHeight);

  // Crescimento gradual

  if (plantHeight < maxPlantHeight) {

    plantHeight += 0.5;

  }

  // Texto educativo

  fill(0);

  textSize(18);

  textAlign(CENTER);

  text("Agrinho 2025: Cuidar do meio ambiente é cultivar o futuro!", width / 2, 30);

}

// Função para desenhar o sol

function drawSun(x, y, diameter) {

  noStroke();

  fill(255, 204, 0);

  ellipse(x, y, diameter, diameter);

  // Raios do sol

  for (let angle = 0; angle < 360; angle += 45) {

    let x1 = x + cos(radians(angle)) * diameter / 2;

    let y1 = y + sin(radians(angle)) * diameter / 2;

    let x2 = x + cos(radians(angle)) * (diameter / 2 + 15);

    let y2 = y + sin(radians(angle)) * (diameter / 2 + 15);

    stroke(255, 204, 0);

    strokeWeight(3);

    line(x1, y1, x2, y2);

  }

}

// Função para desenhar planta (tronco e folhas)

function drawPlant(x, baseY, h) {

  // Tronco

  stroke(101, 67, 33);

  strokeWeight(8);

  line(x, baseY, x, baseY - h);

  // Folhas

  noStroke();

  fill(34, 139, 34);

  let leafCount = 5;

  for (let i = 0; i < leafCount; i++) {

    let yLeaf = baseY - h + i * (h / leafCount);

    ellipse(x - 15, yLeaf, 30, 20);

    ellipse(x + 15, yLeaf, 30, 20);

  }

}

