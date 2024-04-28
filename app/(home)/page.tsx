import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import Header from "../_components/header";
import { db } from "../_lib/prisma";
import BarbershopItem from "./_components/barbershop-item";
import Search from "./_components/search";
import BookingItem from "./booking-item";

export default async function Home() {
  //chamar prisma e pegar barbearias
  const barbershops = await db.barbershop.findMany({});

  return (
    <div>
      <Header />

      <div className="px-5 pt-5">
        <h2 className="text-xl font-bold">Olá, Roberto</h2>
        <p className="capitalize text-sm">
          {format(new Date(), "EEEE',' dd 'de' MMMM", {
            locale: ptBR,
          })}
        </p>
      </div>

      <div className="px-2 mt-4">
        <Search />
      </div>

      <div className="px-6 mt-6">
        <h2 className="text-xs mb-3 uppercase text-gray-400">Agendamentos</h2>
        <BookingItem />
      </div>

      <div className="mt-4">
        <h2 className="px-5 text-xs mb-3 uppercase text-gray-400 font-bold">Recomendados</h2>

        <div className="flex gap-4 overflow-x-auto [&::-webkit-scrollbar]:hidden">
          {barbershops.map((barbershop) => (
            <BarbershopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>
      </div>
    </div>
  );
}
