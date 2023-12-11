// menu
var navLinks = document.getElementById("navLinks");
function showMenu(){
    navLinks.style.left = "0";
}
function hideMenu(){
    navLinks.style.left = "-200px";
}
// menu end

// comments
const scriptURL = 'https://script.google.com/macros/s/AKfycbwKJDYZMeKi2zAJsge74ykIs8qRUrlQew48kclt3R8oyJ1pZKanoxVGRtzdpThkVNf4/exec'
const form = document.forms['comments']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => alert("تم إرسال التعليق بنجاح" ))
    .then(() => {  window.location.reload(); })
    .catch(error => console.error('خطأ يرجى المحاولة مرة أخرى', error.message))
})
// comments end