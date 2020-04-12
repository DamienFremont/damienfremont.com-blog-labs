-- https://github.com/MAIF/nio/blob/master/config/keycloak.sql

CREATE TABLE IF NOT EXISTS user_entity (
    id VARCHAR(36) NOT NULL,
    created_date bigint,
    enabled boolean DEFAULT false NOT NULL,
    username VARCHAR(255) UNIQUE,
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS credential (
    user_ID VARCHAR(36),      
    created_date bigint,                          
    credential_type VARCHAR(36),
    secret_data VARCHAR(4000),
    credential_data VARCHAR(4000),
    algorithm VARCHAR(36),
    PRIMARY KEY (user_ID),
	FOREIGN KEY (user_ID) REFERENCES user_entity (id)
);

CREATE TABLE IF NOT EXISTS user_session (
    id VARCHAR(36) NOT NULL,
    user_id VARCHAR(255),
    username VARCHAR(255),
    started integer,
    last_acess integer,
    PRIMARY KEY (id)
);
