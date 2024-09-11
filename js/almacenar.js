document.addEventListener('DOMContentLoaded', () => {
    const storedItems = localStorage.getItem('items');
    const items = storedItems ? JSON.parse(storedItems) : [];
    renderItems(items);
  });
  
  function renderItems(items) {
    const contenedor = document.getElementById('contenedor');
    contenedor.innerHTML = '';
    items.forEach(item => {
      const li = document.createElement('li');
      li.className = 'list-group-item';
      li.textContent = item;
      contenedor.appendChild(li);
    });
  }
  
  document.getElementById('agregar').addEventListener('click', () => {
    const input = document.getElementById('item');
    const newItem = input.value.trim();
    if (newItem) {
      const storedItems = localStorage.getItem('items');
      const items = storedItems ? JSON.parse(storedItems) : [];
      items.push(newItem);
      localStorage.setItem('items', JSON.stringify(items));
      renderItems(items);
      input.value = '';
    }
  });
  
  document.getElementById('limpiar').addEventListener('click', () => {
    localStorage.removeItem('items');
    renderItems([]);
  });
  