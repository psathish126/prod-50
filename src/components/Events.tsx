import { Calendar, ExternalLink, Award, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

import PSGEDSPoster from "@/assets/posters/PSG-EDS.jpeg";
import PSGTESAPoster from "@/assets/posters/PSG-TESA.jpeg";
import PSGJANATICSPoster from "@/assets/posters/PSG-JANATICS.jpeg";
import CADCAMPoster from "@/assets/posters/CAD-CAM.jpeg";
import SEFIPRAPoster from "@/assets/posters/CEFIPRA.jpeg";
import SeminarPoster from "@/assets/posters/Seminar.jpeg";
import LecturePoster from "@/assets/posters/Lecture.jpeg";

const Events = () => {
  const events = [
    {
      id: 1,
      title: "Distinguished Lecture Series on Emerging & Cutting-edge Advancements",
      description:
        "Ongoing lecture series (online & offline) covering advancements in production and allied fields.",
      poster: LecturePoster,
      organizers: ["Dr. S.P. Leo Kumar (Associate Professor)"],
      coorganizers: ["Dr. S. Hari Chealvan (Asst. Professor)"],
      coordinators: [
        { name: "Mr. Sathish Kumar P", phone: "+91 96294 63964", email: "22p126@psgtech.ac.in" },
      ],
      prize: "-",
      date: "From August 2025 onwards",
      brochure: "/brochures/lectures.pdf",
    },
    {
      id: 2,
      title: 'Institution of Engineers (India) All India Seminar on "World Quality Month 2025"',
      description:
        "National seminar highlighting excellence in quality across industries for a sustainable future.",
      poster: SeminarPoster,
      organizers: [
        "Dr. M.R. Pratheesh Kumar (Associate Professor)",
        "Dr. R. Rajamani (Asst. Professor Sr.Gr)",
      ],
      coorganizers: ["Mr. K. Saravanakumar (Asst. Professor Sr.Gr)"],
      coordinators: [
        { name: "Mr. Sathish Kumar P", phone: "+91 96294 63964", email: "22p126@psgtech.ac.in" },
      ],
      prize: "-",
      date: "28-29 November 2025",
      brochure: "/brochures/quality.pdf",
    },
    {
      id: 3,
      title: 'PSG-TESA Technologies Competition on "Metrology and Quality Control"',
      description:
        "Competition focusing on precision measurement and quality control in modern manufacturing.",
      poster: PSGTESAPoster,
      organizers: [
        "Dr. M.R. Pratheesh Kumar (Associate Professor)",
        "Dr. R. Rajamani (Asst. Professor Sr.Gr)",
      ],
      coorganizers: ["Mr. K. Saravanakumar (Asst. Professor Sr.Gr)"],
      coordinators: [
        { name: "Mr. Sathish Kumar P", phone: "+91 96294 63964", email: "22p126@psgtech.ac.in" },
      ],
      prize: "Rs. 20,000/-",
      date: "January 2026",
      brochure: "/brochures/metrology.pdf",
    },
    {
      id: 4,
      title: 'PSG-EDS Technologies Competition on "CAD MODELING using 3D Experience CATIA"',
      description:
        "Industry-sponsored competition to enhance design skills in 3D modeling using CATIA platform.",
      poster: PSGEDSPoster,
      organizers: ["Dr. J. Pradeep Kumar (Associate Professor)"],
      coorganizers: ["Dr. R. Naveen Anthuvan (Asst. Professor Sr.Gr)"],
      coordinators: [
        { name: "Mr. Sathish Kumar P", phone: "+91 96294 63964", email: "22p126@psgtech.ac.in" },
      ],
      prize: "Rs. 10,000/-",
      date: "January 2026",
      brochure: "/brochures/catia.pdf",
    },
    {
      id: 5,
      title: "CAD/CAM and CNC Programming Competition",
      description:
        "Competition to test expertise in CAD/CAM design and CNC machining programming.",
      poster: CADCAMPoster,
      organizers: ["Dr. K. Anand (Associate Professor)"],
      coorganizers: ["Dr. R. Rajesh (Asst. Professor Sr.Gr)"],
      coordinators: [
        { name: "Mr. Sathish Kumar P", phone: "+91 96294 63964", email: "22p126@psgtech.ac.in" },
      ],
      prize: "-",
      date: "January 2026",
      brochure: "/brochures/cadcam.pdf",
    },
    {
      id: 6,
      title: 'PSG-JANATICS Competition on "Automation and Robotics"',
      description:
        "A robotics and automation competition to encourage innovation in industrial automation solutions.",
      poster: PSGJANATICSPoster,
      organizers: ["Dr. S. Elangovan (Associate Professor)"],
      coorganizers: [
        "Dr. Jayakrishnan Nampoothiri (Asst. Professor)",
        "Mr. N. Muthuram (Asst. Professor Sr.Gr)",
      ],
      coordinators: [
        { name: "Mr. Sathish Kumar P", phone: "+91 96294 63964", email: "22p126@psgtech.ac.in" },
      ],
      prize: "Rs. 50,000/-",
      date: "January 2026",
      brochure: "/brochures/robotics.pdf",
    },
    {
      id: 7,
      title:
        'CEFIPRA Indo-French Research Seminar on "Additive Manufacturing: Aerospace & Biomedical"',
      description:
        "International seminar focusing on additive manufacturing in aerospace and biomedical industries.",
      poster: SEFIPRAPoster,
      organizers: ["Dr. V. Krishnaraj (Professor CAS)", "Dr. G. Madhan Mohan (Professor CAS)"],
      coorganizers: ["Dr. Jayakrishnan Nampoothiri (Asst. Professor)"],
      coordinators: [
        { name: "Mr. Sathish Kumar P", phone: "+91 96294 63964", email: "22p126@psgtech.ac.in" },
      ],
      prize: "-",
      date: "2-3 March 2026",
      brochure: "/brochures/additive.pdf",
    },
  ];

  return (
    <section id="events" className="py-20 bg-gradient-to-b from-yellow-50 to-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Events & Workshops
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore the industry-sponsored competitions, seminars, and lectures during the Golden Jubilee celebrations.
          </p>
        </div>

        {/* Event Grid */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {events.map((event) => (
            <div
              key={event.id}
              className="bg-white/70 backdrop-blur-md border border-gray-200 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col"
            >
              {/* Poster */}
              <div className="relative w-full h-80 overflow-hidden">
                <img
                  src={event.poster}
                  alt={event.title}
                  className="w-full h-46 object-cover transition-transform duration-500 hover:scale-105 hover:brightness-110"
                />
                <div className="absolute top-3 right-3 bg-yellow-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
                  {event.date}
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-6">
                <h3 className="text-lg md:text-xl font-bold mb-2 text-gray-900">
                  {event.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                  {event.description}
                </p>

                {/* Prize & Organizers */}
                <div className="space-y-3 text-sm text-gray-700 flex-1">
                  {event.prize !== "-" && (
                    <span className="inline-flex items-center gap-1 text-yellow-700 bg-yellow-100 px-2 py-1 rounded-full text-xs font-medium">
                      <Award className="w-4 h-4" /> {event.prize}
                    </span>
                  )}

                  <div>
                    <strong className="text-gray-800">Organizers:</strong>
                    <ul className="list-disc list-inside ml-2 mt-1">
                      {event.organizers.map((org, idx) => (
                        <li key={idx}>{org}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <strong className="text-gray-800">Coordinator:</strong>
                    <ul className="list-disc list-inside ml-2 mt-1">
                      {event.coordinators.map((co, idx) => (
                        <li key={idx} className="mt-1">
                          <span className="font-medium">{co.name}</span>
                          <div className="flex gap-3 mt-1 text-blue-600 text-xs">
                            <a
                              href={`tel:${co.phone}`}
                              className="flex items-center gap-1 hover:underline"
                            >
                              <Phone className="w-3 h-3" /> {co.phone}
                            </a>
                            <a
                              href={`mailto:${co.email}`}
                              className="flex items-center gap-1 hover:underline"
                            >
                              <Mail className="w-3 h-3" /> {co.email}
                            </a>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex gap-3 mt-6">
                  <Button className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-white rounded-full">
                    Register
                  </Button>
                  <a
                    href={event.brochure}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <Button
                      variant="outline"
                      className="w-full flex items-center justify-center gap-2 rounded-full border-gray-300 hover:bg-gray-100"
                    >
                      <ExternalLink className="w-4 h-4" /> Details
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
