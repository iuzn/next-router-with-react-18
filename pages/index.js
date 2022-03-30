import { useRouter } from 'next/router'
import {useEffect, useState} from "react";

export default function Home() {
 const router = useRouter()
    console.log(router.isReady)
    const [isReady, setIsReady] = useState(null)
    const [hasMounted, setHasMounted] = useState(false)

    // Blocking hydration warning for SSR
    useEffect(() => {
        setIsReady(router.isReady)
    }, [router.isReady])
    useEffect(() => {
        setHasMounted(true)
    }, [])
    if (!hasMounted) {
        return null
    }

  return (
      <div>
       <span>
        { isReady ? "Route is ready":"Route is not ready"}
       </span>
          <br/>
          <button onClick={()=>router.push("/?id=random032mf").then(()=>router.reload())}>Add query to url</button>
          <br/>
          <button onClick={()=>router.push("/").then(()=>router.reload())}>Delete query from url</button>
      </div>
  )
}
