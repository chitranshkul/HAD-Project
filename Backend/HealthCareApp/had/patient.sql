create table patient
(
    id            int          not null
        primary key,
    blood_group   varchar(255) not null,
    health_issues varchar(255) not null,
    height        int          not null,
    weight        int          not null
);

