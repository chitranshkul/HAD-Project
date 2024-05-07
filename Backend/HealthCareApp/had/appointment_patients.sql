create table appointment_patients
(
    appointment_a_id int not null,
    patients_id      int not null,
    primary key (appointment_a_id, patients_id),
    constraint FKf8x7lkplbjbe7gn9c0cwq7cgc
        foreign key (appointment_a_id) references appointment (a_id),
    constraint FKnjt575hpepdxgxwgt70x80fhn
        foreign key (patients_id) references patient (id)
);

