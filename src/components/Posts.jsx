import { useState } from "react";

function Posts() {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);
  return (
    <div class="app-wrapper">
      <h1 class="app-title">Posts</h1>
      <div class="post-list">
        <div class="post-item">
          <div class="post-header">
            <h2>Post Title #1</h2>
            <div class="post-social-media-stats">
              <span class="stats-topic">Likes: </span>
              <span class="post-likes">{count}</span>
            </div>
          </div>
          <p class="post-content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            vel turpis vestibulum, aliquet ipsum vitae, auctor risus. Morbi
            tincidunt, leo non molestie consectetur, elit libero faucibus
            tellus, sed fringilla tortor libero sit amet odio. Maecenas sed ante
            condimentum mauris euismod pellentesque eu eu justo...
          </p>
          <div class="post-actions">
            <button class="like-button" onClick={() => setCount(count + 1)}>
              Like
            </button>
            <button
              class="dislike-button"
              onClick={() => {
                if (count > 0) setCount(count - 1);
              }}
            >
              Dislike
            </button>
          </div>
        </div>
        <div class="post-item">
          <div class="post-header">
            <h2>Post Title #2</h2>
            <div class="post-social-media-stats">
              <span class="stats-topic">Likes: </span>
              <span class="post-likes">{count1}</span>
            </div>
          </div>
          <p class="post-content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            vel turpis vestibulum, aliquet ipsum vitae, auctor risus. Morbi
            tincidunt, leo non molestie consectetur, elit libero faucibus
            tellus, sed fringilla tortor libero sit amet odio. Maecenas sed ante
            condimentum mauris euismod pellentesque eu eu justo...
          </p>
          <div class="post-actions">
            <button class="like-button" onClick={() => setCount1(count1 + 1)}>
              Like
            </button>
            <button
              class="dislike-button"
              onClick={() => {
                if (count1 > 0) setCount1(count1 - 1);
              }}
            >
              Dislike
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Posts;
