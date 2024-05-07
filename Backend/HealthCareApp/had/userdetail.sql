create table userdetail
(
    id       int          not null
        primary key,
    city     varchar(255) not null,
    country  varchar(255) not null,
    district varchar(255) not null,
    mobile   varchar(255) not null,
    pin_code int          not null,
    state    varchar(255) not null,
    street1  varchar(255) not null,
    street2  varchar(255) not null,
    dob      varchar(255) not null,
    dor      varchar(255) not null,
    fname    varchar(255) not null,
    gender   varchar(255) not null,
    hno      varchar(255) not null,
    lname    varchar(255) not null,
    mname    varchar(255) not null,
    uid      int          null,
    constraint UK_br6h5d7c0dxmada9gg50jg7qf
        unique (uid),
    constraint FK67m6e3euv3c3syqvibhmriwj0
        foreign key (uid) references user (id)
);

