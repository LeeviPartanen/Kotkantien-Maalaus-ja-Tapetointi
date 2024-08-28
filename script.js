let activeBox = 'color-box1';
document.getElementById('color-box1').addEventListener('click', function() {
    activeBox = 'color-box1';
    highlightActiveBox();
});
document.getElementById('color-box2').addEventListener('click', function() {
    activeBox = 'color-box2';
    highlightActiveBox();
});
document.querySelectorAll('.color-swatch').forEach(swatch => {
    swatch.addEventListener('click', function() {
        const color = this.getAttribute('data-color');
        document.getElementById(activeBox).style.backgroundColor = color;
    });
});
function highlightActiveBox() {
    document.getElementById('color-box1').classList.remove('active');
    document.getElementById('color-box2').classList.remove('active');
    document.getElementById(activeBox).classList.add('active'); 
}
highlightActiveBox();