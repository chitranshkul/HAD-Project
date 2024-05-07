create table token
(
    id         int             not null
        primary key,
    expired    bit             not null,
    revoked    bit             not null,
    token      varchar(255)    null,
    token_type enum ('BEARER') null,
    user_id    int             null,
    constraint UK_pddrhgwxnms2aceeku9s2ewy5
        unique (token),
    constraint FKe32ek7ixanakfqsdaokm4q9y2
        foreign key (user_id) references user (id)
);

