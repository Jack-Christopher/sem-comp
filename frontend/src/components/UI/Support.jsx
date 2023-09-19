import { useEffect, useState } from "react"

export default function Support() {
  const [sponsors, setSponsors] = useState([]);

  useEffect(() => {
    fetch(process.env.REACT_APP_BACKEND_URL + '/sponsor/get')
      .then(res => res.json())
      .then(data => {
        console.log('saving data', data);
        setSponsors(data)
      })
      .catch(err => console.log(err));
  }, []);

  

  return (
    <div className="flex flex-col justify-center items-center bg-white py-8">
      <h1 className="text-2xl md:text-4xl font-bold text-center mb-6">
        Con el apoyo de:
      </h1>
      <div className="flex flex-row justify-center items-center px-32 flex-wrap">
        {sponsors.map((item) => (
          <div key={item.name}>
            <a href={item.websiteUrl} target="_blank" rel="noreferrer"
              className="w-1/6 h-full rounded-sm border-white border-3 shadow-lg p-4" 
            >
              <img 
                src={item.photoUrl} alt={item.name} className="h-16 px-3"
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}