"use client";
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const page = () => {
    const register = async () => {
        const { data } = await axios.post("https://csrf-backend.sumitdoescode/api/users/register", {
            name: "sumit",
            email: "sumit@gmail.com",
            password: "password",
        });
        console.log(data);
    };

    const login = async () => {
        const { data } = await axios.post(
            "https://csrf-backend.sumitdoescode.me/api/users/login",
            {
                email: "sumit@gmail.com",
                password: "password",
            },
            {
                withCredentials: true,
            },
        );
        console.log(data);
    };

    const logout = async () => {
        const { data } = await axios.get("https://csrf-backend.sumitdoescode.me/api/users/logout", {
            withCredentials: true,
        });
        console.log(data);
    };

    const me = async () => {
        const { data } = await axios.get("https://csrf-backend.sumitdoescode.me/api/users/me", {
            withCredentials: true,
        });
        console.log(data);
    };

    return (
        <div className="flex flex-col gap-2">
            <button onClick={register} className="bg-black text-white p-2 rounded-md">
                Register
            </button>
            <button onClick={login} className="bg-black text-white p-2 rounded-md">
                Login
            </button>

            <button onClick={logout} className="bg-black text-white p-2 rounded-md">
                Logout
            </button>
            <button onClick={me} className="bg-black text-white p-2 rounded-md">
                Me
            </button>
        </div>
    );
};

export default page;
