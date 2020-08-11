import React from 'react';
import unicode from './unicode/unicode';
import blocks from './unicode/blocks';
import './Unicode.css'

class Unicode extends React.Component {
  constructor(props) {
    super();
    this.state = { results: this.search('') };
  }

  search(query) {
    return unicode
      .filter((entry) => entry.name.toUpperCase().includes(query.toUpperCase()))
      .slice(0, 100);
  }

  selectChar(entry) {
    const codeInt = parseInt(entry.code, 16);
    const block = this.findBlock(codeInt);
    this.setState({
      selected: {
        ...entry,
        html: String.fromCharCode(codeInt),
        block: block && block.name
      }
    });
  }

  findBlock(code) {
    return blocks.filter((b) => (b.from<=code && b.to>=code))[0];
  }

  render() {
    const handleSelect = (entry) => () => {
      this.selectChar(entry);
    };

    const handleSearch = (event) => {
      this.setState({
        results: this.search(event.target.value)
      });
    };

    const resultList = this.state.results.map((entry) =>
      <li key={entry.code}
          onClick={handleSelect(entry)}
          className={(this.state.selected && entry.code===this.state.selected.code) ? 'active' : ''}>
          {entry.name}
      </li>
    );
    const charInfo = this.state.selected
      ? <div>
          <p className="char-name">{ this.state.selected.name }</p>
          <p className="char-block">{ this.state.selected.block }</p>
          <p className="char-code">&#x{ this.state.selected.code };</p>
        </div>
      : undefined;

    return (
      <div className="app-ui">
        <div className="search-input" onChange={handleSearch}><input type="text" placeholder="Search"/></div>
        <div className="search-results">
          <ul>{resultList}</ul>
        </div>
        <div className="char-display">{ this.state.selected && this.state.selected.html }</div>
        <div className="char-info">{ charInfo }</div>
      </div>
    );
  }
}

export default Unicode;

