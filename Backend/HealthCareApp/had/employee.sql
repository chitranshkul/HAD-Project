create table employee
(
    id              int auto_increment
        primary key,
    email           varchar(255) null,
    first_name      varchar(255) null,
    last_name       varchar(255) null,
    photograph_path varchar(255) null,
    title           varchar(100) null,
    department_id   int          null,
    user_id         int          null,
    constraint UK_mpps3d3r9pdvyjx3iqixi96fi
        unique (user_id),
    constraint FK6lk0xml9r7okjdq0onka4ytju
        foreign key (user_id) references user (id),
    constraint FKbejtwvg9bxus2mffsm3swj3u9
        foreign key (department_id) references department (id)
);

