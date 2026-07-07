"use client";
import { RiArrowDownLine, RiArrowDownSLine } from '@remixicon/react';
import React, { useState } from 'react'
import DotButton from '../common/DotButton';
import Button from '../common/Button';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const foundersData = [
    {
        role: "Co-Founder",
        company: "UBR",
        name: "Binoy Khimji",
        email: "binoy@ubrcapital.com",
    },
    {
        role: "Co-Founder",
        company: "DISRPTVE",
        name: "Ashish Chowdhry",
        email: "ashish@disrptve.com",
    },
    {
        role: "Co-Founder",
        company: "DISRPTVE",
        name: "Kaushik Sundararajan",
        email: "kaushik@disrptve.com",
    },
];

const stageOptions = [
    {
        label: "Idea / pre-launch",
        value: "idea-pre-launch",
    },
    {
        label: "Early traction (under ₹5Cr ARR)",
        value: "early-traction",
    },
    {
        label: "Scaling (₹5–50Cr ARR)",
        value: "scaling",
    },
    {
        label: "Established (₹50Cr+ ARR)",
        value: "established",
    },
    {
        label: "Investor / Retailer",
        value: "investor-retailer",
    },
    {
        label: "Talent / Creator",
        value: "talent-creator",
    },
    {
        label: "Other",
        value: "other",
    },
];

const serviceOptions = [
    {
        label: "Venture Build (full-stack, equity co-owner)",
        value: "venture-build",
    },
    {
        label: "Strategic Advisory + Talent (equity)",
        value: "strategic-advisory-talent",
    },
    {
        label: "Fundraise (success fee)",
        value: "fundraise",
    },
    {
        label: "Sweat-Equity Hybrid",
        value: "sweat-equity-hybrid",
    },
    {
        label: "Not sure yet",
        value: "not-sure-yet",
    },
];

const ContactForm = () => {

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        company: "",
        stage: "",
        service: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async () => {
        if (!formData.fullName.trim()) {
            toast.error("Full name is required");
            return;
        }

        if (!formData.email.trim()) {
            toast.error("Email is required");
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(formData.email)) {
            toast.error("Enter a valid email");
            return;
        }

        if (!formData.company.trim()) {
            toast.error("Company or brand is required");
            return;
        }

        if (!formData.stage) {
            toast.error("Please select a stage");
            return;
        }

        if (!formData.service) {
            toast.error("Please select a service");
            return;
        }

        if (!formData.message.trim()) {
            toast.error("Please enter a message");
            return;
        }

        try {
            setIsSubmitting(true);
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const data = await res.json();

            if (data.success) {
                toast.success("Message sent successfully 🚀");

                setFormData({
                    fullName: "",
                    email: "",
                    company: "",
                    stage: "",
                    service: "",
                    message: "",
                });
            } else {
                toast.error(data.message || "Something went wrong");
            }
        } catch (error) {
            console.error(error);
            toast.error("Server error");
        } finally {
            setIsSubmitting(false);
        }
    };
    return (
        <>
            <ToastContainer position="top-right" autoClose={3000} />

            <div className="container pt-12 md:pt-24">
                <div className="w-full grid grid-cols-1 md:grid-cols-2">
                    <div className=" md:pr-32 space-y-5">
                        <DotButton text="Direct" className={"md:ml-5"} />
                        <div className=" w-full   space-y-4 ">
                            {foundersData.map((item, index) => (
                                <div
                                    key={index}
                                    className=" relative transition-all duration-300  border-b pb-2 md:p-5 flex w-full  justify-between group cursor-pointer border-black/10  hover:text-white  "
                                >
                                    <div className="absolute bg-[#4688F0] group-hover:h-full w-full z-[-1] left-0 h-0 bottom-0 transition-all duration-300"></div>
                                    <div className="space-y-5">
                                        <div className="">
                                            <h6 className="flex items-center gap-2  text-sm uppercase ">
                                                <span>{item.role}</span>
                                                <span>•</span>
                                                <span>{item.company}</span>
                                            </h6>
                                            <h5 className="">
                                                {item.name}
                                            </h5>
                                        </div>
                                        <a
                                            href={`mailto:${item.email}`}
                                            className="inline-block  "
                                        >
                                            {item.email}
                                        </a>
                                    </div>
                                    <div className={`size-10 center rounded-full border border-black/10 group-hover:bg-[#ffffff] group-hover:text-[#4688F0] transition-all duration-300`}>
                                        <RiArrowDownLine size={18} className='group-hover:-rotate-[135deg] -rotate-90 transition-all duration-300' />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className=" max-sm:mt-12 space-y-5 md:space-y-8  h-full relative">
                        <DotButton text="start a conversation" />
                        <form className=" space-y-5 md:space-y-10">
                            <div className="grid grid-cols-1  md:grid-cols-2 gap-5 md:gap-10">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium uppercase  ">
                                        Full Name
                                    </label>

                                    <input
                                        type="text"
                                        name="fullName"
                                        value={formData.fullName}
                                        onChange={handleChange}
                                        placeholder="John Anderson"
                                        className="mt-2 heading-font w-full border-b border-black/20 placeholder:text-[#0f121980] outline-none focus:border-black/20"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className=" font-medium uppercase  ">
                                        Email
                                    </label>

                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="john.anderson@gmail.com"
                                        className="mt-2 heading-font w-full border-b border-black/20 placeholder:text-[#0f121980] outline-none focus:border-black/20"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1  md:grid-cols-2 gap-5 md:gap-10">
                                <div className="space-y-3">
                                    <label className=" font-medium uppercase  ">
                                        Company or brand
                                    </label>

                                    <input
                                        type="text"
                                        name="company"
                                        value={formData.company}
                                        onChange={handleChange}
                                        placeholder="Acme Inc."
                                        className="mt-2 heading-font w-full border-b border-black/20 placeholder:text-[#0f121980] outline-none focus:border-black/20"
                                    />
                                </div>

                                <div className="space-y-3">
                                    <label className=" font-medium uppercase ">
                                        Stage
                                    </label>

                                    <div className="relative mt-2">
                                        <select
                                            name="stage"
                                            value={formData.stage}
                                            onChange={handleChange}
                                            className={`cursor-pointer heading-font w-full appearance-none border-b border-black/20 outline-none focus:border-black/20 ${formData.stage ? "text-[#111827]" : "text-[#0f121980]"
                                                }`}
                                        >
                                            <option value="" disabled>
                                                Select Stage
                                            </option>

                                            {stageOptions.map((option) => (
                                                <option key={option.value} value={option.value}>
                                                    {option.label}
                                                </option>
                                            ))}
                                        </select>

                                        <RiArrowDownSLine
                                            size={18}
                                            className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 text-[#4b5563]"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-3">
                                <label className=" font-medium uppercase ">
                                    What are you looking for?
                                </label>

                                <div className="relative mt-2">
                                    <select
                                        name="service"
                                        value={formData.service}
                                        onChange={handleChange}
                                        className={`cursor-pointer heading-font w-full appearance-none border-b border-black/20 outline-none focus:border-black/20 ${formData.service ? "text-[#111827]" : "text-[#0f121980]"
                                            }`}
                                    >
                                        <option value="" disabled>
                                            Select Service
                                        </option>

                                        {serviceOptions.map((option) => (
                                            <option key={option.value} value={option.value}>
                                                {option.label}
                                            </option>
                                        ))}
                                    </select>

                                    <RiArrowDownSLine
                                        size={18}
                                        className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 text-[#4b5563]"
                                    />
                                </div>
                            </div>

                            <div className="space-y-3">
                                <label className=" font-medium uppercase  ">
                                    Tell us a bit more
                                </label>

                                <textarea
                                    rows={7}
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Category, traction, what you need, etc."
                                    className="mt-2 heading-font w-full resize-none border-b border-black/20 placeholder:text-[#0f121980] outline-none focus:border-black/20"
                                />
                            </div>

                        </form>
                        <Button
                            onClick={handleSubmit}
                            className={`${isSubmitting ? "pointer-events-none opacity-50" : ""}`}
                            text={isSubmitting ? "Sending..." : "Send Message"}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactForm