import Icon from '../shared/Icon';
import Profile from '../shared/Profile';
export default function Testimonial()
{
    return (
        <div className="container py-5">
            <div className="text-center">
                <h2 className='fw-bolder'>What Our Users Say</h2>
                <small className='text-muted'>Join thousands of user transformed their lives with AI-Powered challenge plantform</small>
            </div>
            <div className="mt-5">
                <div className="row m-0">
                    <div className="col-sm-12 col-md-6 col-6">
                        <div className="card">
                            <div className="card-body">
                                <div className="d-flex">
                                    <Icon iconStyle={''} name={'bi bi-star text-warning'} />
                                    <Icon iconStyle={''} name={'bi bi-star text-warning'} />
                                    <Icon iconStyle={''} name={'bi bi-star text-warning'} />
                                    <Icon iconStyle={''} name={'bi bi-star text-warning'} />
                                    <Icon iconStyle={''} name={'bi bi-star text-warning'} />
                                </div>
                                <div className="description mt-3">
                                    <small className="text-muted fs-6 small wrap-wrap">
                                        "GrowthAI has completely transformed my fitness journey, The AI coach keeps me motivated even on my toughest day"
                                    </small>
                                    <div className="px-3 mt-4">
                                        <Profile username={'Opera Conga'} subscription={'Fitness Enthusian'} imageUrl={''} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}