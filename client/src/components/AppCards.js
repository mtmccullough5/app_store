import React from 'react';
import { Card, Image, Grid, Divider } from 'semantic-ui-react';
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
      <Card.Group itemsPerRow={4}>
        { apps.map( app =>
          <Link to={`/App/${app.id}`}>
            <Card key={app.id}>
              <Card.Content>
                <Image src={app.logo} />
                <Divider />
                <Card.Header>
                  {app.name}
                </Card.Header>
                <Card.Description>
                  <Link to={`/App/${app.id}`}>
                    View App
                  </Link>
                </Card.Description>
              </Card.Content>
            </Card>
          </Link>
          )
        }
      </Card.Group>
    )
  }
}

export default connect()(AppCards)
