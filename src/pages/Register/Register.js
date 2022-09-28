import React from 'react'
import InputField from './../../components/FormControler/InputField/InputField';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { Button } from '@mui/material';


const schema = yup.object().shape({
    username: yup.string().required('Tên tài khoản không được để trống').min(2,"Tên tài khoản quá ngắn").max(25,'Tên tài khoản '),
    email: yup.string().email('Email không đúng định dạng').required('Email không được để trống'),
    password: yup.string().required('Mật khẩu không được để trống').min(6,'Mật khẩu tối thiểu 6 ký tự').max(25,"Mật khẩu tối đa 25 ký tự"),
    confirmPassword: yup.string().required('Nhập lại mật khẩu của bạn'),
  
  }).required();


const Register = (props) => {

    const form = useForm( {
        defaultValues: {
        username :'',
        email:'',
        password :'',
        confirmPassword :'',
        },
        resolver: yupResolver(schema)
    });
const handleSubmit = (data) => { 

console.log(data)
}
  return (
    <div >
        <h1>Đăng ký</h1>
        <form onSubmit={form.handleSubmit(handleSubmit)} >    
            <InputField name="username" label="Tên tài khoản" form={form}/>
            <InputField name="email" label="Nhập email của bạn" form={form}/>
            <InputField name="password" label="Mật khẩu" form={form}/>
            <InputField name="confirmPassword" label="Nhập lại mật khẩu" form={form}/>
            <Button type='submit' variant='contained' >Đăng Ký</Button>
        </form>

    </div>
  )
}

export default Register