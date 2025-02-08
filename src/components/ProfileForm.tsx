import React, { useState } from 'react';
import { UserProfile } from '../types';
import { Upload } from 'lucide-react';

export default function ProfileForm({ onSubmit }: { onSubmit: (profile: UserProfile) => void }) {
  const [profile, setProfile] = useState<UserProfile>({
    name: '',
    currentRole: '',
    yearsOfExperience: 0,
    skills: [],
    education: '',
    location: '',
    desiredRole: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(profile);
  };

  const handleSkillsInput = (value: string) => {
    setProfile(prev => ({
      ...prev,
      skills: value.split(',').map(skill => skill.trim()),
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <div className="flex justify-center">
          <div className="relative group cursor-pointer">
            <div className="w-32 h-32 bg-gray-100 rounded-full flex items-center justify-center border-2 border-dashed border-gray-300 hover:border-blue-500 transition-colors">
              <Upload className="w-8 h-8 text-gray-400 group-hover:text-blue-500" />
            </div>
            <input type="file" className="hidden" accept=".pdf,.doc,.docx" />
            <p className="text-sm text-center mt-2 text-gray-600">Upload Resume</p>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            value={profile.name}
            onChange={e => setProfile(prev => ({ ...prev, name: e.target.value }))}
            required
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Current Role</label>
            <input
              type="text"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              value={profile.currentRole}
              onChange={e => setProfile(prev => ({ ...prev, currentRole: e.target.value }))}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Years of Experience</label>
            <input
              type="number"
              min="0"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              value={profile.yearsOfExperience}
              onChange={e => setProfile(prev => ({ ...prev, yearsOfExperience: parseInt(e.target.value) }))}
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Skills (comma-separated)</label>
          <input
            type="text"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            value={profile.skills.join(', ')}
            onChange={e => handleSkillsInput(e.target.value)}
            placeholder="Python, React, Machine Learning..."
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Education</label>
          <select
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            value={profile.education}
            onChange={e => setProfile(prev => ({ ...prev, education: e.target.value }))}
            required
          >
            <option value="">Select Education Level</option>
            <option value="High School">High School</option>
            <option value="Bachelor's">Bachelor's Degree</option>
            <option value="Master's">Master's Degree</option>
            <option value="PhD">PhD</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Location</label>
          <input
            type="text"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            value={profile.location}
            onChange={e => setProfile(prev => ({ ...prev, location: e.target.value }))}
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Desired Role</label>
          <input
            type="text"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            value={profile.desiredRole}
            onChange={e => setProfile(prev => ({ ...prev, desiredRole: e.target.value }))}
            required
          />
        </div>
      </div>

      <div className="flex justify-end">
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Analyze Career Path
        </button>
      </div>
    </form>
  );
}