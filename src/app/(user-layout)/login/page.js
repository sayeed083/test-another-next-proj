"use client";
import LoginForm from "@/app/(user-layout)/login/LoginForm";
import LoginSvg from "@/components/LoginSvg";
import React from "react";

const Login = () => {
	return (
		<div className="hero bg-base-200 mt-20 mb-10">
			<div className="hero-content flex flex-col lg:flex-row justify-center">
				<div className="text-center p-10 lg:text-left lg:w-1/2">
					<h1 className="text-5xl font-bold text-center">
						Login Now!
					</h1>
					<p className="pt-6 text-center">
						Login now to connect with us.
					</p>
					<LoginSvg />
				</div>
				<div className="card px-8 pt-36 flex-shrink-0 w-full max-w-lg lg:w-1/2">
					<LoginForm />
				</div>
			</div>
		</div>
	);
};

export default Login;
