create table user
(
    id                 int                                                                       not null
        primary key,
    active             bit                                                                       not null,
    email              varchar(255)                                                              not null,
    otp                varchar(255)                                                              null,
    otp_generated_time datetime(6)                                                               null,
    password           varchar(255)                                                              null,
    role               enum ('ADMIN', 'EXPERT', 'MODERATOR', 'PATIENT', 'SENIOR_DOCTOR', 'USER') null,
    constraint UK_ob8kqyqqgmefl0aco34akdtpe
        unique (email)
);

