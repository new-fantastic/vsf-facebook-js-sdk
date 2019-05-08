# vsf-facebook-js-sdk

<br/>

🕹 Facebook JS SDK module for Vue Storefront 🛠

> Facebook JavaScript SDK documentation: https://developers.facebook.com/docs/javascript/

<br/>

## Table of Contents

<br/>

- [Installation](#installation)

- [Usage](#usage)

- [License](#license)

<br/>

## Installation

<br/>

### 1. Download the module

<br/>

```bash
cd ../vue-storefront/src/modules;
git clone https://github.com/new-fantastic/facebook-js-sdk.git
```

<br/>

### 2. Import and register the module

<br/>

Go to `../vue-storefront/src/modules/index.ts` and add code below

<br/>

```javascript
import { FacebookJsSdk } from './facebook-js-sdk'
...
export const registerModules: VueStorefrontModule[] = [
...
FacebookJsSdk
...
]
```

<br/>

### 3. Add new settings to your config

<br/>

Go to `../vue-storefront/config/local.json` and add code below

<br/>

```json
"facebookJsSdk" : {
   "appId" : "123456789012345"
}
```

<br/>

#### That's it! You will have the Facebook JavaScript SDK included with your Vue Storefront app! You are ready to go :sunglasses:

<br/>

## Usage

<br/>

#### This module enables you to use:

<br/>

- **Messenger Customer Chat module** – https://github.com/new-fantastic/messenger-chat

<br/>

## License

<br/>

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
