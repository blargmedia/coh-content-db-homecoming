import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Repairman: IBadgeData = {
    type: BadgeType.OUROBOROS,
    key: "repairman",
    setTitleId: 940,
    names: [
        {value: "Repairman"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You have flashed back to 35 story arcs."},
    ],
    acquisition: "Complete 35 Flashback story arcs from the Pillar of Ice and Flame.",
    links: [
        {title: "Repairman Badge", href: "https://paragonwiki.com/wiki/Repairman_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/ouroboros/repairman.png"}]
};
