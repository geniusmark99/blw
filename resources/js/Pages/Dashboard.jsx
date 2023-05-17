import '../../css/home.css';
import DashboardLayout from '@/Layouts/DashboardLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard({ auth }) {
    return <>
        <Head title="Dashboard" />
        <DashboardLayout user={auth.user}>
            {/* Content one */}
            <div id="home-top" className="home-page-content">
                <div className="home-page-content-sub">
                    <div className="home-title">CHARTS</div>
                    <div className="home-title-img">
                        {/* <img src="./images/" alt=""> */}
                    </div>
                </div>

                <div className="home-page-content-sub two">
                    <div className="home-title">QUOTES</div>
                    <div className="home-title-extra">
                        <div className="home-title-extra-sub">

                            <div className="home-inner-extra-sub one">
                                <div>
                                    <h2>EURUSD</h2>
                                    <span>Euro/US Dollar</span>
                                </div>
                                <h3>1.0346</h3>
                                <div className="home-inner-percent">
                                    <h3>+0.00200</h3>
                                    <h3>+0.2%</h3>
                                </div>
                            </div>

                            <div className="home-inner-extra-sub one">
                                <div>
                                    <h2>EURUSD</h2>
                                    <span>Euro/US Dollar</span>
                                </div>
                                <h3>1.0346</h3>
                                <div className="home-inner-percent">
                                    <h3>+0.00200</h3>
                                    <h3>+0.2%</h3>
                                </div>
                            </div>

                        </div>


                        <div className="home-title-extra-sub">

                            <div className="home-inner-extra-sub two">
                                <div>
                                    <h2>EURUSD</h2>
                                    <span>Euro/US Dollar</span>
                                </div>
                                <h3>1.0346</h3>
                                <div className="home-inner-percent">
                                    <h3>+0.00200</h3>
                                    <h3>+0.2%</h3>
                                </div>
                            </div>

                            <div className="home-inner-extra-sub two">
                                <div>
                                    <h2>EURUSD</h2>
                                    <span>Euro/US Dollar</span>
                                </div>
                                <h3>1.0346</h3>
                                <div className="home-inner-percent">
                                    <h3>+0.00200</h3>
                                    <h3>+0.2%</h3>
                                </div>
                            </div>

                        </div>
                        <div className="home-title-extra-sub">

                            <div className="home-inner-extra-sub three">
                                <div>
                                    <h2>EURUSD</h2>
                                    <span>Euro/US Dollar</span>
                                </div>
                                <h3>1.0346</h3>
                                <div className="home-inner-percent">
                                    <h3>+0.00200</h3>
                                    <h3>+0.2%</h3>
                                </div>
                            </div>

                            <div className="home-inner-extra-sub three">
                                <div>
                                    <h2>EURUSD</h2>
                                    <span>Euro/US Dollar</span>
                                </div>
                                <h3>1.0346</h3>
                                <div className="home-inner-percent">
                                    <h3>+0.00200</h3>
                                    <h3>+0.2%</h3>
                                </div>
                            </div>

                        </div>


                    </div>
                </div>
            </div>
            {/* End of Content one*/}

            {/* Content Two*/}

            <div id="home-bottom" className="home-page-content two">
                <div className="home-page-content-sub two">
                    <div className="home-title">Trusted Brokers</div>
                    <div className="home-title-extra trusted-brokers-sub">
                        <div className="broker-images">
                            {/* <img src="./images/BlackBull-Markets.png" alt=""> */}
                        </div>
                        <div className="broker-images">
                            {/* <img src="./images/ICM.png" alt=""> */}
                        </div>
                        <div className="broker-images">
                            {/* <img src="./images/XML.png" alt=""> */}
                        </div>
                    </div>
                </div>

                <div className="home-page-content-sub two">
                    <div className="home-title">Trading History</div>
                    <div className="home-title-extra trading-history">
                        <div className="trading-history-sub one">
                            <div className="trading-history-one">
                                <div>EURUSD &nbsp; Euro/ US Dollar</div>
                                <div>1.0344</div>
                            </div>
                            <div className="trading-history-two">
                                <div className="open">open</div>
                                <div className="grad-loading-img">
                                    <div className="gradient-linear">
                                        <div className="inner-gradient-linear"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="trading-history-sub two">
                            <div className="trading-history-one">
                                <div>EURUSD &nbsp; Euro/ US Dollar</div>
                                <div>1.0344</div>
                            </div>
                            <div className="trading-history-two">
                                <div className="open">open</div>
                                <div className="grad-loading-img">
                                    <div className="gradient-linear">
                                        <div className="inner-gradient-linear"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="trading-history-sub three">
                            <div className="trading-history-one">
                                <div>EURUSD &nbsp; Euro/ US Dollar</div>
                                <div>1.0344</div>
                            </div>
                            <div className="trading-history-two">
                                <div className="open">open</div>
                                <div className="grad-loading-img">
                                    <div className="gradient-linear">
                                        <div className="inner-gradient-linear"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End of Content Two*/}





        </DashboardLayout>
    </>
}
