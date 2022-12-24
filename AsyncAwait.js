console.log('person1: shows tickets');
console.log('person2: shows tickets');

// const promiseWifeBringTickets = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve('ticket');
//     },3000)
// });

// const getPopcorn = promiseWifeBringTickets.then((t)=>{
//     console.log('wife: i have the tickets');
//     console.log('husband: we should go in');
//     console.log('wife: no, i am hungry');
//     return new Promise((resolve,reject) => resolve(`${t} popcorn`));

// });

// const getButter = getPopcorn.then((t)=>{
//     console.log('husband: i got popcorn');
//     console.log('husband: we should go in');
//     console.log('wife: i need butter on my popcorn');
//     return new Promise((resolve,reject) => resolve(`${t} butter`));
// })

// getButter.then((t)=>{
//     console.log(t);
// })

const preMovie = async () => {
    const promiseWifeBringTickets = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('ticket');
        },3000)
    });

    const getPopcorn = new Promise((resolve,reject) => resolve(`popcorn`));
     
    const addButter =  new Promise((resolve,reject) => resolve(`butter`));

    const getColdDrinks = new Promise((resolve,reject)  => resolve(`colddrink`));

    let ticket = await promiseWifeBringTickets;

    console.log(`wife: i have the ${ticket}`);
    console.log('husband: we should go in');
    console.log('wife: no, i am hungry');

    let popcorn = await getPopcorn;

    console.log(`husband: i got ${popcorn}`);
    console.log('husband: we should go in');
    console.log('wife: i need butter on my popcorn');
 
    let butter = await addButter;
     
    console.log(`husband: i got ${butter}`);
    console.log(`husband: anything else darling`);
    console.log(`wife: i need cold drink`);

    let coldDrink = await getColdDrinks;

    console.log(`husband: i got ${coldDrink}`);
    console.log(`wife: lets got we are getting late`);
    console.log(`husband: thank you for the remiander *grins*`);

    return ticket;   
};

preMovie().then((m) => console.log(`person3: shows ${m}`));


// by using promise.all
// const preMovie = async () => {
//     const promiseWifeBringTickets = new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve('ticket');
//         },3000)
//     });

//     const getPopcorn = new Promise((resolve,reject) => resolve(`popcorn`));
//     const getcandy = new Promise((resolve,reject) => resolve(`candy`));
//     const getcoke = new Promise((resolve,reject) => resolve(`coke`));
    
//     let ticket = await promiseWifeBringTickets;

//     let [popcorn, candy, coke] = await Promise.all([getPopcorn,getcandy,getcoke])

//     console.log(`${popcorn},${candy},${coke}`);
//     return ticket;

    
// }

// preMovie().then((m) => console.log(`person3: shows ${m}`));


// console.log('person4: shows tickets');
// console.log('person5: shows tickets');