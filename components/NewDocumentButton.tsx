'use client';

import React, { useTransition } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";
import { createNewDocument } from '@/actions/actions';

function NewDocumentButton() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const handleClick = () => {
    startTransition(async () => {
      try {
        const { docId } = await createNewDocument();
        console.log('New document created with ID:', docId);
        router.push(`/doc/${docId}`);
      } catch (error) {
        console.error('Error creating new document:', error);
        // TODO: Show error message to user
      }
    });
  };

  return (
    <Button onClick={handleClick} className="w-full" disabled={isPending}>
      <PlusIcon className="mr-2 h-4 w-4" />
      {isPending ? 'Creating...' : 'New Document'}
    </Button>
  );
}

export default NewDocumentButton;