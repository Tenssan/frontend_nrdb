"use client";
import { useState } from "react";
import Input from "../input/Input";
import Heading from "../product/Heading";
import { useForm, FieldValues, SubmitHandler } from "react-hook-form";
import Button from "../Button";
import { useRouter } from "next/navigation";
import { gql, useMutation } from "@apollo/client";
import { useSearchParams } from "next/navigation";
const ValidationForm = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const search = searchParams.get("email");
  const [code, setCode] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      validationCode: "",
    },
  });

  const handleCodeChange = (value: string) => {
    setCode(value);
  };

  const confirmC_m = gql`
    mutation confirmC($confirmCodeInput: ConfirmCodeInput!) {
      confirmC(confirmCodeInput: $confirmCodeInput)
    }
  `;
  const [validateCode] = useMutation(confirmC_m);
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    try {
      validateCode({
        variables: {
          confirmCodeInput: {
            correo: search,
            code: code,
          },
        },
      });
      router.push(`/pages/login/change-password?email=${search}`);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(search);
  return (
    <>
      <Heading title="Enter code sent to your email" />
      <hr className="bg-slate-500 w-full h-px" />
      <Input
        id="validationCode"
        label="Email Code"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
        onChange={handleCodeChange}
      />
      <Button
        label={isLoading ? "Loading" : "Confirm"}
        onClick={handleSubmit(onSubmit)}
      />
    </>
  );
};

export default ValidationForm;
