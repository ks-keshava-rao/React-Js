// mounting phase - A-constructor , Aderivedstate , Arender , B constructor , B getderivedstate , B derivedstate , B Render , B componentdidmount , A componentdidmount
// update cycle - A getderived class , A shouldcomponentupdate , A render, B getderived , B getsnapshot , A getsnapshot , B componentdidupdate ,B componentdidupdate
import React, { Component } from "react";
import Lifecycle2 from "./Lifecycle2";
class Lifecycle extends Component {
    constructor(proprs) {
        super(proprs)
        this.state = {
            name: "keshav"
        }
        console.log("lifecycle constructor")
    }
    static getDerivedStateFromProps(proprs, state) {
        console.log("lifecycle getderived state")

        return null;
    }
    componentDidMount() {
        console.log('lifecycle didmount method')
    }
    shouldComponentUpdate() {
        console.log("lifecycle shouldComponentUpdate")
        return true;
    }
    getSnapshotBeforeUpdate(PreviosProps, PreviosState) {
        console.log("lifeCycle getSnapShotBeforeUpdate");
        return null;
    }
    componentDidUpdate(){
        console.log('lifecycle Componentdidupdate')
    }
    changeState = () =>{
        this.setState({
            name:'modiefied name'
        })
    }
    render() {
        console.log('lifecuycle render')
        return (
            <div>
                <div>
                    lifecycle 1 
                </div>
                <button onClick={this.changeState}>Change state</button>
                <Lifecycle2 />
            </div>
        )
    }
}
export default Lifecycle