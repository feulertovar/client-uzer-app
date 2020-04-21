import React, { Component } from 'react';

class Invoices extends Component {

    render() {
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
                                    <tr>
                                        <td>Name</td>
                                        <td class="text-center">$10.99</td>
                                        <td class="text-center">4-1-2020</td>
                                        <td class="text-center"><span class="badge badge-secondary badge-success">Paid</span></td>
                                        <td width="130" class="middle">
                                            <div>
                                                <a href="#" class="btn btn-outline-primary btn-circle btn-xs" title="Action">
                                                    <i class="fa fa-paper-plane"></i>
                                                </a>
                                                <a href="update_invoice.html" class="btn btn-outline-primary btn-circle btn-xs" title="Edit">
                                                    <i class="fa fa-edit"></i>
                                                </a>
                                                <a href="#" class="btn btn-outline-danger btn-circle btn-xs" title="Edit">
                                                    <i class="fa fa-times"></i>
                                                </a>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Name</td>
                                        <td class="text-center">$20.00</td>
                                        <td class="text-center">3-3-2020</td>
                                        <td class="text-center"><span class="badge badge-secondary badge-danger">Not Paid</span></td>
                                        <td width="130" class="middle">
                                            <div>
                                                <a href="#" class="btn btn-outline-primary btn-circle btn-xs" title="Action">
                                                    <i class="fa fa-paper-plane"></i>
                                                </a>
                                                <a href="update_invoice.html" class="btn btn-outline-primary btn-circle btn-xs" title="Edit">
                                                    <i class="fa fa-edit"></i>
                                                </a>
                                                <a href="#" class="btn btn-outline-danger btn-circle btn-xs" title="Edit">
                                                    <i class="fa fa-times"></i>
                                                </a>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Name</td>
                                        <td class="text-center">$600.00</td>
                                        <td class="text-center">1-1-1990</td>
                                        <td class="text-center"><span class="badge badge-secondary badge-danger">Overdue</span></td>
                                        <td width="130" class="middle">
                                            <div>
                                                <a href="#" class="btn btn-outline-primary btn-circle btn-xs" title="Action">
                                                    <i class="fa fa-paper-plane"></i>
                                                </a>
                                                <a href="update_invoice.html" class="btn btn-outline-primary btn-circle btn-xs" title="Edit">
                                                    <i class="fa fa-edit"></i>
                                                </a>
                                                <a href="#" class="btn btn-outline-danger btn-circle btn-xs" title="Edit">
                                                    <i class="fa fa-times"></i>
                                                </a>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                    </tr>
                                </tbody>
                            </table>
                             <div class="card-footer" style={{marginTop: '400px'}}>
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