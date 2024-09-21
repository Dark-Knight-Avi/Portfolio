import React from 'react'
import '../styles/Home.css'
import data from '../data/resume.json'

const Intro = () => {
    return (
        <div className="flex flex-col text-white mt-5">
            <h2 className="headline-1 max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] mt-5 mb-8 lg:mb-10">
                {data.portfolio_hero_text}
            </h2>
            <p className="tracking-in-expand lg:text-[35px] md:text-[30px] text-[20px] content my-5 tracking-wide">
                <div className="content__container">
                    <p className="content__container__text headline-3">I'm a</p>
                    <ul className="content__container__list lg:pl-[100px] md:pl-[78px] pl-[55px] headline-3">
                        {data.profile_titles.map((title, index) => (<li key={index} className="content__container__list__item">
                            {title}
                        </li>))}
                    </ul>
                </div>
            </p>
        </div>
    )
}

export default Intro
