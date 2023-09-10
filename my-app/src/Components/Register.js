import React from "react";
import '../App.css';
import styled from 'styled-components';

class Register extends React.Component{

    constructor(props){
        super(props);
        this.props=props;

     
      }
    

    render() {
   
        let btnClasses=["btn ","m-1"];
        const btnStyle={
            
            color:"white"
        }
        let btnText;
        let passwordboxtype;


     if(this.props.showpass===true){
       
       btnStyle.backgroundColor="red"
       btnText="Hide Password";
       passwordboxtype="text";
btnClasses.push("btn-danger");
     }
     else{
        passwordboxtype="password";
        btnText="Show Password";
        btnClasses.push("btn-success");
     }
const Styledbutton=styled.button`

display:${(props)=> props.flag=== "1" ? "inline-block":"block" };
padding:10px 5px;
background-color:${(props)=>props.color};
border:none;
color:white;
width:${(props)=> props.flag==="1" ? "45%":"100%"};
margin:5px;
`;
const StyledRegisterContainer=styled.div`
width:500px;
&:hover{
    box-shadow:0px 0px 5px grey;
}
@media(min-width:0px) and (max-width:600px){
width:300px;

}
`;
        
        return (
        
            <StyledRegisterContainer className="container card p-3 mt-2 ">
                <h1 className="text-center">Registration From</h1>
                <form onSubmit={this.props.submit}>

                    <div className="form-group">
                        <label htmlFor="Name">Name</label>
                       <input type="text" name="name"  required  className="form-control"/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                       <input type="emali" name="email" required className="form-control"/>
                    </div>


                    <div className="form-group">
                        <label htmlFor="password">password</label>
                       <input type={passwordboxtype} name="password" required  className="form-control"/>
                    </div>


<button type="submit" className="btn btn-primary m-1">Register</button>
<button type="button" className={btnClasses.join(" ")}  onClick={this.props.clicked} >{btnText}</button>
<br></br>
<Styledbutton type="button" flag="1"color="orange">Login</Styledbutton>
<Styledbutton type="button" flag="1"color="green"  >Login with Google</Styledbutton>
<Styledbutton type="button" flag="0"color="blue"  >Login with Facebook</Styledbutton>




                </form>
             </StyledRegisterContainer>
        );
    }
    }

export default Register;