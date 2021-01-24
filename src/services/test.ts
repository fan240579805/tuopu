import { Pen } from "@topology/core/src/models";

export function find(idOrTag: string, pens: Pen[]) {
    const result: Pen[] = [];
    pens.forEach((item) => {
        if (item.id === idOrTag || item.tags.indexOf(idOrTag) > -1) {
            result.push(item);
        }

        if ((item as any).children) {
            const children: any = find(idOrTag, (item as any).children);
            if (children && children.length > 1) {
                result.push.apply(result, children);
            } else if (children) {
                result.push(children);
            }
        }
    });

    if (result.length === 0) {
        return;
    } else if (result.length === 1) {
        return result[0];
    }

    return result;
}



let line = {
    type: 1,
    TID: "f470f73",
    id: "11f66442",
    name: "polyline",
    controlPoints: [
        { x: 345, y: 214.5, direction: 2, anchorIndex: 2, id: "a25fab9" },
        { x: 414, y: 214.5 },
        {
            x: 414,
            y: 200,
            direction: 3,
            anchorIndex: 3,
            id: "11e6756d",
            autoAnchor: false,
        },
    ],
    fromArrowSize: 5,
    toArrowSize: 5,
    borderWidth: 0,
    borderColor: "#000000",
    animateColor: "",
    animateSpan: 1,
    animatePos: 0,
    isAnimate: false,
    animateFromSize: 0,
    animateToSize: 0,
    animateDotSize: 3,
    from: { x: 276, y: 214.5, direction: 2, anchorIndex: 2, id: "a25fab9" },
    to: {
        x: 414,
        y: 186,
        direction: 3,
        anchorIndex: 3,
        id: "11e6756d",
        autoAnchor: false,
    },
    fromArrow: "",
    toArrow: "triangleSolid",
    textRect: null,
}