import Sidebar from './Sidebar';
import ProtectedRoute from './ProtectedRoute';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ProtectedRoute>
      <div className="flex min-h-screen flex-col bg-gray-100 lg:flex-row">
        <Sidebar />
        <main className="w-full flex-1 px-4 py-6 sm:px-6 sm:py-8 lg:px-10 lg:py-10">
          <div className="mx-auto w-full max-w-7xl">{children}</div>
        </main>
      </div>
    </ProtectedRoute>
  );
}
