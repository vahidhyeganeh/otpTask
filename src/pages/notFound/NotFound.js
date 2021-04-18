import React from 'react';
import {Container,Row,Col} from "reactstrap";
import NotFoundImg from '../../assets/img/404.png';

const NotFound = () => {

    return(
        <Container>
             <Row>
                <Col sm="12">
                        <img src={NotFoundImg} alt="صفحه مورد نظر یافت نشد" width={300} height={300} />
                        <h5>صفحه مورد نظر شما یافت نشد</h5>
                </Col>
            </Row>
        </Container>
    )
};

export default NotFound;