const subjectInput = document.getElementById('subjectInput');
const addButton = document.getElementById('addButton');
const subjectList = document.getElementById('subjectList');

addButton.onclick = function() {
    const subjectText = subjectInput.value;
    if (subjectText) {
        const listItem = document.createElement('li');
        listItem.textContent = subjectText;
        listItem.onclick = function() {
            listItem.remove();
        };
        subjectList.insertBefore(listItem, subjectList.firstChild);
        subjectInput.value = '';
    }
};
