create table question
(
    q_id          int auto_increment
        primary key,
    question_text varchar(255) not null,
    date          varchar(255) not null,
    flag          int          not null,
    status        bit          not null,
    tags          varchar(255) not null,
    uid           int          null,
    constraint FK9sgnhx4p76r4hka76ebi3khgw
        foreign key (uid) references user (id)
);

