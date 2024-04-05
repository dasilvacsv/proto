import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import LayoutAuth from "@/layouts/LayoutAuth";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import useAuthStore from '@/store/authStore'; 
import React, { useEffect } from "react";

function PaginaAcceso() {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors: formErrors } } = useForm();
  const { signin, errors: loginErrors, clearErrors } = useAuthStore(state => ({
    signin: state.signin,
    errors: state.errors,
    clearErrors: state.clearErrors
  }));

  useEffect(() => {
    if (loginErrors && loginErrors.length > 0) {
      const timer = setTimeout(() => {
        clearErrors();
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [loginErrors, clearErrors]);

  const onSubmit = handleSubmit(async (data) => {
    const user = await signin(data);
    if (user) {
      navigate('/'); 
    }
  });

  return (
    <>
      <LayoutAuth>
        {loginErrors &&
          loginErrors.map((err, index) => ( 
            <p key={index} className="text-red-900 font-sans font-bold text-center">
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
            <Label htmlFor="email">Correo Electrónico</Label>
            <Input
              className="input-field"
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="Por favor, indique su correo electrónico"
              {...register("email", { required: true })}
            />
            {formErrors.email && <p className="text-red-500">El correo electrónico es requerido</p>}
          </div>
          <div className="space-y-2">
            <div className="flex justify-between">
              <Label htmlFor="password">Contraseña</Label>
            </div>
            <Input
              className="input-field"
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              placeholder="Por favor, indique su contraseña"
              {...register("password", { required: true })}
            />
            {formErrors.password && <p className="text-red-500">La contraseña es requerida</p>}
          </div>
          <Button className="w-full btn-primary" type="submit">Acceder</Button>
        </form>
        
      </LayoutAuth>
    </>
  );
}

export default PaginaAcceso;
