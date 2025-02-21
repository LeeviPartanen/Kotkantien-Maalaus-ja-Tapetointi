// Alustetaan muuttuja, joka seuraa aktiivista väriboksia
let activeBox = 'color-box1';

// Lisätään klikkaustapahtumat molemmille väribokseille
document.getElementById('color-box1').addEventListener('click', function() {
    activeBox = 'color-box1';
    highlightActiveBox();
});
document.getElementById('color-box2').addEventListener('click', function() {
    activeBox = 'color-box2';
    highlightActiveBox();
});

// Lisätään tapahtumakuuntelijat väripalettiin
document.querySelectorAll('.color-swatch').forEach(swatch => {
    swatch.addEventListener('click', function() {
        const color = this.getAttribute('data-color');
        document.getElementById(activeBox).style.backgroundColor = color;
    });
});

// Korostetaan aktiivinen boksi visuaalisesti
function highlightActiveBox() {
    document.getElementById('color-box1').classList.remove('active');
    document.getElementById('color-box2').classList.remove('active');
    document.getElementById(activeBox).classList.add('active'); 
}

// Nollataan väriboksit oletusvärille (esim. valkoiseksi)
document.getElementById('reset-button').addEventListener('click', function() {
    document.getElementById('color-box1').style.backgroundColor = 'white';
    document.getElementById('color-box2').style.backgroundColor = 'white';
});

// Generoidaan satunnainen väri ja asetetaan se aktiiviseen laatikkoon
document.getElementById('random-color-button').addEventListener('click', function() {
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16); // Satunnainen HEX-väri
    document.getElementById(activeBox).style.backgroundColor = randomColor;
});

// Käynnistetään korostus heti sivun latautuessa
highlightActiveBox();
