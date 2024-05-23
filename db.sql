CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    phonenumber INT NOT NULL,
    username VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);

CREATE TABLE huulga (
    id SERIAL PRIMARY KEY,
    shiljuulsen_dans VARCHAR(255) NOT NULL,
    huleen_avsan_bank VARCHAR(255) NOT NULL,
    huleen_avsan_dans VARCHAR(255) NOT NULL,
    huleen_avagchiin_ner VARCHAR(255) NOT NULL,
    guilgeenii_dun NUMERIC NOT NULL,
    valyut VARCHAR(50) NOT NULL,
    guilgeenii_utga VARCHAR(255)
);
