const colorOptions = document.querySelectorAll('.color');
const guessSlots = document.querySelectorAll('.guess-slot');

// Ajout d'un écouteur d'événement de type "dragstart" à chaque option de couleur
colorOptions.forEach(colorOption => {
  colorOption.addEventListener('dragstart', event => {
    event.dataTransfer.setData('color', event.target.classList[1]);
  });
});

// Ajout d'un écouteur d'événement de type "dragover" à chaque emplacement de devinette
guessSlots.forEach(guessSlot => {
  guessSlot.addEventListener('dragover', event => {
    event.preventDefault();
    guessSlot.classList.add('active');
  });
});

// Ajout d'un écouteur d'événement de type "dragleave" à chaque emplacement de devinette
guessSlots.forEach(guessSlot => {
  guessSlot.addEventListener('dragleave', event => {
    guessSlot.classList.remove('active');
  });
});

// Ajout d'un écouteur d'événement de type "drop" à chaque emplacement de devinette
guessSlots.forEach(guessSlot => {
  guessSlot.addEventListener('drop', event => {
    event.preventDefault();
    const color = event.dataTransfer.getData('color');
    guessSlot.classList.remove('active');
    guessSlot.classList.add(color);
  });
});