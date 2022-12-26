
async function playStation(){
console.log('a');
console.log('b');

const message1 = await new Promise((resolve,reject) =>{
    setTimeout(() => {
        resolve('Buying a playstation');
    },1000);
})
console.log(message1);
const message2 = await new Promise((resolve,reject) =>{
    setTimeout(() => {
        console.log('start playing ps');
        resolve('booting succesfully');
    },1000);
})
// jjl
// console.log(message1);
console.log(message2);
console.log('playing');

}

playStation()