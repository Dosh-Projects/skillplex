const overview = {
  title: "Google Cloud Platform (GCP) Certifications",
  category: "Cloud Computing",
  breadcrumb: ["Home", "Courses", "Google Cloud Platform (GCP) Certifications"],
  description:
    `The Google Cloud Platform (GCP) Certifications course is designed to prepare individuals for various GCP certification paths, including Associate Cloud Engineer, Professional Data Engineer, and Professional Cloud Architect. This comprehensive program offers in-depth knowledge of GCP services, hands-on experience in cloud deployment, and real-world scenarios to build confidence in designing, implementing, and managing cloud solutions. Through detailed modules and practical projects, learners will be equipped to achieve their desired GCP certification and excel in the cloud computing domain.`,
  targetAudience: [
    "IT professionals aspiring to specialize in Google Cloud Platform",
    "Developers and data engineers preparing for GCP certification exams",
    "Cloud architects seeking expertise in designing and deploying GCP solutions",
    "Individuals looking to build a career in cloud computing and data engineering",
  ],
  tags: [
    "GCP Associate Cloud Engineer",
    "GCP Professional Data Engineer",
    "GCP Professional Cloud Architect",
  ],
};

const courses = [
  {
    title: "GCP Associate Cloud Engineer",
    outline: [
      "GCP Basics: Introduction to cloud computing concepts and GCP architecture.",
      "Compute and Storage Resources: Compute Engine, App Engine, Cloud Functions, and storage services like Cloud Storage, Bigtable.",
      "Networking and Security: Configuring Virtual Private Cloud (VPC), firewall rules, Cloud VPN, and Identity and Access Management (IAM).",
      "Resource Monitoring and Management: Stackdriver Monitoring, Cloud Console, CLI, and Resource Manager.",
      "Project: Deploying a web application using Compute Engine, setting up security and monitoring.",
    ],
    duration: "6-8 weeks",
    certification: "Prepares for the GCP Associate Cloud Engineer certification",
  },
  {
    title: "GCP Professional Data Engineer",
    outline: [
      "Data Engineering on GCP: Overview of data pipelines, data lake, and data warehousing on GCP.",
      "Data Processing and Analysis: Working with BigQuery, Cloud Dataflow, and Cloud Dataproc for analytics.",
      "Machine Learning on GCP: Using AI Platform, TensorFlow, and AutoML for ML model deployment.",
      "Security and Compliance: Securing data and ensuring compliance using IAM, encryption, and VPC Service Controls.",
      "Monitoring and Troubleshooting: Using Stackdriver for logging, monitoring, and optimizing workflows.",
      "Project: Building a data pipeline and performing data analysis using BigQuery.",
    ],
    duration: "10-12 weeks",
    certification: "Prepares for the GCP Professional Data Engineer exam",
  },
  {
    title: "GCP Professional Cloud Architect",
    outline: [
      "GCP Architecture and Infrastructure: Overview of GCP services, Compute Engine, Kubernetes Engine, and Anthos.",
      "Designing and Implementing GCP Solutions: Solutions for high availability, disaster recovery, and scalability.",
      "Security and Compliance: Designing secure applications using IAM, VPC, and firewall rules.",
      "Machine Learning and Big Data Services: Implementing big data and AI solutions using BigQuery, AI Platform, and Pub/Sub.",
      "Monitoring and Optimization: Configuring Stackdriver for monitoring, logging, and cost optimization.",
      "Case Studies: Real-world scenarios for architecture design, covering domains like finance, healthcare, and e-commerce.",
    ],
    duration: "12-14 weeks",
    certification: "Prepares for the GCP Professional Cloud Architect exam",
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
