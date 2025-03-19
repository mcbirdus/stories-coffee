
import { FC } from "react";
import { cn } from "@/lib/utils";
import { PlusCircle } from "lucide-react";

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
      "mt-8 mb-12",
      className
    )}>
      <div className="flex items-center gap-2 mb-4">
        <PlusCircle className="h-5 w-5 text-stories-green" />
        <h3 className="font-bold text-xl text-stories-green font-playfair">ADD-ONS</h3>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {items.map((item, index) => (
          <div 
            key={index} 
            className="p-3 rounded-lg bg-white dark:bg-stories-dark border border-stories-green/20 shadow-sm hover:shadow-md transition-all duration-200"
          >
            <div className="flex justify-between items-start">
              <h4 className="font-medium text-stories-green">{item.name}</h4>
              <span className="text-stories-green text-sm bg-stories-green/10 px-2 py-0.5 rounded-full">{item.price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddOnsCard;
