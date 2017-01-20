import React, {PropTypes} from 'react';

export default function Comments({comments, activeComment}) {
    let jsx = comments.map((coords, i) => <circle key={i} fill='#424242' r='26' cx={coords.get('x')}
                                                  cy={coords.get('y')}/>);
    let active_back = activeComment > -1 ? <circle fill='#478dda' r='46' cx={comments.get(activeComment).get('x')}
                                                   cy={comments.get(activeComment).get('y')}/> : <g></g>;
    let active_front = activeComment > -1 ? <circle fill='white' r='26' cx={comments.get(activeComment).get('x')}
                                                    cy={comments.get(activeComment).get('y')}/> : <g></g>;

    return (
        <g>
            {jsx}
            {active_back}
            {active_front}
        </g>
        );
};

Comments.propTypes = {
    comments: PropTypes.object.isRequired,
    activeComment: PropTypes.number.isRequired
};