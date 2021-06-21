function User(){
    this.name = prompt('Введите имя')
    this.age = prompt('Введите возраст')
}

function getRandomInt(min, max){
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min)) + min
}

// let users = []
// users.push(new User())

let fontSizeArr = ['11px','17px','12px','14px','12px','19px','16px']
let colorsArr  = ['red','blue','salmon','gray','yellow',"green"]

let table1 = document.getElementsByTagName('table')[0]
let table1Trs = table1.getElementsByTagName('tr')

// table1Trs[3].style.backgroundColor = 'gray'
// table1Trs[3].style.fontSize = '18px'

function changeColFont(elem, color, fSize){
    elem.style.backgroundColor = color
    elem.style.fontSize = fSize
}

// changeColFont(table1Trs[2], 'red' , '10px')
// changeColFont(table1Trs[5], 'green', '22px')

function paintTable(fontSize, color){
    let fonts = fontSize
        colors = color
    for (elem of table1Trs){
        elem.style.backgroundColor = colors.splice(getRandomInt(0, colors.length - 1), 1)
        elem.style.fontSize = fonts.splice(getRandomInt(0, fonts.length - 1), 1)
    }
}

paintTable(fontSizeArr, colorsArr)