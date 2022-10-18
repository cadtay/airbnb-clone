import { SetStateAction, useState } from 'react';
import Map, { Marker, Popup } from 'react-map-gl'; 
import { getCenter } from 'geolib';
import { Places } from '../Models/Places';

interface Props {
    places: Places[] 
}

const PlaceMap = ({ places }: Props) => {
    const longAndLatArr = places.map((val) => ({
        latitude: Number(val.lat),
        longitude: Number(val.long)
    }))
    
    const center: any = getCenter(longAndLatArr)

    const [viewport, setViewport] = useState({
        zoom: 11,
        latitude: center.latitude,
        longitude: center.longitude  
    });
    
    return (
        <Map
            mapStyle='mapbox://styles/cadtay/cl94kufyy001v14ljly9u2h56'
            mapboxAccessToken={process.env.mapbox_key}
            {...viewport}
            onMove={(evt) => setViewport(evt.viewState)}
        >
            {places.map((result, index) => (
                <Marker 
                    key={index}
                    longitude={result.long}
                    latitude={result.lat}
                    offset={[20, 20]}
                >
                    <p className='cursor-pointer text-2xl'></p>
                </Marker>
            ))}
        </Map>
    )
}

export default PlaceMap