const grid = document.getElementById("games-grid");

games.forEach(game => {
  const card = document.createElement("div");
  card.className = "game-card";
  card.innerHTML = `
    <a href="${game.url}">
      <img src="${game.image}" alt="${game.title}">
      <h3>${game.title}</h3>
    </a>
  `;
  grid.appendChild(card);
});
