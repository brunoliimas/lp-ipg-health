// mudar bg header com scroll


function scrollHeader() {
    // const scrollY = window.pageYOffset
    const header = document.getElementById('header');
    if (this.scrollY >= 1280) {
        header.classList.add ("scroll-header")
    } else {
        header.classList.remove ("scroll-header")
    }
}

window.addEventListener("scroll", scrollHeader);