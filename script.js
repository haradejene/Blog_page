document.addEventListener("DOMContentLoaded", function () {
  const commentForms = document.querySelectorAll(".comments");

  commentForms.forEach((form) => {
    const commentContainer = document.createElement("div");
    commentContainer.classList.add("comment-list");
    form.parentElement.appendChild(commentContainer);
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const input = form.querySelector("input[name='text']");
      const commentText = input.value.trim();
      if (commentText === "") return;
      const commentEl = document.createElement("p");
      commentEl.classList.add("comment");
      commentEl.textContent = commentText;
      commentContainer.appendChild(commentEl);
      input.value = "";
    });
  });
});
// Fetch blog posts from JSONPlaceholder
fetch('https://jsonplaceholder.typicode.com/posts?_limit=5') 
  .then(response => response.json())
  .then(posts => {
    const postsContainer = document.getElementById('posts');
    posts.forEach(post => {
      const postDiv = document.createElement('div');
      postDiv.classList.add('fetched-post');

      postDiv.innerHTML = `
        <h3>${post.title}</h3>
        <p>${post.body}</p>
      `;

      postsContainer.appendChild(postDiv);
    });
  })
  .catch(error => {
    console.error('Error fetching posts:', error);
  });
