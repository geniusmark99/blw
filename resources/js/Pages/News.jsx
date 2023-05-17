import '../../css/news.css';
import DashboardLayout from '@/Layouts/DashboardLayout';
import { Head } from '@inertiajs/react';
import { useState, useRef, useEffect } from 'react';
import { AddClass, RemoveClass, ContainsClass } from '@/Components/functions';
import { ArrowDownIcon, StarRatingIcon } from '@/Components/Icons/Icons';

export default function News({ auth }) {

    const HandleFooterContent = () => {
        if (ContainsClass(".news-content-content", "add-height")) {
            RemoveClass(".news-content-content", "add-height");
            RemoveClass(".news-expand-more", "rotate");
            RemoveClass(".news-content-header", "show");

        } else {
            AddClass(".news-content-content", "add-height");
            AddClass(".news-expand-more", "rotate");
            AddClass(".news-content-header", "show");
        }
    };

    const HandleEscEvent = () => {
        RemoveClass(".news-content-content", "add-height");
        RemoveClass(".news-content-header", "show");
        RemoveClass(".news-expand-more", "rotate");
    };

    useEffect(() => {
        document.addEventListener('keydown', function (event) {
            if (event.key === "Escape") {
                event.preventDefault();
                HandleEscEvent();
            }
        });
    })


    const newLists = [
        {
            id: 0,
            time: "02:22",
            premium: true,
            flagIcon: "france-flag",
            starRating: [true, false, false],
            countryTrade: "French HICP(Yoy)(Dec)",
            tradeValue: [{ no: "6.7%", color: "var(--red-500)" }, "7.2%", "7.1%"]
        },
        {
            id: 1,
            time: "02:22",
            premium: true,
            flagIcon: "france-flag",
            starRating: [true, true, false],
            countryTrade: "French HICP(MoM)(Dec)",
            tradeValue: [{ no: "-0.1%", color: "var(--red-500)" }, "0.3%", "0.4%"]
        },

        {
            id: 2,
            time: "02:22",
            flagIcon: "france-flag",
            starRating: [true, true, false],
            countryTrade: "Spanish Services PIM (Dec)",
            tradeValue: [{ no: "51%", color: "var(--green-500)" }, "50.8%", "50.11%"]
        },
        {
            id: 3,
            time: "02:22",
            flagIcon: "france-flag",
            starRating: [true, true, false],
            countryTrade: "Retail Sales(YoY) (Nov)",
            tradeValue: [{ no: "-4.2%", color: "black" }, "", "3.9%"]
        },


    ];


    const NewListRender = newLists.map((news) => {
        return <>
            <li key={news.id}>
                <div className="news-list news-list-top">
                    <div className="news-list-time">{news.time}</div>
                    <div className="news-list-flag">
                        <div className="country-icons">
                            {/* <svg>
                                <use href={"/images/icons.svg#" + news.flagIcon + "-svg-icon"}></use>
                            </svg> */}
                        </div>
                        <div className="country-abbr-name">EUR</div>
                    </div>

                    <div className="news-list-star">
                        <div className={"news-star-rating" + (news.starRating[1] ? "" : "svg-opac-low")} >
                            <StarRatingIcon />
                        </div>
                        <div className={"news-star-rating" + (news.starRating[1] ? '' : 'svg-opac-low')} >
                            <StarRatingIcon />
                        </div>
                        <div className={"news-star-rating" + (news.starRating[2] ? "" : "svg-opac-low")}>
                            <StarRatingIcon />
                        </div>
                    </div>
                </div>

                <div className="news-list news-list-center">
                    <div className="country-trade-desc">{news.countryTrade}</div>
                    <div className="trade-premium">
                        {news.premium ? "P" : ""}

                    </div>
                </div>

                <div className="news-list news-list-footer">
                    <div className="trade-values" style={{ "--col": news.tradeValue[0]['color'] }}>{news.tradeValue[0]['no']}</div>
                    <div className="trade-values">{news.tradeValue[1]}</div>
                    <div className="trade-values">{news.tradeValue[2]}</div>
                </div>
            </li >
        </>
    });


    return <>
        <Head title="News" />
        <DashboardLayout user={auth.user}>
            {/* Content one */}
            <div className="news-content">
                <div className="news-content-header">
                    <h2>News</h2>
                    <div className="open-desc hover:cursor-pointer" onClick={HandleEscEvent}><code>esc</code>&nbsp;to close</div>
                </div>
                <div className="news-content-content">
                    <ul id="new-ul-lists">
                        {NewListRender}
                        {/* <NewListRender /> */}
                    </ul>
                </div>
                <div className="news-content-footer">
                    <div className="news-expand-more" id="expand-news-footer-content" onClick={HandleFooterContent}>
                        <ArrowDownIcon />
                    </div>
                </div>
            </div>
            {/* End Of Content one */}


            {/* Content Two */}
            <div className="news-content">
                <div className="news-content-header">
                    <h2>News</h2>
                </div>
                <div className="news-extra-content">
                    <div className="news-extra-content-sub">
                        <div>
                            Rule 1/10/2023 <br />
                            Candles: Will be announce on each <br />
                            recommendation. <br />
                            Expiration Time: 30s/1 Min
                        </div>
                        <div>
                            Markets: AUD/CAD<br />
                            EUR/CAD USD/CHF<br />
                            EUR/GBP CAD/JPY<br />
                            GBP/USD<br />
                            AUD/JPY Setuo: RSI 2, STOCH 4,2,2<br />
                            CAD/CHF
                        </div>
                    </div>
                    <div className="news-extra-content-sub">
                        <div>
                            Weak candles ahead today team, you know that <br />
                            our main target is to see the stoch times <br />
                            separate meaning tha signal change.<br />


                            I want you to please here in consideration that <br />
                            starting on Wednesday we are going to have<br />
                            USD volatility.<br />
                            and you know how much USD market affects <br />
                            th rest so plan your week, either way i will do <br />
                            my best to post the recommendation in order <br />
                            to avoid my looses ok.

                        </div>
                        <div>
                            For news members welcome to the team <br />
                            please dont get overwhelm about<br />
                            the way we trade here, start with my webinars <br />
                            and you will understand<br />
                            the dynamic here.
                        </div>
                    </div>
                </div>



                <div className="news-content-footer">
                    <div className="news-expand-more" id="expand-news-footer-content">
                    </div>
                </div>

            </div>

            {/*End Content Two */}


        </DashboardLayout>
    </>
} 