
--change password to match local db in db.js
CREATE DATABASE propertyforyou;

CREATE TABLE users
(
  id serial PRIMARY KEY,
  email VARCHAR(100) UNIQUE NOT NULL,
  password VARCHAR(100) NOT NULL
);

CREATE TABLE adbuy
(
  id serial PRIMARY KEY,
  price INT,
  address VARCHAR(100),
  city VARCHAR(100),
  propertytype VARCHAR(100),
  postcode VARCHAR(20),
  description VARCHAR (100),
  bedroom INT,
  number VARCHAR(100),
  image TEXT
);

CREATE TABLE adrent
(
  id serial PRIMARY KEY,
  price INT NOT NULL,
  address VARCHAR(100) NOT NULL,
  city VARCHAR(100) NOT NULL,
  propertytype VARCHAR(100) NOT NULL,
  postcode VARCHAR(20) NOT NULL,
  description VARCHAR (100) NOT NULL,
  bedroom INT NOT NULL,
  number VARCHAR(100) NOT NULL,
  bill VARCHAR(20),
  furnishing VARCHAR(20)
);

-- to insert data into adbuy for testing
-- INSERT INTO adbuy
-- (price, address, city, propertytype, postcode, description, bedroom, number)
-- VALUES('20000', '24bluefoxclose', 'leicester', 'house', 'le30ee', 'a student house with 4 ensuite rooms', '4', '07123456789');
-- VALUES('40000', '24bluefoxclose', 'leicester', 'house', 'le30ee', 'a student house with 4 ensuite rooms', '2', '07123456789');


-- to insert data into adrent for testing
-- INSERT INTO adrent
--   (price, address, city, propertytype, postcode, description, bedroom, number, bill, furnishing)
-- VALUES('750', '10 GatewayHouse', 'leicester', 'house', NULL, 'a property belonging to DMU', '2', '07123456789', 'all bills included', 'not furnished');
-- VALUES
-- ('40000', '24bluefoxclose', 'leicester', 'house', 'le30ee', 'a student house with 4 ensuite rooms', '2', '07123456789');

