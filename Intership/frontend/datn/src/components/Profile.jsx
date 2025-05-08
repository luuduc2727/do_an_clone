import React from 'react'
import Navbar from './shared/Navbar'
import { Avatar, AvatarImage } from './ui/avatar'
import { Button } from './ui/button'
import { Contact, Mail, Pen } from 'lucide-react'
import { Badge } from './ui/badge'
import { Label } from './ui/label'
import AppliedJobTable from '@/components/AppliedJobTable'
import { useState } from 'react'
import UpdateProfileDialog from '@/components/UpdateProfileDialog'
import { useSelector } from 'react-redux'
import useGetAppliedJobs from '@/hooks/useGetAppliedJobs'

// const skills = ['asdasd', 'asdasdas']
const isResume = true

const Profile = () => {
    useGetAppliedJobs()
    const [open, setOpen] = useState(false)

    const { user } = useSelector(store => store.auth)
    return (
        <div>
            <Navbar />
            <div className='max-w-5xl mx-auto bg-white border border-gray-200 rounded-2xl my-5 p-8'>
                <div className='flex justify-between'>
                    <div className='flex item-center gap-4'>
                        <Avatar className='h-24 w-24'>
                            <AvatarImage src='https://github.com/shadcn.png' alt='profile' />
                        </Avatar>
                        <div>
                            <h1 className='font-medium text-xl'>{user?.fullname}</h1>
                            <p>{user?.profile?.bio}</p>
                        </div>
                    </div>
                    <Button onClick={() => setOpen(true)} className='text-right' variant='outline'><Pen /></Button>
                </div>
                <div className='my-6'>
                    <div className='flex item-center gap-3 my-2'>
                        <Mail />
                        <span>{user?.email}</span>
                    </div>
                    <div className='flex item-center gap-3 my-2'>
                        <Contact />
                        <span>{user?.phoneNumber}</span>
                    </div>
                </div>
                <div className='my-5'>
                    <h1>Skill</h1>
                    <div className='flex item-center gap-1'>
                        {
                            user?.profile?.skills.length !== 0 ? user?.profile?.skills.map((item, index) => <Badge key={index}>{item}</Badge>) : <span>NA</span>
                        }
                    </div>
                </div>

                <div className='grid w-full max-w-sm item-center gap1.5'>
                    <Label className='text-sm font-bold'>Resume</Label>
                    {isResume && (
                        <a
                            target='blank'
                            href={`https://docs.google.com/viewer?url=${encodeURIComponent(user?.profile?.resume)}&embedded=true`}
                            className='text-blue-500 w-full hover:underline cursor-pointer'
                        >
                            {user?.profile?.resumeOriginalName}
                        </a>
                    )}
                </div>
                <div className='max-w-4xl mx-auto bg-white rounded-2xl'>
                    <h1 className='text-lg font-bold'>Applied Jobs</h1>
                    {/* Application table */}
                    <AppliedJobTable />
                </div>
                <UpdateProfileDialog open={open} setOpen={setOpen} />

            </div>
        </div>
    )
}

export default Profile