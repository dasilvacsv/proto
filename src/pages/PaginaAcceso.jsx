import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import LayoutAuth from "@/layouts/LayoutAuth";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { useForm } from "react-hook-form";

function PaginaAcceso() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signin, errors: loginErrors } = useAuth();

  const onSubmit = handleSubmit(async (data) => {
    const user = await signin(data);
    if (user) {
      window.location.href = 'http://localhost:5173/';
    }
  });

  return (
    <>
      <LayoutAuth>
      {loginErrors &&
          loginErrors.map((err) => (
            <p
              className="text-red-900 font-sans font-bold text-center space"
            >
              {err}
            </p>
          ))}
        <div className="text-center space-y-1">
          <h1 className="text-4xl font-bold">Acceso</h1>
          <p className="text-gray-500 dark:text-gray-400">
            Por favor, autentíquese utilizando tus credenciales
          </p>
        </div>
        <form className="space-y-5" onSubmit={onSubmit}>
          <div className="space-y-2">
            <Label htmlFor="email">
              Correo Electrónico
            </Label>
            <Input
              className="input-field"
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="Por favor, ingrese su correo electrónico"
              {...register("email", {
                required: true,
              })}
            />
            {errors.email && <p className="text-red-500">El correo electrónico es requerido</p>}
          </div>
          <div className="space-y-2">
            <div className="flex justify-between">
              <Label htmlFor="password">
                Contraseña
              </Label>
              {/* Componente de olvidaste contraseña */}
              {/* <Link 
                to="#"
                className="font-medium text-sm text-indigo-600 hover:text-indigo-500"
              >
                Forgot your password?
              </Link> */}
            </div>
            <Input
              className="input-field"
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              placeholder="Por favor, ingrese su contraseña"
              {...register("password", {
                required: true,
              })}br
            />
            {errors.password && (
            <p className="text-red-500">La contraseña es requerida</p>
          )}

          </div>
          <Button className="w-full btn-primary" type="submit">
            Acceder
          </Button>
        </form>
        <div className="text-center text-sm">
          <p>¿No se encuentra usted registrado? </p>
          <Link
            to="/registro"
            className="font-medium text-indigo-600 hover:text-indigo-500"
          >
            Registrarse en la aplicación
          </Link>
        </div>
      </LayoutAuth>
    </>
  );
}

export default PaginaAcceso;
