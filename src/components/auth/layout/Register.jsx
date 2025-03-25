import React, { useContext } from 'react';
import{useForm} from "react-hook-form";
import { AuthContext } from '../../../provider/AuthProvider';
import { Link } from 'react-router-dom';



const Register = () => {
  const{register,handleSubmit,watch,formState:{errors}} =useForm();


  const createUser=AuthContext;

  const onSubmit=data=>{
    console.log(data);
    createUser(data.email,data.password)
    .then(result=>{
      const loggedUser =result.user;
      console.log(loggedUser);
    })
  };
    return (
      <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Register  now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
            quasi. In deleniti eaque aut repudiandae et a id nisi.
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input type="name"{...register("name")} name="name" placeholder="name" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" {...register("email")}  name="email" placeholder="email" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password"
              {...register("password")}
              name="password" placeholder="password" className="input input-bordered" required />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
              </label>
            </div>
            <div className="form-control mt-6">
             <Link to='/dashboard'> <input className="btn btn-primary" type="submit" value="register" /></Link>
              
            </div>
          </form>
          <p><small>Already have account?<Link to="/auth/login">please login</Link ></small></p>
        </div>
      </div>
    </div>
    );
};

export default Register;