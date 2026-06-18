const form = document.querySelector('form')
const name = document.querySelector('#name')
const email = document.querySelector('#email')
const pass = document.querySelector('#pass')


form.onsubmit = (e) =>{
    e.preventDefault()
    if(!name.value) {
        alert('دخل الاسم')
    }else if(!email.value) {
        alert('دخل الايميل')
    } else if(!pass.value) {
        alert('دخل الباسورد')
    } else {
        window.location= './المحتوى التدريبي.html'
    }
}







const submitButton = document.getElementById('preTestForm');
if (submitButton) {
    submitButton.addEventListener('click', function(e) {
        localStorage.setItem('html_test_submitted', 'true');

    });
}

document.addEventListener("DOMContentLoaded", function() {
    
    // التحقق مما إذا كان قد تم الضغط على زر الإرسال في صفحة الاختبار
    if (localStorage.getItem('html_test_submitted') === 'true') {
        const htmlSession = document.getElementById('./الجلسة الأولى.html');
        if (htmlSession) {
            htmlSession.style.display = 'block'; // إظهار الجلسة
        }
    }
    
});

