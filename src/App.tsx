import { useState } from 'react';
import './App.css';
import { Donut } from './components/Donut';
import { Gradient } from './global/Types';

function App() {
  const [percentage, setPercentage] = useState(70);
  const [gradientRotation, setGradientRotation] = useState(0);
  const [strokeWidth, setStrokeWidth] = useState(4);
  const [showCode, setShowCode] = useState(false);
  const [gradientList, setGradientList] = useState<Gradient[]>([
    { offset: 16, stopColor: '#CE9FFC' },
    { offset: 85, stopColor: '#7367F0' },
  ]);

  const handleSlider = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value: number = parseInt(event.target.value);
    setPercentage(value);
  };

  const handleSliderStroke = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value: number = parseInt(event.target.value);
    setStrokeWidth(value);
  };

  const handleGradientRotation = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value: number = parseInt(event.target.value);
    setGradientRotation(value);
  };

  const handleShowCode = () => setShowCode((prev) => !prev);

  const handleNewColor = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { gradientIndex } = event.currentTarget.dataset;
    const index = Number(gradientIndex);
    const { value } = event.target;
    const newList = [...gradientList];
    newList[index].stopColor = value;

    setGradientList(newList);
  };

  const handleAddNewColor = () => {
    const colorToAdd: Gradient = { offset: 0, stopColor: '#000000' };
    setGradientList((prev) => [...prev, colorToAdd]);
  };

  const handleDeleteGradient = (event: React.FormEvent<HTMLButtonElement>) => {
    const { gradientIndex } = event.currentTarget.dataset;
    const index = Number(gradientIndex);
    const newList = [...gradientList];
    newList.splice(index, 1);

    setGradientList(newList);
  };

  const handleOffsetEdit = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    const { gradientIndex } = event.target.dataset;
    const index = Number(gradientIndex);
    const newList = [...gradientList];
    newList[index].offset = parseInt(value);

    setGradientList(newList);
  };

  return (
    <div className="app">
      <div className="color-list">
        <button onClick={handleAddNewColor}>Adicionar Cor</button>
        <ul>
          {gradientList.map((gradient, index) => {
            return (
              <li key={`gradientItem-${index}`}>
                <div className="field--color">
                  <input
                    data-gradient-index={index}
                    type="color"
                    value={gradient.stopColor}
                    onChange={handleNewColor}
                  />
                  {gradient.stopColor}
                </div>
                <input
                  className="input--range"
                  data-gradient-index={index}
                  onChange={handleOffsetEdit}
                  value={gradient.offset}
                  type="range"
                />

                <button
                  data-gradient-index={index}
                  onClick={handleDeleteGradient}
                >
                  X
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="chart-box">
        <Donut
          percentage={percentage}
          strokeWidth={strokeWidth}
          showCode={showCode}
          gradients={gradientList}
          gradientRotation={gradientRotation}
        />
      </div>

      <button onClick={handleShowCode}>
        {`${showCode ? `Ocultar` : `Exibir`} código`}
      </button>

      <div className="field">
        <label htmlFor="">Porcentagem</label>
        <input
          className="input--range"
          type="range"
          onChange={handleSlider}
          min={0}
          max={100}
          value={percentage}
        />
        <span>{percentage}%</span>
      </div>
      <div className="field">
        <label htmlFor="">Largura da linha</label>
        <input
          className="input--range"
          type="range"
          onChange={handleSliderStroke}
          min={1}
          max={4}
          value={strokeWidth}
        />
      </div>
      <div className="field">
        <label htmlFor="">Rotação do Gradiente</label>
        <input
          className="input--range"
          type="range"
          onChange={handleGradientRotation}
          min={0}
          max={360}
          value={gradientRotation}
        />
      </div>
    </div>
  );
}

export default App;
