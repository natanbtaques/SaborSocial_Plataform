"use client";

import { useState } from "react";
import EventData from "../../types/events";
import EventFormInput from "./EventFormInput";
import handlerEvent from "@/pages/api/events";

interface AddEventProps {
  onAddEvent?: (event: EventData) => void; // Define a tipagem da função recebida via props
}

const AddEvent: React.FC<AddEventProps> = ({ onAddEvent }) => {
  const [eventData, setEventData] = useState<EventData>({
    name: "",
    date: "",
    person: "",
    identification: 0,
    location: "",
    description: "",
    ong: "",
    validationcode: 0,
    foodtype: "",
    kg: 0,
    organization: ""
  });

  // Função para atualizar o estado com os dados do formulário
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setEventData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

//   const callAPI = async () => {
//     try {
//         const response = await fetch('http://localhost:5240/api/Eventos');
//         if (!response.ok) {
//             throw new Error(`HTTP error! status: ${response.status}`);
//         }
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.error('Erro ao chamar a API:', error);
//     }
// };

  // Função de envio
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (onAddEvent) {
      onAddEvent(eventData); // Chama a função recebida via props
      
      console.log(JSON.stringify(eventData));
      const response = await fetch('http://localhost:5240/api/Eventos', {
      
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(eventData), // Certifique-se de que 'eventData' corresponde ao DTO esperado
      
      
      });      

      console.log(await response.json());

    } else {
      console.error("onAddEvent is not defined");
    }
    setEventData({
      name: "",
      date: "",
      person: "",
      identification: 0,
      location: "",
      description: "",
      ong: "",
      validationcode: 0,
      foodtype: "",
      kg: 0,
      organization: ""
    });
  };

  return (
    
    <form
      onSubmit={handleSubmit} // Vinculando o envio do formulário à função handleSubmit
      className="p-6 max-w-lg my-auto mx-auto bg-event rounded shadow-md text-gray-700 w-full"
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
        label="Organizacao"
        type="text"
        name="organization"
        value={eventData.organization}
        onChange={handleInputChange}
        required
      />
      <div className="flex flex-wrap space-x-4 w-full">
        <div className="flex-1">
          <EventFormInput
            onChange={handleInputChange}
            label="Data do Evento"
            type="date"
            name="date"
            value={eventData.date}
            required
          />
        </div>
        <div className="flex-1">
          <EventFormInput
            label="ONG Vinculada"
            type="text"
            name="ong"
            value={eventData.ong}
            onChange={handleInputChange}
            required
          />
        </div>
      </div>

      <EventFormInput
        onChange={handleInputChange}
        label="Pessoa Responsável"
        type="text"
        name="person"
        value={eventData.person}
        required
      />
      <div className="flex flex-wrap space-x-4 w-full">
        <div className="flex-1">
          <EventFormInput
            onChange={handleInputChange}
            label="CPF/RG"
            type="text"
            name="identification"
            value={eventData.identification}
            required
          />
        </div>
        <div className="flex-1">
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

      <div className="flex flex-wrap space-x-4 w-full">
        <div className="flex-1">
          <EventFormInput
            onChange={handleInputChange}
            label="Alimento"
            type="select"
            name="foodtype"
            value={eventData.foodtype}
            options={["Marmitas", "Salgados", "Vegetariano", "Vegano"]}
            required
          />
        </div>
        <div className="flex-1">
          <EventFormInput
            onChange={handleInputChange}
            label="Kg"
            type="number"
            name="kg"
            value={eventData.kg}
            required
          />
        </div>
      </div>
      <EventFormInput
        onChange={handleInputChange}
        label="Localização"
        type="text"
        name="location"
        value={eventData.location}
        required
      />
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
