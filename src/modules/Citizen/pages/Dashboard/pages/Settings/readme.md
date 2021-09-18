# Settings

## routes

```javascript
${baseUrl}/settings
${baseUrl}/settings/account
${baseUrl}/settings/account/kyc
${baseUrl}/settings/account/change-password
```

## folder structure

```javascript
|--  Categories
    |-- __mock__
        |-- settings.js
    |-- components
        |-- index.js
    |-- pages
        |-- Account
            |-- pages
                |-- Home
                    |-- index.jsx
                    |-- home.test.js
                    |-- style.scss
                |-- ChangePassword
                    |-- index.jsx
                    |-- changepassword.test.js
                    |-- style.scss
                |-- Kyc
                    |-- index.jsx
                    |-- kyc.test.js
                    |-- style.scss
            |-- index.jsx
            |-- account.test.js
            |-- style.scss
    |-- index.jsx
    |-- readme.md
    |-- style.scss
```

## Add Route

#### `Add new Settings Category`

```javascript
//update __mock__/settings.js
const Settings = [
  {
    name: string,
    route: string,
    component: string,
    sub_settings: array
  }
  ...
]
```

#### `Add new Settings SubCategory`

```javascript
//update __mock__/settings.js
const Settings = [
  {
    ...
    sub_settings: [
        {
            name: string,
            route: string,
            component: string,
            icon: component,
            description: string
        },
    ]
  }
  ...
]
```

## Libraries Used

#### `React-Toggle`

For more info => http://aaronshaf.github.io/react-toggle/

```javascript
import Toggle from 'react-toggle'

<Toggle
  defaultChecked={boolean}
  checked={boolean}
  onChange={function}
/>
```
