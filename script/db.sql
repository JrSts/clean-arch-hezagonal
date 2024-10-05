create extension if not EXISTS "uuid-ossp"

CREATE TABLE usuarios (
  id uuid PRIMARY KEY,
  nome varchar(255) NOT NULL,
  email varchar(255) not null,
  senha varchar(255) not null
);