import React, { Component } from 'react';
import CxClient from '../../Assets/CxClient.swf';
require("../../global.css");

class Analyses extends Component {

    constructor(props) {
        super(props);
        this.state = {
            test: "all"
        };
    }

    render() {
        const ixConfigURL = "https://stage-services.icg360.org/ixconfig/ics/staging/cxclient";

        return (
            <div className="flex fColumn fGrow">
                <object type="application/x-shockwave-flash" data={CxClient} className="CxClient">
                    <param name="ixConfigURL" value={ixConfigURL} />
                    <param name="src" value={CxClient}/>
                    <param name="width" value="100%"/>
                    <param name="height" value="100%"/>
                    <param name="align" value="left"/>
                    <param name="id" value="policygrid"/>
                    <param name="quality" value="high"/>
                    <param name="bgcolor" value="white"/>
                    <param name="name" value="policygrid"/>
                    <param name="allowScriptAccess" value="always"/>
                    <param name="type" value="application/x-shockwave-flash"/>
                    <param name="pluginspage" value="http://www.adobe.com/go/getflashplayer"/>
                    <param name="wmode" value="opaque"/>
                    <param name="flashvars" value='ixConfigURL=https://stage-services.icg360.org/ixconfig/ics/staging/cxclient'/>
                </object>
            </div>
        );
    }
}

export default Analyses;
