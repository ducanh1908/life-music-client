import React from 'react'
import styled from 'styled-components';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import FavoriteIcon from '@mui/icons-material/Favorite';
const Container = styled.div`
height:100vh;
position: fixed;
left: 0;
margin-top:70px;
z-index: 1
`;
const Wrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;
const Menu = styled.div`
display: flex;
flex-direction: column;
`
const MenuItem = styled.div`
display:flex;
padding: 8px 0;
`

const ItemIcon = styled.div``
const ItemDesc = styled.p`
margin-left : 10px;
font-size: 16px;
font-weight: 500;

`
const Hr = styled.div`
border: 1px solid black;
width: 80%;
`

const CreateList = styled.div`

`
const ListTitle = styled.p`
padding: 10px 0;
font-weight: 500;
` 
const Sidebar = () => {
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

export default Sidebar