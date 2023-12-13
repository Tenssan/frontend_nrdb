import Container from "@/app/components/Container";
import FormWrap from "@/app/components/FormWrap";
import ValidationForm from "@/app/components/pass-recovery/ValidationForm";


const PasswordRecoveryValidationPage = () => {
  return (
    
      <Container>
        <FormWrap>
          <ValidationForm />
        </FormWrap>
      </Container>
   
  );
};

export default PasswordRecoveryValidationPage;
