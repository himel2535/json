const loadPost = () => {
  const url = "https://jsonplaceholder.typicode.com/todos";
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayPost(data));
};
loadPost();

const displayPost = (posts) => {

  const postContainer = document.getElementById("post-container");
  postContainer.innerHTML=""


  posts.forEach((post) => {

    const postCard = document.createElement("div");

    postCard.innerHTML = `
        <div class="post-cards">
            <p>${post.completed ===true ? `<i class="fa-solid fa-square-check"></i>` : `<i class="fa-regular fa-square-check"></i>`} </p>

            <p>${post.title}</p>
        </div>
        `;

    postContainer.appendChild(postCard)

  });
};
