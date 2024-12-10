"use client";

import { useState } from "react";
import EventData from "../../types/events";
import EventFormInput from "./EventFormInput";


interface AddEventProps {
  onAddEvent?: (event: EventData) => void; // Define a tipagem da função recebida via props
}

const AddEvent: React.FC<AddEventProps> = ({ onAddEvent }) => {
  const [eventData, setEventData] = useState<EventData>({
    name: "",
    date: "",
    person: "",
    Identification: 0,
    location: "",
    description: "",
    ong: "",
    validationcode: 0,
  });

  // Função para atualizar o estado com os dados do formulário
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setEventData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Função de envio
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onAddEvent) {
      onAddEvent(eventData); // Chama a função recebida via props
    } else {
      console.error("onAddEvent is not defined");
    }
    setEventData({
      name: "",
      date: "",
      person: "",
      Identification: 0,
      location: "",
      description: "",
      ong: "",
      validationcode: 0,
    });
  };

  return (
    <form
      onSubmit={handleSubmit} // Vinculando o envio do formulário à função handleSubmit
      className="p-6 max-w-lg my-auto mx-auto bg-event rounded shadow-md text-gray-700"
    >
      <h1 className="text-2xl font-bold mb-2 text-site border-gray-400">
        Adicionar Evento
      </h1>

      <EventFormInput
        label="Nome do Evento"
        type="text"
        name="name"
        value={eventData.name}
        onChange={handleInputChange}
        required
      />
      <EventFormInput
        label="ONG Vinculada"
        type="text"
        name="ong"
        value={eventData.ong}
        onChange={handleInputChange}
        required
      />
      <EventFormInput
        onChange={handleInputChange}
        label="Pessoa Responsável"
        type="text"
        name="person"
        value={eventData.person}
        required
      />
      <div className="flex  flex-auto space-x-10">

        <div>
          <EventFormInput
            onChange={handleInputChange}
            label="CPF/RG"
            type="text"
            name="Identification"
            value={eventData.Identification}
            required
          />
        </div>
        <div>
          <EventFormInput
            onChange={handleInputChange}
            label="Validation Code"
            type="text"
            name="validationcode"
            value={eventData.validationcode}
            required
          />
        </div>
      </div>

      <div>
        <EventFormInput
          onChange={handleInputChange}
          label="Data do Evento"
          type="date"
          name="date"
          value={eventData.date}
          required
        />

      </div>
      <div>
        <EventFormInput
          onChange={handleInputChange}
          label="Localização"
          type="text"
          name="location"
          value={eventData.location}
          required
        />
      </div>
      <EventFormInput
        onChange={handleInputChange}
        label="Descrição do Evento"
        type="textarea"
        name="description"
        value={eventData.description}
        rows={4}
        required
      />


      <button
        type="submit"
        className="w-full p-2 iconsNbuttons text-site rounded hover:bg-orange-600 duration-500"
      >
        Adicionar Evento
      </button>
    </form>
  );
};

export default AddEvent;
