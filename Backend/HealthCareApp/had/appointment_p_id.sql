create table appointment_p_id
(
    appointment_a_id int not null,
    p_id_id          int not null,
    primary key (appointment_a_id, p_id_id),
    constraint FKkdurcdl7eya7ift40eh17pkxj
        foreign key (appointment_a_id) references appointment (a_id),
    constraint FKo62rs57cjf48go5245q1yjjqb
        foreign key (p_id_id) references patient (id)
);

