import Header from "@/components/root/Header";
import Form from "@/components/login/Form";
const Login = ({warning, setWarning, token, setToken}) => {
    return (
        <div className="d-flex column justify-content-center align-items-center min-h-100">
            <Header />
            <Form warning={warning} setWarning={setWarning} setToken={setToken} />
        </div>

    )
}

export default Login;