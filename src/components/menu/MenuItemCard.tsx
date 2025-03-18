
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
      "p-4 rounded-lg bg-stories-cream/80 dark:bg-stories-dark/80 border border-stories-green/20 flex flex-col h-full",
      className
    )}>
      <div className="flex justify-between items-start mb-2">
        <h3 className="font-bold text-stories-green">{name}</h3>
        <span className="text-stories-green font-medium ml-2">{price}</span>
      </div>
      {description && <p className="text-stories-dark/70 dark:text-white/70 text-xs mb-3">{description}</p>}
      {image && (
        <div className="w-full h-32 rounded-md overflow-hidden mt-auto">
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover"
          />
        </div>
      )}
    </div>
  );
};

export default MenuItemCard;
