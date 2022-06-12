DROP TABLE IF EXISTS recipes CASCADE;

CREATE TABLE recipes (
  id SERIAL PRIMARY KEY NOT NULL,
  category_id INTEGER NULL REFERENCES categories(id) ON DELETE CASCADE,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  title VARCHAR(255) NOT NULL,
  ingredient TEXT,
  directions TEXT,
  image TEXT,
  prep_time VARCHAR(255) NOT NULL,
  portion_size VARCHAR(255) NOT NULL,
  difficulty VARCHAR(255) NOT NULL
  
  
);
