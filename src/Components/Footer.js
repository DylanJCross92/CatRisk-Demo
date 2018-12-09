import React, { Component } from 'react';
import insightLogo from '../Assets/insight-logo.svg';
import iacLogo from '../Assets/iac-logo.svg';

export default class Footer extends Component {
    render() {
        return (
            <div className="flex footer">
                <div className="insight-logo-wrapper flexLeftAlign">
                    <a href='#'>
                        <img alt='Insight' src={insightLogo}/>
                    </a>
                </div>
                <ul className="flex navigation flexCenterAlign">
                    <li>
                        &copy; {new Date().getFullYear()} Insight Catastrophe Group
                    </li>
                    <li>|</li>
                    <li>
                        CatRisk Score 2.4.0 - IAS 2.5.0
                    </li>
                    <li>|</li>
                    <li>
                        <a href='https://www.icg360.com/iac-terms-of-use' target="_blank">
                            <span>Terms and Privacy</span>
                        </a>
                    </li>
                </ul>
                <div className="insight-analytics-logo-wrapper flexRightAlign">
                    <a href='#'>
                        <img alt='Insight Analytics Cloud' src={iacLogo}/>
                    </a>
                </div>
            </div>
        );
    }
}
