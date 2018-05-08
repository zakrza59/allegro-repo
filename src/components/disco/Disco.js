import React from "react";
import { disco } from "../../functions";
import "./Disco.css"

class Disco extends React.Component {
  
  render() {  
    return <div onClick={() => {disco()}} className="Disco-button" />
  }
}

export default Disco;