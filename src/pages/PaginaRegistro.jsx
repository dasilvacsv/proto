import React, { useEffect } from 'react'; 
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import LayoutAuth from "@/layouts/LayoutAuth";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import useAuthStore from '@/store/authStore'; 

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
      <LayoutAuth>
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
      </LayoutAuth>
    </>
  );
}

export default PaginaRegistro;


