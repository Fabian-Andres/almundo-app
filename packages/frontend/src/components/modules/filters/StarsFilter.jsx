import React from 'react'
import { FormGroup, Label, Input, Collapse } from 'reactstrap';


export default class StarsFilter extends React.Component {
    constructor(props) {
      super(props);
      this.toggle = this.toggle.bind(this);
      this.state = { collapse: true, stars: [] };
    }

    toggle() {
      this.setState({ collapse: !this.state.collapse });
    }

    handleChange(event, starNumber) {
      let stars = []
      if (this.state.stars.includes(starNumber)) {
        stars = this.state.stars.filter((star) => star !== starNumber)
        this.setState({ stars })
      } else {
        stars = this.state.stars.concat(starNumber) // create a new copy of state stars
        this.setState({ stars })
      }

      this.props.filterStars(stars)
    }

    render() {

        return (
            <div className="StarsFilter mb-3">
                <div className="item-content p-3 mt-1">
                  <div className="title-toggle" onClick={this.toggle}>Estrellas</div>
                </div>
                <Collapse isOpen={this.state.collapse} tag="div">
                  <div className="item-content mb-3 pl-3 pb-3 pr-3">
                    <FormGroup check className="mb-2">
                      <Label check>
                        <Input type="checkbox" onChange={(e) => this.props.removeFilters()} defaultChecked/>{' '}
                        <b>Todas las estrellas</b>
                      </Label>
                    </FormGroup>
                    <FormGroup check className="mb-2">
                      <Label check>
                        <Input type="checkbox" onChange={(e) => this.handleChange(e, 5)} />{' '}
                        <div className="block-stars"><div className="stars" data-star="5" style={{width: 'calc(100%)'}}></div></div>
                      </Label>
                    </FormGroup>
                    <FormGroup check className="mb-2">
                      <Label check>
                        <Input type="checkbox" onChange={(e) => this.handleChange(e, 4)} />{' '}
                        <div className="block-stars"><div className="stars" data-star="4" style={{width: 'calc(80%)'}}></div></div>
                      </Label>
                    </FormGroup>
                    <FormGroup check className="mb-2">
                      <Label check>
                        <Input type="checkbox" onChange={(e) => this.handleChange(e, 3)} />{' '}
                        <div className="block-stars"><div className="stars" data-star="3" style={{width: 'calc(60%)'}}></div></div>
                      </Label>
                    </FormGroup>
                    <FormGroup check className="mb-2">
                      <Label check>
                        <Input type="checkbox" onChange={(e) => this.handleChange(e, 2)} />{' '}
                        <div className="block-stars"><div className="stars" data-star="2" style={{width: 'calc(40%)'}}></div></div>
                      </Label>
                    </FormGroup>
                    <FormGroup check className="mb-2">
                      <Label check>
                        <Input type="checkbox" onChange={(e) => this.handleChange(e, 1)} />{' '}
                        <div className="block-stars"><div className="stars" data-star="1" style={{width: 'calc(20%)'}}></div></div>
                      </Label>
                    </FormGroup>
                  </div>
                </Collapse>
            </div>
        );
    }

};
