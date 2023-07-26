import React from "react";
import './styles.css';
import env from '../../images/envelope.png';

export const Subscribe = () => {
  return (
    <div className="subscribe-con">
        <h1 id='subscribe-header'>Contact us for more information!</h1>
        <img id='env-image' src={env} alt="" />
        <div className="form-con">
            <div className="name-con">
                <label id='formName-label'>FIRST NAME</label>
                <br/>
                <input id='form-name'type="text" name="name" required/>
            </div>
            <div className="lastname-con">
                <label id='formName-label'>LAST NAME</label>
                <br/>
                <input id='form-name'type="text" name="name" required/>
            </div>
            <div className="email-con">
                <label id='formName-label'>EMAIL</label>
                <br/>
                <input id='form-email'type="text" name="name" required/>
            </div>
            <div className="name-con">
                <label id='formName-label'>PHONE NUMBER</label>
                <br/>
                <input id='form-name'type="text" name="name" required/>
            </div>
            <div className="lastname-con">
                <label id='formName-label'>NAME</label>
                <br/>
                <input id='form-name'type="text" name="name" required/>
            </div>
            <div className="desc-con">
                <label id='formName-label'>PROJECT DESCRIPTION</label>
                <br/>
                <input id='form-desc'type="text" name="name" required/>
            </div>
        </div>
    </div>
  );
};
