let games = [];

const getAllGames = (req, res) => {
  const gameList = games.map(game => {
    return {
      id: game.id,
      title: game.title,
      description: game.description,
      genre: game.genre,
      platform: game.platform,
      price: game.price
    };
  });

  res.json(gameList);
};


const createGame = (req, res) => {
  const { title, description, genre, platform, price } = req.body;
  const newGame = { id: games.length + 1, title, description, genre, platform, price };
  games.push(newGame);
  
  console.log(`New game created: Title - ${title}`);
  
  const response = {
    id: newGame.id,
    title: newGame.title,
    description: newGame.description,
    genre: newGame.genre,
    platform: newGame.platform,
    price: newGame.price
  };

  res.status(201).json(response);
};

const updateGame = (req, res) => {
  const { id } = req.params;
  const { title, description, genre, platform, price } = req.body;
  const game = games.find((game) => game.id === Number(id));
  if (game) {
    game.title = title || game.title;
    game.description = description || game.description;
    game.genre = genre || game.genre;
    game.platform = platform || game.platform;
    game.price = price || game.price;
    res.json(game);
  } else {
    res.status(404).json({ error: 'Game not found.' });
  }
};

const deleteGame = (req, res) => {
  const { id } = req.params;
  const index = games.findIndex((game) => game.id === Number(id));
  if (index !== -1) {
    games.splice(index, 1);
    res.sendStatus(204);
  } else {
    res.status(404).json({ error: 'Game not found.' });
  }
};

module.exports = {
  getAllGames,
  createGame,
  updateGame,
  deleteGame,
};
