"use client";

import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

const Header = () => {
  const handleLoginClick = async () =>{
    await signIn();
  }
  return (
    <header>
      <Card>
        <CardContent className="p-5 justify-between items-center flex flex-row">
          <Link href="/">
            <Image src="/logo.png" alt="FSW Barber" height={18} width={120} />
          </Link>
          <Sheet>
            <SheetTrigger asChild>
              <Button onClick={handleLoginClick}>Login</Button>
            </SheetTrigger>

            <SheetContent className="p-0">
              {/* Conteúdo da planilha */}
            </SheetContent>
          </Sheet>
        </CardContent>
      </Card>
    </header>
  );
};

export default Header;
