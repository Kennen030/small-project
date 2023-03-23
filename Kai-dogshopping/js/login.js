// 登入模式切换
const tabNav = document.querySelector('.main .box .tab-nav')
// 下面对应的 两个盒子 // 得到的是伪数组
const pane = document.querySelectorAll('.main .box .tab-pane')
console.log(pane);

tabNav.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') {
        tabNav.querySelector('.active').classList.remove('active')
        e.target.classList.add('active')


        // for循环关闭所有盒子
        for (let i = 0; i < pane.length; i++) {
            pane[i].style.display = 'none'
        }
        // 让对应序号的 大pane 显示 
        console.log(e.target.dataset.id);
        pane[e.target.dataset.id].style.display = 'block'
    }
})


// 账号记录到本地存储里
const form = document.querySelector('.main form')
const username = document.querySelector('[name=username]')

form.addEventListener('submit', function (e) {
    e.preventDefault()
    // 记录用户名到本地存储
    // 用户名就是字符串，所以不需要修改为数字型
    localStorage.setItem('dogUname', username.value)
    // 跳转到首页
    location.href = 'index.html'
})
