import React from 'react'
// import SearchSvg from './SearchSvg'
import { Button, Form, FormGroup, Input, Collapse } from 'reactstrap';

export default class Search extends React.Component {
    constructor(props) {
      super(props);
      this.toggle = this.toggle.bind(this);
      this.state = { collapse: true, text: '' };
      this.handleOnClick = this.handleOnClick.bind(this)
    }

    toggle() {
      this.setState({ collapse: !this.state.collapse });
    }

    handleOnClick() {
      this.props.searchByText(this.state.text)
      this.setState({ text: '' })
    }

    render() {
      const handleChange = (event) => {
        this.setState({ text: event.target.value })
      }
      return (
        <div className="Search">
          <div className="item-content p-3">
            <div className="title-toggle" onClick={this.toggle}>Nombre de hotel</div>
          </div>
          <Collapse isOpen={this.state.collapse} tag="div">
            <div className="item-content pl-3 pb-3 pr-3">
              <Form className="search-form">
                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                  <Input type='text' placeholder='Ingrese el nombre del hotel' value={this.state.text} onChange={handleChange}/>
                </FormGroup>
                <Button color="primary" onClick={this.handleOnClick}>Aceptar</Button>
              </Form>
            </div>
          </Collapse>
        </div>
      );
    }
};
