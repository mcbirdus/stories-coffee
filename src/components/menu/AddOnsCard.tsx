
import { FC } from "react";
import { cn } from "@/lib/utils";

export interface AddOnItem {
  name: string;
  price: string;
}

interface AddOnsCardProps {
  items: AddOnItem[];
  className?: string;
}

const AddOnsCard: FC<AddOnsCardProps> = ({ items, className }) => {
  if (!items || items.length === 0) return null;
  
  return (
    <div className={cn(
      "p-4 rounded-lg bg-stories-cream/80 dark:bg-stories-dark/80 border border-stories-green/20 mt-4 mb-8",
      className
    )}>
      <h3 className="font-bold text-stories-green mb-3">ADD-ONS</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {items.map((item, index) => (
          <div key={index} className="flex justify-between items-center py-1 border-b border-stories-green/10 last:border-0">
            <span className="text-sm">{item.name}</span>
            <span className="text-sm font-medium">{item.price}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddOnsCard;
