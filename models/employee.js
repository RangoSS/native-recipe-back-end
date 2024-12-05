import mongoose,{ model, Schema } from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    surname: { type: String, required: true },
    idNumber: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, required: true },
    designation: { type: String, required: true },
    joining_date: { type: String, required: true },
    salary: { type: String, required: true },
    active: { type: Boolean, default: true },
    phone: { type: String, required: true },
    address: { type: String, required: true }
  },
  { timestamps: true } // Adds `createdAt` and `updatedAt` fields automatically
);

// Export the User model
export const User = mongoose.models.User || model("User", userSchema);


// Define Recipe Schema
// Define the Recipe Schema
const recipeSchema = new mongoose.Schema(
    {
      name: { type: String, required: true }, // Recipe name
      ingredients: { type: String, required: true }, // Array of ingredient strings
      instructions: { type: String, required: true }, // Preparation instructions
      category: { type: String, required: true }, // Category (e.g., Dessert, Main Course)
      preparationTime: { type: String, required: true }, // Time in minutes
      cookingTime: { type: String, required: true }, // Time in minutes
      servings: { type: String, required: true }, // Number of servings
      image: { type: String }, // Image URL or path (optional)
      userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // Link to the user who created the recipe
    },
    { timestamps: true } // Adds `createdAt` and `updatedAt` fields automatically
  );
  
  // Export the Recipe model
  export const Recipe = mongoose.models.Recipe || model("Recipe", recipeSchema);