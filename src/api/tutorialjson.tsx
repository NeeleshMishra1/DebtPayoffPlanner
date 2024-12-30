import Icon from "../assets";

const slides = [
    {
      key: 'k1',
      title: 'Welcome !',
      image: Icon.splace,
      text: 'Thank you for choosing Debt Payoff Planner to be part of your debt-free journey. Let`s quickly review what`s ahead ',
      backgroundColor: '#E3F6FA',
    },
    {
      key: 'k2',
      title: 'Step 1 - Plan',
      image: Icon.splace,
      text: 'You`ll get an optimized payoff plan after entering some basic info.',
      backgroundColor: '#E3F6FA',
    },
    {
      key: 'k3',
      title: 'Step 2 - Track ',
      image: Icon.splace,
      text: 'You`ll tackle the plan step-by-step with the super easy tracker',
      backgroundColor: '#E3F6FA',
    },
    {
      key: 'k4',
      title: 'Step 3 - Celebrate',
      image: Icon.splace,
      text: 'You`ll stay motivated by seeing your progress visualized and celebrating every small win along the way',
      backgroundColor: '#E3F6FA',
    },
    {
      key: 'k5',
      title: 'Start your journey',
      image: Icon.splace,
      text: 'Before we start, create an account. This ensures access on multiple devices, security, data backups, etc.',
      backgroundColor: '#E3F6FA',
    },
  ];




  const data = [
    {
      name: "Seoul",
      population: 21500000,
      color: "rgba(131, 167, 234, 1)",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: "Toronto",
      population: 2800000,
      color: "#F00",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: "Beijing",
      population: 527612,
      color: "red",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    
  ];


  const LimeChart = {
    labels: ["Nov 2024", "Dec 2024", "jan 2025", "Feb 2025"],
    datasets: [
      {
        data: [60,50,40,30,15,10, 0],
        color: (opacity = 1) => `rgba(46, 189, 232, ${opacity})`,
        strokeWidth: 2 
      }
    ],
  };

  export  {slides,data,LimeChart};






  