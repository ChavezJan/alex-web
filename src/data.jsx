import { v4 as uuidv4 } from "uuid";


function data() {
  return [
    {
      name: "Inicio",
      id: uuidv4(),
      active: true,
    },
    {
      name: "Portafolio",
      id: uuidv4(),
      active: false,
    },
    {
      name: "Cursos online",
      id: uuidv4(),
      active: false,
    },
    {
      name: "Contacto",
      id: uuidv4(),
      active: false,
    },
    {
      name: "Sobre mí",
      id: uuidv4(),
      active: false,
    },
  ];
}

export default data;