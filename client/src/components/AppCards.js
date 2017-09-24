import React from 'react';
import { Card, Container, Image, Grid, Divider } from 'semantic-ui-react';
import { connect } from 'react-redux';
import axios from 'axios';
import { setHeaders } from '../actions/headers';
import { Link } from 'react-router-dom'

class AppCards extends React.Component {
  state = { apps: [] }

  componentDidMount() {
    axios.get('/api/apps')
      .then( ({ data, headers }) => {
        this.setState({ apps: data })
        this.props.dispatch(setHeaders(headers))
      });
  }

  render() {
    let { apps } = this.state;
    return (
      <div>
      <Divider />
        <Card.Group itemsPerRow={4}>    
            { apps.map( app =>
                <Card key={app.id} >
                  <Link to={`/App/${app.id}`}>
                    <Card.Content>
                      <Image src={app.logo} height={80}/>
                      <Divider />
                      <Card.Header>
                        {app.name}
                      </Card.Header>
                    </Card.Content>
                  </Link>
                </Card>
            )};            
        </Card.Group>
        </div>
    )
  }
}

export default connect()(AppCards)
