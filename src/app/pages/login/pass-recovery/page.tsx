import Container from "@/app/components/Container";
import FormWrap from "@/app/components/FormWrap";
import RecoveryForm from "@/app/components/pass-recovery/RecoveryForm";

const PasswordRecoveryPage = () => {
  return (

      <Container>
        <FormWrap>
          <RecoveryForm />
        </FormWrap>
      </Container>
    
  );
};

export default PasswordRecoveryPage;
