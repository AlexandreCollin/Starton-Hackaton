CREATE DATABASE IF NOT EXISTS hackathonP2p;

USE hackathonP2p;

CREATE TABLE IF NOT EXISTS user
(
    id INT UNSIGNED AUTO_INCREMENT NOT NULL,
    wallet VARCHAR(42) NOT NULL,
    pseudo TINYTEXT NOT NULL,
    password TEXT NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id)
);

-- CREATE TABLE IF NOT EXISTS question
-- (
--     id INT UNSIGNED AUTO_INCREMENT NOT NULL,
--     ownerId INT UNSIGNED NOT NULL,
--     content TEXT NOT NULL,
--     createdAt TIMESTAMP NOT NULL,
--     PRIMARY KEY (id),
--     FOREIGN KEY (ownerId) REFERENCES user(id),
-- );

-- CREATE TABLE IF NOT EXISTS answer
-- (
--     id INT UNSIGNED AUTO_INCREMENT NOT NULL,
--     ownerId INT UNSIGNED NOT NULL,
--     content TEXT NOT NULL,
--     questionId INT UNSIGNED NOT NULL,
--     createdAT TIMESTAMP NOT NULL,
--     PRIMARY KEY (id),
--     FOREIGN KEY (ownerId) REFERENCES user(id),
--     FOREIGN KEY (questionId) REFERENCES user(questionId)
-- );
