const btnAddComment = document.querySelector('.btn-add-comment');
const addCommentInput = document.querySelector('.add-comment');
const comment = document.querySelector('.show-comment');
const addComment = addCommentInput => {
  if (addCommentInput.value === '') alert('Please add a comment!');
  else {
    console.log(`Add Comment: ${addCommentInput.value}`);

    // comment.style.display = 'flex';
    // comment.innerHTML = `Comment: ${addCommentInput.value}`;
    // addCommentInput.style.display = 'none';
    // btnAddComment.style.display = 'none';
  }
};

module.exports = addComment;
