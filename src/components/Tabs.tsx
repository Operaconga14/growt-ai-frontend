import { useEffect } from "react";

export default function Tabs()
{


    return (
        <div>
            <ul className="nav nav-tabs" id="myTabs" role="tablist">
                <li className="nav-item" role="presentation">
                    <a
                        className="nav-link active"
                        id="home-tab"
                        data-bs-toggle="tab"
                        href="#home"
                        role="tab"
                        aria-controls="home"
                        aria-selected="true"
                    >
                        Home
                    </a>
                </li>
                <li className="nav-item" role="presentation">
                    <a
                        className="nav-link"
                        id="profile-tab"
                        data-bs-toggle="tab"
                        href="#profile"
                        role="tab"
                        aria-controls="profile"
                        aria-selected="false"
                    >
                        Profile
                    </a>
                </li>
            </ul>
            <div className="tab-content mt-3" id="myTabContent">
                <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                    <p>This is the Home tab.</p>
                </div>
                <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                    <p>This is the Profile tab.</p>
                </div>
            </div>
        </div>
    )
}
