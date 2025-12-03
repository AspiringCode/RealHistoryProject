import React from 'react';
import CalloutBox from '../Components/shared/CalloutBox';
import HiddenDigit from '../Components/shared/HiddenDigit';
import Hint from '../Components/shared/Hint';
import { MapPin, Shield, Scale, AlertTriangle } from 'lucide-react';
import MapComponent from '../Components/shared/MapComponent';
import PageLayout from '../Components/shared/PageLayout';

export default function Background() {
  return (
    <PageLayout
      title="Background: Iran's Nuclear Story"
      subtitle="From peaceful cooperation to international crisis: how Iran's nuclear program evolved from Atoms for Peace to the brink of war."
    >
      <div className="grid lg:grid-cols-3 gap-12">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-12">

          {/* Section 1: Atoms for Peace */}
          <section className="glass-card-dark-strong rounded-2xl p-8 shadow-xl border border-white/10 relative">
            <HiddenDigit digit="1" position="top" />
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-orange-500/20 p-3 rounded-xl border border-orange-500/30">
                <Shield className="w-6 h-6 text-orange-400" />
              </div>
              <h2 className="text-2xl font-bold text-slate-100 font-serif">
                Atoms for Peace & Early Cooperation
              </h2>
            </div>

            <div className="prose prose-invert max-w-none">
              <p className="text-slate-300 leading-relaxed mb-4">
                During the Cold War, Iran’s nuclear journey began not as rogue, but as part of America’s Atoms for Peace program (Rowberry). In 1957, under Iran’s pro-Western Shah, Washington and Tehran signed a nuclear cooperation agreement that enabled a jump-start to Iran’s civilian nuclear capacity (Rowberry). The U.S. provided Iran with a small 5 MW Research Reactor in 1967—along with weapons-grade fuel for it—and trained Iranian scientists in the art of nuclear engineering (Rowberry; Arms Control Association, "Arms Control and Proliferation Profile Iran"). Throughout the 1970s, the Shah’s government expanded the program, establishing the basis of Iran’s nuclear infrastructure (Rowberry).
              </p>
              <p className="text-slate-300 leading-relaxed mb-4">
                Even after the 1979 Iranian Revolution (which cut ties with the U.S.), those American-built facilities and Western-trained experts remained. The new republic inherited a running reactor and a plethora of qualified nuclear personnel—a foundation it would use to pursue its own goals (Rowberry). In the 1980s, Iran tapped other sources like Pakistan, China, and Russia to keep its nuclear interests alive (Arms Control Association, "Arms Control and Proliferation Profile Iran"). But the very roots of the program were traced back to the initial era of U.S.-backed "Atoms for Peace." What had begun as cooperation toward peaceful development of nuclear energy, by the end of the millennium, had already laid the groundwork for tensions and control. How far could Iran push this program, and to what end? <Hint easyHint="Look for a hidden digit at the top of this section" mediumHint="" hardHint="" showInEasy={true} showInMedium={false} showInHard={false} />
              </p>
            </div>
          </section>

          {/* Section 2: UN, IAEA, and JCPOA */}
          <section className="glass-card-dark-strong rounded-2xl p-8 shadow-xl border border-white/10">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-blue-500/20 p-3 rounded-xl border border-blue-500/30">
                <Scale className="w-6 h-6 text-blue-400" />
              </div>
              <h2 className="text-2xl font-bold text-slate-100 font-serif">
                UN, IAEA, and the JCPOA
              </h2>
            </div>

            <div className="prose prose-invert max-w-none">
              <p className="text-slate-300 leading-relaxed mb-4">
                Fast-forwarding to the early 2000s, what had been a relatively cooperative program had become shrouded in secrecy, which caught global attention. In 2002, an exiled opposition group revealed the existence of undeclared nuclear sites—most notably a massive underground enrichment facility at Natanz and a heavy-water reactor project at Arak (Arms Control Association, "Arms Control and Proliferation Profile Iran"). The revelations jolted the international community. Iran, a signer of the Non-Proliferation Treaty, was obligated to declare facilities of that nature to the International Atomic Energy Agency (IAEA), but it had not (Heinonen). Over the next few years, UN nuclear inspectors investigated these sites and consequently uncovered a pattern of suspicious activities—such as uranium enrichment experiments and plutonium-related research—that Iran had failed to report yet again (Heinonen; IAEA, Implementation of the NPT Safeguards Agreement in Iran). The IAEA’s findings of Iran’s non-compliance led to a series of UN Security Council resolutions between 2006 and 2010 that imposed sanctions on Iran and demanded it suspend enrichment entirely (Heinonen; United Nations Security Council). The world had effectively placed Iran’s nuclear program in a vise.
              </p>
              <p className="text-slate-300 leading-relaxed">
                By 2015, all that bargaining and pressure produced a landmark deal: the Joint Comprehensive Plan of Action (Arms Control Association, "JCPOA at a Glance"). Backed by the UN in Resolution 2231, the JCPOA put Iran’s nuclear program under strict limits (United Nations Security Council Resolution 2231). Under this, Iran could enrich uranium only to 3.67% purity (far below weapons-grade) and could stockpile only 300 kg of that low-enriched uranium (Nasralla). It had to remove and store most of its centrifuges, leaving just over 5,000 basic models operational, and halt enrichment entirely at the hardened Fordow site (Arms Control Association, "JCPOA at a Glance"). The deal also required that the heavy-water reactor at Arak be redesigned so it could not produce bomb-grade plutonium (“Nuclear Program of Iran”; IAEA, Verification and Monitoring in Iran). Most importantly, it introduced an unprecedented verification regime: the IAEA gained round-the-clock access to key facilities, remote cameras, and the authority to inspect suspect sites—ensuring any significant cheating would be detected (IAEA, Verification and Monitoring in Iran). For a time, this arrangement acted like fragile scaffolding around Iran’s nuclear ambitions: the program persisted, but it was boxed in and closely monitored. Many experts hailed the JCPOA as a triumph of nonproliferation diplomacy, albeit a temporary one (Arms Control Association, "JCPOA at a Glance"). It bought the world nearly a decade of confidence that Iran could not race for a bomb undetected. However, it remained inherently fragile: if any party in power withdrew, or if Iran violated its commitments after the deal’s expiry, all of the peace and confidence garnered could collapse and old fears would inevitably return. <Hint easyHint="" mediumHint="There's a hidden digit in the previous section" hardHint="" showInEasy={false} showInMedium={true} showInHard={false} />
              </p>
            </div>
            <CalloutBox type="info" title="What the JCPOA Did">
              <ul className="space-y-3 list-none pl-0">
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 font-bold mt-1">•</span>
                  <span><strong className="text-blue-200">Capped enrichment</strong> at 3.67% (far below weapons-grade)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 font-bold mt-1">•</span>
                  <span><strong className="text-blue-200">Limited stockpiles</strong> to 300 kg of enriched uranium</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 font-bold mt-1">•</span>
                  <span><strong className="text-blue-200">Reduced centrifuges</strong> from ~19,000 to ~5,000</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 font-bold mt-1">•</span>
                  <span><strong className="text-blue-200">Allowed intrusive IAEA inspections</strong> under UNSCR 2231</span>
                </li>
              </ul>
            </CalloutBox>
          </section>

          {/* Section 3: U.S. Withdrawal */}
          <section className="glass-card-dark-strong rounded-2xl p-8 shadow-xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-red-500/20 p-3 rounded-xl border border-red-500/30">
                <AlertTriangle className="w-6 h-6 text-red-400" />
              </div>
              <h2 className="text-2xl font-bold text-slate-100 font-serif">
                2018: U.S. Withdrawal and “Maximum Pressure”
              </h2>
            </div>

            <div className="prose prose-invert max-w-none">
              <p className="text-slate-300 leading-relaxed mb-4">
                The calm of the JCPOA was short-lived. In May of 2018, just three years after the deal was signed, the U.S.—under President Donald Trump—withdrew from the Iran agreement. Trump denounced the JCPOA as “a giant fiction,” arguing that Iran’s “murderous regime” would never truly abandon its ambitions under such a weak deal (“United States Withdrawal from the Joint Comprehensive Plan of Action”). To him, the accord was flawed. It ignored Iran’s missile program and its support for militant proxies, and nuclear restrictions were set to expire (“United States Withdrawal from the Joint Comprehensive Plan of Action”). Once the U.S. pulled out, it quickly reimposed the sanctions, and then intensified them under what it called a “maximum pressure” campaign. The campaign’s goal was to strangle Iran’s economy, particularly its vital oil exports, to force Tehran into a better deal. By 2019, U.S. sanctions had slashed Iran’s oil sales to a fraction of prior levels, cut off its banks from the global system, and blacklisted hundreds of Iranian entities (Holland and Mason). The White House wagered that enough economic pain would drive Iran’s leaders back to negotiations on U.S. terms (Holland and Mason). “With me, it’s very simple: Iran cannot have a nuclear weapon,” Trump declared—and if economic warfare was needed to ensure that, so be it (Holland and Mason).
              </p>
              <p className="text-slate-300 leading-relaxed">
                Tehran, however, met pressure with pressure. For a year after the U.S. withdrawal, Iran still adhered to the deal—hoping Europe could salvage it—but by mid-2019, that patience wore thin ("Nuclear Program of Iran"). Claiming it saw no benefit from the JCPOA without U.S. sanctions relief, Iran began rolling back its commitments. Step by step, it breached the agreement: exceeding the 300 kg cap on low-enriched uranium, enriching beyond 3.67% ("Nuclear Program of Iran"), reinstalling advanced centrifuges, and later enriching up to 20% and even 60% ("Iran nuclear deal: Why do the limits on uranium enrichment matter?"). By 2020–2021, Iran was producing uranium at 60% purity—short of weapons-grade (90%) but far above civilian requirements ("Iran nuclear deal: Why do the limits on uranium enrichment matter?"). Its stockpile grew to many times the JCPOA's limit, drastically shortening the estimated time needed to amass bomb material if it chose to (IAEA, Verification and Monitoring Report – Iran). The JCPOA's balance—U.S. sanctions relief in exchange for Iranian restraint—had collapsed. Washington tightened its chokehold; Iran accelerated its nuclear advances. European allies watched uneasily as the framework containing Iran's program disintegrated. By 2025, Iran's nuclear capability was broader and less monitored than during the JCPOA era—setting the stage for the crises that followed ("Bulletin of the Atomic Scientists – 'A simple timeline of Iran’s nuclear program'"). <Hint easyHint="" mediumHint="" hardHint="A digit lies somewhere in the upper portion of this page" showInEasy={false} showInMedium={false} showInHard={true} />
              </p>
            </div>

            <CalloutBox type="warning" title="Historical Thinking Skill 5.B in Action" className="mt-8">
              <p>
                Notice how each development relates to the next: Atoms for Peace created nuclear infrastructure
                → undeclared sites triggered UN/IAEA action → the JCPOA temporarily limited the program →
                U.S. withdrawal removed those limits → Iran expanded enrichment. Each decision created the
                conditions for the next choice. This is shown visually inside of the Chain of Events Page.
              </p>
            </CalloutBox>

            <CalloutBox type="insight" title="HISTORICAL THINKING SKILL 6.C: REASONING WITH EVIDENCE" className="mt-6">
              <p>
                This section demonstrates reasoning by using evidence such as IAEA reports, official UN sanctions, and JCPOA restrictions to explain why global actor intervened in Iran's nuclear program. Each claim is built on sources that justify the escalation from cooperation to suspicion to containment.
              </p>
            </CalloutBox>
          </section>
        </div>

        {/* Sidebar: Map */}
        <div className="lg:col-span-1">
          <div className="glass-card-dark-strong rounded-2xl p-6 shadow-xl border border-white/10 sticky top-24">
            <h3 className="font-bold text-slate-100 mb-4 uppercase tracking-wider text-sm">Key Locations</h3>

            {/* Simple visual map representation */}
            <MapComponent
              center={[34.0, 53.0]}
              zoom={5}
              className="h-80 w-full rounded-xl mb-6 shadow-inner"
              markers={[
                { position: [35.6892, 51.3890], label: 'Tehran', description: 'Tehran Research Reactor', tooltipDirection: 'top', tooltipOffset: [0, -20] },
                { position: [34.8833, 50.9167], label: 'Fordow', description: 'Underground enrichment facility', tooltipDirection: 'right', tooltipOffset: [20, 0] },
                { position: [33.7214, 51.7283], label: 'Natanz', description: 'Main enrichment plant', tooltipDirection: 'left', tooltipOffset: [-20, 0] },
                { position: [32.6546, 51.6680], label: 'Isfahan', description: 'Uranium conversion facility', tooltipDirection: 'bottom', tooltipOffset: [0, 20] }
              ]}
            />

            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3 group">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-1.5 flex-shrink-0 shadow-[0_0_8px_rgba(239,68,68,0.6)] group-hover:scale-125 transition-transform"></div>
                <div>
                  <p className="font-bold text-slate-200">Tehran Research Reactor</p>
                  <p className="text-slate-400 text-xs">Site of early Atoms for Peace cooperation</p>
                </div>
              </div>
              <div className="flex items-start gap-3 group">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-1.5 flex-shrink-0 shadow-[0_0_8px_rgba(239,68,68,0.6)] group-hover:scale-125 transition-transform"></div>
                <div>
                  <p className="font-bold text-slate-200">Natanz</p>
                  <p className="text-slate-400 text-xs">Major enrichment facility</p>
                </div>
              </div>
              <div className="flex items-start gap-3 group">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-1.5 flex-shrink-0 shadow-[0_0_8px_rgba(239,68,68,0.6)] group-hover:scale-125 transition-transform"></div>
                <div>
                  <p className="font-bold text-slate-200">Fordow</p>
                  <p className="text-slate-400 text-xs">Underground facility, heavily fortified</p>
                </div>
              </div>
              <div className="flex items-start gap-3 group">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-1.5 flex-shrink-0 shadow-[0_0_8px_rgba(239,68,68,0.6)] group-hover:scale-125 transition-transform"></div>
                <div>
                  <p className="font-bold text-slate-200">Isfahan</p>
                  <p className="text-slate-400 text-xs">Uranium conversion facility</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}