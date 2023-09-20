import { useEffect, useState } from "react";
import { setPageTitle } from "../utils/Page";
import Logo from "../components/UI/Logo";
import { Alert, Snackbar } from "@mui/material";

async function registerUser(name, lastName, email, password) {
  const response = await fetch(process.env.REACT_APP_BACKEND_URL + "/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      name: name,
      lastname: lastName,
      email: email,
      password: password,
      userType: "user"
    })
  });

  const data = await response.json();
  data.status = response.status;

  return data;
}


export default function Register() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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

  useEffect(() => {
    setPageTitle("Registrarse");
  }, []);


  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <div className="flex items-center justify-center">
          <Logo size={60} classNameName="hidden md:block" />
        </div>
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Registrarse</h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" action="#" method="POST">
          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">Nombres</label>
            </div>
            <div className="mt-2">
              <input id="name" name="name" type="text" autoComplete="name" required 
                className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-900 sm:text-sm sm:leading-6" 
                onChange={(e) => {
                  setName(e.target.value);
                  console.log('name', name);
                }}
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="lastname" className="block text-sm font-medium leading-6 text-gray-900">Apellidos</label>
            </div>
            <div className="mt-2">
              <input id="lastname" name="lastname" type="text" autoComplete="lastname" required 
                className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-900 sm:text-sm sm:leading-6" 
                onChange={(e) => {
                  setLastName(e.target.value);
                  console.log('lastname', lastName);
                }}
              />
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Correo Electrónico</label>
            </div>
            <div className="mt-2">
              <input id="email" name="email" type="email" autoComplete="email" required 
                className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-900 sm:text-sm sm:leading-6" 
                onChange={(e) => {
                  setEmail(e.target.value);
                  console.log('email', email);
                }}
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Contraseña</label>
            </div>
            <div className="mt-2">
              <input id="password" name="password" type="password" autoComplete="current-password" required 
                className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-900 sm:text-sm sm:leading-6" 
                onChange={(e) => {
                  setPassword(e.target.value);
                  console.log('password', password);
                }}
              />
            </div>
          </div>

          <div>
            <button type="submit" 
              className="flex w-full justify-center rounded-md bg-blue-900 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-900"
              onClick={(e) => {
                e.preventDefault();
                registerUser(name, lastName, email, password)
                  .then((result) => {
                  console.log('result', result);
                  setNotification({
                    open: true,
                    status: result.status,
                    message: result.message,
                  })
                });
              }}
            >
              Registrarse
            </button>
          </div>
        </form>

        <Snackbar open={notification.open} autoHideDuration={5000} onClose={closeNotification} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
          <Alert 
            onClose={closeNotification} 
            severity={notification.status === 201 ? "success" : "error"}
            sx={{ width: '100%' }}
          >
            {notification.message}
          </Alert>
        </Snackbar>

        <p className="mt-10 text-center text-sm text-gray-500">
          ¿Ya tienes una cuenta?
          <a href="/login" className="font-semibold leading-6 pl-2 text-blue-900 hover:text-blue-700">Inicia sesión</a>
        </p>
      </div>
    </div>
  );
}