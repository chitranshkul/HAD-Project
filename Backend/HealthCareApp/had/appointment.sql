create table appointment
(
    a_id       int auto_increment
        primary key,
    date       date    not null,
    time       time(6) not null,
    expert_id  int     not null,
    patient_id int     not null,
    status     int     not null
);

