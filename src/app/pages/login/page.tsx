import Container from "@/app/components/Container";
import FormWrap from "@/app/components/FormWrap";
import LoginForm from "../../components/login/LoginForm";//loginform del componente

const LoginLab: React.FC = () => {
    return (
            <Container>
                <FormWrap>
                    <LoginForm />            
                </FormWrap>
            </Container>  
    );
};

export default LoginLab;