CREATE DATABASE firstapi;

\l

\c firstapi;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(40),
    email TEXT
);

INSERT INTO users (name, email)
    VALUES ('joe', 'joe@ibm.com'),
    ('ryan', 'ryan@faztweb.com');

select * from users;




CREATE TABLE users (

    id SERIAL PRIMARY KEY,
    username VARCHAR(40), 
    email TEXT, 
    password VARCHAR(40), 
    full_name TEXT, 
    company VARCHAR(40),
    cif VARCHAR(40), 
    siret VARCHAR(40), 
    zip_code VARCHAR(40), 
    country VARCHAR(40), 
    city VARCHAR(40), 
    phone_1 VARCHAR(40), 
    phone_2 VARCHAR(40), 
    email_paypal VARCHAR(40), 
    role VARCHAR(40), 
    wallet_balance integer, 
    status boolean

);

alter table users
   add constraint UQ_users_username
   unique (username);

alter table users
   add constraint UQ_users_email
   unique (email);
