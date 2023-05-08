"use client";

import axios from "axios";
import  {signIn} from 'next-auth/react';
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { useCallback, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

import useRegisterModal from "@/app/hooks/useRegisterModal";
import Modal from "./Modal";
import Heading from "../Heading";
import Input from "../inputs/Input";
import Button from "../Button";
import useLoginModal from "@/app/hooks/useLoginModal";
import { useRouter } from "next/navigation";
const LoginModal = () => {
  const router = useRouter()
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal()
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setLoading(true);

   signIn('credentials', {
    ...data,
    redirect:false
   }).then((callback)=>{
    setLoading(false);
    if(callback?.ok){
      toast.success('Logged in successfully');
      router.refresh();
      loginModal.onClose()
    }
    if(callback?.error){
      toast.error(callback.error)
    }
   })
  };
  const toggle = useCallback(()=>{
    loginModal.onClose();
    registerModal.onOpen()

  },[loginModal,registerModal])
  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Heading title="Welcome Back" subtitle="Login to Your account" />
      <Input
        register={register}
        id="email"
        label="Email"
        disabled={loading}
        errors={errors}
        required
      />
    
      <Input
        register={register}
        id="password"
        label="Password"
        disabled={loading}
        errors={errors}
        required
      />
    </div>
  );
  const footerContent = (
    <div className="flex flex-col gap-4 mt-3">
      <hr />
      <Button
        outlined
        label="Continue with Google"
        icon={FcGoogle}
        onClick={() =>signIn('google')}
      />
      <Button
        outlined
        label="Continue with Github"
        icon={AiFillGithub}
        onClick={() => signIn('github')}
      />
      <div className="text-neutral-500 text-center mt-4 font-light">
        <div className="flex flex-row items-center justify-center gap-2">
          <div>First time using Airnb?</div>
          <div onClick={toggle} className="text-neutral-800 cursor-pointer hover:underline">Create an Acoount</div>
        </div>
      </div>
    </div>
  );

  return (
    <Modal
      disabled={loading}
      isOpen={loginModal.isOpen}
      title="Login"
      actionLabel="Continue"
      onClose={loginModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
      footer={footerContent}
    />
  );
};

export default LoginModal;
