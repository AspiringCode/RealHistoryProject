import React from 'react';
import PageLayout from '../Components/shared/PageLayout';
import { BookOpen, Link as LinkIcon } from 'lucide-react';

export default function Sources() {
    const sources = [
        {
            citation: 'Al Jazeera English. "Yemen’s Houthis Say They Are Now at War with the US after Iran Strikes." Al Jazeera English, 2025.',
            url: 'https://www.aljazeera.com/'
        },
        {
            citation: 'Albright, David, and Sarah Burkhard. "Iran’s Nuclear Timetable: The Weapon Potential." Institute for Science and International Security, 11 June 2025.',
            url: 'https://www.iranwatch.org/our-publications/articles-reports/irans-nuclear-timetable-weapon-potential'
        },
        {
            citation: 'Arms Control Association. "Arms Control and Proliferation Profile: Iran." Arms Control Association, Mar. 2025.',
            url: 'https://www.armscontrol.org/factsheets/iranprofile'
        },
        {
            citation: 'Arms Control Association. "The Joint Comprehensive Plan of Action (JCPOA) at a Glance)." Arms Control Association, Feb. 2025.',
            url: 'https://www.armscontrol.org/factsheets/JCPOA-at-a-glance'
        },
        {
            citation: 'Atlantic Council Experts. "Experts React: Israel Just Attacked Iran’s Military and Nuclear Sites. What’s Next?" Atlantic Council, 12 June 2025.',
            url: 'https://www.atlanticcouncil.org/blogs/new-atlanticist/experts-react-israel-just-attacked-irans-military-and-nuclear-sites-whats-next/'
        },
        {
            citation: 'Congressional Research Service. "Iran Conflict and the Strait of Hormuz: Oil and Gas Market Impacts." CRS Report R45281, 4 Aug. 2025.',
            url: 'https://crsreports.congress.gov/product/pdf/R/R45281'
        },
        {
            citation: 'Cooper, Helene, and Eric Schmitt. "U.S. B-2s and Cruise Missiles Pound Iran’s Nuclear Sites in Overnight Strikes." The New York Times, 22 June 2025.',
            url: 'https://www.nytimes.com/'
        },
        {
            citation: 'Davenport, Kelsey. "The Joint Comprehensive Plan of Action (JCPOA) at a Glance." Arms Control Association, Feb. 2025.',
            url: 'https://www.armscontrol.org/factsheets/JCPOA-at-a-glance'
        },
        {
            citation: 'Energy Information Administration. "The Strait of Hormuz Is the World’s Most Important Oil Transit Chokepoint." Today in Energy, 20 June 2019.',
            url: 'https://www.eia.gov/todayinenergy/detail.php?id=39932'
        },
        {
            citation: 'Heinonen, Olli. "Verifying Iran’s Nuclear Compliance." Belfer Center for Science and International Affairs, 10 June 2014.',
            url: 'https://www.belfercenter.org/publication/olli-heinonens-testimony-verifying-irans-nuclear-compliance'
        },
        {
            citation: 'Holland, Steve, and Jeff Mason. "Trump Reimposes ‘Maximum Pressure’ on Iran, Aims to Drive Oil Exports to Zero." Reuters, 5 Feb. 2025.',
            url: 'https://www.reuters.com/world/us/trump-set-reimpose-maximum-pressure-iran-official-says-2025-02-04/'
        },
        {
            citation: 'International Atomic Energy Agency. "Implementation of the NPT Safeguards Agreement in the Islamic Republic of Iran." IAEA, GOV/2003/75, 10 Nov. 2003.',
            url: 'https://www.iaea.org/sites/default/files/gov2003-75.pdf'
        },
        {
            citation: 'International Atomic Energy Agency. "Verification and Monitoring in the Islamic Republic of Iran in Light of UNSCR 2231 (2015)." IAEA, 2025.',
            url: 'https://www.iaea.org'
        },
        {
            citation: 'International Energy Agency. "Oil Market Report – June 2025." International Energy Agency, 17 June 2025.',
            url: 'https://www.iea.org/reports/oil-market-report-june-2025'
        },
        {
            citation: 'Kim, Dong-young. "Closure of Hormuz Strait Likely to Imperil South Korea’s Energy Lifeline." Aju Press, 23 June 2025.',
            url: 'https://www.ajupress.com/view/20250623095145670'
        },
        {
            citation: 'LaGrone, Sam. "U.S. Strikes 3 Iranian Nuclear Sites Using B-2s, Sub-Launched Tomahawks." USNI News, 22 June 2025.',
            url: 'https://news.usni.org/2025/06/22/u-s-strikes-3-iranian-nuclear-sites-using-b-2s-sub-launched-tomahawks'
        },
        {
            citation: 'Levitt, Matthew. "Hezbollah and the Axis of Resistance." The Washington Institute for Near East Policy, 2023.',
            url: 'https://www.washingtoninstitute.org/policy-analysis/hezbollah-and-axis-resistance'
        },
        {
            citation: 'Lidman, Melanie. "Israel’s Attack on Iran Was Years in the Making. How Did They Get Here?" AP News, 13 June 2025.',
            url: 'https://apnews.com/article/israel-iran-nuclear-netanyahu-hezbollah-hamas-houthis-0e5ae5a36fe89f4df753f049be96322d'
        },
        {
            citation: 'MacAskill, Ewen, and Chris McGreal. "Iranian President Sparks Angger with Call to Wipe Israel off the Map." The Guardian, 27 Oct. 2005.',
            url: 'https://www.theguardian.com/world/2005/oct/27/israel.iran'
        },
        {
            citation: 'Magid, Jacob. "Did the U.S. Just Reset Iran’s Nuclear Clock?" The Times of Israel, 24 June 2025.',
            url: 'https://www.timesofisrael.com/pentagon-says-iran-nuclear-program-set-back-closer-to-2-years-after-us-strikes/'
        },
        {
            citation: 'Marsi, Fadi. "Israel Kills Nuclear Scientists, Strikes Sites in Iran: Who Did It Target?" Al Jazeera, 13 June 2025.',
            url: 'https://www.aljazeera.com/news/2025/6/13/israel-kills-nuclear-scientists-strikes-sites-in-iran-who-did-it-target'
        },
        {
            citation: 'Nuclear Threat Initiative. "Fordow Fuel Enrichment Plant." NTI, 2024.',
            url: 'https://www.nti.org/learn/facilities/fordow-fuel-enrichment-plant/'
        },
        {
            citation: 'PFL Petroleum Services. "PFL Railcar Report 6-23-2025." PFL Petroleum Services, 23 June 2025.',
            url: 'https://pflpetroleum.com/reports/pfl-railcar-report-6-23-2025/'
        },
        {
            citation: 'Rowberry, Ariana. "Sixty Years of ‘Atoms for Peace’ and Iran’s Nuclear Program." Brookings Institution, 18 Dec. 2013.',
            url: 'https://www.brookings.edu/articles/sixty-years-of-atoms-for-peace-and-irans-nuclear-program/'
        },
        {
            citation: 'Sanger, David E., and Mark Mazzetti. "Israel Struck Syrian Nuclear Project, Analysts Say." The New York Times, 14 Oct. 2007.',
            url: 'https://www.nytimes.com/2007/10/14/washington/14weapons.html'
        },
        {
            citation: 'U.S. Department of Defense. "GBU-57A/B Massive Ordnance Penetrator Fact Sheet." U.S. Air Force, 2025.',
            url: 'https://www.af.mil/About-Us/Fact-Sheets/Display/Article/104516/gbu-57a-b-massive-ordnance-penetrator/'
        },
        {
            citation: 'United Nations Security Council. "Resolution 2231 (2015)." United Nations, 20 July 2015.',
            url: 'https://undocs.org/S/RES/2231(2015)'
        },
        {
            citation: 'United States Congress, Senate. "Debate on War Powers Resolution Concerning Military Action Against Iran." 2025.',
            url: 'https://www.congress.gov'
        },
        {
            citation: 'United States Withdrawal from the JCPOA. Wikipedia, last edited 2 Oct. 2025.',
            url: 'https://en.wikipedia.org/wiki/United_States_withdrawal_from_the_Joint_Comprehensive_Plan_of_Action'
        },
        {
            citation: 'Yadlin, Amos. "The Begin Doctrine: The Lessons of Osirak and Deir ez-Zor." INSS Insight, 21 Mar. 2018.',
            url: 'https://www.inss.org.il/publication/the-begin-doctrine-the-lessons-of-osirak-and-deir-ez-zor/'
        },
        {
            citation: 'Zengerle, Patricia. "UN Security Council to Meet Sunday over U.S. Strikes on Iran." Reuters, 22 June 2025.',
            url: 'https://www.reuters.com/world/middle-east/un-security-council-meet-sunday-over-us-strikes-iran-2025-06-22/'
        }
    ];

    return (
        <PageLayout
            title="Works Cited"
            subtitle="A comprehensive list of references and historical sources used in this project."
        >
            <div className="max-w-4xl mx-auto">
                <div className="glass-card-dark-strong rounded-2xl p-8 md:p-12 shadow-2xl">
                    <div className="flex items-center gap-4 mb-8 border-b border-white/10 pb-6">
                        <div className="bg-gold-bright/20 p-3 rounded-xl border border-gold-bright/30">
                            <BookOpen className="w-6 h-6 text-gold-bright" />
                        </div>
                        <h2 className="text-2xl font-bold text-slate-100 font-serif">
                            Bibliography (MLA Format)
                        </h2>
                    </div>

                    <div className="space-y-6">
                        {sources.map((source, index) => (
                            <div
                                key={index}
                                className="group relative pl-8 -indent-8 text-slate-300 hover:text-slate-100 transition-colors duration-200 leading-relaxed"
                            >
                                {source.citation}
                                {source.url !== '#' && (
                                    <a
                                        href={source.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                                        title="Visit Source"
                                    >
                                        <LinkIcon className="w-3 h-3 text-gold-bright" />
                                    </a>
                                )}
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 pt-8 border-t border-white/10 text-center">
                        <p className="text-slate-400 text-sm italic">
                            All citations are formatted according to MLA 9th Edition standards.
                        </p>
                    </div>
                </div>
            </div>
        </PageLayout>
    );
}
