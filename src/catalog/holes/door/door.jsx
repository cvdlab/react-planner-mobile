import React from 'react';


import path from 'path';

export default {
  name: "door",
  prototype: "holes",

  info: {
    tag: ['door'],
    group: "Horizontal communication",
    description: "Wooden door",
    image: ""
  },

  properties: {
    width: {
      label: "Width",
      type: "length-measure",
      defaultValue: {
        length: 80
      }
    },
    height: {
      label: "Height",
      type: "length-measure",
      defaultValue: {
        length: 215
      }
    },
    altitude: {
      label: "Altitude",
      type: "length-measure",
      defaultValue: {
        length: 0
      }
    },
    thickness: {
      label: "Thickness",
      type: "length-measure",
      defaultValue: {
        length: 30
      }
    }
  },

  render2D: function (element, layer, scene) {
    const STYLE_HOLE_BASE = {stroke: "#000", strokeWidth: "3px", fill: "#000"};
    const STYLE_HOLE_SELECTED = {stroke: "#0096fd", strokeWidth: "3px", fill: "#0096fd", cursor: "move"};
    //let line = layer.lines.get(hole.line);
    //let epsilon = line.properties.get('thickness') / 2;

    let epsilon = 3;

    let holeWidth = element.properties.get('width').get('length');
    let holePath = `M${0} ${ -epsilon}  L${holeWidth} ${-epsilon}  L${holeWidth} ${epsilon}  L${0} ${epsilon}  z`;
    let holeStyle = element.selected ? STYLE_HOLE_SELECTED : STYLE_HOLE_BASE;
    let length = element.properties.get('width').get('length');
    return (
      <g transform={`translate(${-length / 2}, 0)`}>
        <path key="1" d={holePath} style={holeStyle}/>
        <line key="2" x1={holeWidth / 2} y1={-10 - epsilon} x2={holeWidth / 2} y2={10 + epsilon} style={holeStyle}/>
      </g>
    );
  }
};
