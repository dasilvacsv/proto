import React, { useEffect } from 'react'; 
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import LayoutAdmin from "@/layouts/LayoutAdmin";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import useAuthStore from '@/store/authStore'; 
import { Card } from "@/components/ui/card";


function PaginaRegistro() {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors: formErrors } } = useForm();

  const { signup, errors: signupErrors, clearErrors } = useAuthStore(state => ({
    signup: state.signup,
    errors: state.errors,
    clearErrors: state.clearErrors
  }));

  useEffect(() => {
    if (signupErrors && signupErrors.length > 0) {
      const timer = setTimeout(() => {
        clearErrors();
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [signupErrors, clearErrors]);

  const onSubmit = handleSubmit(async (data) => {
    const result = await signup(data);
    if (result === null) { 
      navigate("/acceso"); 
    }
  });

  return (
    <>
      <LayoutAdmin>
      <div className="flex flex-1 items-center justify-center p-4">
        <Card className="max-w-md w-full space-y-2 p-8">
        <h1 className="text-center font-semibold">Bienvenido a la Aplicación Web del Complejo Industrial Fábrica de Fábricas Hugo Chávez Frías</h1>

          <div className="flex justify-center items-center">
            <img
              src="/ff.png"
              className="w-24 transform transition duration-300 ease-in-out hover:scale-110"
              alt="Logo"
            />
            <img
              src="/cvg.png"
              className="w-24 transform transition duration-300 ease-in-out hover:scale-110"
              alt="Logo"
            />
          </div>
          
        {signupErrors && signupErrors.map((err, index) => (
          <p key={index} className="text-red-900 font-sans font-bold text-center">
            {err}
          </p>
        ))}
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold">Registro</h1>
          <p className="text-gray-500 dark:text-gray-400">
            Por favor, regístrese para acceder a la Aplicación
          </p>
        </div>
        <form className="space-y-5" onSubmit={onSubmit}>
          <div className="space-y-1">
            <Label htmlFor="username">Nombre</Label>
            <Input
              className="input-field"
              id="nombre"
              name="nombre"
              type="text"
              placeholder="Por favor, indique su nombre"
              {...register("username", { required: true })}
            />
            {formErrors.username && <p className="text-red-500">El nombre es requerido</p>}
          </div>
          <div className="space-y-1">
            <Label htmlFor="email">Correo Electrónico</Label>
            <Input
              className="input-field"
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="Por favor, indique su email"
              {...register("email", { required: true })}
            />
            {formErrors.email && <p className="text-red-500">El correo electrónico es requerido</p>}
          </div>
          <div className="space-y-1">
            <div className="flex justify-between">
              <Label htmlFor="password">Contraseña</Label>
            </div>
            <Input
              className="input-field"
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              placeholder="Por favor, indique una contraseña segura"
              {...register("password", { required: true })}
            />
            {formErrors.password && <p className="text-red-500">La contraseña es requerida</p>}
          </div>
          <Button className="w-full btn-primary" type="submit">
            Registrarse
          </Button>
        </form>
        <div className="text-center text-sm">
          <p>¿Se encuentra usted registrado? </p>
          <Link to="/acceso" className="font-medium text-indigo-600 hover:text-indigo-500">
            Acceder a la Aplicación
          </Link>
        </div>

        </Card>
      </div>
      </LayoutAdmin>
    </>
  );
}

export default PaginaRegistro;


