"use client";
import { useState } from "react";
import Input from "../input/Input";
import Heading from "../product/Heading";
import { useForm, FieldValues, SubmitHandler } from "react-hook-form";
import Button from "../Button";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import { useSearchParams } from "next/navigation";
import { gql, useMutation } from "@apollo/client";

const ChangePasswordForm = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const searchParams = useSearchParams();
  const search = searchParams.get("email");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      newPassword: "",
      repeatNewPassword: "",
    },
  });

  const handlePasswordChange = (value: string) => {
    setPassword(value);
  };

  const handleConfirmPasswordChange = (value: string) => {
    setConfirmPassword(value);
  };

  const changepwd_m = gql`
    mutation resetPassword2($resetPasswordInput: UpdatePasswordInput2!) {
      resetPassword2(resetPasswordInput: $resetPasswordInput)
    }
  `;
  const [changePwd] = useMutation(changepwd_m);

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    if (password === confirmPassword) {
      try {
        changePwd({
          variables: {
            resetPasswordInput: {
              correo: search,
              claveNueva: password,
            },
          },
        });
        toast.success("Password changed successfully");
        setIsLoading(true);
        router.push("/pages/login");
      } catch (error) {
        console.log(error);
        toast.error("Passwords do not match");
      }
    }
    
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <Heading title="Create New Password" />
      <hr className="bg-slate-500 w-full h-px" />
      <div className="w-full">
        <Input
          id="newPassword"
          label="New password"
          disabled={isLoading}
          register={register}
          errors={errors}
          type={showPassword ? "text" : "password"} // Toggle password visibility
          required
          onChange={handlePasswordChange}
        />
      </div>
      <div className="flex w-full">
        <Input
          id="repeatNewPassword"
          label="Repeat new password"
          disabled={isLoading}
          register={register}
          errors={errors}
          type={showPassword ? "text" : "password"} // Toggle password visibility
          required
          onChange={handleConfirmPasswordChange}
          //icon={showPassword ? "eye-off" : "eye"}
        />
        {/*<button className="underline " onClick={togglePasswordVisibility}>
                {showPassword ? "Hide" : "Show"}
    </button>*/}
      </div>
      <Button
        label={isLoading ? "Loading" : "Confirm"}
        onClick={handleSubmit(onSubmit)}
      />
    </>
  );
};

export default ChangePasswordForm;
