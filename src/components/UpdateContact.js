import React, { Component } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { updateContact } from '../graphql/mutations';
import { getContact } from '../graphql/queries';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';

class UpdateContact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            validated: false,
            firstName: undefined,
            lastName: undefined,
            email: undefined,
            company: undefined,
            note: undefined,
            phoneNumber: undefined 
        }

        this.updateContactForm = this.updateContactForm.bind(this);
        this.cancelContactForm = this.cancelContactForm.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.fetchContact = this.fetchContact.bind(this);
    }

    componentDidMount() {
        this.fetchContact();
    }

    async fetchContact () {
        const { match: { params: { id } } } = this.props;
        try {
            const contactData = await API.graphql(graphqlOperation(getContact, { id }));
            const contact = contactData.data.getContact;
            this.setState({...contact});
        }
        catch (err) {
            console.log('error fetching contact', err);
        }
    }

    async updateContactForm(e) {
        const { id, userID, firstName, lastName, email, company, note, phoneNumber } = this.state;
        if (e.currentTarget.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
        }
        this.setState({validated: true});

        const contactInfo = {
            id,
            userID,
            firstName,
            lastName,
            email,
            company,
            note,
            phoneNumber 
        };
        try { await API.graphql(graphqlOperation(updateContact, { input: contactInfo })) }
        catch (err) { console.log('error updating contact', err); }
    }

    cancelContactForm () {
        return this.props.history.push('/contacts');
    }

    handleChange (e) {
        this.setState({[e.target.name]: e.target.value})
    }

    render() {
        return (
            <Container style={{padding: '3.5rem', maxWidth: '800px'}}>
            <Card className="text-center">
                <Card.Header>New Contact</Card.Header>
                <Form
                    style={{paddingTop: '3.25rem'}}
                    onSubmit={(e) => this.updateContactForm(e)}
                    validated={this.state.validated}
                >
                <Card.Body>
                    <Form.Group as={Row} controlId="contactForm.firstName">
                        <Form.Label column sm={3}>First Name</Form.Label>
                        <Col sm={7}>
                            <Form.Control required
                                onChange={this.handleChange}
                                value={this.state.firstName}
                                name="firstName"
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="contactForm.lastName">
                        <Form.Label column sm={3}>Last Name</Form.Label>
                        <Col sm={7}>
                            <Form.Control placeholder={"Last Name"}
                                onChange={this.handleChange} 
                                value={this.state.lastName}
                                name="lastName"
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="contactForm.company">
                        <Form.Label column sm={3}>Company</Form.Label>
                        <Col sm={7}>
                            <Form.Control placeholder="Company"
                                onChange={this.handleChange}
                                value={this.state.company}
                                name="company"
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="contactForm.email">
                        <Form.Label column sm={3}>Email</Form.Label>
                        <Col sm={7}>
                            <Form.Control
                                required type="email"
                                placeholder="example@example.com"
                                onChange={this.handleChange}
                                value={this.state.email}
                                name="email"
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="contactForm.phoneNumber">
                        <Form.Label column sm={3}>Phone</Form.Label>
                        <Col sm={7}>
                            <Form.Control
                                placeholder="999-999-9999"
                                onChange={this.handleChange}
                                value={this.state.phoneNumber}
                                name="phoneNumber"
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="contactForm.note">
                        <Form.Label column sm={3}>Note</Form.Label>
                        <Col sm={7}>
                            <Form.Control 
                                as="textarea" rows={3} 
                                onChange={this.handleChange}
                                value={this.state.note}
                                name="note"
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="contactForm.group">
                        <Form.Label column sm={3}>Group</Form.Label>
                        <Col sm={4}>
                            <Form.Control as="select">
                                <option>Select group</option>
                                <option>Friends</option>
                                <option>Other</option>
                            </Form.Control>
                        </Col>
                        <Col sm={3}>
                            <Button
                                variant="light"
                                type="submit"
                            >
                                    Add Group
                            </Button>
                        </Col>
                    </Form.Group>
                </Card.Body>
                <Card.Footer>
                    <Row className="justify-content-md-center">
                        <Col sm={6}>
                        <Button
                            type="submit"
                        >
                            Save
                        </Button>
                        </Col>
                        <Col sm={4}>
                        <Button
                            variant="outline-secondary"
                            onClick={this.cancelContactForm}
                        >
                            Cancel
                        </Button>
                        </Col>
                    </Row>
                </Card.Footer>
                </Form>
            </Card>
            </Container>
        )
    }
}

export default UpdateContact;