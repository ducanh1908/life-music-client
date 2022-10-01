import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { Typography } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
const Container = styled.div`
  width: 70%;
  height: 100vh;
  padding: 50px;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.8)
    ),
    url("https://images.unsplash.com/photo-1488376739361-ed24c9beb6d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80");
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`;

const Desc = styled.h2``;
const InfoItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #333;
`;
const Title = styled.p``;

function createData(name, calories) {
  return { name, calories };
}

const Information = () => {
  const user = useSelector((state) => state.user.user);

  const rows = [
    createData("Tên người dùng", `${user.fullname}`),
    createData("Email", `${user.email}`),
    createData("Địa chỉ", `${user.address}`),
    createData("Số điện thoại", `${user.phone}`),
  ];
  return (
    <Container>
      <Desc>
        <Typography variant="h4" component="h2">Tổng Quan Tài Khoản</Typography>
        <Typography variant="h5" sx={{ marginBottom: '30px '}}>
          Hồ Sơ
        </Typography>
      </Desc>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650, height: 300 }} aria-label="caption table">
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="left">{row.calories}</TableCell>
                <TableCell align="left">{row.fat}</TableCell>
                <TableCell align="left">{row.carbs}</TableCell>
                <TableCell align="left">{row.protein}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default Information;
