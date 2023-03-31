import SignInForm from "../components/auth/SignInForm";
import { FallbackPageWrapper } from "../components/FallbackPageWrapper";
import Layout from "../components/Layout";

const SignIn = () => {
  return (
    <FallbackPageWrapper>
      <Layout>
        <SignInForm />
      </Layout>
    </FallbackPageWrapper>
  );
};
export default SignIn;
