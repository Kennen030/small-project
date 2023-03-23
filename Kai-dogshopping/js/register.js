// 验证码 倒计时
!(function () {
    // 1. 获取 点击获取验证码盒子
    const code = document.querySelector('.code')
    let flag = true    // 1.2.2 通过控制 flag的变量来来控制是否执行
    code.addEventListener('click', function () {
        if (flag) {
            flag = false  // 解决重复执行倒计时
            // 1.2 五秒倒计时
            let i = 5
            // 1.3.1
            code.innerHTML = `0${i}秒后重新获取`    // 点击完，立即执行一次

            // 1.2.1 间歇函数执行
            let timer = setInterval(function () {
                i--
                // 1.3 倒数
                code.innerHTML = `0${i}秒后重新获取`
                if (i === 0) {
                    // 1.4 倒数到 0时关闭
                    clearInterval(timer)
                    code.innerHTML = `获取验证码`
                    // 1.5 关闭时开启点击
                    flag = true
                }
            }, 1000)
        }
    })
})();



// 用户名验证 ------------------------------------------
// 1.获取到该输入框
const username = document.querySelector('.main [name=username]')
// 2. change 输入框里的内容发生修改后失去焦点执行
username.addEventListener('change', verifyUname)
function verifyUname() {
    console.log('12');
    const msg = username.nextElementSibling     // username的下一个兄弟盒子
    // 3. 正则判断
    const judge = /^[a-zA-Z0-9-_]{6,16}$/
    // 4. 如果 输入框里的内容不符合就显示警示
    if (!judge.test(username.value)) {
        msg.innerHTML = '请输入6~16位数字或者字母包括下划线'
        return false
    }
    // 5. 符合就清空 并且返回 true给函数
    msg.innerHTML = ''
    return true
}

// 手机号
const tel = document.querySelector('.main [name=tel]')
tel.addEventListener('change', verifyTel)
function verifyTel() {
    const msg = tel.nextElementSibling
    const judge = /^1(3\d|4[5-9]|5[0-35-9]|6[567]|7[0-8]|8\d|9[0-35-9])\d{8}$/
    if (!judge.test(tel.value)) {
        msg.innerHTML = '请输入正确的手机号码'
        // 返回 false
        return false
    }

    //  通过
    msg.innerHTML = ''
    return true
}

//手机验证码
const telCode = document.querySelector('.main [name=telCode]')
telCode.addEventListener('change', verifytelCode)
function verifytelCode() {
    const msg = telCode.nextElementSibling
    const judge = /^\d{6}$/
    if (!judge.test(telCode.value)) {
        msg.innerHTML = '请输入6位数字'
        // 返回 false
        return false
    }

    //  通过
    msg.innerHTML = ''
    return true
}

// 密码
const password = document.querySelector('.main [name=password]')
password.addEventListener('change', verifyPassword)
function verifyPassword() {
    const msg = password.nextElementSibling
    const judge = /^[a-zA-Z0-9-_]{6,16}$/
    if (!judge.test(password.value)) {
        msg.innerHTML = '请输入6至20位字母、数字和符号组合'
        return false
    }
    msg.innerHTML = ''
    return true
}

// 确认密码
const confirm = document.querySelector('.main [name=confirm]')
confirm.addEventListener('change', verifyConfirm)
function verifyConfirm() {
    const msg = confirm.nextElementSibling
    if (confirm.value !== password.value) {
        msg.innerHTML = '两次输入密码不一致'
        return false
    }
    msg.innerHTML = ''
    return true
}

// 同意用户协议
const agree = document.querySelector('.main [name=agree]')
// console.log(!agree.checked);

const form = document.querySelector('.main form')
// 提交按钮
form.addEventListener('submit', function (e) {
    if (!agree.checked) {
        alert('请勾选用户同意协议')
        e.preventDefault() // 阻止提交，阻止默认行为
    }
    if (!verifyUname()) e.preventDefault()
    if (!verifyTel()) e.preventDefault()
    if (!verifytelCode()) e.preventDefault()
    if (!verifyPassword()) e.preventDefault()
    if (!verifyConfirm()) e.preventDefault()
})


// setInterval(function () {
//     console.log(agree.checked)
// }, 500)