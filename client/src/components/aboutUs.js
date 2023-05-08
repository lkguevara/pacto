import styles from "../styles/AboutUs.module.css";
import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import Link from 'next/link';

const AboutUs = () => {
    return (
      <Container className={styles.container}>
        <Row className="mt-5">
          <Col>
            <h2 className={styles.title}>Nosotros</h2>
          </Col>
        </Row>
        
        {/* Sección Quiénes somos */}
        <Row className="mt-5">
          <Col>
            <h3>Quiénes somos</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pharetra massa massa ultricies mi. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.
            </p>
          </Col>
        </Row>
  
        {/* Sección Misión y visión */}
        <Row className="mt-5">
          <Col md={6}>
            <h4>Misión</h4>
            <p>
              Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
            </p>
          </Col>
          <Col md={6}>
            <h4>Visión</h4>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            </p>
          </Col>
        </Row>
  
        {/* Sección Términos y condiciones */}
        <Row className="mt-5">
          <Col className="text-center">
            <Link href="/terms-and-conditions">
              <Button variant="primary" className={styles.termsButton}>Términos y condiciones</Button>
            </Link>
          </Col>
        </Row>
      </Container>
    );
};
  
export default AboutUs;