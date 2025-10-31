import { Info } from "../components/Info";
import { Card } from "../components/Card";

import { Link } from "react-router";

const planes = [
  {
    title: "📘 Préstamo Educativo Tradicional",
    description:
      "Ideal para financiar tu matrícula universitaria con tasas preferenciales y plazos de hasta 60 meses. Perfecto si buscas estabilidad y pagos fijos.",
    img: "https://img.freepik.com/vector-gratis/libros-prestamos-dinero-becas_603843-826.jpg",
    className: "",
  },
  {
    title: "💼 Préstamo para Material Académico",
    description:
      "Financia tus libros, equipos tecnológicos o herramientas de estudio con desembolsos rápidos y flexibles.",
      img: "https://img.freepik.com/vector-gratis/libros-prestamos-dinero-becas_603843-826.jpg",
    className: "",
  },
  {
    title: "🕓 Préstamo a Corto Plazo",
    description:
      "Cubre gastos inmediatos como inscripciones, uniformes o certificaciones con plazos menores a 12 meses y trámites rápidos.",
      img: "https://img.freepik.com/vector-gratis/libros-prestamos-dinero-becas_603843-826.jpg",
    className: "",
  },
  {
    title: "🧩 Préstamo Integral",
    description:
      "Combina matrícula, manutención y transporte en un solo crédito. Ideal para quienes estudian lejos de casa o a tiempo completo.",
      img: "https://img.freepik.com/vector-gratis/libros-prestamos-dinero-becas_603843-826.jpg",
    className: "",
  },
  {
    title: "🌍 Préstamo para Estudios en el Exterior",
    description:
      "Diseñado para estudiantes que desean cursar programas fuera del país. Incluye opciones de periodo de gracia mientras estudias.",
      img: "https://img.freepik.com/vector-gratis/libros-prestamos-dinero-becas_603843-826.jpg",
    className: "",
  },
];

import { useEffect, useMemo, useState } from "react";

export function Main() {
  const [lista, setLista] = useState(planes);

  useEffect(() => {
  const interval = setInterval(() => {
    setLista((prevLista) => {
      const newLista = prevLista.map((plan, i) => {
        
        let newClass = plan.className.replace(" animate-fade-out-left", "").replace(" animate-fade-in-right", "");

        i === 2 ? newClass += " animate-fade-out-left" : "";
        i === 3 ? newClass += " animate-fade-in-right" : "";
        i === 1 ? newClass += " animate-slice-left" : "";
        i === 4 ? newClass += " animate-slice-right" : "";
        return { ...plan, className: newClass };
      });
      return newLista;
    });
    

    setTimeout(() => {
      setLista((prevLista) => {
        const newLista = [...prevLista];
        const primero = newLista.shift();
        newLista.forEach((plan) => { plan.className = plan.className.replace(" animate-fade-out-left", "").replace(" animate-fade-in-right", "").replace(" animate-slice-left", "").replace(" animate-slice-right", ""); });
        newLista.push(primero);
        return newLista;
      });
    }, 2000);
  }, 6000);


  return () => clearInterval(interval);
}, [ ]);

  const cards = useMemo(() => ( 
    lista.map((plan, index) => (
          <Card
          key={`${index}-${plan.title}`}
            title={plan.title}
            img={plan.img || null}
            className={`w-1/3 h-4/5 ${
              index === 2
                ? ""
                : `opacity-80 scale-70 ${
                    index === 0 || index === 4 ? "absolute translate-x-[250%] bottom-0" : ""
                  }`
            } ${plan.className}`}
          >
            {plan.description}
          </Card>
        ))
  ), [lista]);

  return (
    <>
      <div className="flex justify-around h-[60vh] gap-4 border-b-2 border-fuchsia-900 items-start">
        <img
          className="w-full h-10/12 object-cover bg-no-repeat object-top"
          src="https://sial.educatic.com.co/appsFiles/archivosminerva/imgCartelera/empresa_1/FINANCIACI.N2024.07.25.13.30.14.png"
          alt="Imagen de inicio"
        />
      </div>
      <div className="flex justify-around items-center h-32 w-full py-6 ">
        
      </div>


      <Info />
      <div className="relative w-full min-h-[90vh] h-[90vh] flex flex-1 [&>*]:cursor-default items-end justify-center">
        {cards}
      </div>
      <footer className="bg-fuchsia-900 text-white text-center px-8 py-6 mt-16 flex justify-between ">
        <span className="mr-4 hover:text-blue-400 font-semibold transition-colors duration-300 ease-in-out">
          &copy; {new Date().getFullYear()} Coopla. Todos los derechos reservados.
        </span>
        <span>
          <Link to="/Contact" className="ml-4 hover:text-blue-400 font-semibold transition-colors duration-300 ease-in-out">
            Contactanos
          </Link>
        </span>
      </footer>
    </>
  );
}
