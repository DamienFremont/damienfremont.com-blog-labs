CREATE TABLE IF NOT EXISTS projetmago_users (
  ID SERIAL PRIMARY KEY,
  username VARCHAR(30),
  email VARCHAR(100),
  enabled BOOLEAN DEFAULT FALSE,
  session_active BOOLEAN DEFAULT FALSE
);