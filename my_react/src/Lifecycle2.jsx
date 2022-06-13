import React, { Component } from "react";

class Lifecycle2 extends Component {
    constructor(proprs) {
        super(proprs)
        this.state = {
            name: "keshav"
        }
        console.log("lifecycle2 constructor")
    }
    static getDerivedStateFromProps(proprs, state) {
        console.log("lifecycle2 getderived state")

        return null;
    }
    componentDidMount() {
        console.log('lifecycle2 didmount method')
    }
    shouldComponentUpdate() {
        console.log("lifecycl2e2 shouldComponentUpdate")
        return true;
    }
    getSnapshotBeforeUpdate(PreviosProps, PreviosState) {
        console.log("lifeCycle2 getSnapShotBeforeUpdate");
        return null;
    }
    componentDidUpdate(){
        console.log('lifecycle2 Componentdidupdate')
    }
    render() {
        console.log('lifecuycle2 render')
        return (
            
                <div>
                    lifecycle 2
                </div>
                
        )
    }
}
export default Lifecycle2