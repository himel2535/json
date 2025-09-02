
const loadPost = () => {
  const url = "https://jsonplaceholder.typicode.com/posts";
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      displayPost(data);
    });
};

const displayPost = (posts) => {

    // --for pushing this on this ul which li will be created--
  let postContainer = document.getElementById("post-container");

//   ---creating a forEach loop---
  posts.forEach((post) => {
    // console.log(post.title)

    // --create html--
    const li = document.createElement("li");
    li.innerText = post.title;
    // console.log(li);

    // --li push on ul --
    postContainer.appendChild(li);
  });
};


