import React, { Component } from 'react';

class UpdateInvoice extends Component {

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
                                                <input type="text" name="name" id="name" class="form-control" placeholder="Name" />
    
                                            </div>
                                        </div>
    
                                        <div class="form-group row">
                                            <label for="email" class="col-md-3 col-form-label">Email</label>
                                            <div class="col-md-8">
                                                <div class="row-fluid">
                                                    <select class="selectpicker" data-show-subtext="true" data-live-search="true">
                                                        <option>name@example.com</option>
                                                        <option>name@example.com</option>
                                                        <option>name@example.com</option>
                                                        <option>name@example.com</option>
                                                        <option>name@example.com</option>
                                                        <option disabled="disabled">name@example.com</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
    
                                        <div class="form-group row">
                                            <label for="amount" class="col-md-3 col-form-label">Amount Due</label>
                                            <div class="col-md-8">
                                                <div class="input-group-prepend">
                                                    <span class="input-group-text">$</span>
                                                    <form method="post" action="#">
                                                        <input type="text" class="form-control" placeholder="0.00" />
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
    
                                        <div class="form-group row">
                                            <label for="name" class="col-md-3 col-form-label">Date due</label>
                                            <div class="col-md-8">
                                                <input type="date" id="date_due" name="date_due" />
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <label for="group" class="col-md-3 col-form-label">Status</label>
                                            <div class="col-md-5">
                                                <form action="#">
                                                    <input type="radio" id="paid" name="status" value="paid" />
                                                    <label for="paid">Paid</label><br />
                                                    <input type="radio" id="not_paid" name="status" value="not_paid" />
                                                    <label for="not_paid">Not paid</label><br />
                                                    <input type="radio" id="overdue" name="status" value="overdue" />
                                                    <label for="overdue">Overdue</label>
                                                    <br />
                                                </form>
    
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
                                                <button type="submit" class="btn btn-primary">Save</button>
                                                <a href="invoices" class="btn btn-outline-secondary">Cancel</a>
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

export default UpdateInvoice;