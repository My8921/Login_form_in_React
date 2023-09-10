import React from "react";

class Greet extends React.Component{

constructor(props){

    super(props);
    this.props=props;
}
render() {
    return (
         <div className="container card p-3 mt-2 register-container text-center">
            <h3>{this.props.name}</h3>
            <h3>Thank you for joning us</h3>
            <h3>Verfication Sent to email{this.props.email} </h3>
         </div>
    );
}

}
export default Greet;