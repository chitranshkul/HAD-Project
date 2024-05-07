create table education
(
    id        int          not null
        primary key,
    degree    varchar(255) not null,
    institute varchar(255) not null,
    result    varchar(255) not null,
    summary   varchar(255) not null,
    year      varchar(255) not null,
    uid       int          null,
    constraint FKfwp37e1y8e7qfjc11kqixpes5
        foreign key (uid) references user (id)
);

