import React from "react";
import { Article } from "./ArticleCard";

type Props = {
  mostViewed: Article | null;
  mostShared: Article | null;
};

const Highlights: React.FC<Props> = ({ mostViewed, mostShared }) => (
  <div className="grid ...">
    {/* Most Viewed */}
    {/* Most Shared */}
  </div>
);

export default Highlights;
