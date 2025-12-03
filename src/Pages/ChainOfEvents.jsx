import React, { useState } from 'react';
import PageLayout from '../Components/shared/PageLayout';
import CalloutBox from '../Components/shared/CalloutBox';
import HiddenDigit from '../Components/shared/HiddenDigit';
import Hint from '../Components/shared/Hint';
import { useDifficulty } from '../context/DifficultyContext';
import { ArrowDown, Zap, Shield, AlertTriangle, Flame, Scale, ArrowRight, Activity } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ChainOfEvents() {
    const [activeEventIndex, setActiveEventIndex] = useState(0);
    const { difficulty } = useDifficulty();

    const events = [
        {
            year: '1957',
            title: 'Atoms for Peace & Early Cooperation',
            description: 'The U.S. provides Iran with its first nuclear reactor, planting the seeds of nuclear capability.',
            icon: Shield,
            color: 'text-blue-400',
            bgColor: 'bg-blue-500/20',
            borderColor: 'border-blue-500/30',
            chains: [
                { cause: 'U.S. Atoms for Peace cooperation (reactor, fuel, training)', effect: 'Created Iran’s first nuclear infrastructure, which persisted after the 1979 Revolution.' },
                { cause: 'Western-trained Iranian scientists', effect: 'Gave Iran technical expertise that later enabled more advanced enrichment.' },
                { cause: 'American-built facilities remaining after 1979', effect: 'Provided the Islamic Republic with a running nuclear foundation, which it repurposed for its own goals.' },
                { cause: 'Cold War–era cooperation', effect: 'Accidentally set up the long-term nuclear ambiguity that later fueled global concerns.' },
                { cause: 'Early peaceful nuclear development', effect: 'Laid the structural base for future tension once intentions diverged.' }
            ]
        },
        {
            year: '2002-2015',
            title: 'UN, IAEA, and the JCPOA',
            description: 'From secret sites to a landmark deal: the world tries to contain Iran’s program through diplomacy.',
            icon: Scale,
            color: 'text-green-400',
            bgColor: 'bg-green-500/20',
            borderColor: 'border-green-500/30',
            chains: [
                { cause: 'Undeclared sites (Natanz, Arak) discovered in 2002', effect: 'Triggered UN and IAEA investigations and suspicion of covert enrichment.' },
                { cause: 'IAEA findings of unreported activities', effect: 'Led to UN sanctions and demands for suspension of enrichment.' },
                { cause: 'Mounting international pressure (2006–2010)', effect: 'Forced Iran into negotiations, culminating in the JCPOA.' },
                { cause: 'JCPOA restrictions (3.67%, 300kg, centrifuge removal)', effect: 'Temporarily boxed in Iran’s nuclear progress.' },
                { cause: 'IAEA’s verification regime', effect: 'Provided the first stable, global confidence in decades — but a fragile one.' }
            ]
        },
        {
            year: '2018',
            title: 'U.S. Withdrawal & Maximum Pressure',
            description: 'The U.S. exits the deal, reimposing sanctions and sparking a new cycle of escalation.',
            icon: Zap,
            color: 'text-yellow-400',
            bgColor: 'bg-yellow-500/20',
            borderColor: 'border-yellow-500/30',
            chains: [
                { cause: 'Trump’s withdrawal from JCPOA', effect: 'Destroyed the balance of relief-for-restraint, removing incentives for Iran to comply.' },
                { cause: 'Reimposed sanctions + “maximum pressure”', effect: 'Crushed Iran’s economy, prompting nuclear escalation instead of restraint.' },
                { cause: 'Economic isolation', effect: 'Iran retaliated by breaching limits (stockpile, purity, centrifuges).' },
                { cause: 'U.S. pressure without diplomatic off-ramps', effect: 'Accelerated Iran’s nuclear timeline, heightening Israeli alarm.' },
                { cause: 'Decline of verification', effect: 'Reduced global visibility, making the program more worrisome.' }
            ]
        },
        {
            year: 'Doctrine',
            title: 'Begin Doctrine & Preemptive Logic',
            description: 'Israel’s historical stance: no existential threat will be tolerated, by any means necessary.',
            icon: AlertTriangle,
            color: 'text-orange-400',
            bgColor: 'bg-orange-500/20',
            borderColor: 'border-orange-500/30',
            chains: [
                { cause: 'Osirak strike (1981)', effect: 'Created the doctrine that Israel must strike first to prevent catastrophic threats.' },
                { cause: '2007 Syria reactor strike', effect: 'Reinforced Israel’s belief that preemption works.' },
                { cause: 'Iranian leaders’ rhetoric (“wiped off the map,” etc.)', effect: 'Deepened Israel’s existential fear, tying Iran to past threats.' },
                { cause: 'Iran’s nuclear advances', effect: 'Mapped directly onto Begin Doctrine logic, making action seem inevitable.' },
                { cause: 'Historical trauma + explicit threats', effect: 'Solidified Israeli willingness to strike Iran when ‘necessary’.' }
            ]
        },
        {
            year: '2023-2024',
            title: 'Proxies, Hamas, and Shadow Wars',
            description: 'Regional conflict explodes, drawing Israel and Iran closer to direct confrontation.',
            icon: Flame,
            color: 'text-red-400',
            bgColor: 'bg-red-500/20',
            borderColor: 'border-red-500/30',
            chains: [
                { cause: 'Iran funding Hamas, Hezbollah, Islamic Jihad', effect: 'Created a ring of armed threats around Israel.' },
                { cause: 'Decades of covert conflict (assassinations, cyberattacks, rocket exchanges)', effect: 'Normalized a low-level war between the two states.' },
                { cause: 'Hamas’s 2023 attack + Iranian praise/support', effect: 'Convinced Israel that Iran was orchestrating regional aggression.' },
                { cause: 'Proxy escalation across Lebanon, Syria, Yemen', effect: 'Made Israel view a direct Iran clash as unavoidable.' },
                { cause: 'Constant conflict environment', effect: 'Reduced Israeli fear of escalation, making a strike more thinkable.' }
            ]
        },
        {
            year: 'June 2025',
            title: 'Strikes on Natanz & Isfahan',
            description: 'Israel launches overt strikes, but fails to penetrate the deepest bunkers.',
            icon: ArrowDown,
            color: 'text-purple-400',
            bgColor: 'bg-purple-500/20',
            borderColor: 'border-purple-500/30',
            chains: [
                { cause: 'Natanz as Iran’s main enrichment hub', effect: 'Made it the first target for overt Israeli bombing.' },
                { cause: 'Isfahan’s conversion facility', effect: 'Cut into Iran’s ability to process uranium feedstock.' },
                { cause: 'Prior sabotage proving insufficient', effect: 'Pushed Israel to move from covert to overt strikes.' },
                { cause: 'Successful destruction of surface and shallow targets', effect: 'Escalated the conflict into open warfare.' },
                { cause: 'Failure to reach Fordow', effect: 'Created the operational need for U.S. involvement.' }
            ]
        },
        {
            year: '2025',
            title: 'Fordow: The Site Under the Mountain',
            description: 'The impregnable fortress that forced the U.S. to intervene.',
            icon: Shield,
            color: 'text-indigo-400',
            bgColor: 'bg-indigo-500/20',
            borderColor: 'border-indigo-500/30',
            chains: [
                { cause: 'Fordow’s depth under rock', effect: 'Made it invulnerable to Israeli bombs.' },
                { cause: 'Iran’s move of advanced centrifuges into Fordow', effect: 'Turned the site into Iran’s nuclear “insurance policy.”' },
                { cause: 'Israel lacking the GBU-57 MOP', effect: 'Made U.S. participation mandatory for meaningful destruction.' },
                { cause: 'Fordow surviving the 2025 Israeli strikes', effect: 'Became the final trigger for Operation Midnight Hammer.' },
                { cause: 'Technical limitations', effect: 'Drove political pressure on the U.S. to intervene.' }
            ]
        },
        {
            year: 'Decision',
            title: 'Netanyahu’s Persuasion & Trump’s Calculus',
            description: 'The political maneuvering that led to the green light for Operation Midnight Hammer.',
            icon: Activity,
            color: 'text-pink-400',
            bgColor: 'bg-pink-500/20',
            borderColor: 'border-pink-500/30',
            chains: [
                { cause: 'Netanyahu’s long campaign against Iran (2015 Congress speech, bomb diagram, 2018 archive)', effect: 'Built credibility with U.S. leaders.' },
                { cause: 'Shared U.S.–Israeli skepticism of Iran', effect: 'Aligned Trump with Netanyahu’s alarm.' },
                { cause: 'Mossad intelligence briefings (2025)', effect: 'Convinced Trump that Iran was nearing a bomb.' },
                { cause: 'Regional chaos from proxies & Hamas', effect: 'Added urgency to U.S. decision-making.' },
                { cause: 'Trump’s desire to appear strong + support Israel', effect: 'Tilted decision toward a unilateral strike.' }
            ]
        },
        {
            year: 'Operation',
            title: 'The Strike Itself (Operation Midnight Hammer)',
            description: 'U.S. B-2 Spirits deliver the final blow to Iran’s nuclear program.',
            icon: ArrowDown,
            color: 'text-cyan-400',
            bgColor: 'bg-cyan-500/20',
            borderColor: 'border-cyan-500/30',
            chains: [
                { cause: 'Israeli inability to destroy Fordow', effect: 'U.S. B-2 MOP strike became centerpiece of the mission.' },
                { cause: 'U.S. air superiority + stealth capability', effect: 'Enabled successful surprise attack.' },
                { cause: 'Tomahawk salvos + coordinated air package', effect: 'Eliminated Iran’s major enrichment infrastructure in hours.' },
                { cause: 'Minimal casualties + precise targeting', effect: 'Allowed U.S. to claim limited, defensive intent.' },
                { cause: 'Massive damage to Fordow/Natanz', effect: 'Reset Iran’s nuclear timeline and reshaped regional power.' }
            ]
        },
        {
            year: 'Fallout',
            title: 'Domestic Fallout in the U.S.',
            description: 'Economic shockwaves and political division grip the nation.',
            icon: AlertTriangle,
            color: 'text-rose-400',
            bgColor: 'bg-rose-500/20',
            borderColor: 'border-rose-500/30',
            chains: [
                { cause: 'Iran’s threat to close Hormuz', effect: 'Oil markets panicked, gas prices surged.' },
                { cause: 'Economic shock risk', effect: 'Forced emergency federal mitigation (SPR, diplomacy, OPEC talks).' },
                { cause: 'Trump bypassing Congress', effect: 'Sparked constitutional conflict and a War Powers Resolution.' },
                { cause: 'Divided public opinion', effect: 'Framed the strike as both necessary and reckless.' },
                { cause: 'Fear of escalation', effect: 'Created national anxiety despite military success.' }
            ]
        },
        {
            year: 'Aftermath',
            title: 'Iran’s Retaliation & Global Shockwaves',
            description: 'The world holds its breath as Iran responds and markets react.',
            icon: Activity,
            color: 'text-emerald-400',
            bgColor: 'bg-emerald-500/20',
            borderColor: 'border-emerald-500/30',
            chains: [
                { cause: 'Iranian missile/drone retaliation', effect: 'Signaled conflict could widen quickly.' },
                { cause: 'Proxy attacks across Middle East', effect: 'Threatened global shipping and U.S. naval assets.' },
                { cause: 'Russia/China condemnation', effect: 'Deepened geopolitical divides and complicated diplomacy.' },
                { cause: 'LNG and oil spikes', effect: 'Threatened global recession and pressured Asian allies.' },
                { cause: 'Backchannel diplomacy', effect: 'Created a fragile pause instead of a regional war.' }
            ]
        }
    ];

    return (
        <PageLayout
            title="Chain of Events"
            subtitle="Tracing the path from cooperation to conflict: a timeline of key decisions and turning points."
        >
            {/* Hidden Digit Box - Easy Mode Only (top, prominent) */}
            {difficulty === 'easy' && (
                <div className="mb-12">
                    <div className="glass-card-dark-strong rounded-2xl border border-gold-bright/30 shadow-2xl relative overflow-hidden transition-all duration-300 p-6 max-w-2xl mx-auto">
                        <div className="absolute inset-0 bg-gradient-to-br from-gold-bright/10 via-transparent to-gold-muted/10" />
                        <div className="relative z-10 flex items-center justify-between gap-6">
                            <div className="flex-1">
                                <h3 className="text-lg font-bold text-gold-bright mb-2 font-serif">Scavenger Hunt</h3>
                                <p className="text-slate-300 leading-relaxed text-sm">
                                    You found another clue! Click the glowing orb to reveal the hidden digit.
                                </p>
                            </div>
                            <div className="flex-shrink-0">
                                <HiddenDigit digit="2" position="inline" className="scale-125" />
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start relative">
                {/* Left Column: Timeline */}
                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500/20 via-gold-bright/20 to-red-500/20 rounded-full" />

                    <div className="space-y-12">
                        {/* Hidden Digit Box - Medium Mode Only (in the middle of timeline) */}
                        {difficulty === 'medium' && events.length > 0 && (
                            <div className="flex justify-end mb-12">
                                <div className="glass-card-dark-strong rounded-2xl border border-gold-bright/30 shadow-2xl relative overflow-hidden transition-all duration-300 p-4 max-w-md">
                                    <div className="absolute inset-0 bg-gradient-to-br from-gold-bright/10 via-transparent to-gold-muted/10" />
                                    <div className="relative z-10 flex items-center justify-end gap-4">
                                        <div className="flex-1">
                                            <p className="text-slate-300 text-xs italic">
                                                A digit is hidden on the left side of this page
                                            </p>
                                        </div>
                                        <div className="flex-shrink-0">
                                            <HiddenDigit digit="2" position="inline" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                        {events.map((event, index) => (
                            <div
                                key={index}
                                className="relative flex items-start gap-8 group cursor-pointer"
                                onMouseEnter={() => setActiveEventIndex(index)}
                            >
                                {/* Timeline Node */}
                                <div className={`relative z-10 flex-shrink-0 w-16 h-16 rounded-2xl ${event.bgColor} ${event.borderColor} border backdrop-blur-md flex items-center justify-center shadow-lg transition-transform duration-300 ${activeEventIndex === index ? 'scale-110 ring-2 ring-gold-bright/50' : 'group-hover:scale-105'}`}>
                                    <event.icon className={`w-8 h-8 ${event.color}`} />
                                </div>

                                {/* Content Card */}
                                <div className={`flex-1 glass-card-dark-strong rounded-2xl p-6 border transition-all duration-300 ${activeEventIndex === index ? 'border-gold-bright/30 shadow-glow-gold' : 'border-white/10 shadow-xl hover:border-white/20'}`}>
                                    <div className="flex items-center justify-between mb-2">
                                        <span className={`font-bold text-lg ${event.color}`}>{event.year}</span>
                                        <span className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Milestone {index + 1}</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-100 mb-2 font-serif">{event.title}</h3>
                                    <p className="text-slate-300 leading-relaxed text-sm">
                                        {event.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Column: Sticky Cause & Effect Diagram */}
                <div className="hidden lg:block sticky top-32">
                    <div className="glass-card-strong rounded-3xl p-8 border border-gold-bright/20 shadow-2xl relative overflow-hidden min-h-[500px] flex flex-col justify-center">
                        <div className="absolute inset-0 bg-gradient-to-br from-midnight via-slate-900 to-midnight -z-10" />

                        <h3 className="text-center text-gold-bright font-bold uppercase tracking-widest mb-12 flex items-center justify-center gap-3">
                            <Activity className="w-5 h-5" />
                            Causal Chain Analysis
                        </h3>

                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeEventIndex}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.4 }}
                                className="space-y-8 max-h-[600px] overflow-y-auto pr-2 custom-scrollbar"
                            >
                                <div className="text-center mb-6">
                                    <div className={`inline-flex items-center gap-3 px-6 py-3 rounded-full ${events[activeEventIndex].bgColor} ${events[activeEventIndex].borderColor} border shadow-glow-lg`}>
                                        <span className={`font-bold text-xl ${events[activeEventIndex].color}`}>
                                            {events[activeEventIndex].year}: {events[activeEventIndex].title}
                                        </span>
                                    </div>
                                </div>

                                {events[activeEventIndex].chains.map((chain, i) => (
                                    <div key={i} className="relative">
                                        {/* CAUSE */}
                                        <div className="relative group">
                                            <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-1 h-full bg-blue-500/30 rounded-full" />
                                            <div className="pl-6">
                                                <span className="text-xs font-bold text-blue-400 uppercase tracking-wide mb-1 block">Cause</span>
                                                <div className="bg-blue-900/20 border border-blue-500/30 rounded-xl p-4 shadow-lg">
                                                    <p className="text-slate-200 font-medium text-sm leading-relaxed">
                                                        {chain.cause}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* ARROW */}
                                        <div className="flex justify-center py-2">
                                            <ArrowDown className="w-6 h-6 text-slate-500/50" />
                                        </div>

                                        {/* EFFECT */}
                                        <div className="relative group">
                                            <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-1 h-full bg-red-500/30 rounded-full" />
                                            <div className="pl-6">
                                                <span className="text-xs font-bold text-red-400 uppercase tracking-wide mb-1 block">Effect</span>
                                                <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-4 shadow-lg">
                                                    <p className="text-slate-200 font-medium text-sm leading-relaxed">
                                                        {chain.effect}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        {i < events[activeEventIndex].chains.length - 1 && (
                                            <div className="my-8 flex items-center justify-center">
                                                <div className="h-px w-24 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </motion.div>
                        </AnimatePresence>

                        <div className="mt-12 text-center">
                            <p className="text-xs text-slate-500 italic">
                                Hover over timeline events to trace the causal links.
                            </p>
                        </div>
                    </div>

                    <CalloutBox type="insight" title="Historical Thinking skill 5.B in action" className="mt-6">
                        <p>
                            This is a significantly shorter summary cause & effect chain that outlines the response to the Research plan. As you can see, there is a clear explanation (or a logical conclusion to be made) between each cause and effect.
                        </p>
                    </CalloutBox>
                </div>

            </div>

            {/* Hidden Digit Box - Hard Mode Only (at the very bottom, tucked away) */}
            {difficulty === 'hard' && (
                <div className="mt-16 flex justify-end">
                    <div className="glass-card-dark-strong rounded-2xl border border-gold-bright/30 shadow-2xl relative overflow-hidden transition-all duration-300 p-3 max-w-xs">
                        <div className="absolute inset-0 bg-gradient-to-br from-gold-bright/10 via-transparent to-gold-muted/10" />
                        <div className="relative z-10 flex items-center justify-end">
                            <div className="flex-shrink-0">
                                <HiddenDigit digit="2" position="inline" />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </PageLayout>
    );
}
