let likeCount = 0;

document.getElementById("like-button").addEventListener("click", () => {
  likeCount++;
  document.getElementById("like-count").textContent = `Likes: ${likeCount}`;
});
