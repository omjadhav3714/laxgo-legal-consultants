import React from "react";

function Social(){
    return(<div classNameName="social-icons bg-light ">
    <div className="wrapper">
      <div className="icon facebook">
        <div className="tooltip">Facebook</div>
        <span><i className="bi bi-facebook"></i></span>
      </div>

      <div className="icon twitter">
        <div className="tooltip">Twitter</div>
        <span><i className="bi bi-twitter"></i></span>
      </div>

      <div className="icon instagram">
        <div className="tooltip">Instagram</div>
        <span><i className="bi bi-instagram"></i></span>
      </div>
    </div>
  </div>)
}
export default Social;