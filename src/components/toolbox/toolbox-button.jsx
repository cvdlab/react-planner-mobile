import React from 'react';

const STYLE = {

    width: "50px",
    height: "50px",
    borderRadius: "25px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "25px",
    backgroundColor: "#478dda"
};


export default function ToolboxButton(props) {

    if (props.active) {

        STYLE.borderRadius= "28px";
        STYLE.border = "2px solid #eee";
        STYLE.margin = "10px 8px ";

    }else{

        STYLE.borderRadius= "25px";
        STYLE.border = "";
        STYLE.margin= "10px";

    }

    return (
        <div style={STYLE} onClick={props.onClick}>
            <a href="javascript:;" style={{color: "#FEFEFE", textDecoration: "none", marginTop:"-7px"}}  title={props.tooltip}>
                {props.children}
            </a>
        </div>
    )
}