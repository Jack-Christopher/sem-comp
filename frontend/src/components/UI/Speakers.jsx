import { useEffect, useState } from "react";
import PersonGrid from "../common/PersonGrid";

export default function Speakers() {
  const [speakers, setSpeakers] = useState([]);

  useEffect(() => {
    fetch(process.env.REACT_APP_BACKEND_URL + '/person/get')
      .then(res => res.json())
      .then(res => res.filter(person => person.type === 'speaker'))
      .then(res => {
        setSpeakers(res);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="flex flex-col justify-center items-center py-12">
      <h3 className="text-lg md:text-4xl font-bold text-center mb-6">
        Ponentes
      </h3>
      <p className="text-sm md:text-2xl font-bold text-center mb-12">
        Los ponentes que estarán presentes para esta Semana de la Computación son:
      </p>
      <div className="flex flex-row justify-center items-center w-5/6">
        <PersonGrid
          people={speakers}
        />
      </div>
    </div>
  );
}