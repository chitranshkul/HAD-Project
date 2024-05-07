create table likes
(
    l_id int auto_increment
        primary key,
    bid  int null,
    uid  int null,
    constraint FKeeajsdpxohjqpkjwf5qbru4ls
        foreign key (bid) references blog (id),
    constraint FKf0fypv3evbep2esnpg8k7sn5u
        foreign key (uid) references user (id)
);

