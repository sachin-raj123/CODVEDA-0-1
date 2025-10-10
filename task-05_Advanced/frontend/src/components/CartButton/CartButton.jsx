import { useNavigate } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";

const CartButton = () => {
  const navigate = useNavigate();

  const handleCartClick = () => {
    const token = localStorage.getItem("token");
    if (token) {
      // Navigate to profile page with cart section
      navigate("/profile?section=cart");
    } else {
      // Navigate to login page
      navigate("/login");
    }
  };

  return (
    <button
      onClick={handleCartClick}
      className="bg-gradient-to-r from-primary to-secondary text-white px-4 py-1 rounded-full flex items-center gap-2"
    >
      Cart <FaCartShopping className="text-xl" />
    </button>
  );
};

export default CartButton;
