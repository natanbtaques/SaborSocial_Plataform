"use client";

import React from "react";
import EventData from "../types/events";

interface EventListProps {
  events: EventData[];
}

const EventList: React.FC<EventListProps> = ({ events = [] }) => {
  return (
    <div className="min-h-screen min-w-full bg-list p-6 mb-5 rounded-lg shadow-md">
      <h2 className="text-2xl text-white mb-4">Lista de Eventos</h2>
      <ul className="text-white space-y-4">
        {events.map((event, index) => (
          <li key={index} className="border border-gray-400 flex flex-col md:flex-row bg-gray-800 p-4 rounded-lg shadow-lg">
            <div className="md:w-1/4 bg-gray-700 p-4 rounded-l-lg flex items-center justify-center">
              <h3 className="text-lg font-bold">{event.name}</h3>
            </div>
            <div className="flex-1 bg-gray-700 p-4">
              <p className="font-semibold">Data:</p>
              <p>{event.date}</p>
            </div>
            <div className="flex-1 bg-gray-700 p-4">
              <p className="font-semibold">Localização:</p>
              <p>{event.location}</p>
            </div>
            <div className="flex-1 bg-gray-700 p-4">
              <p className="font-semibold">ONG:</p>
              <p>{event.ong}</p>
            </div>
            <div className="flex-1 bg-gray-700 p-4 rounded-r-lg">
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
