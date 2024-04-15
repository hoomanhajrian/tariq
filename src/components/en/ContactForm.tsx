"use client";
import { useState, useId, useRef } from "react";
import { Button, Label, Textarea, TextInput } from "flowbite-react";
import { MuiTelInput } from "mui-tel-input";
import axios from "axios";
import { Typography } from "@mui/material";

const ContactForm = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [errorMessage, updateErrorMessage] = useState({
    message: "",
    color: "",
  });
  const [formData, updateFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    request: "",
  });

  const nameId = useId();
  const phoneId = useId();
  const emailId = useId();
  const requestId = useId();

  const submitRequet = async (e: any) => {
    e.preventDefault();

    setLoading(true);
    if (
      formData.fullName != "" &&
      formData.email != "" &&
      formData.phone != "" &&
      formData.request != ""
    ) {
      axios
        .post("/api/email/send", formData, {
          headers: {
            "content-type": "application/json",
            Accept: "application/json",
          },
        })
        .then((result: any) => {
          if (result.status === 200) {
            setLoading(false);
            updateErrorMessage({
              message: `Thank you ${name}, We'll get back to you as soon as possible.`,
              color: "green",
            });
            setTimeout(() => {
              updateErrorMessage({ message: "", color: "" });
            }, 4000);
          } else {
            setLoading(false);
            updateErrorMessage({
              message: "Something went wrong, Please try again later.",
              color: "red",
            });
            setTimeout(() => {
              updateErrorMessage({ message: "", color: "" });
            }, 2000);
          }
        })
        .catch((err: any) => {
          setLoading(false);
          updateErrorMessage({
            message: err.message,
            color: "red",
          });
          setTimeout(() => {
            updateErrorMessage({ message: "", color: "" });
          }, 2000);
        });
    } else {
      setLoading(false);
      updateErrorMessage({
        message: "Make sure All required fields with * are filled!",
        color: "red",
      });
      setTimeout(() => {
        updateErrorMessage({ message: "", color: "" });
      }, 2000);
    }
  };
  return (
    <form
      onSubmit={submitRequet}
      className="flex max-w-md flex-col gap-4 bg-orange p-10 mt-10 mb-10 mr-auto ml-auto rounded-xl"
    >
      <div>
        <div className="mb-2 block">
          <Label htmlFor={nameId} value="Full Name :" />
        </div>
        <TextInput id={nameId} type="text" required />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor={emailId} value="Email :" />
        </div>
        <TextInput id={emailId} type="email" required />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor={phoneId} value="Phone :" />
        </div>
        <MuiTelInput
          required
          style={{
            backgroundColor: "white",
            borderRadius: "12px",
            width: "100%",
          }}
          id={phoneId}
          placeholder="Change country if necessary"
          langOfCountryName="en"
          size="small"
          variant="outlined"
          defaultCountry="CA"
          value={formData.phone}
          onChange={(value: any) => {
            if (value.length < 18) {
              updateFormData({ ...formData, phone: value });
            }
          }}
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor={requestId} value="Request :" />
        </div>
        <Textarea id={requestId} maxLength={250} required />
      </div>
      <Button type="submit">Submit</Button>
      <Typography variant="body1" component={"p"} color={errorMessage.color}>
        {errorMessage.message}
      </Typography>
    </form>
  );
};
export default ContactForm;
