const overview = {
  title: "Certified Ethical Hacker (CEH)",
  category: "Cybersecurity",
  breadcrumb: ["Home", "Courses", "Certified Ethical Hacker (CEH)"],
  description:
    `The Certified Ethical Hacker (CEH) course provides in-depth knowledge and practical experience in identifying, exploiting, and protecting against security vulnerabilities. This course prepares learners for the CEH certification exam by covering advanced topics in ethical hacking, network security, malware threats, and social engineering. Through hands-on labs and ethical hacking tools, participants will develop the skills to secure IT systems effectively and ethically.`,
  targetAudience: [
    "Aspiring ethical hackers and penetration testers",
    "IT professionals preparing for the CEH certification exam",
    "Cybersecurity professionals looking to expand their knowledge in offensive security",
    "Students and individuals eager to learn ethical hacking techniques and tools",
  ],
  tags: ["Ethical Hacking", "Cybersecurity", "CEH Certification"],
};

const courses = [
  {
    title: "Certified Ethical Hacker (CEH)",
    outline: [
      "Introduction to Ethical Hacking: Overview of ethical hacking, phases, attack vectors, and legal aspects.",
      "Footprinting and Reconnaissance: Techniques for gathering information about target systems.",
      "Scanning Networks: Tools and methods for network scanning and vulnerability identification.",
      "Gaining Access: Exploiting network vulnerabilities, privilege escalation.",
      "Maintaining Access and Covering Tracks: Techniques to maintain access on compromised systems.",
      "Malware Threats: Types of malware, working with viruses, worms, and trojans.",
      "Web Application Security: Identifying and exploiting common web vulnerabilities like SQL injection, XSS.",
      "Social Engineering: Understanding and utilizing social engineering techniques.",
      "Hands-On Labs: Practical labs on each topic using ethical hacking tools like Nmap, Metasploit, Wireshark.",
    ],
    duration: "12-16 weeks",
    certification: "Prepares students for the CEH (Certified Ethical Hacker) certification exam",
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
