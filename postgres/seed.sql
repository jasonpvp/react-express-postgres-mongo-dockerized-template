\c WEB_APP_NAME

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  first_name VARCHAR(50) not null,
  last_name VARCHAR(50) not null,
  email VARCHAR(100) UNIQUE not null,
  created_at DATE not null default CURRENT_TIMESTAMP,
  updated_at DATE
);

CREATE TABLE items (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) not null,
  description TEXT not null default '',
  description_ts tsvector GENERATED ALWAYS AS (to_tsvector('english', description)) STORED,
  created_at DATE not null default CURRENT_TIMESTAMP,
  update_at DATE
);

INSERT INTO users (first_name, last_name, email) VALUES
  ('test', 'user', 'test-user@email.com');

INSERT INTO items (title, description) VALUES
  ('ticket 1', 'This is the description of ticket 1'),
  ('ticket 2', 'The rain in Spain falls mainly on the plains'),
  ('ticket 3', 'You should not be reading this. If you can see it you are too close.');
