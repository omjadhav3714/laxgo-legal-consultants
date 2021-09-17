import React from "react";

function Social(){
    return(<div classNameName="social-icons bg-light ">
    <div className="wrapper">
    <a href="https://www.facebook.com/profile.php?id=100072993997575">
      <div className="icon facebook">
        <div className="tooltip">Facebook</div>
        <span><i className="bi bi-facebook"></i></span>
      </div>
      </a>

      <a href="https://twitter.com/Laxgoconsultant">
      <div className="icon twitter">
        <div className="tooltip">Twitter</div>
        <span><i className="bi bi-twitter"></i></span>
      </div>
      </a>

      <a href="https://www.instagram.com/laxgo_legal_consultancy/">
      <div className="icon instagram">
        <div className="tooltip">Instagram</div>
        <span><i className="bi bi-instagram"></i></span>
      </div>
      </a>
    </div>
  </div>)
}
export default Social;