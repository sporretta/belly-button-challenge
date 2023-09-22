//Pull in data

const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";


// Fetch the JSON data and console log it
d3.json(url).then(function(data) {
  console.log(data);

});
//Build bar chart function
function barChart(samples) {
    d3.json(url).then(function(data){
        let samps= Object.values(data.samples);   
            console.log(samps);
        let sample_id= samps.filter(s=>s.id === samples)[0];
        console.log(sample_id) ;  
        let otu_ids= Object.values(sample_id.otu_ids).map(id=>`OTU ${id}`);
        let sample_values= Object.values(sample_id.sample_values);
        let otu_labels= Object.values(sample_id.otu_labels); 
        let bar = [{
            x: sample_values.slice(0,10).reverse(),
            y: otu_ids.slice(0,10).reverse(),
            type: "bar",
            orientation:"h",
            text: otu_labels.slice(0,10).reverse()
          }];
        
          let layout = {
            height: 600,
            width: 800
          };
        
          Plotly.newPlot("bar", bar, layout);
    })

};
barChart("941")


//Build bubble chart function
function bubbleChart(samples) {
    d3.json(url).then(function(data){
        let samps= Object.values(data.samples);   
            console.log(samps);
        let sample_id= samps.filter(s=>s.id === samples)[0];
        console.log(sample_id) ;  
        let otu_ids= Object.values(sample_id.otu_ids).map(id=>`OTU ${id}`);
        let sample_values= Object.values(sample_id.sample_values);
        let otu_labels= Object.values(sample_id.otu_labels); 
        let bubble = [{
            x: otu_ids,
            y: sample_values,
            mode: `markers`,
            text: otu_labels,
            marker: {
              color: otu_ids,
              size: sample_values,
              opacity: 0.4
            }
          }];
        
          let layout = {
            height: 600,
            width: 800
          };
        
          Plotly.newPlot("bubble", bubble, layout);
    })

};
bubbleChart("941")
//Create init function with names to dropdowns