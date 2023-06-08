const calculateImc = async (weight, height) => {
  if (isNaN(weight) || isNaN(height)) {
    Promise.reject(new Error("arguments must be type number"));
  } else {
    return weight / (height * height);
  }
};

const showResult = async (weight, height) => {
  try {
    calculateImc(weight, height);
    const result = await calculateImc(weight, height);
    if (result < 18.5) console.log(`thin ${result}`);
    else if (result < 25) console.log(`normal ${result}`);
    else if (result < 30) console.log(`overweight ${result}`);
    else if (result < 40) console.log(`obesity ${result}`);
    else console.log("several obesity");
  } catch (error) {
    console.log(error);
  }
};

showResult(71, 1.74);
showResult(48, 1.6);
showResult(71, "text");
showResult(82, 1.72);
showResult(120, 1.8);
