import {ALIGNMENT_VILLAIN, BadgeType, IBadgeData} from "coh-content-db";

export const Inquisitor: IBadgeData = {
    type: BadgeType.ACCOMPLISHMENT,
    key: "inquisitor",
    names: [
        {value: "Inquisitor"}
    ],
    alignment: ALIGNMENT_VILLAIN,
    badgeText: [
        {value: "You completed a Villain Alignment Mission earning yourself the Inquisitor badge."}
    ],
    acquisition: "Complete a Villain Alignment mission",
    links: [
        {title: "Inquisitor Badge", href: "https://paragonwiki.com/wiki/Inquisitor_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/inquisitor.png"}
    ],
};