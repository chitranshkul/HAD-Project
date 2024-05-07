create table answer_from_id
(
    answer_a_id int not null,
    from_id_id  int not null,
    primary key (answer_a_id, from_id_id),
    constraint FK2bupksif2qeaw381ah2autmif
        foreign key (answer_a_id) references answer (a_id),
    constraint FKnd1ugp47irau5llonfvd52qk4
        foreign key (from_id_id) references user (id)
);

