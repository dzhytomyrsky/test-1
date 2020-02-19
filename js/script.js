// this не ссылается на саму функцию
// function foo (num) {
//     console.log('foo: ' + num );

//     this.count++;
// }

// foo.count = 0;

// for (var i = 0; i < 10; i++) {
//     if (i > 5) {
//         foo.call(foo, i);
//     }    
// }

// console.log(foo.count);
function foo (num) {
    console.log(num);

    this.count++;
}

foo.count = 0;

for (let i = 0; i < 10; i++) {
    if (i > 5) {
        foo.call(foo, i)
    }
}

console.log(foo.count);

// this не ссылается на область видимости
// "Объект" области вилимости не доступен в JS коде. 
// Это внутренняя часть механизма реализации языка (интерпритатора) 

function baz () {
    var a = 2;
    this.bar();
}

function bar () {
    console.log(this.a);
}

baz();

function a1 () {
    var a = 2;
    this.a2();
}

function a2 () {
    console.log()
}

// В действительности this — это привязка, которая создается во время вызова функции,
//  и на что она ссылается определяется тем, где и при каких условиях функция была вызвана.