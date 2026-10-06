const draggableItem = document.getElementById('ex3_element');
const containers = [
  document.getElementById('ex3_one'),
  document.getElementById('ex3_two')
];

draggableItem.addEventListener('dragstart', (e) => {
  e.dataTransfer.setData('text/plain', e.target.id);
});

containers.forEach(container => {
  container.addEventListener('dragover', (e) => {
    e.preventDefault();
  });

  container.addEventListener('drop', (e) => {
    e.preventDefault();
    const id = e.dataTransfer.getData('text/plain');
    const draggedElement = document.getElementById(id);

    if (draggedElement) {
      container.appendChild(draggedElement);
    }
  });
});