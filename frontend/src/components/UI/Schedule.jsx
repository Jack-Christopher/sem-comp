import BasicTabs from "../common/BasicTabs";
import CustomTimeline from "../common/CustomTimeLine";

export default function Schedule() {
  const data = [
    {
      name: "Lunes",
      events: [
        {
          time: "9:00 - 9:45",
          title: "Inauguración A Cargo del Vicerrector Académico de la UNSA",
          // description: "Because you need strength",
          photoUrl: "https://semcomp-epcc-unsa.github.io/assets/images/speakers/wilber-ramos.jpg",
        },
        {
          time: "9:45 - 10:30",
          title: " Simplificación de modelos CAD para aplicaciones XR",
          // description: "Because it's awesome!",
          photoUrl: "https://semcomp-epcc-unsa.github.io/assets/images/speakers/jan-hurtado.jpg",
        },
        {
          time: "15:00 - 18:20",
          title: "Ponencias de Egresados y estudiantes de la EPCC",
          descriptionList: [
            {
              name: "Domain-Driven Design for Microservices.",
              author: "Raúl Edgar Quispe Totocayo"
            },
            {
              name: "Automatización de Procesos analíticos y el uso de MLOps.",
              author: "Felix Oliver Sumari Huayta"
            },          
            {
              name: "Open Source como ideología en el desarrollo.",
              author: "Christofer Chavez Carazas"
            }
          ]
        },
      ]
    },
    {
      name: "Martes",
      events: [
        {
          time: "9:00 - 9:45",
          title: "Inauguración A Cargo del Vicerrector Académico de la UNSA",
          description: "Because you need strength",
        },
        {
          time: "10:00 am",
          title: "Code",
          description: "Because it's awesome!",
        },
        {
          time: "12:00 pm",
          title: "Sleep",
          description: "Because you need rest",
        },
      ]
    },
    {
      name: "Miercoles",
      events: [
      ]
    }
  ];
  return (
    <div className="flex flex-col justify-center items-center py-6 px-64">
      <h3 className="text-lg md:text-4xl font-bold text-center mb-6">
        Programa
      </h3>

      <BasicTabs 
        items={
          data.map((item) => {
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