/* Новые элементы должны добавляться в список по нажатию на Enter */

/* Пустые элементы не должны добавляться */

/* Если кликнуть на элемент списка, он зачеркивается */

/* Если кликнуть повторно уже на зачеркнутый, он снова становится обычным */

/* Очищать input после добавления нового элемента в список */


const sendInput = document.querySelector('#input');
const groceriesContainer = document.querySelector('.items');


sendInput.addEventListener('keydown', function(event) {
    if (event.key == 'Enter') {
        const groceriesText = sendInput.value;

        const newGrocery = document.createElement('li');
        newGrocery.classList.add('items');
        newGrocery.textContent = groceriesText;
        newGrocery.addEventListener('click', function() {
            newGrocery.classList.toggle('done');
        });

        if (groceriesText != '') {
            groceriesContainer.append(newGrocery);
        }

        sendInput.value = '';

    }

});