const overview = {
  title: "Cisco Certified Network Associate (CCNA)",
  category: "Networking",
  breadcrumb: ["Home", "Courses", "Cisco Certified Network Associate (CCNA)"],
  description:
    `The Cisco Certified Network Associate (CCNA) course provides a comprehensive foundation in networking concepts and hands-on experience with Cisco equipment. This course prepares learners for the CCNA 200-301 certification exam by covering key topics such as IP addressing, VLANs, routing, security fundamentals, and network automation. Through hands-on labs and real-world scenarios, participants will gain the skills needed to design, configure, and troubleshoot modern network infrastructures.`,
  targetAudience: [
    "Aspiring network engineers and IT professionals",
    "Students preparing for the Cisco Certified Network Associate (CCNA 200-301) certification exam",
    "Individuals looking to enhance their networking and security skills",
    "Professionals seeking foundational knowledge in network automation and programmability",
  ],
  tags: ["Networking", "CCNA Certification", "Network Security"],
};

const courses = [
  {
    title: "Cisco Certified Network Associate (CCNA)",
    outline: [
      "Networking Fundamentals: Understanding IP addressing, Ethernet, VLANs, and network protocols (IPv4/IPv6).",
      "LAN Switching and Routing: Configuring and troubleshooting VLANs, routers, and switches.",
      "Wireless Networks: Configuring wireless networks, security settings, and troubleshooting Wi-Fi connections.",
      "Security Fundamentals: Basics of securing network devices, firewall configurations, access control lists (ACLs).",
      "Automation and Programmability: Introduction to network automation using Python and basic scripts.",
      "WAN Technologies: Configuring and troubleshooting Wide Area Network (WAN) connections.",
      "Hands-On Labs: Labs using Cisco equipment or simulators like Packet Tracer to configure and troubleshoot networks.",
    ],
    duration: "12-16 weeks",
    certification: "Prepares students for the Cisco Certified Network Associate (CCNA 200-301) certification exam",
  },
  {
    title: "Optional Supplementary Training: Cybersecurity Analyst (CySA+)",
    outline: [
      "Threat Management: Identifying, assessing, and managing threats to organizational networks.",
      "Vulnerability Management: Scanning, analyzing, and mitigating vulnerabilities.",
      "Security Architecture and Toolsets: Overview of cybersecurity architecture and various security tools.",
      "Incident Response and Forensics: Analyzing security incidents and digital forensic practices.",
      "Monitoring and Detection: Using tools like SIEM to detect and respond to security events.",
    ],
    duration: "10-12 weeks",
    certification: "Prepares for CompTIA CySA+ (CS0-002) exam",
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
