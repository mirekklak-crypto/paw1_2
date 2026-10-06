const draggableItem = document.getElementById("ex3_element");
const targetContainer = document.getElementById("ex3_two");

draggableItem.addEventListener("dragstart", (e) => {
  e.dataTransfer.setData("text/plain", e.target.id);
});

targetContainer.addEventListener("dragover", (e) => {
  e.preventDefault();
});

targetContainer.addEventListener("drop", (e) => {
  e.preventDefault();
  const id = e.dataTransfer.getData("text/plain");
  const elementToMove = document.getElementById(id);

  if (elementToMove) {
    targetContainer.appendChild(elementToMove);
  }
});
