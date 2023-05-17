import "../../css/quotes.css";
import DashboardLayout from '@/Layouts/DashboardLayout';
import { Head } from '@inertiajs/react';
export default function Quotes({ auth }) {

    const QuotesData = [
        { id: 0, type: "one" },
        { id: 1, type: "two" },
        { id: 2, type: "three" },
        { id: 3, type: "one" },
        { id: 4, type: "two" },
    ];

    const styleBg = {
        "--h3-col": " var(--color-inner)"
    };

    const QuotesOne = QuotesData.map((quotes) =>
        <>
            <div className={"quote-inner-extra-sub " + quotes.type} key={quotes.id}>
                <div>
                    <h2>EURUSD</h2>
                    <span>Euro/US Dollar</span>
                </div>
                <h3 style={styleBg}>SELL&nbsp;&nbsp;1.0346</h3>
                <ul className="quote-inner-percent">
                    <li>TP 1.7017</li>
                    <li>TP 1.7017</li>
                    <li>TP 1.7017</li>
                    <li>TP 1.7017</li>
                </ul>
            </div>
        </>
    );

    return <>
        <Head title="Quotes" />
        <DashboardLayout user={auth.user}>
            <div id="quotes-main">
                <div className="quotes-title">QUOTES</div>
                <div className="quotes-main-extra">
                    <div className="quotes-main-extra-sub" id="quotes-data">
                        {QuotesOne}
                    </div>
                    <div className="quotes-main-extra-sub" id="quotes-data-2">
                        {QuotesOne}
                    </div>
                </div>
            </div>
        </DashboardLayout>

    </>
}