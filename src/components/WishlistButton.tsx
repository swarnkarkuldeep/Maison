import { Button } from "@/components/ui/button";
import { useWishlist } from "@/contexts/WishlistContext";

interface WishlistButtonProps {
  product: {
    id: number;
    name: string;
    price: string;
    image: string;
    category: string;
  };
  size?: "sm" | "default" | "lg";
  className?: string;
}

export function WishlistButton({ product, size = "default", className = "" }: WishlistButtonProps) {
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const isWishlisted = isInWishlist(product.id);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (isWishlisted) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      className={`rounded-full ${className}`}
      onClick={handleClick}
      aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
    >
      {isWishlisted ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-5 w-5 text-red-500 ${size === "sm" ? "h-4 w-4" : size === "lg" ? "h-6 w-6" : ""}`}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
            clipRule="evenodd"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-5 w-5 text-foreground/70 hover:text-foreground ${
            size === "sm" ? "h-4 w-4" : size === "lg" ? "h-6 w-6" : ""
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      )}
    </Button>
  );
}
