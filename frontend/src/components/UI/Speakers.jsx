import { Grid } from "@mui/material";
import Person from "../common/Person";
import PersonGrid from "../common/PersonGrid";

export default function Speakers() {
  let speakers = [
    {
      url: "https://media.licdn.com/dms/image/C4E03AQF-0gcJJwCdhw/profile-displayphoto-shrink_200_200/0/1617602240862?e=1698883200&v=beta&t=JPZAzYAXUY3yhZO_AN8rX40RHyZG3of_le8xAPldNvU",
      alt: "Foto de Cristian López Del Alamo",
      name: "Cristian López Del Alamo",
      description: "Dr. en ciencia de la computación obtenido con Felicitaciones públicas (summa cum laude), por la Universidad Nacional de San Agustín y Magíster en Ingeniería de Software con Máxima distinción(summa cum laude) por la Universidad de Tarapacá de Chile. Actualmente, es Profesor Investigador de la Universidad de Ingeniería y Tecnología (UTEC). Fue Director General de Investigación en la Universidad La Salle de Arequipa y profesor investigador en la misma universidad. También, es profesor de Ciencia de la Computación en la Universidad Nacional de San Agustín. Fue uno de los científicos que desarrolló el algoritmo de rastreo de contactos vía bluetooth para la PCM con el objetivo de generar alertas tempranas y evitar la expansión del coronavirus en Perú . También, ha sido ponente en diversos lugares del Perú, América Latina y Europa. Sus intereses de investigación están centrados en Geometry Deep Learning, Machine Learning y algoritmia.",
      shortDescription: "Dr. en Ciencia de la Computación y Magíster en Ingeniería de Software"
    },
    {
      url: "https://cs.ucsp.edu.pe/scgi2018/images/Manuel_Loaiza.png",
      name: "Manuel Eduardo Loaiza Fernandez",
      description: "D.Sc. in Computer Science since 2009 (PUC-Rio de Janeiro), more specifically in Computer Graphics with an emphasis in Computer Graphics and Computer Vision. M.Sc. in Computer Science since 2005 (PUC-Rio de Janeiro) with an emphasis in Computer Graphics, Virtual Reality, and Computer Vision. B.Sc. in System Engineering since 2002 (UNSA).",
      shortDescription: "D.Sc. in Computer Science since 2009 (PUC-Rio de Janeiro)"
    },
  ];

  // duplicate speakers 4 times
  speakers = speakers.concat(speakers ,speakers, speakers);

  return (
    <div className="flex flex-col justify-center items-center py-12">
      <h3 className="text-lg md:text-4xl font-bold text-center mb-6">
        Ponentes
      </h3>
      <p className="text-sm md:text-2xl font-bold text-center mb-12">
        Los ponentes que estarán presentes para esta Semana de la Computación son:
      </p>
      <div className="flex flex-row justify-center items-center px-32">
        <PersonGrid
          people={speakers}
        />
      </div>
    </div>
  );
}