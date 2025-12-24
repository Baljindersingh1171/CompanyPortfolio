const Skills = ({isDark}:any)=> {

    const skills = {
        frontend: ['React', 'Vue.js', 'Angular', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Redux', 'Next.js'],
        backend: ['Node.js', 'Python', 'Java', 'PHP', 'Express', 'Django', 'Spring Boot', 'REST APIs', 'GraphQL'],
        database: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'Firebase'],
        tools: ['Git', 'Docker', 'AWS', 'CI/CD', 'Webpack', 'Vite', 'Jest', 'Agile/Scrum']
    };

    return (
        <section id="skills" className={isDark ? 'py-20 bg-gray-900' : 'py-20 bg-gray-50'}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center" style={{ color: '#fb8500' }}>
            Technical Skills
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className={isDark ? 'bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-700' : 'bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow'}>
                <h3 className="text-xl font-bold mb-4 capitalize" style={{ color: '#fb8500' }}>
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className={`px-3 py-1 rounded-full text-sm font-medium ${isDark ? "text-black": "text-white"}`}
                      style={{ backgroundColor: '#ffb703' }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
}
export default Skills;