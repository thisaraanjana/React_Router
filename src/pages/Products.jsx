import { useParams } from "react-router-dom"

export default function Products(){
    const {id} =useParams()
    return <div>
        <h1>products list</h1> 
        <p>showing product with id:{id}</p>

    </div>
}