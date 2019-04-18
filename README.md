# vsf-facebook-js-sdk

🕹 Facebook JS SDK module for Vue Storefront 🛠

> Facebook JavaScript SDK documentation: https://developers.facebook.com/docs/javascript/

<br/>

## Table of Contents

<br/>

- [Installation](#installation)

- [Usage](#usage)

- [Configuration](#configuration)

- [License](#license)

<br/>

## Installation

<br/>

### 1. Download the module

<br/>

```bash
cd ../vue-storefront/src/modules;
git clone https://github.com/new-fantastic/vsf-facebook-js-sdk.git
```

<br/>

### 3. Import and register the module

<br/>

Go to `../vue-storefront/src/modules/index.ts` and add code below

<br/>

```javascript
import { VsfFacebookJsSdk } from './vsf-messenger-chat'
...
export const registerModules: VueStorefrontModule[] = [
...
VsfFacebookJsSdk
...
]
```

<br/>

### 4. Add new settings to your config

<br/>

Go to `../vue-storefront/config/local.json` and add code below

<br/>

```json
"facebookJsSdk" : {
   "appId" : ""
}
```

<br/>

#### That's it! You will have the Facebook JavaScript SDK included with your Vue Storefront app! You are ready to go :sunglasses:

<br/>

## ## License

<br/>

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
