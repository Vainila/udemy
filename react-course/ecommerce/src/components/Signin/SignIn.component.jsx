import React from "react"

class SignIn extends React.Component{
   constructor(props){
      super(props);
      this.State = {
         password : "",
         email : "",

      }
   }
   handleSubmit = (event) =>{
      event.preventDefault();
      this.setState({email : '', password : ''});

   }
   handleChange = (event)=>{
      const {value , name} = event.target
      this.setState({[name]: value});
   }
   
   render(){
      return (
         <div className="sign-in">
         <h2 className="sign__title">I already have an account</h2>
         <span className="sign__subtitle">Sign in with your email and password</span>

         <form onSubmit={this.handleSubmit}>
            <input type="text" name="email" id="sign-in-email" value={this.state.email} onChange={this.handleChange}/>
            <label htmlFor="email">Email</label>
            <input type="password" name="password" id="sign-in-pass" value={this.state.password} onChange={this.handleChange}/>
            <label htmlFor="password">Password</label>
            <input type="submit" value="Submit Form"  />
         </form>
         </div>
      );
   }
}


export default SignIn;