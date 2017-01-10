import React, {PropTypes} from 'react';
import CommentBox from './comment-box';

class Sidebar extends React.Component {

    constructor(props) {
        super(props);
    }

    genComment(attributes, i) {
        return (
            <CommentBox
                text={attributes.get('text')}
                active={i == this.props.activeComment}
                key={i}
                openComment={this.props.openCommentFn}
            />
        )
    }

    render() {

        let jsx = this.props.comments.map(this.genComment);

        return (
            <aside style={{backgroundColor: "#28292D", display: "block", overflow: "scroll", width: width, height: height}}>

                {jsx}

            </aside>
        )
    }
}

/*<CommentBox
 text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula malesuada condimentum. Maecenas viverra fermentum elit vitae viverra. Pellentesque porttitor nibh sed justo egestas tempor. Etiam luctus mollis laoreet. Vestibulum erat enim, vulputate eget consequat vitae, blandit nec justo. Pellentesque scelerisque risus ut eleifend ullamcorper. Praesent ut hendrerit dolor. Donec malesuada interdum lorem. Duis cursus bibendum augue, sit amet tempus ex varius consectetur. Proin feugiat, arcu id sagittis venenatis, sapien mauris varius tortor, ac blandit erat justo ac ex. Aenean tempor felis est, in auctor diam aliquet in."}
 active={true } closeComment={console.log()} deleteComment={console.log()}
 modifyComment={console.log()}/>
 <CommentBox
 text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula malesuada condimentum. Maecenas viverra fermentum elit vitae viverra. Pellentesque porttitor nibh sed justo egestas tempor. Etiam luctus mollis laoreet. Vestibulum erat enim, vulputate eget consequat vitae, blandit nec justo. Pellentesque scelerisque risus ut eleifend ullamcorper. Praesent ut hendrerit dolor. Donec malesuada interdum lorem. Duis cursus bibendum augue, sit amet tempus ex varius consectetur. Proin feugiat, arcu id sagittis venenatis, sapien mauris varius tortor, ac blandit erat justo ac ex. Aenean tempor felis est, in auctor diam aliquet in."}
 active={false} closeComment={console.log()} deleteComment={console.log()}
 modifyComment={console.log()}/>
 <CommentBox
 text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula malesuada condimentum. Maecenas viverra fermentum elit vitae viverra. Pellentesque porttitor nibh sed justo egestas tempor. Etiam luctus mollis laoreet. Vestibulum erat enim, vulputate eget consequat vitae, blandit nec justo. Pellentesque scelerisque risus ut eleifend ullamcorper. Praesent ut hendrerit dolor. Donec malesuada interdum lorem. Duis cursus bibendum augue, sit amet tempus ex varius consectetur. Proin feugiat, arcu id sagittis venenatis, sapien mauris varius tortor, ac blandit erat justo ac ex. Aenean tempor felis est, in auctor diam aliquet in."}
 active={false} closeComment={console.log()} deleteComment={console.log()}
 modifyComment={console.log()}/>
 <CommentBox
 text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula malesuada condimentum. Maecenas viverra fermentum elit vitae viverra. Pellentesque porttitor nibh sed justo egestas tempor. Etiam luctus mollis laoreet. Vestibulum erat enim, vulputate eget consequat vitae, blandit nec justo. Pellentesque scelerisque risus ut eleifend ullamcorper. Praesent ut hendrerit dolor. Donec malesuada interdum lorem. Duis cursus bibendum augue, sit amet tempus ex varius consectetur. Proin feugiat, arcu id sagittis venenatis, sapien mauris varius tortor, ac blandit erat justo ac ex. Aenean tempor felis est, in auctor diam aliquet in."}
 active={false} closeComment={console.log()} deleteComment={console.log()}
 modifyComment={console.log()}/>*/

Sidebar.propTypes = {
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    comments: PropTypes.object.isRequired,
    activeComment: PropTypes.number.isRequired,
    openCommentFn: PropTypes.func.isRequired
};