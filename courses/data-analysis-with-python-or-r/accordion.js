const overview = {
  title: "Data Analysis with Python or R",
  category: "Data Science",
  breadcrumb: ["Home", "Courses", "Data Analysis with Python or R"],
  description:
    `The Data Analysis with Python or R course equips learners with the skills to analyze, interpret, and visualize data using two of the most popular tools in the data science domain. This course provides a comprehensive introduction to Python and R for data analysis, helping participants choose their preferred language to clean, manipulate, and derive insights from data. Through hands-on projects and real-world datasets, learners will gain practical experience in data analysis techniques and tools.`,
  targetAudience: [
    "Aspiring data analysts and data scientists",
    "Students and professionals looking to enhance their data analysis skills",
    "Individuals interested in learning Python or R for data-driven decision making",
    "Anyone eager to perform exploratory data analysis and create meaningful visualizations",
  ],
  tags: ["Data Analysis", "Python", "R", "Data Science"],
};

const courses = [
  {
    title: "Data Analysis with Python",
    outline: [
      "Python Basics: Introduction to Python syntax, data types, and basic operations.",
      "Data Manipulation: Using libraries like Pandas and NumPy for data cleaning, transformation, and manipulation.",
      "Data Visualization: Creating plots with Matplotlib and Seaborn to explore data and identify trends.",
      "Statistics and Probability: Basic statistical concepts like distributions, hypothesis testing, and correlations.",
      "Real-World Project: Performing an exploratory data analysis on a dataset (e.g., sales, customer, or survey data).",
    ],
    duration: "8-10 weeks",
    certification: "Certificate of Completion in Data Analysis with Python",
  },
  {
    title: "Data Analysis with R",
    outline: [
      "R Basics: Understanding R syntax, functions, and basic operations.",
      "Data Manipulation: Using packages like dplyr and tidyr to clean and structure data.",
      "Data Visualization: Creating visualizations with ggplot2 for data exploration.",
      "Statistical Analysis: Introduction to linear regression, t-tests, and ANOVA.",
      "Real-World Project: Conducting a full analysis using a public dataset, such as healthcare or environmental data.",
    ],
    duration: "8-10 weeks",
    certification: "Certificate of Completion in Data Analysis with R",
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
