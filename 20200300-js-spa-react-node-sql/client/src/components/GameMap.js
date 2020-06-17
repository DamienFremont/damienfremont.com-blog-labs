/**
 * @see https://taylor.callsen.me/using-reactflux-with-openlayers-3-and-other-third-party-libraries/
 */
import React from 'react';
import 'ol/ol.css';
import { Map, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import * as layer from 'ol/layer';
import * as source from 'ol/source';
import './GameMap.css';


class GameMap extends React.Component {

    componentDidMount() {

        // create feature layer and vector source
        var featuresLayer = new layer.Vector({
            source: new source.Vector({
                features: [],
            })
        });

        // create map object with feature layer
        var map = new Map({
            target: this.refs.mapContainer,
            layers: [
                //default OSM layer
                new TileLayer({
                    source: new OSM()
                }),
                featuresLayer
            ],
            view: new View({
                center: [-11718716.28195593, 4869217.172379018], //Boulder, CO
                zoom: 13,
            })
        });

        // save map and layer references to local state
        this.setState({
            map: map,
            featuresLayer: featuresLayer
        });

    }

    render() {
        return (
            <div ref="mapContainer" className="h-100 w-100"> </div>
        );
    }
}

export default GameMap;