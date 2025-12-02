import React from 'react';
import TimelineHorizontal from '../Components/shared/TimelineHorizontal';
import ResearchQuestionBox from '../Components/shared/ResearchQuestionBox';
import ThemeBox from '../Components/shared/ThemeBox';
import HomeBackground from '../Components/Home/HomeBackground';
import DifficultySelector from '../Components/Home/DifficultySelector';
import { ArrowRight, Sparkles, Map } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import { motion } from 'framer-motion';

export default function Home() {
  const timelineEvents = [
    {
      year: '1950s',
      label: 'Atoms for Peace',
      description: 'U.S. program helps Iran develop civilian nuclear capacity with the Tehran reactor and training programs.'
    },
    {
      year: '1979',
      label: 'Revolution',
      description: 'Iranian Revolution transforms the nation and its relationship with the West.'
    },
    {
      year: '2000s',
      label: 'UN/IAEA',
      description: 'International inspections and sanctions begin as undeclared nuclear sites are discovered.'
    },
    {
      year: '2015',
      label: 'JCPOA',
      description: 'Joint Comprehensive Plan of Action limits Iran\'s nuclear program in exchange for sanctions relief.'
    },
    {
      year: '2018',
      label: 'U.S. Withdrawal',
      description: 'Trump administration withdraws from JCPOA, reimposing "maximum pressure" sanctions.'
    },
    {
      year: '2023',
      label: 'Hamas Attacks',
      description: 'Escalating proxy conflicts between Israel and Iran-backed groups.'
    },
    {
      year: '2025',
      label: 'Operation Midnight Hammer',
      description: 'U.S. B-2 bombers strike Iran\'s deepest nuclear facility at Fordow.'
    }
  ];

  return (
    <div className="w-full relative overflow-hidden">
      <HomeBackground />
      {/* Hero Section */}
      <div className="min-h-[85vh] flex items-start pt-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >

              <h1 className="text-6xl md:text-8xl font-serif font-bold mb-6 leading-tight text-transparent bg-clip-text bg-gradient-to-r from-slate-100 via-gold-glow to-slate-100 gold-glow-text">
                Operation <br />
                <span className="text-gold-bright">Midnight Hammer</span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-2xl md:text-3xl text-slate-200 font-light mb-8 leading-relaxed max-w-2xl">
              The Road to War and Why It Happened
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="text-lg text-slate-300 leading-relaxed max-w-2xl mb-12 border-l-4 border-gold-bright/50 pl-6 bg-gradient-to-r from-glass-light to-transparent py-4 rounded-r-xl"
            >
              How decisions by the UN, the United States, and Israel around Iran's nuclear program
              built into a single night of bombers and cruise missiles.
            </motion.p>

            {/* Scavenger Hunt Box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              className="glass-card-strong rounded-3xl p-8 border border-gold-bright/40 shadow-2xl mt-8 relative overflow-hidden max-w-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gold-bright/10 via-transparent to-gold-muted/10" />
              <div className="relative z-10 flex items-start gap-6">
                {/* Treasure Map Icon */}
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-gold-bright/20 to-gold-muted/20 border-2 border-gold-bright/40 flex items-center justify-center relative">
                    <Map className="w-10 h-10 text-gold-bright" strokeWidth={1.5} />
                    <div className="absolute -top-1 -right-1 w-6 h-6 bg-gold-bright rounded-full flex items-center justify-center text-midnight font-bold text-xs">X</div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gold-bright mb-3 font-serif">Welcome to The Scavenger Hunt</h3>
                  <p className="text-slate-200 leading-relaxed text-lg">
                    As you read through this historical scene of <span className="text-gold-bright font-semibold">Operation Midnight Hammer</span>, you will need to find the hidden digits that unlock the missile code with hidden treasure inside. Good Luck!
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Difficulty Selector */}
            <DifficultySelector />
          </div>
        </div>
      </div>

      {/* Research Question & Theme Box */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 relative z-20">
        <div className="grid md:grid-cols-3 gap-10">
          <motion.div
            className="md:col-span-2"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <ResearchQuestionBox
              question="How did key decisions by the UN, the United States, and Israel regarding Iran's nuclear program set the stage for Operation Midnight Hammer, and why were those decisions made?"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <ThemeBox />
          </motion.div>
        </div>
      </div>

      {/* Overview Narrative */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="glass-card-dark-strong rounded-3xl p-10 md:p-14 border border-white/10 shadow-2xl"
          >
            <div className="prose prose-lg prose-invert max-w-none">
              <h2 className="text-4xl font-serif font-bold text-slate-100 mb-8 flex items-center gap-4">
                <span className="w-12 h-[1px] bg-gold-muted"></span>
                Overview
              </h2>
              <p className="text-slate-200 leading-relaxed mb-6 text-xl">
                On the night of June 22, 2025, American B-2 Spirit stealth bombers penetrated Iranian airspace
                and dropped massive GBU-57 "bunker buster" bombs on the Fordow nuclear enrichment facility in Iran,
                buried deep beneath a mountain. This strike, codenamed <em className="text-gold-bright not-italic">Operation Midnight Hammer</em>,
                was the culmination of decades of international tension, diplomatic efforts, and strategic
                calculations involving the United Nations, the United States, and Israel.
              </p>

            </div>
          </motion.div>
        </div>
      </div>

      {/* Interactive Timeline */}
      <div className="relative py-32 border-t border-white/5">
        <div className="absolute inset-0 bg-gradient-to-b from-midnight via-slate-900/50 to-midnight pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="glass-card-dark-strong rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-serif font-bold text-slate-100 mb-4">
                Timeline: From Cooperation to Crisis
              </h2>
              <p className="text-slate-400 max-w-2xl mx-auto">
                Hover over each milestone to learn how decisions built upon one another
              </p>
            </div>
            <TimelineHorizontal events={timelineEvents} />
          </div>
        </div>
      </div>


      {/* Call to Action */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 pb-32">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl p-12 text-center border border-gold-bright/30 glass-card-strong"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-gold-bright/15 to-transparent" />
          <div className="absolute inset-0 backdrop-blur-3xl" />

          <div className="relative z-10">
            <h2 className="text-4xl font-serif font-bold text-white mb-6 gold-glow-text">
              Explore the Full Story
            </h2>
            <p className="text-xl mb-10 text-slate-200 max-w-2xl mx-auto">
              Dive deeper into the background, decisions, and consequences that led to Operation Midnight Hammer
            </p>
            <Link
              to={createPageUrl('Background')}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-gold-bright to-gold-muted text-midnight px-8 py-4 rounded-full font-bold hover:shadow-glow-gold-lg transition-all duration-300 hover:scale-105"
            >
              Start with Iran's Nuclear Story
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}