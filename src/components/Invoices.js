import React, { Component } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { listInvoices } from '../graphql/queries';
import { deleteInvoice } from '../graphql/mutations';

class Invoices extends Component {
    constructor(props) {
        super(props);
        this.state = { invoices: null };
        this.viewInvoiceForm = this.viewInvoiceForm.bind(this);
        this.fetchInvoices = this.fetchInvoices.bind(this);
        this.viewUpdateInvoiceForm = this.viewUpdateInvoiceForm.bind(this);
        this.deleteInvoiceForm = this.deleteInvoiceForm.bind(this);
    }

    componentDidMount() {
        this.fetchInvoices();
    }

    viewInvoiceForm () {
        this.props.history.push('/new-invoice')
    }

    viewUpdateInvoiceForm(id) {
        this.props.history.push(`/update-invoice/${id}`);
    }

    async fetchInvoices() {
        try {
            const invoicesData = await API.graphql(graphqlOperation(listInvoices));
            const invoices = invoicesData.data.listInvoices.items
            this.setState({invoices})
        } catch (err) {
            console.log('error fetching invoices', err)
        }
    }

    async deleteInvoiceForm (id) {
        console.log(id)
        try {
            await API.graphql(graphqlOperation(deleteInvoice, { input: {id}} ))
        }
        catch (err) {
            console.log('error deleting contact', err);
        }
        this.fetchInvoices();
        this.props.history.push('/invoices');
    }

    paymentStatusCss = (status) => {
        let initialCss = "badge badge-secondary";
        if (status.toLowerCase() === 'paid'){
            return `${initialCss} badge-success`;
        } else if (status.toLowerCase() === 'not paid') {
            return `${initialCss} badge-warning`;
        } else {
            return `${initialCss} badge-danger`;
        }
    }

    render() {
        console.log(this.state);
        const { invoices } = this.state;

        return (
            <main class="pt-5">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="panel panel-default">
                        <div class="panel-heading">
                            <h3 class="panel-title"><strong>Invoices</strong></h3>
                        </div>
                    <div class="panel-body">
                    <div class="table-responsive">
                    <table class="table table-condensed">
                    <thead>
                    <tr>
                    <td><strong>Contact</strong>
                    </td>
                    <td class="text-center"><strong>Total</strong></td>
                    <td class="text-center"><strong>Date Due</strong></td>
                    <td class="text-center"><strong>Status</strong></td>
                    <td class="text-right"><strong>Action</strong>
                    </td>   
                        </tr>
                        </thead>
                        <tbody>
                        { invoices ? invoices.map((invoice, index) => {
                            return (
                                <tr key={index}>
                                    <td>{`${invoice.contact.firstName} ${invoice.contact.lastName}`}</td>
                                <td class="text-center">${invoice.total}</td>
                                <td class="text-center">{invoice.dueDate}</td>
                                <td class="text-center">
                                    <span class={this.paymentStatusCss(invoice.status)}>{invoice.status}
                                    </span></td>
                                <td width="130" class="middle">
                                <div>
                                <button class="btn btn-outline-primary btn-circle btn-xs" title="Edit" onClick={() => this.viewUpdateInvoiceForm(invoice.id)}>
                                    <i class="fa fa-edit"></i>
                                    </button>
                                <button class="btn btn-outline-danger btn-circle btn-xs" title="Delete" onClick={() => this.deleteInvoiceForm(invoice.id)}>
                                    <i class="fa fa-times"></i>
                                </button>
                                </div>
                                    </td>
                                </tr>   
                            )}) : (<tr></tr>)
                            }
                        <tr>
                        </tr>
                        </tbody>
                        </table>
                        <div class="card-footer">
                        <nav aria-label="Page Navigation">
                            <ul class="pagination justify-content-center">
                                <li class="page-item">
                                    <a class="page-link" href="#">Previous</a>
                                </li>
                                <li class="page-item active"><a class="page-link" href="#">1</a></li>
                                <li class="page-item">
                                    <a class="page-link" href="#">2</a>
                                </li>
                                <li class="page-item"><a class="page-link" href="#">3</a></li>
                                <li class="page-item">
                                    <a class="page-link" href="#">Next</a>
                                </li>
                            </ul>
                        </nav>
                            </div>
                    <div class="btn-follow">
                    <button
                        type="button"
                        class="btn btn-outline-primary"
                        onClick={this.viewInvoiceForm}
                    >
                        New Invoice
                    </button>
                </div>
                        </div>
                    </div>
                    </div>
                    </div>
                    </div>
                </div>
                <footer class="site-footer" style={{ marginTop: '50px' }}>
                    <div class="container">
                    <div class="col-md-12">
                        <p>
                            <br />
                            Copyright &copy;
                            by CS473 Team B
                        </p>
                    </div>
                    </div>
                </footer>
            </main>
        )
    }
}

export default Invoices;