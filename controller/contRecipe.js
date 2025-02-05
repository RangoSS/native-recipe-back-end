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
      const userId = req.user.id; // Access the user ID from the middleware
        console.log('see user id from ',userId)
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

  export const getRecipeTest = async (req, res) => {
    try {
      
      const recipes = await Recipe.find();
  
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
  

  export const updateRecipe = async (req, res) => {
    try {
        const { recipeId } = req.params;  // Recipe ID from the URL parameter
        const { name, ingredients, instructions, category, preparationTime, cookingTime, servings } = req.body;

        // Extract userId from the authenticated user (set in middleware)
        const userId = req.user.id;

        // Find the recipe by its ID and ensure it belongs to the authenticated user
        const recipe = await Recipe.findOne({ _id: recipeId, userId });

        if (!recipe) {
            return res.status(404).json({ message: "Recipe not found or not authorized to update" });
        }

        // Update the recipe with new values
        recipe.name = name || recipe.name;
        recipe.ingredients = ingredients || recipe.ingredients;
        recipe.instructions = instructions || recipe.instructions;
        recipe.category = category || recipe.category;
        recipe.preparationTime = preparationTime || recipe.preparationTime;
        recipe.cookingTime = cookingTime || recipe.cookingTime;
        recipe.servings = servings || recipe.servings;

        // Save the updated recipe to the database
        await recipe.save();

        // Respond with the updated recipe
        return res.status(200).json({
            message: "Recipe updated successfully",
            recipe,
        });
    } catch (error) {
        console.error("Error updating recipe:", error.message);
        return res.status(500).json({ message: "Server error", error: error.message });
    }
};

export const deleteRecipe = async (req, res) => {
  try {
      const { recipeId } = req.params;  // Recipe ID from the URL parameter

      // Extract userId from the authenticated user (set in middleware)
      const userId = req.user.id;

      // Find and delete the recipe by its ID and ensure it belongs to the authenticated user
      const result = await Recipe.deleteOne({ _id: recipeId, userId });

      if (result.deletedCount === 0) {
          return res.status(404).json({ message: "Recipe not found or not authorized to delete" });
      }

      // Respond with a success message
      return res.status(200).json({
          message: "Recipe deleted successfully",
      });
  } catch (error) {
      console.error("Error deleting recipe:", error.message);
      return res.status(500).json({ message: "Server error", error: error.message });
  }
};
