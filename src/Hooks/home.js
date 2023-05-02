import React, { useRef, useState } from "react";

export const homeHooks = () => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);
  const subjectRef = useRef(null);
  const messageRef = useRef(null);
  const companyRef = useRef(null);
  const termRef = useRef(null);
  const [client, setClient] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [company, setCompany] = useState(null);
  const [term, setTerm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState(false);

  return {
    ref: {
      nameRef,
      emailRef,
      phoneRef,
      subjectRef,
      messageRef,
      companyRef,
      termRef,
    },
    client,
    name,
    email,
    phone,
    subject,
    message,
    company,
    term,
    form,
    loading,
    setName,
    setEmail,
    setPhone,
    setClient,
    setSubject,
    setMessage,
    setCompany,
    setTerm,
    setLoading,
    setForm,
  };
};
