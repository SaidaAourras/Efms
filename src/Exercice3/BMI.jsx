import React, { useReducer } from 'react';

const initialState = {
  weight: '',
  height: '',
  bmi: null,
  message: '',
  isGreen : false,
  isRed : false,
  isOrange : false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_WEIGHT':
      return { ...state, weight: action.payload };
    case 'SET_HEIGHT':
      return { ...state, height: action.payload };
    case 'CALCULATE_BMI': {
      const weight = parseFloat(state.weight);
      const height = parseFloat(state.height)/100 ; 
      
      if (!weight || !height) {
        return { ...state, bmi: null, message: 'Please enter valid weight and height.' };
      }

      const calculatedBMI = weight / (height* height);
      let message = '';

      if (calculatedBMI >19 && calculatedBMI <25) {
        message = 'Normal';
        state.isGreen = true;
      } else if (calculatedBMI < 19) {
        message = 'Sous poids';
        state.isRed =true
      } else if (calculatedBMI >25) {
        message = 'surpoids';
        state.isOrange = true
      } 
      return { ...state, bmi: calculatedBMI.toFixed(2), message };
    }
    case 'RESET':
      return initialState;
    default:
      return state;
  }
};

const BMI = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleWeightChange = (e) => {
    dispatch({ type: 'SET_WEIGHT', payload: e.target.value });
  };

  const handleHeightChange = (e) => {
    dispatch({ type: 'SET_HEIGHT', payload: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (state.weight && state.height) {
      dispatch({ type: 'CALCULATE_BMI' });
    } else {
      dispatch({ type: 'RESET' }); 
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">BMI Calculator</h2>
      <form onSubmit={handleSubmit} className="bg-light p-4 rounded shadow">
        <div className="mb-3">
          <label className="form-label">
            Weight (kg):
          </label>
          <input
            type="number"
            className="form-control"
            value={state.weight}
            onChange={handleWeightChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">
            Height (cm):
          </label>
          <input
            type="number"
            className="form-control"
            value={state.height}
            onChange={handleHeightChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">
          Calculate BMI
        </button>
      </form>
      {state.bmi && (
        <div className="mt-4 text-center">
          <h3>Your BMI: {state.bmi}</h3>
          <p style={{ color: state.isRed ? "red" : state.isGreen ? "green" : state.isOrange ? "orange" : "black" }}>
            {state.message}
          </p>
        </div>
      )}
    </div>
  );
};

export default BMI;
