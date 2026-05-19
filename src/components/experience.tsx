'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';
import SectionHeading from './section-heading';
import {
    desktopExperienceItems,
    experiencesData,
    ExperienceIcon,
    ExperienceItem,
    intelCloudGroup,
} from '@/lib/data';
import { SiIntel } from 'react-icons/si';
import { PiStudent } from 'react-icons/pi';
import { LuGraduationCap } from 'react-icons/lu';
import { CgWorkAlt } from 'react-icons/cg';

const experienceIcons: Record<ExperienceIcon, React.ReactNode> = {
    intel: <SiIntel className="h-5 w-5 text-gray-700" aria-hidden />,
    graduation: <LuGraduationCap className="h-5 w-5 text-gray-700" aria-hidden />,
    intern: <PiStudent className="h-5 w-5 text-gray-700" aria-hidden />,
    work: <CgWorkAlt className="h-5 w-5 text-gray-700" aria-hidden />,
};

const fadeInAnimationVariants = {
    initial: { opacity: 0, y: 40 },
    animate: (index: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: 0.04 * index },
    }),
};

const cardClassName =
    'bg-gray-100 border border-black/5 rounded-lg px-6 py-5 text-left';

function ExperienceIconBadge({ icon }: { icon: ExperienceIcon }) {
    return (
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white border border-black/10">
            {experienceIcons[icon]}
        </span>
    );
}

function DatePill({ date }: { date: string }) {
    return (
        <span className="inline-block rounded-full bg-white border border-black/10 px-3 py-1 text-sm font-semibold text-gray-600">
            {date}
        </span>
    );
}

function ExperienceDetails({ item }: { item: ExperienceItem }) {
    if ('bullets' in item && item.bullets) {
        return (
            <ul className="mt-2 list-disc space-y-2 pl-5 text-gray-700 leading-relaxed">
                {item.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                ))}
            </ul>
        );
    }

    if ('description' in item && item.description) {
        return (
            <p className="mt-2 text-gray-700 leading-relaxed">{item.description}</p>
        );
    }

    return null;
}

function ExperienceCard({ item }: { item: ExperienceItem }) {
    return (
        <article className={cardClassName}>
            <div className="flex gap-3 items-start">
                <ExperienceIconBadge icon={item.icon} />
                <div className="min-w-0 flex-1">
                    <h3 className="font-semibold text-gray-900">{item.title}</h3>
                    <p className="text-gray-800">{item.location}</p>
                    <ExperienceDetails item={item} />
                </div>
            </div>
        </article>
    );
}

function IntelCloudGroupCard() {
    return (
        <article className={cardClassName}>
            <header className="mb-6 border-b border-black/5 pb-4">
                <div className="flex gap-3 items-center">
                    <ExperienceIconBadge icon="intel" />
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900">
                            {intelCloudGroup.employer}
                        </h3>
                        <p className="text-gray-700 font-medium">{intelCloudGroup.headline}</p>
                    </div>
                </div>
            </header>
            <ul className="space-y-8">
                {intelCloudGroup.roles.map((role) => (
                    <li
                        key={role.title}
                        className="border-l-4 border-gray-400 pl-4 sm:pl-5"
                    >
                        <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
                            <h4 className="font-semibold text-gray-900">{role.title}</h4>
                            <span className="text-sm font-semibold text-gray-500 shrink-0">
                                {role.date}
                            </span>
                        </div>
                        <ExperienceDetails item={role} />
                    </li>
                ))}
            </ul>
        </article>
    );
}

function DesktopSingleCard({ item }: { item: ExperienceItem }) {
    return (
        <article className={cardClassName}>
            <div className="flex gap-3 items-start">
                <ExperienceIconBadge icon={item.icon} />
                <div className="min-w-0 flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                        <h3 className="font-semibold text-gray-900">{item.title}</h3>
                        <span className="text-sm font-semibold text-gray-500 shrink-0">
                            {item.date}
                        </span>
                    </div>
                    <p className="text-gray-800 mt-1">{item.location}</p>
                    <ExperienceDetails item={item} />
                </div>
            </div>
        </article>
    );
}

function MobileExperienceList() {
    return (
        <ul className="lg:hidden flex flex-col gap-8 max-w-[45rem] mx-auto px-4">
            {experiencesData.map((item, index) => (
                <motion.li
                    key={`${item.title}-${item.date}`}
                    variants={fadeInAnimationVariants}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    custom={index}
                    className="flex flex-col gap-3"
                >
                    <DatePill date={item.date} />
                    <ExperienceCard item={item} />
                </motion.li>
            ))}
        </ul>
    );
}

function DesktopExperienceList() {
    return (
        <ul className="hidden lg:flex flex-col gap-8 max-w-[45rem] mx-auto px-4">
            {desktopExperienceItems.map((entry, index) => (
                <motion.li
                    key={
                        entry.type === 'group'
                            ? entry.employer
                            : `${entry.title}-${entry.date}`
                    }
                    variants={fadeInAnimationVariants}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    custom={index}
                >
                    {entry.type === 'group' ? (
                        <IntelCloudGroupCard />
                    ) : (
                        <DesktopSingleCard item={entry} />
                    )}
                </motion.li>
            ))}
        </ul>
    );
}

export default function Experience() {
    const { ref } = useSectionInView('Experience', 0.3);

    return (
        <section
            ref={ref}
            id="experience"
            className="mb-28 z-10 scroll-mt-28 sm:mb-40 mt-28"
        >
            <div className="text-center mb-10">
                <SectionHeading title="My Experience" />
            </div>
            <MobileExperienceList />
            <DesktopExperienceList />
        </section>
    );
}
