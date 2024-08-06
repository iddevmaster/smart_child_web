"use client";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { useState } from "react";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import SelectGroupOne from "@/components/FormElements/SelectGroup/SelectGroupOne";
import Link from "next/link";
import InputGroup from "@/components/FormElements/InputGroup";
import CloseIcon from "@mui/icons-material/Close";
import SaveIcon from "@mui/icons-material/Save";
import Alert from "@mui/material/Alert";
import { useRouter } from "next/navigation";

const AddSchoolForm = () => {
  const [schoolName, setSchoolName] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [pageUrl, setPageUrl] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<string>("");

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!schoolName) {
      setError("School name is required");
      return;
    }

    // API call to save the school
    console.log({ schoolName, address, phoneNumber, email, pageUrl });
    try {
      const res = await fetch("http://localhost:3000/api/schools/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ schoolName, address, phoneNumber, email, pageUrl }),
      });

      if (!res.ok) {
        console.log("Error creating school");
      } else {
        setSuccess("School was saved.");
        const form = e.target as HTMLFormElement;
        form.reset();
        setError(""); 
        router.back();
      }
    } catch (error) {
      console.log("Error creating school: ", error);
      setError("Error creating school");
    }
  };
  return (
    <div className="flex justify-center ">
      <div className="flex w-full flex-col gap-9 xl:w-3/5">
        {/* <!-- Contact Form --> */}
        <div className="rounded-[10px] border border-stroke bg-white shadow-1 dark:border-dark-3 dark:bg-gray-dark dark:shadow-card">
          <div className="border-b border-stroke px-6.5 py-4 dark:border-dark-3">
            <h3 className="font-semibold text-dark dark:text-white">
              School information
            </h3>
          </div>
          <form action="#" onSubmit={handleSubmit}>
            {error && (
              <Alert variant="filled" severity="error">
                {error}
              </Alert>
            )}
            {success && (
              <Alert variant="filled" severity="success">
                {success}
              </Alert>
            )}
            <div className="p-6.5">
              <InputGroup
                label="School name"
                type="text"
                placeholder="Enter your school's name"
                customClasses="mb-4.5"
                maxLength={100}
                required
                setStates={setSchoolName}
              />

              <div>
                <label className="mb-3 block text-body-sm font-medium text-dark dark:text-white">
                  Address
                </label>
                <textarea
                  rows={3}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Enter school's address"
                  className="w-full rounded-[7px] border-[1.5px] border-stroke bg-transparent px-5.5 py-3 text-dark outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2 dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
                ></textarea>
              </div>

              <div className="mb-10 mt-6">
                <label className="mb-3 block text-body-sm font-medium text-dark dark:text-white">
                  Contact
                </label>
                <div className="px-6.5">
                  <InputGroup
                    label="Phone number"
                    type="text"
                    maxLength={100}
                    placeholder="Enter your school's phone number"
                    customClasses="mb-4.5"
                    setStates={setPhoneNumber}
                  />

                  <InputGroup
                    label="Email"
                    type="email"
                    maxLength={100}
                    placeholder="Enter your school's email address"
                    customClasses="mb-4.5"
                    setStates={setEmail}
                  />

                  <InputGroup
                    label="Page Url"
                    type="url"
                    placeholder="Enter your school's page url"
                    customClasses="mb-4.5"
                    setStates={setPageUrl}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <Link href={"/schools"}>
                  <button
                    type="button"
                    className="flex w-full justify-center rounded-[7px] bg-red p-[13px] font-medium text-white hover:bg-opacity-90"
                  >
                    <CloseIcon /> Cancel
                  </button>
                </Link>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-[7px] bg-primary p-[13px] font-medium text-white hover:bg-opacity-90"
                >
                  <SaveIcon /> Save
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddSchoolForm;
