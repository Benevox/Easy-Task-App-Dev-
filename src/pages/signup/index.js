import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logoblue.png";
import facebook from "../../assets/images/facebook.png";
import google from "../../assets/images/google.png";
import signup from "../../logic/signup";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../../contexts/AuthContext";

function SignUp() {
  const navigate = useNavigate();
  const { signInNewUser } = useContext(AuthContext);

  const formSchema = Yup.object().shape({
    firstName: Yup.string().required("first name is required"),
    lastName: Yup.string().required("last name is required"),
    email: Yup.string().email().required("email is required"),
    dob: Yup.date().required("date of birth is required"),
    category: Yup.string().required("catergory is required"),
    password: Yup.string()
      .min(8, "password must be 8 characters long")
      .max(32)
      .required("password is required"),
    confirmPassword: Yup.string()
      .required("confirm password")
      .oneOf([Yup.ref("password")], "password does not match"),
  });

  const { register, handleSubmit, formState, reset } = useForm(
    yupResolver(formSchema)
  );
  const onSubmit = ({ confirmPassword, ...data }) => {
    signup({ ...data }, signInNewUser, navigate);
  };

  return (
    <div className="container bg-white w-screen p-5">
      <div className="w-100 p-5 grid place-items-end">
        <img src={logo} alt="Easytask logo" />
      </div>
      <div className="mt-24">
        <h1 className="text-darkest text-2xl font-bold">Sign Up</h1>
        <p className="text-dark-light">Create an account to get started</p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("firstName")}
          type="text"
          className="min-w-full h-14 border rounded-xl mt-9 p-3 border-stroke"
          placeholder="First Name"
        />
        <input
          {...register("lastName")}
          type="text"
          className="min-w-full h-14 border rounded-xl mt-9 p-3 border-stroke"
          placeholder="Last Name"
        />
        <input
          {...register("email")}
          type="email"
          className="min-w-full h-14 border rounded-xl mt-9 p-3 border-stroke"
          placeholder="Email"
        />
        <input
          {...register("dob")}
          type="date"
          className="min-w-full h-14 border rounded-xl mt-9 p-3 border-stroke"
          placeholder="Date of Birth"
        />
        <select
          {...register("category")}
          className="min-w-full h-14 border rounded-xl mt-9 p-3 border-stroke text-soft-dark"
        >
          <option defaultValue={"Category"}>Category</option>
          <option value={"customer"}>Customer</option>
          <option value={"Tasker"}>Tasker</option>
        </select>
        <input
          {...register("password")}
          type="password"
          className="min-w-full h-14 border rounded-xl mt-6 p-3 border-stroke"
          placeholder="Password"
        />
        <input
          {...register("confirmPassword")}
          type="password"
          className="min-w-full h-14 border rounded-xl mt-6 p-3 border-stroke"
          placeholder="Confirm Password"
        />
        <div className="min-w-full mt-4 flex">
          <input type={"checkbox"} />
          <p className="ml-2 text-soft-dark">
            By signing up, i confirm, I accept the{" "}
            <Link className="text-facebook">Terms</Link> &{" "}
            <Link className="text-facebook">Conditions</Link> &{" "}
            <Link className="text-facebook">community guideline</Link> Privacy
            policy.
          </p>
        </div>
        <button
          type={"submit"}
          className="w-100 h-14 bg-primary-100 rounded-xl mt-7 grid place-items-center min-w-full text-basic-white font-bold"
          placeholder="SignUp"
        >
          SignUp
        </button>
      </form>
      <div className="min-w-full mt-2 flex justify-center">
        <span className="text-soft-dark">Already have an account?</span>
        <span
          className="font-bold ml-1 text-facebook cursor"
          onClick={() => {
            navigate("/login");
          }}
        >
          Log in
        </span>
      </div>
      <fieldset class="border-t border-soft-dark mt-3">
        <legend class="mx-auto px-4 text-soft-dark">or Continue with</legend>
      </fieldset>
      <div className="grid grid-cols-2 gap-2 my-8">
        <Link>
          <img src={facebook} alt="facebook logo" />
        </Link>
        <Link>
          <img src={google} alt="google logo" />
        </Link>
      </div>
    </div>
  );
}

export default SignUp;
