import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const ButtonStyle = styled.button`
  background-color: transparent;
  font-family: 'TDTDTadakTadak';
  font-size: ${(props) => (props.user ? '15px' : '20px')};
  // border: transparent;
  outline: transparent;
  text-align: left;
`;
const GroupBoxStyle = styled.div`
  text-align: left;
`;
const GroupStyle = styled.div`
  display: grid;
  grid-template-columns: 70% 30%;
`;
const ButtonSpanStyle = styled.span``;
const Analysis = () => {
  const [groups, setGroups] = useState([]);
  const [images, setImages] = useState();
  const [showImage, setShowImage] = useState(false);
  useEffect(() => {
    fetch('http://10.100.102.31:8000/tmember/get', {
      method: 'GET',
      headers: {
        Authorization: localStorage.getItem('Authorization'),
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setGroups(res);
      });
  }, []);
  function myDiary() {
    const user = localStorage.getItem('userNo');
    fetch('http://10.100.102.31:8000/board/analysis/my', {
      method: 'GET',
      headers: {
        Authorization: localStorage.getItem('Authorization'),
      },
    })
      .then((res) => res.text())
      .then((res) => {
        if (res === 'ok') {
          setImages({
            wordcloud:
              'http://10.100.102.90:7000/static/my/wordcloud' + user + '.png',
            line: 'http://10.100.102.90:7000/static/my/line' + user + '.png',
            bar: 'http://10.100.102.90:7000/static/my/bar' + user + '.png',
            pie: 'http://10.100.102.90:7000/static/my/pie' + user + '.png',
            raider:
              'http://10.100.102.90:7000/static/my/raider' + user + '.png',
          });
          setShowImage(true);
        }
      });
  }

  function groupDiary(props) {
    fetch('http://10.100.102.31:8000/board/analysis/group/' + props, {
      method: 'GET',
      headers: {
        Authorization: localStorage.getItem('Authorization'),
      },
    })
      .then((res) => res.text())
      .then((res) => {
        if (res === 'ok') {
          setImages({
            wordcloud:
              'http://10.100.102.90:7000/static/together/wordcloud' +
              props +
              '.png',
            line:
              'http://10.100.102.90:7000/static/together/line' + props + '.png',
            bar:
              'http://10.100.102.90:7000/static/together/bar' + props + '.png',
            pie:
              'http://10.100.102.90:7000/static/together/pie' + props + '.png',
            raider:
              'http://10.100.102.90:7000/static/together/raider' +
              props +
              '.png',
          });
          setShowImage(true);
        }
      });
  }

  return (
    <div>
      내글 분석 얍
      <GroupBoxStyle>
        <ButtonStyle onClick={() => myDiary()}>내글 전체</ButtonStyle>
        <ButtonStyle>나만 보는 글</ButtonStyle>
        <ButtonStyle>그룹</ButtonStyle>
        {groups.map(({ tmno, member, together }) => (
          <GroupStyle key={tmno}>
            <ButtonStyle onClick={() => groupDiary(together.tno)}>
              {together.tname}
            </ButtonStyle>
          </GroupStyle>
        ))}
      </GroupBoxStyle>
      <div>
        {showImage ? (
          <div>
            <img src={images.wordcloud}></img>
            <img src={images.line}></img>
            <img src={images.bar}></img>
            <img src={images.raider}></img>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Analysis;
