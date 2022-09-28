import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import * as yup from "yup";
import InputField from './../../components/FormControler/InputField/InputField';
import { register } from './../../service/userService';
import PasswordField from './../../components/FormControler/PasswordField/PasswordField';


const schema = yup.object().shape({
    username: yup.string().required('Tên tài khoản không được để trống').min(2,"Tên tài khoản quá ngắn").max(25,'Tên tài khoản '),
    email: yup.string().email('Email không đúng định dạng').required('Email không được để trống'),
    password: yup.string().required('Mật khẩu không được để trống').min(6,'Mật khẩu tối thiểu 6 ký tự').max(25,"Mật khẩu tối đa 25 ký tự"),
    confirmPassword: yup.string().required('Nhập lại mật khẩu của bạn').oneOf([yup.ref('password')],'Mật khẩu không khớp'),
    phoneNumber: yup.string().required('Nhập số điện thoại')
  
  }).required();


const Register = (props) => {
const user = useSelector(state => state.user);
const dispatch = useDispatch();
console.log(user);

const form = useForm( {
        defaultValues: {
        username :'',
        email:'',
        password :'',
        confirmPassword :'',
        phoneNumber :'',
        },
        resolver: yupResolver(schema)
    });
const handleSubmit = (data) => { 
  console.log(data);
register(dispatch, data)

}
  return (
    <div >
        <h1>Đăng ký</h1>
        <form onSubmit={form.handleSubmit(handleSubmit)} >    
            <InputField name="username" label="Tên tài khoản" form={form}/>
            <InputField name="email" label="Nhập email của bạn" form={form}/>
            <PasswordField name="password" label="Mật khẩu" form={form}/>
            <PasswordField name="confirmPassword" label="Nhập lại mật khẩu" form={form}/>
            <InputField name="phoneNumber" label="Nhập số điện thoại" form={form}/> 
            <Button type='submit' variant='contained' >Đăng Ký</Button>
        </form>

    </div>
  )
}

export default Register