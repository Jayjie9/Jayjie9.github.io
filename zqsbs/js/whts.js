// querySelector与querySelectorAll返回文档中匹配指定css选择器的元素
let left = document.querySelector('.button-left');
let right = document.querySelector('.button-right');
let min = document.querySelectorAll('.min');
let images = document.querySelector('.big-images');

let index = 0;
let time;

function position() {
    images.style.left = (index * -100) + "%";
}

function add() {
    if (index >= min.length - 1) {
        index = 0;
    } else {
        index++;
    }
}

function dda() {
    if (index < 1) {
        index = min.length - 1;
    } else {
        index--;
    }
}
//setInterval()方法可按照指定的周期（以毫秒计）来调用函数或计算表达式。返回值为time
//clearInterval()方法传入time，取消周期性
//timer()函数为计时器
function timer() {
    time = setInterval(() => {
        index++
        dda();
        add();
        position();
    }, 3000)
}
left.addEventListener('click', () => {
    dda();
    position();
    clearInterval(time);
    timer();
})
right.addEventListener('click', () => {
    add();
    position();
    clearInterval(time);
    timer();
})

//小图标点击功能
for (let i = 0; i < min.length; i++) {
    min[i].addEventListener('click', () => {
        index = i;
        position();
        clearInterval(time);
        timer();
    })
}
timer();