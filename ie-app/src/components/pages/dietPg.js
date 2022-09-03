import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import  "../general/NewCard.css";

export default function Diet() {
    let nav = useNavigate()
    const recipeHandler = () => {
        nav("recipe")
    }
    const mealplanHandler = () => {
        nav("meal-plan")
    }
    return (
        <>
         <div className="newCard" onClick={recipeHandler}>
          <div className="content">
            <div className="front">
              <h3 className="title">Recipe</h3>
              <p className="subtitle">Click me :)</p>
            </div>

            <div className="back">
              <p className="description">
                Hungry Yet? 
              </p>
            </div>
          </div>
        </div>

        <div className="newCard2" onClick={mealplanHandler}>
          <div className="content">
            <div className="front">
              <h3 className="title">Meal plan</h3>
              <p className="subtitle">Click me :)</p>
            </div>

            <div className="back">
              <p className="description">
                Cannot Decide What to Eat?
              </p>
            </div>
          </div>
        </div>
        </>
    )
}