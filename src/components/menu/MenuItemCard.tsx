
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
      "flex items-center gap-4 py-2 border-b border-stories-green/10 last:border-0",
      className
    )}>
      {image && (
        <div className="w-12 h-12 flex-shrink-0 rounded-md overflow-hidden">
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <div className="flex-grow flex justify-between items-center">
        <div>
          <h3 className="text-sm font-medium">{name}</h3>
          {description && <p className="text-stories-dark/70 dark:text-white/70 text-xs mt-1">{description}</p>}
        </div>
        <span className="text-sm font-medium ml-2 flex-shrink-0">{price}</span>
      </div>
    </div>
  );
};

export default MenuItemCard;
