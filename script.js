document.addEventListener('DOMContentLoaded', function () {

  const colorBox = document.getElementById('color-box');
  const changeColorBtn = document.getElementById('change-color-btn');
  const hexLabel = document.getElementById('hex-label');

  /**
   * Generates a random hexadecimal color string.
   * @returns {string} e.g. "#A3F2C1"
   */
  function getRandomColor() {
    const hex = Math.floor(Math.random() * 0xFFFFFF)
      .toString(16)
      .padStart(6, '0');
    return '#' + hex.toUpperCase();
  }

  /**
   * Updates the button's offset shadow color to match the box.
   * @param {string} color - hex color string
   */
  function updateButtonAccent(color) {
    changeColorBtn.style.boxShadow = `4px 4px 0px ${color}`;
  }

  // Click handler
  changeColorBtn.addEventListener('click', function () {
    const newColor = getRandomColor();

    // Apply new background color
    colorBox.style.backgroundColor = newColor;

    // Update hex label text
    hexLabel.textContent = newColor;

    // Sync button shadow accent
    updateButtonAccent(newColor);

    // Trigger pop animation (remove then re-add class)
    colorBox.classList.remove('popping');
    // Force reflow so the browser resets the animation
    void colorBox.offsetWidth;
    colorBox.classList.add('popping');
  });

});