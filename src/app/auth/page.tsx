"use client";
import { useState } from "react";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import { SubmitHandler, useForm } from "react-hook-form";

import Container from "@/components/ui/container";
import { LoginT } from "@/common/types";

const Login = () => {
  const [visibility, setVisibility] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LoginT>({
    defaultValues: {
      email: "",
      password: "",
    },
    reValidateMode: "onChange",
  });
  const handlePasswordVisibility = () => {
    setVisibility((prev) => !prev);
  };
  const onSubmit: SubmitHandler<LoginT> = (data: LoginT) => {
    console.log(data);
    reset();
  };

  return (
    <Container className=" h-screen  flex justify-center items-center ">
      <form
        className="h-full w-full flex flex-col gap-14 justify-center items-center py-[3rem] rounded-none  md:gap-10 md:h-[80%] lg:w-[48%] md:rounded-xl md:justify-start"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Container className="">
          <h1 className="text-4xl font-bold text-yellow-600"> Login</h1>
        </Container>
        <Container className="w-full h-4/6 flex flex-col gap-10 items-center md:gap-7">
          <div className=" flex flex-col gap-1  mt-2 space-y-1 w-5/6 md:mt-4 md:w-3/5">
            <Container className="flex p-4 border-2 border-yellow-600 rounded-xl w-full md:p-2 ">
              <input
                type={`email`}
                placeholder="Email"
                className="w-full bg-inherit outline-none px-2"
                {...register("email")}
              />
            </Container>
            {errors.email && (
              <small className="text-red-600"> {errors?.email?.message}</small>
            )}
          </div>

          <div className=" flex flex-col gap-1  space-y-1 w-5/6  md:w-3/5">
            <Container className="flex items-center p-4  border-2 border-yellow-600 rounded-xl w-full md:p-2">
              <input
                type={`${visibility ? "text" : "password"}`}
                placeholder="password"
                className="w-[94%] bg-inherit outline-none px-2"
                {...register("password")}
              />
              <span onClick={handlePasswordVisibility}>
                {visibility ? <MdVisibilityOff /> : <MdVisibility />}
              </span>
            </Container>
            {errors.password && (
              <small className="text-red-600">
                {" "}
                {errors?.password?.message}
              </small>
            )}
          </div>

          <Container className="flex justify-center p-2 w-5/6">
            <button
              type="submit"
              className="bg-yellow-600 text-white font-semibold py-4 px-12 rounded-xl md:py-2"
            >
              Login
            </button>
          </Container>
        </Container>
      </form>
    </Container>
  );
};

export default Login;
