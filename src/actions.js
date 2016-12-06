export function addCommentAction(SVGPointX, SVGPointY) {
  return {
    type: "ADD_COMMENT",
    x: SVGPointX,
    y: SVGPointY
  }
}

export function changeModeAction(newMode) {
    return {
        type: "CHANGE_MODE",
        mode: newMode
    }
}