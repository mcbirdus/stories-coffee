
import { FC } from "react";
import { cn } from "@/lib/utils";

interface MenuItemCardProps {
  name: string;
  description?: string;
  price: string;
  image?: string;
  className?: string;
}

const MenuItemCard: FC<MenuItemCardProps> = ({
  name,
  description,
  price,
  image,
  className,
}) => {
  return (
    <div className={cn(
      "p-6 rounded-lg bg-white dark:bg-stories-dark border border-stories-green/20 shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden",
      className
    )}>
      <div className="relative z-10">
        <div className="flex justify-between items-start gap-3 mb-3">
          <h3 className="font-bold text-stories-green text-xl font-playfair">{name}</h3>
          <span className="text-stories-green font-semibold px-3 py-1 rounded-full text-sm bg-stories-green/10 whitespace-nowrap">{price}</span>
        </div>
        
        {description && (
          <p className="text-stories-dark/70 dark:text-white/70 text-sm italic mb-4">{description}</p>
        )}
      </div>
      
      {image && (
        <div className="absolute top-0 right-0 w-20 h-20 opacity-10 -mr-2 -mt-2">
          <img 
            src={image} 
            alt="" 
            className="w-full h-full object-cover rounded-full"
          />
        </div>
      )}
    </div>
  );
};

export default MenuItemCard;
