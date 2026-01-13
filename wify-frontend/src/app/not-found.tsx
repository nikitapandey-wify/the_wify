'use client';

import { useRouter } from 'next/navigation';

import { Button } from '@/shared/components/ui/button';

function NotFoundPage() {
 const router = useRouter();

 return (
  <main className="flex h-screen flex-col items-center justify-center px-4 py-8 text-center">
   <h1 className="mb-2 text-xl font-semibold text-gray-900">Page not found</h1>
   <p className="text-sm text-gray-600">
    {`Sorry, the page you are looking for doesn't exist, or has been moved.`}
   </p>
   <Button
    onClick={() => router.back()}
    className="mt-4"
   >
    Go back
   </Button>
  </main>
 );
}

export default NotFoundPage;