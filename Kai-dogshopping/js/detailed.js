const middle = document.querySelector('#middle')
const small = document.querySelector('#small')
const large = document.querySelector('#large')
const layer = document.querySelector('.layer')

// 鼠标移动到 small列表盒子，更换 middle和 large里的图片
small.addEventListener('mouseover', function (e) {
    if (e.target.tagName === 'IMG') {
        this.querySelector('.active').classList.remove('active')
        e.target.parentNode.classList.add('active')
        middle.querySelector('img').src = e.target.src
        large.style.backgroundImage = `url(${e.target.src})`
    }
})

// 鼠标在、离开 middle盒子时，large放大展示盒子显示与隐藏
let timer
middle.addEventListener('mouseenter', show)
middle.addEventListener('mouseleave', hide)

function show() {
    clearTimeout(timer)
    large.style.display = 'block'
}

function hide() {
    timer = setTimeout(function () {    // 让盒子延时消失
        large.style.display = 'none'
    }, 300)
}

// 鼠标在、离开 large放大展示盒子时，large放大展示盒子显示与隐藏
large.addEventListener('mouseenter', show)
large.addEventListener('mouseleave', hide)

middle.addEventListener('mouseenter', function () {
    layer.style.display = 'block'
})

middle.addEventListener('mouseleave', function () {
    layer.style.display = 'none'
})

// 鼠标在 middle盒子上时，移动 layer遮罩盒子
middle.addEventListener('mousemove', function (e) {
    // console.log(e.pageX)  // 鼠标在页面中的 X坐标
    // 鼠标在 middle盒子里面的坐标 = 鼠标在页面中的坐标 - middle展示盒子的坐标 - 页面被卷去的距离
    // console.log(middle.getBoundingClientRect().left)  // middle展示盒子和 视窗窗口的距离
    let x = e.pageX - middle.getBoundingClientRect().left - document.documentElement.scrollLeft
    let y = e.pageY - middle.getBoundingClientRect().top - document.documentElement.scrollTop

    //获取遮罩层的宽高 的一半 让鼠标超过了一半的距离后再跟着移动
    let lw = layer.clientWidth / 2
    let lh = layer.clientHeight / 2
    //遮罩层超过了 大盒子右边的距离的时候不动(也就是 遮罩盒子在 x上最多能移动多少距离)
    let mw = middle.clientWidth - lw
    let mh = middle.clientWidth - lh

    // 限定遮罩层的盒子只能在 middle内部移动
    if (x, y >= 0 && x, y <= 400) {
        // layer.style.left = x + 'px'
        // layer.style.top = y + 'px'
        let mx = 0  // 黑色盒子移动的距离
        let my = 0

        if (x < lw) mx = 0  // 小于宽度一半的时候不动
        if (x >= lw && x <= mw) mx = x - lw  // 大于宽度一半 并且 小于等于大盒子 - 遮罩盒子的一般距离的时候 可以跟着动
        if (x > mw) mx = mw - lw   // 大于遮罩盒子在 x上最多能移动多少距离的 时候就停在原地
        // 减去 lw是让：鼠标移动到超过遮罩盒子一半距离的时候 再让盒子一起移动

        if (y < lh) my = 0
        if (y >= lh && y <= mh) my = y - lh
        if (y > mh) my = mh - lh

        layer.style.left = mx + 'px'  // 遮罩盒子在 x轴上应该移动的距离
        layer.style.top = my + 'px'  // 遮罩盒子在 y轴上应该移动的距离

        // 7. 放大后的盒子 (2倍的背景图)
        large.style.backgroundPositionX = -2 * mx + 'px'  // 放大的图片是反着走的，所以是 -2
        large.style.backgroundPositionY = -2 * my + 'px'
    }
})


