create table quiz_results
(
    id               int auto_increment
        primary key,
    remark           varchar(255) not null,
    date             varchar(255) not null,
    points           int          not null,
    selected_options varchar(255) not null,
    uid              int          null,
    constraint FKmcl8r8sfp53o5iusq8t3o1j7g
        foreign key (uid) references user (id)
);

