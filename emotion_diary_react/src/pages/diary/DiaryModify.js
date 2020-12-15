import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';

const ModifyStyle = styled.div`
  display: grid;
  grid-template-columns: auto;
  // width: 400%;
`;
const ButtonBoxStyle = styled.div`
  display: grid;
  grid-template-columns: auto auto;
`;
const DiaryModify = (props) => {
  const [diary, setDiary] = useState({});
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
        setDiary(res);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function submitModify(e) {
    e.preventDefault(e);
    console.log('submitModify() 실행');

    if (window.confirm('수정하시겠습니까?')) {
      fetch('http://10.100.102.31:8000/board/' + id, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
          Authorization: localStorage.getItem('Authorization'),
        },
        body: JSON.stringify(diary),
      })
        .then((res) => res.text())
        .then((res) => {
          if (res === 'ok') {
            alert('수정되었습니다.');
            history.push('/diary');
          } else {
            alert('수정 실패했습니다.');
          }
        });
    } else {
    }
  }
  function inputHandle(e) {
    setDiary((prevState) => {
      // 함수형으로 쓰는 이유 : setstate 두번쓸때 값을 들고오기 우ㅐㅎ서
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  }
  return (
    <ModifyStyle>
      <form>
        <input
          className="form-control form-control-lg"
          type="text"
          name="title"
          value={diary.title}
          onChange={inputHandle}
        />
        <textarea
          className="form-control form-control-lg"
          name="contents"
          rows="3"
          onChange={inputHandle}
          value={diary.contents}
        />
        <ButtonBoxStyle>
          <Link to="/diary">
            <button className="btn btn-secondary">취소</button>
          </Link>
          <button className="btn btn-secondary" onClick={submitModify}>
            수정
          </button>
        </ButtonBoxStyle>
      </form>
    </ModifyStyle>
  );
};

export default DiaryModify;
