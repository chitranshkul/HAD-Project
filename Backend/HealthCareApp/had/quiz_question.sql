create table quiz_question
(
    id       int auto_increment
        primary key,
    option1  varchar(255) not null,
    option2  varchar(255) not null,
    option3  varchar(255) not null,
    option4  varchar(255) not null,
    points1  int          not null,
    points2  int          not null,
    points3  int          not null,
    points4  int          not null,
    question varchar(255) not null
);

