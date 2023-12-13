import Container from "@/app/components/Container";
import FormWrap from "@/app/components/FormWrap";
import ChangePasswordForm from "@/app/components/pass-recovery/ChangePasswordForm";

const ChangePasswordPage = () => {
  return (
      <Container>
        <FormWrap>
          <ChangePasswordForm />
        </FormWrap>
      </Container>
  );
};

export default ChangePasswordPage;
