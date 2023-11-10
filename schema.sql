use hack_test;

ALTER DATABASE hack_test 
CHARACTER SET utf8mb4 
COLLATE utf8mb4_general_ci;

SET GLOBAL event_scheduler = ON;

CREATE TABLE `category` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NULL,
    PRIMARY KEY (`id`)
);

INSERT INTO category values (1, "독서");
INSERT INTO category values (2, "운동");
INSERT INTO category values (3, "공부");
INSERT INTO category values (4, "취미");

CREATE TABLE `gathering` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `category_id` INT NOT NULL,
    `type` ENUM('challenge', 'hobby') NULL,
    `title` VARCHAR(255) NULL,
    `created_at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
    `image` BLOB NULL,
    `num_of_people` INT NULL,
    `introduction` TEXT NULL,
    PRIMARY KEY (`id`),
    FOREIGN KEY (`category_id`) REFERENCES `category` (`id`)
);

CREATE TABLE `user` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(40) NOT NULL,
    `password` VARCHAR(40) NOT NULL,
    `name` VARCHAR(40) NOT NULL,
    `created_at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
    `image` BLOB,
    `company` VARCHAR(255),
    PRIMARY KEY (`id`)
);


CREATE TABLE `gathering_notice` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `gathering_id` INT NOT NULL,
    `content` TEXT NULL,
    `created_at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (`id`),
    FOREIGN KEY (`gathering_id`) REFERENCES `gathering` (`id`)
);

CREATE TABLE `member` (
    `user_id` INT NOT NULL,
    `gathering_id` INT NOT NULL,
    PRIMARY KEY (`user_id`, `gathering_id`),
    FOREIGN KEY (`user_id`) REFERENCES `user` (`id`),
    FOREIGN KEY (`gathering_id`) REFERENCES `gathering` (`id`)
);

CREATE TABLE `gathering_activity` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `gathering_id` INT NOT NULL,
    `content` TEXT NULL,
    `created_at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
    `location` VARCHAR(255) NULL,
    `appointment_time` TIMESTAMP NULL,
    PRIMARY KEY (`id`),
    FOREIGN KEY (`gathering_id`) REFERENCES `gathering` (`id`)
);
CREATE TABLE `activity_attend` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `gathering_id` INT NOT NULL,
    `user_id` INT NOT NULL,
    PRIMARY KEY (`id`),
    FOREIGN KEY (`gathering_id`) REFERENCES `gathering` (`id`),
    FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
);

CREATE TABLE `gathering_content` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `activity_id` INT NOT NULL,
    `user_id` INT NOT NULL,
    `created_at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
    `content` TEXT NULL,
    `image` BLOB NULL,
    PRIMARY KEY (`id`),
    FOREIGN KEY (`activity_id`) REFERENCES `gathering_activity` (`id`),
    FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
);


