import React from "react";
import Service from "./Service";

function Card(props) {
    return (
        <div className="cardbody">
            <div class="card" data-tilt data-tilt-scale="0.95" data-tilt-startY="40">
                <div className="col-lg-3 col-md-6 text-center ">
                    <div className="mt-5">
                        <h3 className="h4 mb-2" style={{ textAlign: 'self', justifyContent: 'center' }}>{props.title}</h3>
                    </div>
                </div>        </div></div>
    )
}
export default Card;