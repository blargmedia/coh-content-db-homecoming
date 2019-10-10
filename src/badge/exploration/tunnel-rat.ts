import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";
import {Warburg} from "../../map/warburg";

export const TunnelRat: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "tunnel-rat",
    names: [{value: "Tunnel Rat"}],
    alignment: ALIGNMENT_ANY,
    mapKey: Warburg.key,
    location: [-1219.0, 0.0, 143.0],
    badgeText: [{value: "The various tunnels throughout the WEB are a nasty piece of work."}],
    notes: "The Tunnel Rat Badge is in Warburg. The badge marker is located in the far eastern entrance of the WEB underground missile plant (the entrance/exit of chamber three).",
    links: [{title: "Tunnel Rat Badge", href: "https://paragonwiki.com/wiki/Tunnel_Rat_Badge"}],
    icons: [
        {type: Alternate.H, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png"},
        {type: Alternate.V, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png"}
    ],
    vidiotMapKey: "2"
};