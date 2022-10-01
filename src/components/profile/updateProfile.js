import React from 'react';
import styled from "styled-components";
const Container = styled.div`
  background-color: whitesmoke;
  top:0;
  left: 0;
  width: 70%;
  height: 100vh;
  z-index: 9;
  overflow: auto;
`
const Form=styled.form`
  max-width: 450px;
  width: 100%;
  padding: 20px;
  border-radius: 5px;
  margin: 20px auto;
`
const UpdateProfile = () => {
    return (
        <Container>
                <Form >
                    <div >
                        <label >Họ Tên</label>
                        <div >
                            <input type="text"  id="fullname"
                                   name="fullname"  />
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="mobile">Điện thoại</label>
                        <input type="text" name="mobile"/>
                    </div>

                    <div >
                        <label >Địa chỉ</label>
                        <input type="text" name="address"/>
                    </div>
                    <div>
                        <button className="btn btn-info w-50" type="submit">Save</button>
                    </div>

                </Form>
        </Container>
    );
};

export default UpdateProfile;