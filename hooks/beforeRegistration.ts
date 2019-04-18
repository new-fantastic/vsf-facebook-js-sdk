declare const FB

export function beforeRegistration({ Vue, config, store, isServer }) {
  if (!isServer) {
    (<any>window).fbAsyncInit = function() {
      FB.init({
        appId            : config.facebookJsSdk.appId,
        autoLogAppEvents : true,
        xfbml            : true,
        version          : 'v3.2'
      });
    };

    var head = document.getElementsByTagName('head')[0],
    script = document.createElement('script');

    script.src = 'https://connect.facebook.net/en_US/sdk.js';    
    script.async = true
    script.defer = true
    head.appendChild(script);
  }
}
