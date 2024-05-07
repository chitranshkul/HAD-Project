create table chat_from_id
(
    chat_c_id  int not null,
    from_id_id int not null,
    primary key (chat_c_id, from_id_id),
    constraint FKeytdp33e81oo4hb7ap015jt6e
        foreign key (chat_c_id) references chat (c_id),
    constraint FKj4vuv1jimv1ex0n1hu5o26lg0
        foreign key (from_id_id) references user (id)
);

