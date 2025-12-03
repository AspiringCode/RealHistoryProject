
import React from 'react';
import CalloutBox from '../Components/shared/CalloutBox';
import { Shield, Flame, Target, Zap, Users } from 'lucide-react';
import HiddenDigit from '../Components/shared/HiddenDigit';
import Hint from '../Components/shared/Hint';
import MapComponent from '../Components/shared/MapComponent';
import PageLayout from '../Components/shared/PageLayout';

export default function ShadowWar() {
  const miniTimeline = [
    { year: '1981', event: 'Osirak', description: 'Israel destroys Iraqi nuclear reactor' },
    { year: '2007', event: 'Al-Kibar', description: 'Israel strikes Syrian reactor' },
    { year: '2023', event: 'Hamas Attacks', description: 'Escalating Iran-backed attacks on Israel' },
    { year: '2024-25', event: 'Proxy Clashes', description: 'Shadow wars intensify across the region' }
  ];

  return (
    <PageLayout
      title="Israel, Iran, and the Shadow War"
      subtitle="Understanding Israel's threat perception, the Begin Doctrine, and decades of proxy conflicts that shaped the path to Operation Midnight Hammer."
    >
      <div className="grid lg:grid-cols-3 gap-12">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-12">

          {/* Section 4: The Begin Doctrine */}
          <section className="glass-card-dark-strong rounded-2xl p-8 shadow-xl relative">
            <HiddenDigit digit="3" position="left" />
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-blue-500/20 p-3 rounded-xl border border-blue-500/30">
                <Shield className="w-6 h-6 text-blue-400" />
              </div>
              <h2 className="text-2xl font-bold text-slate-100 font-serif">
                The Begin Doctrine and Preemptive Strikes
              </h2>
            </div>

            <div className="prose prose-invert max-w-none">
              <p className="text-slate-300 leading-relaxed mb-4">
                From Israel’s point of view, a nuclear-armed Iran is not just another security concern – it is an existential danger tied to a long history of peril and preventative (future, forward-facing) action. This mindset is embodied in what became known as the Begin Doctrine: the conviction that Israel must never allow a hostile neighboring regime to obtain nuclear weapons (Amos Yaldin). The doctrine originated in 1981, when Prime Minister Menachem Begin, under the pressure faced by Iraq’s vow to destroy Israel, ordered the Air Force to destroy Saddam Hussein’s Osirak reactor before it became fully operational (Keinon). The strike eliminated Iraq’s nuclear potential and set a long-lasting precedent. So much so that, decades later, in 2007, Israel followed the same logic against Syria; upon the discovery of a secret reactor being built in collaboration with North Korea, Israeli leaders (with U.S. approval) launched a surprise, covert night raid that completely eradicated the site (“Operation Orchard”).
              </p>
              <p className="text-slate-300 leading-relaxed mb-4">
                In both cases, Israel acted alone(ish) and in secrecy, and was vindicated when evidence bubbled up that confirmed the facilities destroyed posed genuine threats (Sanger). These operations cemented the Begin Doctrine as an iron-law in Israeli strategic thinking. As one analysis put it, Israel’s national security culture now holds that “countries that call for Israel’s destruction must not be allowed to get the bomb” (Amos Yaldin).
              </p>
              <p className="text-slate-300 leading-relaxed mb-4">
                Iran has long fit that profile in Israeli eyes. Iranian leaders’ own words have reinforced this view. In 2005, then-President Mahmoud Ahmadinejad notoriously called Israel a “disgraceful blot” to be “wiped off the face of the earth,” echoing earlier revolutionary slogans to erase the “Zionist regime” (MacAskill and McGreal). While translations differ, the intent was unmistakable—and deeply chilling to Israelis. More recently, Iran’s supreme leader and senior commanders have repeatedly labeled Israel a “cancerous tumor” or an enemy to be destroyed (MacAskill and McGreal). Faced with such rhetoric, Israeli officials portray Iran’s nuclear ambitions as a mortal threat. Prime Minister Benjamin Netanyahu, for example, has often reminded the world that Iran’s leaders “brazenly call for Israel’s destruction” while advancing toward nuclear capability (Associated Press).
              </p>
              <p className="text-slate-300 leading-relaxed">
                Through this lens, any move to preempt Iran's nuclear progress—even through a risky unilateral strike—appears not only justified but necessary. In the 2020s, Israeli officials openly invoked the Begin Doctrine: "Remember Osirak," they would say—better to act early than face a nuclear-armed adversary next door (Amos Yaldin). Iran's program kept advancing, accelerating – and consequently, Israel's historical experiences and fears once again arose – begging the question: Would Jerusalem strike again? <Hint easyHint="A digit hides on the left side of this section" showInEasy={true} showInMedium={false} showInHard={false} />
              </p>
            </div>
          </section>

          {/* Section 5: Proxies */}
          <section className="glass-card-dark-strong rounded-2xl p-8 shadow-xl relative">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-purple-500/20 p-3 rounded-xl border border-purple-500/30">
                <Users className="w-6 h-6 text-purple-400" />
              </div>
              <h2 className="text-2xl font-bold text-slate-100 font-serif">
                Proxies, Hamas, and the "Shadow Wars"
              </h2>
            </div>

            <div className="prose prose-invert max-w-none">
              <p className="text-slate-300 leading-relaxed mb-4">
                In the years leading up to 2025, Iran and Israel were already entangled in a low-intensity shadow war, indirect, long conflicts fought through proxy groups and covert operations rather than open battle. Iran, aiming to challenge Israel without direct confrontation, spent decades building a network of allied militias and armed groups across the Middle East. Chief among them were Hezbollah in Lebanon and Hamas and Islamic Jihad in the Palestinian territories. Iran supplied these groups with funding, weapons ranging from rockets to drones, and military training, framing them as part of an “Axis of Resistance” against Israel (Lidman; Levitt). For Israel, this meant threats behind every corner: Hezbollah’s rocket arsenal in the north, Hamas’s tunnels and missiles in the south, and Iranian-backed militants in Syria and even Yemen (“Iran–Israel Proxy Conflict”). They were completely surrounded.
              </p>
              <p className="text-slate-300 leading-relaxed mb-4">
                Throughout the 2010s and early 2020s, Iran and Israel continued to trade blows. Iranian-supplied rockets periodically struck Israeli towns from Gaza or Lebanon, while Israeli jets and cyber units targeted Iranian arms convoys and nuclear-related facilities in Syria and Iran (“Iran–Israel Proxy Conflict”). A string of assassinations killed Iranian nuclear scientists on Tehran’s streets, and unexplained explosions destroyed Iranian missile and research sites—operations widely credited to Mossad (“Iran–Israel Proxy Conflict”). Meanwhile, Iran’s Revolutionary Guard Corps most likely launched cyberattacks on Israeli infrastructure and plotted attacks against Israelis abroad (Levitt). The covert war had continued unseen, but simmering.
              </p>
              <p className="text-slate-300 leading-relaxed mb-4">
                By the time Hamas launched its devastating surprise attack in October 2023, many in Israel immediately looked to Tehran, attributing the act to its influence behind the scenes. Iran had denied direct involvement but had vehemently praised the attack, and Israeli intelligence pointed to the fact that Hamas and Palestinian Islamic Jihad had historically been funded and armed by Iran (Lidman). The Gaza war that ensued was incredibly fierce and quickly drew in other Iranian proxies. Hezbollah engaged Israel in months of cross-border fire, and Iranian-supplied drones and rockets launched from Syria and Yemen targeted Israeli positions (“Iran–Israel Proxy Conflict”). Israel struck back not only in Gaza but also at Iranian-linked sites in Syria and through naval operations in the Red Sea (“Iran–Israel Proxy Conflict”; Lidman). Observers increasingly described this not as a localized Israel–Hamas war but as a broader “proxy war” between Israel and Iran (Lidman; Kroenig et al.).
              </p>
              <p className="text-slate-300 leading-relaxed">
                By early 2025, the shadow conflict had escalated beyond reasonable measure and had erased any lingering notions of peace: Israel and Iran were caught in ongoing, undeclared hostilities. This context was crucial for Operation Midnight Hammer. When Israel's leaders considered striking Iran's nuclear sites, they did so with the understanding that a war with Iran was already happening anyway—through rockets over Haifa, clashes on the Lebanese border, and covert maritime sabotage. At that point in time, in their eyes, an overt strike on Iran would not start a new war but escalate an existing one—albeit at enormous risk. The Middle East, by then, was a powder keg of constant hostilities waiting for a single spark to ignite a combustion to shake the earth. <Hint mediumHint="There's a hidden digit in the previous section" hardHint="A digit can be found on the left edge of this page" showInEasy={false} showInMedium={true} showInHard={true} />
              </p>
            </div>

            <CalloutBox type="insight" title="Themes: Politics and Power (PCE)" className="mt-8">
              <p className="text-slate-300">
                This section demonstrates the PCE theme by showing how states use military force, proxy
                relationships, and threat perception to shape regional power dynamics. Israel's doctrine of
                preemptive strikes and Iran's proxy network both reflect strategic calculations about survival
                and influence in a volatile region.
              </p>
            </CalloutBox>

            <CalloutBox type="warning" title="HISTORICAL THINKING SKILL 6.C: REASONING WITH EVIDENCE" className="mt-6">
              <p>
                The narrative uses evidence of proxy militia funding, public Iranian statements and rocket attack evidence to justify Israel's perception of an existential danger. By presenting these with examples, the section shows why Israel's habit evolved to adopt the Begin doctrine.
              </p>
            </CalloutBox>
          </section>

          {/* Mini Timeline */}
          <section className="glass-card-dark-strong rounded-2xl p-8 shadow-xl">
            <h3 className="text-slate-100 font-bold text-xl mb-6 font-serif">
              Timeline: Israeli Preemptive Action
            </h3>
            <div className="space-y-6 relative before:absolute before:left-[19px] before:top-12 before:bottom-4 before:w-0.5 before:bg-slate-700">
              {miniTimeline.map((item, index) => (
                <div key={index} className="flex gap-6 items-start relative z-10 group">
                  <div className="bg-slate-800 text-gold-muted border border-gold-muted/30 rounded-lg px-3 py-1 font-bold text-sm flex-shrink-0 w-20 text-center shadow-lg group-hover:bg-gold-muted group-hover:text-midnight transition-colors duration-300">
                    {item.year}
                  </div>
                  <div>
                    <p className="text-slate-100 font-bold text-lg group-hover:text-gold-muted transition-colors">{item.event}</p>
                    <p className="text-slate-400 text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Sidebar: Regional Map */}
        <div className="lg:col-span-1">
          <div className="glass-card-dark-strong rounded-2xl p-6 shadow-xl sticky top-24">
            <h3 className="font-bold text-slate-100 uppercase tracking-wider text-sm mb-4">Regional Context</h3>

            {/* Regional Map */}
            <MapComponent
              center={[33.0, 44.0]}
              zoom={4}
              className="h-80 w-full rounded-xl mb-4 shadow-inner border border-white/10"
              markers={[
                { position: [31.0461, 34.8516], label: 'ISRAEL', description: 'Target', tooltipDirection: 'left', tooltipOffset: [-10, 0] },
                { position: [32.4279, 53.6880], label: 'IRAN', description: 'Aggressor', tooltipDirection: 'right', tooltipOffset: [10, 0] },
                { position: [33.8938, 35.5018], label: 'Hezbollah', description: 'Lebanon Proxy', tooltipDirection: 'top', tooltipOffset: [0, -10] },
                { position: [31.3, 34.3], label: 'Hamas', description: 'Gaza Proxy', tooltipDirection: 'bottom', tooltipOffset: [0, 10] },
                { position: [33.3152, 44.3661], label: 'Iraq', description: 'Militia Base', tooltipDirection: 'bottom', tooltipOffset: [0, 10] },
                { position: [34.8021, 38.9968], label: 'Syria', description: 'Transit Route', tooltipDirection: 'top', tooltipOffset: [0, -10] }
              ]}
            />

            <div className="space-y-4 text-sm mt-6">
              <div className="flex items-start gap-3 group">
                <div className="bg-red-500/20 p-2 rounded-lg border border-red-500/30 group-hover:bg-red-500/30 transition-colors">
                  <Target className="w-4 h-4 text-red-400" />
                </div>
                <div>
                  <p className="font-bold text-slate-200">Past Israeli Strikes</p>
                  <p className="text-slate-400 text-xs mt-1">Osirak (Iraq, 1981), Al-Kibar (Syria, 2007)</p>
                </div>
              </div>
              <div className="flex items-start gap-3 group">
                <div className="bg-purple-500/20 p-2 rounded-lg border border-purple-500/30 group-hover:bg-purple-500/30 transition-colors">
                  <Users className="w-4 h-4 text-purple-400" />
                </div>
                <div>
                  <p className="font-bold text-slate-200">Iranian Proxies</p>
                  <p className="text-slate-400 text-xs mt-1">Hamas (Gaza), Hezbollah (Lebanon), militias in Iraq, Syria, Yemen</p>
                </div>
              </div>
            </div>

            <CalloutBox type="warning" title="Distance Matters" className="mt-8">
              <p className="text-sm text-slate-300">
                Iran is over 1,000 miles from Israel—too far for conventional Israeli aircraft to strike
                deeply buried facilities like Fordow without U.S. assistance.
              </p>
            </CalloutBox>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}