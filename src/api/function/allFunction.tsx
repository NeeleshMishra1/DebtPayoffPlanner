const chartConfig = {
    backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#08130D",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2, 
    barPercentage: 0.5,
    useShadowColorFromDataset: false 
  };



  const chartConfig2 = {
    backgroundColor: "#fff", 
    backgroundGradientFrom: "#fff", 
    backgroundGradientTo: "#fff", 
    color: (opacity = 1) => `rgba(46, 173, 232, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`, 
    propsForBackgroundLines: {
      strokeDasharray: "", 
      stroke: "#e3e3e3",
      strokeWidth: 1, 
    },
    propsForHorizontalLabels: {
      stroke: "black", 
      strokeWidth: 0.5,
    },
    propsForVerticalLabels: {
      stroke: "black", 
      strokeWidth: 0.5,
    },
  };


  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  export {chartConfig, chartConfig2, getRandomColor};