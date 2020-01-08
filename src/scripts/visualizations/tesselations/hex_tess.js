const hexTessVis = ctx => {
  const hexSideLength = 40;
  const lineHeight = Math.floor(hexSideLength * Math.sqrt(3) / 2);
  const midpoint = hexSideLength / 2;
  const numRows = Math.ceil(window.innerWidth / hexSideLength);
  const numCols = Math.ceil(window.innerHeight / lineHeight) / 3;
  const startHeight = window.innerHeight / 3;

  for (let row = 0; row < numRows; row++) {

    for (let col = 0; col < numCols; col++) {
      let x = row * hexSideLength;
      let y = col * lineHeight + startHeight;

      ctx.fillStyle = "#ACC2F1"; // BLUE1
      ctx.strokeStyle = "#ACC2F1"; // BLUE1
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(x + midpoint, y + lineHeight);
      ctx.lineTo(x - midpoint, y + lineHeight);
      ctx.closePath();
      ctx.stroke();
      ctx.fill();
      
      ctx.fillStyle = "#84A7F2"; //BLUE2
      ctx.strokeStyle = "#84A7F2"; //BLUE2
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(x + hexSideLength, y);
      ctx.lineTo(x + midpoint, y + lineHeight);
      ctx.closePath();
      ctx.stroke();
      ctx.fill();
    }
  }
  debugger
}

export default hexTessVis;