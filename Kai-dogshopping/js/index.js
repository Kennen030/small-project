// banner轮播图
const banner = document.querySelector('.banner')
const prev = document.querySelector('.banner .slider #prev')
const next = document.querySelector('.banner .slider #next')
const globalSlider = document.querySelector('.banner .slider #global-slider')
let left = 0
let i = 0
const bColor = ['#ffb9d9', '#81c5c0', '#b77f73', '#7676a1', '#e5e5ef']
prev.addEventListener('click', function () {
    run()
})
function run() {
    // 如果走动的距离大于 4000 就返回第一张
    if (left <= -4000) {
        left = 0
    } else {
        left += -1000
    }
    globalSlider.style.transform = `transLateX(${left}px)`


    // 背景色
    // 先执行后 递增
    // 大于 4 的时候 变为0
    i = i > bColor.length - 2 ? 0 : i + 1
    banner.style.backgroundColor = bColor[i]
}
next.addEventListener('click', function () {
    back()
})

function back() {
    if (left === 0) {
        left = -4000
    } else (
        left += 1000
    )
    globalSlider.style.transform = `transLateX(${left}px)`
    i = i <= 0 ? bColor.length - 1 : i - 1
    banner.style.backgroundColor = bColor[i]
    console.log(i);
}

// 鼠标放上去取消定时器
banner.addEventListener('mouseenter', function () {
    clearTimeout(timer)
})
// 鼠标离开了恢复定时器
banner.addEventListener('mouseleave', function () {
    timer = setInterval(run, 3000)
})


let timer = setInterval(run, 3000)
// -------------------------------------------------

// seckill
// 6. 函数封装 getCountTime
function getCountTime() {

    // 1. 现在的时间戳
    // 添加加号后 就是当前的时间戳
    const now = +new Date()

    // 没有添加加号就是当前的时间
    // const now = new Date()
    // console.log(now)

    // 2. 将来的时间戳
    const last = +new Date('2023-4-5 22:00:00')
    // console.log(now, last)

    // 3. 将来减去现在的时间戳  
    const count = (last - now) / 1000 // 因为时间戳是毫秒
    // console.log(count)

    // 4. 转换时间
    // let d = parseInt(count / 60 / 60 / 24)
    let h = parseInt(count / 60 / 60 % 24)
    let m = parseInt(count / 60 % 60)
    let s = parseInt(count % 60)

    // d < 10 ? d = '0' + d : d
    h = h < 10 ? h = '0' + h : h
    m = m < 10 ? m = '0' + m : m
    s = s < 10 ? s = '0' + s : s

    // console.log(h, m, s,)

    // 5. 替换
    const hour = document.querySelector('.seckill #hour')
    const minutes = document.querySelector('.seckill #minutes')
    const scond = document.querySelector('.seckill #scond')

    hour.innerHTML = h
    minutes.innerHTML = m
    scond.innerHTML = s
}

// 先调用一次就不会有间隔
getCountTime()

// 7. 开启定时器
setInterval(getCountTime, 1000)

// goodsNew 
function goodsNew() {

    let data = [
        {
            src: './upload/newg4.png',
            itemName: 'Iphone 18 Max',
            price: '899.',
            decimal: '00'
        }, {
            src: './upload/newg2.png',
            itemName: '小米14Pro Max Plus Ultra',
            price: '3999.',
            decimal: '99'
        }, {
            src: './upload/newg3.png',
            itemName: '华为荣耀 14Pro Max',
            price: '6999.',
            decimal: '00'
        }
    ]
    const ul = document.querySelector('.goodsNew #goodsNewList')
    // 1. 根据数据的个数，创建对应的 li
    for (let i = 0; i < data.length; i++) {
        const li = document.createElement('li')
        li.innerHTML = `
            <a href="./detailed.html" class="goodsNew-link">
            <img src=${data[i].src} title="${data[i].itemName}">
            <span class="item-name">${data[i].itemName}</span>
            <span class="price">
            <i>￥</i>
            ${data[i].price}
            <span class="decimal">${data[i].decimal}</span>
            </span>
            </a>
            `
        // 1.3 把li 追加到 ul的里面的最后一位
        ul.appendChild(li)
    }

}

goodsNew()


// more -------------------------------------------------

// 1. 给夫元素添加点击事件,点击到子元素是 就可以让事件流返回给父元素
const moreLi = document.querySelectorAll('.more .more-table li')
for (let i = 0; i < moreLi.length; i++) {
    moreLi[i].addEventListener('click', function () {
        // 2. 移除有 active 的 li的样式，给当前li添加这个样式
        document.querySelector('.more .more-table .active').classList.remove('active')
        this.classList.add('active')

        // 3.移除所有 active 的 item 的样式
        document.querySelector('.more .more-inner .active').classList.remove('active')
        document.querySelector(`.more .more-inner .more-list:nth-child(${i + 1})`).classList.add('active')
    })
}


// more.addEventListener('click', function (e) {
//     if (e.target.tagName === 'DIV') {

//     }
// })
// -------------------------------------------------

function more1() {
    let data = [
        {
            src: './upload/newg4.png',
            itemName: '小孩沙发床沙发折叠床沙发可爱卡通懒人折叠单',
            price: '899.',
            decimal: '00'
        }, {
            src: './upload/newg2.png',
            itemName: '京东自营✅洛斐星河键盘✅100键三模热插拔',
            price: '3999.',
            decimal: '99'
        }, {
            src: './upload/newg3.png',
            itemName: '松下(Panasonic)洗衣机全自动波轮9公斤 变频直驱电机 老人专用不弯腰设计 防缠绕 大容量 XQB90-URKTD【变频直驱】以旧换新',
            price: '6999.',
            decimal: '00'
        }, {
            src: './upload/newg3.png',
            itemName: '松下(Panasonic)洗衣机全自动波轮9公斤 变频直驱电机 老人专用不弯腰设计 防缠绕 大容量 XQB90-URKTD【变频直驱】以旧换新',
            price: '6999.',
            decimal: '00'
        }, {
            src: './upload/newg3.png',
            itemName: '松下(Panasonic)洗衣机全自动波轮9公斤 变频直驱电机 老人专用不弯腰设计 防缠绕 大容量 XQB90-URKTD【变频直驱】以旧换新',
            price: '6999.',
            decimal: '00'
        }, {
            src: './upload/newg3.png',
            itemName: '松下(Panasonic)洗衣机全自动波轮9公斤 变频直驱电机 老人专用不弯腰设计 防缠绕 大容量 XQB90-URKTD【变频直驱】以旧换新',
            price: '6999.',
            decimal: '00'
        }, {
            src: './upload/newg2.png',
            itemName: '松下(Panasonic)洗衣机全自动波轮9公斤 变频直驱电机 老人专用不弯腰设计 防缠绕 大容量 XQB90-URKTD【变频直驱】以旧换新',
            price: '6999.',
            decimal: '00'
        }
        , {
            src: './upload/newg4.png',
            itemName: '松下(Panasonic)洗衣机全自动波轮9公斤 变频直驱电机 老人专用不弯腰设计 防缠绕 大容量 XQB90-URKTD【变频直驱】以旧换新',
            price: '6999.',
            decimal: '00'
        }, {
            src: './upload/newg3.png',
            itemName: '松下(Panasonic)洗衣机全自动波轮9公斤 变频直驱电机 老人专用不弯腰设计 防缠绕 大容量 XQB90-URKTD【变频直驱】以旧换新',
            price: '6999.',
            decimal: '00'
        }
    ]
    const ul = document.querySelector('.more #more-list1')
    // 1. 根据数据的个数，创建对应的 li
    for (let i = 0; i < data.length; i++) {
        const li = document.createElement('li')
        li.innerHTML = `
            <a href="./detailed.html">
            <img src=${data[i].src} title="${data[i].itemName}">
            <p class="name">${data[i].itemName}</p>
            <span class="price">
            <i>￥</i>
            ${data[i].price}
            <small class="decimal">${data[i].decimal}</small>
            </span>
            </a>
            `
        // 1.3 把li 追加到 ul的里面的最后一位
        ul.appendChild(li)
    }
}
more1()

function more2() {
    let data = [
        {
            src: './upload/newg4.png',
            itemName: '小孩沙发床沙发折叠床沙发可爱卡通懒人折叠单',
            price: '899.',
            decimal: '00'
        }, {
            src: './upload/newg2.png',
            itemName: '京东自营✅洛斐星河键盘✅100键三模热插拔',
            price: '3999.',
            decimal: '99'
        }, {
            src: './upload/newg3.png',
            itemName: '京东自营✅洛斐星河键盘✅100键三模热插拔',
            price: '6999.',
            decimal: '00'
        }, {
            src: './upload/newg3.png',
            itemName: '京东自营✅洛斐星河键盘✅100键三模热插拔',
            price: '6999.',
            decimal: '00'
        }, {
            src: './upload/newg3.png',
            itemName: '京东自营✅洛斐星河键盘✅100键三模热插拔',
            price: '6999.',
            decimal: '00'
        }, {
            src: './upload/newg3.png',
            itemName: '京东自营✅洛斐星河键盘✅100键三模热插拔',
            price: '6999.',
            decimal: '00'
        }, {
            src: './upload/newg2.png',
            itemName: '京东自营✅洛斐星河键盘✅100键三模热插拔',
            price: '6999.',
            decimal: '00'
        }
        , {
            src: './upload/newg4.png',
            itemName: '京东自营✅洛斐星河键盘✅100键三模热插拔',
            price: '6999.',
            decimal: '00'
        }, {
            src: './upload/newg3.png',
            itemName: '京东自营✅洛斐星河键盘✅100键三模热插拔',
            price: '6999.',
            decimal: '00'
        }
    ]
    const ul = document.querySelector('.more #more-list2')
    // 1. 根据数据的个数，创建对应的 li
    for (let i = 0; i < data.length; i++) {
        const li = document.createElement('li')
        li.innerHTML = `
            <a href="./detailed.html">
            <img src=${data[i].src} title="${data[i].itemName}">
            <p class="name">${data[i].itemName}</p>
            <span class="price">
            <i>￥</i>
            ${data[i].price}
            <small class="decimal">${data[i].decimal}</small>
            </span>
            </a>
            `
        // 1.3 把li 追加到 ul的里面的最后一位
        ul.appendChild(li)
    }
}
more2()


function more3() {
    let data = [
        {
            src: './upload/newg4.png',
            itemName: '小孩沙发床沙发折叠床沙发可爱卡通懒人折叠单',
            price: '899.',
            decimal: '00'
        }, {
            src: './upload/newg4.png',
            itemName: '京东自营✅洛斐星河键盘✅100键三模热插拔',
            price: '3456.',
            decimal: '99'
        }, {
            src: './upload/newg2.png',
            itemName: '京东自营✅洛斐星河键盘✅100键三模热插拔',
            price: '234.',
            decimal: '00'
        }, {
            src: './upload/newg3.png',
            itemName: '西屋（Westinghouse）破壁机家用料理机加热预约真空微压力智能预约保温多功能豆浆机辅食料理机 WFB-E16',
            price: '6999.',
            decimal: '00'
        }, {
            src: './upload/newg4.png',
            itemName: '京东自营✅洛斐星河键盘✅100键三模热插拔',
            price: '6999.',
            decimal: '00'
        }, {
            src: './upload/newg3.png',
            itemName: '京东自营✅洛斐星河键盘✅100键三模热插拔',
            price: '6999.',
            decimal: '00'
        }, {
            src: './upload/newg2.png',
            itemName: '西屋（Westinghouse）破壁机家用料理机加热预约真空微压力智能预约保温多功能豆浆机辅食料理机 WFB-E16',
            price: '8567.',
            decimal: '00'
        }
        , {
            src: './upload/newg4.png',
            itemName: '京东自营✅洛斐星河键西屋（Westinghouse）破壁机家用料理机加热预约真空微压力智能预约保温多功能豆浆机辅食料理机 WFB-E16盘✅100键三模热插拔',
            price: '6999.',
            decimal: '00'
        }, {
            src: './upload/newg4.png',
            itemName: '京东自营✅洛斐星河键盘✅100键三模热插拔',
            price: '6797689.',
            decimal: '00'
        }
    ]
    const ul = document.querySelector('.more #more-list3')
    // 1. 根据数据的个数，创建对应的 li
    for (let i = 0; i < data.length; i++) {
        const li = document.createElement('li')
        li.innerHTML = `
            <a href="javascript:;">
            <img src=${data[i].src} title="${data[i].itemName}">
            <p class="name">${data[i].itemName}</p>
            <span class="price">
            <i>￥</i>
            ${data[i].price}
            <small class="decimal">${data[i].decimal}</small>
            </span>
            </a>
            `
        // 1.3 把li 追加到 ul的里面的最后一位
        ul.appendChild(li)
    }
}
more3()

function more4() {
    let data = [
        {
            src: './upload/newg4.png',
            itemName: '小孩沙发床沙发折叠床沙发可爱卡通懒人折叠单',
            price: '899.',
            decimal: '00'
        }, {
            src: './upload/newg2.png',
            itemName: '京东自营✅洛斐星河键盘✅100键三模热插拔',
            price: '3456.',
            decimal: '99'
        }, {
            src: './upload/newg2.png',
            itemName: '小孩沙发床沙发折叠床沙发可爱卡通懒人折叠单',
            price: '234.',
            decimal: '00'
        }, {
            src: './upload/newg4.png',
            itemName: '京东自营✅洛斐星河键盘✅100键三模热插拔',
            price: '19999.',
            decimal: '99'
        }, {
            src: './upload/newg3.png',
            itemName: '西屋（Westinghouse）破壁机家用料理机加热预约真空微压力智能预约保温多功能豆浆机辅食料理机 WFB-E16',
            price: '546754.',
            decimal: '12'
        }
    ]
    const ul = document.querySelector('.more #more-list4')
    // 1. 根据数据的个数，创建对应的 li
    for (let i = 0; i < data.length; i++) {
        const li = document.createElement('li')
        li.innerHTML = `
            <a href="javascript:;">
            <img src=${data[i].src} title="${data[i].itemName}">
            <p class="name">${data[i].itemName}</p>
            <span class="price">
            <i>￥</i>
            ${data[i].price}
            <small class="decimal">${data[i].decimal}</small>
            </span>
            </a>
            `
        // 1.3 把li 追加到 ul的里面的最后一位
        ul.appendChild(li)
    }
}
more4()

function more5() {
    let data = [
        {
            src: './upload/newg4.png',
            itemName: '小孩沙发床沙发折叠床沙发可爱卡通懒人折叠单',
            price: '899.',
            decimal: '00'
        }, {
            src: './upload/newg4.png',
            itemName: '京东自营✅洛斐星河键盘✅100键三模热插拔',
            price: '3456.',
            decimal: '99'
        }, {
            src: './upload/newg2.png',
            itemName: '京东自营✅洛斐星河键盘✅100键三模热插拔',
            price: '234.',
            decimal: '00'
        }, {
            src: './upload/newg3.png',
            itemName: '西屋（Westinghouse）破壁机家用料理机加热预约真空微压力智能预约保温多功能豆浆机辅食料理机 WFB-E16',
            price: '6999.',
            decimal: '00'
        }, {
            src: './upload/newg4.png',
            itemName: '京东自营✅洛斐星河键盘✅100键三模热插拔',
            price: '6999.',
            decimal: '00'
        }, {
            src: './upload/newg3.png',
            itemName: '京东自营✅洛斐星河键盘✅100键三模热插拔',
            price: '6999.',
            decimal: '00'
        }, {
            src: './upload/newg2.png',
            itemName: '西屋（Westinghouse）破壁机家用料理机加热预约真空微压力智能预约保温多功能豆浆机辅食料理机 WFB-E16',
            price: '8567.',
            decimal: '00'
        }
        , {
            src: './upload/newg4.png',
            itemName: '京东自营✅洛斐星河键西屋（Westinghouse）破壁机家用料理机加热预约真空微压力智能预约保温多功能豆浆机辅食料理机 WFB-E16盘✅100键三模热插拔',
            price: '6999.',
            decimal: '00'
        }, {
            src: './upload/newg4.png',
            itemName: '京东自营✅洛斐星河键盘✅100键三模热插拔',
            price: '6797689.',
            decimal: '00'
        }
    ]
    const ul = document.querySelector('.more #more-list5')
    // 1. 根据数据的个数，创建对应的 li
    for (let i = 0; i < data.length; i++) {
        const li = document.createElement('li')
        li.innerHTML = `
            <a href="javascript:;">
            <img src=${data[i].src} title="${data[i].itemName}">
            <p class="name">${data[i].itemName}</p>
            <span class="price">
            <i>￥</i>
            ${data[i].price}
            <small class="decimal">${data[i].decimal}</small>
            </span>
            </a>
            `
        // 1.3 把li 追加到 ul的里面的最后一位
        ul.appendChild(li)
    }
}
more5()



// -------------------------------------------------

// elevator隐藏和显示
// top-navbar 的显示和隐藏
const elevator = document.querySelector('.elevator')
const backTop = document.querySelector('.backTop')
const topNav = document.querySelector('.top-navbar')
const secKill = document.querySelector('.seckill')
window.addEventListener('scroll', function () {
    // 1.当页面滚动超过自身高度的时候，往上走自己高度的距离
    // console.log(topNav.offsetHeight)
    const n = document.documentElement.scrollTop
    // topNav.style.top = n >= topNav.offsetHeight ? `-${topNav.offsetHeight}px` : 0
    // 2.当页面头部被卷掉的距离 >= seckill的头部距离时(offsetTop)
    // topNav.style.position = n >= secKill.offsetTop ? 'fixed' : 'absolute'

    // if (n >= topNav.offsetHeight) {
    //     topNav.style.top = `-${topNav.offsetHeight}px`
    // } if (n >= secKill.offsetTop) {
    //     topNav.style.position = 'fixed'
    //     topNav.style.top = `0`
    //     console.log(12);
    // } else {
    //     topNav.style.top = 0
    // }


    // 1.当页面滚动超过自身高度的时候
    if (n >= topNav.offsetHeight) {
        topNav.style.top = `-${topNav.offsetHeight}px`
        // 2.当页面头部被卷掉的距离 >= seckill的头部距离时(offsetTop)
        if (n >= secKill.offsetTop) {
            topNav.style.position = 'fixed'
            topNav.style.top = `0`
            elevator.style.position = 'fixed'
            elevator.style.top = `180px`
            backTop.style.top = '240px'
        } else {
            topNav.style.position = 'absolute'
            elevator.style.position = 'absolute'
            // (removeProperty())删除元素的样式属性
            elevator.style.removeProperty('top')
            backTop.style.top = '180px'
        }

    } else {
        topNav.style.top = 0
    }
})

// -------------------------------------------------
// backTop 返回顶部
backTop.addEventListener('click', function () {
    // document.documentElement.scrollTop = 0
    window.scrollTo(0, 0)
    elevator.style.position = 'absolute'
    elevator.style.removeProperty('top')
    backTop.style.top = '180px'
})

// -------------------------------------------------

// elevator 跳转
!(function () {

    const elLi = document.querySelector('.elevator .elevator-list')
    elLi.addEventListener('click', function (e) {
        // 不让返回顶部添加 active的类(判断点击的对象是否是 a;并且判断是否是自定义属性)
        if (e.target.tagName === 'A' && e.target.dataset.name) {
            const old = document.querySelector('.elevator-list .active')    // 如果没有该类，获得到的就是 null
            // old里面是否有active这个类,如果有就移除，没有就不执行移除
            if (old) old.classList.remove('active')// old为 null时就不会执行
            e.target.classList.add('active')
            // 获得对应大盒子的 offsetTop的距离(距离body顶部)
            // console.log(e.target.dataset.name);
            const top = document.querySelector(`.${e.target.dataset.name}`).offsetTop  // 类名记得加 .
            document.documentElement.scrollTop = top - 10
            // console.log(document.querySelector(`.${e.target.dataset.name}`).offsetTop);
        }
    })

    // 页面滚动;根据大盒子的位置选中 小盒子添加 active类
    window.addEventListener('scroll', function () {
        const old = document.querySelector('.elevator-list .active')

        // 如果原来有active类的对象，就移除类，如果开始就没有对象，就不删除，所以不报错
        if (old) old.classList.remove('active')

        const seckill = document.querySelector('.seckill')
        const goodsNew = document.querySelector('.goodsNew')
        const hotBrand = document.querySelector('.hotBrand')
        const more = document.querySelector('.more')
        const n = document.documentElement.scrollTop + 160

        // 如果页面卷曲的距离 大于等于 大盒子距离页面顶部的距离 并且 小于下面大盒子的距离时
        if (n >= seckill.offsetTop && n < goodsNew.offsetTop) {
            // 选择第一个侧边栏链接
            document.querySelector('[data-name=seckill]').classList.add('active')
        } else if (n >= goodsNew.offsetTop && n < hotBrand.offsetTop) {
            document.querySelector('[data-name=goodsNew]').classList.add('active')
        } else if (n >= hotBrand.offsetTop && n < more.offsetTop) {
            document.querySelector('[data-name=hotBrand]').classList.add('active')
        } else if (n >= more.offsetTop) {
            document.querySelector('[data-name=more]').classList.add('active')
        }
    })

})();


// 插件 ------------------------------------------------------
var skSwiper = new Swiper(".mySwiper", {
    // 前后切换
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    // 自动播放
    // autoplay: true,
    autoplay: {
        delay: 3000,//1秒切换一次
        disableOnInteraction: false,
    },
});


// 显示本地数据里的用户名 -----------------------
// 用户名
const userName = document.querySelector('.shortcut .navs li:nth-child(1)')
const LogOut = document.querySelector('.shortcut .navs li:nth-child(3)')
function render() {
    // 2.1 读取到本地存储的用户名
    const uname = localStorage.getItem('dogUname')
    // console.log(uname)

    // 2.2 如果本地存储有，就调用用户名替换,没有就复原
    if (uname) {
        userName.innerHTML = `<a href="javascript:;"><i id="icon-user"></i>${uname}</a>`
        LogOut.innerHTML = '<a href="javascript:;">退出登录</a>'
    } else {
        userName.innerHTML = '<a href="login.html">请先登录</a>'
        LogOut.innerHTML = '<a href="register.html">免费注册</a>'
    }
}
render()

//  退出登入
LogOut.addEventListener('click', function (e) {
    // 删除本地存储的数据
    localStorage.removeItem('dogUname')
    // 重新渲染
    render()
})

