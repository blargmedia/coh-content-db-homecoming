import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";

export const MasterOfMsLibertysTaskForce: IBadgeData = {
    type: BadgeType.ACHIEVEMENT,
    key: "master-of-ms-libertys-task-force",
    names: [
        {value: "Master of Ms. Liberty's Task Force"}
    ],
    alignment: ALIGNMENT_HERO,
    badgeText: [
        {value: "You have proven yourself Master of Ms. Liberty's Task Force."}
    ],
    acquisition: "Complete the Ms. Liberty Task Force with No Temporary Powers and Zero Team Defeats",
    links: [
        {title: "Master of Ms. Liberty's Task Force Badge", href: "https://paragonwiki.com/wiki/Master_of_Ms._Liberty%27s_Task_Force_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/master-of-ms-libertys-task-force.png"}
    ],
};