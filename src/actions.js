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

// export function selectCommentFromPointAction(){
//     return {
//         type: "SELECT_COMMENT_FROM_POINT"
//     }
// }

export function explodeCommentAction(index) {
    return {
        type: "EXPLODE_COMMENT",
        commentIndex: index
    }
}

export function closeCommentAction() {
    return {
        type: "CLOSE_COMMENT"
    }
}

export function deleteCommentAction(index) {
    return {
        type: "DELETE_COMMENT",
        commentIndex: index
    }
}

export function modifyCommentTextAction(index, text) {
    return {
        type: "MODIFY_COMMENT",
        commentIndex: index,
        commentText: text
    }
}

export function cancelModifyCommentTextAction() {
    return {
        type: "CANCEL_MODIFY_COMMENT"
    }
}

export function saveCommentTextAction(index, text) {
    return {
        type: "SAVE_COMMENT_TEXT",
        commentIndex: index,
        commentText: text
    }
}
export function cancelAddingCommentAction() {
    return {
        type: "CANCEL_ADDING_COMMENT"
    }
}

export function zoomIn() {
    return {
        type: "ZOOMING_IN"
    }
}

export function zoomOut() {
    return {
        type: "ZOOMING_OUT"
    }
}
