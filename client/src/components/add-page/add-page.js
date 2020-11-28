import React, { Component } from 'react'
import { Row, Col, Form, Button } from 'react-bootstrap'

import ApiService from '../../services/api-service'
import FormInput from '../form-input'
import FormTextarea from '../form-textarea'
import Dictaphone from '../dictaphone'

export default class AddPage extends Component {
  state = {
    title: '',
    text1: '',
    text2: '',
    text3: '',
    text5: '',
    text6: '',
    theme: ''
  }

  apiService = new ApiService()

  onFieldChange = (event, fieldName) => {
    if (fieldName === 'title') {
      this.setState({ title: event.target.value })
    } else if (fieldName === 'text') {
      this.setState({ text: event.target.value })
    } else if (fieldName === 'text1') {
      this.setState({ text1: event.target.value })
    } else if (fieldName === 'text2') {
      this.setState({ text2: event.target.value })
    } else if (fieldName === 'text3') {
      this.setState({ text3: event.target.value })
    } else if (fieldName === 'text4') {
      this.setState({ text4: event.target.value })
    } else if (fieldName === 'text5') {
      this.setState({ text5: event.target.value })
    } else if (fieldName === 'text6') {
      this.setState({ text6: event.target.value })
    }
  }

  submit = async event => {
    event.preventDefault()

    const { loadNotes, setPage, token, setAlert } = this.props
    const { title, text1, text2, text3, text4, text5, text6 } = this.state
    const note = {
      title,
      text1,
      text2,
      text3,
      text4,
      text5,
      text6,
      date: new Date()
    }

    try {
      setPage('user')
      await loadNotes(this.apiService.postNote, token, note)
      setAlert(true, 'Заявление успешно добавлено', 'success')
    } catch (err) {
      console.error(err)
    }
  }

  render () {
    const { title, text1, text2, text3, text4, text5, text6 } = this.state

    return (
      <>
        <Row>
          <Col>
            <Form onSubmit={this.submit}>
              <FormInput
                type='text'
                field='title'
                title='Название:'
                placeholder='Введите название'
                value={title}
                onFieldChange={this.onFieldChange}
              />

              <Form.Group controlId='exampleForm.ControlSelect1'>
                <Form.Label>Тема заявления</Form.Label>
                <Form.Control as='select'>
                  <option value='1'>
                    Эксплуатация подстанций (подстанционного оборудования)
                  </option>
                  <option value='2'>Эксплуатация магистральных сетей</option>
                  <option value='3'>
                    Эксплуатация распределительных сетей
                  </option>
                  <option value='4'>
                    Капитальное строительство, реконструкция, проектирование
                  </option>
                  <option value='5'>
                    Эксплуатация зданий, сооружений, специальной техники
                  </option>
                  <option value='6'>Оперативно-диспетчерское управление</option>
                  <option value='7'>
                    Релейная защита и противоаварийная автоматика
                  </option>
                  <option value='8'>
                    Информационные технологии, системы связи
                  </option>
                  <option value='9'>Мониторинг и диагностика</option>
                  <option value='10'>
                    Контроль качества и учёт электроэнергии
                  </option>
                  <option value='11'>
                    Производственная безопасность и охрана труда
                  </option>
                  <option value='12'>Технологическое присоединение</option>
                  <option value='13'>Аварийно-восстановительные работы</option>
                  <option value='14'>
                    Экология, энергоэффективность, снижение потерь
                  </option>
                  <option value='15'>
                    Совершенствование системы управления
                  </option>
                  <option value='16'>Дополнительные (нетарифные) услуги</option>
                </Form.Control>
              </Form.Group>

              <FormTextarea
                field='text1'
                rows='5'
                title='Описание действительного положения с указанием существующих недостатков:'
                placeholder='Введите нынешнее положение'
                value={text1}
                onFieldChange={this.onFieldChange}
              />

              <FormTextarea
                field='text2'
                rows='5'
                title='Описание предлагаемого решения:'
                placeholder='Введите предлагаемое решение'
                value={text2}
                onFieldChange={this.onFieldChange}
              />

              <FormTextarea
                field='text3'
                rows='5'
                title='Ожидаемый положительный эффект от использования (технический, организационный, управленческий или иной):'
                placeholder='Введите положительный эффект'
                value={text3}
                onFieldChange={this.onFieldChange}
              />

              <FormTextarea
                field='text4'
                rows='5'
                title='Необходимые затраты на внедрение:'
                placeholder='Введите затраты на внедрение'
                value={text4}
                onFieldChange={this.onFieldChange}
              />

              <FormTextarea
                field='text5'
                rows='5'
                title='Требуемые сроки на внедрение:'
                placeholder='Введите сроки на внедрение'
                value={text5}
                onFieldChange={this.onFieldChange}
              />

              <FormTextarea
                field='text6'
                rows='5'
                title='Ожидаемый положительный эффект от использования (технический, организационный, управленческий или иной):'
                placeholder='Введите положительный эффект'
                value={text6}
                onFieldChange={this.onFieldChange}
              />

              <Dictaphone />

              <div className='form-group'>
                <label htmlFor=''>Прикрепить файл</label>
                <div className='input-group mb-3'>
                  <div className='custom-file'>
                    <input
                      type='file'
                      className='custom-file-input'
                      id='inputGroupFile02'
                    />
                    <label className='custom-file-label' for='inputGroupFile02'>
                      Выберете файл
                    </label>
                  </div>
                  <div className='input-group-append'>
                    <span className='input-group-text'>Загрузить</span>
                  </div>
                </div>
              </div>

              <Button size='lg' type='submit' variant='primary' block>
                Разместить заявление
              </Button>
            </Form>
          </Col>
        </Row>
      </>
    )
  }
}
