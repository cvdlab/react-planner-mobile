import React from 'react';

const STYLE_ACTIVE = {

    width: "44px",
    height: "44px",
    border: "3px solid #407FC5",
    borderRadius: "25px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "25px",
    backgroundColor: "#fff",
    margin: "10px"

};

const STYLE_PASSIVE = {

    width: "50px",
    height: "50px",
    borderRadius: "25px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "25px",
    backgroundColor: "#478dda",
    margin: "10px"

};


export default function ToolboxButton(props) {

    let style = props.active ? STYLE_ACTIVE : STYLE_PASSIVE;

    return (
        <div style={style} onClick={props.onClick}>
            <a href="javascript:;" style={{color: props.active ? "#478dda" : "white", textDecoration: "none", marginTop: "-7px"}}
               title={props.tooltip}>
                {props.children}
            </a>
        </div>
    )
}