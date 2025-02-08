import React from 'react';
import { CareerPath } from '../types';
import { TrendingUp, Award, BookOpen } from 'lucide-react';

interface Props {
  careerPaths: CareerPath[];
}

export default function CareerPathTimeline({ careerPaths }: Props) {
  return (
    <div className="relative">
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-blue-200"></div>
      <div className="space-y-12">
        {careerPaths.map((path, index) => (
          <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
            <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2 justify-end">
                  {path.role}
                  <TrendingUp className="w-5 h-5 text-blue-500" />
                </h3>
                <p className="text-gray-600 mt-2">{path.timeframe}</p>
                <p className="text-lg font-semibold text-green-600 mt-1">
                  ${path.salary.toLocaleString()}/year
                </p>
                <div className="mt-4">
                  <h4 className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                    <BookOpen className="w-4 h-4" />
                    Required Skills:
                  </h4>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {path.requiredSkills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-4">
                  <h4 className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                    <Award className="w-4 h-4" />
                    Recommended Certifications:
                  </h4>
                  <ul className="mt-2 text-sm text-gray-600">
                    {path.certifications.map((cert, idx) => (
                      <li key={idx}>{cert}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="relative flex items-center justify-center w-8">
              <div className="h-8 w-8 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">{index + 1}</span>
              </div>
            </div>
            <div className="w-1/2"></div>
          </div>
        ))}
      </div>
    </div>
  );
}