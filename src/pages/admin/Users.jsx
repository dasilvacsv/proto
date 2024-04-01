import { useState, useEffect } from "react";
import { Menu, MenuItem, MenuButton } from "@szhsin/react-menu";
import { Link } from "react-router-dom";

//función fetch para consumir api método get
function UserApp() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div>
      <ul>
        {data?.map((user) => (
          <div
            key={user.id}
            /* Fondo para los usuarios */
            className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center mb-4 bg-slate-200 p-4 rounded-xl"
          >
            <div>
              <h5 className="md:hidden text-gray-700 font-bold mb-2">Nombre</h5>
              <span className="text-gray-700 text-sm">{user.name}</span>
            </div>
            <div>
              <h5 className="md:hidden text-gray-700 font-bold mb-2">Cargo</h5>
              <p className="text-gray-700 text-sm">Programador</p>
            </div>
            <div>
              <h5 className="md:hidden text-gray-700 font-bold mb-2">Estatus</h5>
              <span className="py-1 px-2 bg-green-500/10 text-green-500 rounded-lg">
                Asistente
              </span>
            </div>
            <div>
              <h5 className="md:hidden text-gray-700 font-bold mb-2">
                Fecha / Hora
              </h5>
              <span className="text-gray-700 text-sm">
                06 / 03 / 24 | 06:40 am
              </span>
            </div>
            <div>
              <h5 className="md:hidden text-gray-700 font-bold mb-2">Acciones</h5>
              <Menu
                menuButton={
                  <MenuButton className="flex text-white text-bold items-center gap-x-2 bg-blue-900 p-2 rounded-lg transition-colors hover:bg-blue-950">
                    Acciones
                  </MenuButton>
                }
                align="end"
                arrow
                arrowClassName="bg-secondary-100"
                transition
                menuClassName="bg-secondary-100 p-4"
              >
                <MenuItem className="p-0 hover:bg-transparent">
                  <Link
                    to="/perfil"
                    className="rounded-lg transition-colors text-gray-70w hover:bg-secondary-900 flex items-center gap-x-4 p-2 flex-1"
                  >
                    Ver Registro
                  </Link>
                </MenuItem>
              </Menu>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default UserApp;
