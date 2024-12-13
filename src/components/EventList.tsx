"use client";

import React from "react";
import EventData from "../types/events";

interface EventListProps {
  events: EventData[];
}

const EventList: React.FC<EventListProps> = ({ events = [] }) => {
  return (
    <div className="min-h-screen bg-gray-900 py-8 px-4 md:px-12">
      <h2 className="text-3xl text-center text-white font-bold mb-6">Lista de Eventos</h2>
      <div className="max-h-[70vh] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-800 rounded-lg">
        <ul className="space-y-4">
          {events.length > 0 ? (
            events.map((event, index) => (
              <li
                key={index}
                className="flex flex-col md:flex-row items-center border border-gray-700 bg-gray-800 p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                {/* Nome do Evento */}
                <div className="md:w-1/4 bg-gray-700 p-4 rounded-l-lg flex items-center justify-center text-center">
                  <h3 className="text-sm font-bold text-orange-400 whitespace-nowrap overflow-hidden text-ellipsis">
                    {event.name}
                  </h3>
                </div>

                {/* Informações do Evento */}
                <div className="flex-1 flex flex-wrap md:flex-nowrap gap-4 p-4">
                  <div className="flex-1">
                    <p className="font-semibold text-orange-400">Data:</p>
                    <p className="text-gray-300">{event.date}</p>
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-orange-400">Localização:</p>
                    <p className="text-gray-300">{event.location}</p>
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-orange-400">ONG:</p>
                    <p className="text-gray-300">{event.ong}</p>
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-orange-400">Descrição:</p>
                    <p className="text-gray-300">{event.description}</p>
                  </div>
                </div>
              </li>
            ))
          ) : (
            <p className="text-center text-gray-400 text-lg">Nenhum evento disponível</p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default EventList;
