import React,{ Fragment } from 'react';
import {Link, NavLink} from "react-router-dom";
import styled from "styled-components";
const Container=styled.div`
    display: grid;
  grid-template-columns: 1fr 1fr ;
  gap: 40px;
`
const PlaylistItem = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 16px;
  flex: 1;
  -webkit-box-shadow: 0px 0px 5px 3px rgba(255, 255, 255, 0.2);
  box-shadow: 0px 0px 5px 3px rgba(255, 255, 255, 0.1);
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
  .playlist-item {
    text-decoration: none;
  }
`;
const PlaylistImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 5px;
`;
const PlaylistTitle = styled.p`
  color: #fff;
  font-size: 16px;
  display: block;
  font-weight: 700;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  overflow: hidden;
  word-wrap: break-word;
  /* padding: 10px 0; */
`;

const PlaylistShowLibrary = ({ playlists }) => {
    return (

        <Fragment>
            <Container>
                {playlists.map((playlist) => (
                    <PlaylistItem key={playlist._id}>
                        <Link
                            className="playlist-item"
                            to={`/playlist/${playlist._id}`}
                        >
                            <PlaylistImage src={playlist.image} />
                            <PlaylistTitle> {playlist.name}</PlaylistTitle>
                        </Link>
                    </PlaylistItem>
                ))}
            </Container>

        </Fragment>

    );
};

export default PlaylistShowLibrary;