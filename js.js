const circleHolder=document.querySelector(".circleHolder")
const left=document.querySelector(".fa-arrow-left")
const right=document.querySelector(".fa-arrow-right")
let imgAdress=["./img/a.png", "./img/b.png", "./img/c.png", "./img/d.png","./img/e.png", "./img/f.png"]

function createCircls(imgAdress){
    circleHolder.innerHTML= `<img class="bigCircleImg" src="${imgAdress[0]}">`
    imgAdress.forEach((img, index) => {
        circleHolder.innerHTML+=`
        <div class="ciccle${index + 1} imagecircle">
             <img src=${img}>
        </div>
        `
    });
}
createCircls(imgAdress)


left.addEventListener("click",function(){
    const a = imgAdress.shift(imgAdress[0])  
    imgAdress.push(a)
    createCircls(imgAdress)
})
right.addEventListener("click",function(){
    const a = imgAdress.pop(imgAdress[0])  
    imgAdress.unshift(a)
    createCircls(imgAdress)
})

