import React, { Component } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { listContacts } from '../graphql/queries';

class Contacts extends Component {
    constructor(props){
        super(props);
        this.state = { contacts: null }
        this.fetchContacts = this.fetchContacts.bind(this);
        this.viewNewContactForm = this.viewNewContactForm.bind(this);
        this.viewUpdateContactForm = this.viewUpdateContactForm.bind(this);
    }

    componentDidMount() {
        this.fetchContacts();
    }

    async fetchContacts () {
        try {
            const contactsData = await API.graphql(graphqlOperation(listContacts))
            const contacts = contactsData.data.listContacts.items
            this.setState({contacts})
        }
        catch (err) {
            console.log('error fetching contacts', err);
        }
    }

    viewNewContactForm () {
        console.log("viewNewContactForm button clicked");
        this.props.history.push('/new-contact');
    }

    viewUpdateContactForm (id) {
        console.log("viewUpdateContactForm button clicked");
        this.props.history.push(`/update-contact/${id}`);
    }

    render() {
        const { contacts } = this.state;
        console.log(this.state)

        return (
            <main class="pt-5">
            <div class="container">
            <link href="../App.css" rel="stylesheet" />
                <div class="row">
                <div class="col-md-3">
                <div class="list-group">
        <a href="#" class="list-group-item list-group-item-action d-flex justify-content-between align-items-center active">All Contacts<span class="badge badge-secondary badge-pill">{contacts ? contacts.length : 0}</span></a>
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
                        { contacts ? contacts.map((contact, index) => {
                          return (<tr key={index}>
                          <td class="middle">
                              <div class="media">
                              <div class="media-left">
                                  <div class="media-body">
                                  <h4 class="media-heading">{contact.firstName}</h4>
                                  <address>
                                  {contact.email || `No Email Specified`} <br />
                                  {contact.phoneNumber || `No phone number specified`}
                                  </address>
                              </div>
                              </div>
                              </div>
                          </td>
                          <td width="130" class="middle">
                              <div>
                              <button class="btn btn-outline-primary btn-circle" onClick={() => this.viewUpdateContactForm(contact.id)}>
                                <i class="fa fa-edit"></i>
                              </button>
                              <a href="#" class="btn btn-outline-danger btn-circle btn-xs" title="Delete">
                                  <i class="fa fa-times"></i>
                              </a>
                              </div>
                          </td>
                      </tr>  
                        )}) : (<tr></tr>)
                        }
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
                    <button
                        type="button"
                        class="btn btn-outline-primary"
                        onClick={this.viewNewContactForm}
                    >
                        New Contact
                    </button>
            </div>
            </div>
            <footer class="site-footer">
                 <div class="container">
                         <div class="col-md-12">
                             <p>
                                 <br />
                                 Copyright &copy; 2020
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