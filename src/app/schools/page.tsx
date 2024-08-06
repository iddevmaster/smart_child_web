import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import SchoolTable from "@/components/Tables/SchoolTable";

import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLaout";

export const metadata: Metadata = {
  title: "Next.js Students Page | NextAdmin - Next.js Dashboard Kit",
  description: "This is Next.js Students page for NextAdmin Dashboard Kit",
};

const SchoolTablesPage = () => {

  return (
    <DefaultLayout>
      <Breadcrumb pageName="Schools" />

      <div className="flex flex-col gap-10">
        <SchoolTable />
      </div>
    </DefaultLayout>
  );
};

export default SchoolTablesPage;
