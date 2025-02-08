import React from 'react';
import { SkillGap } from '../types';
import { ArrowUpCircle, ArrowDownCircle, MinusCircle } from 'lucide-react';

interface Props {
  skillGaps: SkillGap[];
}

export default function SkillGapAnalysis({ skillGaps }: Props) {
  const getSkillStatus = (gap: SkillGap) => {
    const difference = gap.importance - gap.proficiency;
    if (difference > 2) return { icon: ArrowUpCircle, color: 'text-red-500', text: 'High Priority' };
    if (difference > 0) return { icon: MinusCircle, color: 'text-yellow-500', text: 'Medium Priority' };
    return { icon: ArrowDownCircle, color: 'text-green-500', text: 'On Track' };
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Skill Gap Analysis</h2>
      <div className="space-y-4">
        {skillGaps.map((gap, index) => {
          const status = getSkillStatus(gap);
          const Icon = status.icon;
          
          return (
            <div key={index} className="border rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <Icon className={`w-6 h-6 ${status.color}`} />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{gap.skill}</h3>
                    <p className={`text-sm ${status.color}`}>{status.text}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="text-right">
                    <p className="text-sm text-gray-500">Current Level</p>
                    <p className="font-semibold">{gap.proficiency}/5</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-500">Required Level</p>
                    <p className="font-semibold">{gap.importance}/5</p>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-600 rounded-full h-2"
                    style={{ width: `${(gap.proficiency / gap.importance) * 100}%` }}
                  ></div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}