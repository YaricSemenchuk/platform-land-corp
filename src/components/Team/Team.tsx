import React from 'react';
import { Section, Container, Card } from '@/components/common';

export const Team: React.FC = () => {
  const team = [
    {
      id: 1,
      name: 'Alex Johnson',
      title: 'CEO & Founder',
      bio: 'Mobile development visionary with 10+ years of experience.',
      initials: 'AJ',
    },
    {
      id: 2,
      name: 'Sarah Chen',
      title: 'Lead Developer',
      bio: 'Expert in iOS and Android native development.',
      initials: 'SC',
    },
    {
      id: 3,
      name: 'Michael Davis',
      title: 'Design Director',
      bio: 'Creating beautiful and intuitive user experiences.',
      initials: 'MD',
    },
    {
      id: 4,
      name: 'Emily Rodriguez',
      title: 'Project Manager',
      bio: 'Ensuring projects are delivered on time and on budget.',
      initials: 'ER',
    },
  ];

  return (
    <Section id="team" className="bg-gray-50">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Team</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Meet the talented professionals behind our success.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member) => (
            <Card key={member.id} className="text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">{member.initials}</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
              <p className="text-blue-600 font-semibold mb-3">{member.title}</p>
              <p className="text-gray-600">{member.bio}</p>
              <div className="flex justify-center gap-3 mt-4">
                <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M16.5.75H3.5A2.75 2.75 0 001 3.5v13A2.75 2.75 0 003.5 19h13A2.75 2.75 0 0019 16.5v-13A2.75 2.75 0 0016.5.75z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
                  <span className="sr-only">Twitter</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M19.5 4a7.5 7.5 0 01-2.2.6 3.85 3.85 0 001.7-2.1 7.7 7.7 0 01-2.4.9 3.85 3.85 0 00-6.6 3.5A10.9 10.9 0 013 4.8a3.85 3.85 0 001.2 5.1 3.8 3.8 0 01-1.7-.5v.05a3.85 3.85 0 003.1 3.8 3.85 3.85 0 01-1.7.07 3.85 3.85 0 003.6 2.7A7.7 7.7 0 01.5 15.6 10.9 10.9 0 015 17a10.9 10.9 0 0010.9-10.9v-.5a7.75 7.75 0 001.9-2a7.5 7.5 0 01-2.2.6z" />
                  </svg>
                </a>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
};
