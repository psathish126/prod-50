import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { GraduationCap, Building, Target, Users } from 'lucide-react';

const CollapsibleText = ({ text }: { text: string }) => {
  const [expanded, setExpanded] = useState(false);
  const previewLength = 350;
  const isLong = text.length > previewLength;
  const displayText = expanded || !isLong ? text : text.slice(0, previewLength) + '...';

  return (
    <div className="space-y-4">
      <p className="text-foreground/80 leading-relaxed whitespace-pre-line">{displayText}</p>
      {isLong && (
        <Button
          variant="outline"
          size="sm"
          onClick={() => setExpanded(!expanded)}
          className="transition-smooth"
        >
          {expanded ? 'Show Less' : 'Read More'}
        </Button>
      )}
    </div>
  );
};

const About = () => {
  const aboutCollege = `PSG College of Technology, is a Govt. Aided, Autonomous, Affiliated to Anna University and ISO 9001:2015 certified Institution. This is one of the foremost institutions founded by the PSG & Sons' Charities Trust (1926). The College was established in the year 1951 and the Founders wisely decided to locate it in the same campus as the PSG Industrial Institute for effective industry-institute interaction.

The PSG College of Technology is situated at about 8 km from Coimbatore Railway Station and 5 km from Airport. The campus is spread over 45 acres of land, economically utilized for the College, Hostels, Staff Quarters, Play Fields and Gardens.

PSG College of Technology, under the guidance of illustrious Managing Trustees Sri G R Govindarajulu, Dr G R Damodaran, Sri G Varadaraj, Sri G R Karthikeyan, Sri V. Rajan, Sri G.Rangaswamy and presently under Sri L Gopalakrishnan, all with foresight and far reaching vision, has been in the forefront of innovation in technical education. The founder Principal Dr G R Damodaran was instrumental in the planned growth of the institution from the humble beginnings in 1951 to the present status of a world-renowned technological institution. Dr G R Damodaran was succeeded by Dr R Subbayyan, Dr K Venkataraman, Dr A Shanmugasundaram, Dr S Subramanyan, Dr P Radhakrishnan, Dr S Vijayarangan and Dr R Rudramoorthy as Principal's. Presently Dr K Prakasan is Principal.

The College today has a student strength of about 8518 with 15 engineering and technology departments besides the computer applications, management sciences, basic sciences and humanities departments. The college offers 21 Undergraduate programmes including BE/BTech/BSc and 24 Postgraduate programmes including ME/MTech/MSc (5 year Integrated)/MSc (2 year)/MBA/MCA. Among the various Undergraduate and Postgraduate programmes offered by the college, as many as 18 programmes were accredited in the year 1997 itself by the National Board of Accreditation of AICTE. The departments are greatly benefited by the expertise of more than 15 visiting faculty from renowned institutions and industries. Each department conducts annually at least one National / International Conference / Seminar / Workshop for effective dissemination of state-of-art technologies and research findings for the benefit of teaching faculty and industries. On an average every year, five short term programmes on current topics of interest are conducted for the teaching faculty from other colleges with funding from AICTE / ISTE and other agencies.

More than 505 research scholars are pursuing research programmes leading to Ph D / MS / M Tech degrees and the college is a recognized QIP centre for Postgraduate and Ph D programmes.

The college is extremely proud of its alumni, a considerable number of them being entrepreneurs or senior executives in industries both within India and abroad. Some of them are holding prestigious positions like Chief Executive and Managing Director and also as Chairmen of various disciplines in universities abroad. A good number of our alumni occupied the position of Vice Chancellor in various reputed universities in India . A few educational institutions have also been established by our alumni.

Several advanced centres are set up with financial support from the Ministry of Human Resources Development, DST and other agencies. These include: the CAD/CAM/CIM Centre, Virtual Reality Centre, Virtual Instrumentation Centre, Educational Technology Centre, Centre for Non-Formal and Continuing Education, PROJECT IMPACT Centre (a project funded by the World Bank, Swiss Development Corporation and the Government of India), UNDP Jute Project Centre, TIFAC - CORE, Rapid Prototyping and Manufacturing Centre, Festo-PSG Centre for Pneumatic and Control Engineering, Metals Testing and Research Centre, Industry Institute Partnership Cell and CII - TDB TNET Centre.

The programmes of the college are recognized all over India and abroad. The college maintains close interaction with several R&D Institutions and institutions of higher learning in India and abroad, through institutional network programmes and collaborative research programmes. It also has close collaborative links with industries in the fields of Automotive, Aerospace, Defence, Textile, Machine Tools, Software Development and Consumer durables.

The college has been the recipient of several prestigious projects and International funding support. The college was conferred the AUTONOMOUS STATUS by the University of Madras in the academic year 1978-79, which is continued by the Bharathiar University and subsequently by Anna University. This enables the college to frame its own curricula, update syllabi and introduce new courses as and when needed. The college is empowered to administer its own evaluation system.

The college has signed MoU with research organizations and industries in order to promote closer interaction with other institutions in the areas of technology development, training of students, curriculum updating and development of state-of-art centres.`;

  const aboutDepartment = `As manufacturing activities play a major role in the development of the country, PSG College of Technology envisaged the need for trained manpower in manufacturing and thus the Department of Production Engineering was started in the year 1975. Subsequently, the department grew in several dimensions of academic excellence with time. The department is approved for carrying out research, leading to Ph.D. Degree (full-time and part-time) by Anna University, Chennai. The department offers consultancy in design, manufacturing processes and testing a range of products, including product styling. The department maintains a close liaison with a large number of universities, industries within the country, and overseas through collaborative projects. The team of dedicated faculty members nurture the program and actively contribute towards the creation of a high-quality learning environment that is persuasive. There is a strong interaction with industry majors like Larsen & Toubro, General Electric, Janatics India Pvt. Ltd., Propel Industries Pvt. Ltd, Maxbyte Technologies Services Pvt. Ltd., TAFE, Parametric Technology Corporation (PTC), Visual Collaboration Technologies Pvt. Ltd and a few more.
The Department of Production Engineering is well-equipped with adequate hardware and software facilities. The department offers UG and PG programmes to develop Engineers with a strong foundation in basic sciences, materials, manufacturing processes, tooling, and manufacturing systems in order to provide a cost-effective solution for the problems faced by industries through the power of digital tools and techniques. Apart from basic laboratory facilities, the department is equipped with advanced machining and metrology facilities such as a composite laboratory, ergonomics laboratory, advanced machine vision and metrology laboratory, and virtual reality laboratory to purse research activities.`;

  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in-up">
            About Our <span className="text-primary">Legacy</span>
          </h2>
          <p
            className="text-lg text-foreground/70 max-w-3xl mx-auto animate-fade-in-up"
            style={{ animationDelay: '0.2s' }}
          >
            Discover the remarkable journey of excellence that has shaped engineering education and innovation for five decades.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* About College */}
          <div className="gradient-card p-8 rounded-2xl shadow-card hover:shadow-card-hover transition-smooth border border-primary/10 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 gradient-institutional rounded-lg flex items-center justify-center mr-4">
                <Building className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">PSG College of Technology</h3>
            </div>
            <CollapsibleText text={aboutCollege} />
            <div className="mt-6">
              <h4 className="text-lg font-semibold text-primary mb-2">Vision</h4>
              <p className="text-foreground/70 mb-4">PSG College of Technology aspires to be recognised as one of the leaders in engineering education, research and application of knowledge to benefit society.</p>
              <h4 className="text-lg font-semibold text-primary mb-2">Mission</h4>
              <p className="text-foreground/70">Provide world-class Engineering Education, foster Research and Development, evolve Innovative applications of Technology, encourage Entrepreneurship, ultimately mould young men and women capable of assuming Leadership of the society for the betterment of the country.</p>
            </div>
          </div>

          {/* About Department */}
          <div className="gradient-card p-8 rounded-2xl shadow-card hover:shadow-card-hover transition-smooth border border-primary/10 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 gradient-jubilee rounded-lg flex items-center justify-center mr-4">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Production Engineering</h3>
            </div>
            <CollapsibleText text={aboutDepartment} />
            <div className="mt-6">
              <h4 className="text-lg font-semibold text-primary mb-2">Vision</h4>
              <p className="text-foreground/70 mb-4">To be a leader in engineering education of excellence that imparts relevant skills and right attitudes among students to serve the society.</p>
              <h4 className="text-lg font-semibold text-primary mb-2">Mission</h4>
              <p className="text-foreground/70">To provide students of production engineering with learning facilities comparable to world-class standards for innovating current and emerging products and manufacturing processes with a multidisciplinary approach.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
