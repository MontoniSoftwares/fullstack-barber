import { Avatar, AvatarFallback, AvatarImage } from "../_components/ui/avatar";
import { Badge } from "../_components/ui/badge";
import { Card, CardContent } from "../_components/ui/card";

const BookingItem = () => {
  return (
    <Card>
      <CardContent className="p-5 flex justify-between py-8">
        <div className="c">
          <Badge className="bg-[#221C3D] text-primary hover:bg-[#221C3D] w-fit">Confirmado</Badge>
          <h2 className="font-bold">{"Corte de Cabelo"}</h2>

          <div className="flex items-center gap-2 py-5">
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
