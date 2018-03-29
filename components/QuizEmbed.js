import React, { Component } from 'react';
 
class QuizEmbed extends Component {
 
  componentDidMount () {
    const script = document.createElement("script");
 
    script.src = "https://www.surveygizmo.com/s3/4283433/STEM-Type-Quiz";
    script.async = true;
 
    document.body.appendChild(script);
  }
 
  render() {
    const divStyle = {
          maxWidth: "90",
          margin: "0 auto 0 auto",
          leftmargin: "10px",
          rightmargin: "10px",
          width: "80%",
          height: "450px"
        };
 
    const iframeStyle = {
          width: "100%",
          height: "80%",
          border: "none"
        };
 
    const gizmoID = "4283433";
    const surveyID = "STEM-Type-Quiz";
    const gizmoUrl = "https://www.surveygizmo.com/s3/" + gizmoID + '/' + surveyID ;
 
    return (
      <div className="QuizEmbed">
        <div className="gizmo_target" data-rid-id={gizmoID} data-fg="#252525" data-bg="#EDEDED" style={divStyle} data-auto-scroll="true">
          <iframe title="embed-test" style={iframeStyle} src={gizmoUrl}></iframe>
        </div>
      </div>
    );
  }
}
 
export default QuizEmbed;