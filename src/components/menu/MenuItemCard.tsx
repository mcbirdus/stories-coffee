
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
      "flex items-start gap-4 p-4 rounded-lg bg-white dark:bg-stories-dark/60 shadow-sm hover:shadow-md transition-shadow mb-3",
      className
    )}>
      {image && (
        <div className="w-16 h-16 sm:w-20 sm:h-20 flex-shrink-0 rounded-md overflow-hidden">
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <div className="flex-grow">
        <div className="flex justify-between items-start mb-1">
          <h3 className="font-bold">{name}</h3>
          <span className="text-stories-green font-medium ml-2 flex-shrink-0">{price}</span>
        </div>
        {description && <p className="text-stories-dark/70 dark:text-white/70 text-sm">{description}</p>}
      </div>
    </div>
  );
};

export default MenuItemCard;
