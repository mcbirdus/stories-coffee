
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
      "p-5 rounded-lg bg-white dark:bg-stories-dark border border-stories-green/20 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full",
      className
    )}>
      {image && (
        <div className="w-full h-40 rounded-md overflow-hidden mb-4">
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
      )}
      <div className="flex justify-between items-start mb-2">
        <h3 className="font-bold text-stories-green text-lg font-playfair">{name}</h3>
        <span className="text-stories-green font-medium ml-2 bg-stories-green/10 px-2 py-0.5 rounded-full text-sm">{price}</span>
      </div>
      {description && (
        <p className="text-stories-dark/70 dark:text-white/70 text-sm italic mb-3">{description}</p>
      )}
    </div>
  );
};

export default MenuItemCard;
