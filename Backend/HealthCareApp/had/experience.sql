create table experience
(
    id          int          not null
        primary key,
    departement varchar(255) not null,
    feedback    varchar(255) not null,
    hospital    varchar(255) not null,
    position    varchar(255) not null,
    year        varchar(255) not null,
    uid         int          null,
    constraint FKewwi3jteqwnyp6wcfr4o92diy
        foreign key (uid) references user (id)
);

