let listElement = document.querySelector('#app ul') as HTMLUListElement
let inputElement = document.querySelector('#app input') as HTMLInputElement
let buttonElement = document.querySelector('#app button') as HTMLElement

let savedList: string | null = localStorage.getItem('@taskListing')
let toDoList: string[] = savedList !== null && JSON.parse(savedList) || []

function dataBase () {
    localStorage.setItem('@taskListing', JSON.stringify(toDoList))//JSON.stringify transforma meu array em string
}

function printTasks(){
    listElement.innerHTML = ''

    toDoList.map( item => {
        let prinListElement: HTMLLIElement = document.createElement('li')
        let listText = document.createTextNode(item)

        let linkElement: HTMLAnchorElement = document.createElement('a')
        linkElement.setAttribute('href', '#')

        let positionItemList = toDoList.indexOf(item)
        linkElement.setAttribute('onclick', `deleteItemList(${positionItemList})`)
        linkElement.setAttribute('style', 'margin-left: 12px')

        let linkText = document.createTextNode('Excluir')
        linkElement.appendChild(linkText)

        prinListElement.appendChild(listText)
        prinListElement.appendChild(linkElement)
        listElement.appendChild(prinListElement)
    })
}

function addToDoList(): boolean | void{
    if(inputElement.value === ''){
        alert('Adicione a sua tarefa!')
        return false
    } else {
        let addedTask: string = inputElement.value
        toDoList.push(addedTask)

        inputElement.value = ''

        printTasks()
        dataBase()
    }
}

buttonElement.onclick = addToDoList

function deleteItemList(itemPosition: number){
    toDoList.splice(itemPosition, 1)

    printTasks()
    dataBase()
}

printTasks()
