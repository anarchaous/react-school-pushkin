import React from 'react'
import { YMaps, Map } from 'react-yandex-maps'

export default function YandexMap() {
    const mapState = { center: [42.464189, 59.613154], zoom: 17 };
    return (
        <div style={{ width: '100%', height: '700px' }}>
            <YMaps>
                <Map defaultState={mapState} style={{ width: '100%', height: '100%' }} />
            </YMaps>
        </div>
    )
}