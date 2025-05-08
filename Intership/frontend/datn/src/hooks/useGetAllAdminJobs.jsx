import { setAllAdminJobs } from '@/redux/jobSlice'
import { JOB_API_URL_ENDPOINT } from '../components/utils/constant'
import axios from 'axios'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

const useGetAllAdminJobs = () => {
    const dispatch = useDispatch();
    useEffect(()=>{
        const fetchAlAdminJobs = async () => {
            try {
                const res = await axios.get(`${JOB_API_URL_ENDPOINT}/getadminjob`,{withCredentials:true});
                if(res.data.success){
                    console.log("✅ Admin jobs fetched: ", res.data.jobs);
                    dispatch(setAllAdminJobs(res.data.jobs));
                }
            } catch (error) {
                console.log(error);
            }
        }
        fetchAlAdminJobs();
    },[])
}

export default useGetAllAdminJobs