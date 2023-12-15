export const getRunStatus = (store) => store.results.runStatus;

export const getLastError = (store) => store.results.error;

export const getPlotDataByType = (store, plot) => {
  if (plot.id.startsWith("CONC.")) {
  } else if (plot.id.startsWith("ENV.")) {
    let which = plot.id.substring(4);
    switch (which) {
      case "temperature":
        return {
          data: store.results.data.times.map((elem, idx) => {
            return { time: elem, value: store.results.data.temperature[idx] };
          }),
          label: "Temperature",
          units: "K",
        };
      case "pressure":
        return {
          data: store.results.data.times.map((elem, idx) => {
            return { time: elem, value: store.results.data.pressure[idx] };
          }),
          label: "Pressure",
          units: "Pa",
        };
    }
    console.log("Environment", plot.id.substring(4));
  }
};

export const getResultTimes = (store) => store.results.data.times;

export const getResultTemperatures = (store) => store.results.data.temperatures;

export const getResultPressures = (store) => store.results.data.pressures;

export const getResultSpeciesConcentration = (store, speciesName) =>
  store.results.data.species.filter((species) => {
    return species.name === speciesName;
  })[0]?.concentration;

export const getResultIntegratedReactionRate = (store, reactionIndex) =>
  store.results.data.integrated_rates[reactionIndex];

export const getResults = (store) => {
  return {
    species_concentrations: store.results.data.species,
    integrated_reaction_rates: store.results.data.integrated_rates,
  };
};
