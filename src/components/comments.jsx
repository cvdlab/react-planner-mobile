import React, {PropTypes} from 'react';


export default function Comments({comments}) {


    let jsx = comments.map((coords,i) => <circle key={i} fill='#424242' r='22' cx={coords.get('x')} cy={coords.get('y')}/>);

    return (
        <g>
            {jsx}
        </g>
        );

};

Comments.propTypes = {
    comments: PropTypes.object.isRequired
};