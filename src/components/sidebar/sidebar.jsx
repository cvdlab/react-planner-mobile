import React, {PropTypes} from 'react';
import CommentBox from './comment-box';
import IconOpen from 'react-icons/lib/fa/folder-open-o';
import IconSave from 'react-icons/lib/fa/floppy-o';
import IconComment from 'react-icons/lib/fa/comment';


const STYLE_BUTTON = {
    color: "#ddd",
    textDecoration: "none",
    fontSize: "24px",
    padding: "8px 14px 8px 14px",
    display: "inline-block",
    verticalAlign: "middle"
};

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
        let info = this.props.comments.size == 0 ?  (
        <div style={{margin: "20px", color: "#ddd", fontWeight: "400", textAlign: "center", fontSize: "15px "}}>
            Premi <IconComment style={{marginTop: "-3px"}}/> per aggiungere un commento
        </div>
        ) : "";

        return (
            <aside style={{
                backgroundColor: "#28292D",
                display: "block",
                overflow: "scroll",
                width: this.props.width,
                height: this.props.height - 48,
                paddingBottom: "48px"
            }}>
                {info}

                {jsx}

                <div style={{
                    background: "#2d2e33",
                    textAlign: "center",
                    position: "absolute",
                    bottom: "0px",
                    width: this.props.width
                }}>

                    <a
                        href="javascript:;"
                        style={{... STYLE_BUTTON}}
                        title={"Apri"}
                        onClick={event => this.props.loadProjectsFn()}>
                        <IconOpen />
                    </a>

                    <a href="javascript:;"
                       style={{... STYLE_BUTTON}}
                       title={"Salva"}
                       onClick={event => this.props.updateFileDataFn()}>
                        <IconSave />
                    </a>
                </div>
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
    modifyCommentTextFn: PropTypes.func.isRequired,
    loadProjectsFn: PropTypes.func.isRequired,
    updateFileDataFn: PropTypes.func.isRequired
};