import { db } from "@/app/_lib/prisma";
import BarbershopInfo from "./_components/barbershop-info";
import ServiceItem from "./_components/service-item";

interface BarbershopDetailsPageProps {
    params: {
        id?: string;
    };
}

const BarbershopDetailsPage = async ({ params }: BarbershopDetailsPageProps) => {
    if (!params.id) {
        // TODO: redirecionar para home page
        return null;
    }

    const barbershop = await db.barbershop.findUnique({
        where: {
            id: params.id,
        },
        include: {
            services: true // Certifique-se de que a relação se chama 'services'
        }
    });

    if (!barbershop) {
        // TODO: redirecionar para home page
        return null;
    }
    
    return (
        <div>
            <BarbershopInfo barbershop={barbershop} />
            <div className="px-5 flex flex-col gap-4 p-6">
            <h2 className="text-bold mb-1 uppercase">Serviços</h2>

            
            {barbershop.services.map(service => (
                <ServiceItem key={service.id} service={service} />
                
            ))}
            </div>
        </div>
    );
};

export default BarbershopDetailsPage;
