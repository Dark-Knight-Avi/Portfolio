import PropTypes from 'prop-types';
import { ShieldCheck } from 'lucide-react';
import { Tooltip } from 'react-tooltip'

const ExperienceCard = ({
    companyName,
    companyLogo,
    role,
    type,
    duration,
    location,
    contributions,
    techStacks,
    verifyLink,
    classes
}) => {
    return (
        <div className={"relative p-4 rounded-2xl bg-zinc-800 hover:bg-zinc-700/50 active:bg-zinc-700/60 ring-1 ring-inset ring-zinc-50/5 transition-colors flex md:flex-row flex-col justify-start items-center space-y-2 space-x-3 md:space-x-10 gap-3" + classes}>

            <figure className="img-box aspect-square rounded-lg mb-4 md:h-[12rem] md:w-[12rem] h-[8rem] w-[8rem]">
                <img
                    src={companyLogo}
                    alt={companyName}
                    loading='lazy'
                    className="img-cover"
                />
            </figure>

            <div className="flex flex-col items-start justify-start gap-y-2 w-[75%]">
                <h3 className="title-1 mb-3 flex justify-start items-center">
                    {role} at {companyName}
                    <a href={verifyLink} target='_blank' className="hover:cursor-pointer p-1 ml-1 rounded-full hover:bg-zinc-700">
                        <ShieldCheck id='verified' className='focus:outline-none' />
                        <Tooltip anchorSelect="#verified" place="top" >
                            <div className="text-sm">Click to verify!</div>
                        </Tooltip>
                    </a>
                </h3>
                <p className="text-sm text-zinc-400">
                    {type} - {duration} | {location}
                </p>

                <ul className="mt-2 mx-5">
                    {contributions.map((contribution, index) => {
                        const title = contribution.split(':')[0]
                        const desc = contribution.split(':')[1]
                        return (
                            <li key={index} className="text-sm text-zinc-400 list-disc">
                                <span className="font-extrabold">{title}</span>: {desc}
                            </li>
                        )
                    })}
                </ul>
                <div className={'flex items-center gap-3 ring-2 ring-inset ring-zinc-50/10 rounded-2xl p-3 hover:bg-zinc-800 transition-colors group ' + classes}>
                    {techStacks.map((techStack, index) => (<figure key={techStack.label} className="bg-zinc-700/50 rounded-lg overflow-hidden w-9 h-9 p-2 group-hover:bg-zinc-900 transition-colors">
                        <img
                            src={techStack.imgSrc}
                            width={32}
                            height={32}
                            alt={techStack.label}
                        />
                    </figure>))}
                </div>
            </div>
        </div>
    )
}

ExperienceCard.propTypes = {
    companyName: PropTypes.string.isRequired,
    companyLogo: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    contributions: PropTypes.arrayOf(PropTypes.string).isRequired,
    techStacks: PropTypes.array,
    classes: PropTypes.string,
    verifyLink: PropTypes.string
}

export default ExperienceCard;
