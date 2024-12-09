export default async function handler(req, res) {
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

    // Lógica para salvar os dados em um banco de dados (ex.: MongoDB, PostgreSQL)
    console.log("Evento recebido:", {
      name,
      date,
      location,
      description,
      person,
      Identification,
      ong,
      validationcode,
    });

    return res.status(201).json({ message: "Evento adicionado com sucesso!" });
  }

  return res.status(405).json({ message: "Método não permitido" });
}
