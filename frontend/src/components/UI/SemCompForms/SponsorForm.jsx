
import BadgeRoundedIcon from '@mui/icons-material/BadgeRounded';
import LinkIcon from '@mui/icons-material/Link';
import ImageIcon from '@mui/icons-material/Image';
import AddModeratorIcon from '@mui/icons-material/AddModerator';

import { useState } from 'react';

async function addSponsor(
  name, websiteUrl, photoUrl
) {
  console.log(JSON.stringify({
    name, websiteUrl, photoUrl
  }));

  const response = await fetch(process.env.REACT_APP_BACKEND_URL + "/sponsor/add", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      name, websiteUrl, photoUrl
    })
  });

  const data = await response.json();
  data.status = response.status;

  console.log('data', data);

  return data;
}

export default function SponsorForm({setNotification}) {
  const [name, setName] = useState('');
  const [websiteUrl, setWebsiteUrl] = useState('');
  const [photoUrl, setPhotoUrl] = useState('');

  return (
    <div class="md:inline-flex  space-y-4 md:space-y-0  w-full p-4 text-gray-500 items-center">
      <h2 class="md:w-1/3 mx-auto max-w-sm">Sponsors</h2>
      <div class="md:w-2/3 mx-auto max-w-sm space-y-5">
        <div>
          <label class="text-sm text-gray-400">Nombre del patrocinador</label>
          <div class="w-full inline-flex border">
            <div class="w-1/12 pt-2 bg-gray-100">
              <BadgeRoundedIcon />
            </div>
            <input
              type="text"
              class="w-11/12 focus:outline-none focus:text-gray-600 p-2"
              placeholder="Nombre del patrocinador"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
        </div>
        <div>
          <label class="text-sm text-gray-400">URL del sitio web</label>
          <div class="w-full inline-flex border">
            <div class="w-1/12 pt-2 bg-gray-100">
              <LinkIcon />
            </div>
            <input
              type="text"
              class="w-11/12 focus:outline-none focus:text-gray-600 p-2"
              placeholder="URL del sitio web"
              onChange={(e) => {
                setWebsiteUrl(e.target.value);
              }}
            />
          </div>
        </div>
        <div>
          <label class="text-sm text-gray-400">URL del logo</label>
          <div class="w-full inline-flex border">
            <div class="w-1/12 pt-2 bg-gray-100">
              <ImageIcon />
            </div>
            <input
              type="text"
              class="w-11/12 focus:outline-none focus:text-gray-600 p-2"
              placeholder="URL del logo"
              onChange={(e) => {
                setPhotoUrl(e.target.value);
              }}
            />
          </div>
        </div>
        
        <div class="text-right"> 
          <button type="submit"
            class="bg-[#003C84] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md"
            onClick={(e) => {
              e.preventDefault();
              addSponsor(
                name, websiteUrl, photoUrl
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
            <AddModeratorIcon />
            <span class="ml-2">Agregar Sponsor</span>
          </button>
        </div>
      </div>
    </div>
  );
}