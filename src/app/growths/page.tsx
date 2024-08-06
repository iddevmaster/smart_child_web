import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import TableOne from "@/components/Tables/TableOne";
import TableThree from "@/components/Tables/TableThree";
import TableTwo from "@/components/Tables/TableTwo";

import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLaout";

export const metadata: Metadata = {
  title: "Next.js Students Page | NextAdmin - Next.js Dashboard Kit",
  description: "This is Next.js Students page for NextAdmin Dashboard Kit",
};

const GrowthTablesPage = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Growths Table" />

      <div className="flex flex-col gap-10">
        <TableOne />
      </div>
    </DefaultLayout>
  );
};

export default GrowthTablesPage;
