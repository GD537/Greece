
import React from 'react';
import { itineraryData } from '../data/itineraryData';
import { InformationCircleIcon, CurrencyEuroIcon, GlobeAltIcon, ShieldCheckIcon } from './icons';

const SectionCard: React.FC<{ title: string; children: React.ReactNode; icon?: React.ReactNode, borderColorClass?: string }> = ({ title, children, icon, borderColorClass = "border-sky-500" }) => (
  <div className={`bg-white p-4 rounded-lg shadow-lg border-l-4 ${borderColorClass} mb-5`}>
    <div className="flex items-center mb-2.5">
      {icon && <span className="mr-2 text-sky-600">{icon}</span>}
      <h3 className="text-lg font-semibold text-slate-700">{title}</h3>
    </div>
    {children}
  </div>
);

const TipsPage: React.FC = () => {
  const { 
    transportBudgetTips, 
    gettingAroundIslands, 
    finalReminders 
  } = itineraryData;

  return (
    <div className="space-y-6">
      <header className="bg-white p-4 md:p-6 rounded-xl shadow-xl">
        <div className="flex items-center space-x-3">
          <InformationCircleIcon className="h-7 w-7 text-sky-600 flex-shrink-0" />
          <h2 className="text-2xl md:text-3xl font-bold text-sky-700">Travel Tips & Information</h2>
        </div>
        <p className="text-slate-600 mt-1 text-sm md:text-base">Helpful insights for your Grecian adventure.</p>
      </header>

      <SectionCard title="Transport & Budget" icon={<CurrencyEuroIcon className="h-5 w-5"/>} borderColorClass="border-green-500">
        <div className="space-y-2.5 text-sm">
          {transportBudgetTips.map((tip, index) => (
            <div key={index} className="p-2.5 bg-green-50 rounded-md border border-green-200">
              <p className="font-semibold text-green-800">{tip.segment} ({tip.mode})</p>
              <p className="text-slate-700">Cost: {tip.cost}</p>
              <p className="text-xs text-slate-500 italic">{tip.notes}</p>
            </div>
          ))}
        </div>
      </SectionCard>
      
      <SectionCard title="Getting Around Islands" icon={<GlobeAltIcon className="h-5 w-5"/>} borderColorClass="border-purple-500">
         <div className="space-y-2.5 text-sm">
          {gettingAroundIslands.map((info, index) => (
            <div key={index} className="p-2.5 bg-purple-50 rounded-md border border-purple-200">
              <p className="font-semibold text-purple-800">{info.island}</p>
              <p className="text-slate-700">{info.description}</p>
            </div>
          ))}
        </div>
      </SectionCard>

      <SectionCard title="Final Reminders" icon={<ShieldCheckIcon className="h-5 w-5"/>} borderColorClass="border-red-500">
        <ul className="list-disc list-inside space-y-1.5 text-sm text-slate-700 pl-1">
          {finalReminders.map((reminder, index) => (
            <li key={index}>{reminder}</li>
          ))}
        </ul>
      </SectionCard>
    </div>
  );
};

export default TipsPage;