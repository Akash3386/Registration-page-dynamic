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

function createPost(post,callback){
    setTimeout(()=>{
        posts.push({...post,createdAt: new Date().getTime()});
        callback();
    },2000);
}

function create4thPost(post,createPost){
    setTimeout(()=>{
        posts.push({...post,createdAt: new Date().getTime()});
        createPost({title: 'Post 4', body: 'This is post four',},getPosts);
    
    },4000)
}
create4thPost({title: 'Post 3', body: 'This is post three'},createPost);

var timer;
var count =0;
function lastEditedInSecondAgo(){
    count =0;
    clearInterval(timer)
    timer = setInterval(()=>{
        count++;
        console.log(count);
        // document.body.innerHTML = `<h2>${timer}</h2> times ago`;
    },5000)
}
// lastEditedInSecondAgo();