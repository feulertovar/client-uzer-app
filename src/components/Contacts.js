import React, { Component } from 'react';

class Contacts extends Component {

    render() {
        return (
            <main class="pt-5">
            <div class="container">
            <link href="../App.css" rel="stylesheet" />
                <div class="row">
                <div class="col-md-3">
                <div class="list-group">
                    <a href="#" class="list-group-item list-group-item-action d-flex justify-content-between align-items-center active">All Contact <span class="badge badge-secondary badge-pill">5</span></a>
                    <a href="#" class="list-group-item list-group-item-action d-flex justify-content-between align-items-center">Friends <span class="badge badge-pill badge-secondary">0</span></a>
                    <a href="#" class="list-group-item list-group-item-action d-flex justify-content-between align-items-center">Duplicates <span class="badge badge-pill badge-secondary">5</span></a>
                    <a href="#" class="list-group-item list-group-item-action d-flex justify-content-between align-items-center">Other <span class="badge badge-pill badge-secondary">5</span></a>
                </div>
                </div>

                <div class="col-md-7">
                    <div class="card">
                    <div class="card-header"><strong>All Contacts</strong>
                </div>
              
                <table class="table">
                    <tbody>
                    <tr>
                        <td class="middle">
                            <div class="media">
                            <div class="media-left">
                                <div class="media-body">
                                <h4 class="media-heading">Name</h4>
                                <address>
                                name@example.com <br />
                                123-456-7890
                                </address>
                            </div>
                            </div>
                            </div>
                        </td>
                        <td width="130" class="middle">
                            <div>
                            <a href="#" class="btn btn-outline-primary btn-circle btn-xs" title="Action">
                                <i class="fa fa-paper-plane"></i>
                            </a>
                            <a href="update-contact" class="btn btn-outline-primary btn-circle btn-xs" title="Edit">
                                <i class="fa fa-edit"></i>
                            </a>
                            <a href="#" class="btn btn-outline-danger btn-circle btn-xs" title="Delete">
                                <i class="fa fa-times"></i>
                            </a>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="middle">
                            <div class="media">
                            <div class="media-left">
                                <div class="media-body">
                                <h4 class="media-heading">Name</h4>
                                <address>
                                name@example.com <br />
                                123-456-7890
                                </address>
                            </div>
                            </div>
                            </div>
                        </td>
                        <td width="130" class="middle">
                            <div>
                            <a href="#" class="btn btn-outline-primary btn-circle btn-xs" title="Action">
                                <i class="fa fa-paper-plane"></i>
                            </a>
                            <a href="update-contact" class="btn btn-outline-primary btn-circle btn-xs" title="Edit">
                                <i class="fa fa-edit"></i>
                            </a>
                            <a href="#" class="btn btn-outline-danger btn-circle btn-xs" title="Edit">
                                <i class="fa fa-times"></i>
                            </a>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="middle">
                            <div class="media">
                            <div class="media-left">
                                <div class="media-body">
                                <h4 class="media-heading">Name</h4>
                                <address>
                                name@example.com <br />
                                123-456-7890
                                </address>
                            </div>
                            </div>
                            </div>
                        </td>
                        <td width="130" class="middle">
                            <div>
                            <a href="#" class="btn btn-outline-primary btn-circle btn-xs" title="Action">
                                <i class="fa fa-paper-plane"></i>
                            </a>
                            <a href="update-contact" class="btn btn-outline-primary btn-circle btn-xs" title="Edit">
                                <i class="fa fa-edit"></i>
                            </a>
                            <a href="#" class="btn btn-outline-danger btn-circle btn-xs" title="Edit">
                                <i class="fa fa-times"></i>
                            </a>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="middle">
                            <div class="media">
                            <div class="media-left">
                                <div class="media-body">
                                <h4 class="media-heading">Name</h4>
                                <address>
                                name@example.com <br />
                                123-456-7890
                                </address>
                            </div>
                            </div>
                            </div>
                        </td>
                        <td width="130" class="middle">
                            <div>
                            <a href="#" class="btn btn-outline-primary btn-circle btn-xs" title="Action">
                                <i class="fa fa-paper-plane"></i>
                            </a>
                            <a href="update-contact" class="btn btn-outline-primary btn-circle btn-xs" title="Edit">
                                <i class="fa fa-edit"></i>
                            </a>
                            <a href="#" class="btn btn-outline-danger btn-circle btn-xs" title="Edit">
                                <i class="fa fa-times"></i>
                            </a>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="middle">
                            <div class="media">
                            <div class="media-left">
                                <div class="media-body">
                                <h4 class="media-heading">Name</h4>
                                <address>
                                name@example.com <br />
                                123-456-7890
                                </address>
                            </div>
                            </div>
                            </div>
                        </td>
                        <td width="130" class="middle">
                            <div>
                            <a href="#" class="btn btn-outline-primary btn-circle btn-xs" title="Action">
                                <i class="fa fa-paper-plane"></i>
                            </a>
                            <a href="update-contact" class="btn btn-outline-primary btn-circle btn-xs" title="Edit">
                                <i class="fa fa-edit"></i>
                            </a>
                            <a href="#" class="btn btn-outline-danger btn-circle btn-xs" title="Edit">
                                <i class="fa fa-times"></i>
                            </a>
                            </div>
                        </td>
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
                </div>
                
                </div>
            </div>
            <div class="btn-follow">
                <a href="new-contact">
                    <button
                        type="button"
                        class="btn btn-outline-primary"
                    >
                        New Contact
                    </button>
                </a>
            </div>
            </div>
            <footer class="site-footer">
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

export default Contacts;