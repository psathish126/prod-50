import { GraduationCap, Users } from 'lucide-react';

const Team = () => {
  const faculty = [
    { name: "Dr. M.R. Pratheesh Kumar", role: "Associate Professor" },
    { name: "Dr. J. Pradeep Kumar", role: "Associate Professor" },
    { name: "Dr. R. Rajamani", role: "Assistant Professor (Sr. Gr.)" },
    { name: "Mr. K. Saravanakumar", role: "Assistant Professor (Sr. Gr.)" },
    { name: "Mr. Arun Prakash R", role: "Assistant Professor (Sl. Gr.)" }
  ];

  const students = [
    { name: "Mr. Lakshman Raghav V G", role: "Final Year B.E. Production SW" },
    { name: "Mr. Balaji C", role: "Final Year B.E. Production" },
    { name: "Mr. Sathish Kumar P", role: "Final Year B.E. Production" }
  ];

  const renderCard = (member: any, index: number) => (
    <div 
      key={index} 
      className="p-6 rounded-xl bg-white shadow hover:shadow-lg border border-gray-200 text-center transition"
    >
      <h4 className="text-lg font-semibold text-gray-800">{member.name}</h4>
      <p className="text-sm text-gray-500">{member.role}</p>
    </div>
  );

  return (
    <section id="team" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-2">Our <span className="text-blue-600">Team</span></h2>
          <p className="text-gray-600">Faculty members and student committee leading the techfest</p>
        </div>

        {/* Faculty Section */}
        <div className="mb-16">
          <div className="flex items-center justify-center space-x-3 mb-8">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <GraduationCap className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800">Faculty Members</h3>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {faculty.map((member, i) => renderCard(member, i))}
          </div>
        </div>

        {/* Student Section */}
        <div>
          <div className="flex items-center justify-center space-x-3 mb-8">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <Users className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800">Student Committee</h3>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {students.map((member, i) => renderCard(member, i))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
