CREATE DATABASE cmarket;
CREATE TABLE users (
  id INT AUTO_INCREMENT,
  username varchar(255),
  PRIMARY KEY (id)
);

ALTER TABLE orders ADD FOREIGN KEY (user_id) REFERENCES users (id);
