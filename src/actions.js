import {userLoginAPI, getProjectsAPI, getFileDataAPI} from './api-caller'

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

/*
export function selectCommentFromPointAction(){
    return {
        type: "SELECT_COMMENT_FROM_POINT"
    }
}
*/

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
        type: "MODIFY_COMMENT_TEXT",
        commentIndex: index,
        commentText: text
    }
}

export function cancelModifyCommentTextAction() {
    return {
        type: "CANCEL_MODIFY_COMMENT_TEXT"
    }
}

export function exitFileBrowserAction() {
    return {
        type: "EXIT_FILE_BROWSER"
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

export function loadProjects() {
    return dispatch => {
        userLoginAPI('gag@example.com', '1111', 'http://metior-dev.geoweb.it/core/api')
            .then(json => {
                return getProjectsAPI(json.userID, json.id, '');
            })
            .then(json => {
                console.log(json);
                dispatch({
                    type: "loadProjects",
                    projects: json
                })
            })
    }
}
export function loadFileData() {
    return dispatch => {
        userLoginAPI('gag@example.com', '1234567890', 'http://metior-dev.geoweb.it/core/api')
            .then(json => {
                return getFileDataAPI('587cae8391ea0978324ce1a7', '587cae9791ea0978324ce1a8', json.userId, json.id, 'http://metior-dev.geoweb.it/core/api');
            })
            .then(json => {
                console.log(json);
                dispatch({
                    type: "loadFileData",
                    projects: JSON.stringify(json)
                })
            })
    }
}