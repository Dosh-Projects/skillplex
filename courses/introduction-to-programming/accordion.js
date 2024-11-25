const overview = {
  title: "Introduction to Programming",
  category: "Development",
  breadcrumb: ["Home", "Courses", "Introduction to Programming"],
  description:
    `The Introduction to Web Development course provides a comprehensive foundation for beginners to build and design websites from scratch. This course equips you with the essential skills and knowledge to create responsive, interactive, and visually appealing websites. Through hands-on projects, you'll learn the core technologies behind the web, including HTML, CSS, and JavaScript. Whether you're aspiring to start a career in web development, enhance your technical skills, or explore web design as a hobby, this course offers a beginner-friendly learning path that adapts to your pace. 
    By the end of this course, you will have the confidence to design and code functional websites and will be well-prepared to further your journey into frontend, backend, or full-stack development.
    `,
  targetAudience: [
    "Absolute beginners with no prior programming experience",
    "Students and individuals eager to learn foundational coding skills",
    "Aspiring developers looking to build their first projects",
    "Hobbyists interested in exploring programming as a new skill",
    "Anyone seeking a flexible and beginner-friendly learning path",
  ],
  tags: ["Python for Beginners", "Java Fundamentals", "C++ Basics"],
};

const courses = [
  {
    title: "Python for Beginners",
    outline: [
      "Basics: Variables, data types, and operators. Control Structures: Conditional statements, loops.",
      "Functions and Modules: Defining functions, using libraries.",
      "Data Structures: Lists, dictionaries, sets, and tuples.",
      "File Handling: Reading and writing files.",
      "Project: Simple data analysis or a text-based game.",
    ],
    duration: "4-6 weeks (flexible schedule)",
    certification:
      "Options for certification in Python basics upon completion.",
  },
  {
    title: "Java Fundamentals",
    outline: [
      "Java Basics: Syntax, data types, variables.",
      "Object-Oriented Programming (OOP): Classes, objects, inheritance, and polymorphism.",
      "Exception Handling: Understanding and managing errors.",
      "Data Structures: Arrays, lists, stacks, and queues.",
      "Project: Building a simple calculator or a basic console-based application.",
    ],
    duration: "6-8 weeks",
    certification: "Optional completion certificate.",
  },
  {
    title: "C++ Basics",
    outline: [
      "Fundamentals of C++: Variables, control structures, and functions.",
      "Memory Management: Pointers, memory allocation.",
      "Object-Oriented Programming: Classes, inheritance, polymorphism.",
      "Data Structures: Arrays, linked lists, and queues.",
      "Project: Create a mini-application, such as a banking or shopping system.",
    ],
    duration: "6-8 weeks",
    certification: "Basic C++ certification on completion.",
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
