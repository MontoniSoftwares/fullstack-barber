import { Button } from "@/app/_components/ui/button";
import { Card, CardContent } from "@/app/_components/ui/card";
import { Service } from "@prisma/client";
import Image from "next/image";

interface ServiceItemProps {
  service: Service;
}

const ServiceItem = ({ service }: ServiceItemProps) => {
  // Convertendo o valor Decimal para number
  const priceAsNumber: number = parseFloat(service.price.toString());

  // Formatando o preço
  const formattedPrice = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(priceAsNumber);

  // Criando um objeto novo com o campo price convertido para um número
  const serviceData = {
    id: service.id,
    barbershopId: service.barbershopId,
    name: service.name,
    description: service.description,
    price: parseFloat(service.price.toFixed(2)), // Convert Decimal to number
    imageUrl: service.imageUrl,
  };

  return (
 
    <Card>
            <CardContent className="p-3 w-full">
        <div className="flex gap-4 items-center w-full">
          <div className="relative min-w-[110px] min-h-[110px] max-h-[110px]">
            <Image
              className="rounded-lg"
              src={serviceData.imageUrl}
              fill
              style={{ objectFit: "contain" }}
              alt={serviceData.name}
            />
          </div>

          <div className="flex flex-col w-full">
            <h2 className="font-bold">{serviceData.name}</h2>
            <p className="text-sm text-gray-400">{serviceData.description}</p>

            <div className="flex items-center justify-between mt-3">
              <p className="text-primary text-sm font-bold">{formattedPrice}</p>
              <Button variant="secondary">Reservar</Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ServiceItem;