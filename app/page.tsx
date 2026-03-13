"use client";
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const page = () => {
    useEffect(() => {
        const fetchData = async () => {
            const { data } = await axios.get("https://3.110.186.178", {
                withCredentials: true,
            });
            console.log(data);
        };
        fetchData();
    }, []);

    const login = async () => {
        const { data } = await axios.post(
            "https://3.110.186.178/login",
            {
                username: "sumit",
                password: "password",
            },
            {
                withCredentials: true,
            },
        );
        console.log(data);
    };
    const dashboard = async () => {
        const { data } = await axios.get("https://3.110.186.178/dashboard", {
            withCredentials: true,
        });
        console.log(data);
    };

    return (
        <div>
            <button onClick={login} className="bg-black text-white p-2 rounded-md">
                Login
            </button>
            <button onClick={dashboard} className="bg-black text-white p-2 rounded-md">
                Dashboard
            </button>
        </div>
    );
};

export default page;
