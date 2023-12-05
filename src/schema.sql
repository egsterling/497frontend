PRAGMA foreign_keys = ON;

CREATE TABLE users(
  username VARCHAR(20) NOT NULL,
  fullname VARCHAR(40),
  email VARCHAR(40),
  filename VARCHAR(64),
  password VARCHAR(256) NOT NULL,
  bio VARCHAR(1024),
  liked_game_id INTEGER
  FOREIGN KEY (liked_game_id) REFERENCES games(gameid),
  PRIMARY KEY(username)
);

CREATE TABLE games(
    gameid INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR(256) NOT NULL,
    description VARCHAR(1024) NOT NULL,
    rules VARCHAR(1024) NOT NULL,
    img VARCHAR(64),
    ownerid VARCHAR(64) NOT NULL,
    FOREIGN KEY (owner)
        REFERENCES users(username)
);

CREATE TABLE likedGames(
    username VARCHAR(20) NOT NULL,
    gameid INTEGER NOT NULL,
    FOREIGN KEY (username)
        REFERENCES users(username),
    FOREIGN KEY (gameid)
        REFERENCES games(gameid)
);

CREATE TABLE dice(
  gameid INTEGER NOT NULL,
  FOREIGN KEY (gameid) REFERENCES games(gameid)
);

CREATE TABLE card(
  gameid INTEGER NOT NULL,
  FOREIGN KEY (gameid) REFERENCES games(gameid)
);

CREATE TABLE board(
  gameid INTEGER NOT NULL,
  FOREIGN KEY (gameid) REFERENCES games(gameid)
);

CREATE TABLE outdoor(
  gameid INTEGER NOT NULL,
  FOREIGN KEY (gameid) REFERENCES games(gameid)
);

CREATE TABLE other(
  gameid INTEGER NOT NULL,
  FOREIGN KEY (gameid) REFERENCES games(gameid)
);

CREATE TABLE comments(
  commentid INTEGER PRIMARY KEY AUTOINCREMENT,
  owner VARCHAR(20) NOT NULL,
  gameid INTEGER,
  text VARCHAR(1024) NOT NULL,
  created DATETIME DEFAULT CURRENT_TIMESTAMP,

  FOREIGN KEY (gameid)
    REFERENCES games(gameid)
    ON DELETE CASCADE,

  FOREIGN KEY (owner)
    REFERENCES users(username)
    ON DELETE CASCADE
);

CREATE TABLE likes(
  likeid INTEGER PRIMARY KEY AUTOINCREMENT,
  owner VARCHAR(20) NOT NULL,
  gameid INTEGER,
  created DATETIME DEFAULT CURRENT_TIMESTAMP,

FOREIGN KEY (gameid)
    REFERENCES games(gameid)
    ON DELETE CASCADE,

FOREIGN KEY (owner)
    REFERENCES users(username)
    ON DELETE CASCADE
);