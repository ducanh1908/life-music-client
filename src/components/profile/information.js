import React from 'react';
import styled from "styled-components";
import { useSelector } from 'react-redux';
const Container = styled.div`
  background-color: whitesmoke;
    width:70%;
  height: 100vh;
`
const Menu = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  width: 100%;
  padding: 10px;
`
const Title = styled.div`
  //display: flex;
  justify-content: start;
  border-top: 2px solid ;
  width: 100%;
  height: 100%;
  padding: 20px;
`
const Content = styled.div`
  //margin-left: 50px;
  //text-decoration: none;
  border-top: 2px solid ;
  width: 100%;
  height: 100%;
  padding: 20px;
  font-size: 20px;
  color: black;
  justify-content:start;
`
const Information = () => {

    const user = useSelector(state => state.user.user )
    console.log(user.email)
    return (
        <Container>
            <h1>Tổng Quan Tài Khoản</h1>
            <h3>Hồ Sơ</h3>
            <Menu>
                <Title>
                    Tên người dùng
                </Title>
                <Content>
                    {user.fullname}
                </Content>
            </Menu>
            <Menu>
                <Title>
                   Email
                </Title>
                <Content>
                {user.email}
                </Content>
            </Menu>
            <Menu>
                <Title>
                    Số Điện Thoại
                </Title>
                <Content>
                {user.phone}
                </Content>
            </Menu>
            <Menu>
                <Title>
                    Địa chỉ
                </Title>
                <Content>
                {user.address}
                </Content>
            </Menu>

        </Container>
    );
};

export default Information;