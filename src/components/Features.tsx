import { CustomCard } from "../shared/Cards"
import styles from "../styles/Card.module.css"

export default function Features() {
    return <div className="container">
        <div className="text-center">
            <h1 className="fw-bolder">Powerful Features to Accelerate Your Growth</h1>
            <small className="text-muted">Our Platform combines cutting-edge AI with proven personal development <br />
                techniques to help you achieve your goals faster
            </small>
        </div>
        <div className="mt-5 m-0 p-0 mb-5">
            <div className="row justify-content-center d-flex gap-4">
                <div className="col-sm-12 col-md-4 col-lg-3">
                    <CustomCard
                        className={`${styles.card} pt-3 shadow-sm`}
                        description="Track your progress with beautiful charts and visualization that keep you motivated"
                        icon={`${styles.icon} bi bi-bar-chart-line`}
                        title="Visual Progress Tracking"
                        titleClassName={`fw-bolder mt-4 ${styles.title}`}
                        descriptionClassName={`small text-muted ${styles.description}`}
                    />
                </div>
                <div className="col-sm-12 col-md-4 col-lg-3">
                    <CustomCard
                        className={`${styles.card} pt-3 shadow-sm`}
                        description="Track your progress with beautiful charts and visualization that keep you motivated"
                        icon={`${styles.icon} bi bi-bar-chart-line`}
                        title="Visual Progress Tracking"
                        titleClassName={`fw-bolder mt-4 ${styles.title}`}
                        descriptionClassName={`small text-muted ${styles.description}`}
                        cardBodyClassName="bg-transparent"
                    />
                </div>
                <div className="col-sm-12 col-md-4 col-lg-3">
                    <CustomCard
                        className={`${styles.card} pt-3 shadow-sm`}
                        description="Track your progress with beautiful charts and visualization that keep you motivated"
                        icon={`${styles.icon} bi bi-bar-chart-line`}
                        title="Visual Progress Tracking"
                        titleClassName={`fw-bolder mt-4 ${styles.title}`}
                        descriptionClassName={`small text-muted ${styles.description}`}
                        cardBodyClassName="bg-transparent"
                    />
                </div>
                <div className="col-sm-12 col-md-4 col-lg-3">
                    <CustomCard
                        className={`${styles.card} pt-3 shadow-sm`}
                        description="Track your progress with beautiful charts and visualization that keep you motivated"
                        icon={`${styles.icon} bi bi-bar-chart-line`}
                        title="Visual Progress Tracking"
                        titleClassName={`fw-bolder mt-4 ${styles.title}`}
                        descriptionClassName={`small text-muted ${styles.description}`}
                        cardBodyClassName="bg-transparent"
                    />
                </div>
                <div className="col-sm-12 col-md-4 col-lg-3">
                    <CustomCard
                        className={`${styles.card} pt-3 shadow-sm`}
                        description="Track your progress with beautiful charts and visualization that keep you motivated"
                        icon={`${styles.icon} bi bi-bar-chart-line`}
                        title="Visual Progress Tracking"
                        titleClassName={`fw-bolder mt-4 ${styles.title}`}
                        descriptionClassName={`small text-muted ${styles.description}`}
                        cardBodyClassName="bg-transparent"
                    />
                </div>
                <div className="col-sm-12 col-md-4 col-lg-3">
                    <CustomCard
                        className={`${styles.card} pt-3 shadow-sm`}
                        description="Track your progress with beautiful charts and visualization that keep you motivated"
                        icon={`${styles.icon} bi bi-bar-chart-line`}
                        title="Visual Progress Tracking"
                        titleClassName={`fw-bolder mt-4 ${styles.title}`}
                        descriptionClassName={`small text-muted ${styles.description}`}
                        cardBodyClassName="bg-transparent"
                    />
                </div>
            </div>
        </div>
    </div >
}