document.querySelectorAll('.delete-post').forEach(button => {
    button.addEventListener('click', async (event) => {
      const postId = event.target.getAttribute('data-id');
      await fetch(`/api/posts/${postId}`, {
        method: 'DELETE',
      });
      location.reload(); // Reload page to see changes
    });
  });
  