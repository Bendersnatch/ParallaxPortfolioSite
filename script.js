let text = document.getElementById('text');
let building1 = document.getElementById('building1');
let building2 = document.getElementById('building2');
let building_left = document.getElementById('building_left');
let building_right = document.getElementById('building_right');

window.addEventListener('scroll', () => {
    let value = window.scrollY;

    text.style.marginTop = value * 2 + 'px';
    building_right.style.top = value * 1.3 + 'px';
    building_left.style.top = value * 1.3 + 'px';
    building1.style.top = value * 0.8 + 'px';
    building2.style.top = value * 0.8 + 'px';
});

let sections = document.querySelectorAll('section');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;

        if (top >= offset && top < offset + height) {
            sec.classList.add('show-animate');
        } else {
            sec.classList.remove('show-animate');
        }
    })
}
