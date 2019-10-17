import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";

export const Meteorologist: IBadgeData = {
    type: BadgeType.ACCOMPLISHMENT,
    key: "meteorologist",
    names: [
        {value: "Meteorologist"}
    ],
    alignment: ALIGNMENT_HERO,
    badgeText: [
        {value: "You have crushed Nemesis' weather controlling equipment."}
    ],
    acquisition: "Complete the Defeat all foes in weather lab mission from Maxwell Christopher",
    links: [
        {title: "Meteorologist Badge", href: "https://paragonwiki.com/wiki/Meteorologist_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/meteorologist.png"}
    ],
};