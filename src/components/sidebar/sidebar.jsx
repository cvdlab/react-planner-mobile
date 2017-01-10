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
                //*modifyCommentText={event => this.props.modifyCommentTextFn(i)}
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

/*<CommentBox
 text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula malesuada condimentum. Maecenas viverra fermentum elit vitae viverra. Pellentesque porttitor nibh sed justo egestas tempor. Etiam luctus mollis laoreet. Vestibulum erat enim, vulputate eget consequat vitae, blandit nec justo. Pellentesque scelerisque risus ut eleifend ullamcorper. Praesent ut hendrerit dolor. Donec malesuada interdum lorem. Duis cursus bibendum augue, sit amet tempus ex varius consectetur. Proin feugiat, arcu id sagittis venenatis, sapien mauris varius tortor, ac blandit erat justo ac ex. Aenean tempor felis est, in auctor diam aliquet in."}
 active={true } closeComment={console.log()} deleteComment={console.log()}
 modifyCommentText={console.log()}/>
 <CommentBox
 text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula malesuada condimentum. Maecenas viverra fermentum elit vitae viverra. Pellentesque porttitor nibh sed justo egestas tempor. Etiam luctus mollis laoreet. Vestibulum erat enim, vulputate eget consequat vitae, blandit nec justo. Pellentesque scelerisque risus ut eleifend ullamcorper. Praesent ut hendrerit dolor. Donec malesuada interdum lorem. Duis cursus bibendum augue, sit amet tempus ex varius consectetur. Proin feugiat, arcu id sagittis venenatis, sapien mauris varius tortor, ac blandit erat justo ac ex. Aenean tempor felis est, in auctor diam aliquet in."}
 active={false} closeComment={console.log()} deleteComment={console.log()}
 modifyCommentText={console.log()}/>
 <CommentBox
 text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula malesuada condimentum. Maecenas viverra fermentum elit vitae viverra. Pellentesque porttitor nibh sed justo egestas tempor. Etiam luctus mollis laoreet. Vestibulum erat enim, vulputate eget consequat vitae, blandit nec justo. Pellentesque scelerisque risus ut eleifend ullamcorper. Praesent ut hendrerit dolor. Donec malesuada interdum lorem. Duis cursus bibendum augue, sit amet tempus ex varius consectetur. Proin feugiat, arcu id sagittis venenatis, sapien mauris varius tortor, ac blandit erat justo ac ex. Aenean tempor felis est, in auctor diam aliquet in."}
 active={false} closeComment={console.log()} deleteComment={console.log()}
 modifyCommentText={console.log()}/>
 <CommentBox
 text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula malesuada condimentum. Maecenas viverra fermentum elit vitae viverra. Pellentesque porttitor nibh sed justo egestas tempor. Etiam luctus mollis laoreet. Vestibulum erat enim, vulputate eget consequat vitae, blandit nec justo. Pellentesque scelerisque risus ut eleifend ullamcorper. Praesent ut hendrerit dolor. Donec malesuada interdum lorem. Duis cursus bibendum augue, sit amet tempus ex varius consectetur. Proin feugiat, arcu id sagittis venenatis, sapien mauris varius tortor, ac blandit erat justo ac ex. Aenean tempor felis est, in auctor diam aliquet in."}
 active={false} closeComment={console.log()} deleteComment={console.log()}
 modifyCommentText={console.log()}/>*/

Sidebar.propTypes = {
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    comments: PropTypes.object.isRequired,
    activeComment: PropTypes.number.isRequired,
    openCommentFn: PropTypes.func.isRequired,
    deleteCommentFn: PropTypes.func.isRequired
    //modifyCommentTextFn: PropTypes.func.isRequired
};