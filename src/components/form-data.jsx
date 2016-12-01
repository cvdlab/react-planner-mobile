import React, {PropTypes} from 'react';

const STYLE_SIGN = {
  fontSize: '30px',
  marginRight: '5px'
};

const STYLE_INPUT = {
  width: '200px',
  height: '40px',
  color: 'black',
  fontSize: '30px',
  border: '1px solid black',
};

const STYLE_BUTTON = {
  width: '40px',
  height: '44px',
  border: '1px solid black',
  fontSize: '30px',
  color: 'black',
  padding: '3px',
  marginLeft: '3px',
  cursor: 'pointer',
  background: 'none'
};


export default class FormData extends React.Component {

  constructor(props) {
    super(props);
    this.state = {text: ""};
    this.Input = null;
  }

  handleChange(event) {
    this.setState({text: event.target.value});
  }

  handleSubmit(event) {
    let number = parseInt(this.state.text);
    if (Number.isInteger(number)) {
      this.props.addNumber(number);
      this.setState({text: ""})
    }
    event.preventDefault();
  }

  componentDidMount() {
    this.Input.focus();
  }

  render() {
    return (
      <form onSubmit={event => this.handleSubmit(event)}>
        <span style={STYLE_SIGN}>+</span>
        <input type="text"
               onChange={event => this.handleChange(event)}
               value={this.state.text}
               ref={input => this.Input = input}
               style={STYLE_INPUT}/>
        <button type="submit" style={STYLE_BUTTON}>=</button>
      </form>
    )
  }
}

FormData.propTypes = {
  addNumber: PropTypes.func.isRequired
};
