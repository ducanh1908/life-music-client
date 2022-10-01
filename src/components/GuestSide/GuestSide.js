import React from 'react'
import styled from 'styled-components';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import FavoriteIcon from '@mui/icons-material/Favorite';
const Container = styled.div`
height:100vh;
left: 0;
margin-top:70px;
border-radius: 5px;
background: linear-gradient(rgba(255,255,255,0.1), rgba(255,255,255,0.1)) ;
`;
const Wrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;
const Menu = styled.div`
margin-top: 20px;
display: flex;
flex-direction: column;
color: #b3b3b3;
`
const MenuItem = styled.div`
display:flex;
padding: 8px 0;
cursor: pointer;
&:hover {
  color: #fff
}

`

const ItemIcon = styled.div``
const ItemDesc = styled.p`
margin-left : 10px;
font-size: 16px;
font-weight: 500;

`
const Hr = styled.div`
border: 1px solid #a7a7a7;
width: 80%;

`

const CreateList = styled.div`
color: #b3b3b3;
cursor: pointer;
&:hover {
  color: #fff
}
`
const ListTitle = styled.p`
padding: 10px 0;
font-weight: 500;
` 
const  GuestSide = () => {
  return (
    <Container>
    <Wrapper>
    <Menu>

      <MenuItem>
        <ItemIcon> <LibraryMusicIcon /></ItemIcon>
          <ItemDesc>Thư viện</ItemDesc>
      </MenuItem>
      <MenuItem>
        <ItemIcon> <ControlPointIcon /></ItemIcon>
          <ItemDesc>Tạo playlist</ItemDesc>
      </MenuItem>
      <MenuItem>
        <ItemIcon><FavoriteIcon /></ItemIcon>
          <ItemDesc>Bài hát đã thích</ItemDesc>
      </MenuItem>
    </Menu>
    <Hr />
    <CreateList>
      <ListTitle> Danh sách bài hát của tôi</ListTitle>
    </CreateList>
    <CreateList>
      <ListTitle> Danh sách bài hát của tôi</ListTitle>
    </CreateList>
    <CreateList>
      <ListTitle> Danh sách bài hát của tôi</ListTitle>
    </CreateList>
    <CreateList>
      <ListTitle> Danh sách bài hát của tôi</ListTitle>
    </CreateList>
    <CreateList>
      <ListTitle> Danh sách bài hát của tôi</ListTitle>
    </CreateList>
    </Wrapper>
    </Container>
  )
}

export default GuestSide