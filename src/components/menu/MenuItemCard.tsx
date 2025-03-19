
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
      "p-4 relative flex justify-between items-start border-b border-dashed border-stories-green/30 pb-4 mb-4 group hover:bg-stories-green/5 rounded-md transition-all duration-300",
      className
    )}>
      {/* Item details */}
      <div className="flex-1 pr-4">
        <div className="flex items-baseline gap-2 mb-1">
          <h3 className="font-playfair font-bold text-stories-green text-lg">{name}</h3>
          <div className="flex-grow border-b border-dotted border-stories-green/30"></div>
        </div>
        
        {description && (
          <p className="text-stories-dark/70 dark:text-white/70 text-sm italic mt-1">{description}</p>
        )}
      </div>
      
      {/* Price tag */}
      <div className="flex items-center whitespace-nowrap">
        <span className="text-stories-green font-playfair font-semibold text-md">
          {price}
        </span>
      </div>
      
      {/* Background image (subtle) */}
      {image && (
        <div className="absolute top-1/2 right-2 -translate-y-1/2 w-12 h-12 opacity-0 group-hover:opacity-10 transition-opacity duration-300">
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
