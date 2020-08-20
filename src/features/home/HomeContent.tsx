import React from 'react'
import { Col, Row } from 'antd'
import styles from '../layout/Content.module.css'

const HomeContent = () => {
  const arr = new Array(6 * 4).fill(0)

  return (
    <Row justify="center">
      <Col xs={24} md={24} lg={24} xl={24}>
        <Row style={{ padding: '25px' }}>
          {arr.map(() => (
            <Col
              style={{ color: 'rgb(179, 179, 179)' }}
              xs={12}
              md={8}
              lg={6}
              xxl={4}
            >
              <Image />
            </Col>
          ))}
        </Row>
      </Col>
    </Row>
  )
}

const Image = () => {
  return (
    <div style={{ padding: '10px', overflow: 'hidden' }}>
      <div
        style={{ width: '100%', paddingTop: '100%', position: 'relative' }}
        className={styles.ImageWrapper}
      >
        <div className={styles.PlayButton}>
          <div style={{ userSelect: 'none' }}>
            {Math.random() * 2 >= 1 ? '|>' : '||'}
          </div>
        </div>
        <img
          className={styles.Image}
          src={
            'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/0c2b4cc2-d07d-4fbd-b02e-2080981b29a1/dbxkxee-3b8ebe39-1d9d-4b42-9a50-4d12262e2673.jpg/v1/fill/w_1024,h_1449,q_75,strp/homecoming_by_t1na_dbxkxee-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD0xNDQ5IiwicGF0aCI6IlwvZlwvMGMyYjRjYzItZDA3ZC00ZmJkLWIwMmUtMjA4MDk4MWIyOWExXC9kYnhreGVlLTNiOGViZTM5LTFkOWQtNGI0Mi05YTUwLTRkMTIyNjJlMjY3My5qcGciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.IOnz6UAOOOFqF2hRnvDj7uuzJGgB7bG1H_WFAki1fcc'
          }
          draggable={false}
        />
      </div>
    </div>
  )
}

export default HomeContent
