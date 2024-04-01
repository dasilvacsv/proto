import { Link } from "react-router-dom"
import { Card2 } from "@/components/ui/Card2"
import LayoutAuth from "@/layouts/LayoutAuth"

function NotFound() {
  return (
    <LayoutAuth>
    <div className='flex justify-center items-center'>
        <Card2>
        <h1 className="text-2xl ">Página no Encontrada</h1>
        <h3 className="text-2xl">404</h3>

        <Link to='/tablero' className="flex items-center gap-2 text-red-950 font-bold hover:underline text-2xl">Volver al inicio</Link>
        </Card2>
    </div>
    </LayoutAuth>
  )
}

export default NotFound