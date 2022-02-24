const open = document.getElementById('open');
const close = document.getElementById('close');
const container = document.querySelector('.container');
const lurkbuttz = document.querySelector('.lurkbuttz');

open.addEventListener('click', () => container.classList.add('show-nav'));
open.addEventListener('click', () => lurkbuttz.classList.add('show-nav'));

close.addEventListener('click', () => container.classList.remove('show-nav'));
close.addEventListener('click', () => lurkbuttz.classList.remove('show-nav'));

