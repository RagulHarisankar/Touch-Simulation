const box = document.getElementById('box')
const main_screen_widht = 1920
const main_screen_height = 1080
let divided_width = main_screen_widht / window.innerWidth
let divided_height = main_screen_height / window.innerHeight
let setWidth = main_screen_widht / divided_width
let setHeight = main_screen_height / divided_height

/* calculation outputs */
console.log('Main Screen Width : ', main_screen_widht)
console.log('Main Screen Height : ', main_screen_height)
console.log('Divided width : ', divided_width)
console.log('Divided height : ', divided_height)

const sizeSetter = () => {
    box.width = setWidth
    box.height = setHeight
    console.log('Box width : ', setWidth)
    console.log('Box height : ', setHeight)
}

const mouseClick = (e) => {
    let posX = box.offsetLeft
    let posY = box.offsetTop
    let tempX = (e.pageX - posX) / setWidth * 100 
    let tempY = (e.pageY - posY) / setHeight * 100
    /*-----------------------------*/
    let X = tempX / 100 * main_screen_widht
    let Y = tempY / 100 * main_screen_height
    /*-----------------------------*/
    let pointer = {x: Math.round(X), y: Math.round(Y)}
    document.getElementById('xcord').innerHTML = "X : " + pointer.x
    document.getElementById('ycord').innerHTML = "Y : " + pointer.y
    console.log('Mouse Event : ', pointer)
}

const touchClick = (e) => {
    let posX = box.offsetLeft
    let posY = box.offsetTop
    let tempX = (e.touches[0].pageX - posX) / setWidth * 100 
    let tempY = (e.touches[0].pageY - posY) / setHeight * 100
    /*-----------------------------*/
    let X = tempX / 100 * main_screen_widht
    let Y = tempY / 100 * main_screen_height
    /*-----------------------------*/
    let pointer = {x: Math.round(X), y: Math.round(Y)}
    document.getElementById('xcord').innerHTML = "X : " + pointer.x
    document.getElementById('ycord').innerHTML = "Y : " + pointer.y
    console.log('Touch Event : ', JSON.stringify(pointer))
}