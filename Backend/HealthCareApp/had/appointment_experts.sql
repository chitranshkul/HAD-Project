create table appointment_experts
(
    appointment_a_id int not null,
    experts_id       int not null,
    primary key (appointment_a_id, experts_id),
    constraint FK91uiuw03pytj50s2fxlfo0qt9
        foreign key (experts_id) references expert (id),
    constraint FKddrkft4h06wsm3drr5tv0fvkk
        foreign key (appointment_a_id) references appointment (a_id)
);

