import React from 'react'
import { Row, Col, Button } from 'react-bootstrap'

import NoteCard from '../note-card'

export default function UserCards (props) {
  const { notes, deleteNote, editNote, setPage } = props
  let { searchValue } = props

  const filter = (title, text) => {
    const [text1, text2, text3, text4, text5, text6] = text
    searchValue = searchValue.toLowerCase()
    return (
      searchValue === '' ||
      title.toLowerCase().includes(searchValue) ||
      text1.toLowerCase().includes(searchValue) ||
      text2.toLowerCase().includes(searchValue) ||
      text3.toLowerCase().includes(searchValue) ||
      text4.toLowerCase().includes(searchValue) ||
      text5.toLowerCase().includes(searchValue) ||
      text6.toLowerCase().includes(searchValue)
    )
  }

  const items = notes.map(note => {
    const {
      _id: id,
      note: { title, text1, text2, text3, text4, text5, text6, date }
    } = note
    const text = [text1, text2, text3, text4, text5, text6]

    const itemView = (
      <NoteCard
        deleteNote={deleteNote}
        editNote={editNote}
        title={title}
        date={date}
        text={text}
        key={id}
        id={id}
        isUser={true}
      />
    )

    return filter(title, text) ? itemView : null
  })

  const emptyListView = (
    <>
      <h3 className='mb-3 text-center'>У вас нет отправленных заявлений</h3>
    </>
  )

  return (
    <>
      <Row>
        <Col>{!items.length ? emptyListView : null}</Col>
      </Row>
      <Row>
        <Col>
          <Button
            size='lg'
            className='mb-3'
            block
            onClick={() => setPage('add')}
          >
            Разместить заявление
          </Button>
        </Col>
      </Row>
      <Row>
        <Col>{items.length ? items : null}</Col>
      </Row>
    </>
  )
}
