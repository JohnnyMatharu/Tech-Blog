//this could be a file to add click event to post or title to emerge the create-comment handlebar, connect to comment.js
//following is test, add comment-btn in handlebars
//this event has to call single-post.js route
//work on following js event listener formats from add-post and check other javascript files to get correct code
//follow notes from yesteday DiXON.MEta

/*
async function newFormHandler(event) {
    event.preventDefault();
  
    const title = document.querySelector('input[name="post-title"]').value;
    const post_text = document.querySelector('input[name="post-text"]').value;

    const response = await fetch(`/api/posts`, {
      method: 'POST',
      body: JSON.stringify({
        title,
        post_text
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);
  */