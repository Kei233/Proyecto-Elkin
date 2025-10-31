import { Button } from "./ui/Button";

export function Info({className}) {
  return (
    <div className={`flex flex-1 items-center justify-center flex-col text-center p-8 gap-4 [&>p]:text-md [&>p]:text-gray-600 self-center space-y-4 mt-14 [&>p]:text-2xl w-1/2 ${className}`}>
      <h2 className="font-bold text-3xl">¡Saca tu credito con nosotros!</h2>
      <p>En Coopla puedes sacar un prestamo estudiantil en base a tus posibilidades y necesidades en minutos. Dale click al boton de solicitar un credito para más información.</p>
      <Button>Solicitar Credito</Button>
    </div>
  )
}
