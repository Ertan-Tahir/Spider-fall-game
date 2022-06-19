////game js file\\\\\\\
const home= document.getElementById('home')
const gameReveal = document.getElementById('gameReveal')
const gameEnd = document.getElementById('gameEnd')//for modal after game end!!!
const restartBtn = document.getElementById('restartBtn')
const attemptInner = document.getElementById('attempt')
const pointsInner = document.getElementById('pointsId')
const gameSave = document.getElementById('gameSaveModal')
const pointsForSave = document.getElementById('pointsForSave')
const userName = document.getElementById('userName')
const rankListModal = document.getElementById('rankList')
const rankName = document.getElementById('rankName')
const rankPoints = document.getElementById('pointsRank')
let attempt = 1
let points=0

function startBtnFunc(){
    home.classList.add('hide')
    gameReveal.classList.remove('hide')
    document.body.classList.add('gameBC')//background color
    Knife()
    setTimeout(spiderSpawn,1500)

}
function Knife(){
    var canvas = document.createElement('canvas')
    document.body.appendChild(canvas);

    var ctx = canvas.getContext('2d')
    resize()
    document.body.style.margin = 0;
    canvas.style.position = 'fixed';
    var pos= {x:0, y:0}
    window.addEventListener('resize', resize)
    document.addEventListener('mousemove', draw)
    document.addEventListener('mousedown' ,setPosition)
    document.addEventListener('mouseenter' ,setPosition)

function setPosition(e){
    pos.x =e.clientX
    pos.y =e.clientY
}
function resize(){
    ctx.canvas.width = window.innerWidth
    ctx.canvas.height = window.innerHeight
}
function draw(e){
    if(e.buttons !== 1 )return;
    
    ctx.beginPath();
    ctx.lineWidth = 5;
    ctx.lineCap = 'round';
    ctx.lineJoin= 'bevel'
    ctx.strokeStyle = 'black';
    ctx.miterLimit= 1

    ctx.moveTo(pos.x, pos.y)
    setPosition(e)
    ctx.lineTo(pos.x, pos.y)
    ctx.stroke()
    lineRemove()   
}function lineRemove(){
    setTimeout(function lineRemoveInner(){
        ctx.clearRect(0, 0, canvas.width, canvas.height)
    }, 400)
}}
function spiderSpawn(){
setTimeout( ()=>{
    b = setInterval(spiderFall,800)
}, 2000)
}
function spiderFall(){
        var spider = document.createElement('i')
        spider.setAttribute('class', 'fa-solid fa-spider spider-Anime2')
        var spiderLine = document.createElement('span')
        spiderLine.addEventListener("mouseover", function() {
           spiderLine.classList.remove('spider-line-anime')
           spiderLine.classList.add('spider-line-anime-die')
           points++
           pointsInner.innerText = 'Points: '+'\n'+points
           setTimeout(() => {
            spiderPlace.display='none'
           }, 2000);
        }
            , false);
        spiderLine.setAttribute('class', 'spider-line spider-line-anime')
        spiderLine.append(spider)
        document.body.appendChild(spiderLine)
        var spiderPlace=spiderLine.style;
        spiderPlace.left = Math.random()*window.innerWidth+'px'
        if(points>=100){
            clearInterval(b)
            b=setInterval(spiderFall,700)
        };
        if(points>=150){
            clearInterval(b)
            b=setInterval(spiderFall,650)
        };
        if(points>=200){
            clearInterval(b)
            b=setInterval(spiderFall,600)
        };
        if(points>=250){
            clearInterval(b)
            b=setInterval(spiderFall,550)
        };
        if(points>=350){
            clearInterval(b)
            b=setInterval(spiderFall,500)
        };
        if(points>=450){
            clearInterval(b)
            b=setInterval(spiderFall,450)
        };
        if(points>=500){
            clearInterval(b)
            b=setInterval(spiderFall,400)
        };
        if(points>=650){
            clearInterval(b)
            b=setInterval(spiderFall,350)
        };
        if(points>=850){
            clearInterval(b)
            b=setInterval(spiderFall,300)
        };
        if(points>=1000){
            clearInterval(b)
            b=setInterval(spiderFall,100)
        }
        setTimeout(()=>{ var bounding =spider.getBoundingClientRect() 
        if(!(bounding.top >= 0 && bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight))){
           window.clearInterval(b)
           b= null
           console.log('test1')
           gameEnd.classList.remove('hide')
           spiderPlace.display = 'none'
           location.href= '#gameEnd'
           document.body.classList.remove('gameBC')
           restartBtn.disabled = true
           setTimeout(()=>{
            restartBtn.disabled = false
           },2700)
        }else{
            console.log('test')
        }},2800)
}
function restartGame(){
    gameEnd.classList.add('hide')
    gameSave.classList.add('hide')
    rankListModal.classList.add('hide')
    location.href= '#gameEnd'
    document.body.classList.add('gameBC')
    spiderSpawn()
    attemptPoints()
    
}function attemptPoints(){
if(restartGame){
    points=0
    pointsInner.innerText= 'Points: '+'\n'+points
    attempt++
    attemptInner.innerText = 'Attemp: ' +attempt
}}
function saveGame(){
    gameEnd.classList.add('hide')
    gameSave.classList.remove('hide')
    pointsForSave.innerHTML='Points: ' +points
}
function saveGame1(){
    document.getElementById('gameSaveModal').classList.remove('hide')
    rankListModal.classList.add('hide')
}
function finalSave(){
    var userNameValue= userName.value
    var userNameLength = userNameValue.length
    if(userNameLength>=4){
        console.log(userNameValue)
    localStorage.setItem(nickname, userNameValue)
    var nickname= localStorage.getItem(nickname)
    localStorage.setItem(playerPoints, points)
    var playerPoints = localStorage.getItem(playerPoints)
    rankName.innerHTML = nickname
    rankPoints.innerHTML= '<i class="fa-solid fa-spider"></i> '+playerPoints+' pts'
    alert('Game is saved')
    }else{
        alert('Your name have to contain more than 3 characters')
    }
}
b()
function b(){
    var nickname= localStorage.getItem(nickname)
    var playerPoints = localStorage.getItem(playerPoints)
    rankName.innerHTML = nickname
    rankPoints.innerHTML= '<i class="fa-solid fa-spider"></i> '+playerPoints+' pts'
    
}
function rankList(){
    gameSave.classList.add('hide')
    rankListModal.classList.remove('hide')
    gameEnd.classList.add('hide')
}
