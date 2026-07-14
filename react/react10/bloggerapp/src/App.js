import React, { useState } from 'react';
import './App.css';
import CourseDetails from './CourseDetails';
import BookDetails from './BookDetails';
import BlogDetails from './BlogDetails';

// Reference image mock data
const courses = [
  { id: 1, cname: "Angular", cdate: "4/5/2021" },
  { id: 2, cname: "React", cdate: "6/3/20201" }
];

const books = [
  { id: 1, bname: "Master React", price: 670 },
  { id: 2, bname: "Deep Dive into Angular 11", price: 800 },
  { id: 3, bname: "Mongo Essentials", price: 450 }
];

const blogs = [
  { id: 1, title: "React Learning", author: "Stephen Biz", desc: "Welcome to learning React!" },
  { id: 2, title: "Installation", author: "Schewzdenier", desc: "You can install React from npm." }
];

function App() {
  const [activeTab, setActiveTab] = useState('all'); // all, courses, books, blogs
  const [showDesc, setShowDesc] = useState(true);
  const [renderMode, setRenderMode] = useState('if-else'); // if-else, switch, element-var

  // Method 1: Conditional Rendering using If-Else statements in a helper function
  const renderViaIfElse = () => {
    if (activeTab === 'courses') {
      return <CourseDetails courses={courses} />;
    } else if (activeTab === 'books') {
      return <BookDetails books={books} />;
    } else if (activeTab === 'blogs') {
      return <BlogDetails blogs={blogs} showDesc={showDesc} />;
    } else {
      // 'all' layout
      return (
        <div className="columns-grid">
          <CourseDetails courses={courses} />
          <div className="col-divider"></div>
          <BookDetails books={books} />
          <div className="col-divider"></div>
          <BlogDetails blogs={blogs} showDesc={showDesc} />
        </div>
      );
    }
  };

  // Method 2: Conditional Rendering using a Switch-Case statement in a helper function
  const renderViaSwitch = () => {
    switch (activeTab) {
      case 'courses':
        return <CourseDetails courses={courses} />;
      case 'books':
        return <BookDetails books={books} />;
      case 'blogs':
        return <BlogDetails blogs={blogs} showDesc={showDesc} />;
      default:
        return (
          <div className="columns-grid">
            <CourseDetails courses={courses} />
            <div className="col-divider"></div>
            <BookDetails books={books} />
            <div className="col-divider"></div>
            <BlogDetails blogs={blogs} showDesc={showDesc} />
          </div>
        );
    }
  };

  // Method 3: Conditional Rendering using Element Variables
  let renderedElement;
  if (activeTab === 'all') {
    renderedElement = (
      <div className="columns-grid">
        <CourseDetails courses={courses} />
        <div className="col-divider"></div>
        <BookDetails books={books} />
        <div className="col-divider"></div>
        <BlogDetails blogs={blogs} showDesc={showDesc} />
      </div>
    );
  } else if (activeTab === 'courses') {
    renderedElement = <CourseDetails courses={courses} />;
  } else if (activeTab === 'books') {
    renderedElement = <BookDetails books={books} />;
  } else {
    renderedElement = <BlogDetails blogs={blogs} showDesc={showDesc} />;
  }

  // Choose component output based on selected Render Mode
  const getRenderedContent = () => {
    if (renderMode === 'if-else') {
      return renderViaIfElse();
    } else if (renderMode === 'switch') {
      return renderViaSwitch();
    } else {
      return renderedElement;
    }
  };

  return (
    <div className="App-container">
      <div className="glow-orb"></div>

      <header className="page-header">
        <h1>Blogger App Dashboard</h1>
        {/* Method 4: Conditional Rendering using Ternary Operator */}
        <p className="subtitle">
          {activeTab === 'all' ? "Displaying All Sections (Side-by-Side)" : `Displaying filtered ${activeTab} view`}
        </p>

        {/* Tab Selection */}
        <div className="tabs-container">
          <button className={`tab-btn ${activeTab === 'all' ? 'active-tab' : ''}`} onClick={() => setActiveTab('all')}>All Details</button>
          <button className={`tab-btn ${activeTab === 'courses' ? 'active-tab' : ''}`} onClick={() => setActiveTab('courses')}>Course Details</button>
          <button className={`tab-btn ${activeTab === 'books' ? 'active-tab' : ''}`} onClick={() => setActiveTab('books')}>Book Details</button>
          <button className={`tab-btn ${activeTab === 'blogs' ? 'active-tab' : ''}`} onClick={() => setActiveTab('blogs')}>Blog Details</button>
        </div>

        {/* Controls for Conditional Rendering Demonstration */}
        <div className="controls-box">
          <div className="control-group">
            <span className="control-label">Conditional Method:</span>
            <select value={renderMode} onChange={(e) => setRenderMode(e.target.value)} className="control-select">
              <option value="if-else">If-Else Statement Helper</option>
              <option value="switch">Switch-Case Helper</option>
              <option value="element-var">Element Variable Assignment</option>
            </select>
          </div>
          <div className="control-group">
            <label className="checkbox-container">
              <input type="checkbox" checked={showDesc} onChange={(e) => setShowDesc(e.target.checked)} />
              <span className="checkmark"></span>
              Show Blog Descriptions (Logical && demo)
            </label>
          </div>
        </div>
      </header>

      {/* Output Content */}
      <main className="dashboard-content">
        {getRenderedContent()}
      </main>
    </div>
  );
}

export default App;
