document.querySelector('span.mess-with-me').style.fontSize = '3em';
document.querySelector('p.mess-with-me').style.backgroundColor = 'lightgreen';
document.querySelector('#triceratops').style.width = '324px';
document.querySelector('#hide-me').style.display = 'none';
document.querySelector('#triceratops').addEventListener('click', function(){document.querySelector('#triceratops').style.border = '2px solid red';})
document.querySelector('#feathers').addEventListener('click', function(){document.querySelector('#feathers').style.opacity = '50%'})
document.querySelector('#rattle').addEventListener('click', function(){document.querySelector('#rattle').style.paddingRight = '100px'})
document.querySelector('#toggle').addEventListener('click', function(){document.querySelector('#row').style.backgroundColor = 'lightblue';})
document.querySelector('#toggle').addEventListener('dblclick', function(){document.querySelector('#row').style.backgroundColor = 'white';})
document.querySelector('#t-rex').addEventListener('mouseover', function(){document.querySelector('#t-rex').style.width = '200px';})
document.querySelector('#t-rex').addEventListener('mouseover', function(){document.querySelector('#t-rex').style.width = '200px';})
document.querySelector('#t-rex').addEventListener('mouseout', function(){document.querySelector('#t-rex').style.width = '162px';})

