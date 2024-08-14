import React from 'react';
import Link from 'next/link';
import NewDocumentButton from './NewDocumentButton';
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

function Sidebar() {
  const SidebarContent = () => (
    <div className="p-2 md:p-5">
      <h2 className="text-2xl font-bold mb-4">Sidebar</h2>
      <ul>
        <li className="mb-2">
          <Link href="/" className="hover:text-gray-600">
            Home
          </Link>
        </li>
        <li className="mb-2">
          <Link href="/dashboard" className="hover:text-gray-600">
            Dashboard
          </Link>
        </li>
        <li className="mb-2">
          <Link href="/settings" className="hover:text-gray-600">
            Settings
          </Link>
        </li>
        <li className="mb-2">
          <Link href="/documents" className="hover:text-gray-600">
            Documents
          </Link>
        </li>
      </ul>
      <NewDocumentButton />
    </div>
  );

  return (
    <>
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon">
              <Menu className="h-4 w-4" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[300px] p-0">
            <nav className="bg-gray-200 text-gray-800 h-full">
              <SidebarContent />
            </nav>
          </SheetContent>
        </Sheet>
      </div>
      <nav className="hidden md:block w-64 bg-gray-200 text-gray-800 h-full">
        <SidebarContent />
      </nav>
    </>
  );
}

export default Sidebar;