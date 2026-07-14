import React from 'react';

function BlogDetails(props) {
  return (
    <div className="detail-column">
      <h2>Blog Details</h2>
      <div className="detail-list">
        {props.blogs.map((blog) => (
          <div key={blog.id} className="detail-item blog-item">
            <h3>{blog.title}</h3>
            <h4>{blog.author}</h4>
            {/* Conditional rendering using logical && operator */}
            {props.showDesc && <p className="blog-desc">{blog.desc}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogDetails;
