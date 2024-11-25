const overview = {
  title: "Full-Stack Development",
  category: "Development",
  breadcrumb: ["Home", "Courses", "Full-Stack Development"],
  description:
    `The Full-Stack Development course is designed to equip you with the skills and knowledge to build complete web applications from start to finish. Covering both frontend and backend development, this course provides a well-rounded understanding of the technologies and tools required to create modern, scalable, and dynamic web solutions. Through hands-on projects and real-world scenarios, you'll gain experience in designing responsive interfaces, managing databases, and implementing APIs to deliver seamless user experiences.
    Whether you're a beginner or an aspiring developer looking to level up your skills, this course offers a comprehensive learning path to prepare you for a career in web development. By the end, you’ll have the confidence and expertise to take on real-world projects as a full-stack developer.
    `,
  targetAudience: [
    "Aspiring web developers looking to master both frontend and backend development",
    "Individuals who want to build full-stack applications from scratch",
    "Students and professionals interested in enhancing their web development skills",
    "Anyone eager to learn modern development practices and tools",
  ],
  tags: [
    "Frontend Development",
    "Backend Development",
    "Full-Stack Capstone Project",
  ],
};

const courses = [
  {
    title: "Frontend Development (HTML, CSS, JavaScript)",
    outline: [
      "HTML Basics: Elements, structure, forms.",
      "CSS: Styling elements, layout design, animations.",
      "JavaScript: Basics, DOM manipulation, events, asynchronous programming.",
      "Frameworks: Introduction to libraries like React or Vue.",
      "Project: Building a responsive, interactive website.",
    ],
    duration: "8-10 weeks",
    certification: "Frontend Development Certification",
  },
  {
    title: "Backend Development (Node.js, Express, Databases)",
    outline: [
      "Node.js Basics: Setting up a server, handling requests.",
      "Express Framework: Routing, middleware.",
      "Databases: SQL (MySQL or PostgreSQL) or NoSQL (MongoDB).",
      "RESTful APIs: Creating and managing API endpoints.",
      "Security: Basic security practices for backend development.",
      "Project: Building a complete CRUD application (like a to-do app or user database).",
    ],
    duration: "10-12 weeks",
    certification: "Backend Development Certification",
  },
  {
    title: "Full-Stack Capstone Project",
    outline: [
      "A guided capstone project integrating frontend and backend development, such as an e-commerce platform or social networking site.",
    ],
    duration: "2-4 weeks",
    certification: null,
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
