import React, { Component } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { updateInvoice } from '../graphql/mutations';
import { getInvoice, listContacts } from '../graphql/queries';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import InputGroup from 'react-bootstrap/InputGroup';

class UpdateInvoice extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contacts: [],
            validated: false,
            invoice: {
                contactID: null,
                dueDate: null,
                status: null,
                total: 0,
            }
        };
        this.updateInvoiceForm = this.updateInvoiceForm.bind(this);
        this.cancelInvoiceForm = this.cancelInvoiceForm.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.fetchInvoice = this.fetchInvoice.bind(this);
    }

    componentDidMount() {
        this.fetchInvoice();
        this.fetchContacts();
    }

    async fetchInvoice () {
        const { match: { params: { id } } } = this.props;
        try {
            const invoiceData = await API.graphql(graphqlOperation(getInvoice, { id }));
            const {contactID, dueDate, status, total } = invoiceData.data.getInvoice;
            this.setState({
                invoice: {
                    id,
                    contactID,
                    dueDate,
                    status,
                    total: Number(total)
                }
            });
        }
        catch (err) {
            console.log('error fetching contact', err);
        }
    }

    async updateInvoiceForm(e) {
        const { invoice : { id, contactID, dueDate, status, total }} = this.state;
        if (e.currentTarget.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
        }
        this.setState({validated: true});
        const invoiceInfo = {
            id,
            contactID,
            dueDate,
            status,
            total: Number(total)
        };
        try { await API.graphql(graphqlOperation(updateInvoice, { input: invoiceInfo })) }
        catch (err) { console.log('error updating invoice', err); }
    }

    async fetchContacts () {
        try {
            const contactsData = await API.graphql(graphqlOperation(listContacts))
            const contacts = contactsData.data.listContacts.items
            this.setState({contacts});
        }
        catch (err) {
            console.log('error fetching contacts', err);
        }
    }


    cancelInvoiceForm() {
        return this.props.history.push('/invoices');
    }

    handleChange (e) {
        console.log(e.target.value);
        this.setState({
            invoice: {
                ...this.state.invoice,
                [e.target.name]: e.target.value,
            }
        });
    }

    render() {
        const { contacts, invoice: { total, dueDate } } = this.state;
        console.log(this.state.invoice);
        return (
            <Container style={{padding: '3.5rem', maxWidth: '800px'}}>
                <Card className="text-center">
                <Card.Header>Update Invoice</Card.Header>
                    <Form 
                        style={{paddingTop: '3.25rem'}}
                        onSubmit={(e) => this.updateInvoiceForm(e)}
                        validated={this.state.validated}
                    >
                        <Card.Body>
                            <Form.Group as={Row}>
                                <Form.Label column sm={3}>Name of Contact</Form.Label>
                                <Col sm={4}>
                                <Form.Control as="select" name="contactID"
                                    required onChange={this.handleChange}>
                                    <option disabled>
                                        Select a contact
                                    </option>
                                {contacts.map((contact, index) => (
                                    <option
                                    key={index} value={contact.id} name="contactID">
                                        {contact.firstName} {contact.lastName}
                                    </option>
                                ))}
                                </Form.Control>
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row}>
                                <Form.Label column sm={3}>Email</Form.Label>
                                <Col sm={7}>
                                    <Form.Control type="email"
                                        placeholder="example@example.com"
                                        name="email"/>
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row}>
                                <Form.Label column sm={3}>Amount Due</Form.Label>
                                <Col sm={7}>
                                <InputGroup>
                                    <InputGroup.Prepend>
                                    <InputGroup.Text>$</InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <Form.Control required type="number"
                                        value={total} name="total" onChange={this.handleChange}
                                    />
                                </InputGroup>
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row}>
                                <Form.Label column sm={3}>Due Date</Form.Label>
                                <Col sm={5}>
                                    <Form.Control required onChange={this.handleChange}
                                    value={dueDate} type="date" name="dueDate"/>
                                </Col>
                            </Form.Group>
                            <fieldset>
                            <Form.Group as={Row}>
                                <Form.Label as="legend" column sm={3}>Status</Form.Label>
                                <Col sm={5}>
                                    <Form.Check 
                                        required onChange={this.handleChange}
                                        inline 
                                        type="radio" label="not paid" name="status" value="not paid"/>
                                    <Form.Check required onChange={this.handleChange}
                                        inline type="radio" label="paid" name="status" value="paid"/>
                                    <Form.Check required onChange={this.handleChange}
                                        inline type="radio" label="overdue" name="status" value="overdue"/>
                                </Col>
                            </Form.Group>
                            </fieldset>
                            <Form.Group as={Row}>
                                <Form.Label column sm={3}>Group</Form.Label>
                                <Col sm={7}>
                                <InputGroup>
                                    <Form.Control placeholder="Enter group name" />
                                    <InputGroup.Append>
                                    <Button variant="outline-secondary">
                                        <i className="fa fa-check"></i>
                                    </Button>
                                    </InputGroup.Append>
                                </InputGroup>
                                </Col>
                            </Form.Group>
                        </Card.Body>
                        <Card.Footer>
                            <Form.Group as={Row} className="justify-content-md-center">
                                <Col sm={6}><Button type="submit">Save</Button></Col>
                                <Col sm={4}><Button variant="outline-secondary"
                                        onClick={this.cancelInvoiceForm}
                                >Cancel</Button></Col>
                            </Form.Group>
                        </Card.Footer>
                    </Form>
                </Card>
            </Container>
        )
    }
}

export default UpdateInvoice;