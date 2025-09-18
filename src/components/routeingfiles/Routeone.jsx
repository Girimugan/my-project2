import React from "react";
import "./Routeone.css";
import prescripimg1 from "../../assets/presciption.jpg";
import offerimg1 from "../../assets/welcomeoffer.jpg";

function Routeone() {

  return (

    <div className="offer-container">
      <div className="prescription">
        <div className="prescripOne">
          <img src={prescripimg1} alt="slider ten" />
          <div className="prescripbox1">Order using prescription⚡</div>
          <div className="prescripbox2"><p>Upload prescription and we will help place order on your behalf.</p></div>
          <button className="btn1">Upload Prescription</button>
        </div>
        <div className="prescripTwo">
          <div className="prescripbox3">No prescription?</div>
          <div className="prescripbox4"><p>Search, add medicines & select FREE doctor consultation at checkout.</p></div>
        </div>
        <div className="prescripThree">
          <div className="prescripbox5">Call to order</div>
          <div className="prescripbox6"><p>Directly call our customer support to place your order.</p></div>
        </div>
      </div>
      <div className="box10">
        <img src={offerimg1} alt="eigth slider" />
      </div>

      <div className="upiboxs"></div>
      

    </div>


  );
}

export default Routeone;

