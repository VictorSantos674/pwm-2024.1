let queue = [];

function enqueue() {
  const inputValue = document.getElementById('inputValue').value;
  const color = document.getElementById('colorPicker').value;
  queue.push({ value: inputValue, color: color });
  renderQueue();
}

function dequeue() {
  queue.shift();
  renderQueue();
}

function sortQueue() {
  queue.sort((a, b) => {
    return parseInt(a.value) - parseInt(b.value);
  });
  renderQueue();
}

function renderQueue() {
  const queueElement = document.getElementById('queue');
  queueElement.innerHTML = '';
  queue.forEach(item => {
    const div = document.createElement('div');
    div.classList.add('queue-item');
    div.style.backgroundColor = item.color;
    div.textContent = item.value;
    queueElement.appendChild(div);
  });
}