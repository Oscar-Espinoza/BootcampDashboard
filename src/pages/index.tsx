import {
  Container,
  FlexRegister,
  FlexSides,
  StyleButton,
  StyleButtonContainer,
  StyleForm,
  StyleFormContainer,
  StyleInput,
  StyleLeftSide,
  StyleRegister,
  StyleRightSide,
  StyleWelcome,
} from "./styles";
import Logo from "../assets/logo";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter()
  return (
    <FlexSides>
      <StyleLeftSide>
        <Container>
          <StyleFormContainer>
            <Logo width={190} height={62} />
            <StyleWelcome>¡Welcome back!</StyleWelcome>
            <StyleForm>
              <StyleInput
                type="text"
                name=""
                placeholder="Username"
              ></StyleInput>
              <StyleInput
                type="text"
                name=""
                placeholder="Password"
              ></StyleInput>
              <StyleButtonContainer>
                <StyleButton type="button" onClick={() => router.push('/dashboard')}>
                  Login
                </StyleButton>
              </StyleButtonContainer>
              <FlexRegister>
                <p>¿Not registered yet?</p>
                <StyleRegister>Create Account</StyleRegister>
              </FlexRegister>
            </StyleForm>
          </StyleFormContainer>
        </Container>
      </StyleLeftSide>
      <StyleRightSide>
        <Logo width={600} height={600} />
      </StyleRightSide>
    </FlexSides>
  );
}
