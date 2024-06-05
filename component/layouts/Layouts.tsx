import React from 'react'
import Header from './Header'
import Footer from './Footer'


//메인의 컨테츠 영역은 페이지마다 내용이 바뀌기 때문에 props로 설정
function Layouts(props:{children:React.ReactNode}) {
  return (
    <>
    <Header />

    <div>{props.children}</div>
    <Footer />
    </>
  )
}

export default Layouts