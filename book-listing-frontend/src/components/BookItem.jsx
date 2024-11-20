import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import CSS for toast

const BookItem = ({ book, onDelete }) => {
  const handleDelete = async (e) => {
    e.preventDefault();
    try {
      // Call the onDelete function with the book ID
      await onDelete(book._id);
      toast.success("Book successfully deleted!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
      });
    } catch (error) {
      toast.error("Failed to delete the book. Please try again.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
      });
    }
  };

  return (
    <div className="border border-gray-200 rounded-lg shadow-md p-6 flex justify-between items-start bg-white hover:shadow-lg transition-shadow">
      <div>
        <h3 className="text-xl font-semibold text-gray-800">{book.title}</h3>
        <p className="text-sm text-gray-500 mt-1">
          Author: <span className="text-gray-700 font-medium">{book.author}</span>
        </p>
        <p className="text-sm text-gray-600 mt-2">{book.description}</p>
      </div>
      <button
        className="bg-red-500 text-white font-medium text-sm px-4 py-2 rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
        onClick={handleDelete}
      >
        Delete
      </button>
    </div>
  );
};

export default BookItem;

