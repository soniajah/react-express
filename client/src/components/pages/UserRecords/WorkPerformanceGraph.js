import React from 'react';
import * as d3 from 'd3';

class WorkPerformanceGraph extends React.Component {
 constructor(props){
    super(props);
    this.myRef = React.createRef(); 
    console.log(props)
    this.dataset = [100, 200, 300, 400, 500];
    this.dataset2 = [100, 200, 300, 400, 200];
 }
 componentDidMount(){
    let size = 500;
    let svg = d3.select(this.myRef.current)
                .append('svg')
                .attr('width', size)
                .attr('height', size);
    let rect_width = 95;
    svg.selectAll('rect')
        .data(this.dataset)
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