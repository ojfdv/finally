// 初始化firebase对象
var firebaseConfig = {
    apiKey: "AIzaSyCm3OWWSvoYR8cvtRrXdmOk7A78pGHe128",
    authDomain: "contactform-63c92.firebaseapp.com",
    databaseURL: "https://contactform-63c92.firebaseio.com",
    projectId: "contactform-63c92",
    storageBucket: "",
    messagingSenderId: "318791736483",
    appId: "1:318791736483:web:d038d5377f405e84c9f316"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// 创建一个collection
var messageRef = firebase.database().ref('message');

// 1-17行代码涉及到firebase，此处不详解，若有需要联系博主QQ：2108123704

// 添加submit事件
document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
    e.preventDefault();
    // console.log(123);

    // 获取input中的值
    var name = getInputVal('name');
    var company = getInputVal('company');
    var email = getInputVal('email');
    var phone = getInputVal('phone');
    var message = getInputVal('message');
    // console.log(name);

    // 存储数据
    saveMessage(name, company, email, phone, message);

    // 展示alert
    document.querySelector('.alert').style.display = 'block';

    // 2秒后消失alert
    setTimeout(function() {
        document.querySelector('.alert').style.display = 'none';
    }, 2000);

    // 清除表单
    document.getElementById('contactForm').reset();
}

function getInputVal(id) {
    return document.getElementById(id).value;
}

function saveMessage(name, company, email, phone, message) {
    messageRef.push({
        name: name,
        company: company,
        email: email,
        phone: phone,
        message: message
    });
}
————————————————
版权声明：本文为CSDN博主「hr226」的原创文章，遵循 CC 4.0 BY-SA 版权协议，转载请附上原文出处链接及本声明。
原文链接：https://blog.csdn.net/hr226/article/details/100742455