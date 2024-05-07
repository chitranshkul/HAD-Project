create table courses
(
    course_id   int auto_increment
        primary key,
    capacity    varchar(100) not null,
    course_code varchar(100) not null,
    credits     varchar(100) not null,
    description varchar(500) not null,
    name        varchar(100) not null,
    term        varchar(100) not null,
    year        varchar(100) not null,
    id          int          null,
    constraint UK_p02ts69sh53ptd62m3c67v0
        unique (course_code),
    constraint FK1e780dott6ysh8itpiyq2kmu2
        foreign key (id) references employee (id)
);

