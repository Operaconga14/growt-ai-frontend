import { motion } from "framer-motion"
import Icon from '../shared/Icon';
// import Button from "../shared/Button"
// import Icon from '../shared/Icon';

export default function HeroSection()
{
    // const container = {
    //     hidden: { opacity: 0 },
    //     show: {
    //         opacity: 1,
    //         transition: {
    //             staggerChildren: 0.2,
    //         },
    //     },
    // }

    // const item = {
    //     hidden: { opacity: 0, y: 20 },
    //     show: { opacity: 1, y: 0 },
    // }

    return (
        <>
            <h1 className="fw-bolder text-gradient">Meet Your Personal AI Challenge Coach</h1>
            <p>
                Transform your goals into achievements with personalized AI guidance, progress tracking, and daily motivation to keep you on track.
            </p>
            <div className="buttons">
                <button className="btn btn-primary get-started-btn">
                    Get Started <i className="bi bi-arrow-right"></i>
                </button>
                <button className="btn btn-outline-secondary learn-more-btn">
                    Learn More
                </button>
            </div>

            <section className="stats-section">
                <div className="row">
                    <div className="col-sm-12 col-md col-lg m-1">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="stat-box"
                        >
                            <Icon iconStyle={"active-icon"} name={"bi bi-star-fill stat-icon"} />
                            <h3>10k+</h3>
                            <p>Completed Challenges</p>
                        </motion.div>
                    </div>
                    <div className="col-sm-12 col-md col-lg m-1">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="stat-box"
                        >
                            <Icon iconStyle={"completed-icon"} name={"bi bi-check2-circle stat-icon"} />
                            <h3>87%</h3>
                            <p>Success Rate</p>
                        </motion.div>
                    </div>
                    <div className="col-sm-12 col-md col-lg m-1">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                            className="stat-box"
                        >
                            <Icon name={"bi bi-graph-up-arrow stat-icon"} iconStyle={"current-streak-icon"} />
                            <h3>30k+</h3>
                            <p>Active Users</p>
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    )
}