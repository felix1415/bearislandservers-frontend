import React from 'react';
import Box from '@material-ui/core/Box';
import Button from "@material-ui/core/Button";
import TextField from '@material-ui/core/TextField';

import axios from 'axios';

class Login extends React.Component
{
	constructor(props)
	{
		super(props);
		this.state={username:'', password:''}
	}

	handleClick(event)
	{
		var apiBaseUrl = "http://localhost:9000/auth/";
		var self = this;
		var payload={
			"username":this.state.username,
			"password":this.state.password
 		}
 		axios.post(apiBaseUrl+'login', payload).then(function (response) 
 		{
 			console.log(response);
 			if(response.data.code == 200)
 			{
 				console.log("Login successfull");
 			// 	var uploadScreen=[];
				// uploadScreen.push(<UploadScreen appContext={self.props.appContext}/>)
 			// 	self.props.appContext.setState({loginPage:[],uploadScreen:uploadScreen})
	 		}
	 		else if(response.data.code == 204)
	 		{
	 			console.log("Username password do not match");
	 			alert("username password do not match")
	 		}
	 		else
	 		{ 
	 			console.log("Username does not exists");
				alert("Username does not exist");
			}
		}).catch(function (error) {
			console.log(error);
		});
	}

	render()
	{
		return (
			<Box my={4}>
				<TextField
	             hintText="Enter your Username"
	             floatingLabelText="Username"
	             onChange = {(event,newValue) => this.setState({username:newValue})}
	             />
	           	<br/>                
	           	<TextField
	               type="password"
	               hintText="Enter your Password"
	               floatingLabelText="Password"
	               onChange = {(event,newValue) => this.setState({password:newValue})}
	               />
	             <br/>
	             <Button variant="contained" label="Submit" primary={true} onClick={(event) => this.handleClick(event)}>Submit </Button>
		    </Box>
		);
	}
}

export default Login;