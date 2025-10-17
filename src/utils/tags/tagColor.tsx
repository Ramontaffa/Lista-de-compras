// returns appropriate tailwind CSS classes for tag colors based on category 
export default function getTagColor(category: string): string {
  switch (category) {
    case "Fruta":
      return  "bg-orange-dark text-orange";
    case "Legume":
      return "bg-green-dark text-green";
    case "Bebida":
      return "bg-blue-dark text-blue";
    case "Carne":
      return "bg-pink-dark text-pink";
    case "Padaria":
      return "bg-yellow-dark text-yellow";
    default:
      return "bg-gray-100 text-gray-800 dark:bg-gray-200 dark:text-gray-800";
  }
}