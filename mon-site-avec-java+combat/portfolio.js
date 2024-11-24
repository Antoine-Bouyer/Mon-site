const listItems = document.querySelectorAll('li');// Sélectionner tous les éléments <li>

const divElements = document.querySelectorAll('div');// Sélectionner toutes les <div>

listItems.forEach(li => {// Ajouter un événement click à chaque <li>
  li.addEventListener('click', function () {
    listItems.forEach(item => item.classList.remove('tab-active'));// Retirer la classe "tabactive" de tous les <li>
    divElements.forEach(div => div.classList.remove('active'));// Retirer la classe "active" de toutes les <div>
    this.classList.add('tab-active');// Ajouter la classe "tab-active" à l'élément actuel (this)
  });
});