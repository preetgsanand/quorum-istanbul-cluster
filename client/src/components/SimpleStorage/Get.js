import React, {Component} from 'react';
import {
    Card,
    CardBody,
    CardSubtitle,
    Button,
    Col,
    FormGroup,
} from 'reactstrap';

class Get extends Component {
    render() {
        return (
            <Col xs={6} sm={6} md={6} lg={6}>
                <Card>
                    <CardBody className="p-3">
                        <FormGroup>
                            <CardSubtitle>
                                Storage : {this.props.storage}
                            </CardSubtitle>
                        </FormGroup>
                        <FormGroup>
                            <Button color="primary" onClick={() => this.props.getStorage()}>Get</Button>
                        </FormGroup>
                    </CardBody>
                </Card>
            </Col>
        );
    }
}

export default Get;