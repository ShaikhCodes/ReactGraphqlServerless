import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import Amplify from 'aws-amplify';

Amplify.configure({
    Auth: {
        region: 'us-east-1',
        userPoolId: 'us-east-1_FPFTnDDcn',
        identityPoolId: 'us-east-1:e2f36ca4-ba67-44af-bac9-055c3c91babf',
        userPoolWebClientId: 'kf1l4qu36a901n9vdbavkjs9a',
        mandatorySignIn: false
    }
});

const myAppConfig = {
  'aws_appsync_graphqlEndpoint': 'https://apflecqp6vhexaw7glgtj72jpq.appsync-api.us-east-1.amazonaws.com/graphql',
  'aws_appsync_region': 'us-east-1',
  'aws_appsync_authenticationType': 'AMAZON_COGNITO_USER_POOLS'
}

Amplify.configure(myAppConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

