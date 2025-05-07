import HeroSection from '../components/Hero';
import HomeFetures from '../components/Features';
import Testimonial from '../components/Testimonial';
import Button from '../shared/Button';

export default function Home()
{
    return (
        <>
            <div className="home-page hero px-5 py-5">
                <HeroSection />
            </div>
            <div className="mt-5 pt-5">
                <HomeFetures />
            </div>
            <div className="home-page mt-5 mt-5 mb-5 bg-blue-light">
                <Testimonial />
            </div>
            <section className='home-page mt-5 pt-5 mb-5'>
                <div className="container text-center">
                    <div className="card text-white border-0 shadow-sm bg-gradient-primary">
                        <div className="card-body pt-5">
                            <h1 className='fw-bolder fs-3'>Ready to transform Your Goals into Reality?</h1>
                            <small className='wrap-wrap px-5'>Join thousands of users who are achiving their personal growth goals with the help of AI coaching</small>
                            <div className="mt-3">
                                <Button buttonText={'Start Your Journey'} style={[ { buttonStyle: 'btn-primary btn' }, { iconStyle: "bi bi-arrow-right text-danger ms-2" } ]} onClick={() => { }} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}