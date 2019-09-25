import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";
import {SkywayCity} from "../../map/skyway-city";

export const Dauntless: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "dauntless",
    names: [{value: "Dauntless"}],
    alignment: ALIGNMENT_HERO,
    mapKey: SkywayCity.key,
    location: [-706.0, 0.0, -1077.0],
    badgeText: [{
        value: "Dauntless was Galaxy Girl's sidekick until he died in battle, defending his mentor with his last breath."
    }],
    notes: "The Dauntless Badge is in the southern end of the Hide Park neighborhood of Skyway City." +
        " Halfway along the southeastern north-south wall, there is a large statue of Dauntless flexing his arms." +
        " The badge marker is sixty feet in front of that statue.",
    links: [
        {title: "Dauntless Badge", href: "https://paragonwiki.com/wiki/Dauntless_Badge"}
    ],
    imageKeys: [{value: "core.exploration.hero"}],
    vidiotMapKey: "3"
};
