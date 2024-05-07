create table dislikes
(
    d_id int auto_increment
        primary key,
    bid  int null,
    uid  int null,
    constraint FK2tobhqoh371837y0stpy40dt9
        foreign key (bid) references blog (id),
    constraint FK92yoq5v5ved35fvlh9v1nf2j5
        foreign key (uid) references user (id)
);

