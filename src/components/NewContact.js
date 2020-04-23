import React, { Component } from 'react';
import { API, graphqlOperations } from 'aws-amplify';
import { createContact } from '../graphql/mutations';

class NewContact extends Component {
    constructor(props){
        super(props);
        this.createNewContact = this.createNewContact.bind(this);
    }
    
    componentDidMount() {
        console.log("new contact component triggered");
    }

    createNewContact (e) {
        console.log("new contact form submitted");
    }

    render() {
        return (
            <main class="py-5">
            <div class="container">
                <div class="row">
                    <div class="col-md-9">
                        <div class="card">
                            <div class="card-header">
                                <strong>New Contact</strong>
                            </div>
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-md-9">
                                        <div class="form-group row">
                                            <label for="name" class="col-md-3 col-form-label">Name</label>
                                            <div class="col-md-8">
                                                <input type="text" name="firstName" id="name" class="form-control" placeholder="Name" />
                                            </div>
                                        </div>
    
                                        <div class="form-group row">
                                            <label for="company" class="col-md-3 col-form-label">Company</label>
                                            <div class="col-md-8">
                                                <input type="text" name="company" id="company" class="form-control" placeholder="Optional" />
                                            </div>
                                        </div>
    
                                        <div class="form-group row">
                                            <label for="email" class="col-md-3 col-form-label">Email</label>
                                            <div class="col-md-8">
                                                <input type="text" name="email" id="email" class="form-control" placeholder="example@example.com" />
                                            </div>
                                        </div>
    
                                        <div class="form-group row">
                                            <label for="phone" class="col-md-3 col-form-label">Phone</label>
                                            <div class="col-md-8">
                                                <input type="text" name="phoneNumber" id="phone" class="form-control" placeholder="e.g. 999-999-9999" />
                                            </div>
                                        </div>
    
                                        <div class="form-group row">
                                            <label for="name" class="col-md-3 col-form-label">Note</label>
                                            <div class="col-md-8">
                                                <textarea name="note" id="address" rows="3" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <label for="group" class="col-md-3 col-form-label">Group</label>
                                            <div class="col-md-5">
                                                <select name="group" id="group" class="form-control">
                                                    <option value="">Select group</option>
                                                    <option value="1">Friends</option>
                                                    <option value="3">Other</option>
                                                </select>
                                            </div>
                                            <div class="col-md-3">
                                                <a href="#" id="add-group-btn" class="btn btn-outline-secondary btn-block">Add Group</a>
                                            </div>
                                        </div>
                                        <div class="form-group row" id="add-new-group">
                                            <div class="offset-md-3 col-md-8">
                                                <div class="input-group mb-3">
                                                    <input type="text" class="form-control" name="group_id" placeholder="Enter group name" aria-label="Enter group name" aria-describedby="button-addon2" />
                                                    <div class="input-group-append">
                                                        <button class="btn btn-outline-secondary" type="button" id="button-addon2">
                                                            <i class="fa fa-check"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
    
                                </div>
                            </div>
                            <div class="card-footer">
                                <div class="row">
                                    <div class="col-md-8">
                                        <div class="row">
                                            <div class="col-md-offset-3 col-md-6">
                                                <button type="submit" class="btn btn-primary" onClick={e => this.createNewContact(e)}>Save</button>
                                                <a href="contacts" class="btn btn-outline-secondary">Cancel</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        )
    }
}

export default NewContact;