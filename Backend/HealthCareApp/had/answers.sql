create table answers
(
    a_id         int auto_increment
        primary key,
    answers_text varchar(1000) not null,
    date         varchar(255)  not null,
    flag         int           not null,
    status       bit           not null,
    upvotes      int           not null,
    q_id         int           null,
    uid          int           null,
    constraint FKoj7r0rrodjxdf1cwoy4tig6h3
        foreign key (q_id) references question (q_id),
    constraint FKs6v1yv5xjxp8mcm6uovb6310p
        foreign key (uid) references user (id)
);

