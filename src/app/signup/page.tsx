"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Mail, Lock, LoaderCircle, User } from "lucide-react";

import { authClient } from "@/lib/auth-client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Field,
  FieldError,
  FieldLabel,
} from "@/components/ui/field";

const TEAL = "text-[#1d9cbf]";

type FormValues = {
  name: string;
  image: File | null;
  email: string;
  password: string;
  confirmPassword: string;
};

type FieldErrors = Partial<Record<keyof FormValues, string>>;

const initialValues: FormValues = {
  name: "",
  image: null,
  email: "",
  password: "",
  confirmPassword: "",
};

function GoogleIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="size-4">
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.27-4.74 3.27-8.1Z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84A11 11 0 0 0 12 23Z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.1a6.6 6.6 0 0 1 0-4.2V7.07H2.18a11 11 0 0 0 0 9.87l3.66-2.84Z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15A11 11 0 0 0 2.18 7.07l3.66 2.84C6.71 7.31 9.14 5.38 12 5.38Z"
      />
    </svg>
  );
}

export default function SignUp() {
  const router = useRouter();
  const [values, setValues] = useState<FormValues>(initialValues);
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [serverError, setServerError] = useState("");
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    setFieldErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null;
    setValues((prev) => ({ ...prev, image: file }));
    setFieldErrors((prev) => ({ ...prev, image: undefined }));
  };

  const validate = (): FieldErrors => {
    const errors: FieldErrors = {};
    if (!values.name.trim()) errors.name = "Full name is required.";
    if (values.image && values.image.size > 2 * 1024 * 1024) {
      errors.image = "Image must be smaller than 2MB.";
    }
    if (!values.email.trim()) {
      errors.email = "Email address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      errors.email = "Please enter a valid email address.";
    }
    if (!values.password) {
      errors.password = "Password is required.";
    } else if (values.password.length < 8) {
      errors.password = "Password must be at least 8 characters.";
    }
    if (!values.confirmPassword) {
      errors.confirmPassword = "Please confirm your password.";
    } else if (values.confirmPassword !== values.password) {
      errors.confirmPassword = "Passwords do not match.";
    }
    return errors;
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const errors = validate();
    setFieldErrors(errors);
    setServerError("");
    if (Object.values(errors).some(Boolean)) return;

    setLoading(true);
    try {
      const { error } = await authClient.signUp.email({
        name: values.name.trim(),
        email: values.email.trim(),
        password: values.password,
      });
      if (error) {
        setServerError(
          error.message ||
            error.statusText ||
            "Something went wrong. Please try again."
        );
        return;
      }
      router.push("/");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignUp = async () => {
    setServerError("");
    setGoogleLoading(true);
    try {
      const { error } = await authClient.signIn.social({
        provider: "google",
        callbackURL: "/",
      });
      if (error) {
        setServerError(
          error.message || "Google sign-up is not available right now."
        );
        return;
      }
      router.push("/");
    } finally {
      setGoogleLoading(false);
    }
  };

  const inputClass = (invalid: boolean) =>
    `!h-10 !rounded-md !border ${invalid ? "!border-red-400" : "!border-transparent"} !bg-gray-100 !pl-9 !text-sm !ring-offset-0 focus-visible:!bg-white focus-visible:!border-[#1d9cbf] focus-visible:!ring-[#1d9cbf]/25`;

  return (
    <div className="flex min-h-svh flex-col items-center justify-center bg-[#eef0f2] px-4 py-12">
      <div className="flex w-full max-w-sm flex-col items-center">
        <h1 className="font-serif text-[34px] leading-tight font-semibold text-gray-900">
          Create Account
        </h1>
        <p className="mt-2 text-sm text-gray-500">
          Start your adventure with Wanderlust
        </p>

        <Card className="mt-6 w-full gap-5 !rounded-xl border-0 !ring-0 shadow-[0_16px_40px_-12px_rgba(0,0,0,0.12)] [--card-spacing:1.5rem]">
          <CardContent>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-4"
              noValidate
            >
              {serverError ? (
                <div
                  role="alert"
                  className="rounded-md border border-red-100 bg-red-50 px-3 py-2 text-[13px] text-red-600"
                >
                  {serverError}
                </div>
              ) : null}

              <Field data-invalid={fieldErrors.name ? "true" : undefined}>
                <FieldLabel htmlFor="name" className="text-[13px]">
                  Full Name
                </FieldLabel>
                <div className="relative">
                  <User
                    aria-hidden="true"
                    className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-gray-400"
                  />
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    placeholder="Enter your name"
                    value={values.name}
                    onChange={handleChange}
                    aria-invalid={fieldErrors.name ? true : undefined}
                    className={`${inputClass(Boolean(fieldErrors.name))} !text-[13px]`}
                  />
                </div>
                {fieldErrors.name ? (
                  <FieldError className="text-xs">{fieldErrors.name}</FieldError>
                ) : null}
              </Field>

              <Field data-invalid={fieldErrors.image ? "true" : undefined}>
                <FieldLabel htmlFor="image" className="text-[13px]">
                  Profile Image
                </FieldLabel>
                <Input
                  id="image"
                  name="image"
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  aria-invalid={fieldErrors.image ? true : undefined}
                  className={`!h-10 !rounded-md !border ${fieldErrors.image ? "!border-red-400" : "!border-transparent"} !bg-gray-100 !text-[13px] !text-gray-500 file:mr-3 file:!h-7 file:cursor-pointer file:!rounded-md file:!border-0 file:!bg-[#1d9cbf]/10 file:!px-3 file:!text-[12px] file:!font-medium file:!text-[#1d9cbf] focus-visible:!bg-white focus-visible:!border-[#1d9cbf] focus-visible:!ring-[#1d9cbf]/25`}
                />
                {fieldErrors.image ? (
                  <FieldError className="text-xs">
                    {fieldErrors.image}
                  </FieldError>
                ) : null}
              </Field>

              <Field data-invalid={fieldErrors.email ? "true" : undefined}>
                <FieldLabel htmlFor="email" className="text-[13px]">
                  Email Address
                </FieldLabel>
                <div className="relative">
                  <Mail
                    aria-hidden="true"
                    className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-gray-400"
                  />
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="Enter your email"
                    value={values.email}
                    onChange={handleChange}
                    aria-invalid={fieldErrors.email ? true : undefined}
                    className={inputClass(Boolean(fieldErrors.email))}
                  />
                </div>
                {fieldErrors.email ? (
                  <FieldError className="text-xs">
                    {fieldErrors.email}
                  </FieldError>
                ) : null}
              </Field>

              <Field data-invalid={fieldErrors.password ? "true" : undefined}>
                <FieldLabel htmlFor="password" className="text-[13px]">
                  Password
                </FieldLabel>
                <div className="relative">
                  <Lock
                    aria-hidden="true"
                    className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-gray-400"
                  />
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="new-password"
                    placeholder="Create a password"
                    value={values.password}
                    onChange={handleChange}
                    aria-invalid={fieldErrors.password ? true : undefined}
                    className={inputClass(Boolean(fieldErrors.password))}
                  />
                </div>
                {fieldErrors.password ? (
                  <FieldError className="text-xs">
                    {fieldErrors.password}
                  </FieldError>
                ) : null}
              </Field>

              <Field
                data-invalid={fieldErrors.confirmPassword ? "true" : undefined}
              >
                <FieldLabel htmlFor="confirmPassword" className="text-[13px]">
                  Confirm Password
                </FieldLabel>
                <div className="relative">
                  <Lock
                    aria-hidden="true"
                    className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-gray-400"
                  />
                  <Input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    autoComplete="new-password"
                    placeholder="Confirm your password"
                    value={values.confirmPassword}
                    onChange={handleChange}
                    aria-invalid={
                      fieldErrors.confirmPassword ? true : undefined
                    }
                    className={inputClass(
                      Boolean(fieldErrors.confirmPassword)
                    )}
                  />
                </div>
                {fieldErrors.confirmPassword ? (
                  <FieldError className="text-xs">
                    {fieldErrors.confirmPassword}
                  </FieldError>
                ) : null}
              </Field>

              <Button
                type="submit"
                disabled={loading || googleLoading}
                className="mt-2 !h-10 w-full !text-[13px] !font-medium !bg-[#1d9cbf] hover:!bg-[#1889ab]"
              >
                {loading ? (
                  <>
                    <LoaderCircle className="size-4 animate-spin" />
                    Creating Account...
                  </>
                ) : (
                  "Create Account"
                )}
              </Button>

              <div className="flex items-center gap-4 text-xs text-gray-400">
                <span className="h-px flex-1 bg-gray-200" />
                Or sign up with
                <span className="h-px flex-1 bg-gray-200" />
              </div>

              <Button
                type="button"
                variant="outline"
                onClick={handleGoogleSignUp}
                disabled={loading || googleLoading}
                className="!h-10 w-full gap-2 !border-gray-200 !bg-white !text-[13px] !font-medium !text-gray-800 hover:!bg-gray-50"
              >
                {googleLoading ? (
                  <LoaderCircle className="size-4 animate-spin text-gray-400" />
                ) : (
                  <GoogleIcon />
                )}
                Sign Up With Google
              </Button>
            </form>
          </CardContent>
        </Card>

        <p className={`mt-5 text-[13px] text-gray-500`}>
          Already have an account?{" "}
          <Link
            href="/login"
            className={`${TEAL} font-medium hover:underline`}
          >
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}
