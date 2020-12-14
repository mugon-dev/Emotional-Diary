import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';

const DetailStyle = styled.div`
  display: grid;
  width: 300%;
  border: 1px solid #003458;
`;
const ButtonBoxStyle = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: auto auto auto;
  grid-column-gap: 10px;
  justify-content: end;
  margin: 10px;
`;
const LabelStyle = styled.div`
  font-size: 23px;
`;
const DiaryDetail = (props) => {
  const [diary, setDiary] = useState([]);
  const id = props.match.params.id;
  const history = useHistory();

  useEffect(() => {
    fetch('http://10.100.102.31:8000/board/get/' + id, {
      method: 'GET',
      headers: {
        Authorization: localStorage.getItem('Authorization'),
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setDiary(res);
      });
  }, []);

  function submitDelete(e) {
    e.preventDefault();

    console.log('submitDelete() 실행');
    console.log(id);

    if (window.confirm('삭제하시겠습니까?')) {
      fetch('http://10.100.102.31:8000/board/' + id, {
        method: 'DELETE',
        headers: {
          Authorization: localStorage.getItem('Authorization'),
        },
      })
        .then((res) => res.text())
        .then((res) => {
          if (res === 'ok') {
            alert('삭제 되었습니다.');
            history.push('/diary/');
          } else {
            alert('삭세 실패했습니다.');
          }
        });
    } else {
    }
  }
  return (
    <DetailStyle>
      <div>{diary.bno}</div>
      <div>{diary.createTime}의 일기</div>
      <LabelStyle>제목</LabelStyle>
      <div>{diary.title}</div>
      <LabelStyle>내용</LabelStyle>
      <div>{diary.contents}</div>

      <div>{diary.emotion}</div>
      <ButtonBoxStyle>
        <Link to="/diary">
          <button type="button" class="btn btn-secondary">
            돌아가기
          </button>
        </Link>
        <Link to={'/diary/modify/' + id}>
          <button type="button" class="btn btn-secondary">
            수정
          </button>
        </Link>
        <button type="button" class="btn btn-secondary" onClick={submitDelete}>
          삭제
        </button>
      </ButtonBoxStyle>
    </DetailStyle>
  );
};

export default DiaryDetail;
