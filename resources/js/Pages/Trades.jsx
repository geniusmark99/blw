import "../../css/trades.css";
import { ListIcon, CloseIcon } from "@/Components/Icons/Icons";
import { useState, useRef } from "react";
import DashboardLayout from '@/Layouts/DashboardLayout';
import { Head } from '@inertiajs/react';
import { AddClass, RemoveClass, ContainsClass } from "@/Components/functions";
export default function Trades({ auth }) {

    const [open, setOpen] = useState(false);

    const HandleMobileList = () => {
        setOpen((previousState) => !previousState);
        if (!ContainsClass(".trades-ul", "show")) {
            AddClass(".trades-ul", "show");
        } else {
            RemoveClass(".trades-ul", "show");
        }
    };

    return <>
        <Head title="Trades" />
        <DashboardLayout user={auth.user}>

            <div id="trades-content">
                <div className="trades-content-top">
                    <button id="open-trade-menu" className="btn" onClick={HandleMobileList}>
                        {open ? <CloseIcon /> : <ListIcon />}
                    </button>
                    <ul className="trades-ul">
                        <li className="pink-grad">
                            <div className="trade-li-1">EUR/USD</div>
                            <div className="trade-li-2">1.074845</div>
                        </li>

                        <li className="blue-grad">
                            <div className="trade-li-1">EUR/USD</div>
                            <div className="trade-li-2">1.074845</div>
                        </li>

                        <li className="lemon-grad">
                            <div className="trade-li-1">EUR/USD</div>
                            <div className="trade-li-2">1.074845</div>
                        </li>

                        <li className="pink-grad">
                            <div className="trade-li-1">EUR/USD</div>
                            <div className="trade-li-2">1.074845</div>
                        </li>

                        <li className="blue-grad">
                            <div className="trade-li-1">EUR/USD</div>
                            <div className="trade-li-2">1.074845</div>
                        </li>

                        <li className="lemon-grad">
                            <div className="trade-li-1">EUR/USD</div>
                            <div className="trade-li-2">1.074845</div>
                        </li>
                    </ul>
                </div>
                <div className="trades-content-bottom">
                    <div className="trades-content-bottom-sub top">
                        <div className="trade-title">TRADES</div>
                        <div className="trade-main-content">
                            <div className="trade-main-content-sub top">
                                <h2>Lot Size</h2>
                                <ul>
                                    <li>-0.1</li>
                                    <li>-0.01</li>
                                    <li>1.00</li>
                                    <li>+1.00</li>
                                </ul>

                                <div className="trade-stop-loss">
                                    <div className="input-stop-loss">
                                        <input type="number" />
                                        <span style={{ "--col:": "red" }}>Stop loss</span>
                                    </div>
                                    <div className="input-stop-loss">
                                        <input type="number" />
                                        <span style={{ "--col": "var(--grad-blue-2)" }}>Take Profit</span>
                                    </div>
                                </div>
                            </div>
                            <div className="trade-main-content-sub bottom">
                                <div className="bottom-inner">
                                    <button className="bottom-btn one">SELL</button>
                                    <button className="bottom-btn two">BUY</button>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="trades-content-bottom-sub bottom">
                        {/* <img src="./images/Chart-example.png"> */}
                    </div>
                </div>
            </div>

        </DashboardLayout>
    </>
}