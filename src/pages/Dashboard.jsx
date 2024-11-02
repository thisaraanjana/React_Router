import { Link,Outlet } from "react-router-dom"
export default function Dashboard(){
    return<div>This is Dashboard page
        <Link to="profile">profile</Link>
        <Link to ="setting">setting</Link>
        <Outlet/>
    </div>
}