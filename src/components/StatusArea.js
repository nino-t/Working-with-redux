import React from 'react';

export default class StatusArea extends React.Component {
	render() {
		return (
			<form>
			  <div className="form-group">
			    <label htmlFor="username">Username</label>
			    <input type="text" className="form-control" id="username" placeholder="Enter username" />
			  </div>
			  <div className="form-group">
			    <label htmlFor="exampleInputPassword1">Status</label>
			    <textarea className="form-control"></textarea>
			  </div>
			  <button type="submit" className="btn btn-primary">Submit</button>
			</form>
		);
	}
}
