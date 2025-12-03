import React from 'react';
import CalloutBox from '../Components/shared/CalloutBox';
import { Plane, AlertTriangle, Scale, Flame } from 'lucide-react';
import HiddenDigit from '../Components/shared/HiddenDigit';
import Hint from '../Components/shared/Hint';
import MapComponent from '../Components/shared/MapComponent';
import PageLayout from '../Components/shared/PageLayout';

export default function Operation() {
  return (
    <PageLayout
      title="Operation Midnight Hammer & Aftermath"
      subtitle="The strike itself, Iran's retaliation, and the global consequences that followed one night of American bombers over Fordow."
    >
      <div className="grid lg:grid-cols-3 gap-12">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-12">

          {/* Section 9: The Strike */}
          <section className="glass-card-dark-strong rounded-2xl p-8 shadow-xl relative">
            <HiddenDigit digit="3" position="bottom" className="!left-[20%]" /> {/* 4th Digit: 3 (Bottom) - Wait, user said 4th is bottom, I put it in Decision.jsx. Let's put 5th digit (2) here on Right. */}
            <HiddenDigit digit="2" position="right" /> {/* 5th Digit: 2 (Right) */}

            <div className="flex items-center gap-4 mb-6">
              <div className="bg-blue-500/20 p-3 rounded-xl border border-blue-500/30">
                <Plane className="w-6 h-6 text-blue-400" />
              </div>
              <h2 className="text-2xl font-bold text-slate-100 font-serif">
                The Strike Itself (Operation Midnight Hammer)
              </h2>
            </div>

            <div className="prose prose-invert max-w-none">
              <p className="text-slate-300 leading-relaxed mb-4">
                On the night of June 22, 2025, the skies above Iran erupted in fire and thunder as Operation Midnight Hammer swung into action. In the opening minutes, six angular silhouettes – U.S. B-2 Spirit stealth bombers – penetrated Iranian airspace, virtually invisible to radar. Having flown nonstop from distant bases (with mid-air refueling), the B-2s reached their release points near the target that only they could destroy: Fordow. At 1:30 AM local time, precision-guidance systems activated and the bomb bay doors yawned open. Each B-2 released a pair of GBU-57 Massive Ordnance Penetrators, the heaviest non-nuclear bombs ever deployed. Fourteen MOPs in total plunged earthward at supersonic speed (“U.S. Strikes on Iranian Nuclear Sites”). Moments later, the mountains above Fordow shuddered. The bunker-busting warheads drilled through layer after layer of rock and high-strength concrete, then detonated in a staggered sequence. Underground, the effect was devastating: seismic instruments registered tremors as the blasts collapsed tunnels and hollowed out caverns. By design, the strikes delivered “tandem” blows – the first bombs broke open the structure, and follow-on bombs dug even deeper. When the smoke cleared, U.S. officials would later say the Fordow enrichment halls were caved in and rendered unusable (“U.S. Strikes on Iranian Nuclear Sites”).
              </p>
              <p className="text-slate-300 leading-relaxed mb-4">
                To achieve this surprise, the U.S. had orchestrated careful deception: days earlier, diplomats quietly evacuated non-essential personnel from Iran and neighboring countries, and decoy aircraft and jamming drones distracted Iran’s air defenses at the crucial moments (LaGrone). Indeed, Iran’s radar screens saw nothing that night – no Iranian missile batteries engaged the B-2s at all (LaGrone). Simultaneously, the U.S. launched a barrage of Tomahawk cruise missiles from warships and a submarine positioned in the Arabian Sea. Within minutes, over 30 Tomahawks slammed into multiple nuclear-related targets across Iran (“U.S. Strikes on Iranian Nuclear Sites”). They struck the sprawling Isfahan nuclear research center – specifically the uranium conversion facility and storage for Iran’s 60%-enriched uranium – with pinpoint precision, engulfing it in flames. Other Tomahawks took out Iran’s missile and air defense sites that could threaten follow-up strikes, as well as infrastructure supporting the nuclear program (power grids, comms nodes, etc.). At Natanz, though already battered by Israel, a pair of MOPs from one B-2 ensured any surviving enrichment equipment deep underground was finished off (LaGrone; Cooper and Schmitt).
              </p>
              <p className="text-slate-300 leading-relaxed mb-4">
                The entire operation was coordinated to last only a matter of hours. U.S. Central Command had practiced such a “shock and awe” raid in countless simulations, and now it unfolded with dizzying speed and precision (“U.S. Strikes on Iranian Nuclear Sites”). By dawn, the U.S. bombers were long gone – en route back to base – and the last Tomahawk had hit. The results, as described by President Trump in an address that morning, were dramatic: “Iran’s key nuclear enrichment facilities have been completely and totally obliterated,” he declared (“U.S. Strikes on Iranian Nuclear Sites”). While that boast was perhaps exaggerated, the strike undeniably set Iran’s program back by years. Fordow – the crown jewel – was in ruins. Natanz and Isfahan were wrecked. Iranian casualties, miraculously, were minimal, as the U.S. had targeted hardware and avoided populated areas (and possibly the Iranians, expecting an attack, had evacuated many staff to safety) (Cooper and Schmitt). The entire operation hinged on surprise and overwhelming force: Iran’s military, caught off guard, failed to mount any effective defense. U.S. fighters had swept ahead of the bombers to suppress Iranian radar and missile batteries, and it worked – not a single American aircraft was hit (“U.S. Strikes on Iranian Nuclear Sites”).
              </p>
              <p className="text-slate-300 leading-relaxed">
                By executing a coordinated air and missile strike of high complexity, the U.S. demonstrated its unique ability to project power. The message was as much to Iran as to the world: when push came to shove, Washington would use force to stop proliferation. In military terms, Operation Midnight Hammer was a stunning success. Strategically, it was a high-risk gamble – but in that first dawn after, it appeared that the immediate objective had been achieved: Iran's nuclear clock had been reset, knocked back by years in a single night (Magid). <Hint easyHint="Two digits lurk in this section—one at the bottom, one on the right" showInEasy={true} showInMedium={false} showInHard={false} />
              </p>
            </div>
          </section>

          {/* Section 10: Domestic Fallout */}
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
                In Washington, the guns fell silent only to ignite a firestorm of political and public debate. The domestic fallout of Operation Midnight Hammer was immediate and intense, another instance that a “successful” military strike can carry aftershocks well into the future. One of those shocks was the Strait of Hormuz and global oil. Within hours of the bombing, Iran threatened to retaliate by closing the Strait – a chokehold through which about 20% of the world’s daily oil, or about 18 million barrels, flows (Energy Information Administration). Although Iran did not act immediately, the fear of doing so sent global oil markets into panic. Crude oil prices spiked overnight – Brent crude jumped by nearly $10 in a single day (PFL Petroleum Services), stoking worries of gas price inflation at home. When one woke up that day, they woke up to the news of $5–$6 per gallon of gasoline if the crisis worsened.
              </p>
              <p className="text-slate-300 leading-relaxed mb-4">
                The U.S. government scrambled to mitigate as much of the international fallout as possible – they put the Strategic Petroleum Reserve on standby and dispatched envoys to other OPEC countries urging them to saturate the oil market (release more barrels) to calm the markets (Energy Information Administration; International Energy Agency, CRS – “Iran Conflict and the Strait of Hormuz: Oil and Gas Market Impacts”). Economists warned that if Iran even partially choked Hormuz’s oil flow, the ensuing supply shock could start a global recession (International Energy Agency, CRS – “Iran Conflict and the Strait of Hormuz: Oil and Gas Market Impacts”). The idea of this possibility placed enormous pressure on the administration to keep the Strait open. U.S. naval fleets in the Gulf were placed on high alert so as to escort tankers, and coalition talks were initiated to form a maritime protection mission (Zengerle).
              </p>
              <p className="text-slate-300 leading-relaxed mb-4">
                Because President Trump had launched the strikes without seeking Congressional authorization, many in Congress, Democrats and Republicans alike, were furious at the bypass of their war powers. Within days, the Senate Majority Leader and Speaker of the House convened hearings. A bipartisan group of lawmakers then introduced a War Powers Resolution to explicitly require the President to obtain approval before any military action against Iran was taken (Zengerle). Proponents of the act argued that however one felt about Iran, the precedent of a president unilaterally starting hostilities of this magnitude was dangerous. “The Framers of our Constitution gave Congress the power to declare war because they believed that the decision to send our nation’s men and women in uniform into harm’s way was too big for any one person.,” one senator (Tim Kaine) urged, commenting that even if this strike was over, Iran’s likely retaliation could drag the U.S. into a wider conflict (United States Congress, Senate). Opponents of the resolution, however, countered that the President had acted lawfully as Commander-in-Chief in a limited strike, not a full war – and that tying his hands now would only embolden Iran. After a tense vote, the war powers resolution narrowly failed in the Senate (a 53–47 vote against) (Zengerle).
              </p>
              <p className="text-slate-300 leading-relaxed">
                <Hint mediumHint="There are two hidden digits in the previous section" hardHint="Two digits can be found in the upper half of this page" showInEasy={false} showInMedium={true} showInHard={true} />
              </p>
            </div>
          </section>

          {/* Section 11: Retaliation */}
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
                On the international stage, global backlash quickly spread. Iran and its partners lashed out and world powers scrambled to respond. Their first instinct was retaliation – making the U.S. and Israel pay and rallying support against what was labeled “American aggression.” Within 48 hours of the strikes, Tehran unleashed a volley of ballistic missiles and drones, targeting the remaining Israeli forces and U.S. assets in Qatar. In both instances, there were low to no casualties and minimal damage. But the message had been sent, and to effect (Al Jazeera – “Iran attacks US airbase in Qatar: What we know so far”).
              </p>
              <p className="text-slate-300 leading-relaxed mb-4">
                Meanwhile, Iran’s navy began military drills extremely close to the Strait of Hormuz, and a meaningful amount of Iran’s parliament voted to close the Strait (Atlantic Council). Although Iranian forces didn’t physically seal the waterway, shipping rates for the Gulf spiked and some tankers diverted their routes entirely, sending shipping markets into an international frenzy (International Energy Agency, CRS – “Iran Conflict and the Strait of Hormuz: Oil and Gas Market Impacts”). Global stock markets dipped as well, due to possibilities the confrontation could bring upon economic activity (International Energy Agency, CRS – “Iran Conflict and the Strait of Hormuz: Oil and Gas Market Impacts”).
              </p>
              <p className="text-slate-300 leading-relaxed mb-4">
                Iran’s proxies took action as well: in Iraq, Shi’a militias fired rockets at the large U.S. embassy compound in Baghdad ("ranian strikes on Al Udeid Air Base"). In Yemen, the Houthi declared that they now considered themselves at war with the U.S. Within a week, Houthi forces in the Red Sea launched armed drones and a cruise missile at a U.S. Navy destroyer escorting ships. The attack was unsuccessful, but it served as a clear warning that American and allied shipping from the Suez to the Gulf of Oman was under threat (Al Jazeera English). “Any hostile act targeting any Islamic country will be opposed and confronted by us,” a Houthi leader proclaimed, effectively opening another front (Al Jazeera English). This flare-up raised the terrifying prospect of a wider regional war. For instance, Iran-friendly militias in Syria exchanged fire with U.S. special forces outposts. And while Hezbollah in Lebanon rhetorically condemned the U.S. strikes (“Iran–Israel Proxy Conflict”), it surprisingly held its fire, likely deterred by the harsh lessons of the past year’s conflict with Israel and perhaps by Lebanese political pressures.
              </p>
              <p className="text-slate-300 leading-relaxed mb-4">
                On the diplomatic stage, Russia and China moved quickly to exploit the crisis. Both nations harshly condemned the U.S. action. Russia’s foreign ministry blasted the strike as “a gross violation of international law” and an “unprovoked act of aggression” (Reuters, UN Security Council meets on Iran as Russia, China push for a ceasefire). President Vladimir Putin, juggling his own war in Ukraine, nonetheless positioned Moscow as Tehran’s defender at the U.N., calling an emergency Security Council session and dispatching anti-aircraft batteries to Syria as a gesture of support (Reuters, UN Security Council meets on Iran as Russia, China push for a ceasefire). China, for its part, lamented the destabilization of global order and echoed that the sovereignty of nations must be respected, implicitly criticizing the U.S. (Reuters, UN Security Council meets on Iran as Russia, China push for a ceasefire). The Western allies largely backed the U.S. and Israel’s nonproliferation aims, while the Eastern powers decried the use of force.
              </p>
              <p className="text-slate-300 leading-relaxed mb-4">
                The global oil markets were suffering as well – the price of oil jumped permantently over the course of the 12 - day war (PFL Petroleum Services) r that Iranian proxies might target gas infrastructure or shipping (International Energy Agency, ). Countries like Japan and South Korea, heavily dependent on Gulf energy, were in deep trouble. (Kim). In the span of a week, what began as a surgical strike on a single country’s nuclear sites had become a multi-dimensional crisis. Global shipping lanes were under threat, energy security was in doubt, and diplomatic alliances were tested. NATO allies in Europe issued cautious support for curbing Iran’s nuclear capability but grew nervous about the escalation; several European leaders offered to mediate a de-escalation (Atlantic Council). Neutral nations like Switzerland and Oman sprang into action carrying messages between Washington and Tehran. The common plea: step back from the brink.
              </p>
              <p className="text-slate-300 leading-relaxed">
                Iran’s leadership, after the initial burst of rage, also faced dilemmas – the nuclear sites were gone, but rallying domestic unity against the “Great Satan” was useful, and yet an all-out war with the U.S. was unwinnable and undesired (“U.S. Navy uses 30 submarine-launched Tomahawk cruise missiles to strike targets in Iran”). By early July, Iran signaled through backchannels that if there were no further attacks, it would stop short of closing Hormuz. In return, it wanted certain U.S. sanctions eased for humanitarian goods (a face-saving concession quietly arranged via the Swiss) (Atlantic Council). The world, now, is at a tense pause; the worst-case scenario (a direct war between the U.S. and Iran) had not materialized. The fallout following Operation Midnight Hammer’s earth-shaking bomb highlighted a historical truth – managing consequences requires just as much deftness and resolve as the strike itself.
              </p>
            </div>

            <CalloutBox type="insight" title="HISTORICAL THINKING SKILL 6.C: REASONING WITH EVIDENCE" className="mt-8">
              <p>
                This section utilizes economic data, military strike effects, international reactions and shipping market metrics found within reliably sources to explain why the aftermath unfolded as it did.
              </p>
            </CalloutBox>

            <div className="mt-8 grid md:grid-cols-2 gap-6">
              {/* Left Side: Strait of Hormuz Stats */}
              <div className="bg-red-900/10 rounded-xl p-6 border border-red-500/20">
                <h3 className="text-red-400 font-bold mb-4 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5" />
                  STRAIT OF HORMUZ: GLOBAL CHOKEPOINT
                </h3>
                <div className="space-y-4 text-slate-300 text-sm">
                  <div>
                    <span className="block text-red-300 font-semibold mb-1">Width</span>
                    Only 21 miles at its narrowest point
                  </div>
                  <div>
                    <span className="block text-red-300 font-semibold mb-1">Oil Flow</span>
                    ~20% of global petroleum passes through daily
                  </div>
                  <div>
                    <span className="block text-red-300 font-semibold mb-1">Countries Affected</span>
                    Japan, South Korea, China, India rely heavily on this route
                  </div>
                  <p className="text-xs text-slate-400 italic mt-4 pt-4 border-t border-red-500/20">
                    Closure would immediately spike oil prices and threaten global economic stability,
                    giving Iran significant leverage despite military disadvantage.
                  </p>
                </div>
              </div>

              {/* Right Side: Economic Impact Graph */}
              <div className="bg-slate-900/40 rounded-xl p-6 border border-white/10 flex flex-col">
                <h3 className="text-gold-bright font-bold mb-4 flex items-center gap-2">
                  <Scale className="w-5 h-5" />
                  ECONOMIC IMPACT: OIL PRICE SPIKE
                </h3>

                <div className="flex-1 flex items-end gap-2 h-40 px-2 pb-2 border-b border-l border-slate-600 relative">
                  {/* Graph Bars */}
                  {/* Pre-Strike: $63 */}
                  <div className="w-1/4 h-[40%] bg-slate-600/50 rounded-t mx-auto relative group">
                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity">$63</div>
                  </div>

                  {/* June 13 (Spike): $73 */}
                  <div className="w-1/4 h-[63%] bg-red-500/80 rounded-t mx-auto relative group">
                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs text-red-300 opacity-0 group-hover:opacity-100 transition-opacity">$73</div>
                  </div>

                  {/* June 22 (Strike Day): $72 */}
                  <div className="w-1/4 h-[62%] bg-red-500 shadow-[0_0_15px_rgba(239,68,68,0.5)] rounded-t mx-auto relative group animate-pulse">
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-sm font-bold text-red-400">$72</div>
                  </div>

                  {/* Post-Strike: $67 */}
                  <div className="w-1/4 h-[58%] bg-slate-600/50 rounded-t mx-auto relative group">
                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity">$67</div>
                  </div>
                </div>

                <div className="flex justify-between text-xs text-slate-500 mt-2 px-1">
                  <span>Pre-Strike</span>
                  <span>June 13</span>
                  <span className="text-red-400 font-semibold">June 22</span>
                  <span>Post-Strike</span>
                </div>
                <p className="text-xs text-slate-400 mt-4 italic leading-relaxed border-t border-white/5 pt-2">
                  "The oil prices did increase in the month of June by a significant margin. However, oil prices did decrease slightly after the initial hike - but the price of oil, because of the war (and by extension the strike) had caused the permanent (for a duration) increase in oil." (International Energy Agency; PFL Petroleum Services)
                </p>
              </div>
            </div>
          </section>


        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="space-y-6 sticky top-24">
            {/* Map: Strait of Hormuz */}
            <div className="glass-card-dark-strong rounded-2xl p-6 shadow-xl">
              <h3 className="font-bold text-slate-100 uppercase tracking-wider text-sm mb-4">Critical Waterways</h3>

              <MapComponent
                center={[26.5, 56.0]}
                zoom={5}
                className="h-64 w-full rounded-xl mb-4 shadow-inner border border-white/10"
                markers={[
                  { position: [26.5667, 56.2500], label: 'Strait of Hormuz' },
                  { position: [26.0, 52.0], label: 'Persian Gulf' },
                  { position: [15.0, 42.0], label: 'Red Sea' }
                ]}
                polygons={[
                  {
                    positions: [
                      [26.0, 56.0], [26.5, 56.5], [27.0, 56.0], [26.5, 55.5]
                    ],
                    color: 'red',
                    fillColor: '#ef4444',
                    label: 'Chokepoint'
                  }
                ]}
              />

              <div className="space-y-3 text-sm">
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
                <p className="text-sm text-slate-300">
                  A Hormuz closure would affect Japan (90% of oil imports), South Korea, China, and India,
                  causing global recession risk.
                </p>
              </CalloutBox>
            </div>

            {/* Quick Stats */}
            <div className="glass-card-dark-strong rounded-2xl p-6 shadow-xl">
              <h3 className="font-bold text-slate-100 uppercase tracking-wider text-sm mb-6">Operation by the Numbers</h3>
              <div className="space-y-6">
                <div className="group">
                  <p className="text-3xl font-bold text-gold-muted font-mono group-hover:text-white transition-colors">B-2</p>
                  <p className="text-xs text-slate-400 uppercase tracking-wide">Stealth bombers used</p>
                </div>
                <div className="group">
                  <p className="text-3xl font-bold text-gold-muted font-mono group-hover:text-white transition-colors">30,000 lbs</p>
                  <p className="text-xs text-slate-400 uppercase tracking-wide">GBU-57 bomb weight</p>
                </div>
                <div className="group">
                  <p className="text-3xl font-bold text-gold-muted font-mono group-hover:text-white transition-colors">90m</p>
                  <p className="text-xs text-slate-400 uppercase tracking-wide">Fordow depth underground</p>
                </div>
                <div className="group">
                  <p className="text-3xl font-bold text-gold-muted font-mono group-hover:text-white transition-colors">20%</p>
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