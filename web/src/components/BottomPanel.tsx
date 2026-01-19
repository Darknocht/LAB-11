import {ArticleDetails} from "./ArticleDetails.tsx";
import type {PanelProps} from "./PanelProps.ts";

export function BottomPanel({ article }: PanelProps) {
    return (
        <div className="bottom-panel">
            <ArticleDetails article={article}/>
        </div>
    );
}