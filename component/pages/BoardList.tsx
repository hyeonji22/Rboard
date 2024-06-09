import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import BoardListCard from './BoardListCard';
import Pagination from 'react-js-pagination';
export interface board{
  id:string,
  title:string,
  writer:string,
  content:string,
  create_date:string,
  update_date?:string,
}

const BoardList = () => {
  const [boardList, setBoardList] = useState<board[]>([]);// axios에서 받아온 전체 게시글 데이터
  const [currentPost,setCurrentPost] = useState<board[]>([]);// 페이지네이션을 통해 보여줄 게시글
  const [page,setPage] = useState<number>(1);//현재페이지 번호

  const postPerPage : number =5;//페이지당 글 개수
  const indexOfLastPost: number = page * postPerPage;
  const indexOfFirstPost: number = indexOfLastPost - postPerPage;

  const handlePageChange = (page: number) => {
    setPage(page)
  }

  useEffect(()=>{
    axios.get('http://localhost:3001/board')
    .then(res =>{
      setBoardList(res.data);
    })
  },[]);

  useEffect(() => {
    setCurrentPost(boardList.slice(indexOfFirstPost, indexOfLastPost))
  }, [boardList, page])


  return (
    <div>
     <Link to="/board/0">
      <Button variant="secondary" >글작성</Button>
    </Link>

  <h4>total: {boardList.length}</h4>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>제목</th>
            <th>작성자</th>
            <th>날짜</th>
          </tr>
        </thead>
        {currentPost.map(item=>( <BoardListCard key={item.id} item={item}/> ))}
      </Table>

      <Pagination
        activePage={page}
        itemsCountPerPage={postPerPage}
        totalItemsCount={boardList.length}
        pageRangeDisplayed={5}
        prevPageText={"‹"}
        nextPageText={"›"}
        onChange={handlePageChange}
        innerClass="pagination justify-content-center" // Bootstrap class for center alignment
      />
    </div>
  )
}

export default BoardList
