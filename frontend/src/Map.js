import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { data } from './data';
import axios from 'axios';
import Dot from './Dot';
 
class Map extends Component {
    static defaultProps = {
        center: [40.728793, -74.03541799999999],
        data: {},
        zoom: 11
    };

    constructor(props) {
        super(props);
        this.state = {
            address: "",
            data: this.props.data
        }
    }

    componentDidMount() {
    setInterval(() => {
        fetch("http://localhost:3000/points/readall", {
            method: 'GET',
        })
        .then(res => res.json())
        .then((data => {
            this.setState({ data: data })
            console.log(this.state.points)
        }))
    }, 1500)
    }

  render() {
    return (
      // Important! Always set the container height explicitly
      <center>
      <div style={{height: '50vh', width: '95%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.MAPS_API }}
          center={this.props.center}
          defaultZoom={this.props.zoom}
        >
          {
              this.state.data.map((item) => (
                    <Dot
                    upvotes={item.upVotes}
                    lat={item.lat}
                    lng={item.lng}
                    title={item.title}
                    category={item.category}
                    quantity={item.quantity}
                    time={item.time}
                    img={item.img}
                    body={item.body}
                    text={item.name}
                  />
              ))
          }
        </GoogleMapReact>
      </div>
      </center>
    );
  }
}
 
export default Map;
