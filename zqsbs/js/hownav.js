window.onresize = () => {
    if (window.innerWidth < 750) {
        document.getElementById('nav').style.display = 'none';
    } else {
        document.getElementById('nav').style.display = 'block';
    }
}