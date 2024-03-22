"use client";
import { useState, useId, useEffect } from "react";
import { Button, Label, Textarea, TextInput } from "flowbite-react";
import { MuiTelInput } from "mui-tel-input";

const ContactForm = () => {
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

  return (
    <form className="flex max-w-md flex-col gap-4 bg-orange p-10 mt-10 mb-10 mr-auto ml-auto rounded-xl">
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
            updateFormData({ ...formData, phone: value });
          }}
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor={requestId} value="Request :" />
        </div>
        <Textarea id={requestId} maxLength={250} />
      </div>
      <Button type="submit">Submit</Button>
    </form>
  );
};
export default ContactForm;
