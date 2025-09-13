// const myName = document.getElementById('myNameText');

// let typewriter = new Typewritter (myName, {
//     loop : true
// });

// typewriter.typeString('Arthur Bazilio de Moraes')
//     .pausefor(2500)
//     .start();

var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Olá Mundo!!!')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Seu texto está aqui')
    .pauseFor(2500)
    .deleteChars(9)
    .typeString('ou não...')
    .start();