import PropTypes from 'prop-types';
import { useState } from 'react';
import { ShieldCheck, ChevronDown } from 'lucide-react';
import { Tooltip } from 'react-tooltip'

// How many contribution bullets to show before the "Show more" button.
const COLLAPSED_COUNT = 3;

/**
 * One role inside a company card. Renders its own duration, contribution list
 * (collapsed by default) and tech stack, with a timeline rail on the left when
 * the company has more than one role -- the LinkedIn promotion pattern.
 */
const RoleBlock = ({ role, type, duration, location, contributions, techStacks, showRail, isLatest }) => {
    const [expanded, setExpanded] = useState(false);
    const hasMore = contributions.length > COLLAPSED_COUNT;
    const visible = expanded ? contributions : contributions.slice(0, COLLAPSED_COUNT);

    return (
        <div className={'relative ' + (showRail ? 'pl-6' : '')}>
            {showRail && (
                <>
                    {/* vertical rail */}
                    <span className="absolute left-[5px] top-2 bottom-0 w-px bg-zinc-600/70" aria-hidden="true" />
                    {/* node */}
                    <span
                        className={
                            'absolute left-0 top-[6px] w-[11px] h-[11px] rounded-full ring-2 ring-zinc-800 ' +
                            (isLatest ? 'bg-sky-400' : 'bg-zinc-500')
                        }
                        aria-hidden="true"
                    />
                </>
            )}

            <div className="flex flex-wrap items-center gap-x-2">
                <h4 className="text-zinc-100 font-semibold">{role}</h4>
                {isLatest && showRail && (
                    <span className="text-[10px] uppercase tracking-wide bg-sky-400/15 text-sky-300 rounded-full px-2 py-[2px]">
                        Current
                    </span>
                )}
            </div>
            <p className="text-sm text-zinc-400">
                {type} - {duration} | {location}
            </p>

            <ul className="mt-2 mx-5">
                {visible.map((contribution, index) => {
                    const splitAt = contribution.indexOf(':');
                    const hasTitle = splitAt > -1;
                    const title = hasTitle ? contribution.slice(0, splitAt) : '';
                    const desc = hasTitle ? contribution.slice(splitAt + 1) : contribution;
                    return (
                        <li key={index} className="text-sm text-zinc-400 list-disc">
                            {hasTitle && <span className="font-extrabold">{title}</span>}
                            {hasTitle ? ':' : ''}{desc}
                        </li>
                    )
                })}
            </ul>

            {hasMore && (
                <button
                    type="button"
                    onClick={() => setExpanded((v) => !v)}
                    aria-expanded={expanded}
                    className="mt-2 ml-5 inline-flex items-center gap-1 text-sm text-sky-400 hover:text-sky-300 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 rounded"
                >
                    {expanded
                        ? 'Show less'
                        : `Show ${contributions.length - COLLAPSED_COUNT} more`}
                    <ChevronDown
                        size={16}
                        className={'transition-transform ' + (expanded ? 'rotate-180' : '')}
                    />
                </button>
            )}

            {techStacks && techStacks.length > 0 && (
                <div className="mt-3 flex items-center flex-wrap gap-3 ring-2 ring-inset ring-zinc-50/10 rounded-2xl p-3 hover:bg-zinc-800 transition-colors group">
                    {techStacks.map((techStack) => (
                        <figure
                            key={techStack.label}
                            className="bg-zinc-700/50 rounded-lg overflow-hidden w-9 h-9 p-2 group-hover:bg-zinc-900 transition-colors"
                            title={techStack.label}
                        >
                            <img src={techStack.imgSrc} width={32} height={32} alt={techStack.label} />
                        </figure>
                    ))}
                </div>
            )}
        </div>
    )
}

RoleBlock.propTypes = {
    role: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    contributions: PropTypes.arrayOf(PropTypes.string).isRequired,
    techStacks: PropTypes.array,
    showRail: PropTypes.bool,
    isLatest: PropTypes.bool,
}

/**
 * A company card. `roles` is one entry per position held there, newest first.
 * A single-role company renders exactly as before; multiple roles render as a
 * promotion timeline under one logo.
 */
const ExperienceCard = ({ companyName, companyLogo, verifyLink, roles, classes }) => {
    const multiRole = roles.length > 1;
    const totalSpan = multiRole
        ? `${roles[roles.length - 1].duration.split(' - ')[0]} - ${roles[0].duration.split(' - ')[1]}`
        : null;

    return (
        <div className={"relative p-4 rounded-2xl bg-zinc-800 hover:bg-zinc-700/50 active:bg-zinc-700/60 ring-1 ring-inset ring-zinc-50/5 transition-colors flex md:flex-row flex-col justify-start items-center md:items-start space-y-2 md:space-x-10 gap-3 " + classes}>

            <figure className="img-box aspect-square rounded-lg mb-4 md:h-[12rem] md:w-[12rem] h-[8rem] w-[8rem] shrink-0">
                <img src={companyLogo} alt={companyName} loading='lazy' className="img-cover" />
            </figure>

            <div className="flex flex-col items-start justify-start gap-y-2 w-[95%] md:w-[75%]">
                <h3 className="title-1 mb-1 flex justify-start items-center">
                    {companyName}
                    <a href={verifyLink} target='_blank' rel="noreferrer" className="hover:cursor-pointer p-1 ml-1 rounded-full hover:bg-zinc-700">
                        <ShieldCheck id={'verified-' + companyName.replace(/\W/g, '')} className='focus:outline-none' />
                        <Tooltip anchorSelect={'#verified-' + companyName.replace(/\W/g, '')} place="top">
                            <div className="text-sm">Click to verify!</div>
                        </Tooltip>
                    </a>
                </h3>

                {multiRole && (
                    <p className="text-xs text-zinc-500 -mt-1 mb-1">
                        {roles.length} positions &middot; {totalSpan}
                    </p>
                )}

                <div className={multiRole ? 'space-y-6 w-full' : 'w-full'}>
                    {roles.map((r, i) => (
                        <RoleBlock
                            key={r.role + r.duration}
                            role={r.role}
                            type={r.type}
                            duration={r.duration}
                            location={r.location}
                            contributions={r.contributions}
                            techStacks={r.tech_stacks}
                            showRail={multiRole}
                            isLatest={multiRole && i === 0}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

ExperienceCard.propTypes = {
    companyName: PropTypes.string.isRequired,
    companyLogo: PropTypes.string.isRequired,
    verifyLink: PropTypes.string,
    roles: PropTypes.array.isRequired,
    classes: PropTypes.string,
}

export default ExperienceCard;
