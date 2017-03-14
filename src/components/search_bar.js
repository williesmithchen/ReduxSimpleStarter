import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
  }

  render() {
    return (
      <div className="search-bar">
        <input
          value={this.state.term}
          onChange={e => this.onChange(e.target.value)} />
      </div>
    );
  }

  onChange (term) {
    console.log(term);
    this.setState({ term });
    this.props.onChange(term);
  }
}

export default SearchBar;
