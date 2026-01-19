import {ArticleDetails} from "./ArticleDetails.tsx";
import type {PanelProps} from "./PanelProps.ts";

export function TopPanel({ article }: PanelProps) {
    return (
        <div className="top-panel">
            <ArticleDetails article={article}/>
        </div>
    );
}