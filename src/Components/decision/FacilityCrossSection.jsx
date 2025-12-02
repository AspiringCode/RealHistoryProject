import React from 'react';
import { Mountain, Building2 } from 'lucide-react';

export default function FacilityCrossSection() {
  return (
    <div className="bg-white rounded-xl p-8 shadow-lg border border-stone-200">
      <h3 className="text-xl font-bold text-slate-900 mb-6 text-center">
        Nuclear Facility Vulnerabilities
      </h3>

      <div className="relative h-80">
        {/* Surface facilities */}
        <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-sky-200 to-sky-100 rounded-t-xl">
          <div className="flex justify-around items-center h-full px-8">
            <div className="text-center">
              <Building2 className="w-6 h-6 text-blue-600 mx-auto mb-1" />
              <p className="text-xs font-semibold text-slate-700">Natanz</p>
              <p className="text-xs text-slate-500">Surface</p>
            </div>
            <div className="text-center">
              <Building2 className="w-6 h-6 text-blue-600 mx-auto mb-1" />
              <p className="text-xs font-semibold text-slate-700">Isfahan</p>
              <p className="text-xs text-slate-500">Surface</p>
            </div>
          </div>
        </div>

        {/* Ground level */}
        <div className="absolute top-20 left-0 right-0 h-1 bg-green-700"></div>

        {/* Underground layers */}
        <div className="absolute top-20 left-0 right-0 bottom-0 bg-gradient-to-b from-amber-900 via-stone-800 to-stone-950 rounded-b-xl">
          {/* Depth markers */}
          <div className="absolute left-4 top-12 text-stone-400 text-xs">50m</div>
          <div className="absolute left-4 top-24 text-stone-300 text-xs">100m</div>
          <div className="absolute left-4 top-36 text-stone-200 text-xs">150m</div>
          
          {/* Mountain visualization */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative">
              <Mountain className="w-24 h-24 text-stone-600" />
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-center">
                <div className="bg-red-600 w-12 h-8 rounded-md flex items-center justify-center mb-2">
                  <span className="text-white text-xs font-bold">Fordow</span>
                </div>
                <p className="text-stone-300 text-xs whitespace-nowrap">
                  90m underground
                </p>
              </div>
            </div>
          </div>

          {/* Legend */}
          <div className="absolute bottom-4 right-4 bg-black bg-opacity-50 rounded-lg p-3 text-xs space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-blue-600 rounded"></div>
              <span className="text-white">Israeli-accessible (June 2025)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-red-600 rounded"></div>
              <span className="text-white">U.S. only (B-2 required)</span>
            </div>
          </div>
        </div>
      </div>

      <p className="text-sm text-slate-600 text-center mt-4">
        Fordow's depth made it invulnerable to conventional strikes—only U.S. B-2 bombers 
        with GBU-57 bunker-busters could reach it.
      </p>
    </div>
  );
}