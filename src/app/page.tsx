"use client"
import Map, { MapProps } from "@/components/Map";
import React from "react";

export default function Home() {
  const places = [
    {
      id: "1",
      title: "Place 1",
      description: "This is a description for Place 1",
      tags: ["suero"],
      location: { lat: 9.952828521365396, lng: -75.0822506764465 },
    },
    {
      id: "2",
      title: "Place 2",
      description: "Description for Place 2",
      tags: ["suero", "queso"],
      location: { lat: 9.96, lng: -75.09 },
    },
    {
      id: "3",
      title: "Place 3",
      description: "Description for Place 3",
      tags: ["mountain", "adventure"],
      location: { lat: 9.953, lng: -75.083 },
    },
    {
      id: "4",
      title: "Place 4",
      description: "Description for Place 4",
      tags: ["city", "culture"],
      location: { lat: 9.953, lng: -75.0831 },
    },
  ];

  const mapProps: MapProps = {
    markers: places.map((p) => {
      return { lat: p.location.lat, lng: p.location.lng, tag: p.tags[0] };
    }),
    center: { lat: places[0].location.lat, lng: places[0].location.lng },
    zoom: 15,
  };

  return (
    <div className="flex flex-col  text-darkLand bg-land">
      <div className="h-[70vh] z-0 -mb-5 ">
        <Map {...mapProps} />
      </div>
      <div className="flex justify-center h-10 w-full  z-10 -mt-4  bg-land " >
        <div className="-mt-4 h-10  overflow-hidden flex justify-between px-2 gap-4 w-full" >
          <input type="text" className="rounded h-full px-2 shadow-md " placeholder="Buscar" />
          <button className="bg-white px-4 py-3 rounded-sm border-darkLand" >...</button>
        </div>
      </div>
      <div className=" flex flex-col items-center  px-2   " >
        {places.map(({ id, title, description, tags }) => {
          return (
            <div key={id} className="border border-darkLand p-4 mb-4 rounded-md w-full ">
              <h2 className="text-xl font-bold mb-2">{title}</h2>
              <div className="mb-2 ">
                {tags.map((t: string) => (
                  <span key={t} className="mr-2 bg-mountain px-2 py-1 rounded-full w-ful text-darkLand border-darkLand">
                    {t}
                  </span>
                ))}
              </div>
              <p>{description}</p>
            </div>
          );
        })}
      </div>

      <div className="flex justify-center gap-4 ">
        <button className="bg-white px-4 py-3 rounded-sm border-darkLand" >Ant</button>
        <button className="bg-white px-4 py-3 rounded-sm border-darkLand" >Sig</button>
      </div>
    </div>
  );
}