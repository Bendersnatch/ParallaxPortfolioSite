let text = document.getElementById('text');
let building1 = document.getElementById('building1');
let building2 = document.getElementById('building2');
let building_left = document.getElementById('building_left');
let building_right = document.getElementById('building_right');

window.addEventListener('scroll', () => {
    let value = window.scrollY;

    text.style.marginTop = value * 2.5 + 'px';
    building_right.style.left = value * 1.5 + 'px';
    building_left.style.left = value * -1.5 + 'px';
    building1.style.top = value * 1 + 'px';
    building2.style.top = value * 1 + 'px';
});
