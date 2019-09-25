import React from 'react';
import * as ReactDOM from 'react-dom';
import { Scene } from '@esri/react-arcgis';
import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBCardHeader} from 'mdbreact';

const MapSection = () => {
    return (
        <MDBRow className="mb-4">
            <MDBCol md="12" className="mb-4">
                <MDBCard className="mb-4">
                    <MDBCardHeader>ArcGIS Satellite Elevation Map</MDBCardHeader>
                    <MDBCardBody style={{width: '100%', height: '700px'}} className="text-center">
                        <link rel="stylesheet" href="https://js.arcgis.com/4.10/esri/css/main.css"></link>
                        <Scene
                            mapProperties={{
                                basemap: 'satellite',
                                ground: 'world-elevation'
                            }}
                            viewProperties={{
                                camera: {
                                    position: {
                                        x: -84.1935444,
                                        y: 39.7252851,
                                        z: 350
                                    },
                                    tilt: 75
                                }
                            }}
                        />
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>
        </MDBRow>
    )
}

export default MapSection;