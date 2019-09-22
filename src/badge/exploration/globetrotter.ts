import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";
import {ReclusesVictory} from "../../map/recluses-victory";

export const Globetrotter: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "globetrotter",
    names: [{value: "Globetrotter"}],
    alignment: ALIGNMENT_ANY,
    mapKey: ReclusesVictory.key,
    location: [128.0, 16.0, -249.0],
    badgeText: [{value: "Lord Recluse targeted the statue of Atlas first, knowing it was an important symbol to Paragon's 'heroes.'"}],
    notes: "The Globetrotter Badge is located in the Recluse's Victory zone in Sector 5." +
        " It is in front of the Atlas Statue, just behind the dais that Ms. Liberty stands on in the hero's version of Atlas Park.",
    links: [
        {title: "Globetrotter Badge", href: "https://paragonwiki.com/wiki/Globetrotter_Badge"}
    ],
    imageKeys: [
        {type: Alternate.H, value: "core.exploration.hero"},
        {type: Alternate.V, value: "core.exploration.villain"}
    ],
    vidiotMapKey: "1"
};
