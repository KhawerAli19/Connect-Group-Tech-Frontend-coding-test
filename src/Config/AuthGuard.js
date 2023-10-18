import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function AuthGuard(props) {
    const { Component } = props;
    const navigate = useNavigate();

    useEffect(() => {

        navigate("/");


    });

    return (
        <div>
            <Component />
        </div>
    );
}
export default AuthGuard;