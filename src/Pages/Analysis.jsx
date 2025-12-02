import React from 'react';
import CalloutBox from '../Components/shared/CalloutBox';
import HiddenDigit from '../Components/shared/HiddenDigit';
import { Plane, Waves, Scale, AlertTriangle } from 'lucide-react';
import PageLayout from '../Components/shared/PageLayout';

export default function Analysis() {
  return (
    <PageLayout
      title="Operation Midnight Hammer & Aftermath"
      subtitle="The strike itself, Iran's retaliation, and the global consequences that followed one night of American bombers over Fordow."
    >
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">

          {/* Section 1: The Strike */}
          <section className="glass-card-dark-strong rounded-2xl p-8 shadow-xl relative">
            <HiddenDigit digit="7" position="right" />
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-slate-500/20 p-3 rounded-xl border border-slate-500/30">
                <Plane className="w-6 h-6 text-slate-300" />
              </div>
              <h2 className="text-2xl font-bold text-slate-100 font-serif">
                The Strike Itself
              </h2>
            </div>

            <div className="prose prose-invert max-w-none">
              <p className="text-slate-300 leading-relaxed mb-4">
                <strong>[Student will paste summary here]</strong> On the night of [date], 2025, U.S. Air
                Force B-2 Spirit stealth bombers launched from [base location] and flew thousands of miles
                to penetrate Iranian airspace. Each bomber carried multiple GBU-57 Massive Ordnance
                Penetrator bombs—30,000-pound weapons specifically designed to destroy deeply buried and
                hardened targets.
              </p>
              <p className="text-slate-300 leading-relaxed mb-4">
                The primary target was the Fordow Fuel Enrichment Plant, buried 90 meters beneath a mountain
                near Qom. Secondary strikes hit remaining infrastructure at Natanz and Isfahan to ensure
                maximum damage to Iran's nuclear program. The operation was executed with precision,
                using stealth technology to avoid Iranian air defenses and minimize casualties.
              </p>
              <p className="text-slate-300 leading-relaxed">
                The tactical goal was clear: set back Iran's nuclear program by years and create conditions
                that would force Iranian leaders to return to negotiations. By destroying Fordow—the crown
                jewel of Iran's nuclear infrastructure—American and Israeli leaders hoped to eliminate Iran's
                near-term ability to produce weapons-grade uranium. <span className="text-gold-bright/60 italic text-sm">(Search the right side of this section for a hidden digit)</span>
              </p>
            </div>

            <div className="bg-midnight/80 border-l-4 border-gold-muted p-6 mt-8 rounded-r-xl">
              <p className="italic text-lg leading-relaxed text-slate-200 font-serif">
                "Iran must now make peace, not war. Their capability to threaten the region has been
                significantly diminished."
              </p>
              <p className="text-sm text-gold-muted mt-3 font-bold uppercase tracking-wider">
                — Statement from U.S. Defense Department
              </p>
            </div>
          </section>

          {/* Section 2: Iran's Retaliation */}
          <section className="glass-card-dark-strong rounded-2xl p-8 shadow-xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-red-500/20 p-3 rounded-xl border border-red-500/30">
                <AlertTriangle className="w-6 h-6 text-red-400" />
              </div>
              <h2 className="text-2xl font-bold text-slate-100 font-serif">
                Iran's Retaliation and Global Shockwaves
              </h2>
            </div>

            <div className="prose prose-invert max-w-none">
              <p className="text-slate-300 leading-relaxed mb-4">
                <strong>[Student will paste paragraph here]</strong> Iran, in retaliation, threatened to
                cut off the Strait of Hormuz—the narrow waterway through which approximately 20% of the
                world's oil supply passes daily. Such action would cause global energy prices to spike
                dramatically and risk triggering an economic crisis. Iranian officials also warned of
                targeting U.S. military bases in the region and supporting attacks on shipping through
                Yemen-based Houthi militias in the Red Sea.
              </p>
              <p className="text-slate-300 leading-relaxed mb-4">
                The international response was swift and divided. Russia and China condemned the U.S.
                strike as an illegal act of aggression, with both nations calling for emergency UN Security
                Council meetings. European allies expressed concern about the strike being conducted without
                congressional authorization and worried about further escalation. Oil markets immediately
                reacted with price volatility as traders anticipated potential supply disruptions.
              </p>
              <p className="text-slate-300 leading-relaxed">
                The threat to global oil supply made Operation Midnight Hammer not just a Middle Eastern
                crisis but a worldwide concern affecting energy security, economic stability, and
                international relations. What began as a nuclear proliferation issue had transformed into
                a multifaceted global crisis.
              </p>
            </div>

            <CalloutBox type="warning" title="Strait of Hormuz: Global Chokepoint" className="mt-8">
              <div className="space-y-2">
                <p><strong className="text-amber-200">Width:</strong> Only 21 miles at its narrowest point</p>
                <p><strong className="text-amber-200">Oil Flow:</strong> ~20% of global petroleum passes through daily</p>
                <p><strong className="text-amber-200">Countries Affected:</strong> Japan, South Korea, China, India rely heavily on this route</p>
                <p className="mt-3 text-sm text-slate-300 border-t border-amber-500/30 pt-2">
                  Closure would immediately spike oil prices and threaten global economic stability,
                  giving Iran significant leverage despite military disadvantage.
                </p>
              </div>
            </CalloutBox>
          </section>

          {/* Section 3: Domestic Fallout */}
          <section className="glass-card-dark-strong rounded-2xl p-8 shadow-xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-blue-500/20 p-3 rounded-xl border border-blue-500/30">
                <Scale className="w-6 h-6 text-blue-400" />
              </div>
              <h2 className="text-2xl font-bold text-slate-100 font-serif">
                Domestic Fallout in the U.S.
              </h2>
            </div>

            <div className="prose prose-invert max-w-none">
              <p className="text-slate-300 leading-relaxed mb-4">
                <strong>[Student will paste paragraph here]</strong> Back in the United States, Operation
                Midnight Hammer triggered immediate political controversy. President Trump had authorized
                the strike without seeking congressional approval, arguing that the operation was necessary
                to protect American allies and prevent nuclear proliferation—an executive power he claimed
                fell within his authority as commander-in-chief.
              </p>
              <p className="text-slate-300 leading-relaxed mb-4">
                The U.S. Senate responded by introducing a war powers resolution aimed at limiting the
                president's ability to conduct further military operations against Iran without congressional
                authorization. The resolution invoked the War Powers Act of 1973, which requires presidents
                to notify Congress within 48 hours of military action and limits unauthorized military
                operations to 60 days.
              </p>
              <p className="text-slate-300 leading-relaxed">
                The Senate resolution ultimately failed to pass, but the vote demonstrated significant
                domestic unease about unilateral military action and the risk of broader war. Debates centered
                on constitutional war powers, the lessons of Iraq and Afghanistan, and whether the strike
                had made America safer or more vulnerable to retaliation. The domestic political battle
                revealed deep divisions about America's role in the world and the proper balance between
                executive power and congressional oversight.
              </p>
            </div>

            <div className="bg-blue-900/30 rounded-xl p-6 mt-8 border border-blue-500/20">
              <p className="italic text-slate-300 leading-relaxed border-l-4 border-blue-500 pl-4 font-serif">
                "We cannot allow presidents to drag us into wars without debate, without vote, without the
                consent of the American people through their representatives."
              </p>
              <p className="text-sm text-blue-300 mt-3 font-bold uppercase tracking-wider">
                — Senator [Name], Floor Speech on War Powers Resolution
              </p>
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="space-y-6 sticky top-24">
            {/* Map: Strait of Hormuz */}
            <div className="glass-card-dark-strong rounded-2xl p-6 shadow-xl">
              <h3 className="font-bold text-slate-100 mb-4 uppercase tracking-wider text-sm">Critical Waterways</h3>

              <div className="bg-gradient-to-br from-blue-900/50 to-blue-800/30 rounded-xl p-6 relative h-48 mb-6 border border-blue-500/20">
                <div className="absolute top-4 left-4">
                  <Waves className="w-6 h-6 text-blue-400" />
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <p className="font-bold text-slate-100 text-lg">Strait of Hormuz</p>
                    <p className="text-sm text-slate-400 mt-1">21 miles wide</p>
                    <div className="mt-3 inline-block bg-red-500/80 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg backdrop-blur-sm">
                      20% Global Oil
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3 group">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-1.5 flex-shrink-0 shadow-[0_0_8px_rgba(239,68,68,0.6)] group-hover:scale-125 transition-transform"></div>
                  <div>
                    <p className="font-bold text-slate-200">Persian Gulf</p>
                    <p className="text-slate-400 text-xs">Major oil-producing region</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 group">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-1.5 flex-shrink-0 shadow-[0_0_8px_rgba(249,115,22,0.6)] group-hover:scale-125 transition-transform"></div>
                  <div>
                    <p className="font-bold text-slate-200">Red Sea</p>
                    <p className="text-slate-400 text-xs">Houthi militia threat zone</p>
                  </div>
                </div>
              </div>

              <CalloutBox type="warning" title="Economic Impact" className="mt-6">
                <p className="text-sm">
                  A Hormuz closure would affect Japan (90% of oil imports), South Korea, China, and India,
                  causing global recession risk.
                </p>
              </CalloutBox>
            </div>

            {/* Quick Stats */}
            <div className="glass-card-dark-strong rounded-2xl p-6 shadow-xl">
              <h3 className="font-bold text-slate-100 mb-6 uppercase tracking-wider text-sm">Operation by the Numbers</h3>
              <div className="space-y-6">
                <div>
                  <p className="text-3xl font-bold text-gold-muted font-mono">B-2</p>
                  <p className="text-xs text-slate-400 uppercase tracking-wide">Stealth bombers used</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-gold-muted font-mono">30,000 lbs</p>
                  <p className="text-xs text-slate-400 uppercase tracking-wide">GBU-57 bomb weight</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-gold-muted font-mono">90m</p>
                  <p className="text-xs text-slate-400 uppercase tracking-wide">Fordow depth underground</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-gold-muted font-mono">20%</p>
                  <p className="text-xs text-slate-400 uppercase tracking-wide">Global oil through Hormuz</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}