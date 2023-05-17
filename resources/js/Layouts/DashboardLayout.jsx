import { Link, Head } from "@inertiajs/react";
import '../../css/root.css';
import '../../css/index.css';
import '../../css/hamburger.css';
import LogoTransparent from '../../images/logo-transparent.png';
import ActiveLink from "@/Components/ActiveLink";
import { useState, useRef, useEffect } from 'react';
import Dropdown from "@/Components/Dropdown";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";


import { AccountIcon, ChartIcon, HomeIcon, NewsIcon, QuotesIcon, TradeIcon, LogoutIcon, EditProfileIcon } from "@/Components/Icons/Icons";

export default function DashboardLayout({ children, user }) {

    const [open, setOpen] = useState(false);
    const [openMobileSidebar, setOpenMobileSidebar] = useState(false);
    const showMobileBar = useRef(null);
    const buttonRef = useRef(null);

    const HandleMobileBar = () => {
        const isOpened = buttonRef.current.ariaExpanded;
        if ('false' === isOpened) {
            buttonRef.current.ariaExpanded = true;
            showMobileBar.current.className = "show";
        } else {
            buttonRef.current.ariaExpanded = false
            showMobileBar.current.className = "";
        }

    };

    useEffect(() => {
        document.addEventListener('keydown', function (event) {
            if (event.key === "Escape") {
                event.preventDefault();
                if ('true' === buttonRef.current.ariaExpanded) {
                    buttonRef.current.ariaExpanded = false
                    showMobileBar.current.className = "";
                }
            }
        });
    })






    return <>

        <main id="fx-main">
            <header>
                <div id="fx-logo-content">
                    <div id="mob-hamburger">
                        <button
                            onClick={HandleMobileBar}
                            className="btn-one" ref={buttonRef} id="mob-ham-btn" aria-controls="primary-navigation" aria-expanded="false">
                            <svg fill="var(--btn-color)" className="hamburger-svg" viewBox="0 0 100 100">
                                <rect className="line top" width="80" height="10" x="10" y="25" rx="5"></rect>
                                <rect className="line middle" width="80" height="10" x="10" y="45" rx="5"></rect>
                                <rect className="line bottom" width="80" height="10" x="10" y="65" rx="5"></rect>
                            </svg>
                        </button>
                    </div>
                    <div id="fx-logo">
                        <img src={LogoTransparent} alt="BLW Logo"></img>
                    </div>
                </div>
                <div id="fx-profile">
                    <div id="fx-user-amount">
                        <div className="user-amount-desc">{user.name}</div>
                        <div className="user-amount-no">
                            $<span>15,665.00</span>
                        </div>
                    </div>

                    <div id="fx-user-profile" onClick={() => {
                        setOpen((previousState) => !previousState)
                    }}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <circle cx="12" cy="12" r="10" opacity=".35" />
                            <circle cx="12" cy="9" r="3" />
                            <path d="M17.883,15.784C17.574,14.755,16.63,14,15.5,14h-7c-1.13,0-2.074,0.755-2.383,1.784C7.362,17.717,9.529,19,12,19S16.638,17.717,17.883,15.784z" />
                        </svg>


                    </div>


                    {open && <>
                        <div style={{ zIndex: 10 }} className="absolute top-16 flex flex-col p-2 rounded-md bg-[#1E1E1E] text-[#fff] w-40 h-auto">

                            <Link href={route('profile.edit')} className="bg-zinc-500 mt-2 text-center p-1 rounded-md hover:bg-zinc-600">
                                <div className="icon-div">
                                    Profile
                                    <EditProfileIcon />
                                </div>
                            </Link>
                            <Link href={route('logout')} method="post" as="button" className="bg-zinc-500 mt-2 text-center p-1 rounded-md hover:bg-zinc-600">
                                <div className="icon-div">
                                    Log out
                                    <LogoutIcon id="logout-svg" />
                                </div>
                            </Link>
                        </div>
                    </>}

                </div>
            </header>

            <div id="fx-content">
                <div id="sidebar" ref={showMobileBar}>
                    <ul>

                        <li>
                            {/* <Link >
                                
                            </Link> */}
                            <ActiveLink href="/dashboard" active={route().current('dashboard')}>
                                <div className="icon">
                                    <HomeIcon />
                                </div>
                                <div className="icon-desc">Home</div>
                            </ActiveLink>
                        </li>

                        <li>
                            <ActiveLink href={route('quotes')} active={route().current('quotes')}>
                                <div className="icon">
                                    <QuotesIcon />
                                </div>
                                <div className="icon-desc">Quotes</div>
                            </ActiveLink>
                        </li>

                        <li>
                            <ActiveLink href={route('charts')} active={route().current('charts')}>
                                <div className="icon">
                                    <ChartIcon />
                                </div>
                                <div className="icon-desc">Charts</div>
                            </ActiveLink>
                        </li>



                        <li>
                            <ActiveLink href={route('trades')} active={route().current('trades')}>
                                <div className="icon">
                                    <TradeIcon />
                                </div>
                                <div className="icon-desc">Trade</div>
                            </ActiveLink>
                        </li>


                        <li>
                            <ActiveLink href={route('news')} active={route().current('news')}>
                                <div className="icon">
                                    <NewsIcon />
                                </div>
                                <div className="icon-desc">News</div>
                            </ActiveLink>
                        </li>


                        <li>
                            <ActiveLink href={route('accounts')} active={route().current('accounts')}>
                                <div className="icon">
                                    <AccountIcon />
                                </div>
                                <div className="icon-desc">Account</div>
                            </ActiveLink>
                        </li>



                    </ul>
                </div>
                <div id="main-content">
                    <div id="main-content-inner">
                        {children}
                    </div>
                </div>
            </div>
        </main>
    </>
}