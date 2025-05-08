import { APPLICATION_API_URL_ENDPOINT } from "@/components/utils/constant";
import { setAllAppliedJobs } from "@/redux/jobSlice";
import axios from "axios"
import { useEffect } from "react"
import { useDispatch } from "react-redux"

const useGetAppliedJobs = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchAppliedJobs = async () => {
            try {
                const res = await axios.get(`${APPLICATION_API_URL_ENDPOINT}/get`, {withCredentials: true});
                console.log(res.data)
                if (res.data.success) {
                    dispatch(setAllAppliedJobs(res.data.application))
                }
            } catch (err) {
                console.log(err)
            };
        }
        fetchAppliedJobs();
    }, [])
}

export default useGetAppliedJobs