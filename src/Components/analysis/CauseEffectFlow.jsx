import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Info } from 'lucide-react';

export default function CauseEffectFlow() {
  const [selectedNode, setSelectedNode] = useState(null);

  const flowNodes = [
    {
      id: 1,
      title: '1950s: Atoms for Peace',
      description: 'U.S. helps Iran develop civilian nuclear capabilities',
      outcome: 'Created nuclear infrastructure and technical expertise'
    },
    {
      id: 2,
      title: '2000s: UN/IAEA Discovery',
      description: 'Undeclared nuclear sites found, sanctions imposed',
      outcome: 'International pressure and diplomatic negotiations begin'
    },
    {
      id: 3,
      title: '2015: JCPOA Signed',
      description: 'Nuclear deal caps enrichment, lifts sanctions',
      outcome: "Temporary limits on Iran's nuclear program"
    },
    {
      id: 4,
      title: '2018: U.S. Withdrawal',
      description: 'Trump exits JCPOA, "maximum pressure" sanctions',
      outcome: 'Iran expands enrichment beyond JCPOA limits'
    },
    {
      id: 5,
      title: 'June 2025: Israeli Strikes',
      description: 'Israel destroys 2/3 of nuclear stockpiles',
      outcome: 'Fordow remains untouched, requires U.S. capability'
    },
    {
      id: 6,
      title: '2025: Operation Midnight Hammer',
      description: 'U.S. B-2s strike Fordow with bunker busters',
      outcome: 'Nuclear program set back, regional crisis escalates'
    }
  ];

  return (
    <div className="bg-white rounded-xl p-8 shadow-lg border border-stone-200">
      <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">
        Cause and Effect: The Chain of Decisions
      </h3>

      <div className="space-y-4">
        {flowNodes.map((node, index) => (
          <div key={node.id}>
            <motion.div
              className={`rounded-lg p-5 cursor-pointer transition-all ${selectedNode === node.id
                  ? 'bg-orange-50 border-2 border-orange-500'
                  : 'bg-slate-50 border-2 border-slate-200 hover:border-slate-300'
                }`}
              onClick={() => setSelectedNode(selectedNode === node.id ? null : node.id)}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">
                      {index + 1}
                    </div>
                    <h4 className="font-bold text-slate-900">{node.title}</h4>
                  </div>
                  <p className="text-sm text-slate-700 ml-10">{node.description}</p>

                  {selectedNode === node.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="ml-10 mt-3 pt-3 border-t border-orange-200"
                    >
                      <div className="flex items-start gap-2">
                        <Info className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-xs font-semibold text-orange-800 uppercase">Outcome</p>
                          <p className="text-sm text-slate-700 mt-1">{node.outcome}</p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </div>
                <Info className={`w-5 h-5 flex-shrink-0 ${selectedNode === node.id ? 'text-orange-600' : 'text-slate-400'
                  }`} />
              </div>
            </motion.div>

            {index < flowNodes.length - 1 && (
              <div className="flex justify-center py-2">
                <ChevronRight className="w-6 h-6 text-orange-500 transform rotate-90" />
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg border-l-4 border-blue-500">
        <p className="text-sm text-slate-700">
          <strong className="text-blue-900">Click each step</strong> to see how it created the conditions
          for the next decision. This chain demonstrates Historical Thinking Skill 5.B: explaining how
          developments relate to one another.
        </p>
      </div>
    </div>
  );
}