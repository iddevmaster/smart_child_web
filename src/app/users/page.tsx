import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import UserTable from "@/components/Tables/UserTable";

import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLaout";

export const metadata: Metadata = {
  title: "Next.js Students Page | NextAdmin - Next.js Dashboard Kit",
  description: "This is Next.js Students page for NextAdmin Dashboard Kit",
};

const UserTablesPage = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Users" />

      <div className="flex flex-col gap-10">
        <UserTable />
      </div>
    </DefaultLayout>
  );
};

export default UserTablesPage;
