
import React from "react";
import Greet from "./Components/Greet";
import Register from "./Components/Register";
import "./App.css";

class App extends React.Component{

constructor(props){
  super(props);
  this.props=props;
  this.state={
    isRegisterd:false,
    name:null,
    password:null,
    email:null,
    showpass:false
  };

}
RegistrationHandler=(event)=>{
  const name=event.target.name.value;
  const email=event.target.email.value;
  const password=event.target.password.value;

  this.setState({name,email,password,isRegisterd:true});
event.preventDefault();


};

clickhandler=(event)=>{
  console.log("yes i clicked");
  event.preventDefault();

this.setState({showpass:!this.state.showpass});
}

render(){
return(
 <div>
{this.state.isRegisterd ? (<Greet name={this.state.name} email={this.state.email} password={this.state.password} ></Greet>) : (<Register submit={this.RegistrationHandler} showpass={this.state.showpass} 
clicked={this.clickhandler}></Register>)}
 </div>
);


}

}
export default App;