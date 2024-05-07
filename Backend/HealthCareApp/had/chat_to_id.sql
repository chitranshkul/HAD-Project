create table chat_to_id
(
    chat_c_id int not null,
    to_id_id  int not null,
    primary key (chat_c_id, to_id_id),
    constraint FK487knltxu2k8bf1h8v5dk9g18
        foreign key (chat_c_id) references chat (c_id),
    constraint FKk57ocmic5rl190tiawcipx4by
        foreign key (to_id_id) references user (id)
);

