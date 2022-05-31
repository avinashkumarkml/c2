
import { useNavigate } from "react-router-dom"
export const Home = () => {
    const navigate = useNavigate() ;
    return (
        <div>
            <h3>For New Registration</h3>
            <button onClick={() => navigate("/registration/one")}>New Registration</button>
        </div>
    )
}
