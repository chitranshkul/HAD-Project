create table answer
(
    a_id   int auto_increment
        primary key,
    answer varchar(255) not null,
    flag   int          not null,
    q_id   int          null,
    constraint FK594rbn33x058r16p4glnjygdv
        foreign key (q_id) references question (q_id)
);

