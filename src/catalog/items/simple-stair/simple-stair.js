import React from 'react';
import convert from 'convert-units';

let rectSVG = React.createFactory('rect');
let gSVG = React.createFactory('g');
let textSVG = React.createFactory('text');

export default {
  name: "simple-stair",
  prototype: "items",

  info: {
    tag: ['building', 'stair'],
    group: "Items",
    description: "Simple stair",
    image: require('./simple-stair.png')
  },

  properties: {
    width: {
      label: "Width",
      type: "length-measure",
      defaultValue: {
        length: 50,
        unit: 'cm'
      }
    },
    depth: {
      label: "Depth",
      type: "length-measure",
      defaultValue: {
        length: 300,
        unit: 'cm'
      }
    },
    height: {
      label: "Height",
      type: "length-measure",
      defaultValue: {
        length: 300,
        unit: 'cm'
      }
    },
    altitude: {
      label: "Altitude",
      type: "length-measure",
      defaultValue: {
        length: 0,
        unit: 'cm'
      }
    }
  },

  render2D: function (element, layer, scene) {

    let newWidth = convert(element.properties.get('width').get('length'))
      .from(element.properties.get('width').get('unit'))
      .to(scene.unit);

    let newDepth = convert(element.properties.get('depth').get('length'))
      .from(element.properties.get('depth').get('unit'))
      .to(scene.unit);


    return gSVG({transform: `translate(${-newWidth / 2},${-newDepth / 2})`}, [
      rectSVG({
        key: 1,
        x: 0,
        y: 0,
        width: newWidth,
        height: newDepth,
        style: {stroke: element.selected ? '#0096fd' : '#000', strokeWidth: "2px", fill: "#84e1ce"}
      }),
      textSVG({
        key: 2,
        x: 0,
        y: 0,
        transform: `translate(${newWidth / 2}, ${newDepth / 2}) scale(1,-1)`,
        style: {textAnchor: "middle", fontSize: "11px"},
      }, element.type)
    ]);
  }
};
