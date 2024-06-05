import React from 'react'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import FormText from 'react-bootstrap/FormText'


export default function BoardDetail() {
  return (
    <>
      <Form.Label htmlFor="inputPassword5">제목</Form.Label>
      <Form.Control
        type="text"
        id="inputPassword5"
        aria-describedby="passwordHelpBlock"
      />
      <Form.Label htmlFor="inputPassword5">내용</Form.Label>
      <Form.Control
        type="password"
        id="inputPassword5"
        aria-describedby="passwordHelpBlock"
      />
      <Form.Label htmlFor="inputPassword5">작성자</Form.Label>
      <Form.Control
        type="password"
        id="inputPassword5"
        aria-describedby="passwordHelpBlock"
      />

     
    
    </>    
  )
}
