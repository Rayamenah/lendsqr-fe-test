"use client"
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function SomePage() {
  const router = useRouter();

  useEffect(() => {
    router.push('/login');
  }, [router]);

  return (
    <div>
      <h1>Redirecting...</h1>
    </div>
  );
}
