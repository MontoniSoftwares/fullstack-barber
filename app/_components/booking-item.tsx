import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";

const BookingItem = () => {
  return (
    <Card className="mt-10p">
      <CardContent className="mt-0 m p-2 mb-0 flex justify-between py-4">
        <div>
          <Badge className="bg-[#221C3D] text-primary hover:bg-[#221C3D] w-fit">Confirmado</Badge>
          <h2 className=" mt-2 font-bold">{"Corte de Cabelo"}</h2>

          <div className="flex items-center gap-2 py-2">
            <Avatar className="h-6 w-6">
              <AvatarImage src="https://utfs.io/f/0ddfbd26-a424-43a0-aaf3-c3f1dc6be6d1-1kgxo7.png" />
              <AvatarFallback>A</AvatarFallback>
            </Avatar>

            <h3 className="text-sm">{"Vintage Barber"}</h3>
          </div>
        </div>

         <div className="flex flex-col items-center justify-center px-3 border-l border-solid border-secondary">
            <p className="text-sm">Abril</p>
            <p className="text-2xl">06</p>
            <p className="text-sm">10:15</p>
        
          </div>
      </CardContent>
    </Card>
  );
};

export default BookingItem;
