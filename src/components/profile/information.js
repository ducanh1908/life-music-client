import React from 'react';
import styled from "styled-components";
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
    return (
        <Container>
            <h1>Tổng Quan Tài Khoản</h1>
            <h3>Hồ Sơ</h3>
            <Menu>
                <Title>
                    Tên người dùng
                </Title>
                <Content>
                    Nguyễn Văn Quyền
                </Content>
            </Menu>
            <Menu>
                <Title>
                    Email
                </Title>
                <Content>
                    q@gmail.com
                </Content>
            </Menu>
            <Menu>
                <Title>
                    Số Điện Thoại
                </Title>
                <Content>
                    99999
                </Content>
            </Menu>
            <Menu>
                <Title>
                    Địa chỉ
                </Title>
                <Content>
                    Hà nội
                </Content>
            </Menu>

        </Container>
    );
};

export default Information;