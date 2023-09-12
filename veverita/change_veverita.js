document.getElementById('button-89').addEventListener('click', function() {
    const backgroundContainer = document.getElementById('backgroundContainer');
    
    // Check the current background image and toggle to the other one
    if (backgroundContainer.style.backgroundImage === 'url("imagini_veverite/sqn.png")') {
      backgroundContainer.style.backgroundImage = 'url("imagini_veverite/sq.png")';
      const paragraph = document.getElementById('paragraph');
      paragraph.textContent = 'This Squirrel does not have my Nuts.';

      
    } else {
      backgroundContainer.style.backgroundImage = 'url("imagini_veverite/sqn.png")';
      const paragraph = document.getElementById('paragraph');
      paragraph.textContent = 'This squirrel eats my Nuts.';
    }
  });
  