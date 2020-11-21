import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap'
import CampsiteInfo from "./CampsiteInfoComponent"

class Directory extends Component{
    constructor(props){ 
        super(props);
        this.state = {
            selectCampsite: null
        };
    }

    onCampsiteSelect(campsite){
        this.setState({selectCampsite: campsite})
    }

  

    render() {
        const directory = this.props.campsites.map(campsite => {
            return (
                <div key={campsite.id} className="col-md-5 m-1">
                    <Card onClick={() => this.onCampsiteSelect(campsite)}>
                        <CardImg src={campsite.image} alt={campsite.name}/>
                        <CardImgOverlay>
                            <CardTitle>{campsite.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        })
        return(
            <div className="container">
                <div className="row">
                    {directory}
                </div>
                 <CampsiteInfo campsite={this.state.selectCampsite}></CampsiteInfo>
            </div>
        );
    }
}

export default Directory;