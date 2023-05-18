//click generate then change color
const color = document.getElementById("color")
const colorCode =  document.getElementById("code") 
const generate = document.getElementById("generate-button")

const generateColor = () => {
    
    const pattern = '0123456789abcdef'
    let newColor = '#' 
    for( let index = 0; index < 6; index++ ){
        const random = Math.floor((Math.random() * 16));
        newColor += pattern[random]
    }
    color.style.backgroundColor = newColor
    colorCode.innerHTML = newColor
}
generate.addEventListener("click",generateColor)