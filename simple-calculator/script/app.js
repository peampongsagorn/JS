const displayElement = document.getElementById('calculator-display')
// displayElement.value = '000'
const addtext = (text) => {
    if(validator(text)){
    const displayText = displayElement.value
    const newText = displayText + text
    setDisplay(newText)
    }
}

const validator = (input) => {
    const forbiddens = ['+' , '-' , '*' , '/']
    const displayText = displayElement.value
    const symbolwithsymbol = forbiddens.includes(input) && forbiddens.includes(displayText[displayText.length-1])
    const symbolwithoutnumber = forbiddens.includes(input) && displayText === '' && input !== '-'
    return ( !symbolwithsymbol || symbolwithoutnumber) 

} 

const setDisplay = (text) => {
    displayElement.value = text
}

const clearDisplay = () => {
    setDisplay('')
}

const deleteLastplay = () => {
    const displayText = displayElement.value
    const newText = displayText.slice(0, displayText.length - 1)
    setDisplay(newText)
}

const calculateNum = () => {
    const displayText = displayElement.value
    if(displayText){
        const newText = eval(displayText)
        setDisplay(newText)
    }
    
}