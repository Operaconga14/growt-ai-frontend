import CardWithIcons from "../shared/CardWithIcons";

export default function HomeFetures()
{
    return (
        <section className="features-section container">
            <div className="text-center">
                <h2 className='fw-bolder'>Powerful Features to Accelerate Your Growth</h2>
                <p className='text-muted'>
                    Our platform combines cutting-edge AI with proven personal development techniques to help you achieve your goals faster.
                </p>
            </div>
            <div className="row mt-4 justify-content-center">
                <div className="col-sm-12 col-md-5 col-lg-3 m-1">
                    <CardWithIcons
                        styles={[
                            { iconStyle: 'bg-gradient-primary p-2 rounded text-white fw-bolder' },
                            { cardStyle: 'card border-0 shadow-sm bg-blue-light p-0 text-start' },
                            { cardBodyStyle: 'card-body pt-4' },
                            { titleStyle: 'fw-bolder fs-6' },
                            { descriptionStyle: 'small text-muted py-0 my-0' },
                            { otherStyle: 'mt-4' }
                        ]}
                        texts={[
                            { titleText: 'Virtual Progress Tracking' },
                            { descriptionText: 'Hello' },
                            { iconName: 'bi bi-bar-chart-line' }
                        ]} />
                </div>
                <div className="col-sm-12 col-md-5 col-lg-3 m-1">
                    <CardWithIcons styles={[
                        { iconStyle: 'bg-gradient-primary p-2 rounded text-white fw-bolder' },
                        { cardStyle: 'card border-0 shadow-sm bg-blue-light p-0 text-start' },
                        { cardBodyStyle: 'card-body pt-4' },
                        { titleStyle: 'fw-bolder fs-6' },
                        { descriptionStyle: 'small text-muted py-0 my-0' },
                        { otherStyle: 'mt-4' }
                    ]} texts={[
                        { titleText: 'AI Coachimg Assistance' },
                        { descriptionText: '' },
                        { iconName: 'bi bi-chat' }
                    ]} />
                </div>
                <div className="col-sm-12 col-md-5 col-lg-3 m-1">
                    <CardWithIcons styles={[
                        { iconStyle: 'bg-gradient-primary p-2 rounded text-white fw-bolder' },
                        { cardStyle: 'card border-0 shadow-sm bg-blue-light p-0 text-start' },
                        { cardBodyStyle: 'card-body pt-4' },
                        { titleStyle: 'fw-bolder fs-6' },
                        { descriptionStyle: 'small text-muted py-0 my-0' },
                        { otherStyle: 'mt-4' }
                    ]} texts={[
                        { titleText: 'Smart Scheduling' },
                        { descriptionText: '' },
                        { iconName: 'bi bi-calendar' }
                    ]} />
                </div>
                <div className="col-sm-12 col-md-5 col-lg-3 m-1">
                    <CardWithIcons styles={[
                        { iconStyle: 'bg-gradient-primary p-2 rounded text-white fw-bolder' },
                        { cardStyle: 'card border-0 shadow-sm bg-blue-light p-0 text-start' },
                        { cardBodyStyle: 'card-body pt-4' },
                        { titleStyle: 'fw-bolder fs-6' },
                        { descriptionStyle: 'small text-muted py-0 my-0' },
                        { otherStyle: 'mt-4' }
                    ]} texts={[
                        { titleText: 'Achievement System' },
                        { descriptionText: '' },
                        { iconName: 'bi-award bi' }
                    ]} />
                </div>
                <div className="col-sm-12 col-md-5 col-lg-3 m-1">
                    <CardWithIcons styles={[
                        { iconStyle: 'bg-gradient-primary p-2 rounded text-white fw-bolder' },
                        { cardStyle: 'card border-0 shadow-sm bg-blue-light p-0 text-start' },
                        { cardBodyStyle: 'card-body pt-4' },
                        { titleStyle: 'fw-bolder fs-6' },
                        { descriptionStyle: 'small text-muted py-0 my-0' },
                        { otherStyle: 'mt-4' }
                    ]} texts={[
                        { titleText: 'Smart Reminders' },
                        { descriptionText: '' },
                        { iconName: 'bi-bell bi' }
                    ]} />
                </div>
                <div className="col-sm-12 col-md-5 col-lg-3 m-1">
                    <CardWithIcons styles={[
                        { iconStyle: 'bg-gradient-primary p-2 rounded text-white fw-bolder' },
                        { cardStyle: 'card border-0 shadow-sm bg-blue-light p-0 text-start' },
                        { cardBodyStyle: 'card-body pt-4' },
                        { titleStyle: 'fw-bolder fs-6' },
                        { descriptionStyle: 'small text-muted py-0 my-0' },
                        { otherStyle: 'mt-4' }
                    ]} texts={[
                        { titleText: 'Growth Analytics' },
                        { descriptionText: 'Get insigth into your patterns and progress with detailed analytics' },
                        { iconName: 'bi-graph-up-arrow bi' }
                    ]} />
                </div>
            </div>
        </section>
    )
}