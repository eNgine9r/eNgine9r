'use client';

import { useEffect, useState } from 'react';
import { Sidebar } from '@/components/Sidebar';
import { getAuthToken, withBasePath } from '@/lib/auth';

const isDemoMode = process.env.NEXT_PUBLIC_DEMO_MODE === 'true';
const normalizePath = (path: string) => {
  if (!path) {
    return '/';
  }

  const trimmed = path.replace(/\/+$/, '');
  return trimmed || '/';
};

export function AuthShell({ children }: { children: React.ReactNode }) {
  const [isReady, setIsReady] = useState(false);
  const [isPublicRoute, setIsPublicRoute] = useState(false);

  useEffect(() => {
    const currentPath = normalizePath(window.location.pathname);
    const loginPath = normalizePath(withBasePath('/login'));
    const homePath = withBasePath('/');
    const publicRoute = currentPath === loginPath;

    if (isDemoMode) {
      setIsPublicRoute(publicRoute);
      setIsReady(true);
      return;
    }

    const token = getAuthToken();

    if (!token && !publicRoute) {
      window.location.replace(loginPath);
      return;
    }

    if (token && publicRoute) {
      window.location.replace(homePath);
      return;
    }

    setIsPublicRoute(publicRoute);
    setIsReady(true);
  }, []);

  if (!isReady) {
    return (
      <div className="flex min-h-screen items-center justify-center text-sm text-slate-500">
        Завантаження…
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
