import { Apple, Beef, Milk, Carrot, Sandwich} from "lucide-react";

export default function TagIcon({ category }: { category: string }) {
  switch (category) {
    case "fruta":
      return <Apple role="img" aria-label="fruta" className="h-4 w-4" />;
        case "padaria":
      return <Sandwich role="img" aria-label="padaria"  className="h-4 w-4"/>;
        case "legume":
      return <Carrot role="img" aria-label="legume" className="h-4 w-4" />;
        case "bebida":
      return <Milk role="img" aria-label="bebida" className="h-4 w-4" />;
        case "carne":
      return <Beef role="img" aria-label="carne" className="h-4 w-4" />;
    default:
      return null;
  }
}