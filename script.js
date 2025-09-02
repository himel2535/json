
// const loadPost = () => {
//   const url = "https://jsonplaceholder.typicode.com/posts";
//   fetch(url)
//     .then((res) => res.json())
//     .then((data) => {
//       console.log(data);
//       displayPost(data);
//     });
// };

// const displayPost = (posts) => {

//     // --for pushing this on this ul which li will be created--
//   let postContainer = document.getElementById("post-container");
//   postContainer.innerHTML=""
  

// //   ---creating a forEach loop---
//   posts.forEach((post) => {
//     // console.log(post.title)

//     // --create html--
//     const li = document.createElement("li");
//     li.innerText = post.title;
//     // console.log(li);

//     // --li push on ul --
//     postContainer.appendChild(li);
//   });
// };


const loadPost=()=>{
    const url="https://jsonplaceholder.typicode.com/posts"
    fetch(url)
    .then(response=>response.json())
    .then(data=>displayPost(data))
}

const displayPost=(posts)=>{

    let postContainer=document.getElementById("post-container");
    postContainer.innerHTML=""

    posts.forEach(post => {
        // let body=post.body;
        let postCard=document.createElement("div");
        postCard.innerHTML=`
        <div class="post-card">
        <h1> ${post.title} </h1>
        <p>
          ${post.body}
        </p>
      </div>
        `
        postContainer.appendChild(postCard)

    });
}

loadPost()