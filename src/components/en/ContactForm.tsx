"use client";
import { useState, useId } from "react";
import { Button, Label, Textarea, TextInput } from "flowbite-react";
import { MuiTelInput } from "mui-tel-input";

const ContactForm = () => {
  const [formData, updateFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
  });

  return (
    <form className="flex max-w-md flex-col gap-4">
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email1" value="Your email" />
        </div>
        <TextInput
          id="email1"
          type="email"
          placeholder="name@flowbite.com"
          required
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="password1" value="Your password" />
        </div>
        <TextInput id="password1" type="password" required />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="password1" value="Your password" />
        </div>
        <Textarea id="password1" required />
      </div>
      <div className="flex items-center gap-2">
        <MuiTelInput
          value={formData.phone}
          onChange={(value: any) => {
            updateFormData({ ...formData, phone: value });
          }}
        />
      </div>
      <Button type="submit">Submit</Button>
    </form>
  );
};
export default ContactForm;
