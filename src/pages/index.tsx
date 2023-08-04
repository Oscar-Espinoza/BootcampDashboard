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

export default function Home() {
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
                <StyleButton type="submit" disabled>
                <Link href="/dashboard">
                  Login
                </Link>
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
