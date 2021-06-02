//this will post the comment, needs to be connected to singlepost handlebar

async function commentFormHandler(event) {
    event.preventDefault();
  
    const comment_text = document.querySelector('input[name="comment-text"]').value.trim();
    console.log(comment_text, "I am cheking this************")

// It is confirmed that data is reaching here, single-post route is working, create-comment.handlebars is working, now worry
//is data loading on database through insomnia, now worry about anything beyond this point, comment route, homepage route and
//homepage handlebar 

    
    const post_id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
  
    if (comment_text) {
      const response = await fetch('/api/comments', {
        method: 'POST',
        body: JSON.stringify({
          //this ahd been changed from post id to user
          post_id,
          comment_text
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
  
      if (response.ok) {
        document.location.reload();
      } else {
        alert(response.statusText);
      }
    }
  }
  document.querySelector('.comment-form').addEventListener('click', commentFormHandler);

  /*
async function commentClickHandler(event) {
    event.preventDefault();
  
    const id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
    const response = await fetch('/api/posts/comment_text', {
      method: 'POST',
      body: JSON.stringify({
        post_id: id
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.reload();
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('.comment-btn').addEventListener('click', commentClickHandler);
  */
  