export default async function handlerEvent(req, res) {
  if (req.method === "POST") {
    
    const {
      name,
      date,
      person,
      Identification,
      location,
      description,
      ong,
      validationcode,
    } = req.body;

    const eventData = {
      name,
      date,
      person,
      Identification,
      location,
      description,
      ong,
      validationcode,
    };

 
    const response = await fetch('http://localhost:7292/api/events', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(eventData)
     
    });

    if (response.ok) {
      const data = await response.json();
      console.log(data.message);
      return res.status(201).json({ message: "Evento adicionado com sucesso!" });
    } else {
      console.error('Erro ao adicionar evento:', response.statusText);
      return res.status(response.status).json({ message: response.statusText });
    }
  }

  return res.status(405).json({ message: "Método não permitido" });
}