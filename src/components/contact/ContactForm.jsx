import { Envelope } from "phosphor-react";
import { useState } from "react";
import { Button, Icon, Input, Label, Textarea, toast } from "keep-react";
import { isValidEmail } from "../../functions/isValidEmail";
import { API_URL } from "../../config";
import axios from "axios";
export const ContactForm = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleMessage = (e) => {
    setMessage(e.target.value);
  };
  const handleContactSubmit = async () => {
    if (email === "" || message === "") {
      return toast.info("Input Field is required");
    }
    if (!isValidEmail(email)) {
      return toast.info("Please enter a valid email");
    }
    try {
      // Send email using API
      const response = await axios.post(`${API_URL}/api/let-contact`, {
        email: email,
        message: message,
      });

      if (response.status === 200) {
        toast.success("Message sent successfully.");
        setEmail("");
        setMessage("");
      } else {
        toast.error("Failed to send message. Please try again later.");
      }
    } catch (error) {
      console.error("Error occurred while sending message:", error);
      toast.error("Failed to send message. Please try again later.");
    }
  };
  return (
    <form className="mx-auto max-w-md space-y-3 h-[25rem] rounded-md border bg-white mt-4 mb-7 border-metal-100 p-6">
      <fieldset className="space-y-1">
        <Label htmlFor="email">Email</Label>
        <div className="relative">
          <Input
            id="email"
            placeholder="Enter email"
            className="ps-11 text-black "
            value={email}
            onChange={handleEmail}
          />
          <Icon>
            <Envelope size={19} color="#AFBACA" />
          </Icon>
        </div>
      </fieldset>
      <fieldset className="space-y-1">
        <Label htmlFor="m1">Message</Label>
        <Textarea
          id="m1"
          placeholder="Write your message here"
          className="text-black"
          value={message}
          onChange={handleMessage}
        />
      </fieldset>
      {/* Sent main using api  */}
      <Button
        size="sm"
        color="secondary"
        type="button"
        onClick={handleContactSubmit}
        className="w-full"
      >
        Send Message
      </Button>
    </form>
  );
};
