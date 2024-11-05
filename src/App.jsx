import "./App.css";
import { useState } from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import GoogleLoginButton from "./components/GoogleAuth";

function App() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [image, setImage] = useState("");
    const [isActive, setIsActive] = useState(false);

    return (
        <>
            {/* no clientId, insira o seu ID da API */}
            <GoogleOAuthProvider clientId="#">
                <GoogleLoginButton
                    setName={setName}
                    setEmail={setEmail}
                    setImage={setImage}
                    setIsActive={setIsActive}
                />
            </GoogleOAuthProvider>

            {isActive ? (
                <div>
                    <h2>Bem-vindo, papai!</h2>
                    <h2>Nome: {name}!</h2>
                    <p>Email: {email}</p>
                    <img src={image} alt="Profile Picture" />
                </div>
            ) : (
                <div>
                    <h1>Login with Google</h1>
                </div>
            )}
        </>
    );
}

export default App;
