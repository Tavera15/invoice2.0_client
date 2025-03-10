import React from "react";
import { Table } from "react-bootstrap";

function FinalizedInvoice({invoice})
{
    return(
        <div className="w-100">
            <div>
                <div className="card">
                    <div className="card-header text-center">Invoice:
                        <strong> #{invoice.invoiceNumber}</strong>
                    </div>
                    <div className="card-body p-0">

                        { invoice.logo
                            ?   <div className="col-12 d-flex justify-content-center py-3" id="logo">
                                    <img className="col-6 col-lg-2" style={{"aspectRatio": "1/1", "objectFit": "contain"}} src={invoice.logo} alt="logo"/>
                                </div>

                            :   <div></div>
                        }

                        <div className="col-12 mb-4">
                            <div className="d-flex flex-wrap col">
                                <div className="col-12 col-md-6 p-2 border invoice-header-block">
                                    <table className="col-12">
                                        <thead className="border">
                                            <tr>
                                                <th>From</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="text-left">
                                                <td>
                                                    <p className="m-0">
                                                        <strong>{invoice.business.name}</strong>
                                                    </p>
                                                    <p className="m-0">{invoice.business.addressLine1}</p>
                                                    <p className="m-0">{invoice.business.addressLine2}</p>
                                                    <p className="m-0">
                                                        {invoice.business.city !== "" ? invoice.business.city + ", " : ""}
                                                        {invoice.business.state !== "" ? invoice.business.state + ", " : ""}
                                                        {invoice.business.zip}
                                                    </p>
                                                    <p className="m-0">{invoice.business.email}</p>
                                                    <p className="m-0">{invoice.business.phone}</p>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table> 
                                </div>
                                
                                <div className="col-12 col-md-6 p-2 border invoice-header-block">
                                    <table className="col-12" border={"0px"} >
                                        <thead className="border">
                                            <tr>
                                                <th>To</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="text-left justify-content-stretch">
                                                <td>
                                                    <div>
                                                        <strong>{invoice.client.name}</strong>
                                                    </div>
                                                    <div>{invoice.client.addressLine1}</div>
                                                    <div>{invoice.client.addressLine2}</div>
                                                    <p className="m-0">
                                                        {invoice.client.city !== "" ? invoice.client.city + ", " : ""}
                                                        {invoice.client.state !== "" ? invoice.client.state + ", " : ""}
                                                        {invoice.client.zip}
                                                    </p>
                                                    
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>                             
                        <div className="table-responsive">
                            <Table bordered className="table table-striped text-left">
                                <thead>
                                    <tr className="center-text">
                                        <th className="center">#</th>
                                        <th>Item</th>
                                        <th>Description</th>
                                        <th className="center">Quantity</th>
                                        <th className="right">Unit Cost</th>
                                        <th className="right">Total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {(JSON.parse(invoice.customs)).map((p, i) => 
                                        <tr key={i}>                                 
                                            <td className="center">{i+1}</td>
                                            <td className="left">{p.name}</td>
                                            <td className="left">
                                                <div>
                                                    {p.description}
                                                </div>
                                            </td>
                                            <td className="center">{Number.parseInt(p.quantity)}</td>
                                            <td className="right">${Number.parseFloat(p.price).toFixed(2)}</td>
                                            <td className="right">${(Number.parseFloat(p.price) * Number.parseInt(p.quantity)).toFixed(2)}</td>
                                        </tr>
                                    )}
                                </tbody>
                            </Table>
                        </div>
                        
                        <div className="col-12">
                            <div className="d-flex flex-wrap col">

                                <div className="col-12 col-md-6 mb-4 border invoice-header-block">
                                    <table className="col-12">
                                        <thead className="border">
                                            <tr>
                                                <th className="text-center">Notes</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="text-left">
                                                <td>
                                                    Thank you!
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div className="col-12 col-md-6 mb-4 border invoice-header-block">
                                    <table className="col-12">
                                        <thead className="border">
                                            <tr>
                                                <th className="text-center">Calculations</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="">
                                                <td className="">
                                                    <div className=""> 
                                                        <table className="table table-clear text-left">
                                                            <tbody>
                                                                <tr>
                                                                    <td className="left">
                                                                        <strong>Subtotal</strong>
                                                                    </td>
                                                                    <td className="right">${invoice.subtotal}</td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="left">
                                                                        <strong>Tax</strong>
                                                                    </td>
                                                                    <td className="right">${invoice.taxes || 0}</td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="left">
                                                                        <strong>Total</strong>
                                                                    </td>
                                                                    <td className="right">
                                                                        <strong>${invoice.grand_total}</strong>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>       
    );
}

export default FinalizedInvoice;