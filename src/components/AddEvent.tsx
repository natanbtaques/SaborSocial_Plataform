"use client";

import { useState } from "react";
import EventData from "../types/events";
import next from "next";
import EventFormInput from "./EventFormInput";

const AddEvent = () => {
  // Definindo o estado para cada campo do formulário
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
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Impede o envio padrão do formulário
    try {
      const response = await fetch("/api/events", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(eventData),
      });

      if (response.ok) {
        alert("Evento adicionado com sucesso!");
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
      } else {
        alert("Erro ao adicionar o evento. Tente novamente.");
      }
    } catch (error) {
      console.error("Erro:", error);
      alert("Erro ao enviar os dados.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit} // Vinculando o envio do formulário à função handleSubmit
      className="p-6 max-w-full h-screen mx-auto  bg-gray-200 rounded shadow-md text-gray-700"
    >
      <h1 className="text-2xl font-bold mb-2 text-gray-700">
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




      {/* 
      <div className="flex flex-auto space-x-10">
        <div>
          <label
            htmlFor="name"
            className="block mb-2 font-medium text-gray-600"
          >
            Pessoa Responsável:
          </label>
          <input
            type="text"
            name="person"
            id="person"
            value={eventData.person} // Controlando o valor via estado
            onChange={handleInputChange} // Atualizando o estado ao digitar
            required
            className="w-full p-2 mb-4 border border-gray-300 rounded"
          />
        </div>
        <div>
          <label
            htmlFor="name"
            className="block mb-2 font-medium text-gray-600"
          >
            CPF/RG:
          </label>
          <input
            type="number"
            name="Identification"
            id="Identification"
            value={eventData.Identification} // Controlando o valor via estado
            onChange={handleInputChange} // Atualizando o estado ao digitar
            required
            className="w-full p-2 mb-4 border border-gray-300 rounded"
          />
        </div>
      </div> */}

      <label htmlFor="date" className="block mb-2 font-medium text-gray-600">
        Data do Evento:
      </label>
      <input
        type="date"
        name="date"
        id="date"
        value={eventData.date} // Controlando o valor via estado
        onChange={handleInputChange} // Atualizando o estado ao digitar
        required
        className="w-full p-2 mb-4 border border-gray-300 rounded"
      />

      <label
        htmlFor="location"
        className="block mb-2 font-medium text-gray-600"
      >
        Localização:
      </label>
      <input
        type="text"
        name="location"
        id="location"
        value={eventData.location} // Controlando o valor via estado
        onChange={handleInputChange} // Atualizando o estado ao digitar
        required
        className="w-full p-2 mb-4 border border-gray-300 rounded"
      />

      <label
        htmlFor="description"
        className="block mb-2 font-medium text-gray-600"
      >
        Descrição do Evento:
      </label>
      <textarea
        name="description"
        id="description"
        value={eventData.description} // Controlando o valor via estado
        onChange={handleInputChange} // Atualizando o estado ao digitar
        required
        rows="3"
        className="w-full p-2 mb-4 border border-gray-300 rounded"
      ></textarea>

      <button
        type="submit"
        className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Adicionar Evento
      </button>
    </form>
  );
};

export default AddEvent;
