import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import request from 'superagent';
import Filters from '../filters/Filters';
import Item from './Item';
import Environment from '../../global/Environment';
import { getHotels, searchHotels, searchStars } from '../../../lib/htpp'


export default class Hotels extends React.Component {

  constructor(){
    super();
    this.state = {
      hotels: [],
      allHotels: [],
      tracks: [],
      loading: false
    }
    // this.searchTracks = this.searchTracks.bind(this)
    this.searchByText = this.searchByText.bind(this)
    this.filterStars = this.filterStars.bind(this)
    this.removeFilters = this.removeFilters.bind(this)
  }

  componentWillMount() {
    getHotels().then(data => {
      this.setState({ hotels: data, allHotels: data })
    })
  }

  searchByText(text) {
    if(text) {
      searchHotels(text).then(data => {
        this.setState({ hotels: data })
      })
    }
  }

  removeFilters() {
    this.setState({ hotels: this.state.allHotels })
  }

  filterStars(stars) {
    console.log('change stars filterStars', stars)
    if(stars) {
      searchStars(stars).then(data => {
        this.setState({ hotels: data })
      })
    }
  }

  render() {

    const hotels = this.state.hotels.map((hotel, i) => {
      return (
        <Item key={i} id={hotel.id} imagenUrl={require('../../../assets/images/hotels/'+hotel.image)}
          title={hotel.name}
          stars={hotel.stars}
          icons={hotel.amenities}
          price={hotel.price}/>
      );
    });


    return (
      <div className="Hotels">
        <Container fluid>
          <Row>
            <Col md="3">
              <Filters searchByText={this.searchByText} filterStars={this.filterStars} removeFilters={this.removeFilters} />
            </Col>
              <Col md="9">
                <Row>
                  {hotels}
                </Row>
              </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
