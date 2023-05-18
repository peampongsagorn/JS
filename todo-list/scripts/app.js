const addButton = document.getElementById('enter')
const userInput = document.getElementById('userInput')
const ul = document.querySelector('ul')
const item = document.getElementsByTagName('li')

const todos = []
const addInput = (input) => {
    if(input){
        todos.push(input)
    }
}
const createlist = () =>{
    if(userInput.value.length <= 0) return
    addInput(userInput.value)
    const lis = document.querySelector('li')
    while(ul.firstChild){
        ul.removeChild(ul.lastChild)
    }

    todos.forEach((todo) => {
    const li = document.createElement('li')
    li.appendChild(document.createTextNode(todo))
    ul.appendChild(li)

    userInput.value = ''
    const doneTask = () => {
        li.classList.toggle('done')
    }
    li.addEventListener('click',doneTask)

    const deleteBtn  = document.createElement('button')
    deleteBtn.appendChild(document.createTextNode('X'))
    li.appendChild(deleteBtn)
    deleteBtn.addEventListener('click', () => {
        li.classList.add('delete')
        })
    })
}

addButton.addEventListener('click', createlist)