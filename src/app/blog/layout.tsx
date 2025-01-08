import { ReactNode } from "react";
import SideNav from "@/app/ui/components/sidenav";

const Layout = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden bg-white">
      <aside className="w-full flex-none md:w-64">
        <SideNav />
      </aside>
      <article className="flex-grow p-6 md:overflow-y-auto md:p-12">
        {children}
      </article>
    </div>
  );
};

export default Layout;
