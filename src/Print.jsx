import MainPage from "./Components/MainPage/MainPage";
import React, { Component } from 'react'
import ReactToPrint from "react-to-print";

class Print extends Component {
    render() {
        return (
            <div>
                <ReactToPrint
trigger={()=>{
return <button>PRINT DOCUMENT</button>
}}
content={()=>this.componentRef}
documentTitle='new document'
pageStyle='print'


                />
                <div ref={el=>(this.componentRef=el)}>
                <MainPage />
                </div>
            </div>
        )
    }
}

export default Print
