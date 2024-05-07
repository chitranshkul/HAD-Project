create table chatting
(
    cid     int auto_increment
        primary key,
    date    varchar(255) not null,
    message varchar(255) not null,
    fromid  int          null,
    toid    int          null,
    constraint FKcbolgch6nutsvv4wf1c4r2epj
        foreign key (toid) references user (id),
    constraint FKcrvnygorhpc5xv7jay6i8iscn
        foreign key (fromid) references user (id)
);

