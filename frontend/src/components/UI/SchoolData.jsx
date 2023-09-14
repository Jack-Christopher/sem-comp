import { Paper } from "@mui/material";
import PlaceIcon from '@mui/icons-material/Place';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

export default function SchoolData() {
  return (
    <div className="flex flex-col justify-center items-center bg-[#098DCF] py-8">
      <h1 className="text-2xl font-bold text-white">
        Escuela Profesional de Ciencia de la Computación
      </h1>
      <div className="flex flex-row justify-center items-center w-full space-x-8 mt-8">
        <div className="flex flex-col justify-center items-center w-2/5">
          <h1 className="text-xl font-bold text-white">
            Universidad Nacional de San Agustín de Arequipa
          </h1>
          <div className="flex flex-row justify-center items-center space-x-4">
            <Paper className="w-2/5 p-4 m-4" elevation={12} rounded={4}>
              <h1 className="text-xl font-bold text-[#098DCF]">
                <PlaceIcon className="text-[#098DCF] mr-2" />
                DIRECCIÓN
              </h1>
              <p>
                Av. Venezuela S/N Puerta 3 Campus de Ingeniería
              </p>
              <p>
                Pabellón Alan Turing
              </p>
              <p>
                Arequipa - Perú
              </p>
            </Paper>

            <Paper className="w-2/5 p-4 m-4" elevation={12} rounded={4}>
            <h1 className="text-xl font-bold text-[#098DCF]">
              <PhoneIcon className="text-[#098DCF] mr-2" />
                TELÉFONO
              </h1>
              <a href="tel:054-285298" className="text-blue-800">
                054 - 285298
              </a>
            </Paper>
          </div>
          <Paper className="w-3/5 p-4 m-4" elevation={12} rounded={4}>
            <h1 className="text-xl font-bold text-[#098DCF]">
              <EmailIcon className="text-[#098DCF] mr-2" />
              CORREO ELECTRÓNICO
            </h1>
            <a href="mailto:epcc@unsa.edu.pe" className="text-blue-800"> 
              epcc@unsa.edu.pe
            </a>
          </Paper>

        </div>
        <div className="flex flex-col justify-center items-center w-2/5">
          <img src="https://semcomp-epcc-unsa.github.io/assets/images/venue/venue-4.jpg" alt="logo" className="w-2/3 h-full rounded-sm border-gray-300 border-8 transform rotate-3 shadow-lg" />
          <img src="https://semcomp-epcc-unsa.github.io/assets/images/venue/venue-1.jpg" alt="logo" className="w-2/3 h-full rounded-sm border-gray-300 border-8 transform -rotate-3 shadow-lg" />
        </div>
      </div>
    </div>
  )
}