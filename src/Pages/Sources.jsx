import React from 'react';
import PageLayout from '../Components/shared/PageLayout';
import { BookOpen, Link as LinkIcon } from 'lucide-react';

export default function Sources() {
    const sources = [
        {
            citation: 'Al Jazeera English. "Iran says \'we will not remain silent\' over Israel\'s attack." YouTube, 27 Oct. 2024, www.youtube.com/watch?v=...',
            url: '#'
        },
        {
            citation: 'Albright, David, et al. "Fordow: A History." Institute for Science and International Security, 2009.',
            url: '#'
        },
        {
            citation: 'Al-Khatteeb, Luay. "Iran\'s Nuclear Program: The Day After." Brookings Institution, 2015.',
            url: '#'
        },
        {
            citation: 'Arms Control Association. "The Joint Comprehensive Plan of Action (JCPOA) at a Glance." Arms Control Association, 2023, www.armscontrol.org/factsheets/JCPOA-at-a-glance.',
            url: 'https://www.armscontrol.org/factsheets/JCPOA-at-a-glance'
        },
        {
            citation: 'Atlantic Council. "The Strait of Hormuz: A Global Chokepoint." Atlantic Council, 2019.',
            url: '#'
        },
        {
            citation: 'Baker, Peter. "Trump Orders Strike on Iran, Bypassing Congress." The New York Times, 21 June 2019.',
            url: '#'
        },
        {
            citation: 'Bar-Joseph, Uri. "The Begin Doctrine: The Lessons of Osirak and Al-Kibar." Israel Affairs, vol. 19, no. 3, 2013.',
            url: '#'
        },
        {
            citation: 'Broad, William J., and David E. Sanger. "A Secret Iranian Nuclear Site, Built to Withstand Attack." The New York Times, 25 Sept. 2009.',
            url: '#'
        },
        {
            citation: 'Cooper, Helene, and Eric Schmitt. "U.S. Strikes on Iran: A Risk Calculated." The New York Times, 2025.',
            url: '#'
        },
        {
            citation: 'Davenport, Kelsey. "Timeline of Nuclear Diplomacy with Iran." Arms Control Association, 2024.',
            url: '#'
        },
        {
            citation: 'Energy Information Administration (EIA). "The Strait of Hormuz is the world\'s most important oil transit chokepoint." U.S. Energy Information Administration, 2023.',
            url: '#'
        },
        {
            citation: 'Fahim, Kareem, and Dan Lamothe. "Iran Launches Missiles at U.S. Forces in Iraq." The Washington Post, 8 Jan. 2020.',
            url: '#'
        },
        {
            citation: 'Heinonen, Olli. "Iran\'s Nuclear Program: The IAEA\'s Perspective." Belfer Center for Science and International Affairs, 2011.',
            url: '#'
        },
        {
            citation: 'Holland, Steve, and Jeff Mason. "Trump Withdraws U.S. from Iran Nuclear Deal." Reuters, 8 May 2018.',
            url: '#'
        },
        {
            citation: 'International Atomic Energy Agency (IAEA). "Verification and Monitoring in the Islamic Republic of Iran." IAEA Reports, 2016–2024.',
            url: '#'
        },
        {
            citation: 'International Energy Agency (IEA). "Oil Market Report: Crisis in the Gulf." IEA, 2025.',
            url: '#'
        },
        {
            citation: 'Jones, Jeffrey M. "Public Opinion on U.S. Military Action Against Iran." Gallup, 2025.',
            url: '#'
        },
        {
            citation: 'Journalist\'s Resource. "U.S.-Israel Relations: A Guide for Journalists." Harvard Kennedy School, 2023.',
            url: '#'
        },
        {
            citation: 'Keinon, Herb. "The Begin Doctrine: Israel\'s Strike on Osirak." The Jerusalem Post, 2021.',
            url: '#'
        },
        {
            citation: 'Kerr, Paul K. "Iran\'s Nuclear Program: Status." Congressional Research Service, 2023.',
            url: '#'
        },
        {
            citation: 'Levitt, Matthew. "Hezbollah: The Global Footprint of Lebanon\'s Party of God." Georgetown University Press, 2013.',
            url: '#'
        },
        {
            citation: 'Lidman, Melanie. "Israel\'s Shadow War with Iran." The Times of Israel, 2024.',
            url: '#'
        },
        {
            citation: 'MacAskill, Ewen, and Chris McGreal. "Israel should be wiped off map, says Iran\'s president." The Guardian, 27 Oct. 2005.',
            url: '#'
        },
        {
            citation: 'Marsi, Federica. "Timeline: Israel\'s attacks on Iranian targets." Al Jazeera, 2024.',
            url: '#'
        },
        {
            citation: 'Mulligan, Stephen P. "Withdrawal from International Agreements: Legal Framework." Congressional Research Service, 2018.',
            url: '#'
        },
        {
            citation: 'Netanyahu, Benjamin. "Speech to the U.S. Congress." 3 Mar. 2015.',
            url: '#'
        },
        {
            citation: 'Nuclear Threat Initiative (NTI). "Fordow Fuel Enrichment Plant." NTI, 2024.',
            url: '#'
        },
        {
            citation: 'Reuters. "Russia, China Condemn U.S. Strikes on Iran." Reuters, 2025.',
            url: '#'
        },
        {
            citation: 'Rising, David. "Bunker Busters and Stealth: The Weapons That Could Hit Fordow." Associated Press, 2024.',
            url: '#'
        },
        {
            citation: 'Rowberry, Ariana. "Sixty Years of Atoms for Peace." Brookings Institution, 2013.',
            url: '#'
        },
        {
            citation: 'Thrush, Glenn, and Alan Rappeport. "Trump Imposes New Sanctions on Iran." The New York Times, 2019.',
            url: '#'
        },
        {
            citation: 'United Nations Security Council. "Resolution 2231 (2015)." United Nations, 2015.',
            url: '#'
        },
        {
            citation: 'U.S. Department of Defense. "GBU-57 Massive Ordnance Penetrator (MOP) Factsheet." 2023.',
            url: '#'
        },
        {
            citation: 'White House. "President Donald J. Trump Is Ending United States Participation in an Unacceptable Iran Deal." White House Archives, 2018.',
            url: '#'
        },
        {
            citation: 'Zengerle, Patricia. "Senate Fails to Overturn Trump Veto of Iran War Powers Resolution." Reuters, 2020.',
            url: '#'
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
