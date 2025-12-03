
import React from 'react';
import CalloutBox from '../Components/shared/CalloutBox';
import PressureMeter from '../Components/decision/PressureMeter';
import DepthVisualizer from '../Components/decision/DepthVisualizer';
import { Plane, Mountain, Users } from 'lucide-react';
import HiddenDigit from '../Components/shared/HiddenDigit';
import Hint from '../Components/shared/Hint';
import PageLayout from '../Components/shared/PageLayout';

export default function Decision() {
  return (
    <PageLayout
      title="The Decision to Strike"
      subtitle="How escalating pressure, technical limitations, and diplomatic persuasion converged to produce Operation Midnight Hammer."
    >
      <div className="grid lg:grid-cols-2 gap-12 mb-16">
        {/* Visual: Pressure Meter */}
        <PressureMeter />

        {/* Visual: Depth Visualizer */}
        <DepthVisualizer />
      </div>

      {/* Main Content */}
      <div className="space-y-12">

        {/* Section 6: June 2025 Strikes */}
        <section className="glass-card-dark-strong rounded-2xl p-8 shadow-xl relative">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-blue-500/20 p-3 rounded-xl border border-blue-500/30">
              <Plane className="w-6 h-6 text-blue-400" />
            </div>
            <h2 className="text-2xl font-bold text-slate-100 font-serif">
              June 2025: Strikes on Natanz and Isfahan
            </h2>
          </div>

          <div className="prose prose-invert max-w-none">
            <p className="text-slate-300 leading-relaxed mb-4">
              The long-simmering conflict had now reached a new level. On June 12th, 2025, after months of missile warnings and alarms, Israel made the fateful decision to openly attack Iran’s nuclear facilities. The targets were Iran’s two most critical nuclear sites with the exception of Tehran: The Natanz enrichment site, along with a nuclear facility just outside Isfahan. Natanz was a vast centrifuge compound that had long been used to enrich uranium and had been Iran’s nuclear pride, making it the focus of many prior attacks. However, those attacks were meaningfully covert. This one was not. Just after midnight, waves of F-15I and F-35I jets struck Natanz with precision bombs. As they descended, blasts rocked the facility and buildings were razed, reduced to flaming rubble. According to the official Israeli report, the raids had “badly damaged” Natanz’s underground complex and destroyed cascades of centrifuges, obliterating any and all support infrastructure like power systems and control rooms. (Marsi). Essentially, Israel aimed to set back Iran’s nuclear program by decades in a single night, and the subsequent satellite imagery showed quite clearly its success. (David Albright et al., “Comprehensive Updated Assessment of Iranian Nuclear Sites Five Months After the 12-Day War”).
            </p>
            <p className="text-slate-300 leading-relaxed">
              Simultaneously, in Isfahan, another Israeli attack unfolded, where they targeted Iran’s Nuclear Technology Center, including a uranium conversion plant where Iran stockpiles quite a bit of its processed uranium gas. Israeli strikes destroyed several buildings there, including warehouses believed to hold uranium along with the plant that turns uranium into the stuffs ready for enrichment (Marsi). By morning, Iran’s two largest nuclear installations stood smoking. However, one crucial site was not hit: the deeply buried Fordow facility remained untouched in this strike. Israeli planes simply lacked the power needed to destroy it (BBC Verify, “Iran’s secretive nuclear site that only a US bomb could hit”). Although bold, the raids had left the hardest target for another day (and, as it turned out, for American help). But the importance of these strikes remains evident – Israel had just shown a willingness to risk a full-scale war.
              This attack had set the stage for Operation Midnight Hammer.
            </p>
          </div>
        </section>

        {/* Section 7: Fordow */}
        <section className="glass-card-dark-strong rounded-2xl p-8 shadow-xl relative">
          <HiddenDigit digit="3" position="bottom" />
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-stone-500/20 p-3 rounded-xl border border-stone-500/30">
              <Mountain className="w-6 h-6 text-stone-400" />
            </div>
            <h2 className="text-2xl font-bold text-slate-100 font-serif">
              Fordow: The Site Under the Mountain
            </h2>
          </div>

          <div className="prose prose-invert max-w-none">
            <p className="text-slate-300 leading-relaxed mb-4">
              If Natanz was the workhorse of Iran’s nuclear program, Fordow was its insurance policy – a bunker burrowed deep under an Iranian mountain, built to withstand exactly the kind of bombing that had just wrecked Natanz. The Fordow Fuel Enrichment Plant, hidden near the holy city of Qom, was a secret until Western intelligence exposed it in 2009 (Nuclear Threat Initiative, “Fordow Fuel Enrichment Plant”). Iran had engineered it with one purpose in mind: fortification. The centrifuge halls at Fordow sit under tens of meters of rock and concrete, making them far harder to destroy with conventional airstrikes (Nuclear Threat Initiative, “Fordow Fuel Enrichment Plant”). In the 2010s, Fordow was used to enrich uranium to 20% – and after 2019, Iran even began enriching there to 60% – but only a few hundred centrifuges were spinning (“Nuclear Program of Iran”). Still, it was a source of immense worry for war planners. By 2025, Fordow was the last major enrichment site left unscathed by attacks. It literally went underground to survive.
            </p>
            <p className="text-slate-300 leading-relaxed mb-4">
              The Israelis had long known they could not reliably kill Fordow alone. The bunker’s depth and hardened layers put it beyond the reach of the bombs Israel’s jets carry (Rising). Even Israel’s heaviest bunker-busters (5,000-pound GBU-28s) would be like pinpricks against Fordow’s mountainside (Rising). Only one weapon had a good chance: America’s 30,000-pound GBU-57A/B Massive Ordnance Penetrator (MOP), a skyscraper-sized bunker-busting bomb designed for just this kind of target (U.S. Department of Defense). And only one plane can carry the MOP: the U.S. B-2 Spirit stealth bomber (Rising). This technical reality made Fordow a sort of doomsday vault for Iran’s nuclear program – as long as it remained, Iran had a protected enrichment capability that Israel’s first strike hadn’t erased.
            </p>
            <p className="text-slate-300 leading-relaxed">
              It also made U.S. involvement de facto necessary if the goal was to truly cripple Iran's nuclear potential. Israeli officials essentially admitted this; they lobbied Washington for access to MOPs or U.S. strike support for years (Broad and Sanger). In war-game scenarios, Israel could perhaps seal the entrances to Fordow or cause damage by repeated strikes, but outright destruction required the bunker-busters and heavy bombers only the Americans possessed (David Albright et al., “Post-Attack Assessment of the First 12 Days of Israeli and U.S. Strikes on Iranian Nuclear Facilities”). By mid-June 2025, after Israel's initial raids, Fordow loomed as the unfinished business. Iran, fully aware of Fordow's value, moved additional stockpiles and advanced centrifuges into the site, hunkering down ("Nuclear Program of Iran"). For the U.S. and Israel, Fordow was the ultimate challenge: a nuclear site literally built to survive their onslaught. The success of Operation Midnight Hammer – and the hope of setting back Iran's bomb program for years – hinged on whether this underground bastion could be cracked open. <Hint easyHint="Check the bottom of this section for a hidden digit" showInEasy={true} showInMedium={false} showInHard={false} />
            </p>
          </div>
        </section>

        {/* Section 8: Netanyahu's Persuasion */}
        <section className="glass-card-dark-strong rounded-2xl p-8 shadow-xl">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-purple-500/20 p-3 rounded-xl border border-purple-500/30">
              <Users className="w-6 h-6 text-purple-400" />
            </div>
            <h2 className="text-2xl font-bold text-slate-100 font-serif">
              Netanyahu's Persuasion and Trump's Calculus
            </h2>
          </div>

          <div className="prose prose-invert max-w-none">
            <p className="text-slate-300 leading-relaxed mb-4">
              For all its military might, Israel knew it needed the United States to finish the job. And getting America on board fell largely to one man: Netanyahu. The Israeli Prime Minister has a long history of trying to shape U.S. policy on Iran. Back in 2015, he appeared before the U.S. Congress to denounce the emerging Iran nuclear deal, using powerful speeches to warn of Iran’s deceit (Netanyahu). Earlier, at the U.N., he famously held up a cartoon bomb diagram to illustrate how close Iran was getting to the red line (“Netanyahu’s UN Speech on Iran”). In 2018, he publicized a cache of stolen nuclear archives in a slideshow that revealed Iranian plans for weapons in order to erode international trust in Tehran (“Iran Lied: Full Presentation of Israel’s Netanyahu”). These efforts were all dramatic and elaborate, but they were based on facts and undeniable evidence. Subsequently, they left an impression on U.S. leaders. Donald Trump shared Netanyahu’s view on Iran. When Trump took office for the first time, Netanyahu had successfully found a willing partner to scrutinize the JCPOA deal (“United States Withdrawal from the Joint Comprehensive Plan of Action”).
            </p>
            <p className="text-slate-300 leading-relaxed mb-4">
              By 2025, in time for his second election, Netanyahu played on his friendship with the American president. He presented Trump with the latest Mossad assessments: Iran’s uranium stockpile was months away from a bomb’s worth, Fordow’s nuclear centrifuges (used for enrichment) were spinning at 60%, and Iran’s regional aggression was apparently at its peak (IAEA, Verification and Monitoring Report – Iran). Netanyahu also showed imagery of Iranian enrichment activities and possibly even plans of Fordow’s tunnels, effectively painting Iran’s nuclear program as a ticking time bomb. Trump’s calculus for authorizing the operation consequently included personal conviction and political instinct. He had historically campaigned on being tough on Iran and had already re-instated and harshened sanctions, and now he was given the option to solve the problem militarily.
            </p>
            <p className="text-slate-300 leading-relaxed">
              Obviously, other variables were also involved in his equation: Iran’s proxy groups had just put the Middle East in turmoil (the war with Hamas), and Iran was continuing to defy U.N. inspectors with accelerating enrichment (Lidman; IAEA, Verification and Monitoring Report – Iran). Trump also faced pressure to show strong support for Israel, America’s longtime ally – especially after so many casualties. Ultimately, Trump made his classic “go-with-his-gut” decision, taking action fast. In Trump’s mind, a short, sharp intervention that dramatically set back Iran’s nuclear program was far preferable to either watching Iran go nuclear or sliding into a protracted regional war later. His bet was that American force, used swiftly, would cow Iran and re-establish deterrence – and because he didn’t include the public in the decision, he hoped that any political fallout at home could be managed after the fact. <Hint mediumHint="There's a hidden digit in the previous section" hardHint="A digit is located in the lower half of this page" showInEasy={false} showInMedium={true} showInHard={true} />
            </p>
          </div>

          <CalloutBox type="insight" title="Historical Thinking Skill 5.B: Development to Development" className="mt-8">
            <p>
              This section exemplifies how specific historical developments relate to each other in sequence:
              <br /><br />
              <span className="text-gold-muted font-mono">JCPOA collapse → Iran expands enrichment → Israel strikes partially → Fordow remains → Netanyahu lobbies → Trump authorizes Operation Midnight Hammer</span>
              <br /><br />
              Each development created the conditions and constraints for the next decision.
            </p>
          </CalloutBox>

          <CalloutBox type="warning" title="HISTORICAL THINKING SKILL 6.C: REASONING WITH EVIDENCE" className="mt-6">
            <p>
              This section uses sourced evidence, including enrichment percentages and News reports based on Mossad assessments, and U.S sanctions data to justify the reasoning behind American and Israeli decision making.
            </p>
          </CalloutBox>
        </section>
      </div>
    </PageLayout>
  );
}