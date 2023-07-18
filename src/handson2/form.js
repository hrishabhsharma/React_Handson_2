import React, { Component} from "react";
import './form.css'

class FeedbackForm extends Component{
    state = {
        EmpName : '',
        Department : '',
        Rating : '',
        EmpData : []
    }
    Changehandle = (e) =>{
        this.setState({[e.target.name]:e.target.value})
        console.log(e.target.name)
        console.log(e.target.value)
    }
    handle = (e) =>{
        e.preventDefault();
        let Obj = {
            name : this.state.EmpName,
            dept : this.state.Department,
            rating : this.state.Rating
            }
        this.state.EmpData.push(Obj);
        this.setState({
            EmpData : this.state.EmpData,
            EmpName : '',
            Department : '',
            Rating : ''
        });
        console.log(this.state.EmpData);
    }
    
    render(){
        return(
            <>
            <form>
                <label htmlFor="Nm">Name : </label>
                <input type="text" name="EmpName" id="Nm" onChange={this.Changehandle}/><br/>
                <label htmlFor="Dp">Department : </label>
                <input type="text" name="Department" id="Dp" onChange={this.Changehandle}/><br/>
                <label htmlFor="Rt">Rating : </label>
                <input type="number" name="Rating" id="Rt" onChange={this.Changehandle}/><br/>
                <button onClick={this.handle}>Submit</button>
            </form>
            <div className="container">
            {
                this.state.EmpData.map((item,index)=>{
                    return(
                        <div key={index} className="data">
                        <span>Name : {item.name} || </span>
                        <span>Department : {item.dept} || </span>
                        <span>Rating : {item.rating}</span>
                        </div>
                    )
                })

            }
            </div>
            </>
        )
    }
}

export default FeedbackForm;