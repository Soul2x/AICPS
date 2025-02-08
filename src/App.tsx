import React, { useState } from 'react';
import { Brain } from 'lucide-react';
import ProfileForm from './components/ProfileForm';
import CareerPathTimeline from './components/CareerPathTimeline';
import SkillGapAnalysis from './components/SkillGapAnalysis';
import { UserProfile, CareerPath, SkillGap } from './types';

// Mock data - In a real app, this would come from the backend
const mockCareerPaths: CareerPath[] = [
  {
    role: 'Junior Data Analyst',
    timeframe: '0-2 years',
    salary: 65000,
    requiredSkills: ['SQL', 'Python', 'Excel', 'Data Visualization'],
    certifications: ['Google Data Analytics Certificate', 'SQL Fundamentals'],
  },
  {
    role: 'Senior Data Analyst',
    timeframe: '2-4 years',
    salary: 95000,
    requiredSkills: ['Advanced SQL', 'Python', 'R', 'Tableau', 'Statistical Analysis'],
    certifications: ['Advanced Data Analytics Certification', 'Tableau Desktop Specialist'],
  },
  {
    role: 'Data Scientist',
    timeframe: '4-6 years',
    salary: 130000,
    requiredSkills: ['Machine Learning', 'Deep Learning', 'Big Data', 'Python', 'SQL'],
    certifications: ['AWS Machine Learning Specialty', 'Deep Learning Specialization'],
  },
];

const mockSkillGaps: SkillGap[] = [
  { skill: 'Machine Learning', proficiency: 2, importance: 5 },
  { skill: 'Python', proficiency: 4, importance: 5 },
  { skill: 'SQL', proficiency: 3, importance: 4 },
  { skill: 'Data Visualization', proficiency: 4, importance: 4 },
];

function App() {
  const [showResults, setShowResults] = useState(false);
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);

  const handleProfileSubmit = (profile: UserProfile) => {
    setUserProfile(profile);
    setShowResults(true);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-4">
            <Brain className="w-8 h-8 text-blue-600" />
            <h1 className="text-2xl font-bold text-gray-900">AI Career Path Simulator</h1>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {!showResults ? (
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Enter Your Profile Details</h2>
              <ProfileForm onSubmit={handleProfileSubmit} />
            </div>
          </div>
        ) : (
          <div className="space-y-12">
            {userProfile && (
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Your Profile</h2>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-500">Current Role</p>
                    <p className="font-medium">{userProfile.currentRole}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Desired Role</p>
                    <p className="font-medium">{userProfile.desiredRole}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Experience</p>
                    <p className="font-medium">{userProfile.yearsOfExperience} years</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Location</p>
                    <p className="font-medium">{userProfile.location}</p>
                  </div>
                </div>
              </div>
            )}
            
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Career Path Timeline</h2>
              <CareerPathTimeline careerPaths={mockCareerPaths} />
            </section>

            <section>
              <SkillGapAnalysis skillGaps={mockSkillGaps} />
            </section>

            <div className="flex justify-center">
              <button
                onClick={() => setShowResults(false)}
                className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
              >
                Start Over
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;