export default function Support() {
  let data = [
    {
      websiteUrl:"https://www.linkedin.com/company/paulonia/?originalSubdomain=pe",
      photoUrl:"https://semcomp-epcc-unsa.github.io/assets/images/sponsors/paulonia.png",
    },
    {
      websiteUrl:"https://www.ravn.co/",
      photoUrl:"https://semcomp-epcc-unsa.github.io/assets/images/sponsors/ravn.png",
    }
  ];


  data = data.concat(data, data, data);


  return (
    <div className="flex flex-col justify-center items-center bg-white py-8">
      <h1 className="text-2xl md:text-4xl font-bold text-center mb-6">
        Con el apoyo de:
      </h1>
      <div className="flex flex-row justify-center items-center px-32 flex-wrap">
        {data.map((item) => (
          <a href={item.websiteUrl} target="_blank"
            className="w-1/6 h-full rounded-sm border-white border-3 shadow-lg p-4" 
          >
            <img 
              src={item.photoUrl} alt="logo" 
            />
          </a>
        ))}
      </div>
    </div>
  )
}