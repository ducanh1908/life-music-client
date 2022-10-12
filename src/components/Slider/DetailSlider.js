import AccessTimeIcon from "@mui/icons-material/AccessTime";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Like from "../Like/like";



const Container = styled.div`
  background-color: whitesmoke;
  position: relative;
  border-radius: 10px;
  overflow: auto;
`;

const Head = styled.div`
  position: relative;
  display: flex;
  height: 310px;
  padding: 2rem;
  background: linear-gradient(transparent 0, rgba(0, 0, 0, 0.4) 100%);
`;
const Navbar = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Image = styled.img`
  width: 232px;
  height: 232px;
  box-shadow: 0 4px 60px rgb(0 0 0 / 50%);
`;
const PlaylistInfo = styled.div`
  margin-left: 20px;
  flex: 1;
`;
const PlaylistName = styled.h1`
  font-size: 70px;
`;
const PlaylistTitle = styled.h1``;
const PlaylistAction = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
const Body = styled.div`
  padding: 1rem 3rem;
  display: grid;
  grid-template-columns: 0.2fr 3fr 2fr 0.2fr;
  color: #3b3b3b;
`;
const BodyTitle = styled.p``;

const Song = styled.div``;

const SongItem = styled.div`
  padding: 0.5rem 3rem;
  display: grid;
  color: #fff;
  grid-template-columns: 0.2fr 3fr 2fr 0.5fr 0.2fr;
  cursor: pointer;
  .col {
    display: flex;
    align-items: center;
  }
  &:hover {
    background-color: rgba(0, 0, 0, 0.7);
  }
`;

const SongName = styled.span``;
const SongDetail = styled.span`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`;
const SongSinger = styled.span``;

const SongIndex = styled.span``;

const SongImage = styled.img`
  width: 50px;
  height: 50px;
`;
const SongTime = styled.span``;
const SongInfo = styled.div``;

const Wrapper = styled.div`
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0.5) 0, rgba(0, 0, 0, 0.7) 100%);
`;
const DetailSlider = ({ song, onTrackSelect }) => {
  const isLoggedInUser = useSelector(state => state.user.user )

  const isLoggedIn = !!isLoggedInUser._id;
  const [menu, setMenu] = useState(false);

  const dispatch = useDispatch();

  const handleClick = (id, index) => {
    onTrackSelect(index);
  };
  return (
      <Container>
        <Head>

          <Navbar>
            <Image src="https://photo-zmp3.zmdcdn.me/banner/a/4/a/3/a4a3a47822a3717b7c6caa2b5fe14673.jpg" />
            <PlaylistInfo>
              <PlaylistTitle>Chạm</PlaylistTitle>
              <PlaylistName>Ưng Hoàng Phúc</PlaylistName>
            </PlaylistInfo>
          </Navbar>

        </Head>
        <Wrapper>
          <Body>
              <Navbar>
                     Tuổi trẻ nhiệt huyết, sự thành công vang dội của Ưng Hoàng Phúc, từ khi còn là cậu ca sĩ nhỏ người với cái tên Ốc Tiêu, cho đến ngày trở thành một hiện tượng âm nhạc tới mức ở khắp mọi miền trên đất nước, không ai là không thuộc từng bài hát của anh.

                      Nhưng cuộc đời luôn có quá nhiều những bất ngờ, trên con đường sự nghiệp vốn đang chỉ đầy hoa hồng ấy, bỗng một ngày chất đầy những khó khăn. Kể từ đó, có một Ưng Hoàng Phúc rất khác xuất hiện, một Ưng Hoàng Phúc mà bạn phải thực sự CHẠM để hiểu rõ. Đằng sau những bài báo, những mỹ từ tô vẽ hay cả những câu chuyện thị phi là rất nhiều những câu chuyện cần được CHẠM để thấu tỏ. Tất cả những cái CHẠM sâu lắng ấy, đều được Liêu Hà Trinh chắp bút vô cùng mộc mạc, chân thành qua lời kể của Ưng Hoàng Phúc trong cuốn sách viết về anh - cuốn sách mang tên CHẠM.

                      Ở CHẠM, ta không chỉ bắt gặp cậu nhóc Quốc Thanh tinh nghịch, lắm trò. Không chỉ bắt gặp “thằng” Ốc Tiêu với niềm đam mê ca hát mãnh liệt và mong muốn chạm đến đỉnh hào quang nơi ánh đèn sân khấu lấp lánh sắc màu… Ta còn bắt gặp một Ưng Hoàng Phúc ngã xuống từ đỉnh cao của vinh quang, quay về con số 0 tròn trĩnh vì chống chọi với những cơn đau bệnh tật, hay một Ưng Hoàng Phúc trưởng thành, điềm đạm, và cả một Ưng Hoàng Phúc hết lòng vì những người anh yêu và những người đã tin tưởng, ủng hộ anh đến cùng.

                      Cuốn sách với sự chân thành và tận tụy của Ưng Hoàng Phúc qua ngòi bút của Liêu Hà Trinh mang đến thông điệp mạnh mẽ rằng: chỉ khi ta không ngừng cố gắng, nỗ lực chiến thắng những điều tưởng chừng đã được số phận an bài, ta sẽ CHẠM được tới ước mơ, hạnh phúc mà mình chờ mong.

                      Khép lại CHẠM, chính ta cũng được trở về với vùng ký ức đầy sống động của một thuở thiếu thời, những chúng ta của một thời yêu đương vụng dại nhưng đầy nhung nhớ ấy.
              </Navbar>
          </Body>

        </Wrapper>
      </Container>
  );
};

export default DetailSlider;
