
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
      "mt-6 mb-10",
      className
    )}>
      <h3 className="font-bold text-xl text-stories-green mb-3 border-b border-stories-green/30 pb-2">ADD-ONS</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {items.map((item, index) => (
          <div key={index} className="p-4 rounded-lg bg-stories-cream/80 dark:bg-stories-dark/80 border border-stories-green/20">
            <div className="flex justify-between items-start">
              <h4 className="font-bold text-stories-green">{item.name}</h4>
              <span className="text-stories-green font-medium ml-2">{item.price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddOnsCard;
