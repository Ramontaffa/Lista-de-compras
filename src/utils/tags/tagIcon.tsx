import { Apple, Beef, Milk, Carrot, Sandwich} from "lucide-react";

// return the appropriate icon based on the category
export default function TagIcon({ category }: { category: string }) {
  switch (category) {
    case "Fruta":
      return <Apple role="img" aria-label="Fruta" className="h-4 w-4" />;
        case "Padaria":
      return <Sandwich role="img" aria-label="Padaria"  className="h-4 w-4"/>;
        case "Legume":
      return <Carrot role="img" aria-label="Legume" className="h-4 w-4" />;
        case "Bebida":
      return <Milk role="img" aria-label="Bebida" className="h-4 w-4" />;
        case "Carne":
      return <Beef role="img" aria-label="Carne" className="h-4 w-4" />;
    default:
      return null;
  }
}