import React, {PropTypes} from 'react';
import CommentBox from './comment-box';

export default class Sidebar extends React.Component {

    constructor(props) {
        super(props);
        this.genComment = this.genComment.bind(this);
    }

    genComment(attributes, i) {
        return (
            <CommentBox
                text={attributes.get('text')}
                active={i == this.props.activeComment}
                key={i}
                openComment={event => this.props.openCommentFn(i)}
                deleteComment={event => this.props.deleteCommentFn(i)}
                modifyCommentText={event => this.props.modifyCommentTextFn(i)}

            />
        )
    }

    render() {

        let jsx = this.props.comments.map(this.genComment);

        return (
            <aside style={{
                backgroundColor: "#28292D",
                display: "block",
                overflow: "scroll",
                width: this.props.width,
                height: this.props.height
            }}>

                {jsx}

            </aside>
        )
    }
}

Sidebar.propTypes = {
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    comments: PropTypes.object.isRequired,
    activeComment: PropTypes.number.isRequired,
    openCommentFn: PropTypes.func.isRequired,
    deleteCommentFn: PropTypes.func.isRequired,
    modifyCommentTextFn: PropTypes.func.isRequired

};