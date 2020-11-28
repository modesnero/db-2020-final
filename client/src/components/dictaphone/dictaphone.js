import React from 'react'
import SpeechRecognition, {
  useSpeechRecognition
} from 'react-speech-recognition'
import { Button, Alert, Row, Col } from 'react-bootstrap'

const Dictaphone = () => {
  const { transcript } = useSpeechRecognition()

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return null
  }

  return (
    <div className='mb-5'>
      {transcript ? (
        <Alert variant='success'>
          <Alert.Heading>Голосовая заметка</Alert.Heading>
          <p>{transcript}</p>
          <hr />
        </Alert>
      ) : null}
      <Row>
        <Col sm='12'>
          <Button
            block
            className='mr-3 mb-3'
            onClick={e => {
              e.preventDefault()
              SpeechRecognition.startListening({ language: 'ru' })
            }}
          >
            Голосовая ввод
          </Button>
        </Col>
        <Col>
          <Button
            block
            className='mr-3 mb-3'
            onClick={e => {
              e.preventDefault()
              SpeechRecognition.stopListening()
            }}
          >
            Стоп
          </Button>
        </Col>
        <Col>
          <Button block className='mr-3 mb-3'>
            Сброс
          </Button>
        </Col>
      </Row>
    </div>
  )
}
export default Dictaphone
