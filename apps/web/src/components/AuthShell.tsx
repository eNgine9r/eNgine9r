'use client';

import { useEffect, useMemo, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { Sidebar } from '@/components/Sidebar';
import { getAuthToken } from '@/lib/auth';

const PUBLIC_ROUTES = ['/login'];

export function AuthShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [isReady, setIsReady] = useState(false);
  const isPublicRoute = useMemo(() => PUBLIC_ROUTES.includes(pathname), [pathname]);

  useEffect(() => {
    const token = getAuthToken();

    if (!token && !isPublicRoute) {
      router.replace('/login');
      setIsReady(true);
      return;
    }

    if (token && isPublicRoute) {
      router.replace('/');
      setIsReady(true);
      return;
    }

    setIsReady(true);
  }, [isPublicRoute, router]);

  if (!isReady) {
    return (
      <div className="flex min-h-screen items-center justify-center text-sm text-slate-500">
        Loading…
      </div>
    );
  }

  if (isPublicRoute) {
    return <div className="min-h-screen bg-slate-50">{children}</div>;
  }

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex w-full flex-1 flex-col">{children}</div>
    </div>
  );
}
