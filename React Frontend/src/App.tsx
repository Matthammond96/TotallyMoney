import React from 'react';
import { Navigation } from './components/navigation'
import { HeaderBanner, EligabilityBanner } from './components/headerBanner'
import { ContentContainer } from './components/contentContainer'
import { EligiblityForm } from './components/eligiblityForm'

function App() {
  return (
    <div className="App">
      <Navigation />

      <div id="main-content">
      <HeaderBanner>
        <EligabilityBanner />
      </HeaderBanner>

      <ContentContainer>
        <EligiblityForm />
      </ContentContainer>
      
      </div>

    </div>
  );
}

export default App;
