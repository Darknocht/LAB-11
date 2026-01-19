import {TopPanel} from "./TopPanel.tsx";
import {BottomPanel} from "./BottomPanel.tsx";

export function MainPanel() {
    return (
        <div className="main-panel">
            <div className="main-content">
                <p>MainPanel</p>
            </div>
            <div className="side-panels">
                <TopPanel/>
                <BottomPanel/>
            </div>
        </div>
    );
}