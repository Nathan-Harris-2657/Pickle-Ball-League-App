import { useEffect } from "react"
import { useState } from "react"

// data
import pickleballFacts from "../data/pickleballfacts"

function PickleballFacts(){
const [index, setIndex] = useState(0)

useEffect(()=>{
    const timer = setInterval(()=>{
        setIndex((prevIndex) => (prevIndex + 1) % pickleballFacts.length)
    },5000);
    return () => clearInterval(timer)
}, [])
    




    return(
        <>
        <div>{pickleballFacts[index]}</div>
        </>
    )
}
export default PickleballFacts