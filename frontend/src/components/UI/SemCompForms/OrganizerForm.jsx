
import BadgeRoundedIcon from '@mui/icons-material/BadgeRounded';
import LinkIcon from '@mui/icons-material/Link';
import BusinessRoundedIcon from '@mui/icons-material/BusinessRounded';
import WorkRoundedIcon from '@mui/icons-material/WorkRounded';
import FeedIcon from '@mui/icons-material/Feed';
import DescriptionIcon from '@mui/icons-material/Description';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

import { useState } from 'react';

async function addOrganizer(
  fullname, photoUrl,
  company, job,
  description, shortDescription
) {
  const response = await fetch(process.env.REACT_APP_BACKEND_URL + "/person/add", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      fullname, photoUrl,
      company, job,
      description, shortDescription,
      type: 'organizer'
    })
  });

  const data = await response.json();
  data.status = response.status;

  console.log('data', data);

  return data;
}

export default function OrganizerForm({setNotification}) {
  const [fullname, setFullname] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const [company, setCompany] = useState("");
  const [job, setJob] = useState("");
  const [description, setDescription] = useState("");
  const [shortDescription, setShortDescription] = useState("");  

  return (
    <div class="md:inline-flex  space-y-4 md:space-y-0  w-full p-4 text-gray-500 items-center">
      <h2 class="md:w-1/3 mx-auto max-w-sm">Organizadores</h2>
      <div class="md:w-2/3 mx-auto max-w-sm space-y-5">
        <div>
          <label class="text-sm text-gray-400">Nombre completo</label>
          <div class="w-full inline-flex border">
            <div class="w-1/12 pt-2 bg-gray-100">
              <BadgeRoundedIcon />
            </div>
            <input
              type="text"
              class="w-11/12 focus:outline-none focus:text-gray-600 p-2"
              placeholder="Nombre completo"
              onChange={(e) => {
                setFullname(e.target.value);
              }}
            />
          </div>
        </div>
        <div>
          <label class="text-sm text-gray-400">Foto</label>
          <div class="w-full inline-flex border">
            <div class="w-1/12 pt-2 bg-gray-100">
              <LinkIcon />
            </div>
            <input
              type="text"
              class="w-11/12 focus:outline-none focus:text-gray-600 p-2"
              placeholder="URL de la foto"
              onChange={(e) => {
                setPhotoUrl(e.target.value);
              }}
            />
          </div>
        </div>
        <div>
          <label class="text-sm text-gray-400">Empresa</label>
          <div class="w-full inline-flex border">
            <div class="w-1/12 pt-2 bg-gray-100">
              <BusinessRoundedIcon />
            </div>
            <input
              type="text"
              class="w-11/12 focus:outline-none focus:text-gray-600 p-2"
              placeholder="Empresa donde trabaja"
              onChange={(e) => {
                setCompany(e.target.value);
              }}
            />
          </div>
        </div>
        <div>
          <label class="text-sm text-gray-400">Cargo</label>
          <div class="w-full inline-flex border">
            <div class="w-1/12 pt-2 bg-gray-100">
              <WorkRoundedIcon />
            </div>
            <input
              type="text"
              class="w-11/12 focus:outline-none focus:text-gray-600 p-2"
              placeholder="Cargo que desempeña"
              onChange={(e) => {
                setJob(e.target.value);
              }}
            />
          </div>
        </div>
        <div>
          <input type="hidden" name="type" value="speaker" />
        </div>
        <div>
          <label class="text-sm text-gray-400">Descripción</label>
          <div class="w-full inline-flex border">
            <div class="w-1/12 pt-2 bg-gray-100">
              <FeedIcon />
            </div>
            <textarea
              class="w-11/12 focus:outline-none focus:text-gray-600 p-2"
              placeholder="Descripción del ponente"
              rows={6}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            />
          </div>
        </div>
        <div>
          <label class="text-sm text-gray-400">Descripción corta</label>
          <div class="w-full inline-flex border">
            <div class="w-1/12 pt-2 bg-gray-100">
              <DescriptionIcon />
            </div>
            <textarea
              class="w-11/12 focus:outline-none focus:text-gray-600 p-2"
              placeholder="Descripción corta del ponente"
              rows={3}
              onChange={(e) => {
                setShortDescription(e.target.value);
              }}
            />
          </div>
        </div>
        <div class="text-right"> 
          <button type="submit"
            class="bg-[#003C84] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md"
            onClick={(e) => {
              e.preventDefault();
              addOrganizer(
                fullname, photoUrl,
                company, job,
                description, shortDescription
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
            <PersonAddIcon />
            <span class="ml-2">Agregar Organizador</span>
          </button>
        </div>
      </div>
    </div>
  );
}