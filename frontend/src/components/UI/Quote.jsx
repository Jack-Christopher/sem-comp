export default function Quote() {
  const data = [
    {
      quote: "La ciencia de la computación es la única disciplina en la que todos los problemas son aún insolubles y todas las soluciones son triviales.",
      author: "David Wheeler",
    },
    {
      quote: "La ciencia de la computación es una disciplina que resuelve problemas que no existirían sin la disciplina en sí.",
      author: "David Parnas",
    },
    {
      quote: "La informática se trata de automatizar tareas que no deseas hacer. La ciencia es acerca de automatizar tareas que no puedes hacer.",
      author: "Larry Page",
    },
  ];

  const item = data[Math.floor(Math.random() * data.length)];

  return (
    <div className="justify-center items-center bg-[#111827] py-8 px-1/5">
      <figure class="max-w-screen-md mx-auto text-center">
          <svg class="w-10 h-10 mx-auto mb-3 text-gray-400 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
              <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z"/>
          </svg>
          <blockquote>
              <p class="text-2xl italic font-medium text-white">"{item.quote}"</p>
          </blockquote>
          <figcaption class="flex items-center justify-center mt-6 space-x-3">
              <img class="w-6 h-6 rounded-full" src="https://static.vecteezy.com/system/resources/previews/002/743/514/non_2x/green-check-mark-icon-in-a-circle-free-vector.jpg" alt="profile picture" />
              <div class="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                  <cite class="pr-3 font-medium text-white">{item.author}</cite>
                  {item.metadata && (
                    <cite class="pl-3 text-sm text-white dark:text-gray-400">{item?.metadata}</cite>
                  )}
              </div>
          </figcaption>
      </figure>

    </div>
  )
}