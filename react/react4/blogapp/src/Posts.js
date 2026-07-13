import React, { Component } from 'react';
import Post from './Post';

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }

  loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch posts from API');
        }
        return response.json();
      })
      .then(data => {
        // Convert to Post model instances
        const postInstances = data.map(item => new Post(item.id, item.title, item.body));
        this.setState({ posts: postInstances });
      })
      .catch(error => {
        // Throwing error triggers componentDidCatch
        throw error;
      });
  }

  componentDidMount() {
    this.loadPosts();
  }

  componentDidCatch(error, errorInfo) {
    alert("An error occurred inside the Posts component: " + error.message);
  }

  render() {
    return (
      <div className="posts-container">
        <h2>Latest Blog Posts</h2>
        <div className="posts-grid">
          {this.state.posts.map(post => (
            <article key={post.id} className="post-card">
              <div className="card-header">
                <span className="post-number">#{post.id}</span>
                <h3>{post.title}</h3>
              </div>
              <p>{post.body}</p>
            </article>
          ))}
        </div>
      </div>
    );
  }
}

export default Posts;
