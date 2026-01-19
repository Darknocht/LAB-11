import type {PanelProps} from "./PanelProps.ts";

export function ArticleDetails({ article }: PanelProps){
    return (
        <div className="article-details">
            {article ? (
                <div>
                    <h4>Details (Top)</h4>
                    <p><strong>Name:</strong> {article.name}</p>
                    <p><strong>Price:</strong> {article.price}€</p>
                    <p><strong>Description:</strong> {article.description}</p>
                </div>
            ) : (
                <p>Select an item to see details here</p>
            )}
        </div>
    );
}