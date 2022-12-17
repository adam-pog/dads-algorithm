import React, { useState, useEffect } from 'react';
import './Numbers.scss';

class Numbers extends React.Component {
    constructor(props) {
        super(props)
        const possibleNums = [];
        for (var i = 1; i <= 70; i++) {
          possibleNums.push(i);
        }

        const index1 = Math.floor(Math.random() * 70)
        const number1 = possibleNums[index1]
        possibleNums.splice(index1, 1)

        const index2 = Math.floor(Math.random() * 69)
        const number2 = possibleNums[index2]
        possibleNums.splice(index2, 1)

        const index3 = Math.floor(Math.random() * 68)
        const number3 = possibleNums[index3]
        possibleNums.splice(index3, 1)


        const index4 = Math.floor(Math.random() * 67)
        const number4 = possibleNums[index4]
        possibleNums.splice(index4, 1)


        const index5 = Math.floor(Math.random() * 66)
        const number5 = possibleNums[index5]
        possibleNums.splice(index5, 1)

        function sorter(a, b) {
          if (a < b) return -1;  // any negative number works
          if (a > b) return 1;   // any positive number works
          return 0; // equal values MUST yield zero
        }

        this.state = {
            numbers: [
              number1,
              number2,
              number3,
              number4,
              number5
            ].sort(sorter),
            big: Math.floor(Math.random() * 25) +1
        }
    }

    render() {
      return (
        <div className='numbers-row'>
            <p className='slow1'>{this.state.numbers[0]}</p>
            <p className='slow2'>{this.state.numbers[1]}</p>
            <p className='slow3'>{this.state.numbers[2]}</p>
            <p className='slow4'>{this.state.numbers[3]}</p>
            <p className='slow5'>{this.state.numbers[4]}</p>
            <p className='slow6'>{this.state.big}</p>
        </div>
      );
    }
  }

export default Numbers;
