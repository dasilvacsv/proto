import React, { useState, useEffect } from "react";
import EditarPais from "./EditarPais";
import EliminarPais from "./EliminarPais";
import Example from "./PaginacionPais";

const BuscarPais = () => {
  //setear los hooks useState
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  //función para traer los datos de la API
  const URL = "https://jsonplaceholder.typicode.com/users";

  const showData = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    //console.log(data)
    setUsers(data);
  };
  //función de búsqueda
  const searcher = (e) => {
    setSearch(e.target.value);
  };
  //metodo de filtrado 1
  /*  let results = []
   if(!search)
   {
       results = users
   }else{
        results = users.filter( (dato) =>
        dato.name.toLowerCase().includes(search.toLocaleLowerCase())
    )
   } */

  //metodo de filtrado 2
  const results = !search
    ? users
    : users.filter((dato) =>
        dato.name.toLowerCase().includes(search.toLocaleLowerCase())
      );

  useEffect(() => {
    showData();
  }, []);

  //renderizamos la vista
  return (
    <div>
      <div className="w-full">
        <br />
        <input
          value={search}
          onChange={searcher}
          type="text"
          placeholder="Search"
          className="w-full text-gray-700 py-2 px-4 outline-none rounded-lg bg-secondary-100"
        />
      </div>
      <ul>
        {results.map((user) => (
          <div
            key={user.id}
            className="items-center mb-4 bg-secondary-900 p-4 rounded-xl"
          >
            <div>
              <h5 className="md:hidden text-white font-bold mb-2">Nombre</h5>
              <span className="text-gray-700">{user.name}</span>
              <EliminarPais/>
              <EditarPais />
            </div>
          </div>
        ))}
      </ul>
      <Example />
    </div>
  );
};
export default BuscarPais;
