import DataObjectOutlinedIcon from '@mui/icons-material/DataObjectOutlined';
import TuneIcon from '@mui/icons-material/Tune';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import NumbersIcon from '@mui/icons-material/Numbers';
import DateRangeIcon from '@mui/icons-material/DateRange';
import GroupsIcon from '@mui/icons-material/Groups';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver';
import Diversity2Icon from '@mui/icons-material/Diversity2';
import LinkIcon from '@mui/icons-material/Link';
import ChangeCircleOutlinedIcon from '@mui/icons-material/ChangeCircleOutlined';

import { useState } from 'react';
import { Alert, Snackbar } from '@mui/material';
import SpeakerForm from './SpeakerForm';
import OrganizerForm from './OrganizerForm';
import SponsorForm from './SponsorForm';

async function updateSemCompData(
  year, editionNumber, startDate, endDate, numberOfAttendees, 
  numberOfDays, numberOfPresentations, numberOfSocialActivities, CPContestRulesUrl
) {
  const response = await fetch(process.env.REACT_APP_BACKEND_URL + "/semcomp/update", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      year, editionNumber, startDate, endDate, numberOfAttendees, 
      numberOfDays, numberOfPresentations, numberOfSocialActivities, CPContestRulesUrl
    })
  });

  const data = await response.json();
  data.status = response.status;

  console.log('data', data);

  return data;
}

export default function SemCompForm() {
  const [year, setYear] = useState(new Date().getFullYear());
  const [editionNumber, setEditionNumber] = useState(0);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [numberOfAttendees, setNumberOfAttendees] = useState(0);
  const [numberOfDays, setNumberOfDays] = useState(0);
  const [numberOfPresentations, setNumberOfPresentations] = useState(0);
  const [numberOfSocialActivities, setNumberOfSocialActivities] = useState(0);
  const [CPContestRulesUrl, setCPContestRulesUrl] = useState('');
  
  const [notification, setNotification] = useState({
    open: false,
    status: 0,
    message: "",
  });

  const closeNotification = () => {
    setNotification({
      open: false,
      status: 0,
      message: "",
    });
  }

  return (
    <div class="py-10 bg-gray-100 bg-opacity-50 h-screen">
      <div class="mx-auto container max-w-2xl md:w-3/4 shadow-md">
        <div class="bg-gray-100 p-4 border-t-2 bg-opacity-5 border-[#003C84] rounded-t">
          <div class="max-w-sm mx-auto md:w-full md:mx-0">
            <div class="inline-flex items-center space-x-4">
              <DataObjectOutlinedIcon />

              <h1 class="text-gray-600">Datos de la Semana de la Computación</h1>
            </div>
          </div>
        </div>

        <div class="bg-white space-y-6">

        <div class="md:inline-flex  space-y-4 md:space-y-0  w-full p-4 text-gray-500 items-center">
          <h2 class="md:w-1/3 mx-auto max-w-sm">Datos generales</h2>
          <div class="md:w-2/3 mx-auto max-w-sm space-y-5">
            <div>
              <label class="text-sm text-gray-400">Año</label>
              <div class="w-full inline-flex border">
                <div class="w-1/12 pt-2 bg-gray-100">
                  <CalendarMonthIcon />
                </div>
                <input
                  type="text"
                  class="w-11/12 focus:outline-none focus:text-gray-600 p-2"
                  placeholder={new Date().getFullYear()}
                  disabled
                  onChange={(e) => setYear(e.target.value)}
                />
              </div>
            </div>
            <div>
              <label class="text-sm text-gray-400">Edición</label>
              <div class="w-full inline-flex border">
                <div class="pt-2 w-1/12 bg-gray-100">
                  <NumbersIcon />
                </div>
                <input
                  type="number"
                  class="w-11/12 focus:outline-none focus:text-gray-600 p-2"
                  placeholder="Número de edición"
                  onChange={(e) => setEditionNumber(e.target.value)}
                />
              </div>
            </div>
            <div>
              <label class="text-sm text-gray-400">Fecha de inicio</label>
              <div class="w-full inline-flex border">
                <div class="pt-2 w-1/12 bg-gray-100">
                  <DateRangeIcon />
                </div>
                <input
                  type="date"
                  class="w-11/12 focus:outline-none focus:text-gray-600 p-2"
                  placeholder="Fecha de inicio"
                  onChange={(e) => setStartDate(e.target.value)}
                />
              </div>
            </div>
            <div>
              <label class="text-sm text-gray-400">Fecha de fin</label>
              <div class="w-full inline-flex border">
                <div class="pt-2 w-1/12 bg-gray-100">
                  <DateRangeIcon />
                </div>
                <input
                  type="date"
                  class="w-11/12 focus:outline-none focus:text-gray-600 p-2"
                  placeholder="Fecha de fin"
                  onChange={(e) => setEndDate(e.target.value)}
                />
              </div>
            </div>
            <div>
              <label class="text-sm text-gray-400">Número de participantes</label>
              <div class="w-full inline-flex border">
                <div class="pt-2 w-1/12 bg-gray-100">
                  <GroupsIcon />
                </div>
                <input
                  type="number"
                  class="w-11/12 focus:outline-none focus:text-gray-600 p-2"
                  placeholder="Número de participantes"
                  onChange={(e) => setNumberOfAttendees(e.target.value)}
                />
              </div>
            </div>
            <div>
              <label class="text-sm text-gray-400">Número de días</label>
              <div class="w-full inline-flex border">
                <div class="pt-2 w-1/12 bg-gray-100">
                  <CalendarTodayIcon />
                </div>
                <input
                  type="number"
                  class="w-11/12 focus:outline-none focus:text-gray-600 p-2"
                  placeholder="Número de días"
                  onChange={(e) => setNumberOfDays(e.target.value)}
                />
              </div>
            </div>
            <div>
              <label class="text-sm text-gray-400">Número de presentaciones</label>
              <div class="w-full inline-flex border">
                <div class="pt-2 w-1/12 bg-gray-100">
                  <RecordVoiceOverIcon />
                </div>
                <input
                  type="number"
                  class="w-11/12 focus:outline-none focus:text-gray-600 p-2"
                  placeholder="Número de presentaciones"
                  onChange={(e) => setNumberOfPresentations(e.target.value)}
                />
              </div>
            </div>
            <div>
              <label class="text-sm text-gray-400">Número de actividades sociales</label>
              <div class="w-full inline-flex border">
                <div class="pt-2 w-1/12 bg-gray-100">
                  <Diversity2Icon />
                </div>
                <input
                  type="number"
                  class="w-11/12 focus:outline-none focus:text-gray-600 p-2"
                  placeholder="Número de actividades sociales"
                  onChange={(e) => setNumberOfSocialActivities(e.target.value)}
                />
              </div>
            </div>
            <div>
              <label class="text-sm text-gray-400">Bases del concurso de Programación Competitiva</label>
              <div class="w-full inline-flex border">
                <div class="pt-2 w-1/12 bg-gray-100">
                  <LinkIcon />
                </div>
                <input
                  type="text"
                  class="w-11/12 focus:outline-none focus:text-gray-600 p-2"
                  placeholder="Enlace al documento"
                  onChange={(e) => setCPContestRulesUrl(e.target.value)}
                />
              </div>
            </div>

            <div class="text-right"> 
              <button type="submit"
                class="bg-[#003C84] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md"
                onClick={(e) => {
                  e.preventDefault();
                  updateSemCompData(
                    year, editionNumber, startDate, endDate, numberOfAttendees, 
                    numberOfDays, numberOfPresentations, numberOfSocialActivities, CPContestRulesUrl
                  )
                  .then((data) => {
                    console.log(data);
                    setNotification({
                      open: true,
                      status: data.status,
                      message: data.message,
                    });
                  })
                }}
              >
                <ChangeCircleOutlinedIcon />
                <span class="ml-2">Actualizar</span>
              </button>
            </div>

          </div>
          <Snackbar open={notification.open} autoHideDuration={5000} onClose={closeNotification} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
            <Alert 
              onClose={closeNotification} 
              severity={notification.status - (notification.status % 100) === 200 ? 'success' : 'error'} 
              sx={{ width: '100%' }}
            >
              {notification.message}
            </Alert>
          </Snackbar>
        </div>

        <hr />

        <SpeakerForm 
          setNotification={setNotification}
        />

        <hr />

        <OrganizerForm 
          setNotification={setNotification}
        />

        <hr />

        <SponsorForm
          setNotification={setNotification}
        />

        <hr />
        <div class="w-full p-4 text-right text-gray-500">
          <button class="inline-flex items-center focus:outline-none mr-4">
            <svg
              fill="none"
              class="w-4 mr-2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
            Delete account
          </button>
        </div>
        </div>
      </div>
    </div>
  );
}