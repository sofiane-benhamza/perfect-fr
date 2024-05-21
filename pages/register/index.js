import Header from "@/components/root/Header";
import Form from "@/components/register/Form";
const Login = ({warning, setWarning}) => {
    return (
        <div className="d-flex column justify-content-center align-items-center min-h-100">
            <Header />
            <Form warning={warning} setWarning={setWarning} />
        </div>

    )
}

export default Login;