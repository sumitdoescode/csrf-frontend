"use client";
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const page = () => {
    useEffect(() => {
        const fetchData = async () => {
            const { data } = await axios.get("https://csrf-backend.sumitdoescode.me", {
                withCredentials: true,
            });
            console.log(data);
        };
        fetchData();
    }, []);

    const login = async () => {
        const { data } = await axios.post(
            "https://csrf-backend.sumitdoescode.me/login",
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
        const { data } = await axios.get("https://csrf-backend.sumitdoescode.me/dashboard", {
            withCredentials: true,
        });
        console.log(data);
    };
    const logout = async () => {
        const { data } = await axios.get("https://csrf-backend.sumitdoescode.me/logout", {
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
            <button onClick={logout} className="bg-black text-white p-2 rounded-md">
                Logout
            </button>
        </div>
    );
};

export default page;
