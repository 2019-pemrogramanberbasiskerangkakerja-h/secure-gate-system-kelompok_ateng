CREATE TABLE IF NOT EXISTS Gate (
    gate_id INT AUTO_INCREMENT,
    name VARCHAR(255),
    PRIMARY KEY (gate_id)
)  ENGINE=INNODB;

CREATE TABLE IF NOT EXISTS Jadwal(
    jadwal_id INT AUTO_INCREMENT,
    open_time TIME,
    close_time TIME,
    fk_gate_id INT,
    FOREIGN KEY (fk_gate_id) REFERENCES Gate(gate_id),
    PRIMARY KEY (jadwal_id)
)   ENGINE=INNODB;

CREATE TABLE IF NOT EXISTS Grup (
    grup_id INT NOT NULL AUTO_INCREMENT,
    nama VARCHAR (255),
    fk_jadwal_id INT NOT NULL,
    FOREIGN KEY (fk_jadwal_id) REFERENCES Jadwal(jadwal_id),
    PRIMARY KEY (grup_id)
)	ENGINE=INNODB;

CREATE TABLE IF NOT EXISTS User (
    user_id INT NOT NULL AUTO_INCREMENT,
    nrp VARCHAR(20) NOT NULL UNIQUE,
    password VARCHAR(100) NOT NULL,
    fk_grup_id INT NOT NULL,
    FOREIGN KEY (fk_grup_id) REFERENCES Grup(grup_id),
    PRIMARY KEY (user_id)
)  ENGINE=INNODB;
