const overview = {
  title: "CompTIA Network+",
  category: "Networking",
  breadcrumb: ["Home", "Courses", "CompTIA Network+"],
  description:
    `The CompTIA Network+ course provides a comprehensive introduction to networking concepts and prepares learners for the CompTIA Network+ (N10-008) certification exam. This course covers fundamental networking principles, hands-on troubleshooting techniques, and an overview of network infrastructure, security, and cloud technologies. Ideal for aspiring network professionals, this course equips participants with the skills and knowledge to build, manage, and secure modern network environments.`,
  targetAudience: [
    "Aspiring network administrators and IT professionals",
    "Students preparing for the CompTIA Network+ (N10-008) certification exam",
    "Individuals looking to strengthen their foundational networking skills",
    "IT support staff seeking to advance their careers in networking",
  ],
  tags: ["Networking", "Network Security", "CompTIA Certification"],
};

const courses = [
  {
    title: "CompTIA Network+",
    outline: [
      "Network Fundamentals: Understanding network topologies, protocols, and network standards (TCP/IP, OSI Model).",
      "Network Infrastructure: Switches, routers, access points, and other networking devices.",
      "IP Addressing and Subnetting: IPv4 and IPv6 basics, subnetting, and network addressing.",
      "Wireless and Cloud Technologies: Basics of wireless standards, network virtualization, and cloud computing.",
      "Network Security: Introduction to firewalls, access control, and network security best practices.",
      "Troubleshooting: Identifying and resolving connectivity issues and network problems.",
    ],
    duration: "8-10 weeks",
    certification: "Prepares students for the CompTIA Network+ (N10-008) certification exam",
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
