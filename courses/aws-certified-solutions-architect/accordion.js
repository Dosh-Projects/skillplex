const overview = {
  title: "AWS Certified Solutions Architect",
  category: "Cloud Computing",
  breadcrumb: ["Home", "Courses", "AWS Certified Solutions Architect"],
  description:
    `The AWS Certified Solutions Architect course provides in-depth knowledge and hands-on experience to design, deploy, and manage scalable, secure, and reliable systems on the AWS platform. This course is tailored for individuals looking to master the core AWS services, understand architectural best practices, and prepare for the AWS Certified Solutions Architect - Associate exam. Through a blend of theoretical concepts and practical projects, you'll gain the skills needed to excel in cloud architecture and services.`,
  targetAudience: [
    "IT professionals looking to transition to cloud computing",
    "Aspiring cloud architects aiming to earn the AWS Solutions Architect certification",
    "Individuals seeking to design scalable, secure, and cost-effective cloud solutions",
    "Professionals interested in advancing their AWS skills for career growth",
  ],
  tags: [
    "AWS Core Concepts",
    "Cloud Architecture",
    "AWS Certified Solutions Architect Exam",
  ],
};

const courses = [
  {
    title: "AWS Certified Solutions Architect",
    outline: [
      "AWS Core Concepts: Understanding AWS architecture, regions, availability zones, and basic cloud concepts.",
      "Compute Services: Deep dive into EC2 instances, Lambda (serverless computing), Elastic Load Balancing, and Auto Scaling.",
      "Storage Services: Configuring and managing S3, EBS, Glacier, and storage lifecycle policies.",
      "Database Services: Introduction to RDS, DynamoDB, Aurora, and Redshift.",
      "Networking and Content Delivery: Setting up and managing VPCs, Route 53, CloudFront, and Direct Connect.",
      "Security and Identity Management: IAM roles, permissions, Key Management Service (KMS), and AWS Shield.",
      "Monitoring and Optimization: CloudWatch, CloudTrail, Cost Explorer, and Trusted Advisor.",
      "High Availability and Disaster Recovery: Designing resilient architectures, backups, and failover strategies.",
      "Project: Creating a multi-tier, highly available web application architecture on AWS.",
    ],
    duration: "10-12 weeks",
    certification:
      "Prepares students for the AWS Certified Solutions Architect - Associate exam",
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
