import LayoutAdmin from "@/layouts/LayoutAdmin";
import Users from "@/components/admin/Users";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import CardTicket from "@/components/CardTicket";
import { Link } from "react-router-dom";
import Estado from "../../components/ubicacion/Estado"
import Municipio from "../../components/ubicacion/Municipio"

function EstadoCrud() {
  return (
      <LayoutAdmin>
    <div>
        
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-y-4 mb-10">
      <div>
      <div className="flex items-center gap-2 text-black text-3xl">
      <Link to="/" className="hover:underline">
              Tablero
            </Link>
            <span>-</span>
            <span className="hover:underline">Página Principal</span>

      </div>
       
        </div>
          
          <div className="flex items-center gap-2 text-3xl">
            <RiArrowLeftSLine className="hover:cursor-pointer hover:text-white transition-colors" />
            <RiArrowRightSLine className="hover:cursor-pointer hover:text-white transition-colors" />
          </div>
        </div>
        {/* Card Ticket */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      <CardTicket
          ticket="inProcess"
          totalTickets="297"
          text="Total de Empleados"
        />
        <CardTicket
          ticket="close"
          totalTickets="264"
          text="Asistentes"
        />
        <CardTicket
          ticket="total"
          totalTickets="33"
          text="Inasistentes"
        />
      </div>
      <div>
        <h1 className="text-2xl text-gray-700 my-10">Registros más recientes</h1>
      </div>
      {/* Fondo Tabla */}
      <div className="bg-blue-50 p-8 rounded-xl">
        <div className="hidden md:grid grid-cols-1 md:grid-cols-5 gap-4 mb-10 p-4">
          <h5 className="text-gray-700">Cédula</h5>
          <h5 className="text-gray-700">Nombres</h5>
          <h5 className="text-gray-700">Apellidos</h5>
          <h5 className="text-gray-700">Fecha de Nacimiento</h5>
          <h5 className="text-gray-700">Sexo</h5>
        </div>
        <Municipio />
      </div>
      </div>
        
      </LayoutAdmin>

  );
}

export default EstadoCrud;
