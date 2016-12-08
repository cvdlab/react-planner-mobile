export function startDrawingAction(SVGPointX, SVGPointY) {
    return {
        type: "START_DRAWING",
        x: SVGPointX,
        y: SVGPointY
    }
}

export function endDrawingAction(SVGPointX, SVGPointY) {
    return {
        type: "END_DRAWING",
        x: SVGPointX,
        y: SVGPointY
    }
}

export function updateDrawingAction(SVGPointX, SVGPointY) {
    return {
        type: "UPDATE_DRAWING",
        x: SVGPointX,
        y: SVGPointY
    }
}