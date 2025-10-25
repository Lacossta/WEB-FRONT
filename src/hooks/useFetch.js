import { useState, useEffect } from 'react'
import {authFetch, fetch} from "../api/API";
const useFetch = (initialUrl, initialParams = {}, skip = false, auth = false) => {
    const [url, updateUrl] = useState(initialUrl)
    const [params, updateParams] = useState(initialParams)
    const [data, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [hasError, setHasError] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')
    const [refetchIndex, setRefetchIndex] = useState(0)
    const refetch = () => {
        const fetchData = async () => {
            setIsLoading(true)
            try {
                let resp;
                if(auth) {
                    resp = await authFetch(initialUrl)
                } else {
                    resp = await fetch(initialUrl)
                }
                const result = await resp.data
                if (resp.status === 200) {
                    setData(result)
                } else {
                    setHasError(true)
                    setErrorMessage(result)
                }
            } catch (err) {
                setHasError(true)
                setErrorMessage(err.message)
            } finally {
                setIsLoading(false)
            }
        }
        fetchData()
    }
    useEffect(() => {
        const fetchData = async () => {
            if (skip) return
            setIsLoading(true)
            try {
                let resp;
                if(auth) {
                    resp = await authFetch(initialUrl)
                } else {
                    resp = await fetch(initialUrl)
                }
                const result = await resp.data
                if (resp.status === 200) {
                    setData(result)
                } else {
                    setHasError(true)
                    setErrorMessage(result)
                }
            } catch (err) {
                setHasError(true)
                setErrorMessage(err.message)
            } finally {
                setIsLoading(false)
            }
        }
        fetchData()
    }, [url, params, refetchIndex])
    return { data, isLoading, hasError, errorMessage, updateUrl, updateParams, refetch }
}
export default useFetch