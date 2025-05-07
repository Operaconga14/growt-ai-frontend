import { motion } from 'framer-motion';
import type { Challenge } from '../interface/Challenge';
import CustomButton from '../shared/CustomButton';
import { useNavigate } from 'react-router-dom';
export default function Dashboard()
{
    const navigate = useNavigate()
    const challenges: Challenge[] = [
        {
            id: 1,
            category: "Mindfulness",
            title: "Morning Meditation",
            description: "Start each day with 10 minutes of mindfulness meditation",
            progress: 70,
            daysLeft: 9,
            streak: 7,
        },
        {
            id: 2,
            category: "Learning",
            title: "Learn Spanish",
            description: "Practice Spanish vocabulary for 15 minutes daily",
            progress: 45,
            daysLeft: 15,
            streak: 5,
        },
        {
            id: 3,
            category: "Fitness",
            title: "Fitness Challenge",
            description: "Complete 30 push-ups, 30 sit-ups, and 30 squats daily",
            progress: 90,
            daysLeft: 3,
            streak: 12,
        },
        {
            id: 4,
            category: "Personal Growth",
            title: "Reading Habit",
            description: "Read 20 pages of a book every day",
            progress: 60,
            daysLeft: 12,
            streak: 6,
        },
        {
            id: 5,
            category: "Mindfulness",
            title: "Gratitude Journal",
            description: "Write down 3 things you're grateful for each day",
            progress: 30,
            daysLeft: 21,
            streak: 3,
        },
        {
            id: 6,
            category: "Learning",
            title: "Coding Project",
            description: "Spend 30 minutes on your personal coding project",
            progress: 80,
            daysLeft: 6,
            streak: 8,
        },
    ]

    const getCategoryColor = ( category: string ): string =>
    {
        switch ( category )
        {
            case "Mindfulness":
                return "#9C27B0"; // Purple
            case "Learning":
                return "#4CAF50"; // Green
            case "Fitness":
                return "#FF5722"; // Orange
            case "Personal Growth":
                return "#E91E63"; // Pink
            default:
                return "#2196F3"; // Blue
        }
    }
    return (
        <div className="dashboard-content home-page px-3">
            <header>
                <h1>Dashboard</h1>
                <p>Track your progress and manage your challenges</p>
                <div className="header-actions">
                    <button className="btn btn-light">
                        <i className="bi bi-bell"></i>
                    </button>
                    <button className="btn btn-light">
                        <i className="bi bi-calendar"></i>
                    </button>
                    <div className="search-bar">
                        <input type="text" placeholder="Search challenges..." />
                    </div>
                </div>
            </header>
            <section className="filters">
                <button className="btn btn-outline-secondary">Filter</button>
                <button className="btn btn-primary">All Challenges</button>
                <button className="btn btn-outline-secondary">In Progress</button>
                <button className="btn btn-outline-secondary">Completed</button>
                <button className="btn btn-outline-secondary">Upcoming</button>
            </section>
            <section className="stats">
                <div className="stat-box">
                    <h3>Active Challenges</h3>
                    <p>5</p>
                    <i className="bi bi-arrow-up-circle-fill active-icon"></i>
                </div>
                <div className="stat-box">
                    <h3>Completed</h3>
                    <p>12</p>
                    <i className="bi bi-check2-circle completed-icon"></i>
                </div>
                <div className="stat-box">
                    <h3>Current Streak</h3>
                    <p>7 days</p>
                    <i className="bi bi-calendar-event current-streak-icon"></i>
                </div>
                <div className="stat-box">
                    <h3>Next Milestone</h3>
                    <p>2 days</p>
                    <i className="bi bi-person-fill next-milestone-icon"></i>
                </div>
            </section>
            <section className="challenges">
                <h2>Active Challenges</h2>
                <div className="challenge-grid">
                    {challenges.map( ( challenge ) => (
                        <motion.div
                            key={challenge.id}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: challenge.id * 0.1 }}
                            className="challenge-card"
                        >
                            <div className="category-badge" style={{ backgroundColor: getCategoryColor( challenge.category ) }}>
                                {challenge.category}
                            </div>
                            <h3>{challenge.title}</h3>
                            <p>{challenge.description}</p>
                            <div className="progress-bar">
                                <div
                                    className="progress-fill"
                                    style={{ width: `${challenge.progress}%`, backgroundColor: getCategoryColor( challenge.category ) }}
                                ></div>
                            </div>
                            <div className="progress-details">
                                <span>
                                    <i className="bi bi-clock"></i> {challenge.daysLeft} days left
                                </span>
                                <span>
                                    <i className="bi bi-fire-fill"></i> {challenge.streak} day streak
                                </span>
                            </div>
                            <button className="btn btn-outline-secondary">Check In</button>
                        </motion.div>
                    ) )}
                </div>
                <CustomButton styles={[ { buttonStyle: "btn btn-gradient new-challenge-btn p-0 px-3 py-2" }, { iconStyle: "bi bi-plus-circle text-white fs-3 p-0 m-0" } ]} text={''} onClick={() => navigate( "/challenges/new" )} />
            </section>
        </div>
    )
}