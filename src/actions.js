export function enterAddingCommentAction() {
    return {
        type: "ENTER_ADDING_COMMENT"
    }
}

export function addCommentAction(SVGPointX, SVGPointY) {
    return {
        type: "ADD_COMMENT",
        x: SVGPointX,
        y: SVGPointY
    }
}

export function cancelAddingCommentAction() {
    return {
        type: "CANCEL_ADDING_COMMENT"
    }
}