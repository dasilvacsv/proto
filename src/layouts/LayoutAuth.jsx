import React, { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";

const images = ["/ff2.jpg", "/ff3.jpg", "/ff4.jpg", "/ff1.jpg"];

function LayoutAuth({ children }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        setFade(true);
      }, 500);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-gray-100">
      <div className="relative lg:flex-1 hidden lg:flex items-center justify-center">
        {images.map((image, index) => (
          <div
            key={image}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
              currentImageIndex === index && fade ? "opacity-100" : "opacity-0"
            }`}
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}
      </div>
      {/* Login Div */}
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
          {children}
        </Card>
      </div>
    </div>
  );
}

export default LayoutAuth;
