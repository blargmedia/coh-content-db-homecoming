import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Critic: IBadgeData = {
    type: BadgeType.AE,
    key: "critic",
    names: [
        {value: "Critic"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [{value: "You've completed your first Hall of Fame mission earning yourself the Critic Badge."}],
    acquisition: "Complete one Hall of Fame story arc.",
    links: [
        {title: "Critic Badge", href: "https://paragonwiki.com/wiki/Critic_Badge"}
    ],
    imageKeys: [{value: "core.ae.critic"}]
};