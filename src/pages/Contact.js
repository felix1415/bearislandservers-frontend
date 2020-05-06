import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {CopyToClipboard} from 'react-copy-to-clipboard';

export default function Contact() {
	return (
		<Box my={4}>
	        <Typography variant="h2" component="h1" gutterBottom>
	        	Contact 
	        </Typography>
	        <Typography variant="body" gutterBottom>
	        	All server issues and admin actionable problems can be directed to the admins using the bear island email. Though we aim to reply to all emails, trivial, outdated or persitent chasing may be ignored.
	        	If an Admin is not responding in game, your best course of action is to send us an email:
	        </Typography>
	        <div/>
	        <CopyToClipboard text="BearPatrol.BearIsland@Gmail.com">
            	<Button>Copy email to clipboard</Button>
          </CopyToClipboard>
	    </Box>
	);
}