import React from 'react'
import Search from './Search';
import StarsFilter from './StarsFilter';
import { Collapse } from 'reactstrap';


export default class Filters extends React.Component {
    constructor(props) {
      super(props);
      this.toggle = this.toggle.bind(this);
      this.state = { collapse: true };
    }

    toggle() {
      this.setState({ collapse: !this.state.collapse });
    }

    render() {
        return (
            <div>
              <div className="item-content mb-1 p-3">
                <h3 className="mb-0" onClick={this.toggle}>Filtros</h3>
              </div>
              <Collapse isOpen={this.state.collapse}>
                <Search searchByText={this.props.searchByText} />
                <StarsFilter filterStars={this.props.filterStars} removeFilters={this.props.removeFilters} />
              </Collapse>
            </div>
        );
    }

};
