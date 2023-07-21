function drawCircularGraph(percentage) {
    const canvas2 = document.getElementById('circularGraph2');
    const ctx = canvas2.getContext('2d');
    const centerX = canvas2.width / 2;
    const centerY = canvas2.height / 2;
    const radius = canvas2.width / 2 - 10;
    const startAngle = Math.PI * -0.5;
    const endAngle = Math.PI * 2 * (percentage / 100) - Math.PI * 0.5;
    
    // Clear the canvas2
    ctx.clearRect(0, 0, canvas2.width, canvas2.height);

    // Draw the background circle
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
    ctx.strokeStyle = '#f3f3f3';
    ctx.lineWidth = 10;
    ctx.stroke();

    // Draw the filled part
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, startAngle, endAngle);
    ctx.strokeStyle = '#4CAF50'; // Green color for filled part
    ctx.lineWidth = 10;
    ctx.stroke();
  }

  drawCircularGraph(95);