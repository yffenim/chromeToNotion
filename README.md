# Save web page notes from Chrome to Notion DB

Chrome extension Next.js template forked from [Next Chrome](https://github.com/thomaswang/next-chrome)


# Usage

### Make your DB

You can keep the default settings of this extension by making your DB table match the code of extension table:

```
  Title (property type: Text)  
  URL (property type: URL)  
  Tags (property type: Multi-select)  
  Notes (property type: Text)
  Added On (property type: Created time )
```

Or you can adjust the code found here `next-app/pages/index.js` to match your needs.

---

### Get the API credentials

Sign up for a Notion API integration: https://www.notion.so/my-integrations

Get your Database ID and Notion API Key. 

Navigate to `next-app/pages/index.js` and add your Notion Api key to:

```lang-js
  const notion = new Client({
    auth: <YOUR_NOTION_KEY/>,
    logLevel: LogLevel.DEBUG
  });
```

On the same file, add your Database ID to:

```lang-js
  try {
    await notion.pages.create({
      parent: {
      database_id: <YOUR_DATABASE_ID/>,
    },
```

---

### Run the extension

```lang-js
cd next-app

yarn 

yarn build
yarn build:linux // on Linux
```

Go to `chrome://extensions/` and select **Load unpacked**

Choose the `extension` folder.

Your extension should appear!


# Debugging

Right click on the extension icon and select `inspect popup` for the console


