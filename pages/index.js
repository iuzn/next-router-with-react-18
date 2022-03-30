import { useRouter } from 'next/router'
import {useEffect, useState} from "react";

export default function Home() {
    const router = useRouter()

    const [isReady, setIsReady] = useState(router.isReady)
    const [hasMounted, setHasMounted] = useState(false)

    // Set router.isReady when the page has mounted
    useEffect(() => {
        setIsReady(router.isReady)
    }, [router])

    // Blocking hydration warning
    useEffect(() => {
        setHasMounted(true)
    }, [])
    if (!hasMounted) {
        return null
    }

    const addQuery = (query) => {
        router.push({
            pathname: '/',
            query: query ? {query: query} : null
        }).then(()=>router.reload())
    }
    return (
        <div>
        <h2>{ isReady ? "Route is ready" : "Route is not ready"}</h2>
        <button onClick={()=>addQuery("1okok3mkn3mjf7f")}>Add query to url</button>
        <button onClick={()=>addQuery(null)}>Delete query from url</button>
        </div>
    )
}
