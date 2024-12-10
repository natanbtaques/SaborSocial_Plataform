"use client";

import { useState } from "react";
import AddEvent from "./AddEvent/AddEvent";
import EventList from "./EventList";
import EventData from "../types/events";

const EventManager = () => {
    const [events, setEvents] = useState<EventData[]>([]);

    // Função para adicionar eventos
    const addEvent = (event: EventData) => {
        setEvents((prevEvents) => [...prevEvents, event]);
    };

    return (
        <div>

            <div className="flex flex-row h-full mx-1">
                <div className="flex-grow-0 flex-shrink-0 basis-2/5"><AddEvent onAddEvent={addEvent} /></div>
                <div className="flex-grow-0 flex-shrink-0 basis-3/5 pr-10"><EventList events={events} /></div>

            </div>
        </div>

    );
};

export default EventManager;
