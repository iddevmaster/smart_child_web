"use client";
import { useEffect, useState } from "react";
import SelectPrefix from "./Elements/SelectPrefix";
import SelectSchool from "./Elements/SelectSchool";
import Link from "next/link";
import InputGroup from "@/components/FormElements/InputGroup";
import CloseIcon from "@mui/icons-material/Close";
import SaveIcon from "@mui/icons-material/Save";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import DateOfBirth from "./Elements/DateOfBirth";
import { SchoolType } from "@/types/school";
import { set } from "mongoose";
import Alert from "@mui/material/Alert";
import { useRouter } from "next/navigation";

const AddUserForm = () => {
  const [prefix, setPrefix] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [school, setSchool] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [allSchools, setAllSchools] = useState<[SchoolType]>();
  const [success, setSuccess] = useState("");

  const router = useRouter();

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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!username) {
      setError("Username is required");
      return;
    } else if (!password) {
      setError("Password is required");
      return;
    } else if (!firstName) {
      setError("First name is required");
      return;
    } else if (!lastName) {
      setError("Last name is required");
      return;
    } else if (!school) {
      setError("School is required");
      return;
    } else if (!prefix) {
      setError("Prefix is required");
      return;
    } else if (password.length < 8 && password.length > 12) {
      setError(
        "Password must be at least 8 characters and at most 12 characters",
      );
      return;
    }

    // API call to save the user
    try {
      const res = await fetch("http://localhost:3000/api/user/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prefix,
          username,
          password,
          firstName,
          lastName,
          school,
          phone,
        }),
      });

      if (!res.ok) {
        console.log("Error creating user");
      } else {
        setSuccess("User was saved.");
        const form = e.target as HTMLFormElement;
        form.reset();
        setError("");
        router.back();
      }
    } catch (error) {
      console.log("Error creating user: ", error);
      setError("Error creating user");
    }
  };

  return (
    <div className="flex justify-center ">
      <div className="flex w-full flex-col gap-9 xl:w-3/5">
        {/* <!-- Contact Form --> */}
        <div className="rounded-[10px] border border-stroke bg-white shadow-1 dark:border-dark-3 dark:bg-gray-dark dark:shadow-card">
          <div className="border-b border-stroke px-6.5 py-4 dark:border-dark-3">
            <h3 className="font-semibold text-dark dark:text-white">
              User information
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
              <div className="flex gap-4">
                <InputGroup
                  label="Username"
                  type="text"
                  placeholder="Enter your username"
                  customClasses="mb-4.5 w-full"
                  maxLength={100}
                  value={username}
                  required
                  setStates={setUsername}
                />

                <InputGroup
                  label="Password"
                  type="password"
                  maxLength={100}
                  placeholder="Enter your password 8 - 12 characters"
                  customClasses="mb-4.5 w-full"
                  required
                  setStates={setPassword}
                />
              </div>

              <SelectPrefix setState={setPrefix} prefix={prefix} />

              <div className="flex gap-4">
                <InputGroup
                  label="First Name"
                  type="text"
                  placeholder="Enter your first name"
                  value={firstName}
                  customClasses="mb-4.5 w-full"
                  maxLength={100}
                  required
                  setStates={setFirstName}
                />

                <InputGroup
                  label="Last name"
                  value={lastName}
                  type="text"
                  maxLength={100}
                  placeholder="Enter your last name"
                  customClasses="mb-4.5 w-full"
                  required
                  setStates={setLastName}
                />
              </div>

              <SelectSchool
                schools={allSchools}
                schoolValue={school}
                setSchool={setSchool}
              />

              <InputGroup
                label="Phone number"
                value={phone}
                type="number"
                maxLength={100}
                placeholder="Enter your phone number"
                customClasses="mb-4.5"
                setStates={setPhone}
              />

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

export default AddUserForm;
