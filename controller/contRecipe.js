import { Recipe } from "../models/employee.js";  // Make sure this path is correct



export const postRecipe = async (req, res) => {
  try {

    console.log('loo user',req.user)
      // Destructure recipe details from the request body
      const {
          name,
          ingredients,
          instructions,
          category,
          preparationTime,
          cookingTime,
          servings,
  
      } = req.body;

      // Extract `userId` from authenticated user (assumes middleware sets req.user) is getting data from token
      const userId = req.user.id;
     // console.log("userId:", userId);  // Debugging line to ensure userId is being passed

      // Validate required fields
      if (!name || !ingredients || !instructions || !category || !preparationTime || !cookingTime || !servings) {
          return res.status(400).json({ message: "All required fields must be provided" });
      }

      // Create a new recipe
      const newRecipe = new Recipe({
          name,
          ingredients,
          instructions,
          category,
          preparationTime,
          cookingTime,
          servings,
          userId, // Link recipe to authenticated user
      });

      // Save the recipe to the database
      await newRecipe.save();

      // Respond with the created recipe
      return res.status(201).json({
          message: "Recipe created successfully",
          recipe: newRecipe,
      });
  } catch (error) {
      console.error("Error posting recipe:", error.message);
      return res.status(500).json({ message: "Server error", error: error.message });
  }
};

export const getRecipe = async (req, res) => {
    try {
        const {userId}=req.query;
      // Fetch all recipes from the database
      const recipes = await Recipe.find({userId: userId});
  
      // Check if recipes are found
      if (recipes.length === 0) {
        return res.status(404).json({
          message: "No recipes found.",
        });
      }
  
      // Return success response with the recipes
      return res.status(200).json({
        message: "Recipes retrieved successfully",
        recipes,
      });
    } catch (error) {
      // Log the error and return a server error response
      console.error('Error retrieving recipes:', error.message);
      return res.status(500).json({
        message: "Server error",
        error: error.message,
      });
    }
  };
  