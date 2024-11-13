import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import './Receipt.scss';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import invoiceService from '~/services/invoiceService';
import formatPrice from '~/utils/formatPrice';
import { getCouponByCode } from '~/services/couponService';

function Receipt() {
    const [invoice, setInvoice] = useState<any>();
    const [discount, setDiscount] = useState<any>();

    const { id } = useParams();

    useEffect(() => {
        (async () => {
            const res: any = await invoiceService
                .getInvoiceById({ id: Number(id) })
                .catch((error) => console.log(error));
            setInvoice(res.data);

            getCouponByCode(res.data.couponCode).then((data) => {
                setDiscount(data?.discount ? res.data?.course.price * data?.discount * 0.01 : 0);
            });
        })();
    }, []);

    return (
        <div className="invoice-wrapper" id="print-area">
            <div className="invoice">
                <div className="invoice-container">
                    <div className="invoice-head">
                        <div className="invoice-head-top">
                            <div className="invoice-head-top-left text-start logo">
                                <FontAwesomeIcon icon={faCode} />
                                <span>CodeLearn</span>
                            </div>
                            <div className="invoice-head-top-right text-end">
                                <h3>Invoice</h3>
                            </div>
                        </div>
                        <div className="hr" />
                        <div className="invoice-head-middle">
                            <div className="invoice-head-middle-left text-start">
                                <p>
                                    <span className="text-bold">Date</span>: {new Date().toUTCString()}
                                </p>
                            </div>
                            <div className="invoice-head-middle-right text-end">
                                <p>
                                    <span className="text-bold">Invoice No:{invoice?.id}</span>
                                </p>
                            </div>
                        </div>
                        <div className="hr" />
                        <div className="invoice-head-bottom">
                            <div className="invoice-head-bottom-left">
                                <ul>
                                    <li className="text-bold">Invoiced To:</li>
                                    <li>{invoice?.user?.fullName}</li>
                                    <li>{invoice?.user?.email}</li>
                                    <li>15 Hodges Mews, High Wycombe</li>
                                    <li>HP12 3JL</li>
                                    <li>United Kingdom</li>
                                </ul>
                            </div>
                            <div className="invoice-head-bottom-right">
                                <ul className="text-end">
                                    <li className="text-bold">Pay To:</li>
                                    <li>CodeLearn Inc.</li>
                                    <li>2705 N. Enterprise</li>
                                    <li>Orange, CA 89438</li>
                                    <li>contact@codelearninc.com</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="overflow-view">
                        <div className="invoice-body">
                            <table>
                                <thead>
                                    <tr>
                                        <td className="text-bold">Service</td>
                                        <td className="text-bold">Description</td>
                                        <td className="text-bold">Price</td>
                                        <td className="text-bold">Amount</td>
                                        <td className="text-bold text-end">Total</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{invoice?.course.title}</td>
                                        <td>{invoice?.course.description}</td>
                                        <td>{formatPrice(invoice?.course.price)}</td>
                                        <td className="text-center">1</td>
                                        <td className="text-end">{formatPrice(invoice?.course.price)}</td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className="invoice-body-bottom">
                                <div className="invoice-body-info-item border-bottom">
                                    <div className="info-item-td text-end text-bold">Discount:</div>
                                    <div className="info-item-td text-end">
                                        {invoice?.total && '- ' + formatPrice(discount)}
                                    </div>
                                </div>
                                <div className="invoice-body-info-item border-bottom">
                                    <div className="info-item-td text-end text-bold">Sub Total:</div>
                                    <div className="info-item-td text-end">
                                        {invoice?.total && formatPrice(invoice?.total)}
                                    </div>
                                </div>
                                {/* <div className="invoice-body-info-item border-bottom">
                                    <div className="info-item-td text-end text-bold">Tax:</div>
                                    <div className="info-item-td text-end">0 đ</div>
                                </div> */}
                                <div className="invoice-body-info-item">
                                    <div className="info-item-td text-end text-bold">Total:</div>
                                    <div className="info-item-td text-end">
                                        {invoice?.total && formatPrice(invoice?.total)}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="invoice-foot text-center">
                        <p>
                            <span className="text-bold text-center">NOTE:&nbsp;</span>This is computer generated receipt
                            and does not require physical signature.
                        </p>
                        <div className="invoice-btns">
                            <button type="button" className="invoice-btn" onClick={() => window.print()}>
                                <span>
                                    <i className="fa-solid fa-print" />
                                </span>
                                <span>Print</span>
                            </button>
                            <button type="button" className="invoice-btn">
                                <span>
                                    <i className="fa-solid fa-download" />
                                </span>
                                <span>Download</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Receipt;
