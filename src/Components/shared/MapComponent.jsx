import React from 'react';
import { MapContainer, TileLayer, Marker, Tooltip, Polygon } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default marker icon not showing in React Leaflet
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41]
});

L.Marker.prototype.options.icon = DefaultIcon;

export default function MapComponent({
    center,
    zoom = 6,
    markers = [],
    polygons = [],
    className = "h-64 w-full rounded-lg"
}) {
    return (
        <div className={`overflow-hidden shadow-inner border border-stone-200 ${className}`}>
            <MapContainer
                center={center}
                zoom={zoom}
                scrollWheelZoom={false}
                style={{ height: '100%', width: '100%' }}
            >
                {/* English-only, clean tiles from CartoDB */}
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
                    url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
                />

                {polygons.map((poly, index) => (
                    <Polygon
                        key={`poly-${index}`}
                        positions={poly.positions}
                        pathOptions={{ color: poly.color || 'red', fillColor: poly.fillColor || 'red', fillOpacity: 0.2 }}
                    >
                        {poly.label && (
                            <Tooltip sticky>{poly.label}</Tooltip>
                        )}
                    </Polygon>
                ))}

                {markers.map((marker, index) => (
                    <Marker key={`marker-${index}`} position={marker.position}>
                        <Tooltip
                            direction={marker.tooltipDirection || "top"}
                            offset={marker.tooltipOffset || [0, -20]}
                            opacity={1}
                            permanent
                        >
                            <div className="text-center px-1">
                                <span className="font-bold text-slate-900 text-sm block">{marker.label}</span>
                                {marker.description && (
                                    <span className="text-slate-500 text-xs font-normal">{marker.description}</span>
                                )}
                            </div>
                        </Tooltip>
                    </Marker>
                ))}
            </MapContainer>
        </div>
    );
}
