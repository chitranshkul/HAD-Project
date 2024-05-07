create table flag
(
    f_id int auto_increment
        primary key,
    bid  int null,
    uid  int null,
    constraint FKh5wmu8ycpfnujbv72n0icgb30
        foreign key (uid) references user (id),
    constraint FKsdthx0fm68yv2orkrny6autfr
        foreign key (bid) references blog (id)
);

