import {Link} from "react-router-dom"; // Import Link component
import "./index.css"
import sacarrow from "../../assets/Scarecrow.png"


const NotFound = () => {
    return (
        <div className="h-screen  flex items-center justify-center flex-col">
            <h1 className="nav">404 Not found</h1>;
            <div className="display">
                <div className="display__img">
                    <img src={sacarrow} alt="404-Scarecrow"/>
                </div>
                <div className="display__content">
                    <h2 className="display__content--info">I have bad news for you</h2>
                    <p className="display__content--text">
                        The page you are looking for might be removed or is temporarily
                        unavailable
                    </p>
                    <Link to="/" className="btn">Back to homepage</Link>
                </div>
            </div>

        </div>
    );
};

export default NotFound;
