import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "@mui/material";
import LinearProgress from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";
import { unwrapResult } from "@reduxjs/toolkit";
import { useSnackbar } from "notistack";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import styled from "styled-components";
import * as yup from "yup";
import InputField from "../../components/FormControler/InputField/InputField";
import PasswordField from "../../components/FormControler/PasswordField/PasswordField";
import { login } from "../../redux/userSlice/userSlice";
const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  text-align: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  margin-top: 10px;
  max-width: 450px;
`;
const Topbar = styled.div`
  padding: 40px 0 32px;
`;
const Logo = styled.h1``;
const Title = styled.h1`
  margin-top: 40px;
`;
const Form = styled.div``;

const Bottom = styled.div`
  margin-top: 20px;
`;
const Link = styled.a``;
const LinkLogin = styled.span``;
const schema = yup
  .object()
  .shape({
    username: yup
      .string()
      .required("Tên tài khoản không được để trống")
      .min(2, "Tên tài khoản quá ngắn")
      .max(25, "Tên tài khoản "),
    password: yup
      .string()
      .required("Mật khẩu không được để trống")
      .min(6, "Mật khẩu tối thiểu 6 ký tự")
      .max(25, "Mật khẩu tối đa 25 ký tự"),
  })
  .required();

const Login = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const form = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
    resolver: yupResolver(schema),
  });
  const handleSubmit = async (data) => {
    try {
      const action = await login(data);
      const resultAction = await dispatch(action);
      const user = unwrapResult(resultAction);
      navigate("/home");
    } catch (error) {
      enqueueSnackbar(error.message, { variant: "error" });

      navigate("/login");
    }
  };
  const { isSubmitting } = form.formState;

  return (
    <Container>
      <Wrapper>
        <Topbar>
          <Typography variant="h3">Music Life</Typography>
          <Title>Để tiếp tục, hãy đăng nhập vào Music Life.</Title>
        </Topbar>
        <Form>
          <form onSubmit={form.handleSubmit(handleSubmit)}>
            {isSubmitting && (
              <LinearProgress
                sx={{ width: "100%", color: "grey.500" }}
                color="secondary"
              />
            )}

            <InputField name="username" label="Tên tài khoản" form={form} />

            <PasswordField name="password" label="Mật khẩu" form={form} />
            <Button
              sx={{ mt: 5, p: 2, width: "50%", borderRadius: "500px" }}
              disabled={isSubmitting}
              type="submit"
              variant="contained"
              color="inherit"
            >
              ĐĂNG Nhập
            </Button>
          </form>
        </Form>
        <Bottom>
          <LinkLogin>Bạn chưa có tài khoản ?</LinkLogin>
          <Link href="/register">Đăng ký</Link>
        </Bottom>
      </Wrapper>
    </Container>
  );
};

export default Login;
