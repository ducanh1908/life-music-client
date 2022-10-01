import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "@mui/material";
import LinearProgress from "@mui/material/LinearProgress";
import { unwrapResult } from "@reduxjs/toolkit";
import { useSnackbar } from "notistack";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import styled from 'styled-components';
import * as yup from "yup";
import PasswordField from "../../components/FormControler/PasswordField/PasswordField";
import { register } from "../../redux/userSlice/userSlice";
import Typography from '@mui/material/Typography';
const Container = styled.div`
width: 100%;
height: 100vh;
display: flex;
text-align: center;
justify-content: center;
`
const Wrapper = styled.div`
margin-top: 10px;
max-width: 450px;
`
const Topbar = styled.div`
padding: 40px 0 32px;
`
const Title = styled.h1`
margin-top:40px;
`
const Form = styled.div`
    
`

const schema = yup
    .object()
    .shape({
        password: yup.string().required("Mật khẩu không được để trống")
            .min(6, "Mật khẩu tối thiểu 6 ký tự")
            .max(25, "Mật khẩu tối đa 25 ký tự"),
        confirmPassword: yup.string()
            .required("Nhập lại mật khẩu của bạn")
            .oneOf([yup.ref("password")],"Mật khẩu không khớp"),
    })
    .required();

const UpdatePassword = (props) => {
    const dispatch = useDispatch();
    const { enqueueSnackbar } = useSnackbar();
    const form = useForm({
        defaultValues: {
            oldpassword: "",
            newpassword: "",
            confirmPassword: "",
        },
        resolver: yupResolver(schema),
    });

    const handleSubmit = async (data) => {
        try {
            const action = await register(data);
            const resultAction = await dispatch(action);
            const user = unwrapResult(resultAction);

            enqueueSnackbar("Đổi mật khẩu thành công", { variant: "success" });
        } catch (error) {
            enqueueSnackbar(error, { variant: "error" });
        }
    };
    const { isSubmitting } = form.formState;

    return (
        <Container>
            <Wrapper>
                <Topbar>
                    <Typography variant="h3">
                        Music Life
                    </Typography>
                    <Title>Thay đổi mật khẩu</Title>
                </Topbar>
                <Form>

                    <form onSubmit={form.handleSubmit(handleSubmit)}>
                        {isSubmitting && (
                            <LinearProgress
                                sx={{width:'100%',color: "grey.500" }}
                                color="secondary"

                            />
                        )}
                        <PasswordField name="oldpassword" label="Mật khẩu cũ " form={form} />
                        <PasswordField name="newpassword" label="Mật khẩu mới" form={form} />
                        <PasswordField
                            name="confirmPassword"
                            label="Nhập lại mật khẩu"
                            form={form}
                        />
                        <Button sx={{ mt:5,p:2,width:'50%' ,borderRadius:'500px'}} disabled={isSubmitting} type="submit"  variant="contained" color="inherit">
                            Lưu
                        </Button>
                    </form>
                </Form>
            </Wrapper>
        </Container>
    );
};

export default UpdatePassword;
