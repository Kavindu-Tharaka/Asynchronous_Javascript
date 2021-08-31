// console.log('Before');

// const user = DBCall(3);
// console.log(user);

// console.log('After');

// function DBCall(id){
//     setTimeout(() => {
//         console.log('DB request...');
//         return {id: id, name: 'KTM'};
//     }, 2000);
// }

/*-----------------------------------------------------------*/

console.log('Before');

const user = DBCall(3);
console.log(user);

console.log('After');

function DBCall(id){
    setTimeout(() => {
        console.log('DB request...');
        return {id: id, name: 'KTM'};
    }, 2000);

    return 'hello';
}