import { useEffect, useState } from "react";
import BasicTabs from "../common/BasicTabs";
import CustomTimeline from "./CustomTimeLine";

export default function Schedule() {
  const [schedules, setSchedules] = useState([]);

  useEffect(() => {
    fetch(process.env.REACT_APP_BACKEND_URL + '/schedule/get')
      .then(res => res.json())
      .then(res => {
        setSchedules(res);
      })
      .catch(err => console.log(err));
  }, []);


  return (
    <div className="flex flex-col justify-center items-center py-6 px-64">
      <h3 className="text-lg md:text-4xl font-bold text-center mb-6">
        Programa
      </h3>

      <BasicTabs 
        items={
          schedules.map((item) => {
            return {
              name: item.name,
              element: (
                <CustomTimeline data={item.events} />
              )
            }
          })
        }
      />
    </div>
  )
}