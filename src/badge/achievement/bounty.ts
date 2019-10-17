import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Bounty: IBadgeData = {
    type: BadgeType.ACHIEVEMENT,
    key: "bounty",
    setTitleId: 2362,
    names: [
        {value: "Bounty"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You have held on to a few souvenirs that remind you of your interesting adventures."}
    ],
    acquisition: "Colllect 10 Souvenirs",
    links: [
        {title: "Bounty Badge", href: "https://paragonwiki.com/wiki/Bounty_Badge"}
    ],
};
