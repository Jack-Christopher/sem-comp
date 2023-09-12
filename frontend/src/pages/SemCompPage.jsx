import React, { useEffect } from "react";
import PhotoCarousel from "../components/UI/Carousel";
import { setPageTitle } from '../utils/Page';
import {EventData, AboutEvent} from "../components/UI/EventData";
import Countdown from "../components/UI/Countdown";
import Speakers from "../components/UI/Speakers";

export default function SemComp() {

  useEffect(() => {
    setPageTitle('Semana de la Computación UNSA');
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

  var startDate = new Date().toLocaleDateString();
  var endDate = new Date().toLocaleDateString();

  return (
    <div>
      <PhotoCarousel 
        items={items} 
        interval={5000}
        startDate={startDate}
        endDate={endDate}
      />
      <EventData />
      <AboutEvent />
      <Countdown date={new Date(2023,8, 20, 0, 0, 0, 0)} />
      <Speakers />
    </div>
  );
}