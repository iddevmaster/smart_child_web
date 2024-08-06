"use client";
import { useState, useEffect } from "react";
import SelectPrefix from "./Elements/SelectPrefix";
import SelectSchool from "./Elements/SelectSchool";
import Link from "next/link";
import InputGroup from "@/components/FormElements/InputGroup";
import CloseIcon from "@mui/icons-material/Close";
import SaveIcon from "@mui/icons-material/Save";
import { SchoolType } from "@/types/school";
import SelectGender from "./Elements/SelectGender";

const AddStudentForm = () => {
  const [prefix, setPrefix] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [school, setSchool] = useState<string>("");
  const [allSchools, setAllSchools] = useState<[SchoolType]>();
  const [fname, setFname] = useState<string>("");
  const [lname, setLname] = useState<string>("");
  const [dob, setDob] = useState<string>("");
  const [parentName, setParentName] = useState<string>("");
  const [parentPhone, setParentPhone] = useState<string>("");
  const [gender, setGender] = useState<string>("");

  const fetchSchools = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/schools", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (res.ok) {
        const data = await res.json();
        console.log("Fetch school success: ", data);
        setAllSchools(data);
      } else {
        setError("Error fetching schools");
        return;
      }
    } catch (error) {
      console.log("Error fetching schools: ", error);
    }
  };

  useEffect(() => {
    fetchSchools();
  }, []);

  return (
    <div className="flex justify-center ">
      <div className="flex w-full flex-col gap-9 xl:w-3/5">
        {/* <!-- Contact Form --> */}
        <div className="rounded-[10px] border border-stroke bg-white shadow-1 dark:border-dark-3 dark:bg-gray-dark dark:shadow-card">
          <div className="border-b border-stroke px-6.5 py-4 dark:border-dark-3">
            <h3 className="font-semibold text-dark dark:text-white">
              Student information
            </h3>
          </div>
          <form action="#">
            <div className="p-6.5">

              <SelectPrefix setState={setPrefix} prefix={prefix} />

              <InputGroup
                label="First Name"
                type="text"
                placeholder="Enter your first name"
                customClasses="mb-4.5"
                maxLength={100}
                required
              />

              <InputGroup
                label="Last name"
                type="text"
                maxLength={100}
                placeholder="Enter your last name"
                customClasses="mb-4.5"
                required
              />

              <InputGroup
                label="Date of birth"
                type="date"
                placeholder="Enter your dob"
                customClasses="mb-4.5"
                required
              />

              <SelectSchool
                schools={allSchools}
                schoolValue={school}
                setSchool={setSchool}
              />

              <SelectGender setState={setGender} gender={gender} />

              <div className="mb-10 mt-6">
                <label className="mb-3 block text-body-sm font-medium text-dark dark:text-white">
                  Parent
                </label>
                <div className="px-6.5">
                  <InputGroup
                    label="Parent Name"
                    type="text"
                    maxLength={100}
                    placeholder="Enter your parent's name"
                    customClasses="mb-4.5"
                  />

                  <InputGroup
                    label="Phone number"
                    type="email"
                    maxLength={100}
                    placeholder="Enter your parent's phone number"
                    customClasses="mb-4.5"
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

export default AddStudentForm;
