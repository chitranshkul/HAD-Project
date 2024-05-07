create table appointment_e_id
(
    appointment_a_id int not null,
    e_id_id          int not null,
    primary key (appointment_a_id, e_id_id),
    constraint FK6yarxu2u53yb511t677d4ikyy
        foreign key (e_id_id) references expert (id),
    constraint FKnkf1vc5gms5ke4p5vqq3jcnyv
        foreign key (appointment_a_id) references appointment (a_id)
);

