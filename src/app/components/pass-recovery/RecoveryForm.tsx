"use client";
import { useState } from "react";
import Input from "../input/Input";
import Heading from "../product/Heading";
import { useForm, FieldValues, SubmitHandler } from "react-hook-form";
import Button from "../Button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { gql, useMutation } from "@apollo/client";

const RecoveryForm = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      email: "",
    },
  });

  const handleEmailChange = (value: string) => {
    setEmail(value); // Actualiza el estado del correo electrónico
  };

  const resetpwd_m = gql`
    mutation recoveryPass($recoveryPassInput: RecoveryPassInput!) {
      recoveryPass(recoveryPassInput: $recoveryPassInput)
    }
  `;

  const [resetPwd] = useMutation(resetpwd_m);
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    try {
      resetPwd({
        variables: {
          recoveryPassInput: {
            correo: email,
          },
        },
      });
      router.push(`/pages/login/pass-recovery-validation?email=${email}`);
    } catch (error) {
        console.log(error);
        }

    
  };

  return (
    <>
      <Heading title="Password Recovery" />
      <hr className="bg-slate-500 w-full h-px" />
      <Input
        id="email"
        label="Email"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
        onChange={handleEmailChange}
      />
      <Button
        label={isLoading ? "Loading" : "Confirm"}
        onClick={handleSubmit(onSubmit)}
      />
    </>
  );
};

export default RecoveryForm;
