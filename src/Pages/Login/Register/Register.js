import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../constexts/AuthProvider";

const Register = () => {
  const {createUser} = useContext(AuthContext);
  const { register, formState: { errors }, handleSubmit } = useForm();

  const handelRegister = (data) => {
    console.log(data);

   createUser(data.email, data.password)
   .then(result => {
    const user = result.user;
    console.log(user)
   })
   .catch(err => {
    console.log(err.message)
   })



  };
  return (
    <div className="h-[850px] flex items-center justify-center">
      <div className="w-96 p-8 shadow-xl">
        <h3 className="text-xl font-bold text-center">Signup</h3>
        <form onSubmit={handleSubmit(handelRegister)}>

          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Full Name</span>
            </label>
          <input type="text" {...register("fullName",{required: "Provide your name",   })} className="input input-bordered w-full" />
          {errors.fullName && <p role="alert" className="text-red-600">{errors.fullName?.message}</p>}
          </div>

          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Email Address</span>
            </label>
          <input type="email" {...register("email",{ required: "Enter valid email"})} className="input input-bordered w-full" />
          {errors.email && <p role="alert" className="text-red-600">{errors.email?.message}</p>}
          </div>

          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
          <input type="password" {...register("password",{
            required: "Password was required!!",
             minLength: {value: 6, message: "Password must be 6 character"},
             pattern: {value: /^(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
            message: "password must be stronger"
            }
             })} className="input input-bordered w-full" />
          {errors.password && <p role="alert" className="text-red-600">{errors.password?.message}</p>}
          </div>

          <input type="submit" value="Signup" className="w-full btn btn-neutral my-3"/>
        </form>
        <p className="text-center my-3 ">Already have an account <Link to="/login" className="text-secondary">Login Here</Link></p>

        <div className="divider my-4">OR</div>

        <button className="btn btn-outline w-full my-4">continue with google</button>
      </div>
    </div>
  );
};

export default Register;
