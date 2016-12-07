import * as Three from 'three';
import {loadObjWithMaterial} from '../../../utils/load-obj';
import path from 'path';
import convert from 'convert-units';

import React from 'react';

let rectSVG = React.createFactory('rect');
let gSVG = React.createFactory('g');
let textSVG = React.createFactory('text');

export default {
  name: "sofa",
  prototype: "items",

  info: {
    tag: ['furnishings', 'leather'],
    group: "Items",
    description: "Leather sofa",
    image: require('./sofa.png')
  },

  properties: {},

  render2D: function (element, layer, scene) {
    let width = {length: 180, unit: 'cm'};
    let depth = {length: 60, unit: 'cm'};

    let newWidth = convert(width.length).from(width.unit).to(scene.unit);
    let newDepth = convert(depth.length).from(depth.unit).to(scene.unit);

    let style = {stroke: element.selected ? '#0096fd' : '#000', strokeWidth: "2px", fill: "#84e1ce"};

    return (
      <g transform={`translate(${-newWidth / 2},${-newDepth / 2})`}>
        <rect key="1" x="0" y="0" width={newWidth} height={newDepth} style={style}/>
        <text key="2" x="0" y="0" transform={`translate(${newWidth / 2}, ${newDepth / 2}) scale(1,-1)`}
              style={{textAnchor: "middle", fontSize: "11px"}}>
          {element.type}
        </text>
      </g>
    );
  }


};
