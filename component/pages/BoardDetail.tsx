import React, { useState,useEffect } from 'react'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import FormText from 'react-bootstrap/FormText'
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const BoardDetail = () => {

  const {id}  = useParams();
  //저장용
  const [values,setValues] = useState({
    title:'',
    writer:'',
    content:'',
  })

  //vail용
  const [errors,setErrors] = useState({
    title:'',
    writer:'',
    content:'',
  })
  
  useEffect(()=>{
    if(id !== '0' ){
      axios.get(`http://localhost:3001/board/${id}`)
      .then(res => {
        setValues({
          title:res.data.title,
          writer:res.data.writer,
          content:res.data.content,
        });
      })
      .catch(error => {
        console.error('잠시후 다시 시도해 주세요', error);
      });
    }
   
  },[id])

  const {title,writer,content} =values;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
    const { id, value } = e.target;
    setValues({
      ...values,
      [id]:value,
    });
    setErrors({
      ...errors,
      [id]:'',
    });
  };

  //vaildation 체크
  const vaildate = () => {
    const newErrors :any = {};
    if(!values.title){
      newErrors.title ='제목을 입력하세요';
    }
    if(!values.writer){
      newErrors.writer ='작성자를 입력하세요';
    }
    if(!values.content){
      newErrors.content ='내용을 입력하세요';
    }
    return newErrors;

  };
  //글저장
  const save = (e: React.FormEvent) => {
    e.preventDefault();
    const vaildationErrors = vaildate();
    if(Object.keys(vaildationErrors).length>0){
      setErrors(vaildationErrors);
    }else{
      if(id ==='0'){
        axios.post('http://localhost:3001/board',{
          title,
          writer,
          content,
          create_date:'2024-06-22',
          update_date:null,
        })
        .then(res=>{
          window.location.replace('/');
        })
      }else{
        axios.put(`http://localhost:3001/board/${id}`,{
          ...values,
          title,
          writer,
          content,
          update_date: new Date().toISOString(),        })
        .then(res=>{
          window.location.replace('/');
        })

      }
    }
  };
  return (
    <div>
      <form onSubmit={save}>
      <div>
      <Form.Label htmlFor="inputPassword5">제목</Form.Label>
      <Form.Control
      value={title}
        type="text"
        id="title"
        aria-describedby="titleHelpBlock"
        onChange={handleChange}
      />
      {errors.title&& <div className="text-danger">{errors.title}</div>}
      </div>
      <div>
      <Form.Label htmlFor="inputPassword5">내용</Form.Label>
      <Form.Control
        value={content}
        type="text"
        id="content"
        aria-describedby="contentHelpBlock"
        onChange={handleChange}
      />
      {errors.content&& <div className="text-danger">{errors.content}</div>}
      </div>
      <div>
      <Form.Label htmlFor="inputPassword5">작성자</Form.Label>
      <Form.Control
        value={writer}
        type="text"
        id="writer"
        aria-describedby="writerHelpBlock"
        onChange={handleChange}
      />
      {errors.writer&& <div className="text-danger">{errors.writer}</div>}
      </div>
      <Button type='submit' variant="secondary" >{id === '0'? '저장':'수정'}</Button>
        </form>
    </div>
  )
}

export default BoardDetail
