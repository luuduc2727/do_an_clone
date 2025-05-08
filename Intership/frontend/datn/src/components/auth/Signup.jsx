import React from 'react'
import Navbar from '../shared/Navbar'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { Label } from '../ui/label'
import { RadioGroup, RadioGroupItem } from '../ui/radio-group'
import {Link} from "react-router-dom"
import { useState } from 'react'
import { toast } from 'sonner'
import axios from 'axios'
import { USER_API_END_POINT } from '../utils/constant'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setLoading } from '../../redux/authSlice'
import { Loader2 } from 'lucide-react'
const Signup = () => {
  const [input, setInput] = useState({
    fullname:"",
    email:"",
    phoneNumber:"",
    password:"",
    role:"",
    file:""
  });
  const {loading} = useSelector(store => store.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const changeEventHander = (e) => {
    setInput({...input, [e.target.name]:e.target.value})
  };

  const changeFileHandle = (e) => {
    setInput({...input, file:e.target.files?.[0]})
  }

  const submitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("fullname", input.fullname);
    formData.append("email", input.email);
    formData.append("phoneNumber", input.phoneNumber);
    formData.append("password", input.password);
    formData.append("role", input.role);
    if (input.file) {
      formData.append("file", input.file);
    }
    try {
      dispatch(setLoading(true));
      const res = await axios.post(`${USER_API_END_POINT}/register`, formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        },
        withCredentials: true
      });
      if(res.data.success) {
        navigate("/login");
        toast.success(res.data.message);
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(setLoading(false));
    }
  }
  return (
    <div>
      <Navbar />
      <div className='flex items-center justify-center max-w-7xl mx-auto'>
        <form onSubmit={submitHandler} className='w-1/2 border border-gray-200 rounded-md p-4 my-10'>
          <h1 className='font-bold text-xl mb-5'>SignUp</h1>
          <div className='my-2'>
            <Label className='my-2'>FullName</Label>
            <Input
              type="text"
              value={input.fullname}
              onChange={changeEventHander}
              name="fullname"
              placeholder="Enter your fullname"
            />
          </div>
          <div className='my-2'>
            <Label className='my-2'>Email</Label>
            <Input
              type="email"
              value={input.email}
              onChange={changeEventHander}
              name="email"
              placeholder="Enter your email"
            />
          </div>
          <div className='my-2'>
            <Label className='my-2'>Phone Number</Label>
            <Input
              type="text"
              value={input.phoneNumber}
              onChange={changeEventHander}
              name="phoneNumber"
              placeholder="Enter your phone number"
            />
          </div>
          <div className='my-2'>
            <Label className='my-2'>Password</Label>
            <Input
              type="password"
              value={input.password}
              onChange={changeEventHander}
              name="password"
              placeholder="Enter your password"
            />
          </div>
          <div className='flex items-center justify-between'>
            <RadioGroup className='flex items-center gap-4 my-5'>
              <div className="flex items-center space-x-2">
                <Input
                  type="radio"
                  name="role"
                  value="student"
                  checked={input.role === "student"}
                  onChange={changeEventHander}
                  className="cursor-pointer"
                />
                <Label htmlFor="r1">Student</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Input
                  type="radio"
                  name="role"
                  value="recruiter"
                  checked={input.role === "recruiter"}
                  onChange={changeEventHander}
                  className="cursor-pointer"
                />
                <Label htmlFor="r2">Recruiter</Label>
              </div>
            </RadioGroup>
            <div className='flex items-center gap-2'>
                <Label>Profile</Label>
                <Input
                  type="file"
                  accept="image/*"
                  onChange={changeFileHandle}
                  className="cursor-pointer"
                />
            </div>
          </div> 
          {loading ? <Button className='w-full my-4 cursor-pointer'   > <Loader2 className='mr-2 w-4 h-4 animate-spin' /> Please wait...</Button> : <Button type="submit" className="w-full my-4 cursor-pointer">Sign up</Button>}
          <span className="text-sm">Already have account? <Link to="/login" className='text-blue-600'>Login</Link></span>
        </form>
      </div>
    </div>

  )
}

export default Signup