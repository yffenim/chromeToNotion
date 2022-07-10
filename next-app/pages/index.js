import styles from "../styles/Home.module.css";
import { Client, LogLevel } from '@notionhq/client'
import { useEffect, useState } from 'react'

const IndexPage = () => {

  const [pageData, setPageData] = useState({})
  const [isSaving, setIsSaving] = useState(false)
  const [isSaved, setIsSaved] = useState(false)

  // establish a connection to notion
  const notion = new Client({
    auth: <YOUR_NOTION_KEY/>,
    logLevel: LogLevel.DEBUG
  });

  // Save the formatted form object
   async function saveBookmarkToNotion(bookmark) {
     const notion = new Client({
       auth: "secret_J4CUi8dHryTLDrrD3xzAqjiVFKrfBbnzehI8PTQjIt1",
       logLevel: LogLevel.DEBUG
     })

     try {
       await notion.pages.create({
         parent: {
          database_id: <YOUR_DATABASE_ID/>,
         },
         properties: {
           Title: { title: [{text: { content: bookmark.title}}]},
           URL: { url: bookmark.url },
           Tags: { multi_select: bookmark.tags },
           Notes: { rich_text: [{ text: {content: bookmark.notes || '-'}}]}
         }
       }) 
     return true
     } catch (error) {
     return false
     }
   };

  // Submit handler that calls the Save function
   async function handleSubmit(e) {
     e.preventDefault()
     setIsSaving(true)

     const data = new FormData(e.target)
     const bookmark = Object.fromEntries(data.entries())
     
     bookmark.tags = bookmark.tags
       .split(',')
       .filter((tag) => tag.trim().length !== 0)
       .map((tag) => ({
         name: tag.trim(),
       }));
     
     const result = await saveBookmarkToNotion(bookmark)

     if (result) {
       setIsSaved(true)
     } else {
       setIsSaving(false)
     }
   };

  // get the current page URL and title
   useEffect(() => {
     chrome.tabs &&
       chrome.tabs.query({ 
         active: true, currentWindow: true }, (tabs) => {
           const url = tabs[0].url
           const title = tabs[0].title
           setPageData({ url, title })
         })
   }, []);


  return (
    <div className="App">
      <header className="App-header">
        <h1>Add Me To DB</h1>
      </header>
      <div>
        {isSaved ? (
          <span>Saved</span>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="row">
              <label>Title</label>
              <br/>
              <input
                name="title" 
                type="text" 
                defaultValue={pageData.title} 
                title={pageData.title} required 
              />
            </div>
            <div className="row">
              <label>URL</label>
              <br/>
              <input 
                name="url" 
                type="url" 
                defaultValue={pageData.url} 
                title={pageData.url} required 
              />
            </div>
            <div className="row">
              <label>Tags</label>
              <br/>
              <input name="tags" type="text" />
            </div>
            <div className="row">
              <label>Notes</label>
              <br/>
              <input name="notes" as="textarea" rows={3} />
            </div>
            <div className="row">
              <button type="submit" disabled={isSaving}>
                {isSaving ? <span>Saving</span> : <span>Save</span>}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
    )
  };

export default IndexPage;
