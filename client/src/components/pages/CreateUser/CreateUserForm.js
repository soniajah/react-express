import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';

class CreateUserForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    fetch("http://localhost:9000/user/create",{
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      mode: 'cors',
      body: JSON.stringify({name: this.state.value})
    })
    .then(res => {
      console.log(res)
       this.props.updateUserList()
    })
    event.preventDefault();    
  }

  render() {

    return ( 
      <Form onSubmit={this.handleSubmit}>
        <Form.Row className="align-items-center">
          <Col xs="auto">
            <Form.Label htmlFor="inlineFormInput" srOnly>
              Username
            </Form.Label>
            <Form.Control
              className="mb-2"
              id="inlineFormInput"
              placeholder="Name"
              value={this.state.value} 
              onChange={this.handleChange}
            />
          </Col>         
          <Col xs="auto">
            <Button variant="dark" type="submit" className="mb-2">
              Add User
            </Button>
          </Col>
        </Form.Row>
      </Form>  
    );
  }
}

export default CreateUserForm