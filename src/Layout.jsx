import { Outlet } from "react-router-dom";

const Layout = () => {
    return(
        <div className = "container-fluid">
            <div className = "row justify-content-center mt-3">
                <div className = "text-center">
                    <p className = "lead">React With Firebase Authentication</p>
                </div>
                <Outlet />
            </div>
        </div>
    )
}

export default Layout