import { toast } from "react-toastify";

export const handleContact = async (name, email, company, setLoading, cb) => {
  if (name && email && company) {
    setLoading(true);
    const res = await fetch("api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, company }),
    });

    const { error, status } = await res.json();

    if (error) {
      setLoading(false);
      toast.error("Something went wrong!!!");
      return;
    }
    if (status) {
      setLoading(false);
      toast.success("Sent successfully.");
      // cb();
      return;
    }
  } else toast.warning("Please fill all the required fields.");
};

export const handleForm = async (
  name,
  email,
  phone,
  // subject,
  message,
  setLoading,
  cb
) => {
  if (name && email  && message) {
    setLoading(true);
    const res = await fetch("api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, phone,  message }),
    });

    const { error, status } = await res.json();

    if (error) {
      setLoading(false);
      toast.error("Something went wrong!!!");
      return;
    }
    if (status) {
      setLoading(false);
      toast.success("Sent successfully.");
      // cb();
      return;
    }
  } else toast.warning("Please fill all the required fields.");
};
