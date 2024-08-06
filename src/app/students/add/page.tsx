import React from 'react'
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import AddStudentForm from '@/components/Form/AddStudentForm';

function AddStudentPage() {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Add Student" />

      <div className="flex flex-col gap-10">
        <AddStudentForm />
      </div>
    </DefaultLayout>
  )
}

export default AddStudentPage
