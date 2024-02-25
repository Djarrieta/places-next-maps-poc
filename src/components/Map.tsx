"use client"
import { Loader } from "@googlemaps/js-api-loader"
import { useEffect, useRef } from "react"


export interface MapProps {
	markers: { lat: number, lng: number, tag: string }[],
	center: { lat: number, lng: number },
	zoom: number
}

export default function Map({ markers, center, zoom }: MapProps) {
	const mapRef = useRef<HTMLDivElement>(null)

	useEffect(
		() => {

			const initMap = async () => {
				const loader = new Loader({ apiKey: process.env.NEXT_PUBLIC_MAP_API || "", version: "weekly" })
				const { Map } = await loader.importLibrary("maps")
				const { Marker } = await loader.importLibrary("marker") as google.maps.MarkerLibrary

				const mapOptions: google.maps.MapOptions = {
					center,
					zoom,
					mapId: "myMap",
					mapTypeControl: false,
					fullscreenControl: false,
					streetViewControl: false,
					zoomControlOptions: { position: google.maps.ControlPosition.TOP_RIGHT }
				}
				const map = new Map(mapRef.current as HTMLDivElement, mapOptions)
				const icon = {
					url: "/location.svg",
					scaledSize: new google.maps.Size(30, 30),

				};


				markers.forEach((marker, index) => {
					const markerInstance = new Marker({ map, position: { lat: marker.lat, lng: marker.lng }, icon, optimized: true, label: marker.tag, })
					markerInstance.addListener("click", () => console.log("hola" + index))

				});
			}
			initMap()
		}
		, [markers, center, zoom])
	return <div className="w-full h-full " ref={mapRef} />;
}
