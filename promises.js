const posts = [
    { title: 'Post 1', body: 'This is post one', createdAt: new Date().getTime()},
    { title: 'Post 2', body: 'This is post two', createdAt: new Date().getTime()}
];
let interValid = 0; 
function getPosts() {
    clearInterval(interValid)
    interValid = setInterval(() => {
       let output = '';
       posts.forEach((post,index)=>{
        output += `<li>${post.title} created ${parseInt((new Date().getTime()-post.createdAt)/1000)} seconds ago</li>`
       });
    //    console.log(interValid);
       document.body.innerHTML = output;  

    },1000);
}

function createPost(post){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            posts.push({...post,createdAt: new Date().getTime()});


            const error = false;

            if(error==false) {
               resolve(posts);
            }
            else{
               reject('Error: Something went wrong');
            }
        },2000);
    });
    
}


function deletePost(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const len = posts.length;
            if(len>0){
                resolve(posts.pop());
            }else{
                reject('');
            }
        },1000)
    })
}
createPost({ title: 'Post 3',body: 'This is post three'})
.then(()=>{
    getPosts();
    deletePost().then(()=>{
        deletePost().then(()=>{
            deletePost().then(()=>{
                deletePost()
                .catch((err)=>{
                    console.log('Inside catch block',err);
                })
            }).catch((err)=>{})
        }).catch((err)=>{})
    }).catch((err)=>{})
}).catch((err)=>{})

createPost({ title: 'Post 4',body: 'This is post four'})
.then(()=>{
    getPosts
    deletePost   
})

// promise.all
// const promise1 = Promise.resolve('Hello world');
// const promise2 = 10;
// const promise3 = new Promise((resolve,reject)=>{
//     setTimeout(resolve,2000,'Goodbye')
// });
// Promise.all([promise1, promise2, promise3])
// .then(values=>console.log(values));
// const previousTime =  new Date();
// console.log("Before cteating post 3, user lastactivityTime = ",previousTime);

// const promise1 = createPost({ title: 'Post 3',body: 'This is post three'});

// const updateLastActivityTime = new Promise((resolve,reject)=>{
//     setTimeout(()=>{

//         resolve(new Date().getTime())
//     })
// });
// Promise.all([promise1,updateLastActivityTime])
// .then(([createpostresolve,lastactivitytimeresolve])=>{
//     console.log('After Creating post 3 >>>>>');
//     console.log("posts >>> ",createpostresolve,);
//     deletePost().catch((err)=>{                   
//       console.log('Inside catch block',err);
//     })
//     console.log("User last activity time",lastactivitytimeresolve)
      
// })
// .catch(err=> console.log(err));

