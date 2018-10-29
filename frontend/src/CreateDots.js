import React, { Component } from 'react';
import './CreateDots.css'

class CreateDots extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            lng: "",
            lat: "",
            "quantity": "",
            title: "",
            description: "",
            img: "",
            category: ""
        }
    }

    postData = e => {
        console.log(this.state.name)
        console.log(`this.state: ${this.state}`)
        const dat =`lat=${this.state.lat}&lng=${this.state.lng}&name=${this.state.name}&quantity=${this.state.quantity}&img=${encodeURIComponent(this.state.img)}&title=${this.state.title}&body=${this.state.description}&category=${this.state.category}&upVotes=4&time=7%3A50am&UID=00MP4L00MP4`; 
        console.log(dat)
        fetch('http://localhost:3000/points/create', {
            'method': "POST",
            "headers": {
                "Content-Type": "application/x-www-form-urlencoded",
                "cache-control": "no-cache",
            },
            body: dat
            // body: "lat=59.90&lng=30.33&name=Allen%20Liu&quantity=1&img=https%3A%2F%2Fr.hswstatic.com%2Fw_907%2Fgif%2Fcomposting-sysk.jpg&title=Composting!&body=Composting!&category=Composting&upVotes=0&time=7%3A50am&UID=5bd41933a64fdb1ae5e2e82f"
                //    lat=30&lng=60&name=Miguel&quantity=12&title=recycling&body=look%20at%20me&category=Food%20Waste&upVotes=4&time=2:44&UID=00MP4L00MP4
            })
        .then(res => res.text())
        .then(data => {
            console.log(data)
            console.log(`this.state: ${this.state}`)
        })
    }

    updateName = name => {
        this.setState({ lng: encodeURIComponent(document.getElementById("longi").value) })
        this.setState({ lat: encodeURIComponent(document.getElementById("lati").value)})
        this.setState({ name: encodeURIComponent(name.target.value) })
        console.log(`lng: ${this.state.lng}`)
        console.log(`name: ${this.state.name}`)
    }

    updateBody = body => {
        this.setState({ body: encodeURIComponent(body.target.value) });
        console.log(`this.state.body: ${this.state.body}`)
    }

    updateLng = lng => {
        this.setState({ lng: encodeURIComponent(lng.target.value) })
        console.log(`lng: ${this.state.lng}`)
    }

    updateLat = lat => {
        this.setState({ lat: encodeURIComponent(lat.target.value)})
        console.log(`lat: ${this.state.lat}`)
    }

    updateQuantity = quan => {
        this.setState({ quantity: encodeURIComponent(quan.target.value)})
        console.log(`quantity: ${encodeURIComponent(this.state.quantity)}`)
    }

    updateTitle = tit => {
        this.setState({ title: encodeURIComponent(tit.target.value)})
        console.log(this.state.title);
    }

    updateDescription = desc => {
        this.setState({ description: encodeURIComponent(desc.target.value) })
        console.log(this.state.description);
    }

    updateCategory = cat => {
        this.setState({ category: encodeURIComponent(cat.target.value)})
        console.log(this.state.category);
    }

    handleImage(reader) {
        console.log(`reader: ${reader}`)
        const b64 = reader.split(',', 2)[1];
        console.log(b64)
    }

    _fileHandle(e) {
        e.preventDefault();
        let reader = new FileReader();
        let file = e.target.files[0];
        reader.onloadend = () => {
          this.setState({
            img: reader.result
          })
        }
        reader.readAsDataURL(file)
      }

      //
      //    

    componentDidMount() {
        this.setState({ category: "Food%20Waste"});
    }

    render() {
        return (
            <div class="create-dots">
            <h2>
              Make a new post:
            </h2>
                    <div class="form-group">
                        <input onChange={this.updateName} type="title" class="form-control" placeholder="Name" required="required" />
                    </div>
                    <div class="form-group">
                        <input id="longi" onChange={this.updateLng} type="title" class="form-control" placeholder="Longitude" required="required" />
                    </div>
                    <div class="form-group">
                        <input id="lati" onChange={this.updateLat} type="title" class="form-control" placeholder="Lattitude" required="required" />
                    </div>
                    <div class="form-group">
                        <input onChange={this.updateQuantity} type="title" class="form-control" placeholder="Quantity" required="required" />
                    </div>
                    <div class="form-group">
                        <input onChange={this.updateTitle} type="title" class="form-control" placeholder="Title" required="required" />
                    </div>
                    <div class="form-group">
                        <input onChange={this.updateDescription} type="description" class="form-control" placeholder="Description" required="required" />
                    </div>
                        <input type='file' onChange={(e) => this._fileHandle(e)}/>

                    <div class="form-group">
                      <label for="exampleFormControlSelect1">Category</label>
                      <select onChange={this.updateCategory} class="form-control" id="category-form">
                        <option>Food Waste</option>
                        <option>Water Conservation</option>
                        <option>Energy Conservation</option>
                        <option>Agriculture</option>
                        <option>Transportation</option>
                        <option>Plant-based Diet</option>
                      </select>
                    </div>

                    <button onClick={this.postData} class="btn btn-success btn-block">Submit</button>
            </div>
        );
    }
}

export default CreateDots;