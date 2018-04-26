import React, {Component} from 'react';
import {
    Card,
    Button,
    Col,
    FormGroup,
    Label,
    Input,
    Form
} from 'reactstrap';
class Set extends Component {
    constructor(props) {
        super(props)
        this.state = {
            storage: 0
        }
    }

    onStorageChange(event) {
        this.setState({
            storage: event.target.value
        });
    }

    render() {
        return (
            <Col xs={6} sm={6} md={6} lg={6}>
                <Card>
                    <Form className="p-3">  
                        <FormGroup>
                            <Label for="storage">Storage</Label>
                            <Input
                                onChange={(event) => this.onStorageChange(event)}
                                type="number"
                                name="storage"
                                id="storage"
                                placeholder="Storage"/>
                        </FormGroup>
                        <FormGroup>
                            <Button 
                                onClick={() => this.props.onSubmitStorage(this.state.storage)} 
                                color="primary">Submit</Button>
                        </FormGroup>
                    </Form>
                </Card>
            </Col>
        );
    }
}

export default Set;