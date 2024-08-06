import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import StudentTable from "@/components/Tables/StudentTable";

import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLaout";

export const metadata: Metadata = {
  title: "Next.js Students Page | NextAdmin - Next.js Dashboard Kit",
  description: "This is Next.js Students page for NextAdmin Dashboard Kit",
};

const StudentsTablesPage = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Students" />

      <div className="flex flex-col gap-10">
        <StudentTable />
      </div>
    </DefaultLayout>
  );
};

export default StudentsTablesPage;
