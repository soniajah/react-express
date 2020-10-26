import React from 'react';
import * as d3 from 'd3';

class WorkPerformanceGraph extends React.Component {
 constructor(props){
    super(props);
    this.myRef = React.createRef();   
 }

 componentDidMount() {
  let size = 500;
  this.svg = d3.select(this.myRef.current)
  .append('svg')
  .attr('width', size)
  .attr('height', size);
 }

 componentDidUpdate(){
   let size = 500;
   let dataset = [];
   this.props.userWorkPerformance.forEach(entry => {
     dataset.push(entry.workPerformance * 100)
   })

    let rect_width = 95;
    this.svg.selectAll('rect')
        .data(dataset)
        .enter()
        .append('rect')
        .attr('x', (d, i) => 5 + i*(rect_width + 5))
        .attr('y', d => size - d)
        .attr('width', rect_width / 2)
        .attr('height', d => d)
        .attr('fill', 'teal');
 }
 render(){
  return (
    <div ref={this.myRef}>
    </div>
  );
 }
 
}
export default WorkPerformanceGraph;