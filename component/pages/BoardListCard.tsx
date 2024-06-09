import React from 'react'
import { board } from './BoardList'
import { useNavigate } from 'react-router-dom';
interface itemProps{
    item:board,
}

const BoardListCard = ({item}:itemProps) => {

    const navigate = useNavigate();

    //글상세
    const goDetailBoard = () => {
        navigate(`/board/${item.id}`);
    };

  return (
    <tbody>
    <tr>
        <td>1</td>
        <td onClick={goDetailBoard}>{item.title}</td>
        <td>{item.writer}</td>
        <td>{item.create_date}</td>
    </tr>
    
  </tbody>
  )
}

export default BoardListCard
