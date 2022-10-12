import React, { Component } from 'react';
import { sign } from 'jsonwebtoken';
require('dotenv').config();

class EmbedMetabase extends Component {
  render() {
    const mbSiteUrl = process.env.REACT_APP_SITE_URL
    const mbSecretKey = process.env.REACT_APP_SECRET_KEY
    console.log("mbSecretKey: " + mbSecretKey)

    const payload = {
			email: process.env.REACT_APP_EMAIL,
			exp: Math.round(Date.now() / 1000) + 50 * 10, 
      //Expiration time in EPOCH 
    }
    
		const token = sign(payload, mbSecretKey)
		//const iframeUrl = `${mbSiteUrl}/auth/sso?jwt=${token}&return_to=${encodeURIComponent(mbSiteUrl)}`
    const iframeUrl = `${mbSiteUrl}`
    console.log("Iframe URL: " + iframeUrl)
    // TODO: width: window.width, Height: window.height 
    return <iframe src={iframeUrl} title='Metabase Embedded' style={{ border: 'none', width: '100%', height: '1080px' }} />
  }
  
}
export default EmbedMetabase;
