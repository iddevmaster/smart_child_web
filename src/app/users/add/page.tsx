import React from 'react'
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import AddUserForm from '@/components/Form/AddUserForm';

function AddUserPage() {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Add User" />

      <div className="flex flex-col gap-10">
        <AddUserForm />
      </div>
    </DefaultLayout>
  )
}

export default AddUserPage
