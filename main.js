const messSpan = document.querySelector('span.mess-with-me');
messSpan.style.fontSize = '40px';

const greenPBack = document.querySelector('p.mess-with-me');
greenPBack.style.backgroundColor = 'green';

const hideDino = document.querySelector('#hide-me');
hideDino.style.display = 'none';

const tric = document.querySelector('#triceratops');
tric.style.width = '324px'



tric.addEventListener('click', onClick);

function onClick(){
    tric.style.border = '5px solid red';
}

tric.addEventListener('click', onClick2);

function onClick2(){
    tric.style.color = 'orange';
}



const feathered = document.querySelector('#feathers');

feathered.addEventListener('click', onClick2);
function onClick2(){
    feathered.style.opacity = '0.5';
}

const biggify = document.querySelector('#biggify');
biggify.addEventListener('mouseover', function(event){
    event.target.style.width= '200px';
});
