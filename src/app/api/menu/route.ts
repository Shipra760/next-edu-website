export async function GET() {
  return Response.json([
    {
      id: 2,
      name: "About Us",
      slug: "/about-us",
      children: [
        { id: 21, name: "Our Vision", slug: "/about-us/vision" },
        { id: 22, name: "Our Mission", slug: "/about-us/mission" },
        { id: 23, name: "Management", slug: "/about-us/management" }
      ]
    },
    {
      id: 3,
      name: "Admissions",
      slug: "/admissions",
      children: [
        { id: 31, name: "Admission Process", slug: "/admissions/process" },
        { id: 32, name: "Fee Structure", slug: "/admissions/fees" }
      ]
    },
    {
      id: 4,
      name: "GDGPS World",
      slug: "/gdgps-world",
      children: [
        { id: 41, name: "Gallery", slug: "/gdgps-world/gallery" },
        { id: 42, name: "Events", slug: "/gdgps-world/events" }
      ]
    },
    {
      id: 5,
      name: "Academics",
      slug: "/academics",
      children: [
        { id: 51, name: "Curriculum", slug: "/academics/curriculum" },
        { id: 52, name: "Faculty", slug: "/academics/faculty" },
        { id: 53, name: "Examinations", slug: "/academics/exams" }
      ]
    },
    {
      id: 6,
      name: "Fun@ GDGPS",
      slug: "/fun",
      children: [
        { id: 61, name: "Sports", slug: "/fun/sports" },
        { id: 62, name: "Activities", slug: "/fun/activities" }
      ]
    },
    {
      id: 7,
      name: "Mandatory Public Disclosure",
      slug: "/mandatory-disclosure",
      children: [
        { id: 71, name: "Documents", slug: "/mandatory-disclosure/docs" },
        { id: 72, name: "Reports", slug: "/mandatory-disclosure/reports" }
      ]
    },
    {
      id: 8,
      name: "Reach Us",
      slug: "/reach-us",
      children: [
        { id: 81, name: "Contact Info", slug: "/reach-us/contact" },
        { id: 82, name: "Location", slug: "/reach-us/location" }
      ]
    },
    {
      id: 9,
      name: "Job Vacancy",
      slug: "/jobs",
      children: [
        { id: 91, name: "Open Positions", slug: "/jobs/openings" },
        { id: 92, name: "Apply Now", slug: "/jobs/apply" }
      ]
    }
  ]);
}