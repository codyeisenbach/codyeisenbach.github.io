import React, { Component } from 'react';
import { Document } from 'react-pdf';
 
class Resume extends Component {

  render() {
 
    return (
        <Document src="../assets/FullStackResume.pdf"
        />
    );
  }
}

export default Resume;

