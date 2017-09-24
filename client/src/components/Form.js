import React from 'react';
import { Header, Segment, Button, Card, Image, Container, Divider} from 'semantic-ui-react';

class Form extends React.Component {
  defaultValue = { name: '', price: '', category: '',description: '', version: '' };
  state = { ...this.defaultValue };

  componentDidMount() {
    if(this.props.id)
      this.setState({ ...this.props })
  }

  handleChange = ({ target: { id, value } }) => {
    this.setState({ [id]: value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const app = { ...this.state };
    this.props.submit(app)
    this.setState({ ...this.defaultValue });
  }

  render() {
    const { name, description, price, category, version } = this.state;
    return(
      <form onSubmit={this.handleSubmit}>
        <input
          id='name'
          placeholder='Name'
          value={name}
          onChange={this.handleChange}
          required
        />
        <input
          id='description'
          placeholder='Description'
          value={description}
          onChange={this.handleChange}
        />
        <input
          id='price'
          placeholder='Price'
          type='float'
          value={price}
          onChange={this.handleChange}
        />
        <input 
          id='category'
          placeholder='category'
          value={category}
          onChange={this.handleChange}
        />
        <input 
          id='version'
          placeholder='version'
          value={version}
          onChange={this.handleChange}
        />
        <Button type='submit'>Submit</Button>
      </form>
    )
  }
}

export default Form;