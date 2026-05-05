import React from 'react';
import { Section, Container, Card } from '@/components/common';

export const Portfolio: React.FC = () => {
  const caseStudies = [
    {
      id: 1,
      title: 'FitTrack App',
      metric: '240% increase',
      description: 'Downloads through ASO and paid campaigns.',
      icon: '📈',
    },
    {
      id: 2,
      title: 'ShopHub Mobile',
      metric: '3.8x ROI',
      description: 'In-app purchases from user acquisition campaigns.',
      icon: '📊',
    },
    {
      id: 3,
      title: 'TravelNow',
      metric: '78% retention',
      description: 'Week 4 retention rate with our retention strategy.',
      icon: '🎯',
    },
    {
      id: 4,
      title: 'SocialConnect',
      metric: '1M+ users',
      description: 'Acquired in 6 months through organic and paid channels.',
      icon: '👥',
    },
  ];

  return (
    <Section id="cases" className="bg-white border-t border-gray-200">
      <Container>
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Case Studies</h2>
          <p className="text-xl text-gray-600 max-w-2xl">
            See how we've helped apps achieve remarkable growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {caseStudies.map((study) => (
            <Card key={study.id} className="border border-gray-200">
              <div className="text-3xl mb-4">{study.icon}</div>
              <div className="text-2xl font-bold text-gray-900 mb-2">{study.metric}</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{study.title}</h3>
              <p className="text-gray-600 text-sm">{study.description}</p>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
};
