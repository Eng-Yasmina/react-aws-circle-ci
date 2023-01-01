DROP TABLE IF EXISTS notes;
-- create table users
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE TABLE notes(
    id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
    title VARCHAR(50) NOT NULL,
    content VARCHAR(255) NOT NULL
);
INSERT INTO notes (title, content)
VALUES ('Note 1', 'This is note 1');
INSERT INTO notes (title, content)
VALUES ('Note 2', 'This is note 2');
INSERT INTO notes (title, content)
VALUES ('Note 3', 'This is note 3');