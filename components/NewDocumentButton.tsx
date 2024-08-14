'use client';

import React from 'react';
import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";

function NewDocumentButton() {
  const handleClick = () => {
    // TODO: Implement new document creation logic
    console.log('New document button clicked');
  };

  return (
    <Button onClick={handleClick} className="w-full">
      <PlusIcon className="mr-2 h-4 w-4" /> New Document
    </Button>
  );
}

export default NewDocumentButton;