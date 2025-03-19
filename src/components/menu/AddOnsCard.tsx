
import { FC } from "react";
import { cn } from "@/lib/utils";
import { Sparkles } from "lucide-react";

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
      "mt-4 mb-8 bg-stories-cream/20 dark:bg-stories-green/5 rounded-lg p-4 border border-stories-green/10",
      className
    )}>
      <div className="flex items-center gap-2 mb-3 border-b border-stories-green/20 pb-2">
        <Sparkles className="h-4 w-4 text-stories-green" />
        <h3 className="font-bold text-lg text-stories-green font-playfair italic">ADD ONS</h3>
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
        {items.map((item, index) => (
          <div 
            key={index} 
            className="flex justify-between items-center border-b border-dotted border-stories-green/20 pb-1 mb-1"
          >
            <span className="text-stories-dark/90 dark:text-white/90 text-sm">{item.name}</span>
            <span className="text-stories-green text-sm font-medium">{item.price}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddOnsCard;
