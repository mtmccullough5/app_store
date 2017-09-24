import React from 'react';
import { Header, Segment, Button, Card, Image, Container, Divider} from 'semantic-ui-react';
import Form from './Form';
import axios from 'axios';

class NewApp extends React.Component {
  state = { app: {}};

  submit = (app) => {
    axios.post(`/api/apps/`, { app })
      .then( res => this.setState({ app: res.data}));
  }

  render() {
    return(
      <Container textAlign={'center'}>
        <Form {...this.state.app} submit={this.submit}/>
      </Container>
    )
  }
}

export default NewApp;
