"use client";

import React from "react";
import EventData from "../types/events";

interface EventListProps {
  events: EventData[]; // Tipagem para a lista de eventos
}

const EventList: React.FC<EventListProps> = ({ events = [] }) => {
  return (
    <div className="min-h-screen min-w-full bg-list p-6 mb-5 rounded">
      <h2 className="text-2xl text-white">Lista de Eventos</h2>
      <ul className="text-white">
        {events.map((event, index) => (
          <li key={index} className="my-4 border border-gray-400 flex flex-col md:flex-row bg-gray-800 p-4 rounded-lg shadow-lg">
            <div className="md:w-1/4 bg-gray-700 p-2 rounded-l-lg">
              <h3 className="text-lg font-bold">{event.name}</h3>
            </div>
            <div className="flex-1 bg-gray-700 p-2">
              <p className="font-semibold">Data:</p>
              <p>{event.date}</p>
            </div>
            <div className="flex-1 bg-gray-700 p-2">
              <p className="font-semibold">Localização:</p>
              <p>{event.location}</p>
            </div>
            <div className="flex-1 bg-gray-700 p-2">
              <p className="font-semibold">ONG:</p>
              <p>{event.ong}</p>
            </div>
            <div className="flex-1 bg-gray-700 p-2 rounded-r-lg">
              <p className="font-semibold">Descrição:</p>
              <p>{event.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventList;
