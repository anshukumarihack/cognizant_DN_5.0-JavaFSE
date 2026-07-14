import React from 'react';

function CourseDetails(props) {
  return (
    <div className="detail-column">
      <h2>Course Details</h2>
      <div className="detail-list">
        {props.courses.map((course) => (
          <div key={course.id} className="detail-item">
            <h3>{course.cname}</h3>
            <p className="sub-detail">{course.cdate}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CourseDetails;
