const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    })
})

const hiddenElements = document.querySelectorAll('.hidden')
hiddenElements.forEach((el) => { observer.observe(el) })

const divSnap = document.getElementById('containSnap');
const progress = document.getElementById('progressbar');

divSnap.onscroll = function () {

    let totalHeight = divSnap.scrollHeight - window.innerHeight;
    let progressHeight = (divSnap.scrollTop / totalHeight) * 100;
    progress.style.height = progressHeight + "%";
}