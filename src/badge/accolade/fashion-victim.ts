import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const FashionVictim: IBadgeData = {
    type: BadgeType.ACCOLADE,
    key: "fashion-victim",
    setTitleId: 2397,
    names: [
        {value: "Fashion Victim"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: `The road of excess leads to the palace of... fabulousness!`}
    ],
    notes: `Spend 50 million inf at the tailor`,
    links: [
        {title: "Fashion Victim Badge", href: "https://paragonwiki.com/wiki/Fashion_Victim_Badge"}
    ]
};