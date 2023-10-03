const card = document.querySelector(".card");

const fetchPosts = async () => {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts");

    const data = await response.json();

    data.forEach((post) => {
      const postCard = document.createElement("div");
      postCard.setAttribute("class", "post-card");
      postCard.innerHTML = `
        <img src = "../img/1476876132-photo.jpg">
        <h4>${post.id}</h4>
        <h3>${post.title}</h3>
        <p>${post.body}</p>
      `;

      card.append(postCard);
    });
  } catch (error) {
    console.error("Произошла ошибка:", error.message);
  }
};
console.log(5);
fetchPosts();
