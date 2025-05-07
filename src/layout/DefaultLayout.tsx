import Dashboard from '../pages/Dashboard';
import Home from '../pages/Home';
import { useSidebarStore } from '../services/useSidebarStore';
import Sidebar from './Sidebard';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
export default function DefaultLayout()
{
    const isOpen = useSidebarStore( ( state ) => state.isOpen )
    return (
        <BrowserRouter>
            <div className="d-flex flex-column min-vh-100">

                {/* Sidebar */}
                <Sidebar />

                {/* Main content */}
                <main
                    className="pt-4 px-3"
                    style={{
                        transition: 'margin-left 0.3s ease',
                        marginLeft: isOpen ? '240px' : '0', // Apply margin when sidebar is open
                    }}
                >
                    <div className="container-fluid home-page min-vh-100" style={{ marginTop: "-24px", marginLeft: "-28px" }}>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/dashboard" element={<Dashboard />} />
                            <Route path="/challenges" element={<h2>My Challenges</h2>} />
                            <Route path="/challenges/new" element={<h2>Add Challenge</h2>} />
                            <Route path="/progress" element={<h2>Progress</h2>} />
                            <Route path="/assistant" element={<h2>AI Assistant</h2>} />
                            <Route path="/settings" element={<h2>Settings</h2>} />
                        </Routes>
                    </div>
                </main>

            </div>
        </BrowserRouter>
    )
}
