import React from 'react';
import { Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header/Hero Section */}
      <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">HEMANTH VASIREDDI</h1>
          <div className="flex flex-wrap gap-4 text-sm">
            <div className="flex items-center gap-2">
              <Phone size={16} />
              <span>+91 9640818616</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={16} />
              <span>Hyderabad, Telangana</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={16} />
              <span>hemanthvasireddi2@gmail.com</span>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        {/* Professional Summary */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Professional Summary</h2>
          <p className="text-gray-600 leading-relaxed">
            Detail-oriented and analytical Data Analyst with internship experience in data validation, quality checks, and
            reporting. Proficient in Excel, SQL, Power BI, and data processing, with a strong attention to detail and a problem
            solving mindset. Holds an MSc in Computer Science from Andhra University and is passionate about leveraging
            data-driven insights for business optimization. Quick learner with excellent communication and collaboration skills,
            eager to contribute to data analytics and process improvement.
          </p>
        </section>

        {/* Professional Experience */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Professional Experience</h2>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-gray-800">Data Analyst Intern</h3>
            <p className="text-gray-600 mb-2">Advertmotive, Hyderabad | Sep 2024 – Jan 2025</p>
            <ul className="list-disc list-inside text-gray-600">
              <li>Conducted data validation and quality checks to maintain high accuracy levels.</li>
              <li>Reviewed and corrected data discrepancies, improving data integrity by 99%.</li>
              <li>Followed structured data review guidelines to identify potential risks and anomalies.</li>
            </ul>
          </div>
        </section>

        {/* Projects */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Relevant Projects</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-800">Sales Forecasting & Trend Analysis</h3>
              <p className="text-blue-600 mb-2">Python, SQL, Power BI</p>
              <ul className="list-disc list-inside text-gray-600">
                <li>Developed a predictive model using Python and SQL to forecast sales trends.</li>
                <li>Created interactive Power BI dashboards to visualize seasonal trends.</li>
                <li>Increased forecast accuracy by 35%.</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-800">Customer Segmentation & Retention Analysis</h3>
              <p className="text-blue-600 mb-2">SQL, Tableau, Machine Learning</p>
              <ul className="list-disc list-inside text-gray-600">
                <li>Used clustering techniques to segment customers based on behavior.</li>
                <li>Improved customer engagement by 20%.</li>
                <li>Built a Tableau dashboard for real-time customer insights.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Education</h2>
          <div className="space-y-4">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-800">Master of Science in Computer Science</h3>
              <p className="text-gray-600">Andhra University | 2022 – 2024</p>
              <p className="text-gray-600">Relevant Coursework: Data Analytics, AI & Machine Learning, Business Intelligence</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-800">Bachelor of Science in Chemistry</h3>
              <p className="text-gray-600">Andhra University | 2017 – 2020</p>
              <p className="text-gray-600">Relevant Coursework: Analytical Chemistry, Problem Solving, Research Methodology</p>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Skills</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Technical Skills</h3>
              <div className="flex flex-wrap gap-2">
                {['Excel (Advanced)', 'SQL', 'Python', 'Pandas', 'NumPy', 'Power BI'].map((skill) => (
                  <span key={skill} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Soft Skills</h3>
              <div className="flex flex-wrap gap-2">
                {['Problem-Solving', 'Team Collaboration', 'Communication', 'Leadership'].map((skill) => (
                  <span key={skill} className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Certifications</h2>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <ul className="space-y-2 text-gray-600">
              <li>• Advanced Microsoft Excel for Data Analysis</li>
              <li>• TCS ION Career Edge - IT for Non-IT Professionals</li>
              <li>• Google Data Analytics Professional Certificate</li>
            </ul>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex justify-center space-x-6">
            <a href="https://github.com/YourGitHubUsername" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/YourLinkedInUsername" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="mailto:hemanthvasireddi2@gmail.com" className="hover:text-blue-400 transition-colors">
              <Mail size={24} />
            </a>
          </div>
          <p className="text-center mt-4 text-gray-400">© 2024 Hemanth Vasireddi. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;