import { Sidebar } from '@/components/Sidebar';

export function AuthShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex w-full flex-1 flex-col">{children}</div>
    </div>
  );
}
