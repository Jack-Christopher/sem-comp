import { useEffect, useState } from "react";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

export default function Countdown(props) {
  const date = props.date;
  const now = new Date();

  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      let diffTime = Math.abs(date - now);
      const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
      diffTime -= diffDays * (1000 * 60 * 60 * 24);
      const diffHours = Math.floor((diffTime) / (1000 * 60 * 60));
      diffTime -= diffHours * (1000 * 60 * 60);
      const diffMinutes = Math.floor(diffTime / (1000 * 60));
      setDays(diffDays);
      setHours(diffHours);
      setMinutes(diffMinutes);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col justify-center items-center py-12">
      {date > now ? (
        <>
          <h3 className="text-lg md:text-4xl font-bold text-center mb-6">
            El Evento Inicia En:
          </h3>
          <div className="flex flex-row justify-center items-center">
            <div className="flex flex-col justify-center items-center ml-8">
              <h3 className="text-4xl md:text-6xl font-bold text-center mb-6">
                {days} &nbsp;:
              </h3>
              <p className="text-sm md:text-2xl font-bold text-center mb-6">
                Días &nbsp;&nbsp;&nbsp;&nbsp;
              </p>
            </div>
            <div className="flex flex-col justify-center items-center ml-8">
              <h3 className="text-4xl md:text-6xl font-bold text-center mb-6">
                {hours} &nbsp;:
              </h3>
              <p className="text-sm md:text-2xl font-bold text-center mb-6">
                Horas &nbsp;&nbsp;&nbsp;&nbsp;
              </p>
            </div>
            <div className="flex flex-col justify-center items-center ml-8">
              <h3 className="text-4xl md:text-6xl font-bold text-center mb-6">
                {minutes} &nbsp;
              </h3>
              <p className="text-sm md:text-2xl font-bold text-center mb-6">
                Minutos
              </p>
            </div>
          </div>
        </>
      ) : (
        <>
          <h3 className="text-lg md:text-4xl font-bold text-center mb-6">
            <CheckCircleOutlineIcon className="text-green-500 mr-3" fontSize="large" />
            ¡El evento ya culminó!
          </h3>
          <p className="text-sm md:text-2xl font-bold text-center mb-6">
            No dejes de apoyarnos, puedes revivir el evento por: 
            <a href="https://www.youtube.com/channel/UCIREVPQo9SrJvhgWOTfVgDA" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700"> Youtube </a>
            o
            <a href="https://www.facebook.com/epcc.unsa" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700"> Facebook </a>
          </p>
        </>
      )}
    </div>
  )
}