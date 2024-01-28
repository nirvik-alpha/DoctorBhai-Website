import React from 'react'
import aboutImg from '../../assets/images/b.jpg'
import aboutcardimg from '../../assets/images/about-card.png'
import { Link } from 'react-router-dom'
const About = () => {
    return <section>

        <div className='container'>

            <div className='flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row'>
                {/*--------about ------------  */}

                <div className='relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1'>
                    <img src={aboutImg} alt='' />

                    <div className='absolute z-20 bottom-4 w-[200px] md:w-[300px] right-[-30%] md:right-[-7%]
                    lg:right-[22%]'>
                        <img src={aboutcardimg} alt='' />
                    </div>
                </div>

                {/* ------- about content--------- */}

                <div className='w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2'>
                    <h2 className='heading'>Honored to Serve as Your Trusted Healing Companion</h2>
                    <p className='text__para'>Embarking on this medical journey has been a profound and
                        rewarding experience. Every step, every patient, and every moment has contributed to
                        a profound sense of purpose and fulfillment. As a healthcare professional,
                        I am deeply committed to providing compassionate and personalized care.
                    </p>
                    <p className='text__para mt-[30px]'>The privilege of being entrusted with your health
                        is one that I hold with great responsibility and gratitude. Together, let's continue
                        this journey towards well-being, fostering a healthier and happier community.
                        Proud to be your dedicated healing partner on this remarkable path
                    </p>

                    {/* <Link to='/'><button className='btn'>fasaf</button></Link>
                     */}

                    <Link to='/'> <button className='btn'>Learn More</button>
                    </Link>

                </div>



            </div>

        </div>

    </section>

};

export default About
