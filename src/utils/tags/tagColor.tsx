export default function getTagColor(category: string): string {
  switch (category) {
    case "fruta":
      return  "bg-orange-dark text-orange";
    case "legume":
      return "bg-green-dark text-green";
    case "bebida":
      return "bg-blue-dark text-blue";
    case "carne":
      return "bg-pink-dark text-pink";
    case "padaria":
      return "bg-yellow-dark text-yellow";
    default:
      return "bg-gray-100 text-gray-800 dark:bg-gray-200 dark:text-gray-800";
  }
}