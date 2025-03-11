import React from 'react';
import { Code, Wrench, Cloud, Layers, FileCode } from 'lucide-react';

const SkillsSection = ({ resumeData }) => {
  // Define categories with their icons and corresponding data
  const categories = [
    {
      name: "Programming Languages",
      icon: <FileCode size={16} />,
      skills: resumeData.skills.programmingLanguages,
      description: "C, Java, Python"
    },
    {
      name: "Web Technologies and Databases",
      icon: <Code size={16} />,
      skills: [...resumeData.skills.webTechnologies, ...resumeData.skills.databases],
      description: "HTML, CSS, JavaScript, TypeScript, MongoDB, PostgreSQL, MySQL, Redis"
    },
    {
      name: "Frameworks and Libraries",
      icon: <Layers size={16} />,
      skills: [
        ...resumeData.skills.frontend,
        ...resumeData.skills.backend,
        ...resumeData.skills.orm,
        ...resumeData.skills.dataScience
      ],
      description: "React, Next.js, TailwindCSS, Express.js, Node.js, Prisma, Shadcn, Framer Motion, Redux, Chart.js, TensorFlow, Keras, Scikit-learn, NumPy, Pandas, Matplotlib, Seaborn"
    },
    {
      name: "Tools & DevOps",
      icon: <Wrench size={16} />,
      skills: resumeData.skills.toolsDevOps,
      description: "VS Code, Git, GitHub, Postman, Figma, Docker, Cursor AI, Cloudinary"
    },
    {
      name: "Cloud & Hosting Services",
      icon: <Cloud size={16} />,
      skills: resumeData.skills.cloudServices,
      description: "AWS, Render"
    }
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-xl text-green-500 break-words">{"> SKILL_SET.exe"}</h2>
      
      {categories.map((category, categoryIndex) => (
        <div key={categoryIndex} className="space-y-3">
          <h3 className="text-md text-green-400 flex items-center gap-2">
            {category.icon} {category.name}
          </h3>
          
          <div className="flex flex-wrap gap-3">
            {category.skills.map((skill, skillIndex) => (
              <div key={skillIndex} className="flex items-center space-x-2 p-2 border border-green-500 rounded">
                <span className="break-words">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillsSection; 