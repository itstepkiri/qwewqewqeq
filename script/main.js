//! інтератор - next()
//! {value: 12; done: false}
//! генератор - функція function* => yeild

// function* generate(){
//     yield 1
//     yield 2
//     yield 3
//     yield 4
//     yield 5
// }

// const isGenerate = generate()

// console.log(isGenerate.next());
// console.log(isGenerate.next());
// console.log(isGenerate.next());
// console.log(isGenerate.next());
// console.log(isGenerate.next());
// console.log(isGenerate.next());


// function* generateNumbers(){
//     for(let i = 1; i <= 5; i++){
//         yield i
//     }
// }

// const numbers = generateNumbers()

// console.log(numbers.next());
// console.log(numbers.next());
// console.log(numbers.next());
// console.log(numbers.next());
// console.log(numbers.next());
// console.log(numbers.next());
// console.log(numbers.next().value);
// console.log(numbers.next().done);

function* infiniteNumbers(){
    let i = 1
    while(true){
        yield i
        i++
    }
}

const numbers2 = infiniteNumbers()
console.log(numbers2.next());