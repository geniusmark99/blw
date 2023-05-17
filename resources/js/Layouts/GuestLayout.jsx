import '../../css/login.css';
import LogoTransparent from '../../images/logo-transparent.png';
import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link, router } from '@inertiajs/react';

export default function Guest({ children }) {
    return (
        <>
            <main className="form-content" dark-mode>
                <div className="form-top-content">
                    <img src={LogoTransparent}></img>
                </div>
                <div className="form-bottom-content">
                    <div className="innner-form-bottom-content">
                        <div className="form-main-container">
                            <div className="form-main-inner-container">
                                {children}
                            </div>
                        </div>
                    </div>
                </div>

            </main>
        </>

    );
}
