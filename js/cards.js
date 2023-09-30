const wrapper = document.querySelector(".wrapper");

const fetchPosts = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();

    data.forEach((post) => {
      const postCard = document.createElement("div");
      postCard.classList.add("post-card");

      postCard.innerHTML = `
        <img src="your-image-url.jpg" alt="Post Image">
        <h3>${post.title}</h3>
        <p>${post.body}</p>
      `;

      wrapper.appendChild(postCard);
    });
  } catch (error) {
    console.error("Произошла ошибка:", error.message);
  }
};

fetchPosts();
