import React from 'react'
import Navbar from '../shared/Navbar'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { useNavigate } from 'react-router-dom'
import AdminJobsTable from './AdminJobsTable'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import useGetAllAdminJobs from '@/hooks/useGetAllAdminJobs'
import { useState } from 'react'
import { setSearchJobByText } from '@/redux/jobSlice'

const AdminJobs = () => {
    useGetAllAdminJobs()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [input, setInput] = useState("")
    useEffect(() => {
        dispatch(setSearchJobByText(input))
    }, [input])
    return (
        <div>
            <Navbar />
            <div className='max-w-6xl mx-auto my-10'>
                <div className='flex items-center justify-between '>
                    <Input
                        className="w-fit"
                        placeholder="Filter by name"
                        onChange= { (e) => setInput(e.target.value)}
                    />
                    <Button onClick={() => navigate("/admin/jobs/create")} className="">Post new job</Button>
                </div>
                <AdminJobsTable/>
            </div>
        </div>
    )
}

export default AdminJobs