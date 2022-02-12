import React from "react";
function Images(props) {
    return <div className="card">
        <div className="top">
            <h2 className="name">{props.name}</h2>
            <img className="circle-img" src={props.image} />
        </div>
        <div className="bottom">
            <p className="info">
                {props.mobile}
            </p>
            <p className="info">
                {
                    props.email
                }
            </p>
        </div>
    </div>
}
export default Images;