"use strict";
let listElement = document.querySelector('#app ul');
let inputElement = document.querySelector('#app input');
let buttonElement = document.querySelector('#app button');
let savedList = localStorage.getItem('@taskListing');
let toDoList = savedList !== null && JSON.parse(savedList) || [];
function dataBase() {
    localStorage.setItem('@taskListing', JSON.stringify(toDoList)); //JSON.stringify transforma meu array em string
}
function printTasks() {
    listElement.innerHTML = '';
    toDoList.map(item => {
        let prinListElement = document.createElement('li');
        let listText = document.createTextNode(item);
        let linkElement = document.createElement('a');
        linkElement.setAttribute('href', '#');
        let positionItemList = toDoList.indexOf(item);
        linkElement.setAttribute('onclick', `deleteItemList(${positionItemList})`);
        linkElement.setAttribute('style', 'margin-left: 12px');
        let linkText = document.createTextNode('Excluir');
        linkElement.appendChild(linkText);
        prinListElement.appendChild(listText);
        prinListElement.appendChild(linkElement);
        listElement.appendChild(prinListElement);
    });
}
function addToDoList() {
    if (inputElement.value === '') {
        alert('Adicione a sua tarefa!');
        return false;
    }
    else {
        let addedTask = inputElement.value;
        toDoList.push(addedTask);
        inputElement.value = '';
        printTasks();
        dataBase();
    }
}
function deleteItemList(itemPosition) {
    toDoList.splice(itemPosition, 1);
    printTasks();
    dataBase();
}
printTasks(); // chamo aqui fora para já ficar a lista salva disponível.
buttonElement.onclick = addToDoList;
