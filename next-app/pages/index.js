import styles from "../styles/Home.module.css";
import { Client, LogLevel } from '@notionhq/client'
import { useEffect, useState } from 'react'

const IndexPage = () => {

  const [pageData, setPageData] = useState({})
  const [isSaving, setIsSaving] = useState(false)
  const [isSaved, setIsSaved] = useState(false)
 
  const notion = new Client({
    auth: <YOUR_NOTION_KEY/>,
    logLevel: LogLevel.DEBUG
  });


(async () => {
  console.log("retrieving DB...");

  const databaseId = 'e9f5d39bf12c41559148907a5c5a5fdf'

  const response = await notion.databases.retrieve({ database_id: databaseId });

  console.log("db: ",response);

})();



//   async function saveBookmarkToNotion(bookmark) {

//     const notion = new Client({
//       auth: "secret_J4CUi8dHryTLDrrD3xzAqjiVFKrfBbnzehI8PTQjIt1",
//       // auth: process.env.REACT_APP_NOTION_KEY,
//       logLevel: LogLevel.DEBUG
//     })

//     try {
//       await notion.pages.update({
//         parent: {
//           database_id: "repeated-radar-d6b.notion.site/e9f5d39bf12c41559148907a5c5a5fdf?v=13843b672de24c7783d6bc14ee18b02d"
//           // database_id: process.env.REACT_APP_NOTION_DB,
//         },
//         properties: {
//           Title: { title: [{text: { content: bookmark.title}}]},
//           URL: { url: bookmark.url },
//           Tags: { multi_select: bookmark.tags },
//           Notes: { rich_text: [{ text: {content: bookmark.notes || '-'}}]}
//         }
//       }) 
//     return true
//     } catch (error) {
//     return false
//     }
//   };

//   async function handleSubmit(e) {
//     e.preventDefault()
//     setIsSaving(true)

//     const data = new FormData(e.target)
//     const bookmark = Object.fromEntries(data.entries())

//     bookmark.tags = bookmark.tags
//       .split(',')
//       .filter((tag) => tag.trim().length !== 0)
//       .map((tag) => ({
//         name: tag.trim(),
//       }))

//     const result = await saveBookmarkToNotion(bookmark)

//     if (result) {
//       setIsSaved(true)
//     } else {
//       setIsSaving(false)
//     }
//   };

//   useEffect(() => {
//     chrome.tabs &&
//       chrome.tabs.query({ 
//         active: true, currentWindow: true }, (tabs) => {
//           const url = tabs[0].url
//           const title = tabs[0].title
//           setPageData({ url, title })
//         })
//   }, []);


  return (
    <div className="App">
      <header className="App-header">
        <h1>HALLO</h1>
      {/* <div> */}
      {/*   {isSaved ? ( */}
      {/*     <span>Saved</span> */}
      {/*   ) : ( */}
      {/*     <form onSubmit={handleSubmit}> */}
      {/*       <div> */}
      {/*         <label>Title</label> */}
      {/*         <input */}
      {/*           name="title" */} 
      {/*           type="text" */} 
      {/*           defaultValue={pageData.title} */} 
      {/*           title={pageData.title} required */} 
      {/*         /> */}
      {/*       </div> */}
      {/*       <div> */}
      {/*         <label>URL</label> */}
      {/*         <input */} 
      {/*           name="url" */} 
      {/*           type="url" */} 
      {/*           defaultValue={pageData.url} */} 
      {/*           title={pageData.url} required */} 
      {/*         /> */}
      {/*       </div> */}
      {/*       <div> */}
      {/*         <label>Tags</label> */}
      {/*         <input name="tags" type="text" /> */}
      {/*         <small>Separate Tags with Commas</small> */}
      {/*       </div> */}
      {/*       <div> */}
      {/*         <label>Notes</label> */}
      {/*         <input name="notes" as="textarea" rows={3} /> */}
      {/*       </div> */}
      {/*       <div> */}
      {/*         <button type="submit" disabled={isSaving}> */}
      {/*           {isSaving ? <span>Saving</span> : <span>Save</span>} */}
      {/*         </button> */}
      {/*       </div> */}
      {/*     </form> */}
      {/*   )} */}
      {/* </div> */}
      </header>
    </div>
    )
  };

 export default IndexPage;
