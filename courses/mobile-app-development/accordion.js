const overview = {
  title: "Mobile App Development",
  category: "Development",
  breadcrumb: ["Home", "Courses", "Mobile App Development"],
  description:
    `The Mobile App Development course is designed to equip you with the skills and knowledge needed to create robust, user-friendly mobile applications. Covering iOS, Android, and cross-platform development, this course provides hands-on experience with tools and frameworks to build efficient, scalable apps for a variety of use cases. Whether you're focusing on native development or exploring cross-platform solutions, this course offers a comprehensive learning path to excel in mobile app development.`,
  targetAudience: [
    "Aspiring mobile developers looking to create applications for iOS and Android",
    "Professionals who want to learn native and cross-platform development",
    "Students and hobbyists interested in exploring app development as a career or side project",
    "Anyone eager to design and develop user-friendly mobile applications",
  ],
  tags: ["iOS Development", "Android Development", "Cross-Platform Development"],
};

const courses = [
  {
    title: "iOS Development with Swift",
    outline: [
      "Swift Basics: Syntax, variables, and functions.",
      "User Interface (UI) Design: Layouts, constraints, and animation in Xcode.",
      "Data Management: Core Data and Realm for local storage.",
      "Networking: REST API calls and data handling.",
      "Project: Create a fully-functional iOS app (e.g., to-do list or weather app).",
    ],
    duration: "8-10 weeks",
    certification: "iOS Development Certification",
  },
  {
    title: "Android Development with Kotlin",
    outline: [
      "Kotlin Basics: Syntax, data types, and functions.",
      "Android Studio: Setting up projects and UI design.",
      "Activity and Fragment Lifecycle: Managing app components.",
      "Data Management: SQLite and Room for local data storage.",
      "Networking and APIs: Fetching data, using third-party libraries.",
      "Project: Building an Android application like a simple chat or notes app.",
    ],
    duration: "8-10 weeks",
    certification: "Android Development Certification",
  },
  {
    title: "Cross-Platform Development (Optional)",
    outline: [
      "Covers how to develop apps that work on both iOS and Android using a single codebase.",
      "Framework: Flutter or React Native.",
      "Project: Develop a basic cross-platform app (e.g., a budget tracker or fitness tracker).",
    ],
    duration: "6-8 weeks",
    certification: "Cross-Platform Development Certification",
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
