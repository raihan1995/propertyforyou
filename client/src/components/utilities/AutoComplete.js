import React from "react";

export default class AutoCompleteText extends React.Component {
  constructor(props) {
    super(props);

    // this.items = ['London', 'Leicester', 'Manchester', 'Birmingham', 'Liverpool'];

    // initialise state
    this.state = {
      suggestions: [],
      text: "",
    };
  }

  onTextChanged = (e) => {
    const { setLocation } = this.props;
    const { items } = this.props;
    const value = e.target.value;
    setLocation(value);
    // console.log(value)
    let suggestions = [];
    if (value.length > 0) {
      // match user text
      const regex = new RegExp(`^${value}`, `i`);
      // sort alphabetically & filter to match regex
      suggestions = items.sort().filter((v) => regex.test(v));
    }
    // update state with filtered suggestions
    this.setState(() => ({ suggestions, text: value }));
    // console.log(this.state.text)
  };

  suggestionSelected(value) {
    const { setLocation } = this.props;
    let temp = value.toLowerCase();
    this.setState(() => ({
      text: value,
      suggestions: [],
    }));
    setLocation(temp);
  }

  renderSuggestions() {
    // destructure from state
    const { suggestions } = this.state;
    if (suggestions.length === 0) {
      return null;
    }
    return (
      <ul>
        {suggestions.map((item) => (
          <li onClick={() => this.suggestionSelected(item)} key={item}>
            {item}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    const { text } = this.state;
    return (
      <div className="auto-complete">
        <input
          type="text"
          name="autocomplete"
          id="autocomplete"
          className="form-control"
          onChange={this.onTextChanged}
          value={text}
        />
        {this.renderSuggestions()}
      </div>
    );
  }
}
