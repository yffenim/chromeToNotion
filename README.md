# Save web page notes from Chrome to Notion DB

Made for fanboys of Raymond Hettinger.

Chrome extension Next.js template forked from [Next Chrome](https://github.com/thomaswang/next-chrome)


# Usage

### Get the API credentials

Sign up for a Notion API integration: https://www.notion.so/my-integrations

Get your Database ID and Notion Key. 

Add them your Notion Key to `next-app/pages/index.js`


```lang-js
  const notion = new Client({
    auth: <YOUR_NOTION_KEY/>,
    logLevel: LogLevel.DEBUG
  });
```

### Run the extension

```lang-js
cd next-app

yarn 

yarn build
yarn build:linux # on Linux
```

Go to `chrome://extensions/` and select **Load unpacked**

Choose the `extension` folder.

Your extension should appear!


# Debugging

Right click on the extension icon and select `inspect popup` for the console


