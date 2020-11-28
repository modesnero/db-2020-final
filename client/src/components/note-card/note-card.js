import React, { Component } from 'react'
import { Card, Button, Form } from 'react-bootstrap'

import moment from 'moment'
import 'moment/locale/ru'

export default class NoteCard extends Component {
  state = {
    isComment: false
  }

  render () {
    const { id, title, text, deleteNote, editNote, date, isUser } = this.props
    const [text1, text2, text3, text4, text5, text6] = text

    const dateStr = moment(date)
      .locale('ru')
      .format('LLLL')

    const { isComment } = this.state
    return (
      <>
        <Card className='mb-4'>
          <Card.Header>
            <Card.Title>
              {title}{' '}
              {isUser ? (
                <strong className='text-primary text-right'>
                  [Экспертиза]
                </strong>
              ) : null}
            </Card.Title>
            <Card.Subtitle className='mb-2 text-muted'>
              {!isUser ? (
                <span>
                  Иванов Иван Иванович <br />
                </span>
              ) : null}{' '}
              {dateStr}
            </Card.Subtitle>
          </Card.Header>

          <Card.Body>
            <h5>
              Описание действительного положения с указанием существующих
              недостатков:
            </h5>
            <p>{text1}</p>
            <h5>Описание предлагаемого решения:</h5>
            <p>{text2}</p>
            <h5>
              Ожидаемый положительный эффект от использования (технический,
              организационный, управленческий или иной):
            </h5>
            <p>{text3}</p>
            <h5>Необходимые затраты на внедрение:</h5>
            <p>{text4}</p>
            <h5>Требуемые сроки на внедрение:</h5>
            <p>{text5}</p>
            <h5>
              Ожидаемый положительный эффект от использования (технический,
              организационный, управленческий или иной):
            </h5>
            <p>{text6}</p>
          </Card.Body>

          <Card.Footer>
            {isUser ? (
              <>
                <Button
                  variant='primary'
                  className='mr-3'
                  onClick={() => editNote(id)}
                >
                  Редактировать
                </Button>
                <Button
                  className='mr-3'
                  variant='primary'
                  onClick={() => deleteNote(id)}
                >
                  Удалить
                </Button>
              </>
            ) : (
              <>
                <Button
                  variant='primary'
                  className='mr-3'
                  onClick={() =>
                    this.setState(prevState => ({
                      isComment: !prevState.isComment
                    }))
                  }
                >
                  Комментировать
                </Button>
                <Button variant='primary'>Личные сообщения</Button>
              </>
            )}

            {isComment ? (
              <>
                <Form.Group
                  className='mt-3'
                  controlId='exampleForm.ControlTextarea1'
                >
                  <Form.Control
                    placeholder='Введите комментарий'
                    as='textarea'
                    rows={3}
                  />
                </Form.Group>

                <Button size='sm' block>
                  Отправить
                </Button>
              </>
            ) : null}
          </Card.Footer>
        </Card>
      </>
    )
  }
}
