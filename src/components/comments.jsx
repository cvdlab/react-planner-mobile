import React, {PropTypes} from 'react';


export default function Comments({points}) {


    let jsx = points.map((coords,i) => <circle key={i} fill='#00a' r='42' cx={coords.get('x')} cy={coords.get('y')}/>);

    return (
        <g>
            {jsx}
        </g>
        );

};

Comments.propTypes = {
    points: PropTypes.object.isRequired
};