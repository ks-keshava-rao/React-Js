import Studentcontext from "./studentContext";
import React from "react";
import { useState } from "react";

const Studentstate = (props) => {
    const defaultdetails = {
        Useremail: " ",
        password: " ",
        rollNumber: " ",
        studentName: " ",
    }
    const [studentdetails, updatestudentdetails] = useState(defaultdetails);
    return (
        <Studentcontext.Provider value={{ studentdetails, updatestudentdetails }}>
            {props.children}
        </Studentcontext.Provider>
    )
}
export default Studentstate;