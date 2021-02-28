import React, { useState } from "react";
import * as yup from "yup";

import Form from "../components/form/Form";
import Input from "../components/form/Input";
import Select from "../components/form/Select";
import SubmitButton from "../components/form/SubmitButton";

export default function Registration() {
  const validationSchema = yup.object().shape({
    email: yup.string().email().required("This field is required").label("Email"),
    dreamJob: yup.string().required("This field is required").label("Dream Job"),
  });

  const handleSubmit = ({ dreamJob, email }, { resetForm }) => {
    const currentUsers = users;

    if (currentUsers.filter((u) => u.email === email).length) {
      setIsDuplicated(true);
      setErrorClass("errorBorder");
      setTimeout(() => setIsDuplicated(false), 5000);
      return;
    }

    const newUser = { dreamJob, email };
    currentUsers.push(newUser);
    setUsers(currentUsers);
    setErrorClass("");
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 5000);

    resetForm();
  };

  const [users, setUsers] = useState([]);
  const [isSaved, setIsSaved] = useState(false);
  const [isDuplicated, setIsDuplicated] = useState(false);
  const [errorClass, setErrorClass] = useState("");

  return (
    <div className="main">
      <div className="row mt-5">
        <div className="col-md-6 mx-auto">
          <div className="title mb-5">
            <h2 className="text-center">Register Your Dream Job</h2>
            <p>kindly provide your email and dream job</p>
            {isSaved ? <p className="success">Dream Job Successfully Saved</p> : null}
          </div>

          <Form
            initialValues={{ email: "", dreamJob: "" }}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
          >
            <Input
              classes={errorClass}
              placeholder="Your Email Address"
              name="email"
              label="Email Address"
              type="email"
              required
              isDuplicated={isDuplicated}
            />

            <Select
              name="dreamJob"
              placeholder="Select Your Dream Job"
              label="Dream Job"
              options={[
                { name: "front", value: "Frontend Engineer" },
                { name: "back", value: "Backend Engineer" },
                { name: "full", value: "FullStack Engineer" },
              ]}
            />

            <SubmitButton />
          </Form>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <footer>
            <p>Lassod 2021 - Frontend Assignment - Kwadoskii</p>
          </footer>
        </div>
      </div>
    </div>
  );
}
