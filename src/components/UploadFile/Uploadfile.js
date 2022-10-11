import {getDownloadURL, ref, uploadBytes} from "firebase/storage";
import {storage} from "./firebase";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {v4} from "uuid";
import {
    getUploadedSongs,
    uploadSong,
    deleteSongById,
    loading,
    changeDeleteSongStatus,
    updateSongInfo,
    publicOrPrivate,
} from "../../redux/songSlice/songSlice";
import {useSnackbar} from "notistack";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import "./uploadfile.css";
import styled from "styled-components";
import $ from "jquery";
import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import {getCategories} from "../../redux/cateSlice/cateSlice";
import LoadingButton from "@mui/lab/LoadingButton";
import SaveIcon from "@mui/icons-material/Save";
import {
    addToPlaylist,
    fetchPlaylist,
} from "../../redux/playlistSlice/playlistSlice";
import {imageUpload} from "../../components/UploadFile/avatarUpload";
import Swal from "sweetalert2";
import DetailSong from "../HomeFooter/DetailSong";
import Audios from "../HomeFooter/Audio";

function AddNewFile() {
    const [fileUpload, setFileUpload] = useState(null);
    const [newSong, setNewSong] = useState({});
    const [editSong, setEditSong] = useState({});
    const [open, setOpen] = useState(false);
    const handleClose = () => setOpen(false);
    const [avatar, setAvatar] = useState("");
    const {enqueueSnackbar} = useSnackbar();
    const [trackIndex, setTrackIndex] = useState(-1)
    const handleClick = (id, index) => {
        setTrackIndex(index);
    };
    const dispatch = useDispatch();
    const user = JSON.parse(localStorage.getItem("user"));

    let {uploadSongs, status, deleteSongStatus, publicOrPrivateStatus, updateSongStatus} = useSelector(
        (state) => state.song
    );
    let {playlists} = useSelector((state) => state.playlist);

    let categories = useSelector((state) => state.cate.categories);
    const songs = uploadSongs.songs
    let updateSong = {};
    var file;

    const uploadFile = async () => {
        try {
            if (fileUpload == null) return;
            dispatch(loading("loading"));
            const fileRef = ref(storage, `files/${fileUpload.name + v4()}`);
            await uploadBytes(fileRef, fileUpload).then(async (snapshot) => {

                await getDownloadURL(snapshot.ref).then(async (url) => {
                    setNewSong({
                        name: fileUpload.name.split(".")[0],
                        file: url,
                        duration: 5,
                    });
                    await getDuration(url).then((length) => {
                        let duration = length / 60;
                        duration = duration.toFixed(2);
                        setNewSong({
                            name: fileUpload.name.split(".")[0],
                            file: url,
                            duration: duration,
                        });
                    });
                });
            });
        } catch (err) {
            console.log("uploadFile", err.message);
        }
    };

    const getDuration = (src) => {
        var audio = new Audio(src);
        console.log(audio)
        try {
            return new Promise(function (resolve) {
                $(audio).on("loadedmetadata", function () {
                    resolve(audio.duration);
                });
            });
        } catch (err) {
            console.log("getDuration ", err.message);
        }
    };

    const deleleSong = (songId) => {
        try {
            Swal.fire({
                title: 'Bạn có chắc muốn xoá Bài hát ',
                text: "Bài hát này đỉnh vãi nuôn ý",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: 'grey',
                cancelButtonColor: '#d33',
                confirmButtonText: ' Tôi Chắc chắn',
                cancelButtonText: 'Tôi nghĩ lại rồi'
            }).then(async (result) => {
                if (result.isConfirmed) {
                    dispatch(deleteSongById(songId));
                    dispatch(changeDeleteSongStatus("idle"));
                    enqueueSnackbar('Xoá bài hát thành công', {variant: "success"});
                }
            })
        } catch (err) {
            console.log("deleleSong ", err.message);
        }
    };

    const checkSong = (id) => {
        for (let song of uploadSongs.songs) {
            if (song._id == id) return song;
        }
    };

    // const addSongToPlaylist = (value) => {
    //   dispatch(addToPlaylist(value))
    // };

    const handleSong = (obj) => {
        try {
            let select = obj.target.value.split(",")[0];
            let songId = obj.target.value.split(",")[1];
            if (select == 1) {
                //
                // addSongToPlaylist({songId, playlistId});
            } else if (select == 2) {
                deleleSong(songId);
            } else if (select == 3) {
                let song = checkSong(songId);
                setEditSong(song);
                setOpen(true);
            }
        } catch (err) {
            console.log("handleSong", err.message);
        }
    };


    const handleSubmit = async () => {
        let media;
        console.log('file image ', file);

        if (file) {
            media = await imageUpload([file]);
        }
        let image = media ? media[0].url : '';
        if (image) {
            updateSong.image = image;
        }
        let songId = editSong._id;
        if (songId) {
            updateSong.songId = songId;
        }

        dispatch(updateSongInfo(updateSong));
        handleClose();
        enqueueSnackbar("Cập nhật thành công", {
            variant: "success",
        });
    };


    const handleSongStatus = (e, song) => {
        try {
            let select = e.target.value.split(",")[0];
            let status = select;
            let data = {song, status}
            dispatch(publicOrPrivate(data));
            enqueueSnackbar("Chuyển trạng thái thành công", {
                variant: "success",
            });
        } catch (err) {
            console.log("handleSong", err.message);
        }
    };

    useEffect(() => {
        dispatch(fetchPlaylist(user._id));
        dispatch(getCategories());
    }, []);

    useEffect(() => {
        dispatch(uploadSong(newSong));
    }, [newSong]);

    useEffect(() => {
        dispatch(getUploadedSongs({_id: user._id}));
    }, [
        status == "success",
        deleteSongStatus == "success",
        updateSongStatus == "success",
        publicOrPrivateStatus == 'success',
    ]);

    const style = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "100%",
        bgcolor: "background.paper",
        border: "2px solid #000",
        boxShadow: 24,
        p: 4,
    };
    const Total = styled.div`
      display: grid;
      grid-template-rows: 75vh 15vh;
    `
    const Footerdiv = styled.div`
      height: 20%;
      background-color: #333;
      display: grid;
      grid-template-columns: 1fr 2fr;
    `
    const Container = styled.div`
      @font-face {
        font-family: "MyWebFont";
        src: url("webfont.eot"); /* IE9 Compat Modes */
        src: url("webfont.eot?#iefix") format("embedded-opentype"),
          /* IE6-IE8 */ url("webfont.woff2") format("woff2"),
          /* Super Modern Browsers */ url("webfont.woff") format("woff"),
          /* Pretty Modern Browsers */ url("webfont.ttf") format("truetype"),
          /* Safari, Android, iOS */ url("webfont.svg#svgFontName") format("svg"); /* Legacy iOS */
      }
      background-color: whitesmoke;
      position: relative;
      border-radius: 10px;
      overflow: auto;

      #songlist {
        font-family: Arial, Helvetica, sans-serif;
        border-collapse: collapse;
        width: 100%;
        color: white;
      }
    ;

      #songlist th {
        padding-top: 12px;
        padding-bottom: 12px;
        text-align: left;
        color: black;
        border-bottom: 1px solid #ccc;
      }

      #songlist tbody tr:hover {
        background-color: rgba(0, 0, 0, 0.7)
      }
    `;

    const Logo = styled.div`
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      align-content: center;
      padding: 10px;
    `;
    const Head = styled.div`
      position: relative;
      padding: 1rem 3rem;

      display: flex;
      height: 180px;
      background: linear-gradient(transparent 0, rgba(0, 0, 0, 0.4) 100%);
    `;
    const Wrapper = styled.div`
      height: 100%;
      width: 100%;
      background: linear-gradient(rgba(0, 0, 0, 0.5) 0, rgba(0, 0, 0, 0.7) 100%);
    `
    const Body = styled.div`
      grid-template-columns: 0.2fr 3fr 2fr 0.2fr;
      //text-transform: uppercase;
      color: #3b3b3b;
      border-bottom: 1px solid #ccc;
    `;

    const InforAvatar = styled.div`
      width: 150px;
      height: 150px;
      overflow: hidden;
      border-radius: 50%;
      position: relative;
      margin: 15px auto;
      border: 1px solid #ddd;
      cursor: pointer;
    `;
    const InfoImg = styled.img`
      width: 100%;
      height: 100%;
      display: block;
      object-fit: cover;
    `;
    const InforSpan = styled.span`
      position: absolute;
      bottom: -15%;
      left: 0;
      width: 100%;
      height: 50%;
      text-align: center;
      color: orange;
      transition: 0.3s ease-in-out;
      background: #fff5;
    `;
    const Input = styled.input`
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      cursor: pointer;
      opacity: 0;
    `;
    return (
        <Total>
            <Container>
                <div id="style-1">
                    <Head>
                        <div>
                            <Button sx={{borderRadius: '200px'}}
                                    variant="contained"
                                    color="inherit"
                                    component="label"
                                    onChange={(event) => {
                                        setFileUpload(event.target.files[0]);
                                    }}
                            >
                                Chọn tệp
                                <input hidden accept="file/*" multiple type="file"/>
                            </Button>
                            {status == "loading" ? (
                                <LoadingButton
                                    loading
                                    loadingPosition="start"
                                    startIcon={<SaveIcon/>}
                                    variant="outlined"
                                >
                                    Loading...
                                </LoadingButton>
                            ) : (
                                <Button color="inherit"
                                        sx={{borderRadius: '200px', width: '100px'}}
                                        variant="contained"
                                        onClick={uploadFile}>
                                    Up tệp
                                </Button>
                            )}
                        </div>
                        <div style={{marginLeft: "20px"}}>
                            <h1>Tải bài hát lên</h1>
                        </div>
                    </Head>
                    <Wrapper>
                        <Body>
                            <table id="songlist">
                                <thead>
                                <tr>
                                    <th colSpan={2}>Bài hát</th>
                                    <th colSpan={3}>Trạng thái</th>
                                    <th>Thời gian</th>
                                    <th>Hành động</th>
                                </tr>
                                </thead>
                                <tbody id="tbody">
                                {uploadSongs.songs &&
                                    uploadSongs.songs.map((song, index) => (
                                        <tr key={index}>
                                            <td onClick={() => handleClick(song._id, index)}>
                                                <img width={50} src={song.image} alt=""/>
                                            </td>
                                            <td>{song.name}</td>
                                            <td></td>
                                            <td>
                                                <>
                                                    {song.status == 1 ? (
                                                        <>
                                                            <select style={{height: "30px", width: "90px"}}
                                                                    onChange={(e) => {
                                                                        handleSongStatus(e, song);
                                                                    }}
                                                            >
                                                                <option value={1}>Riêng tư</option>
                                                                <option value={2}>Công khai</option>
                                                            </select>
                                                        </>
                                                    ) : (
                                                        <>
                                                            <select
                                                                onChange={(e) => {
                                                                    handleSongStatus(e, song);
                                                                }}
                                                            >
                                                                <option value={2}>Công khai</option>
                                                                <option value={1}>Riêng tư</option>
                                                            </select>
                                                        </>
                                                    )}
                                                </>
                                            </td>
                                            <td></td>
                                            <td>{song.duration}</td>
                                            <td>
                                                <select style={{height: "30px", width: "90px"}}
                                                        onChange={(e) => handleSong(e)}>
                                                    <option value={""}>-- Chọn --</option>
                                                    <option value={`1,${song._id}`}>
                                                        Thêm bài hát vào playlist{" "}
                                                    </option>
                                                    <option value={`2,${song._id}`}>Xóa bài hát</option>
                                                    <option
                                                        value={`3,${song._id}, ${song.name}, ${song.image}, ${song.singerName}`}
                                                    >
                                                        Chỉnh sửa
                                                    </option>
                                                </select>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>

                                <Modal
                                    open={open}
                                    onClose={handleClose}
                                    aria-labelledby="modal-modal-title"
                                    aria-describedby="modal-modal-description"
                                >
                                    <form>
                                        <Box sx={style}>
                                            <Typography
                                                id="modal-modal-title"
                                                variant="h6"
                                                component="h2"
                                            >
                                                Chỉnh sửa bài hát
                                            </Typography>
                                            <TextField
                                                label="Tên bài hát"
                                                placeholder={`${editSong.name}`}
                                                name="name"
                                                onChange={(e) => {
                                                    updateSong.name = e.target.value;
                                                }}
                                            />
                                            <TextField
                                                label="Ca sĩ"
                                                name="singerName"
                                                placeholder={`${editSong.singerName}`}
                                                onChange={(e) => {
                                                    updateSong.singerName = e.target.value;
                                                }}
                                            />
                                            <Logo>
                                                <InforAvatar>
                                                    <InfoImg
                                                        src={
                                                            avatar ? URL.createObjectURL(avatar) : editSong.image
                                                        }
                                                        style={{filter: "invert(0)"}}
                                                        alt="avatar"
                                                    />
                                                    <InforSpan>
                                                        <i>
                                                            <CameraAltIcon/>
                                                        </i>
                                                        <p>Thay ảnh</p>
                                                        <Input
                                                            type="file"
                                                            name="file"
                                                            id="file_up"
                                                            accept="image/*"
                                                            onChange={(e) => {
                                                                file = e.target.files[0];
                                                                setAvatar(file);
                                                                console.log('aofjaoiwfjaiwf - file', file);
                                                            }}
                                                        />
                                                    </InforSpan>
                                                </InforAvatar>
                                            </Logo>

                                            <select style={{width: "100px", height: "35px"}}
                                                    select
                                                    label="Thể loại"
                                                    name="cate"
                                                    onChange={(e) => {
                                                        updateSong.cate = e.target.value;
                                                    }}
                                            >
                                                {categories &&
                                                    categories.map((cate) => {
                                                        return (
                                                            <option
                                                                key={cate._id}
                                                                name="cate"
                                                                value={`${cate._id}`}
                                                            >
                                                                {cate.name}
                                                            </option>
                                                        );
                                                    })}
                                            </select>
                                            <Button color="inherit"
                                                    sx={{borderRadius: '200px', width: '100px'}}
                                                    variant="contained"
                                                    onClick={() => {
                                                        setOpen(false);
                                                    }}
                                            >
                                                Đóng
                                            </Button>
                                            <Button color="inherit"
                                                    sx={{borderRadius: '200px', width: '100px'}}
                                                    variant="contained"
                                                    onClick={handleSubmit}>
                                                Lưu
                                            </Button>
                                        </Box>
                                    </form>
                                </Modal>

                            </table>
                            <div className="force-overflow"></div>
                        </Body>

                    </Wrapper>
                </div>
            </Container>
            <Footerdiv>
                <DetailSong song={songs} trackIndex={trackIndex}/>
                <Audios song={songs} trackIndex={trackIndex} setTrackIndex={setTrackIndex}/>
            </Footerdiv>
        </Total>
    );
}

export default AddNewFile;