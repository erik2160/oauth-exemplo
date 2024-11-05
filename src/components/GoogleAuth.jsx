import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

function GoogleLoginButton({ setIsActive, setName, setEmail, setImage }) {
    return (
        <>
            <GoogleLogin
                onSuccess={(response) => {
                    const decoded = jwtDecode(response?.credential);

                    const { name, email, picture } = decoded;
                    setIsActive(true);
                    setName(name);
                    setEmail(email);
                    setImage(picture);
                }}
            />
        </>
    );
}

export default GoogleLoginButton;
