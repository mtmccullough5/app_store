import React, { Component } from 'react';
import { Header, Segment, Button, Card, Image, Container, Divider} from 'semantic-ui-react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import axios from 'axios';
import { setHeaders } from '../actions/headers';
import Form from './Form';

class SingleApp extends React.Component {
  state = { app: {}, edit: false };

  componentDidMount() {
    axios.get(`/api/apps/${this.props.match.params.id}`)
      .then( res => this.setState({ app: res.data }) )
  }

  deleteApp = (id) => {
    axios.delete(`/api/apps/${id}`)
      .then( () => {
        this.props.history.push('/');
      })
  }
  show = () => {
    const { name, description, category, price, version, logo, id } = this.state.app;
    return(
        <Card key={id}>
          <Card.Content>
            <Image src={logo} />
            <Divider />
            <h1>{name}</h1>
            <h3>{description}</h3>
            <Divider />
            <h2>{category}</h2>
            <h3>${price}</h3>
            <h3>{version}</h3>
          </Card.Content>
        </Card>
    )
  }
  submit = (app) => {
    axios.put(`/api/apps/${app.id}`, { app })
      .then( res => this.setState({ app: res.data, edit: false }));
  }

  edit = () => (
    <Form {...this.state.app} submit={this.submit} />
  )

  toggleEdit = () => {
    this.setState({ edit: !this.state.edit })
  }

  render() {
    const { edit } = this.state;
    return(
      <Container>
        { edit ? this.edit() : this.show() }
        <button onClick={this.toggleEdit}>
          { edit ? 'Cancel' : 'Edit' }
        </button>
        <button onClick={ () => this.deleteApp(this.state)}>Delete App</button>
      </Container>
    )
  }
}

export default SingleApp;