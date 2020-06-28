import React from 'react'
import { Map as OSMap, Marker, Popup, TileLayer } from 'react-leaflet'
import { LatLngTuple } from 'leaflet'
import { Modal } from 'baseui/modal'
import { ParagraphMedium } from 'baseui/typography'
import './Leaflet.css'
import { GiHomeGarage, GiEnergyArrow, GiWaterBolt } from 'react-icons/gi'
import Leaflet from 'leaflet'
import _ from 'lodash-es'

import gaussian from 'gaussian'

const center: LatLngTuple = [50.189, 8.5201703]
const current: LatLngTuple = [50.18087, 8.52572]
const fireCircle: LatLngTuple = [50.195, 8.5201703]
const latDistribution = gaussian(fireCircle[0], 0.00002)
const lngDistribution = gaussian(fireCircle[1], 0.00002)
const NUM_EXTRAS = 40
const lats = latDistribution.random(NUM_EXTRAS)
const longs = lngDistribution.random(NUM_EXTRAS)
console.log(lats, longs)

var redIcon = new Leaflet.Icon({
  iconUrl:
    'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png',
  shadowUrl:
    'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
})

export function Map(props: { isShowing?: boolean; onClose?: () => void }) {
  const { isShowing = false, onClose } = props
  return (
    <Modal isOpen={isShowing} closeable onClose={onClose}>
      <div className="details-on-map show-map">
        <div className="paper-map">
          <div className="map-side"></div>
          <div className="map-side"></div>
          <div className="map-side"></div>
          <div className="map-side"></div>
        </div>
        <OSMap center={center} zoom={14}>
          <TileLayer
            url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">CartoDB</a>'
          />
          <Marker position={current}>
            <Popup>
              <ParagraphMedium>
                <GiHomeGarage />
                Home Base <br />
                <GiEnergyArrow />
                Energy: 23/100 <br />
                <GiWaterBolt />
                Water: 75/100 <br />
              </ParagraphMedium>
            </Popup>
          </Marker>
          {_.times(NUM_EXTRAS).map((idx) => {
            const pos: LatLngTuple = [lats[idx], longs[idx]]
            return (
              <Marker position={pos} icon={redIcon}>
                <Popup>
                  <ParagraphMedium>
                    <GiHomeGarage />
                    Home Base <br />
                    <GiEnergyArrow />
                    Energy: 23/100 <br />
                    <GiWaterBolt />
                    Water: 75/100 <br />
                  </ParagraphMedium>
                </Popup>
              </Marker>
            )
          })}
        </OSMap>
      </div>
    </Modal>
  )
}

export default Map
