import React from "react";
import Avatar from "./Avatar";
import Detail from "./Detail";
function Images(props) {
    return <div className="card">
        <div className="top">
            <h2 className="name">{props.name}</h2>
            <Avatar img={props.image} />
        </div>
        <div className="bottom">
            <Detail data={props.mobile} />
            <Detail data={props.email} />
        </div>
    </div>
}
export default Images;