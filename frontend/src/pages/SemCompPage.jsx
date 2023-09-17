import React, { useEffect, useState } from "react";
import PhotoCarousel from "../components/UI/Carousel";
import { setPageTitle } from '../utils/Page';
import {EventData, AboutEvent} from "../components/UI/EventData";
import Countdown from "../components/UI/Countdown";
import Speakers from "../components/UI/Speakers";
import Schedule from "../components/UI/Schedule";
import SchoolData from "../components/UI/SchoolData";
import Organizers from "../components/UI/Organizers";
import Support from "../components/UI/Support";
import Quote from "../components/UI/Quote";

export default function SemComp() {
  const [sempCompData, setSemCompData] = useState({});

  useEffect(() => {
    setPageTitle('Semana de la Computación UNSA');
    fetch(process.env.REACT_APP_BACKEND_URL + '/semcomp/getdata')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setSemCompData(data);
      });
  }, []);

  var items = [
    {
      name: "Vista del Pabellón",
      url: "https://www.unsa.edu.pe/wp-content/uploads/2020/02/computacin-878x426.png",
    },
    {
      name: "Inauguración del Pabellón",
      url: "https://www.unsa.edu.pe/wp-content/uploads/2019/12/IMG_9757.jpg",
    },
    {
      name: "Concurso de baile",
      url: "https://fips.unsa.edu.pe/cienciadelacomputacion/wp-content/uploads/sites/8/2022/11/Ganadores-en-el-Concurso-de-Baile-2022-2-1170x489.png",
    }
  ];



  return (
    <div>
      <PhotoCarousel 
        items={items} 
        interval={5000}
        startDate={new Date(sempCompData?.startDate)?.toLocaleDateString()}
        endDate={new Date(sempCompData?.endDate)?.toLocaleDateString()}
        editionNumber={sempCompData?.editionNumber}
      />
      <EventData data={sempCompData} />
      <AboutEvent />
      <Countdown date={new Date(sempCompData?.startDate)} />
      <Speakers />
      <Schedule />
      <SchoolData />
      <Organizers />
      <Quote />
      <Support />
    </div>
  );
}