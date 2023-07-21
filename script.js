const slider1 = document.getElementById('mySlider1');
    const percentageFilled1 = document.getElementById('percentageFilled1');

    // Update the percentage-filled text and the blue overlay when the slider value changes
    slider1.addEventListener('input', () => {
      const value = slider1.value;
      percentageFilled1.textContent = `${value}%`;
      slider1.style.setProperty('--percentage', `${value}%`);
    });


const slider2 = document.getElementById('mySlider2');
    const percentageFilled2 = document.getElementById('percentageFilled2');

    // Update the percentage-filled text and the blue overlay when the slider value changes
    slider2.addEventListener('input', () => {
      const value = slider2.value;
      percentageFilled2.textContent = `${value}`;
      slider2.style.setProperty('--percentage', `${value}%`);
    });