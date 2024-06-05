import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default function BoardList() {
  const [boardList,setBoardList] = useState([]);

  useEffect(()=>{
    axios.get('http://localhost:3001/board')
    .then(res =>{
      setBoardList(res.data);
    })
    console.log(boardList)
  },[]);

  return (
    <>
    <Link to="/board/1">
    <Button variant="secondary">글작성</Button></Link>

    <h4>total:10</h4>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>제목</th>
            <th>작성자</th>
            <th>날짜</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
        </tbody>
      </Table>
    </>
  )
}
