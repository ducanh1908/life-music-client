import React, {useState} from 'react';
import styled from "styled-components";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Button from "../Button/button";
import LinearProgress from "@mui/material/LinearProgress";
import InputField from "../FormControler/InputField/InputField";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
const Container=styled.div`
  width: 30rem;
  min-height: 30rem;
  background-color: grey;
  border-radius: 1rem;
  position: fixed;
  top: calc(50% - 20rem);
  left: calc(50% - 20rem);
  z-index: 200;

  .close_btn {
    position: absolute;
    right: 0%;
    top: 0%;

    svg {
      width: 2rem;
      height: 2rem;
      color: var(--white);
    }
  }

  .form_container {
    h1 {
      font-size: 1.8rem;
      font-weight: 500;
      margin: 2rem;
      margin-bottom: 0;
    }

    .input_container {
      padding: 0.5rem 1rem;
    }
  }
`
const Form = styled.div`
margin-top:20px;
width:100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
.form-input {
    width: 90%;
}
`
const InforAvatar=styled.div`
  width: 150px;
  height: 150px;
  overflow: hidden;
  border-radius: 50%;
  position: relative;
  margin: 15px auto;
  border: 1px solid #ddd;
  cursor: pointer;
`
const InfoImg=styled.img`
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
`
const InforSpan=styled.span`
  position: absolute;
  bottom: -15%;
  left: 0;
  width: 100%;
  height: 50%;
  text-align: center;
  color: orange;
  transition: 0.3s ease-in-out;
  background: #fff5;
`
const Input = styled.input`
  position: absolute;
  top:0;
  left: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
  opacity: 0;
`
const Logo=styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-content: center;
  padding: 10px;
  
`
const PlaylistModel = ({ closeModel, playlist }) => {
    const [data, setData] = useState({
        name: "",
        desc: "",
        img: "",
    });
    const [avatar, setAvatar] = useState('');
    const [isFetching, setIsFetching] = useState(false);
    const form = useForm({
        defaultValues: {
            fullname: '',
            email: '',
            address: '',
            phone: '',
        },
        // resolver: yupResolver(schema),
    });
    const changeAvatar = (e) => {
        const file = e.target.files[0]
        setAvatar(file)
    }
    const { isSubmitting } = form.formState;
    return (
        <Container>
            <IconButton className={'close_btn'} onClick={closeModel}>
                <CloseIcon />
            </IconButton>        
            <Form>
                <form  className="form-input">
                    {isSubmitting && (
                        <LinearProgress
                            sx={{width:'100%',color: "grey.500" }}
                            color="secondary"

                        />
                    )}
                    <Logo>
                        <InforAvatar>
                            <InfoImg src={avatar ? URL.createObjectURL(avatar) : ''}
                                     style={{filter:'invert(0)'}}
                                     alt="avatar" />
                            <InforSpan >
                                <i>
                                    <CameraAltIcon />
                                </i>
                                <p >Thay ảnh</p>
                                <Input type="file" name="file" id="file_up"
                                       accept="image/*" onChange={changeAvatar}/>
                            </InforSpan>
                        </InforAvatar>
                       
                    </Logo>

                    <InputField name="name" label="Nhập tên playlist" form={form}/>

                    <InputField name="desc" label="Nhập mô tả" form={form} />
             
                   
                </form>
                 <Button sx={{ mt:5,p:2,width:'50%' ,borderRadius:'500px', color:"#fff"}} disabled={isSubmitting} type="submit"  variant="contained" color="inherit">
                      Lưu
                  </Button>
            </Form>
        </Container>
    );
};

export default PlaylistModel;