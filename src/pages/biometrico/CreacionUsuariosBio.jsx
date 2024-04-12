import LayoutAdmin from "@/layouts/LayoutAdmin";
import { useLocation } from "react-router-dom";
import UsuarioBioForm from "@/components/biometrico/UsuarioBioForm";

function DatosUniformes() {
  const location = useLocation();

 
  return (
    <>
      <LayoutAdmin>
        <div className="py-20">
          <UsuarioBioForm/>
        </div>
      </LayoutAdmin>
    </>
  );
}

export default DatosUniformes;
