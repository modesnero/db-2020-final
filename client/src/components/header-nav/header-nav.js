import React from 'react'
import { Nav } from 'react-bootstrap'

export default function HeaderNav (props) {
  const { setPage, setSearchValue, setToken, navClose } = props

  const ckickPage = page => {
    setPage(page)
    setSearchValue('')
    navClose()
  }

  return (
    <Nav className='mr-auto'>
      <Nav.Link onClick={() => ckickPage('home')}>Каталог заявлений</Nav.Link>
      <Nav.Link onClick={() => ckickPage('user')}>Мои заявления</Nav.Link>
      <Nav.Link onClick={() => ckickPage('add')}>Разместить заявление</Nav.Link>
      <Nav.Link onClick={() => setToken('')}>Выйти</Nav.Link>
    </Nav>
  )
}
