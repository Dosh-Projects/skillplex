const overview = {
  title: "SQL and Database Management",
  category: "Data Management",
  breadcrumb: ["Home", "Courses", "SQL and Database Management"],
  description:
    `The SQL and Database Management course is designed to provide learners with a strong foundation in database querying and management. This course covers essential SQL skills for data analysis, advanced database administration techniques, and introduces NoSQL concepts for non-relational databases. Through hands-on projects and real-world case studies, participants will gain the expertise to design, query, and optimize databases for various applications.`,
  targetAudience: [
    "Aspiring data analysts and database administrators",
    "Developers and IT professionals seeking to improve their database skills",
    "Students interested in understanding relational and non-relational database systems",
    "Anyone eager to learn database design, querying, and management",
  ],
  tags: ["SQL", "Database Management", "NoSQL"],
};

const courses = [
  {
    title: "SQL for Data Analysis",
    outline: [
      "SQL Basics: Understanding tables, records, and basic queries.",
      "Data Manipulation: Using SELECT, INSERT, UPDATE, DELETE statements.",
      "Filtering and Aggregation: WHERE clause, GROUP BY, HAVING, and aggregate functions (SUM, COUNT).",
      "Joins and Subqueries: INNER JOIN, LEFT JOIN, CROSS JOIN, and nested queries.",
      "Case Studies: Analyzing sales, financial, or e-commerce data using complex queries.",
    ],
    duration: "4-6 weeks",
    certification: "Certificate of Completion in SQL for Data Analysis",
  },
  {
    title: "Database Management and Administration",
    outline: [
      "Database Design: Relational database principles, normalization, and ER diagrams.",
      "Advanced SQL: Window functions, views, indexes, stored procedures.",
      "Database Security: Permissions, roles, and encryption basics.",
      "Optimization Techniques: Indexing strategies, query optimization.",
      "Hands-On Practice: Designing and managing a database from scratch for a sample application.",
    ],
    duration: "8-10 weeks",
    certification: "Certificate of Completion in Database Management and Administration",
  },
  {
    title: "NoSQL Databases (Optional)",
    outline: [
      "NoSQL Concepts: Understanding key-value, document, column-family, and graph databases.",
      "Popular NoSQL Databases: Introduction to MongoDB, Cassandra, and Redis.",
      "Data Modeling and Querying: Structuring and retrieving data in a non-relational database.",
      "Real-World Project: Implementing a NoSQL database for an application, such as a real-time analytics dashboard.",
    ],
    duration: "6-8 weeks",
    certification: "Certificate of Completion in NoSQL Databases",
  },
];



function getCoursesCount(courses) {
  return courses.reduce((total, course) => total + course.outline.length, 0);
}

function generateTitleContent(course) {
  const breadcrumbItems = course.breadcrumb
    .map((item, index) => {
      const isLast = index === course.breadcrumb.length - 1;
      return isLast
        ? `<li class="breadcrumb-item active" aria-current="page">${item}</li>`
        : `<li class="breadcrumb-item"><a href="#">${item}</a></li>`;
    })
    .join("");

  return `
      <div class="page__title-breadcrumb">
          <nav aria-label="breadcrumb">
              <ol class="breadcrumb">
                  ${breadcrumbItems}
              </ol>
          </nav>
      </div>
      <span class="page__title-pre">${course.category}</span>
      <h5 class="page__title-3">${course.title}</h5>
  `;
}

function generateDescription(overview) {
  return `
      <h3>Course Overview</h3>
      <p>${overview.description}</p>
      <div class="course__tag-2 mb-35 mt-35">
          <i class="fal fa-tag"></i>
          ${overview.tags.map((tag) => `<a href="#">${tag}</a>`).join(", ")}
      </div>
      <div class="course__description-list mb-45">
          <h4>What is the Target Audience?</h4>
          <ul>
              ${overview.targetAudience
                .map(
                  (audience) =>
                    `<li><i class="icon_check"></i> ${audience}</li>`
                )
                .join("")}
          </ul>
      </div>
  `;
}

function generateAccordion(courses) {
  return courses
    .map((course, index) => {
      const content = course.outline
        .map(
          (item) => `
            <div class="course__curriculum-content d-sm-flex justify-content-between align-items-center">
              <div class="course__curriculum-info">
                <h3><span>${item}</span></h3>
              </div>
            </div>
          `
        )
        .join("");

      return `
        <div class="accordion-item mb-50">
          <h2 class="accordion-header" id="course-${index}">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#course-${index}-content" aria-expanded="true" aria-controls="course-${index}-content">
              ${course.title}
            </button>
          </h2>
          <div id="course-${index}-content" class="accordion-collapse collapse show" aria-labelledby="course-${index}" data-bs-parent="#course__accordion">
            <div class="accordion-body">
              ${content}
              <div class="course__curriculum-content d-sm-flex justify-content-between align-items-center">
                <div class="course__curriculum-info">
                  <h3><span class="time"><i class="icon_clock_alt"></i></span> <span>Duration:</span> ${course.duration}</h3>
                </div>
              </div>
              <div class="course__curriculum-content d-sm-flex justify-content-between align-items-center">
                <div class="course__curriculum-info">
                  <svg class="document" viewBox="0 0 24 24">
                    <path class="st0" d="M14,2H6C4.9,2,4,2.9,4,4v16c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2V8L14,2z"/>
                    <polyline class="st0" points="14,2 14,8 20,8 "/>
                    <line class="st0" x1="16" y1="13" x2="8" y2="13"/>
                    <line class="st0" x1="16" y1="17" x2="8" y2="17"/>
                    <polyline class="st0" points="10,9 9,9 8,9 "/>
                  </svg>
                  <h3><span>Certifications:</span> ${course.certification}</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        `;
    })
    .join("");
}

document.getElementById("course__accordion").innerHTML =
  generateAccordion(courses);
document.getElementById("title__content").innerHTML =
  generateTitleContent(overview);
document.getElementById("description").innerHTML =
  generateDescription(overview);
document.getElementById(
  "courses__count"
).innerHTML = `<span>Lectures :</span>${getCoursesCount(courses)}`;
